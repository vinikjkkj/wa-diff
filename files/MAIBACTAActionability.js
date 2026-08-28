__d(
  "MAIBACTAActionability",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Set([
        "ARCHIVED",
        "ARCHIVED_IN_DRAFT",
        "DELETED",
        "PENDING",
        "PENDING_REVIEW",
        "IN_PROCESS",
        "DISAPPROVED",
        "PAUSED",
        "CAMPAIGN_PAUSED",
        "ADSET_PAUSED",
        "AD_PAUSED",
      ]),
      l = new Set([
        "ARCHIVED",
        "ARCHIVED_IN_DRAFT",
        "DELETED",
        "PENDING",
        "PENDING_REVIEW",
        "IN_PROCESS",
        "DISAPPROVED",
      ]),
      s = new Set(["2", "3", "100", "101"]),
      u = new Set([String(871306629649317), String(0x63c25202ae7b6)]),
      c = new Set([
        "EDIT_AUDIENCE",
        "EDIT_AD_CREATIVE",
        "EDIT_BUDGET",
        "EDIT_INSTANT_FORM",
        "EDIT_PLACEMENT",
        "DUPLICATE",
      ]);
    function d(t) {
      return typeof t == "string" && e.has(t);
    }
    function m(e) {
      return typeof e == "string" && l.has(e);
    }
    function p(e) {
      if (e == null) return !1;
      var t = Date.parse(e);
      return !Number.isNaN(t) && t < Date.now();
    }
    function _(e) {
      return e != null && s.has(String(e));
    }
    function f(e, t) {
      return e.some(function (e) {
        var n,
          r =
            (n = t(e, { source_app_id: null }).getValue()) == null
              ? void 0
              : n.source_app_id;
        return r != null && u.has(r);
      });
    }
    function g(e, t, n, r, o) {
      return t.length === 0
        ? !1
        : t.every(function (t) {
            if (e === "CAMPAIGN") {
              var a = o(t, { effective_status: null }).getValue();
              return d(a == null ? void 0 : a.effective_status);
            }
            if (e === "ADSET") {
              var i = r(t, {
                effective_status: null,
                end_time: null,
              }).getValue();
              return (
                d(i == null ? void 0 : i.effective_status) ||
                p(i == null ? void 0 : i.end_time)
              );
            }
            if (e === "AD") {
              var l = n(t, {
                adset_id: null,
                effective_status: null,
              }).getValue();
              if (d(l == null ? void 0 : l.effective_status)) return !0;
              if ((l == null ? void 0 : l.adset_id) != null) {
                var s = r(l.adset_id, {
                  effective_status: null,
                  end_time: null,
                }).getValue();
                if (p(s == null ? void 0 : s.end_time)) return !0;
              }
              return !1;
            }
            return !1;
          });
    }
    function h(e, t, n, r, o) {
      return t.length === 0
        ? !1
        : t.every(function (t) {
            if (e === "CAMPAIGN") {
              var a;
              return m(
                (a = o(t, { effective_status: null }).getValue()) == null
                  ? void 0
                  : a.effective_status,
              );
            }
            if (e === "ADSET") {
              var i;
              return m(
                (i = r(t, {
                  effective_status: null,
                  end_time: null,
                }).getValue()) == null
                  ? void 0
                  : i.effective_status,
              );
            }
            if (e === "AD") {
              var l;
              return m(
                (l = n(t, {
                  adset_id: null,
                  effective_status: null,
                }).getValue()) == null
                  ? void 0
                  : l.effective_status,
              );
            }
            return !1;
          });
    }
    ((i.HIDE_ON_DEAD_ACTIONS = c),
      (i.isAccountBlocked = _),
      (i.isAnyAdIGBoosted = f),
      (i.isEveryAdObjectDead = g),
      (i.isEveryAdObjectNonDuplicatable = h));
  },
  66,
);
