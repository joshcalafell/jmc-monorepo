# JMC Monorepo

✨ **This workspace has been generated by [Nx, Smart Monorepos · Fast CI.](https://nx.dev)** ✨

## Proof of concept

So the goals of this project were to create a monorepo with to apps and a common shared library which contains a drag and drop library that is easily imported into multipple apps and/or other libraries. All components are standalone, and use Angular's new flow-control template syntax. I'm using CDK's Drag and Drop module, nut other than that, this is a purposely uncomplicated app.

## Video of application

![POC Video](https://imgur.com/E52gTkB.gif)
As you can see, the drag and drop works fine.

## The dependency graph

![Nx Graph Results](https://imgur.com/A1Gbvw0.png)

You can run `nx graph` to see the following:

As you can see, my-ui-lib (which contains the drag-drop feature component and service) is used by both `my-app` and `my-second-app`. As the app becomes more complex, this becoms very u seful.

## Nx Cloud

Running `nx run-many -t lint test build e2e-ci -p my-app my-second-app my-ui-lib` will fire off all tests, linting, and builds of all my apps and libs.

![NxCloud Results](https://imgur.com/EVe1M6I.png)

## Storybook configuration

![Storybook Video](https://imgur.com/MoECtBW.gif)

To get this web tool running, run the following command:

`nx storybook my-ui-lib`

This will let stakeholders, designers, and others to see and play with `DragDropComponent` and functionality in action as standalone stries in isolation!

## GitHub Actions

This project is set up to use node 20 for GitHub Actions

## Integrate with editors

Enhance your Nx experience by installing [Nx Console](https://nx.dev/nx-console) for your favorite editor. Nx Console
provides an interactive UI to view your projects, run tasks, generate code, and more! Available for VSCode, IntelliJ and
comes with a LSP for Vim users.

## Start the application

Run `npx nx serve my-app` to start the development server. Happy coding!

## Build for production

Run `npx nx build my-app` to build the application. The build artifacts are stored in the output directory (e.g. `dist/` or `build/`), ready to be deployed.

## Running tasks

To execute tasks with Nx use the following syntax:

```
npx nx <target> <project> <...options>
```

You can also run multiple targets:

```
npx nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```
npx nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/features/run-tasks).

## Set up CI!

Nx comes with local caching already built-in (check your `nx.json`). On CI you might want to go a step further.

- [Set up remote caching](https://nx.dev/features/share-your-cache)
- [Set up task distribution across multiple machines](https://nx.dev/nx-cloud/features/distribute-task-execution)
- [Learn more how to setup CI](https://nx.dev/recipes/ci)

## Explore the project graph

Run `npx nx graph` to show the graph of the workspace.
It will show tasks that you can run with Nx.

- [Learn more about Exploring the Project Graph](https://nx.dev/core-features/explore-graph)

## Connect with us!

- [Join the community](https://nx.dev/community)
- [Subscribe to the Nx Youtube Channel](https://www.youtube.com/@nxdevtools)
- [Follow us on Twitter](https://twitter.com/nxdevtools)

##
