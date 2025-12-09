import { useTranslation } from 'react-i18next';
import { PROJECTS } from '../constants';

export const useTranslatedProjects = () => {
    const { t } = useTranslation();

    return PROJECTS.map(project => ({
        ...project,
        category: t(`projectData.${project.id}.category`),
        title: t(`projectData.${project.id}.title`),
        desc: t(`projectData.${project.id}.desc`),
        fullDescription: t(`projectData.${project.id}.fullDescription`),
        details: (t(`projectData.${project.id}.details`, { returnObjects: true }) as string[]) || project.details
    }));
};
