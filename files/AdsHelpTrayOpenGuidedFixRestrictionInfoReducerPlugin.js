__d(
  "AdsHelpTrayOpenGuidedFixRestrictionInfoReducerPlugin",
  ["AdsHelpTrayNavigationHelper", "CSS"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = t.navigationStack,
            r = n.data.violationType,
            a = o("AdsHelpTrayNavigationHelper").getCurrentNavigationState(t);
          return (
            (a.contentType !== "GUIDED_FIX_RESTRICTION_INFO" ||
              a.violationType !== r) &&
              (e = o("AdsHelpTrayNavigationHelper").concatToNavigationStack(e, {
                contentType: "GUIDED_FIX_RESTRICTION_INFO",
                violationType: r,
              })),
            document.body &&
              o("CSS").conditionClass(document.body, "has-helptray", !0),
            babelHelpers.extends({}, t, { isTrayOpen: !0, navigationStack: e })
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
