__d(
  "AdsDuplicationPreloadEditorOnHoverExperimentUtils",
  ["AdsInterfacesLogger", "gkx", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      r("AdsInterfacesLogger").log({
        data:
          ((n = {}),
          (n.message = "logged"),
          (n.event_source = e),
          (n.is_enabled = t),
          n),
        eventName: "ads_duplication_preload_editor_hover_exposure_point",
      });
    }
    function s() {
      var e;
      return (e = r("qex")._("452")) != null ? e : !1;
    }
    function u() {
      var e;
      return (e = r("qex")._("605")) != null ? e : !1;
    }
    function c(t) {
      var n = s();
      return (e(t, n), n);
    }
    function d() {
      return m(!0);
    }
    function m(e) {
      return e === !0 ? r("gkx")("4104") : r("gkx")("4348");
    }
    ((l.isDuplicationPreloadExperimentEnabled = s),
      (l.isEligibleForPreloadEditorOnHoverSilent = u),
      (l.isEligibleForPreloadEditorOnHover = c),
      (l.isEligibleForPreloadEditorOnSelectSilent = d),
      (l.isEligibleForPreloadEditorOnSelect = m));
  },
  98,
);
