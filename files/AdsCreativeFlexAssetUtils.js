__d(
  "AdsCreativeFlexAssetUtils",
  ["DeepRecordUtils", "emptyArray", "immutable", "memoizeWithArgsWeak"],
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
        r = T(e, "related_media");
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
      return h(e) || b(e, t);
    }
    function b(e, t) {
      if (h(e)) return !1;
      var n = t.find(function (n) {
        return R(e, n) && !v(e, t);
      });
      return n === e;
    }
    function v(e, t) {
      return S(t).has(e.original_video_id);
    }
    var S = r("memoizeWithArgsWeak")(function (e) {
      return new Set(
        e.filter(h).map(function (e) {
          var t = e.video_id;
          return t;
        }),
      );
    });
    function R(e, t) {
      return e.original_video_id === t.original_video_id;
    }
    function L(t, n) {
      var r = N(t, "images", n),
        o = N(t, "videos", n),
        a = t.related_media,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e);
      return babelHelpers.extends({}, i, {
        images: [].concat(r),
        videos: [].concat(o),
      });
    }
    function E(e) {
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
    function k(e) {
      return e == null
        ? e
        : e.map(function (e) {
            return babelHelpers.extends({}, e, {
              placement_exclusions: E(e.placement_exclusions),
            });
          });
    }
    function I(e) {
      var t, n;
      return e == null
        ? e
        : babelHelpers.extends({}, e, {
            images:
              (t = e.images) == null
                ? void 0
                : t.map(function (e) {
                    return babelHelpers.extends({}, e, {
                      placement_customizations: k(e.placement_customizations),
                    });
                  }),
            videos:
              (n = e.videos) == null
                ? void 0
                : n.map(function (e) {
                    return babelHelpers.extends({}, e, {
                      placement_customizations: k(e.placement_customizations),
                    });
                  }),
          });
    }
    function T(e, t) {
      var n,
        r = I(
          o("DeepRecordUtils").maybeToPlainObject(
            (n = e.creative) == null ? void 0 : n.media_sourcing_spec,
          ),
        );
      return r == null ? {} : L(r, t);
    }
    function D(e, t) {
      return P(e, "images", t).length + P(e, "videos", t).length > 1;
    }
    function x(e, t) {
      return $(e, "images", t) || $(e, "videos", t);
    }
    function $(e, t, n) {
      return P(e, t, n).length > 0;
    }
    function P(e, t, n) {
      var a,
        i = I(
          o("DeepRecordUtils").maybeToPlainObject(
            (a = e.creative) == null ? void 0 : a.media_sourcing_spec,
          ),
        );
      return i == null ? r("emptyArray") : N(i, t, n);
    }
    function N(e, t, n) {
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
    function M(e) {
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
      (l.isFirstRepresentativeOfCroppedVideo = b),
      (l.getFilteredMediaSourcingSpecBySource = L),
      (l.coercePlacementExclusionsToArray = E),
      (l.normalizePlacementCustomizations = k),
      (l.normalizeMediaSourcingSpecPlacementExclusions = I),
      (l.getFilteredMediaSourcingSpecBySourceFromAdgroup = T),
      (l.isMultiMediaAdWithMultipleAssetsOfSource = D),
      (l.hasMultiMediaAssetsOfSource = x),
      (l.getMultiMediaAssetsOfTypeAndSource = P),
      (l.isMultiMediaAssetCustomized = M));
  },
  98,
);
