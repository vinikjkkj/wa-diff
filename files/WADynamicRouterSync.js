__d(
  "WADynamicRouterSync",
  ["ExecutionEnvironment", "Promise", "WALogger", "WAMapWithDefault", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = ["toLastActiveClient"],
      d,
      m;
    function p(e, t) {
      if (e != null) {
        var n = e.toLastActiveClient,
          r = babelHelpers.objectWithoutPropertiesLoose(e, c);
        if (n === !0 && t != null) {
          var o;
          return babelHelpers.extends({}, r, {
            toClientId: (o = r.toClientId) != null ? o : t,
          });
        }
        return r;
      }
    }
    var _ = (function () {
      function t() {
        var e = this;
        ((this.$2 = new Map()),
          (this.$3 = new (o("WAMapWithDefault").MapWithDefault)(function () {
            return new Set();
          })),
          (this.$4 = null),
          (this.fireAndForget = function (t, n, r, o, a, i, l) {
            (o === void 0 && (o = !1),
              e.$3
                .get(t)
                .add({
                  route: n,
                  arg: r,
                  resolver: null,
                  silentLog: o,
                  eventCallbacks: a,
                  transferList: l,
                  opts: p(i, e.$4),
                }),
              e.$5(t, n));
          }),
          (this.sendAndReceive = function (t, r, o, a, i, l, s) {
            return (
              a === void 0 && (a = !1),
              new (m || (m = n("Promise")))(function (n) {
                (e.$3.get(t).add({
                  route: r,
                  arg: o,
                  resolver: function (t) {
                    n(t);
                  },
                  silentLog: a,
                  transferList: s,
                  eventCallbacks: i,
                  opts: p(l, e.$4),
                }),
                  e.$5(t, r));
              })
            );
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
          return this.$2.has(t);
        }),
        (a.getHandledNamespaces = function () {
          return Array.from(this.$2.keys());
        }),
        (a.setNamespaceHandler = function (t, n) {
          var e = this.$2,
            r = e.get(t);
          r !== n && (e.set(t, n), r == null && this.$5(t));
        }),
        (a.$6 = function (r, a) {
          var t = r.arg,
            i = r.eventCallbacks,
            l = r.opts,
            s = r.resolver,
            u = r.route,
            c = r.silentLog,
            d = r.transferList;
          try {
            var p;
            ((this.$4 =
              (p = l == null ? void 0 : l.fromClientId) != null ? p : this.$4),
              a(u, t, s, c, d, i, l));
          } catch (t) {
            (s == null || s((m || (m = n("Promise"))).reject(t)),
              o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Bridge handler: ",
                    "",
                  ])),
                t,
              ));
          }
        }),
        (a.$5 = function (t, n) {
          var e = this,
            a = this.$3.get(t),
            i = this.$2.get(t);
          if (i == null) {
            var l = (d || (d = r("ExecutionEnvironment"))).isInWorker
              ? "worker"
              : "main-thread";
            o("WALogger").ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "No handler for bridge with namespace: ",
                  " route: ",
                  " called in environment: ",
                  "",
                ])),
              t,
              n,
              l,
            );
            return;
          }
          a.forEach(function (t) {
            (a.delete(t), e.$6(t, i));
          });
        }),
        (a.setHandlers = function (t, n) {
          function e(e, a, i, l, s, c, d) {
            if (n[e] == null)
              throw (
                o("WALogger").ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " is not defined for ",
                      "",
                    ])),
                  e,
                  t,
                ),
                r("err")(e + " is not defined for " + t)
              );
            var m = n[e](a, d);
            i && i(m);
          }
          this.setNamespaceHandler(t, e);
        }),
        t
      );
    })();
    ((l.normaliseHandlerOptions = p), (l.DynamicRouterSync = _));
  },
  98,
);
