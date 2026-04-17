__d(
  "CometProfileVerificationBadgePopover.entrypoint",
  [
    "CometProfileVerificationBadgePopoverQuery$Parameters",
    "JSResourceForInteraction",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      getPreloadProps: function (t) {
        var e = t.profileID;
        return {
          queries: {
            queryReference: {
              parameters: n(
                "CometProfileVerificationBadgePopoverQuery$Parameters",
              ),
              variables: { profileID: e },
            },
          },
        };
      },
      root: r("JSResourceForInteraction")(
        "CometProfileVerificationBadgePopover.react",
      ).__setRef("CometProfileVerificationBadgePopover.entrypoint"),
    };
    l.default = e;
  },
  98,
);
