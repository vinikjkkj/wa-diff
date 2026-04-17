__d(
  "GroupsCometGroupRuleEntityDialog.entrypoint",
  [
    "GroupsCometGroupRuleEntityDialogQuery$Parameters",
    "JSResourceForInteraction",
    "WebPixelRatio",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        getPreloadProps: function (t) {
          var e = t.groupRuleID;
          return {
            queries: {
              groupRuleEntityDialogQueryReference: {
                parameters: r(
                  "GroupsCometGroupRuleEntityDialogQuery$Parameters",
                ),
                variables: { groupRuleID: e, scale: o("WebPixelRatio").get() },
              },
            },
          };
        },
        root: r("JSResourceForInteraction")(
          "GroupsCometGroupRuleEntityDialog.react",
        ).__setRef("GroupsCometGroupRuleEntityDialog.entrypoint"),
      },
      s = e;
    l.default = s;
  },
  98,
);
