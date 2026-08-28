__d(
  "FBWebBloksContainerConfigs",
  [
    "FBWebBloksBottomsheetContainer",
    "FBWebBloksBottomsheetContainerConfig",
    "FBWebBloksFullscreenContainer",
    "FBWebBloksFullscreenContainerConfig",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "\u4161",
      u = "\u4132",
      c =
        ((e = {}),
        (e[s] = {
          ContainerComponent: r("FBWebBloksBottomsheetContainer"),
          ContainerConfig: r("FBWebBloksBottomsheetContainerConfig"),
        }),
        (e[u] = {
          ContainerComponent: r("FBWebBloksFullscreenContainer"),
          ContainerConfig: r("FBWebBloksFullscreenContainerConfig"),
        }),
        e),
      d = babelHelpers.extends({}, c, {
        "bk.data.screen.containerconfig.bottomsheet.Fb": {
          ContainerComponent: r("FBWebBloksBottomsheetContainer"),
          ContainerConfig: r("FBWebBloksBottomsheetContainerConfig"),
        },
        "bk.data.screen.containerconfig.fullscreen.Fb": {
          ContainerComponent: r("FBWebBloksFullscreenContainer"),
          ContainerConfig: r("FBWebBloksFullscreenContainerConfig"),
        },
      });
    l.CONTAINER_CONFIGS = d;
  },
  98,
);
