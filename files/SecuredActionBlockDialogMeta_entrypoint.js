__d(
  "SecuredActionBlockDialogMeta.entrypoint",
  [
    "JSResourceForInteraction",
    "SecuredActionBlockDialogMetaQuery$Parameters",
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
                parameters: r("SecuredActionBlockDialogMetaQuery$Parameters"),
                variables: {
                  accountType: "META_ACCOUNT",
                  context: e ? babelHelpers.extends({}, e) : void 0,
                  sensitiveAction: o,
                },
              },
            },
          }
        );
      },
      root: r("JSResourceForInteraction")(
        "SecuredActionBlockDialogMeta.react",
      ).__setRef("SecuredActionBlockDialogMeta.entrypoint"),
    };
    l.default = e;
  },
  98,
);
