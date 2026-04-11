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
    function e() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return o(
        "WebBloksHasteEnvironmentDynamic",
      ).createWebBloksHasteEnvironment.apply(
        void 0,
        [
          {
            components: babelHelpers.extends(
              {},
              o("CoreWebBloksComponents").COMPONENTS,
              o("StdlibWebBloksComponents").COMPONENTS,
              o("AcqWebBloksComponents").COMPONENTS,
              o("HasteSharedWebBloksComponents").COMPONENTS,
            ),
          },
        ].concat(t),
      );
    }
    l.createWebBloksHasteEnvironment = e;
  },
  98,
);
