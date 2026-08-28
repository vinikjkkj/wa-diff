__d(
  "AdsPECrepeNavigationProviderPlugin",
  ["AdsPERouterHelper"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        initialState: function () {
          var e,
            t =
              (e = r("AdsPERouterHelper").getRouter()) == null
                ? void 0
                : e.getParams(),
            n = (t && Number.parseInt(t.current_step, 10)) || 0;
          return { currentStep: n };
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
