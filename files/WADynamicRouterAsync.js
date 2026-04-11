__d(
  "WADynamicRouterAsync",
  ["Promise", "WALogger", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = { sentinel: "RESPONSE_NAMESPACE" },
      c = { sentinel: "NOT_HANDLED" },
      d = (function () {
        function t() {
          var e = this;
          ((this.$2 = (s || (s = n("Promise"))).resolve()),
            (this.$3 = new Map()),
            (this.$4 = 0),
            (this.$5 = null),
            (this.$6 = null),
            (this.$7 = null),
            (this.fireAndForget = function (t, n, r, o, a, i, l) {
              (o === void 0 && (o = !1), e.$9(t, n, r, null, o, l));
            }),
            (this.sendAndReceive = function (t, r, o, a, i, l, c) {
              return (
                a === void 0 && (a = !1),
                new (s || (s = n("Promise")))(function (n, i) {
                  var l = null;
                  e.$9(
                    t,
                    r,
                    o,
                    function (t) {
                      try {
                        var r = _(t);
                        r
                          ? (l = r.call(
                              t,
                              function (t) {
                                e.$9(u, "", t, n, a);
                              },
                              function (t) {
                                e.$9(u, "", t, i, !1);
                              },
                            ))
                          : e.$9(u, "", t, n, a);
                      } catch (t) {
                        e.$9(u, "", t, i, !1);
                      }
                    },
                    a,
                    c,
                  );
                })
              );
            }),
            (this.$8 = function () {
              var t = e.$6;
              if (t) {
                for (var n = e.$3, r; t && !(r = m(n, t)); )
                  e.$6 = t = t.nextRoute;
                if (!(!t || !r)) {
                  var o = e.$10(r, t),
                    a = !0;
                  if (o !== c) {
                    var i = t.prevRoute,
                      l = t.nextRoute;
                    (e.$6 === t && (e.$6 = l),
                      i ? (i.nextRoute = l) : (e.$5 = l),
                      l ? (l.prevRoute = i) : ((a = !1), (e.$7 = i)));
                  }
                  return (a && e.$2.then(e.$8).finally(function () {}), o);
                }
              }
            }));
        }
        var a = t.prototype;
        return (
          (a.setAckPayload = function (t) {
            this.$1 = t;
          }),
          (a.getAckPayoad = function () {
            return this.$1;
          }),
          (a.hasHandlerForNamespace = function (t) {
            return this.$3.has(t);
          }),
          (a.getHandledNamespaces = function () {
            return Array.from(this.$3.keys());
          }),
          (a.setNamespaceHandler = function (t, n) {
            var e = this.$3,
              r = e.get(t);
            if (r !== n && (++this.$4, e.set(t, n), !r)) {
              var o = this.$5;
              o &&
                (this.$6 || this.$2.then(this.$8).finally(function () {}),
                (this.$6 = o));
            }
          }),
          (a.setHandlers = function (n, a) {
            function t(t, i, l) {
              if (a[t] == null)
                throw (
                  o("WALogger").ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " is not defined for ",
                        "",
                      ])),
                    t,
                    n,
                  ),
                  r("err")(t + " is not defined for " + n)
                );
              var s = a[t](i);
              l && l(s);
            }
            this.setNamespaceHandler(n, t);
          }),
          (a.$9 = function (t, n, r, o, a, i) {
            var e = this.$7,
              l = {
                namespace: t,
                route: n,
                arg: r,
                resolver: o,
                prevRoute: e,
                nextRoute: null,
                silentLog: a,
                transferList: i != null ? i : null,
              };
            this.$7 = l;
            var s = !0;
            (e ? ((e.nextRoute = l), (s = !this.$6)) : (this.$5 = l),
              s &&
                m(this.$3, l) &&
                ((this.$6 = l), this.$2.then(this.$8).finally(function () {})));
          }),
          (a.$10 = function (t, o) {
            var e = o.arg,
              a = o.resolver,
              i = o.route,
              l = o.silentLog,
              u = o.transferList,
              d = this.$4,
              m = null,
              p = null;
            try {
              m = t(i, e, a, l, u);
            } catch (e) {
              p = (s || (s = n("Promise"))).reject(e);
            }
            if (m === c)
              if (d === this.$4)
                p = (s || (s = n("Promise"))).reject(
                  r("err")(
                    "DynamicRouter: NOT_HANDLED can only be used when updating handlers",
                  ),
                );
              else return c;
            if (a) {
              p && a(p);
              return;
            } else return p;
          }),
          t
        );
      })();
    function m(e, t) {
      var n = t.namespace;
      return n === u ? p : e.get(n);
    }
    function p(e, t, n) {
      n(t);
    }
    function _(e) {
      if (e != null && (typeof e == "object" || typeof e == "function")) {
        var t = e.then;
        return typeof t == "function" ? t : null;
      }
      return null;
    }
    ((l.NOT_HANDLED = c), (l.DynamicRouter = d));
  },
  98,
);
