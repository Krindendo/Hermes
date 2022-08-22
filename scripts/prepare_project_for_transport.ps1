#Get-ChildItem -Path $Destination -Recurse | Remove-Item -force -recurse

Remove-Item -LiteralPath "./node_modules" -Force -Recurse
Remove-Item -LiteralPath "./packages/config/node_modules" -Force -Recurse

Remove-Item -LiteralPath "./packages/logger/.turbo" -Force -Recurse
Remove-Item -LiteralPath "./packages/logger/dist" -Force -Recurse
Remove-Item -LiteralPath "./packages/logger/coverage" -Force -Recurse
Remove-Item -LiteralPath "./packages/logger/node_modules" -Force -Recurse

Remove-Item -LiteralPath "./apps/native/node_modules" -Force -Recurse

Remove-Item -LiteralPath "./apps/server/dist" -Force -Recurse
Remove-Item -LiteralPath "./apps/server/.turbo" -Force -Recurse
Remove-Item -LiteralPath "./apps/server/coverage" -Force -Recurse
Remove-Item -LiteralPath "./apps/server/node_modules" -Force -Recurse

Remove-Item -LiteralPath "./apps/web/.next" -Force -Recurse
Remove-Item -LiteralPath "./apps/web/.turbo" -Force -Recurse
Remove-Item -LiteralPath "./apps/web/coverage" -Force -Recurse
Remove-Item -LiteralPath "./apps/web/node_modules" -Force -Recurse