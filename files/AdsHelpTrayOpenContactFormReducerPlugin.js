__d(
  "AdsHelpTrayOpenContactFormReducerPlugin",
  ["AdsHelpTrayNavigationHelper", "AdsHelpTrayUILogger", "CSS", "last"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e,
            a = t.navigationStack;
          if (!t.isTrayOpen) {
            var i;
            o("AdsHelpTrayUILogger").logHelpTrayOpen(
              (i = n.source) != null ? i : "contact_support",
            );
          }
          return (
            ((e = r("last")(a)) == null ? void 0 : e.contentType) !==
              "SUPPORT_FORM" &&
              (a = o("AdsHelpTrayNavigationHelper").concatToNavigationStack(a, {
                contentType: "SUPPORT_FORM",
                id: n.assetID,
                isReadOnly: n.isReadOnly,
                lbdIssueOrPlanID: n.lbdIssueID,
                shouldPreSelectAsset: n.shouldPreSelectAsset,
                shouldSkipGranularAssetSelection:
                  n.shouldSkipGranularAssetSelection,
                issueDescription: n.issueDescription,
                showGuidanceCard: n.showGuidanceCard,
                lbdCaller: n.lbdCaller,
                source: n.source,
              })),
            document.body &&
              o("CSS").conditionClass(document.body, "has-helptray", !0),
            babelHelpers.extends({}, t, { isTrayOpen: !0, navigationStack: a })
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
