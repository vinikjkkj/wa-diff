__d(
  "FXAccountsCenterPasskeyCreationUpsellRoot.entrypoint",
  [
    "FXAccountsCenterPasskeyCreationUpsellRootQuery$Parameters",
    "JSResourceForInteraction",
    "XFBCAAPasskeyCreationEntryPointUtils.facebook",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      getPreloadProps: function (t) {
        var e,
          a,
          i,
          l,
          s = r("nullthrows")(
            o("XFBCAAPasskeyCreationEntryPointUtils.facebook").fromJSEnum(
              (e = t.entrypoint) != null
                ? e
                : (a = t.routeProps) == null
                  ? void 0
                  : a.entrypoint,
            ),
            "passkey entrypoint cannot be null in FXAccountsCenterPasskeyCreationUpsellRoot entrypoint",
          ),
          u = { entrypoint: s };
        return {
          extraProps: {
            entrypoint:
              (i = t.entrypoint) != null
                ? i
                : (l = t.routeProps) == null
                  ? void 0
                  : l.entrypoint,
            showSuccessDialog: t.showSuccessDialog,
            variant: t.variant,
          },
          queries: {
            query: {
              parameters: n(
                "FXAccountsCenterPasskeyCreationUpsellRootQuery$Parameters",
              ),
              variables: u,
            },
          },
        };
      },
      root: r("JSResourceForInteraction")(
        "FXAccountsCenterPasskeyCreationUpsellRoot.react",
      ).__setRef("FXAccountsCenterPasskeyCreationUpsellRoot.entrypoint"),
    };
    l.default = e;
  },
  98,
);
