__d(
  "WebBloksHasteEnvironment",
  [
    "AcqWebBloksComponents",
    "CoreWebBloksComponents",
    "HasteSharedWebBloksComponents",
    "StdlibWebBloksComponents",
    "WebBloksHasteEnvironmentDynamic",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
        r < t;
        r++
      )
        n[r - 1] = arguments[r];
      return o(
        "WebBloksHasteEnvironmentDynamic",
      ).createWebBloksHasteEnvironment.apply(
        void 0,
        [
          e,
          {
            components: babelHelpers.extends(
              {},
              o("CoreWebBloksComponents").COMPONENTS,
              o("StdlibWebBloksComponents").COMPONENTS,
              o("AcqWebBloksComponents").COMPONENTS,
              o("HasteSharedWebBloksComponents").COMPONENTS,
            ),
          },
        ].concat(n),
      );
    }
    l.createWebBloksHasteEnvironment = e;
  },
  98,
);
