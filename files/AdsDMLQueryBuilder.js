__d(
  "AdsDMLQueryBuilder",
  [
    "invariant",
    "AdsDMLCompareQuery",
    "AdsDMLLog",
    "AdsDataAtom",
    "FBLogger",
    "Promise",
    "SimpleHookSet",
    "getErrorSafe",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = (function () {
        function e(e) {
          ((this.dirtyQuery = null), (this.query = e));
        }
        var t = e.prototype;
        return (
          (t.addOnDataUpdate = function (t, n) {
            t &&
              (this.onUpdate ||
                (this.onUpdate = new (o("SimpleHookSet").SimpleHookSet)()),
              this.onUpdate.add(t, n));
          }),
          e
        );
      })();
    function d(e) {
      return JSON.stringify(e);
    }
    function m(e) {
      return (
        e.isLoading
          ? (e.status = "loading")
          : e.error
            ? (e.status = "error")
            : e.status !== "pending" && (e.status = "loaded"),
        e
      );
    }
    var p = 0,
      _ = 0;
    function f() {
      var e = _ - p;
      _ = p = 0;
    }
    var g = 0,
      h = 0;
    function y() {}
    var C = function (t) {
        this.__metadata = t;
      },
      b = (function (t) {
        function a(e, n, o) {
          var a, i;
          ((i =
            t.call(this, o != null ? o : n == null ? void 0 : n.__metadata) ||
            this),
            (i.$TQueryBuilder$p_2 = e),
            (i.$TQueryBuilder$p_1 = n),
            (i.$TQueryBuilder$p_3 = new Map()),
            (i.$TQueryBuilder$p_4 = new Map()));
          var l = function () {
              (i.__fetchAndNotify(), p++);
            },
            s = !1;
          i.$TQueryBuilder$p_5 = function () {
            ((s = !0), _++);
          };
          var c = u || (u = r("AdsDataAtom"));
          return (
            c.registerContainer(
              function (e) {
                s && (l(), f(), (s = !1));
              },
              (a = i.__metadata) == null ? void 0 : a.name,
            ),
            i
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.__fetchAndNotify = function () {
            var e = [];
            for (var t of this.$TQueryBuilder$p_3) {
              var n,
                a = t[0],
                i = t[1],
                l = i.query;
              if (i.onUpdate !== null) {
                var u, c;
                if (
                  ((u = i.onUpdate) == null ||
                    u.removeIf(function (e) {
                      var t;
                      return (t = e == null ? void 0 : e.isRevoked) != null
                        ? t
                        : !1;
                    }),
                  !((c = i.onUpdate) != null && c.hasCallback()))
                ) {
                  this.$TQueryBuilder$p_3.delete(a);
                  continue;
                }
              }
              if (
                ((n = this.__metadata) == null
                  ? void 0
                  : n.skipSubscriptionOptimize) !== !0 &&
                l
              ) {
                var d;
                if (
                  r("isTruthy")(
                    (d = this.__metadata) == null
                      ? void 0
                      : d.liveResolverDMLQuery,
                  )
                ) {
                  var m;
                  i.query = null;
                  var p = this.fetchQueryFragments(l.vars);
                  ((p === i.query &&
                    ((m = i.query) == null ? void 0 : m.vars) === l.vars) ||
                    s(0, 73952),
                    i.onUpdate &&
                      !o("AdsDMLCompareQuery").areQueriesEqual(p, l, !0) &&
                      e.push(i));
                } else {
                  var _;
                  ((h += 1),
                    (i.dirtyQuery = i.query),
                    (i.query = null),
                    (_ = i.onUpdate) == null || _.call(i.query));
                }
              } else {
                var f;
                ((h += 1),
                  (i.query = null),
                  (f = i.onUpdate) == null || f.call(i.query));
              }
            }
            for (var y of e) {
              var C;
              ((g += 1),
                y.query != null || s(0, 49994),
                (C = y.onUpdate) == null || C.call(y.query));
            }
          }),
          (i.$TQueryBuilder$p_6 = function (t, n) {
            var e,
              i,
              l,
              s,
              u = null;
            this.$TQueryBuilder$p_1 instanceof a &&
              (u = this.$TQueryBuilder$p_1.$TQueryBuilder$p_6(t, n));
            var c = {
              parent: u,
              vars: t,
              data: null,
              error: null,
              isLoading: !1,
              queryBuilder: this,
              status: "pending",
            };
            if (((e = u) == null ? void 0 : e.isLoading) === !0)
              return ((c.isLoading = !0), m(c));
            if (((i = u) == null ? void 0 : i.error) != null)
              return ((c.error = u.error), m(c));
            var d = this.$TQueryBuilder$p_2;
            try {
              (d.load(c, n), (c.status = "loaded"));
            } catch (e) {
              var p,
                _,
                f = r("getErrorSafe")(e);
              (r("FBLogger")("dml")
                .catching(f)
                .warn(
                  "[DML] error %s when loading query: %s",
                  f.message,
                  (p = (_ = this.__metadata) == null ? void 0 : _.name) != null
                    ? p
                    : "unknown",
                ),
                (c.data = null),
                (c.isLoading = !1),
                (c.error = f));
            }
            var g = m(c);
            return (
              o("AdsDMLLog").logDMLQuery(
                "fetch " +
                  ((l = (s = this.__metadata) == null ? void 0 : s.name) != null
                    ? l
                    : "-") +
                  "  " +
                  d.constructor.name,
                g,
              ),
              g
            );
          }),
          (i.getPromise = function (r) {
            var t,
              o = this,
              a,
              i,
              l = r,
              s = (t = d(l)) != null ? t : "empty",
              u = this.$TQueryBuilder$p_4.get(s);
            if (u != null) return u;
            var c = new (e || (e = n("Promise")))(function (e, t) {
              var n = function () {
                  var n = o.fetchQueryFragments(l);
                  n.status === "error"
                    ? (a.revoke(), t(n.error))
                    : n.status === "loaded" && (a.revoke(), e(n.data));
                },
                r = n,
                a = function () {
                  return r == null ? void 0 : r();
                };
              ((a.isRevoked = !1),
                (a.revoke = function () {
                  (o.$TQueryBuilder$p_4.delete(s),
                    (a.isRevoked = !0),
                    (r = null));
                }),
                o.fetchQueryFragments(l, a),
                n());
            });
            return (
              (c.displayName =
                "AdsDML(" +
                ((a = (i = this.__metadata) == null ? void 0 : i.name) != null
                  ? a
                  : "unknown") +
                ")"),
              this.$TQueryBuilder$p_4.set(s, c),
              c
            );
          }),
          (i.fetchQueryFragments = function (t, n) {
            var e = t,
              r = this.$TQueryBuilder$p_5,
              a,
              i = d(e),
              l = this.$TQueryBuilder$p_3.get(i);
            if (l && l.query != null) ((a = l.query), l.addOnDataUpdate(n));
            else {
              if (((a = this.$TQueryBuilder$p_6(e, r)), l == null))
                ((l = new c(a)), this.$TQueryBuilder$p_3.set(i, l));
              else {
                var s = l.dirtyQuery;
                if (s != null) {
                  var u = o("AdsDMLCompareQuery").areQueriesEqual(a, s, !0);
                  (u && (a = s), (l.dirtyQuery = null));
                }
                l.query = a;
              }
              l.addOnDataUpdate(n);
            }
            return a;
          }),
          a
        );
      })(C);
    ((l.TQueryBuilderBase = C), (l.TQueryBuilder = b));
  },
  98,
);
