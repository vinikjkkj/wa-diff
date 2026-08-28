__d(
  "AdsDMLCompareQuery",
  ["AdsDMLLog", "AdsTreeMatcher", "FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        parent: function () {
          return !0;
        },
        vars: function () {
          return !0;
        },
        error: function () {
          return !0;
        },
        queryBuilder: function () {
          return !0;
        },
      },
      s = { onMismatch: function (t, n, r) {} };
    function u(t, n) {
      return t === n
        ? !0
        : t == null || n == null
          ? !1
          : u(t.parent, n.parent) && o("AdsTreeMatcher").matchTree(t, n, e, s);
    }
    function c(e, t, n) {
      if ((n === void 0 && (n = !1), e === t)) return !0;
      if (e == null || t == null) return !1;
      var a,
        i = e.status === "error" ? e.error : null,
        l = t.status === "error" ? t.error : null;
      if (i != null || l != null) {
        if (((a = !1), i != null && l != null)) {
          if (((a = i.message === l.message && i.stack === l.stack), !a && n)) {
            var s, c;
            r("FBLogger")("dml")
              .catching(i)
              .mustfix(
                "[DML] Separate new error %s from %s with fragment: %s",
                i.message,
                l.message,
                (s =
                  (c = e.queryBuilder) == null || (c = c.__metadata) == null
                    ? void 0
                    : c.name) != null
                  ? s
                  : "unknown",
              );
          }
        } else if (i != null && n) {
          var d, m;
          r("FBLogger")("dml")
            .catching(i)
            .blameToPreviousFrame()
            .warn(
              "[DML] New error %s with fragment: %s",
              i.message,
              (d =
                (m = e.queryBuilder) == null || (m = m.__metadata) == null
                  ? void 0
                  : m.name) != null
                ? d
                : "unknown",
            );
        } else if (l != null && n) {
          var p, _;
          r("FBLogger")("dml")
            .catching(l)
            .blameToPreviousFrame()
            .info(
              "[DML] Resolved error %s with fragment: %s",
              l.message,
              (p =
                (_ = t.queryBuilder) == null || (_ = _.__metadata) == null
                  ? void 0
                  : _.name) != null
                ? p
                : "unknown",
            );
        }
      } else
        ((a = u(e, t)),
          a || o("AdsDMLLog").logDMLQuery("received new query", e));
      return a;
    }
    l.areQueriesEqual = c;
  },
  98,
);
