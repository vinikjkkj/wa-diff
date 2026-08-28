__d(
  "AdsHelpTrayOpenCaseDetailsActionReducerPlugin",
  ["AdsHelpTrayNavigationHelper", "CSS"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = t.navigationStack,
            r = n.data,
            a = r.callerID,
            i = r.caseID;
          return (
            (e = []),
            (e = o("AdsHelpTrayNavigationHelper").concatToNavigationStack(e, {
              contentType: "SUPPORT_CASE",
              id: i,
              callerID: a,
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
