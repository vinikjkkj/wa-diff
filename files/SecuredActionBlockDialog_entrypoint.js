__d(
  "SecuredActionBlockDialog.entrypoint",
  [
    "JSResourceForInteraction",
    "SecuredActionBlockDialogQuery$Parameters",
    "XFBSensitiveAction.facebook",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      getPreloadProps: function (t) {
        var e = t.context,
          n = t.sensitive_action,
          o = null;
        return (
          n != null &&
            (o = r("XFBSensitiveAction.facebook").cast(n.toUpperCase())),
          {
            queries: {
              query: {
                options: { fetchPolicy: "store-and-network" },
                parameters: r("SecuredActionBlockDialogQuery$Parameters"),
                variables: {
                  accountType: "FACEBOOK",
                  context: e ? babelHelpers.extends({}, e) : void 0,
                  sensitiveAction: o,
                },
              },
            },
          }
        );
      },
      root: r("JSResourceForInteraction")(
        "SecuredActionBlockDialog.react",
      ).__setRef("SecuredActionBlockDialog.entrypoint"),
    };
    l.default = e;
  },
  98,
);
