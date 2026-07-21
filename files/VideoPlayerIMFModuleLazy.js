__d(
  "VideoPlayerIMFModuleLazy",
  ["JSResourceForInteraction"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("JSResourceForInteraction")(
        "VideoPlayerIMFModuleForLazyLoading",
      ).__setRef("VideoPlayerIMFModuleLazy"),
      s = null,
      u = {
        getModuleIfRequireable: function () {
          return e.getModuleIfRequireable();
        },
        load: function () {
          return (s == null && (s = e.load()), s);
        },
      },
      c = u;
    l.default = c;
  },
  98,
);
