// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Robotics and neural engineering research projects at UC Berkeley, Yonsei University, and KIST.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching-amp-service",
          title: "teaching &amp; service",
          description: "Graduate Student Instructor (GSI) roles, mentoring, professional service, and community outreach.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "projects-3d-neuronal-culture-on-3d-graphene",
          title: '3D Neuronal Culture on 3D Graphene',
          description: "Three-dimensional neuronal culture on three-dimensional graphene scaffolds. Yonsei University and KIST.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3d-neuronal-culture/";
            },},{id: "projects-acoustic-tactile-sensing",
          title: 'Acoustic Tactile Sensing',
          description: "Acoustic tactile sensing for robotic manipulation and interaction. UC Berkeley.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/acoustic-tactile-sensing/";
            },},{id: "projects-brain-machine-interface",
          title: 'Brain–Machine Interface',
          description: "Minimally invasive ECoG and brain–machine interface research. Yonsei University and KIST.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/brain-machine-interface/";
            },},{id: "projects-dorsal-grasper",
          title: 'Dorsal Grasper',
          description: "Wearable assistive grasping for people with spinal cord injury. UC Berkeley, Embodied Dexterity Group.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dorsal-grasper/";
            },},{id: "projects-smart-suction-cup",
          title: 'Smart Suction Cup',
          description: "Multi-chamber suction end effector with internal airflow sensing and haptic search for robust industrial grasping. UC Berkeley, Embodied Dexterity Group.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/smart-suction-cup/";
            },},{id: "projects-ultrasound-neuromodulation",
          title: 'Ultrasound Neuromodulation',
          description: "Ultrasound-based neuromodulation. Yonsei University and KIST.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ultrasound-neuromodulation/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/CV_Jungpyo.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%75%6E%67%70%79%6F%6C%65%65@%62%65%72%6B%65%6C%65%79.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Jungpyo-L", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/jungpyo-lee-18b96bb7", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=Y-o1GEQAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
