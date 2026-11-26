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
        "400x500": "VERTICAL",
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
        (e["4:5"] = "400x500"),
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
    function C() {
      return r("gkx")("20635");
    }
    function b(e) {
      return e ? r("gkx")("9323") : r("gkx")("9347");
    }
    function v(e) {
      return e !== !0 ? !1 : r("gkx")("1342");
    }
    function S(e) {
      return e !== !0 ? !1 : r("gkx")("7811");
    }
    function R() {
      var e = r("qex")._("1566");
      return e != null ? e : 0;
    }
    function L() {
      return y("silent");
    }
    function E(e) {
      return e ? r("gkx")("16196") : r("gkx")("23154");
    }
    function k() {
      return r("gkx")("23155");
    }
    function I(e) {
      return e ? r("gkx")("5123") : r("gkx")("5352");
    }
    function T() {
      return r("gkx")("23928");
    }
    function D() {
      return !1;
    }
    function x() {
      return !0;
    }
    function $() {
      return D() ? !1 : T();
    }
    function P() {
      return !r("justknobx")._("4949");
    }
    function N(e) {
      return e !== !0 ? !1 : r("gkx")("25342");
    }
    function M(e) {
      return e ? r("gkx")("25991") : r("gkx")("25992");
    }
    function w() {
      return !r("justknobx")._("3220");
    }
    function A(e) {
      return e ? r("gkx")("6223") : r("gkx")("6315");
    }
    function F(e, t) {
      return !e || !w() ? !1 : A(t);
    }
    function O(e, t, n, r) {
      var a,
        i,
        l =
          e == null || (a = e.images) == null
            ? void 0
            : a
                .map(function (e) {
                  var n = e.hash,
                    a = e.url,
                    i = o("AdsImageIDUtils").getImageID({
                      accountID: r,
                      hash: n,
                      url: a,
                    });
                  if (i == null) return null;
                  var l = t(i).map(function (e) {
                      return e.getTyped();
                    }),
                    s = c(r, n, a),
                    u = { type: "image", id: s != null ? s : i },
                    d = babelHelpers.extends({}, u, {
                      asset: l,
                      crops: null,
                      trimmingParams: null,
                    });
                  return d;
                })
                .filter(Boolean),
        s = new Set(),
        u =
          e == null || (i = e.videos) == null
            ? void 0
            : i
                .map(function (e) {
                  var t = e == null ? void 0 : e.original_video_id;
                  if (t != null && t !== "") {
                    if (s.has(t)) return null;
                    s.add(t);
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
                      u = e == null ? void 0 : e.video_id;
                    if (u == null) return null;
                    var c = n(u),
                      d =
                        (i =
                          (l = c.croppedFromVideoID) != null
                            ? l
                            : c.trimmedFromVideoID) != null
                          ? i
                          : u;
                    if (s.has(d)) return null;
                    s.add(d);
                    var m = d === u ? c : n(d),
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
      return { images: l, videos: u };
    }
    function B(e, t) {
      return e.filter(function (e) {
        return e != null && (e == null ? void 0 : e.type) === t;
      });
    }
    function W(e) {
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
    function q(e) {
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
      (l.isEligibleForDeleteInterceptionExperiment = v),
      (l.isEligibleForPlaceholderScalingExperiment = S),
      (l.getMultiMediaAccordionButtonArm = R),
      (l.isEligibleForCartAnimation = L),
      (l.isEligibleForCropColumnDesign = E),
      (l.isEligibleForCropPreview = k),
      (l.isEligibleForMultiPreview = I),
      (l.isMediaRecommendationToastKilled = x),
      (l.isEligibleForMultiMediaThumbnail = $),
      (l.isEligibleForMultiMediaThumbnailUpload = P),
      (l.isEligibleForLocalUploadsAutoSelect = N),
      (l.isEligibleForVariantMapping = M),
      (l.isEligibleForPerVariantPlacements = F),
      (l.getMultiMediaAssetsFromMediaSourcingSpecType = O),
      (l.getSelectedMultiMediaWithSpecificType = B),
      (l.getAssetID = W),
      (l.isMMVariantMappingShadowModeEnabled = q));
  },
  98,
);
