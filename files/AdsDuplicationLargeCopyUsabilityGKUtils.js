__d(
  "AdsDuplicationLargeCopyUsabilityGKUtils",
  ["AdsInterfacesLogger", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var o;
      r("AdsInterfacesLogger").log({
        data:
          ((o = {}),
          (o.message = t ? "logged" : "not_logged"),
          (o.event_source = e),
          (o.is_enabled = n),
          o),
        eventName: "ads_duplicate_large_copy_usability_exposure_point",
      });
    }
    function s(t) {
      if (t.shouldSilentCheck === !0) {
        var n = r("gkx")("13627");
        return (e(t.exposure_source, !1, n), n);
      }
      var o = r("gkx")("5060");
      return (r("gkx")("6410"), e(t.exposure_source, !0, o), o);
    }
    function u(t) {
      var n = r("gkx")("13178");
      return (e(t.exposure_source, !0, n), n);
    }
    ((l.isLargeCopyUsabilityLaunchEnabled = s),
      (l.shouldEnableDuplicationFailureUsability = u));
  },
  98,
);
