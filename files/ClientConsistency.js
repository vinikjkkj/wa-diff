__d(
  "ClientConsistency",
  ["ClientConsistencyEventEmitter", "FBLogger", "SiteData", "requireWeak"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("SiteData").client_revision,
      l = !1,
      s,
      u = {},
      c = new Set(),
      d = new Set(),
      m = function (t) {
        u = {};
        var e = Object.keys(t).sort().reverse();
        s === "multiple_revs" && (s = void 0);
        var r = function () {
          var e,
            r = Number(o),
            a = (e = t[r]) != null ? e : [];
          if (a.length === 0) return (p(r), 1);
          a.forEach(function (e) {
            var t;
            ((u[e] = Math.max((t = u[e]) != null ? t : 0, r)),
              !d.has(e) &&
                (d.add(e),
                n("requireWeak").call(null, e, function () {
                  u[e] && p(u[e], e);
                })));
          });
        };
        for (var o of e) if (r()) break;
      },
      p = function (t, r) {
        (t > 0 &&
          s == null &&
          (n("FBLogger")("client_consistency").debug(
            "Consistency action needed: %s:%s",
            t,
            String(r),
          ),
          (s = "multiple_revs")),
          t === 2 &&
            n("ClientConsistencyEventEmitter").emit(
              "softRefresh",
              "multiple_revs",
            ),
          t === 3 &&
            n("ClientConsistencyEventEmitter").emit(
              "hardRefresh",
              "multiple_revs",
            ));
      },
      _ = function (n) {
        var t = n.actions,
          r = n.rev;
        r !== e && (s === "multiple_revs" && (s = void 0), t != null && m(t));
      },
      f = {
        init: function () {
          l ||
            (n("ClientConsistencyEventEmitter").addListener(
              "newEntry",
              function (e) {
                _(e);
              },
            ),
            n("ClientConsistencyEventEmitter").addListener(
              "softRefresh",
              function (e) {
                s = e;
              },
            ),
            n("ClientConsistencyEventEmitter").addListener(
              "hardRefresh",
              function (e) {
                s = e;
              },
            ),
            (l = !0));
        },
        addAdditionalRevision: function (r) {
          r !== e &&
            (c.add(r),
            n("ClientConsistencyEventEmitter").emit("newRevision", r));
        },
        getAdditionalRevisions: function () {
          return c;
        },
        getPendingRefresh: function () {
          return s;
        },
      };
    a.exports = f;
  },
  null,
);
