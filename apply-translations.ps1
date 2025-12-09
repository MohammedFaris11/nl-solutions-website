# Script PowerShell pour modifier automatiquement Projects.tsx
# ===========================================================

$filePath = "c:\Users\MSI\Downloads\nl-solutions---excellence-industrielle (1)\components\Projects.tsx"

Write-Host "Lecture du fichier Projects.tsx..." -ForegroundColor Yellow

# Lire tout le contenu
$content = Get-Content $filePath -Raw -Encoding UTF8

# Modification 1: Ajouter l'import du hook après la ligne 3
$oldImport = "import { useTranslation } from 'react-i18next';
import { PROJECTS } from '../constants';"

$newImport = "import { useTranslation } from 'react-i18next';
import { useTranslatedProjects } from '../hooks/useTranslatedProjects';
import { PROJECTS } from '../constants';"

$content = $content -replace [regex]::Escape($oldImport), $newImport

# Modification 2: Remplacer la logique dans la fonction Projects
$oldCode = "export const Projects = ({ onProjectClick }: ProjectsProps) => {
  const { t } = useTranslation();
  const beiProjects = PROJECTS.filter(p => p.category.startsWith('BEI'));
  const betProjects = PROJECTS.filter(p => p.category.startsWith('BET'));"

$newCode = "export const Projects = ({ onProjectClick }: ProjectsProps) => {
  const { t } = useTranslation();
  const translatedProjects = useTranslatedProjects();
  const beiProjects = translatedProjects.filter(p => 
    p.category.includes('BEI') || p.category.includes('IEB')
  );
  const betProjects = translatedProjects.filter(p => 
    p.category.includes('BET') || p.category.includes('TEB')
  );"

$content = $content -replace [regex]::Escape($oldCode), $newCode

# Sauvegarder
Set-Content $filePath $content -Encoding UTF8 -NoNewline

Write-Host "✅ Modifications appliquées avec succès!" -ForegroundColor Green
Write-Host ""
Write-Host "Les projets seront maintenant traduits en français/anglais." -ForegroundColor Cyan
Write-Host "Rechargez la page pour voir les changements!" -ForegroundColor Cyan
