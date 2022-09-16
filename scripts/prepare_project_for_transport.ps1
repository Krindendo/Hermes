# if ($host.Version -gt [Version]'7.0.0.0'){
#     "The minimum required version for PowerShell is version 7"
#     Exit
# }

$Paths = , "./node_modules" # main
$Paths += , "./packages/config/node_modules" # config
$Paths += , "./packages/logger/.turbo", "./packages/logger/dist", "./packages/logger/coverage", "./packages/logger/node_modules" # logger
$Paths += , "./apps/native/.expo", "./apps/native/node_modules" # native
$Paths += , "./apps/server/.turbo", "./apps/server/dist", "./apps/server/coverage", "./apps/server/node_modules" # server
$Paths += , "./apps/web/.turbo", "./apps/web/.next", "./apps/web/coverage", "./apps/web/node_modules" # web

# for cypress
$Paths += , "./apps/web/cypress/screenshots", "./apps/web/cypress/videos"

ForEach ($Path in $Paths) {
  if (Test-Path -LiteralPath $Path) {
    Remove-Item -LiteralPath $Path -Force -Recurse
  }
}

# It is faster to delete it synchronous
# workflow Remove-Folders
# {
#   param (
#     [string[]] $Paths
#   )

#   ForEach -Parallel -Throttlelimit 6 ($Path in $Paths) {
#     if(Test-Path -LiteralPath $Path){
#       Remove-Item -LiteralPath $Path -Force -Recurse
#     }
#   }
# }

# Remove-Folders -Paths $Paths | Get-Counter