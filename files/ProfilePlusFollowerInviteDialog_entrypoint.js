__d(
  "ProfilePlusFollowerInviteDialog.entrypoint",
  [
    "JSResourceForInteraction",
    "ProfilePlusFollowerInviteDialogQuery$Parameters",
    "WebPixelRatio",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("JSResourceForInteraction")(
        "ProfilePlusFollowerInviteDialog.react",
      ).__setRef("ProfilePlusFollowerInviteDialog.entrypoint"),
      s = {
        getPreloadProps: function (t) {
          return {
            queries: {
              queryReference: {
                options: { fetchPolicy: "network-only" },
                parameters: r(
                  "ProfilePlusFollowerInviteDialogQuery$Parameters",
                ),
                variables: {
                  profileID: t.routeParams.id,
                  scale: o("WebPixelRatio").get(),
                },
              },
            },
          };
        },
        root: e,
      },
      u = s;
    l.default = u;
  },
  98,
);
