__d(
  "ProfileCometLockedProfileHomeDialog.entrypoint",
  [
    "JSResourceForInteraction",
    "ProfileCometLockedProfileHomeDialogQuery$Parameters",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        getPreloadProps: function () {
          return {
            queries: {
              cometLockProfileQueryReference: {
                parameters: n(
                  "ProfileCometLockedProfileHomeDialogQuery$Parameters",
                ),
                variables: {},
              },
            },
          };
        },
        root: r("JSResourceForInteraction")(
          "ProfileCometLockedProfileHomeDialog.react",
        ).__setRef("ProfileCometLockedProfileHomeDialog.entrypoint"),
      },
      s = e;
    l.default = s;
  },
  98,
);
