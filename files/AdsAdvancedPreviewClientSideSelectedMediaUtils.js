__d(
  "AdsAdvancedPreviewClientSideSelectedMediaUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      var n,
        r = t.hash,
        o = t.url,
        a =
          r != null
            ? (n = e.variationData) == null
              ? void 0
              : n.imageURLsByHash[r]
            : null;
      return p(e, "IMAGE", {
        imageHash: r,
        imageURL: a != null ? a : o,
        videoID: null,
        videoURL: null,
      });
    }
    function l(e, t) {
      var n,
        r,
        o,
        a = t.isMediaPending,
        i = t.thumbnailURL,
        l = t.videoID,
        s =
          l != null && !a
            ? (n = e.variationData) == null
              ? void 0
              : n.videosByID[l]
            : null;
      return p(e, "VIDEO", {
        imageHash: null,
        imageURL: a
          ? null
          : (r = s == null ? void 0 : s.thumbnailURL) != null
            ? r
            : i,
        videoID: l,
        videoURL: (o = s == null ? void 0 : s.videoURL) != null ? o : null,
      });
    }
    function s(e) {
      var t,
        n =
          (t = e.renderProps) == null || (t = t.textData) == null
            ? void 0
            : t.primaryText;
      return n == null || n === "" || n === e.message
        ? e
        : babelHelpers.extends({}, e, { message: n, messageEntityRanges: [] });
    }
    function u(e) {
      var t,
        n =
          (t = m(e)) == null || (t = t.images) == null
            ? void 0
            : t[e.previewMediaIndex];
      return {
        hash: f(n == null ? void 0 : n.hash),
        url: f(n == null ? void 0 : n.url),
      };
    }
    function c(e, t) {
      var n,
        r =
          (n = m(t)) == null || (n = n.videos) == null
            ? void 0
            : n[t.previewMediaIndex],
        o = f(r == null ? void 0 : r.video_id);
      return {
        isMediaPending: o != null && d(e, t, o),
        thumbnailURL: f(r == null ? void 0 : r.image_url),
        videoID: o,
      };
    }
    function d(e, t, n) {
      var r,
        o,
        a,
        i,
        l = new Set(
          (r = m(t)) == null || (r = r.videos) == null
            ? void 0
            : r.map(function (e) {
                return e.video_id;
              }),
        );
      return (
        ((o = t.cagGroupSpec.origins) == null ? void 0 : o[0]) ===
          "creative_flex" &&
        ((a =
          (i = e.variationData) == null
            ? void 0
            : i.associatedMultiMediaVideoIDsByVideoID[n]) != null
          ? a
          : []
        ).some(function (e) {
          return l.has(e);
        })
      );
    }
    function m(e) {
      var t,
        n = e.cagGroupSpec,
        r = e.previewGroup;
      return r !== "all" ? ((t = n.groups) == null ? void 0 : t[r]) : null;
    }
    function p(e, t, n) {
      var r,
        o = e.cards,
        a = o[0],
        i = babelHelpers.arrayLikeToArray(o).slice(1);
      return a == null
        ? e
        : babelHelpers.extends({}, e, {
            cards: [_(a, n)].concat(i),
            loading: babelHelpers.extends({}, e.loading, {
              image:
                ((r = e.loading) == null ? void 0 : r.image) === !0 ||
                (n.imageURL == null && e.renderProps == null),
            }),
            mediaFormat: t,
          });
    }
    function _(e, t) {
      return babelHelpers.extends({}, e, {
        media: babelHelpers.extends({}, e.media, t, {
          imageCrops: null,
          originalImageURL: null,
        }),
      });
    }
    function f(e) {
      return e != null && e !== "" ? e : null;
    }
    ((i.withSelectedImage = e),
      (i.withSelectedVideo = l),
      (i.withServerPrimaryText = s),
      (i.getCagPreviewImage = u),
      (i.getCagPreviewVideo = c));
  },
  66,
);
