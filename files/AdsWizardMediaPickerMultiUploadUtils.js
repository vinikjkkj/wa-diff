__d(
  "AdsWizardMediaPickerMultiUploadUtils",
  [
    "AdImageSpecCropKeys",
    "AdsImageIDClasses",
    "AdsImageIDUtils",
    "AdsPageTypes",
    "gkx",
    "immutable",
    "justknobx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t) {
      return e === t
        ? !0
        : e == null || t == null
          ? !1
          : e instanceof o("AdsImageIDClasses").AdsExternalImageID &&
              t instanceof o("AdsImageIDClasses").AdsExternalImageID
            ? e.getComparableSignature() === t.getComparableSignature()
              ? !0
              : e instanceof
                    o("AdsImageIDClasses").AdsExternalImageWithHashID &&
                  t instanceof o("AdsImageIDClasses").AdsExternalImageWithHashID
                ? e.getHash() === t.getHash()
                : !1
            : !1;
    }
    function u(e, t) {
      return e == null || t == null
        ? e == null && t == null
        : e.type === "image" && t.type === "image"
          ? s(e.id, t.id)
          : e.id === t.id;
    }
    function c(e, t, n) {
      var r = o("AdsImageIDUtils").getImageID({
        accountID: e,
        hash: t,
        url: n,
      });
      return r != null && t != null && n != null
        ? o("AdsImageIDClasses").AdsImageID.fromExternalURLWithHash(n, t)
        : r;
    }
    var d = r("immutable").Map({
        "100x100": "SQUARE",
        "160x90": "HORIZONTAL",
        "90x160": "FULLSCREEN_VERTICAL",
      }),
      m = r("immutable").Map({
        "100x100": "SQUARE",
        "191x100": "HORIZONTAL",
        "90x160": "FULLSCREEN_VERTICAL",
      }),
      p = r("immutable").Map(
        ((e = {}),
        (e["1:1"] = "100x100"),
        (e["16:9"] = "160x90"),
        (e["9:16"] = "90x160"),
        e),
      ),
      _ = [
        {
          placement: r("AdsPageTypes").MOBILE_FEED,
          width: 1080,
          height: 1080,
          minWarningWidth: 600,
          minWarningHeight: 600,
          aspectRatio: 1,
          cropKey: r("AdImageSpecCropKeys")["100x100"],
        },
        {
          placement: r("AdsPageTypes").MOBILE_FEED,
          width: 1080,
          height: 1920,
          minWarningWidth: 450,
          minWarningHeight: 800,
          aspectRatio: 0.5625,
          cropKey: r("AdImageSpecCropKeys")["90x160"],
        },
        {
          placement: r("AdsPageTypes").MOBILE_FEED,
          width: 1200,
          height: 628,
          minWarningWidth: 610,
          minWarningHeight: 318,
          aspectRatio: 1.91,
          cropKey: r("AdImageSpecCropKeys")["191x100"],
        },
      ];
    function f(e) {
      return e
        ? r("gkx")("17288") || r("gkx")("24840")
        : r("gkx")("17287") || r("gkx")("24843");
    }
    function g() {
      return r("gkx")("8927");
    }
    function h(e) {
      return e ? r("gkx")("13420") : r("gkx")("11398");
    }
    function y(e) {
      return e ? r("gkx")("21801") : r("gkx")("21802");
    }
    function C(e) {
      return e ? r("gkx")("20590") : r("gkx")("20635");
    }
    function b(e) {
      return e ? r("gkx")("9323") : r("gkx")("9347");
    }
    function v(e, t) {
      return e !== !0 ? !1 : t ? r("gkx")("841") : r("gkx")("1164");
    }
    function S(e, t) {
      return e !== !0 ? !1 : t ? r("gkx")("1271") : r("gkx")("1342");
    }
    function R(e, t) {
      return e !== !0 ? !1 : t ? r("gkx")("7811") : r("gkx")("7832");
    }
    function L() {
      var e = r("qex")._("1566");
      return e != null ? e : 0;
    }
    function E(e) {
      return r("justknobx")._("3522") && y(e);
    }
    function k(e) {
      return e ? r("gkx")("16196") : r("gkx")("23154");
    }
    function I() {
      return r("gkx")("23155");
    }
    function T(e) {
      return e ? r("gkx")("5123") : r("gkx")("5352");
    }
    function D(e) {
      return e ? r("gkx")("23926") : r("gkx")("23928");
    }
    function x() {
      return r("justknobx")._("5575");
    }
    function $() {
      return r("justknobx")._("2284");
    }
    function P(e) {
      return x() ? !1 : D(e);
    }
    function N() {
      return !r("justknobx")._("4949");
    }
    function M(e, t) {
      return e !== !0 ? !1 : t ? r("gkx")("25341") : r("gkx")("25342");
    }
    function w(e) {
      return e ? r("gkx")("25991") : r("gkx")("25992");
    }
    function A(e, t, n, a) {
      var i,
        l,
        s =
          e == null || (i = e.images) == null
            ? void 0
            : i
                .map(function (e) {
                  var n = e.hash,
                    i = e.url,
                    l = o("AdsImageIDUtils").getImageID({
                      accountID: a,
                      hash: n,
                      url: i,
                    });
                  if (l == null) return null;
                  var s = t(l).map(function (e) {
                      return e.getTyped();
                    }),
                    u = r("justknobx")._("2268") ? c(a, n, i) : null,
                    d = { type: "image", id: u != null ? u : l },
                    m = babelHelpers.extends({}, d, {
                      asset: s,
                      crops: null,
                      trimmingParams: null,
                    });
                  return m;
                })
                .filter(Boolean),
        u = new Set(),
        d =
          e == null || (l = e.videos) == null
            ? void 0
            : l
                .map(function (e) {
                  var t = e == null ? void 0 : e.original_video_id;
                  if (t != null && t !== "") {
                    if (u.has(t)) return null;
                    u.add(t);
                    var r = n(t),
                      o = { type: "video", id: t },
                      a = babelHelpers.extends({}, o, {
                        asset: r,
                        crops: null,
                        trimmingParams: null,
                      });
                    return a;
                  } else {
                    var i,
                      l,
                      s = e == null ? void 0 : e.video_id;
                    if (s == null) return null;
                    var c = n(s),
                      d =
                        (i =
                          (l = c.croppedFromVideoID) != null
                            ? l
                            : c.trimmedFromVideoID) != null
                          ? i
                          : s;
                    if (u.has(d)) return null;
                    u.add(d);
                    var m = d === s ? c : n(d),
                      p = { type: "video", id: d },
                      _ = babelHelpers.extends({}, p, {
                        asset: m,
                        crops: null,
                        trimmingParams: null,
                      });
                    return _;
                  }
                })
                .filter(Boolean);
      return { images: s, videos: d };
    }
    function F(e, t) {
      return e.filter(function (e) {
        return e != null && (e == null ? void 0 : e.type) === t;
      });
    }
    function O(e) {
      var t, n;
      return (e == null ? void 0 : e.type) === "image"
        ? (t = o("AdsImageIDUtils").getImageHashFromID(
            e == null ? void 0 : e.id,
          )) != null
          ? t
          : e == null || (n = e.asset) == null || (n = n.getValue()) == null
            ? void 0
            : n.url
        : e == null
          ? void 0
          : e.id;
    }
    function B(e) {
      return e;
    }
    ((l.areImageIDsEqual = s),
      (l.areAssetIDsEqual = u),
      (l.getSelectionImageID = c),
      (l.PSEUDO_CROP_VIDEO_CROP_KEYS = d),
      (l.PSEUDO_CROP_IMAGE_CROP_KEYS = m),
      (l.VCE_ASPECT_RATIO_TO_CROP_KEY_MAP = p),
      (l.PSEUDO_CROP_IMAGE_SPECS = _),
      (l.isEligibleForMultiUpload = f),
      (l.isMultiMediaBulkEditDisabled = g),
      (l.isEligibleForImageSmartCrop = h),
      (l.isEligibleForAdoptionFixes = y),
      (l.isEligibleForLocalVideoCartTile = C),
      (l.isEligibleForOptimizationGuidancePill = b),
      (l.isEligibleForCustomizeMediaPillExperiment = v),
      (l.isEligibleForDeleteInterceptionExperiment = S),
      (l.isEligibleForPlaceholderScalingExperiment = R),
      (l.getMultiMediaAccordionButtonArm = L),
      (l.isEligibleForCartAnimation = E),
      (l.isEligibleForCropColumnDesign = k),
      (l.isEligibleForCropPreview = I),
      (l.isEligibleForMultiPreview = T),
      (l.isMediaRecommendationToastKilled = $),
      (l.isEligibleForMultiMediaThumbnail = P),
      (l.isEligibleForMultiMediaThumbnailUpload = N),
      (l.isEligibleForLocalUploadsAutoSelect = M),
      (l.isEligibleForVariantMapping = w),
      (l.getMultiMediaAssetsFromMediaSourcingSpecType = A),
      (l.getSelectedMultiMediaWithSpecificType = F),
      (l.getAssetID = O),
      (l.isMMVariantMappingShadowModeEnabled = B));
  },
  98,
);
