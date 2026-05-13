__d(
  "WAWebVoipMessagePortRpc",
  ["Promise", "WALogger", "WAWebVisibilityAwareTimeout", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = (function () {
        function t(e) {
          ((this.$1 = !1), (this.$2 = 0), (this.$3 = new Map()), (this.$4 = e));
        }
        var a = t.prototype;
        return (
          (a.start = function () {
            var t = this;
            ((this.$4.onmessage = function (n) {
              var a = n.data;
              if (!(a == null || typeof a != "object")) {
                var i = Number(a.id),
                  l = t.$3.get(i);
                if (l == null) {
                  o("WALogger").ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [RPC] Response for unknown id=",
                        "",
                      ])),
                    i,
                  );
                  return;
                }
                (t.$3.delete(i),
                  a.error != null
                    ? l.reject(r("err")(String(a.error)))
                    : l.resolve(a.result));
              }
            }),
              this.$4.start());
          }),
          (a.invoke = function (t, o, a) {
            var e = this,
              i = this.$2++;
            return new (c || (c = n("Promise")))(function (n, l) {
              var s = window.setTimeout(function () {
                (e.$3.delete(i),
                  l(
                    r("err")(
                      "voip: [RPC] timeout for " + t + " (id=" + i + ")",
                    ),
                  ));
              }, 3e4);
              (e.$3.set(i, {
                resolve: function (t) {
                  (window.clearTimeout(s), n(t));
                },
                reject: function (t) {
                  (window.clearTimeout(s), l(t));
                },
              }),
                e.$4.postMessage(
                  { id: i, method: t, args: o },
                  a != null ? a : [],
                ));
            });
          }),
          (a.invokeWithVisibilityAwareTimeout = function (t, a, i, l) {
            var e = this,
              d = i.absoluteMs,
              m = i.foregroundMs,
              p = i.onBackgroundPauseSuccess,
              _ = i.onTimeout,
              f = this.$2++;
            return new (c || (c = n("Promise")))(function (n, i) {
              var c = o(
                "WAWebVisibilityAwareTimeout",
              ).startVisibilityAwareTimeout({
                foregroundMs: m,
                absoluteMs: d,
                onTimeout: function (o, a) {
                  (e.$3.delete(f), _(o));
                  var n =
                    o === "foreground"
                      ? "foreground timeout"
                      : "absolute timeout";
                  i(
                    r("err")(
                      "voip: [RPC] timeout for " +
                        t +
                        " (id=" +
                        f +
                        ", reason=" +
                        n +
                        ", wallElapsed=" +
                        a.wallMs.toFixed(1) +
                        "ms, visibleElapsed=" +
                        a.visibleMs.toFixed(1) +
                        "ms)",
                    ),
                  );
                },
                onPause: function (n) {
                  o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [RPC] wait paused for ",
                        " (id=",
                        ", visibleElapsed=",
                        "ms)",
                      ])),
                    t,
                    f,
                    n.visibleMs.toFixed(1),
                  );
                },
                onResume: function (n) {
                  o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [RPC] wait resumed for ",
                        " (id=",
                        ", visibleElapsed=",
                        "ms)",
                      ])),
                    t,
                    f,
                    n.visibleMs.toFixed(1),
                  );
                },
              });
              (e.$3.set(f, {
                resolve: function (t) {
                  var e = c.cancel();
                  (e.wasBackgroundPaused && p(), n(t));
                },
                reject: function (t) {
                  (c.cancel(), i(t));
                },
              }),
                e.$4.postMessage(
                  { id: f, method: t, args: a },
                  l != null ? l : [],
                ));
            });
          }),
          (a.fire = function (t, n, r) {
            this.$4.postMessage(
              { id: -1, method: t, args: n },
              r != null ? r : [],
            );
          }),
          (a.clearPending = function (t) {
            for (var e of this.$3) {
              var n = e[0],
                o = e[1];
              o.reject(r("err")("voip: [RPC] " + t + " (id=" + n + ")"));
            }
            this.$3.clear();
          }),
          (a.close = function (t) {
            this.$1 || ((this.$1 = !0), this.clearPending(t), this.$4.close());
          }),
          t
        );
      })();
    l.MessagePortRpc = d;
  },
  98,
);
