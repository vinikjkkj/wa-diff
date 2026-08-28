__d(
  "AdImageSpecsUtils",
  [
    "invariant",
    "AdCreativeType",
    "AdImageSpecCropKeys",
    "AdImageSpecs",
    "AdImageTallFBSpecs",
    "AdsAspectRatioTypeStrings",
    "AdsImageSelectorV2Types",
    "AdsInstagramMediaSpecs",
    "AdsPageTypes",
    "InstagramAdImageStoryPortalSpecs",
    "gkx",
    "immutable",
    "objectKeys",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d,
      m =
        ((e = {}),
        (e[(c = r("AdsPageTypes")).DESKTOP_FEED] = 0),
        (e[c.MOBILE_FEED] = 1),
        (e[c.RIGHT_COLUMN] = 2),
        (e[c.MOBILE_EXTERNAL] = 3),
        (e[c.INSTAGRAM_STREAM] = 4),
        (e[c.INSTAGRAM_STORY] = 5),
        (e[c.MESSENGER] = 6),
        (e[c.MOBILE_FB_STORY] = 7),
        (e[c.MOBILE_INSTREAM_VIDEO] = 8),
        (e[c.INSTANT_ARTICLE] = 9),
        (e[c.INSTAGRAM_SHOP] = 10),
        (e[c.INSTAGRAM_REELS_OVERLAY] = 11),
        (e[c.MOBILE_REELS] = 12),
        (e[c.INSTAGRAM_EXPLORE_HOME] = 13),
        (e[c.INSTAGRAM_PROFILE_FEED] = 14),
        (e[c.INSTAGRAM_SEARCH] = 15),
        (e[c.MOBILE_PROFILE_FEED] = 16),
        (e[c.INSTAGRAM_PROFILE_REELS] = 17),
        (e[c.MOBILE_PROFILE_REELS] = 18),
        (e[c.THREADS_STREAM] = 19),
        (e[c.WHATSAPP_STATUS] = 20),
        (e[c.WHATSAPP_MARKETING_MESSAGES] = 21),
        e),
      p =
        ((u = {}),
        (u[c.DESKTOP_FEED] = (d = r("AdImageSpecCropKeys"))["100x100"]),
        (u[c.INSTAGRAM_STREAM] = d["400x500"]),
        (u[c.INSTAGRAM_PROFILE_FEED] = d["100x100"]),
        (u[c.INSTAGRAM_PROFILE_REELS] = d["90x160"]),
        (u[c.INSTAGRAM_EXPLORE] = d["100x100"]),
        (u[c.INSTAGRAM_SEARCH] = d["100x100"]),
        (u[c.INSTAGRAM_SHOP] = d["100x100"]),
        (u[c.INSTAGRAM_REELS_OVERLAY] = d["100x100"]),
        (u[c.INSTAGRAM_REELS] = d["90x160"]),
        (u[c.INSTAGRAM_STORY] = d["90x160"]),
        (u[c.INSTAGRAM_EXPLORE_HOME] = r("gkx")("5365")
          ? r("AdImageSpecCropKeys")["400x500"]
          : r("AdImageSpecCropKeys")["100x100"]),
        (u[r("AdsPageTypes").MESSENGER_STORY] = r("AdImageSpecCropKeys")[
          "90x160"
        ]),
        (u[r("AdsPageTypes").MOBILE_FEED] = r("AdImageSpecCropKeys")[
          "100x100"
        ]),
        (u[r("AdsPageTypes").MARKETPLACE_MOBILE] = r("AdImageSpecCropKeys")[
          "100x100"
        ]),
        (u[r("AdsPageTypes").MOBILE_SEARCH_SERP_ADS] = r("AdImageSpecCropKeys")[
          "191x100"
        ]),
        (u[r("AdsPageTypes").MOBILE_EXTERNAL] = r("AdImageSpecCropKeys")[
          "90x160"
        ]),
        (u[r("AdsPageTypes").MOBILE_BIZ_DISCO_FEED] = r("AdImageSpecCropKeys")[
          "100x100"
        ]),
        (u[r("AdsPageTypes").MOBILE_REELS] = r("AdImageSpecCropKeys")[
          "100x100"
        ]),
        (u[r("AdsPageTypes").MOBILE_PROFILE_FEED] = r("AdImageSpecCropKeys")[
          "100x100"
        ]),
        (u[r("AdsPageTypes").MOBILE_PROFILE_REELS] = r("AdImageSpecCropKeys")[
          "100x100"
        ]),
        (u[r("AdsPageTypes").THREADS_STREAM] = r("AdImageSpecCropKeys")[
          "100x100"
        ]),
        (u[r("AdsPageTypes").WHATSAPP_STATUS] = r("AdImageSpecCropKeys")[
          "90x160"
        ]),
        (u[r("AdsPageTypes").WHATSAPP_MARKETING_MESSAGES] = r(
          "AdImageSpecCropKeys",
        )["191x100"]),
        u),
      _ = 1.03;
    function f(e, t) {
      var n = [],
        o = T(t);
      return (
        r("objectKeys")(o).forEach(function (t) {
          var r = o[t].supportedTypes || [];
          (e == null ||
            r.some(function (t) {
              return t === e;
            })) &&
            n.push(o[t]);
        }),
        n
      );
    }
    function g(e, t) {
      var n = f(e, t);
      return y(n);
    }
    function h(e, t, n) {
      return e.filter(function (e) {
        return (
          e.placement === r("AdsPageTypes").DESKTOP_FEED &&
          t === o("AdCreativeType").AD_CREATIVE_TYPE.PAGE_POSTS_V2 &&
          !n
        );
      });
    }
    function y(e) {
      var t = {};
      return e
        .filter(function (e) {
          var n = e.cropKey,
            r = e.placement;
          if (!n || r == null) return !1;
          if (r in t) {
            if (t[r].includes(n)) return !1;
          } else return ((t[r] = [n]), !0);
          return (t[r].push(n), !0);
        })
        .sort(function (e, t) {
          return e.placement === t.placement
            ? t.width - e.width
            : e.placement != null && t.placement != null
              ? m[e.placement] - m[t.placement]
              : e.placement != null && t.placement == null
                ? -1
                : e.placement == null && t.placement != null
                  ? 1
                  : 0;
        });
    }
    function C(e) {
      return e.length
        ? e.slice().sort(function (e, t) {
            return t.width - e.width;
          })[0]
        : null;
    }
    function b(e) {
      if (e.length === 0) return null;
      var t = e[0].placement;
      if (t == null) return null;
      var n = p[t];
      return (
        e.find(function (e) {
          return e.cropKey === n && e.placement === t;
        }) || C(e)
      );
    }
    function v(e) {
      return e.filter(function (e) {
        return (
          e.placement !== r("AdsPageTypes").INSTAGRAM_STORY &&
          e.placement !== r("AdsPageTypes").INSTAGRAM_STREAM &&
          e.placement !== r("AdsPageTypes").INSTAGRAM_EXPLORE &&
          e.placement !== r("AdsPageTypes").INSTAGRAM_SHOP &&
          e.placement !== r("AdsPageTypes").INSTAGRAM_REELS_OVERLAY &&
          e.placement !== r("AdsPageTypes").INSTAGRAM_EXPLORE_HOME &&
          e.placement !== r("AdsPageTypes").INSTAGRAM_PROFILE_FEED &&
          e.placement !== r("AdsPageTypes").INSTAGRAM_SEARCH
        );
      });
    }
    function S(e) {
      return e.filter(function (e) {
        return (
          e.placement === r("AdsPageTypes").INSTAGRAM_STORY ||
          e.placement === r("AdsPageTypes").INSTAGRAM_STREAM ||
          e.placement === r("AdsPageTypes").INSTAGRAM_EXPLORE ||
          e.placement === r("AdsPageTypes").INSTAGRAM_SHOP ||
          e.placement === r("AdsPageTypes").INSTAGRAM_REELS_OVERLAY ||
          e.placement === r("AdsPageTypes").INSTAGRAM_SEARCH ||
          e.placement === r("AdsPageTypes").INSTAGRAM_EXPLORE_HOME ||
          e.placement === r("AdsPageTypes").INSTAGRAM_PROFILE_FEED
        );
      });
    }
    function R(e) {
      e.length > 0 || s(0, 4892);
      var t = {};
      return (
        ["minWarningHeight", "minWarningWidth"].forEach(function (n) {
          t[n] = e.reduce(function (e, t) {
            return t.placement !== r("AdsPageTypes").MOBILE_FB_STORY
              ? Math.max(e, t[n])
              : e;
          }, 0);
        }),
        {
          minWarningHeight: t.minWarningHeight,
          minWarningWidth: t.minWarningWidth,
          placement: "",
        }
      );
    }
    function L(e) {
      e.length > 0 || s(0, 4893);
      var t = Number.MAX_VALUE,
        n = Number.MAX_VALUE,
        r,
        o;
      return (
        e.forEach(function (e) {
          ((t = Math.min(t, e.minWarningHeight)),
            (n = Math.min(n, e.minWarningWidth)),
            e.minWarningAspectRatio != null &&
              e.minWarningAspectRatio !== 0 &&
              (r = Math.min(r || Number.MAX_VALUE, e.minWarningAspectRatio)),
            e.maxWarningAspectRatio != null &&
              e.maxWarningAspectRatio !== 0 &&
              (o = Math.max(o || 0, e.maxWarningAspectRatio)));
        }),
        {
          minWarningHeight: t,
          minWarningWidth: n,
          minWarningAspectRatio: r,
          maxWarningAspectRatio: o,
          placement: e[0].placement,
        }
      );
    }
    function E(e) {
      var t = null,
        n = null;
      if (!e || !e.length) return { igSpecificImageSpec: n, imageSpec: t };
      var r = v(e),
        o = S(e);
      return (
        r.length > 0 && (t = R(r)),
        o.length > 0 && ((n = L(o)), r.length === 0 && ((t = n), (n = void 0))),
        { igSpecificImageSpec: n, imageSpec: t }
      );
    }
    function k(e) {
      var t = E(e),
        n = t.igSpecificImageSpec,
        a = t.imageSpec,
        i = r("immutable").List([
          o("AdsImageSelectorV2Types").ImageSourceImageSpec(
            babelHelpers.extends({}, a),
          ),
        ]);
      return (
        n &&
          (i = i.push(
            o("AdsImageSelectorV2Types").ImageSourceImageSpec(
              babelHelpers.extends({}, n),
            ),
          )),
        i
      );
    }
    function I(e) {
      if (e) {
        if (e[r("AdImageSpecs").INSTAGRAM_STREAM.cropKey])
          return r("AdImageSpecs").INSTAGRAM_STREAM;
        if (e[r("AdImageSpecs").INSTAGRAM_STREAM_LANDSCAPE.cropKey])
          return r("AdImageSpecs").INSTAGRAM_STREAM_LANDSCAPE;
        if (e[r("AdImageSpecs").INSTAGRAM_STORY_CROP.cropKey])
          return r("AdImageSpecs").INSTAGRAM_STORY_CROP;
      }
      return r("AdImageSpecs").INSTAGRAM_STREAM_NO_CROP;
    }
    function T(e) {
      var t = babelHelpers.extends(
        {},
        r("AdImageSpecs"),
        r("InstagramAdImageStoryPortalSpecs"),
      );
      return (
        e !== !1 && (t = babelHelpers.extends({}, t, r("AdImageTallFBSpecs"))),
        t
      );
    }
    function D(e, t) {
      var n;
      t === void 0 && (t = !0);
      var a;
      switch (e.cropKey) {
        case r("AdImageSpecCropKeys").NO_CROP:
          a = "ORIGINAL";
          break;
        case r("AdImageSpecCropKeys")["100x100"]:
          a = "SQUARE";
          break;
        case r("AdImageSpecCropKeys")["191x100"]:
        case r("AdImageSpecCropKeys")["400x150"]:
          a = "HORIZONTAL";
          break;
        case r("AdImageSpecCropKeys")["90x160"]:
          a = "FULLSCREEN_VERTICAL";
          break;
        case r("AdImageSpecCropKeys")["400x500"]:
          a = "VERTICAL";
          break;
      }
      if (a != null) {
        var i = t
          ? o("AdsAspectRatioTypeStrings").getAspectRatioTypeNameWithRatio
          : o("AdsAspectRatioTypeStrings").getAspectRatioTypeName;
        return i(a);
      }
      return (n = e.displayRatio) != null ? n : String(e.aspectRatio);
    }
    function x(e, t) {
      t === void 0 && (t = !1);
      var n = b(e),
        o = [].concat(
          t ? [r("AdImageSpecCropKeys").NO_CROP] : [],
          n ? [n.cropKey] : [],
          [
            r("AdImageSpecCropKeys")["90x160"],
            r("AdImageSpecCropKeys")["100x100"],
            r("AdImageSpecCropKeys")["191x100"],
            r("AdImageSpecCropKeys")["400x500"],
            r("AdImageSpecCropKeys").NO_CROP,
          ],
        );
      return e.sort(function (e, t) {
        return o.indexOf(e.cropKey) - o.indexOf(t.cropKey);
      });
    }
    function $(e) {
      switch (e) {
        case r("AdsInstagramMediaSpecs").MIN_MEDIA_WIDTH:
        case r("AdsInstagramMediaSpecs").MIN_MEDIA_WIDTH_LOW_RES:
          return r("AdsInstagramMediaSpecs").MIN_IMAGE_WIDTH_WITH_SR_FOR_IG;
        case r("AdsInstagramMediaSpecs").MIN_STORY_MEDIA_HEIGHT:
        case r("AdsInstagramMediaSpecs").MIN_STORY_MEDIA_HEIGHT_LOW_RES:
          return r("AdsInstagramMediaSpecs")
            .MIN_IMAGE_HEIGHT_WITH_SR_FOR_IG_STORY;
        case r("AdsInstagramMediaSpecs").MIN_STREAM_MEDIA_HEIGHT:
        case r("AdsInstagramMediaSpecs").MIN_STREAM_MEDIA_HEIGHT_LOW_RES:
          return r("AdsInstagramMediaSpecs")
            .MIN_IMAGE_HEIGHT_WITH_SR_FOR_IG_STREAM;
        default:
          return e;
      }
    }
    ((l.SQUARE_IMAGE_ASPECT_RATIO = _),
      (l.getImageSpecsForAdType = f),
      (l.getCropImageSpecsForAdType = g),
      (l.getDisabledCropImageSpecsForAdType = h),
      (l.getUniqueCropImageSpecs = y),
      (l.getLeastStringentImageSpec = C),
      (l.getRecommendedImageSpec = b),
      (l.getFacebookImageSpecs = v),
      (l.getInstagramImageSpecs = S),
      (l.reduceMinFacebookImageSpec = R),
      (l.reduceMinInstagramImageSpec = L),
      (l.reduceMinImageSpec = E),
      (l.reduceAndMergeImageSpec = k),
      (l.getSelectedInstagramImageSpec = I),
      (l.getAllImageSpecs = T),
      (l.getLabelForImageSpec = D),
      (l.sortSpecs = x),
      (l.getMinSizeForIGAdImages = $));
  },
  98,
);
