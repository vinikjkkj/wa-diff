__d(
  "WAWebTimerHoc_DEPRECATED.react",
  ["WALogger", "WAWebHocComponent_DEPRECATED.react", "lodash", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = m || (m = o("react"));
    function _(t) {
      var n;
      return (
        (n = (function (n) {
          function a() {
            for (
              var t, a = arguments.length, i = new Array(a), l = 0;
              l < a;
              l++
            )
              i[l] = arguments[l];
            return (
              (t = n.call.apply(n, [this].concat(i)) || this),
              (t._timers = new Map()),
              (t._timerId = 0),
              (t._unmounted = !1),
              (t.setInterval = function (n, r) {
                t._unmounted &&
                  o("WALogger")
                    .ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "Assertion failed!",
                        ])),
                    )
                    .sendLogs("Setting interval after unmount");
                var a = ++t._timerId,
                  i = self.setInterval(n, r);
                return (
                  t._timers.set(a, function () {
                    (self.clearInterval(i), t._timers.delete(a));
                  }),
                  a
                );
              }),
              (t.clearInterval = function (e) {
                var n = t._timers.get(e);
                n && n();
              }),
              (t.setTimeout = function (e, n) {
                t._unmounted &&
                  o("WALogger")
                    .ERROR(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "Assertion failed!",
                        ])),
                    )
                    .sendLogs("Setting timeout after unmount");
                var r = t._cbWrapper(e),
                  a = r[0],
                  i = r[1],
                  l = self.setTimeout(i, n);
                return (
                  t._timers.set(a, function () {
                    (self.clearTimeout(l), t._timers.delete(a));
                  }),
                  a
                );
              }),
              (t.clearTimeout = function (e) {
                var n = t._timers.get(e);
                n && n();
              }),
              (t.requestAnimationFrame = function (e) {
                t._unmounted &&
                  o("WALogger")
                    .ERROR(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "Assertion failed!",
                        ])),
                    )
                    .sendLogs("Requesting animation frame after unmount");
                var n = t._cbWrapper(e),
                  r = n[0],
                  a = n[1],
                  i = window.requestAnimationFrame(a);
                return (
                  t._timers.set(r, function () {
                    (window.cancelAnimationFrame(i), t._timers.delete(r));
                  }),
                  r
                );
              }),
              (t.cancelAnimationFrame = function (e) {
                var n = t._timers.get(e);
                n && n();
              }),
              (t.throttle = function (e, n, a) {
                t._unmounted &&
                  o("WALogger")
                    .ERROR(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "Assertion failed!",
                        ])),
                    )
                    .sendLogs("Throttling after unmount");
                var i = t._cbWrapper(e),
                  l = i[0],
                  s = i[1],
                  u = r("lodash").throttle(s, n, a),
                  d = u.cancel.bind(u);
                u.cancel = function () {
                  (d(), t._timers.delete(l));
                };
                var m = function () {
                  t._unmounted ||
                    (t._timers.set(l, u.cancel), u.apply(void 0, arguments));
                };
                return ((m.cancel = u.cancel), (m.flush = u.flush), m);
              }),
              (t.debounce = function (e, n, a) {
                t._unmounted &&
                  o("WALogger")
                    .ERROR(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "Assertion failed!",
                        ])),
                    )
                    .sendLogs("Debouncing after unmount");
                var i = t._cbWrapper(e),
                  l = i[0],
                  s = i[1],
                  u = r("lodash").debounce(s, n, a),
                  c = u.cancel.bind(u),
                  m = u.flush.bind(u);
                ((u.cancel = function () {
                  (c(), t._timers.delete(l));
                }),
                  (u.flush = function () {
                    m();
                  }));
                var p = function () {
                  t._unmounted ||
                    (t._timers.set(l, u.cancel), u.apply(void 0, arguments));
                };
                return ((p.cancel = u.cancel), (p.flush = u.flush), p);
              }),
              (t._cbWrapper = function (e) {
                var n = ++t._timerId;
                return [
                  n,
                  function () {
                    (t._timers.delete(n), e.apply(void 0, arguments));
                  },
                ];
              }),
              babelHelpers.assertThisInitialized(t) ||
                babelHelpers.assertThisInitialized(t)
            );
          }
          babelHelpers.inheritsLoose(a, n);
          var i = a.prototype;
          return (
            (i.componentWillUnmount = function () {
              ((this._unmounted = !0),
                this._timers.forEach(function (e) {
                  return e();
                }));
            }),
            (i.render = function () {
              return p.jsx(
                t,
                babelHelpers.extends(
                  {
                    ref: this.setComponent,
                    setInterval: this.setInterval,
                    clearInterval: this.clearInterval,
                    setTimeout: this.setTimeout,
                    clearTimeout: this.clearTimeout,
                    requestAnimationFrame: this.requestAnimationFrame,
                    cancelAnimationFrame: this.cancelAnimationFrame,
                    debounce: this.debounce,
                    throttle: this.throttle,
                  },
                  this.props,
                ),
              );
            }),
            a
          );
        })(o("WAWebHocComponent_DEPRECATED.react").WrappedComponent)),
        (n.displayName =
          "Timer(" +
          o("WAWebHocComponent_DEPRECATED.react").getHocComponentDisplayName(
            t,
          ) +
          ")"),
        (n.wrappedComponent = null),
        n
      );
    }
    l.default = _;
  },
  98,
);
