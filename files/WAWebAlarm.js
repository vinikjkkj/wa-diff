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
            return this.$4({ alarmId: r, expiration: n, fn: t, isGlobal: !1 });
          }),
          (n.setGlobalTimeout = function (t, n, r) {
            return this.$4({ alarmId: r, expiration: n, fn: t, isGlobal: !0 });
          }),
          (n.clearTimeout = function (t) {
            if (!r("isStringNullOrEmpty")(t)) {
              var e = this.$1.get(t);
              e && (self.clearTimeout(e.timeoutId), this.$1.delete(t));
            }
          }),
          (n.$4 = function (n) {
            var t = this,
              a = n.alarmId,
              i = n.expiration,
              l = n.fn,
              u = n.isGlobal,
              c = !r("isStringNullOrEmpty")(a);
            c && this.clearTimeout(a);
            var d = r("isStringNullOrEmpty")(a)
                ? r("uniqueID")("alarm_timer_")
                : a,
              m = i - this.$5(u),
              p = Math.min(m, s);
            if (m < 0)
              return (
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Alarm:setTimeout:Cannot set alarm in the past.",
                    ])),
                ),
                l(),
                d
              );
            var _ = self.setTimeout(function () {
                i - t.$5(u) < o("WAWebJSHaltDetector").DEFAULT_THRESHOLD
                  ? (t.$1.delete(d), l())
                  : t.$4({ alarmId: d, expiration: i, fn: l, isGlobal: u });
              }, p),
              f = { isGlobal: u, fn: l, expiration: i, timeoutId: _ };
            return (this.$1.set(d, f), d);
          }),
          (n.$2 = function () {
            var e = this,
              t = new Map(this.$1);
            t.forEach(function (t, n) {
              var r = t.expiration,
                o = t.fn,
                a = t.isGlobal;
              r < e.$5(a)
                ? (e.clearTimeout(n), o())
                : e.$4({ alarmId: n, expiration: r, fn: o, isGlobal: a });
            });
          }),
          (n.$3 = function () {
            var e = this,
              t = new Map(this.$1);
            t.forEach(function (t, n) {
              var r = t.expiration,
                o = t.fn,
                a = t.isGlobal;
              a && e.$4({ alarmId: n, expiration: r, fn: o, isGlobal: a });
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
