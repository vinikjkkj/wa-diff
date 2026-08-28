__d(
  "AdsHelpTrayPushToNavigationStackReducerPlugin",
  ["AdsHelpTrayNavigationHelper"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e =
            n.contentType === "HOME"
              ? []
              : o("AdsHelpTrayNavigationHelper").concatToNavigationStack(
                  t.navigationStack,
                  n,
                );
          return babelHelpers.extends({}, t, { navigationStack: e });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
