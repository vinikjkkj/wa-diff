__d(
  "ProfileCometDirectoryAuthenticityModal.entrypoint",
  [
    "JSResourceForInteraction",
    "ProfileCometDirectoryAuthenticityModalQuery$Parameters",
    "WebPixelRatio",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      getPreloadProps: function (t) {
        return {
          queries: {
            userKey: {
              parameters: n(
                "ProfileCometDirectoryAuthenticityModalQuery$Parameters",
              ),
              variables: { scale: o("WebPixelRatio").get(), userID: t.userID },
            },
          },
        };
      },
      root: r("JSResourceForInteraction")(
        "ProfileCometDirectoryAuthenticityModal.react",
      ).__setRef("ProfileCometDirectoryAuthenticityModal.entrypoint"),
    };
    l.default = e;
  },
  98,
);
