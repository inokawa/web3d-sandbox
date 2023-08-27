export default async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(glsl|vs|fs|vert|frag)$/,
    type: "asset/source",
  });

  return config;
};
