export const projectsSelector = ({ projects }) => Object.values(projects);

export const searchProjectsSelector = (value) => {
  return ({ projects }) =>
    Object.values(projects).filter(({ name }) =>
      name.toLowerCase().includes(value.toLowerCase())
    );
};
