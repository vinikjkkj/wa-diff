__d(
  "ProfileCometComposerDialog.entrypoint",
  [
    "JSResourceForInteraction",
    "ProfileCometComposerRootQuery$Parameters",
    "WebPixelRatio",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      getPreloadProps: function (t) {
        var e = t.profileID;
        return {
          queries: {
            composerQueryReference: {
              options: { fetchPolicy: "store-or-network" },
              parameters: r("ProfileCometComposerRootQuery$Parameters"),
              variables: {
                callerName:
                  "fx_product_foundation_client_FXOnline_client_cache",
                customPartnerParams: [
                  { key: "CROSSPOSTING_DESTINATION_APP", value: "IG" },
                  { key: "CROSSPOSTING_SHARE_TO_SURFACE", value: "FEED" },
                  { key: "SHOULD_RETURN_AUTO_XPOST_SETTING", value: "true" },
                ],
                isLinksInPostEnabled: r("gkx")("9599") || r("gkx")("21736"),
                privacySelectorRenderLocation: "COMET_COMPOSER",
                profile_id: e,
                scale: o("WebPixelRatio").get(),
                serviceNames: ["CROSS_POSTING_SETTING"],
              },
            },
          },
        };
      },
      root: r("JSResourceForInteraction")(
        "ProfileCometComposerDialog.react",
      ).__setRef("ProfileCometComposerDialog.entrypoint"),
    };
    l.default = e;
  },
  98,
);
