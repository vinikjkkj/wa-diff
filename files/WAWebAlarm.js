__d(
  "WAWebAlarm",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebBaseJSHaltDetector",
    "WAWebClock",
    "WAWebJSHaltDetector",
    "isStringNullOrEmpty",
    "uniqueID",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = Math.pow(2, 31) - 1,
      u = (function () {
        function t() {
          var e = this;
          this.$1 = new Map();
          var t = function () {
            e.$1.size > 0 && e.$2();
          };
          (o("WAWebJSHaltDetector").jsHaltDetector.on(
            o("WAWebBaseJSHaltDetector").JS_HALT_EVENT,
            t,
          ),
            o("WAWebJSHaltDetector").jsHaltDetector.on(
              o("WAWebBaseJSHaltDetector").CLOCK_CHANGE_BACKWARDS_EVENT,
              t,
            ),
            o("WAWebClock").Clock.on(
              o("WAWebClock").SKEW_CHANGE_EVENT,
              this.$3.bind(this),
            ));
        }
        var n = t.prototype;
        return (
          (n.setLocalTimeout = function (t, n, r) {
            return this.$4(!1, t, n, r);
          }),
          (n.setGlobalTimeout = function (t, n, r) {
            return this.$4(!0, t, n, r);
          }),
          (n.clearTimeout = function (t) {
            if (!r("isStringNullOrEmpty")(t)) {
              var e = this.$1.get(t);
              e && (self.clearTimeout(e.timeoutId), this.$1.delete(t));
            }
          }),
          (n.$4 = function (n, a, i, l) {
            var t = this,
              u = !r("isStringNullOrEmpty")(l);
            u && this.clearTimeout(l);
            var c = r("isStringNullOrEmpty")(l)
                ? r("uniqueID")("alarm_timer_")
                : l,
              d = i - this.$5(n),
              m = Math.min(d, s);
            if (d < 0)
              return (
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Alarm:setTimeout:Cannot set alarm in the past.",
                    ])),
                ),
                a(),
                c
              );
            var p = self.setTimeout(function () {
                i - t.$5(n) < o("WAWebJSHaltDetector").DEFAULT_THRESHOLD
                  ? (t.$1.delete(c), a())
                  : t.$4(n, a, i, c);
              }, m),
              _ = { isGlobal: n, fn: a, expiration: i, timeoutId: p };
            return (this.$1.set(c, _), c);
          }),
          (n.$2 = function () {
            var e = this,
              t = new Map(this.$1);
            t.forEach(function (t, n) {
              var r = t.expiration,
                o = t.fn,
                a = t.isGlobal;
              r < e.$5(a) ? (e.clearTimeout(n), o()) : e.$4(a, o, r, n);
            });
          }),
          (n.$3 = function () {
            var e = this,
              t = new Map(this.$1);
            t.forEach(function (t, n) {
              var r = t.expiration,
                o = t.fn,
                a = t.isGlobal;
              a && e.$4(a, o, r, n);
            });
          }),
          (n.$5 = function (t) {
            return (
              t === void 0 && (t = !1),
              (t
                ? o("WATimeUtils").unixTime()
                : o("WATimeUtils").unixTimeWithoutClockSkewCorrection()) * 1e3
            );
          }),
          t
        );
      })(),
      c = new u(),
      d = c;
    l.default = d;
  },
  98,
);
