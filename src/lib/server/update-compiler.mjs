import path from "path";

let updateCompiler = (compiler) => {
  const config = compiler.options;
  config.entry = {
    main: {
      import: [
        path.resolve(import.meta.dirname, "../client/index.js"),
        path.resolve(import.meta.dirname, "../client/hot/dev-server.js"),
        ...config.entry.main.import,
      ],
    },
  };
  compiler.hooks.entryOption.call(config.context, config.entry);
};

export default updateCompiler;
