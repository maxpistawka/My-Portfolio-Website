
export enum SelectedPage {
    AboutMe = "aboutme",
    Experience = "experience",
    Projects = "projects",
    Contact =  "contact",
  }

  export interface ProjectType {
    icon: JSX.Element;
    title: string;
    description: string;
  }

  export interface ClassType {
    name: string;
    description?: string;
    image: string;

  }