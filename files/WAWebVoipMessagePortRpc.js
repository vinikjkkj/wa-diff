__d(
  "WAWebVoipMessagePortRpc",
  ["Promise", "WALogger", "WAWebVisibilityAwareTimeout", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p = -1,
      _ = (function () {
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
                var i = Number(a.id);
                if (i === p) {
                  a.error != null &&
                    o("WALogger").ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [RPC] fire-and-forget call failed: ",
                          "",
                        ])),
                      String(a.error),
                    );
                  return;
                }
                var l = t.$3.get(i);
                if (l == null) {
                  if (i < t.$2) {
                    var c;
                    o("WALogger").WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [RPC] late response for settled id=",
                          ", error=",
                          "",
                        ])),
                      i,
                      String((c = a.error) != null ? c : "none"),
                    );
                  } else
                    o("WALogger").ERROR(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
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
            return new (m || (m = n("Promise")))(function (n, l) {
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
              s = i.absoluteMs,
              u = i.foregroundMs,
              p = i.onBackgroundPauseSuccess,
              _ = i.onTimeout,
              f = this.$2++;
            return new (m || (m = n("Promise")))(function (n, i) {
              var m = o(
                "WAWebVisibilityAwareTimeout",
              ).startVisibilityAwareTimeout({
                foregroundMs: u,
                absoluteMs: s,
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
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
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
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
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
                  var e = m.cancel();
                  (e.wasBackgroundPaused && p(), n(t));
                },
                reject: function (t) {
                  (m.cancel(), i(t));
                },
              }),
                e.$4.postMessage(
                  { id: f, method: t, args: a },
                  l != null ? l : [],
                ));
            });
          }),
          (a.fire = function (t) {
            var e = t.args,
              n = t.method,
              r = t.transferList;
            this.$4.postMessage(
              { id: p, method: n, args: e },
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
    l.MessagePortRpc = _;
  },
  98,
);
