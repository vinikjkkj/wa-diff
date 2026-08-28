__d(
  "AdsHelpTrayOpenXfacAlrChatReducerPlugin",
  ["AdsHelpTrayNavigationHelper", "CSS"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = t.navigationStack,
            r = o("AdsHelpTrayNavigationHelper").getCurrentNavigationState(t);
          return (
            r.contentType !== "XFAC_ALR_CHAT" &&
              (e = o("AdsHelpTrayNavigationHelper").concatToNavigationStack(e, {
                contentType: "XFAC_ALR_CHAT",
                xfacAlrConversationalContextData:
                  n.xfacAlrConversationalContextData,
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
