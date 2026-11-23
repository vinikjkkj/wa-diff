__d(
  "AdsAdvancedPreviewV2MediaSourcingVariationClientSidePreviewPlugin",
  ["AdsAdvancedPreviewClientSideSelectedMediaUtils", "justknobx", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set(["advertiser-provided", "gen-ai", "related-media"]),
      s = new Set(["SINGLE_IMAGE", "SINGLE_VIDEO"]),
      u = {
        forVariationPlugin: "media-sourcing",
        type: "advanced_preview/variation/client_side_preview",
        key: "media-sourcing",
        isCagPreviewSpecRequired: function () {
          return !0;
        },
        isClientSidePreviewSupported: function (n) {
          var t = n.config,
            o = n.previewMedia;
          return (
            (t == null ? void 0 : t.type) === "media-sourcing" &&
            s.has(t.format) &&
            o != null &&
            e.has(o.assetSource) &&
            r("justknobx")._("539") &&
            r("qex")._("5703") === !0
          );
        },
        applyToRenderSpec: function (t, n, r) {
          var e = n.config;
          return (e == null ? void 0 : e.type) !== "media-sourcing"
            ? t
            : o(
                "AdsAdvancedPreviewClientSideSelectedMediaUtils",
              ).withServerPrimaryText(
                e.format === "SINGLE_IMAGE"
                  ? o(
                      "AdsAdvancedPreviewClientSideSelectedMediaUtils",
                    ).withSelectedImage(t, d(e.media))
                  : e.format === "SINGLE_VIDEO"
                    ? o(
                        "AdsAdvancedPreviewClientSideSelectedMediaUtils",
                      ).withSelectedVideo(t, m(e.media, t, r))
                    : t,
              );
        },
      },
      c = u;
    function d(e) {
      return { hash: p(e, "hash"), url: p(e, "url") };
    }
    function m(e, t, n) {
      var r = o(
          "AdsAdvancedPreviewClientSideSelectedMediaUtils",
        ).getCagPreviewVideo(t, n),
        a = r.videoID;
      return babelHelpers.extends({}, r, {
        thumbnailURL:
          a != null && p(e, "video_id") === a ? p(e, "thumbnail_url") : null,
      });
    }
    function p(e, t) {
      var n = e == null ? void 0 : e.get(t);
      return typeof n == "string" && n !== "" ? n : null;
    }
    l.default = c;
  },
  98,
);
