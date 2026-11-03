__d(
  "ProfileCometActionFollowingMenu.entrypoint",
  [
    "JSResourceForInteraction",
    "ProfileCometActionFollowingMenuQuery$Parameters",
    "WebPixelRatio",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      getPreloadProps: function (t) {
        var e = t.profileID;
        return {
          queries: {
            queryReference: {
              parameters: r("ProfileCometActionFollowingMenuQuery$Parameters"),
              variables: { profileID: e, scale: o("WebPixelRatio").get() },
            },
          },
        };
      },
      root: r("JSResourceForInteraction")(
        "ProfileCometActionFollowingMenu.react",
      ).__setRef("ProfileCometActionFollowingMenu.entrypoint"),
    };
    l.default = e;
  },
  98,
);
