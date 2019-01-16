module.exports = function(plop) {
  // tslint
  plop.setGenerator("tslint setup", {
    description: "a proper configuration",
    prompts: [],
    actions: [
      {
        type: "add",
        force: true,
        path: "../../tslint.json",
        templateFile: "templates/tslint.json"
      }
    ]
  });

  // component
  plop.setGenerator("component (stateless)", {
    description: "function based component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "component name"
      }
    ],
    actions: [
      {
        type: "add",
        path: "../../src/component/{{dashCase name}}/index.tsx",
        templateFile: "templates/component.tsx.hbs"
      },
      {
        type: "add",
        path: "../../src/component/{{dashCase name}}/{{dashCase name}}.css",
        templateFile: "templates/emptystyle.css.hbs"
      },
    ]
  });

  // stateful container
  plop.setGenerator("container (stateful)", {
    description: "class based stateful component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "container name"
      }
    ],
    actions: [
      {
        type: "add",
        path: "../../src/container/{{dashCase name}}/index.tsx",
        templateFile: "templates/statefulcontainer.tsx.hbs"
      },
      {
        type: "add",
        path: "../../src/container/{{dashCase name}}/{{dashCase name}}.css",
        templateFile: "templates/emptystyle.css.hbs"
      },
    ]
  });

  // redux all in one
  plop.setGenerator("redux: state, reducer & actions", {
    description: "state, reducer, constants and action creator",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Reducer name"
      },
      {
        type: "input",
        name: "actiona",
        message: "First action name"
      },
      {
        type: "input",
        name: "actionb",
        message: "Second action name"
      }
    ],
    actions: [
      {
        type: "add",
        path: "../../src/store.tsx",
        templateFile: "templates/store.tsx.hbs"
      },
      {
        type: "add",
        path: "../../src/types/state.tsx",
        templateFile: "templates/state.tsx.hbs"
      },
      {
        type: "add",
        path: "../../src/constants/{{dashCase name}}.tsx",
        templateFile: "templates/actionconstants.tsx.hbs"
      },
      {
        type: "add",
        path: "../../src/actions/{{dashCase name}}.tsx",
        templateFile: "templates/action.tsx.hbs"
      },
      {
        type: "add",
        path: "../../src/reducers/{{dashCase name}}.tsx",
        templateFile: "templates/reducer.tsx.hbs"
      },
      {
        type: "add",
        force: true,
        path: "../../src/index.tsx",
        templateFile: "templates/indexwithstore.tsx.hbs"
      }
    ]
  });

  // redux container
  plop.setGenerator("container (redux)", {
    description: "redux based container",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "container name"
      }
    ],
    actions: [
      {
        type: "add",
        path: "../../src/container/{{dashCase name}}/index.tsx",
        templateFile: "templates/reduxcontainer.tsx.hbs"
      },
      {
        type: "add",
        path: "../../src/container/{{dashCase name}}/{{dashCase name}}.css",
        templateFile: "templates/emptystyle.css.hbs"
      },
    ]
  });
};
