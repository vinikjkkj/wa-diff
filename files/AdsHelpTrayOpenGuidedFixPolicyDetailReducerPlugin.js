__d(
  "AdsHelpTrayOpenGuidedFixPolicyDetailReducerPlugin",
  ["AdsHelpTrayNavigationHelper", "CSS"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e,
            r = t.navigationStack,
            a = n.data.violationType,
            i = n.data.adGroupID,
            l = n.data.showRestrictionInfo,
            s = n.data.supportContactFormData,
            u = o("AdsHelpTrayNavigationHelper").getCurrentNavigationState(t);
          return (
            (u.contentType !== "GUIDED_FIX_POLICY_SNIPPET" ||
              ((e = u.policyDetailExtraData) == null
                ? void 0
                : e.violationType) !== a) &&
              (r = o("AdsHelpTrayNavigationHelper").concatToNavigationStack(r, {
                contentType: "GUIDED_FIX_POLICY_SNIPPET",
                policyDetailExtraData: {
                  adGroupID: i,
                  violationType: a,
                  showRestrictionInfo: l,
                },
              })),
            document.body &&
              o("CSS").conditionClass(document.body, "has-helptray", !0),
            babelHelpers.extends({}, t, {
              isTrayOpen: !0,
              supportContactFormData: s,
              navigationStack: r,
            })
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
