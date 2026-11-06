__d(
  "ClientConsistency",
  ["ClientConsistencyEventEmitter", "FBLogger", "SiteData", "requireWeak"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = !1,
      s,
      u = {},
      c = new Set(),
      d = new Set(),
      m = function (t) {
        u = {};
        var e = Object.keys(t).sort().reverse();
        s === "multiple_revs" && (s = void 0);
        var n = function () {
          var e,
            n = Number(o),
            a = (e = t[n]) != null ? e : [];
          if (a.length === 0) return (p(n), 1);
          a.forEach(function (e) {
            var t;
            ((u[e] = Math.max((t = u[e]) != null ? t : 0, n)),
              !d.has(e) &&
                (d.add(e),
                r("requireWeak").call(null, e, function () {
                  u[e] && p(u[e], e);
                })));
          });
        };
        for (var o of e) if (n()) break;
      },
      p = function (t, n) {
        (t > 0 &&
          s == null &&
          (r("FBLogger")("client_consistency").debug(
            "Consistency action needed: %s:%s",
            t,
            String(n),
          ),
          (s = "multiple_revs")),
          t === 2 &&
            r("ClientConsistencyEventEmitter").emit(
              "softRefresh",
              "multiple_revs",
            ),
          t === 3 &&
            r("ClientConsistencyEventEmitter").emit(
              "hardRefresh",
              "multiple_revs",
            ));
      },
      _ = function (t) {
        var e = t.actions,
          n = t.rev;
        n !== o("SiteData").client_revision &&
          (s === "multiple_revs" && (s = void 0), e != null && m(e));
      },
      f = {
        init: function () {
          e ||
            (r("ClientConsistencyEventEmitter").addListener(
              "newEntry",
              function (e) {
                _(e);
              },
            ),
            r("ClientConsistencyEventEmitter").addListener(
              "softRefresh",
              function (e) {
                s = e;
              },
            ),
            r("ClientConsistencyEventEmitter").addListener(
              "hardRefresh",
              function (e) {
                s = e;
              },
            ),
            (e = !0));
        },
        recordResponseRevision: function (t) {
          t != null && t !== o("SiteData").client_revision && c.add(t);
        },
        addAdditionalRevision: function (t) {
          t !== o("SiteData").client_revision &&
            (c.add(t),
            r("ClientConsistencyEventEmitter").emit("newRevision", t));
        },
        getAdditionalRevisions: function () {
          return c;
        },
        getPendingRefresh: function () {
          return s;
        },
      },
      g = f;
    l.default = g;
  },
  98,
);
