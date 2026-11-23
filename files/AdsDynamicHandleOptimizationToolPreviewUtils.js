__d(
  "AdsDynamicHandleOptimizationToolPreviewUtils",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {
      callToActionType: "LEARN_MORE",
      cta: s._(/*BTDS*/ "").toString(),
    };
    function u(e) {
      return {
        imageMediaData: { height: 500, imageURL: e, width: 500 },
        videoMediaData: null,
      };
    }
    function c(e) {
      return {
        imageMediaData: null,
        videoMediaData: {
          videoID: null,
          videoURL: e,
          videoSubtitleURL: null,
          videoSubtitleOffset: null,
          isLongVideo: null,
          isLoopVideo: !0,
        },
      };
    }
    function d(e) {
      if (e != null) {
        var t = e.map(function (e) {
          return e.type === "video" ? c(e.media_url) : u(e.media_url);
        });
        return { mediaDataCells: t };
      }
      return { mediaDataCells: [] };
    }
    function m(e) {
      var t = (e == null ? void 0 : e.type) === "video";
      return {
        mediaDataCells: [
          t
            ? c(e == null ? void 0 : e.video_url)
            : u(e == null ? void 0 : e.picture),
        ],
      };
    }
    function p(e, t) {
      var n, r;
      return {
        checkoutSetting: "off",
        id: e.product_id,
        imageURI: t.image_url,
        name: (n = t == null ? void 0 : t.name) != null ? n : "",
        hasCoordinates: e.has_coordinates,
        positionX: e.x,
        positionY: e.y,
        priceLabel: (r = t == null ? void 0 : t.price) != null ? r : "",
        salePriceLabel: null,
      };
    }
    function _(e) {
      var t,
        n = [];
      return (
        e == null ||
          (t = e.product_tags) == null ||
          (t = t.data) == null ||
          t.forEach(function (t) {
            var r,
              o = t.product_id;
            if (o != null) {
              var a =
                e == null || (r = e.tagged_products) == null
                  ? void 0
                  : r.data.find(function (e) {
                      return e.id === o.toString();
                    });
              a != null && n.push(p(t, a));
            }
          }),
        n
      );
    }
    function f(e) {
      var t = [];
      if (e.type === "carousel") {
        var n;
        e == null ||
          (n = e.children_media) == null ||
          n.forEach(function (e) {
            t.push(_(e));
          });
      } else t.push(_(e));
      return e.has_product_tags === !0 ? { productTags: t } : null;
    }
    function g(t) {
      var n;
      return {
        version: "v2",
        callToActionData: {
          callToActionDataCells: new Array(
            t.type === "carousel" && t.children_media != null
              ? t.children_media.length
              : 1,
          ).fill(e),
          disclaimerCTAData: null,
        },
        commonData: {
          adType:
            (t == null ? void 0 : t.type) === "carousel"
              ? "carousel"
              : "single_media",
          apiAdFormat:
            (t == null ? void 0 : t.is_story) === !0
              ? "INSTAGRAM_STORY"
              : "INSTAGRAM_STANDARD",
        },
        textData: {
          primaryText: (n = t == null ? void 0 : t.caption) != null ? n : "",
          headlines: null,
        },
        mediaData:
          (t == null ? void 0 : t.type) === "carousel"
            ? d(t == null ? void 0 : t.children_media)
            : m(t),
        identityData: {
          brandedContentSponsorName: "",
          isPageBacked: !1,
          profileName: "",
          profilePictureUrl: "",
        },
        perceptualHashResult: null,
        productListData: null,
        shoppingProductTagsCollectionsData: f(t),
      };
    }
    l.updatePreviewPropertySpec = g;
  },
  226,
);
