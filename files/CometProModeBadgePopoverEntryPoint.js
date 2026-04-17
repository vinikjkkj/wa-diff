__d(
  "CometProModeBadgePopoverEntryPoint",
  ["CometProModeBadgePopoverQuery$Parameters", "JSResourceForInteraction"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      getPreloadProps: function (t) {
        var e = t.profileID,
          r = t.surface;
        return {
          queries: {
            queryReference: {
              parameters: n("CometProModeBadgePopoverQuery$Parameters"),
              variables: { profileID: e, surface: r },
            },
          },
        };
      },
      root: r("JSResourceForInteraction")(
        "CometProModeBadgePopover.react",
      ).__setRef("CometProModeBadgePopoverEntryPoint"),
    };
    l.default = e;
  },
  98,
);
