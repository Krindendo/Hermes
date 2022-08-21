#Get-ChildItem -Path $Destination -Recurse | Remove-Item -force -recurse

Remove-Item -LiteralPath "./node_modules" -Force -Recurse
Remove-Item -LiteralPath "./packages/eslint-config-custom/node_modules" -Force -Recurse
Remove-Item -LiteralPath "./packages/eslint-config-custom-server/node_modules" -Force -Recurse
Remove-Item -LiteralPath "./packages/jest-config-custom/node_modules" -Force -Recurse
Remove-Item -LiteralPath "./packages/jest-presets/node_modules" -Force -Recurse
Remove-Item -LiteralPath "./packages/logger/.turbo" -Force -Recurse
Remove-Item -LiteralPath "./packages/logger/dist" -Force -Recurse
Remove-Item -LiteralPath "./packages/logger/node_modules" -Force -Recurse
Remove-Item -LiteralPath "./apps/native/node_modules" -Force -Recurse
Remove-Item -LiteralPath "./apps/server/dist" -Force -Recurse
Remove-Item -LiteralPath "./apps/server/.turbo" -Force -Recurse
Remove-Item -LiteralPath "./apps/server/node_modules" -Force -Recurse
Remove-Item -LiteralPath "./apps/web/.next" -Force -Recurse
Remove-Item -LiteralPath "./apps/web/.turbo" -Force -Recurse
Remove-Item -LiteralPath "./apps/web/node_modules" -Force -Recurse