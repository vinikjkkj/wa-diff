__d(
  "AdsCampaignGoalAutoCAUtils",
  ["fbt", "fbs"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = 730,
      u = 30,
      c = 730,
      d = [730, 180, 90, 60, 30];
    function m(e) {
      return e != null && d.includes(e);
    }
    function p(e) {
      return s._(/*BTDS*/ '_j{"*":"{number} days","_1":"1 day"}', [
        s._plural(e, "number"),
      ]);
    }
    function _(e) {
      return e == null ? !1 : e >= u && e <= c;
    }
    function f(e) {
      var t;
      return (t =
        e == null
          ? void 0
          : e.find(function (e) {
              return _(e);
            })) != null
        ? t
        : null;
    }
    function g(t) {
      return t != null && _(t) ? t : e;
    }
    function h(e) {
      return (
        e != null &&
        e.length > 0 &&
        e.every(function (e) {
          return _(e);
        })
      );
    }
    function y(e) {
      return e != null && new Set(e).size === 1;
    }
    function C(e) {
      return e == null || e.length === 0 ? !1 : new Set(e.map(g)).size === 1;
    }
    function b(e) {
      return r("fbs")
        ._(
          /*BTDS*/ '_j{"*":"Customers from your conversion data ({number} days)","_1":"Customers from your conversion data (1 day)"}',
          [r("fbs")._plural(e, "number")],
        )
        .toString();
    }
    ((l.AUTO_CA_DEFAULT_RETENTION_DAYS = e),
      (l.AUTO_CA_MIN_RETENTION_DAYS = u),
      (l.AUTO_CA_MAX_RETENTION_DAYS = c),
      (l.AUTO_CA_RETENTION_OPTIONS = d),
      (l.isSelectableRetention = m),
      (l.getRetentionDaysLabel = p),
      (l.isAutoCAApplied = _),
      (l.pickAppliedAutoCARetention = f),
      (l.resolveEffectiveAutoCARetention = g),
      (l.isAutoCAAppliedForAll = h),
      (l.isRetentionUniform = y),
      (l.isEffectiveRetentionUniform = C),
      (l.getAutoCADisplayName = b));
  },
  226,
);
