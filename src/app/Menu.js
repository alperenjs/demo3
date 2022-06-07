export const menu = [
  {
    id: "module_1",
    title: "Module 1",
    type: "module",
    icon: "flaticon2-checking",
    url: null,
    role: [1,2,3],
    subMenus: [
      {
        id: "menu-item-1",
        title: "Single Menu 1",
        type: "item",
        icon: "file",
        url: "/module_1/dashboard",
        role: [1, 2, 3],
      },
      {
        id: "parent-menu-1",
        title: "Parent Menu 1",
        type: "item",
        icon: "file",
        url: "/module_1/google-material",
        role: [1, 2, 3],
        children: [
          {
            id: "child-1",
            title: "Child 1",
            type: "item",
            icon: "file",
            url: "/module_1/google-material/inputs/test2",
            role: [1, 2, 3],
          },
          {
            id: "child-parent-1",
            title: "Child Parent 1",
            type: "item",
            icon: "file",
            url: "/module_1/google-material/inputs",
            role: [1, 2, 3],
            children: [
              {
                id: "child-2",
                title: "child 2-1",
                type: "item",
                icon: "file",
                url: "/module_1/google-material/inputs/test2",
                role: [1, 2, 3],
              },
              {
                id: "child-3",
                title: "child 2-2",
                type: "item",
                icon: "file",
                url: "/module_1/google-material/inputs/duru",
                role: [1, 2, 3],
              },
            ],
          },
        ],
      }
    ],
  },
  {
    id: "module_2",
    title: "Module 2",
    type: "module",
    icon: "flaticon2-crisp-icons",
    url: null,
    role: [1, 2, 3],
    subMenus: [
      {
        id: "single-example-1",
        title: "Single",
        type: "item",
        icon: "pie-chart",
        url: "/module_2/examplepage1",
        role: [1, 2, 3],
      },
    ],
  },
];
