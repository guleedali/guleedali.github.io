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
  },{id: "nav-people",
          title: "people",
          description: "The LAYERS group, founded 2025.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Peer-reviewed papers, newest first.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Curriculum vitae, November 2026.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-guleed-a-starts-new-position-as-assistant-professor-at-stony-brook-university",
          title: 'Guleed A. starts new position as Assistant Professor at Stony Brook University.',
          description: "",
          section: "News",},{id: "news-open-phd-positions",
          title: 'Open PhD positions',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-layers-agu25",
          title: 'LAYERS @ AGU25',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_3/";
            },},{id: "news-nu-instruments-was-on-site-in-july-2026-to-upgrade-our-multi-collector-icp-ms-we-now-have-a-nu-plasma-3",
          title: 'Nu Instruments was on site in July 2026 to upgrade our multi-collector ICP-MS....',
          description: "",
          section: "News",},{id: "news-agilent-delivered-and-installed-our-new-8900-triple-quadrupole-icp-ms-in-august-2026-and-it-is-running-smoothly-we-welcome-inquiries-from-anyone-interested-in-analyses-get-in-touch-by-email",
          title: 'Agilent delivered and installed our new 8900 triple-quadrupole ICP-MS in August 2026, and...',
          description: "",
          section: "News",},{id: "news-layers-gsa-connects-2026",
          title: 'LAYERS @ GSA Connects 2026',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_4/";
            },},{id: "projects-lakes-as-rain-gauges",
          title: 'Lakes as Rain Gauges',
          description: "stratigraphy + geomorphology + geochronology",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-when-ice-sheets-broke-the-rules",
          title: 'When Ice Sheets Broke the Rules',
          description: "stratigraphy + geochronology + geomorphology",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{
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
