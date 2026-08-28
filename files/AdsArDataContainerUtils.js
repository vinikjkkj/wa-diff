__d(
  "AdsArDataContainerUtils",
  ["AdsAPIObjectives", "AdsCallToActionTypes", "vulture"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e == null ? null : e.getEffectID();
    }
    function s(t, n) {
      var o = e(t);
      return n.find(function (e) {
        return (r("vulture")("KTWZDq_K0V2a4CyBIke7B30i2tk="), e.id === o);
      });
    }
    function u(e) {
      var t = e == null ? null : e.getEffectAttachment();
      return t == null ? void 0 : t.ctaUri;
    }
    function c(e, t) {
      r("vulture")("LnifuTjvGZDXY6B1ayDUPBaiOuY=");
      var n = e.getEffectAttachment();
      return n != null ? e.setEffectAttachment(n.set("ctaUri", t)) : e;
    }
    function d(e) {
      var t = e != null ? e.ctaType : null;
      return t != null && t !== "NO_BUTTON"
        ? r("AdsCallToActionTypes").TYPES[t].text
        : null;
    }
    function m(e) {
      return e == null ? 0 : e.cameraMode;
    }
    function p(e) {
      return e == null ? null : e.cameraFacing;
    }
    function _(e) {
      switch (e) {
        case r("AdsAPIObjectives").BRAND_AWARENESS:
        case r("AdsAPIObjectives").LOCAL_AWARENESS:
        case r("AdsAPIObjectives").INSTAGRAM_BRAND_AWARENESS:
        case r("AdsAPIObjectives").OUTCOME_AWARENESS:
          return !0;
        default:
          return !1;
      }
    }
    ((l.getEffectID = e),
      (l.getEffect = s),
      (l.getUri = u),
      (l.setUri = c),
      (l.getCtaText = d),
      (l.getCameraMode = m),
      (l.getCameraFacing = p),
      (l.objectiveSupportsNoCta = _));
  },
  98,
);
