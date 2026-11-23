__d(
  "AdsAdvancedPreviewV2CreativeAssetGroupVariationClientSidePreviewPlugin",
  ["AdsAdvancedPreviewClientSideSelectedMediaUtils", "justknobx", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set(["SINGLE_IMAGE", "SINGLE_VIDEO"]),
      s = {
        forVariationPlugin: "creative-asset-group",
        type: "advanced_preview/variation/client_side_preview",
        key: "creative-asset-group",
        isCagPreviewSpecRequired: function () {
          return !0;
        },
        isClientSidePreviewSupported: function (n) {
          var t = n.config;
          return (
            (t == null ? void 0 : t.type) === "creative-asset-group" &&
            e.has(t.format) &&
            t.group !== "all" &&
            t.cagUseCase == null &&
            r("justknobx")._("539") &&
            r("qex")._("5703") === !0
          );
        },
        applyToRenderSpec: function (t, n, r) {
          var e = n.config;
          return (e == null ? void 0 : e.type) !== "creative-asset-group"
            ? t
            : o(
                "AdsAdvancedPreviewClientSideSelectedMediaUtils",
              ).withServerPrimaryText(
                e.format === "SINGLE_IMAGE"
                  ? o(
                      "AdsAdvancedPreviewClientSideSelectedMediaUtils",
                    ).withSelectedImage(
                      t,
                      o(
                        "AdsAdvancedPreviewClientSideSelectedMediaUtils",
                      ).getCagPreviewImage(r),
                    )
                  : e.format === "SINGLE_VIDEO"
                    ? o(
                        "AdsAdvancedPreviewClientSideSelectedMediaUtils",
                      ).withSelectedVideo(
                        t,
                        o(
                          "AdsAdvancedPreviewClientSideSelectedMediaUtils",
                        ).getCagPreviewVideo(t, r),
                      )
                    : t,
              );
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
