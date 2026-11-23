__d(
  "AdsSiteLinksFormatConsentRefresh",
  ["gkx", "parseISODate"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 17936064e5,
      s = 1e12;
    function u() {
      return r("gkx")("28106");
    }
    function c() {
      return Date.now() >= e;
    }
    function d(e) {
      if (e == null) return null;
      if (/^\d+$/.test(e)) {
        var t = Number(e);
        return t >= s ? t : t * 1e3;
      }
      if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/.test(e)) return null;
      var n = r("parseISODate")(e).getTime();
      return Number.isFinite(n) ? n : null;
    }
    function m(t) {
      var n = d(t);
      return n == null || n < e;
    }
    function p(e, t, n) {
      var r,
        o = (
          (r = e == null ? void 0 : e.reactive_control_settings) != null
            ? r
            : []
        )
          .flatMap(function (e) {
            var t;
            return (t = e.sticky_settings) != null ? t : [];
          })
          .filter(function (e) {
            return e.key === t;
          })
          .flatMap(function (e) {
            return e.value;
          })
          .filter(function (e) {
            return e.status === "OPT_OUT" && n(e.data_source);
          });
      return (
        o.length > 0 &&
        o.every(function (e) {
          return m(e.updated_time);
        })
      );
    }
    function _(e, t, n) {
      return p(e, t, function (e) {
        return e === n;
      });
    }
    function f(e, t) {
      return p(e, t, function () {
        return !0;
      });
    }
    function g(t) {
      return t == null || t * 1e3 < e;
    }
    ((l.SE_FORMAT_CONSENT_REFRESH_CUTOFF_MS = e),
      (l.isSEFormatConsentRefreshEnabled = u),
      (l.isSEFormatConsentRefreshCutoffPassed = c),
      (l.getFormatStickyUpdatedTimeMs = d),
      (l.isFormatOptOutReleasedByRefresh = m),
      (l.areFormatOptOutsReleasedByRefresh = _),
      (l.areFormatLevelOptOutsReleasedByRefresh = f),
      (l.isAPlusCStickyOptOutReleasedByRefresh = g));
  },
  98,
);
