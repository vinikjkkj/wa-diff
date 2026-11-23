__d(
  "AdsCreativeFlexAssetUtils",
  [
    "DeepRecordUtils",
    "emptyArray",
    "immutable",
    "justknobx",
    "memoizeWithArgsWeak",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["related_media"];
    function s(e) {
      var t = e.hash,
        n = e.image_crops,
        o = e.url;
      return t != null
        ? r("immutable").Map([["hash", t]])
        : o != null
          ? r("immutable").Map([["url", o]])
          : r("immutable").Map();
    }
    function u(e) {
      return e.map(s);
    }
    function c(e) {
      var t = e.original_video_id,
        n = e.thumbnail_id,
        o = e.thumbnail_source,
        a = e.thumbnail_url,
        i = e.video_id,
        l = t != null ? t : i;
      return r("immutable")
        .Map([
          ["video_id", l],
          ["thumbnail_id", n],
          ["thumbnail_url", a],
          ["thumbnail_source", o],
        ])
        .filter(Boolean);
    }
    function d(e) {
      return e.map(c);
    }
    function m(e) {
      var t = e.id,
        n = e.url;
      return t != null
        ? r("immutable").Map([["hash", t]])
        : n != null
          ? r("immutable").Map([["url", n]])
          : r("immutable").Map();
    }
    function p(e) {
      return e.map(m);
    }
    function _(e) {
      var t = e.id;
      return r("immutable")
        .Map([["video_id", t]])
        .filter(Boolean);
    }
    function f(e) {
      return e.map(_);
    }
    function g(e) {
      var t,
        n,
        r = D(e, "related_media");
      return {
        mssImageSpecs: (t = r == null ? void 0 : r.images) != null ? t : [],
        mssVideoSpecs: (n = r == null ? void 0 : r.videos) != null ? n : [],
      };
    }
    function h(e) {
      return e.video_id == null
        ? !0
        : e.original_video_id == null || e.original_video_id === e.video_id;
    }
    function y(e) {
      return e.image_crops != null;
    }
    function C(e, t) {
      return h(e) || v(e, t);
    }
    function b(e) {
      return [].concat(
        e.filter(function (t) {
          return C(t, e);
        }),
        e.filter(function (t) {
          return !C(t, e);
        }),
      );
    }
    function v(e, t) {
      if (h(e)) return !1;
      var n = t.find(function (n) {
        return L(e, n) && !S(e, t);
      });
      return n === e;
    }
    function S(e, t) {
      return R(t).has(e.original_video_id);
    }
    var R = r("memoizeWithArgsWeak")(function (e) {
      return new Set(
        e.filter(h).map(function (e) {
          var t = e.video_id;
          return t;
        }),
      );
    });
    function L(e, t) {
      return e.original_video_id === t.original_video_id;
    }
    function E(t, n) {
      var r = w(t, "images", n),
        o = w(t, "videos", n),
        a = t.related_media,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e);
      return babelHelpers.extends({}, i, {
        images: [].concat(r),
        videos: [].concat(o),
      });
    }
    function k(e) {
      return e == null
        ? null
        : Array.isArray(e)
          ? e.filter(function (e) {
              return typeof e == "string";
            })
          : typeof e == "object"
            ? Object.values(e).filter(function (e) {
                return typeof e == "string";
              })
            : null;
    }
    function I(e) {
      return e == null
        ? e
        : e.map(function (e) {
            return babelHelpers.extends({}, e, {
              placement_exclusions: k(e.placement_exclusions),
            });
          });
    }
    function T(e) {
      var t, n;
      return e == null
        ? e
        : babelHelpers.extends({}, e, {
            images:
              (t = e.images) == null
                ? void 0
                : t.map(function (e) {
                    return babelHelpers.extends({}, e, {
                      placement_customizations: I(e.placement_customizations),
                    });
                  }),
            videos:
              (n = e.videos) == null
                ? void 0
                : n.map(function (e) {
                    return babelHelpers.extends({}, e, {
                      placement_customizations: I(e.placement_customizations),
                    });
                  }),
          });
    }
    function D(e, t) {
      var n,
        r = T(
          o("DeepRecordUtils").maybeToPlainObject(
            (n = e.creative) == null ? void 0 : n.media_sourcing_spec,
          ),
        );
      return r == null ? {} : E(r, t);
    }
    function x(e) {
      var t,
        n = T(
          o("DeepRecordUtils").maybeToPlainObject(
            r("immutable").fromJS(
              (t = e.creative) == null ? void 0 : t.media_sourcing_spec,
            ),
          ),
        );
      return n == null
        ? !1
        : w(n, "images", "multi_media").length +
            w(n, "videos", "multi_media").length >
            1;
    }
    function $(e, t) {
      return N(e, "images", t) || N(e, "videos", t);
    }
    function P(e) {
      var t, n, a;
      if ($(e, "multi_media")) return !0;
      if (!r("justknobx")._("6210")) return !1;
      var i = o("DeepRecordUtils").maybeToPlainObject(
        (t = e.creative) == null ? void 0 : t.media_sourcing_spec,
      );
      return (
        ((n = i == null || (a = i.posts) == null ? void 0 : a.length) != null
          ? n
          : 0) > 0
      );
    }
    function N(e, t, n) {
      return M(e, t, n).length > 0;
    }
    function M(e, t, n) {
      var a,
        i = T(
          o("DeepRecordUtils").maybeToPlainObject(
            (a = e.creative) == null ? void 0 : a.media_sourcing_spec,
          ),
        );
      return i == null ? r("emptyArray") : w(i, t, n);
    }
    function w(e, t, n) {
      var o,
        a = e == null ? void 0 : e[t],
        i =
          (o =
            a == null
              ? void 0
              : a.filter(function (e) {
                  var t = e.source;
                  return t === n;
                })) != null
            ? o
            : r("emptyArray"),
        l = i.length === 0 && n === "related_media" && e.related_media != null;
      if (l) {
        var s,
          u,
          c =
            (s = (u = e.related_media) == null ? void 0 : u[t]) != null
              ? s
              : [];
        return c.map(function (e) {
          return babelHelpers.extends({}, e, { source: "related_media" });
        });
      }
      return i;
    }
    function A(e) {
      return (
        !h(e) ||
        y(e) ||
        e.text_customizations != null ||
        e.destination_customizations != null
      );
    }
    ((l.convertCreativeFlexImageSpecsToImageAssets = u),
      (l.convertCreativeFlexVideoSpecsToVideoAssets = d),
      (l.convertRelatedMediaToImageAssets = p),
      (l.convertRelatedMediaToVideoAssets = f),
      (l.getCreativeFlexImageAndVideoFromMSS = g),
      (l.isOriginalMediaAsset = h),
      (l.isOriginalVideoOrFirstRepresentative = C),
      (l.orderVideosForCagGroup = b),
      (l.isFirstRepresentativeOfCroppedVideo = v),
      (l.getFilteredMediaSourcingSpecBySource = E),
      (l.coercePlacementExclusionsToArray = k),
      (l.normalizePlacementCustomizations = I),
      (l.normalizeMediaSourcingSpecPlacementExclusions = T),
      (l.getFilteredMediaSourcingSpecBySourceFromAdgroup = D),
      (l.isMultiMediaAdWithMultipleAssetsOfSource = x),
      (l.hasMultiMediaAssetsOfSource = $),
      (l.hasMultiMediaOrPostInMSS = P),
      (l.getMultiMediaAssetsOfTypeAndSource = M),
      (l.isMultiMediaAssetCustomized = A));
  },
  98,
);
