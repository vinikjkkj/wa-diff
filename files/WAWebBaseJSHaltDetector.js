__d(
  "WAWebBaseJSHaltDetector",
  ["WALogger", "WAWebEventEmitter"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = "js_halt",
      d = "clock_change_backwards",
      m = (function (t) {
        function n(e, n) {
          var r;
          return (
            (r = t.call(this) || this),
            (r.$BaseJsHaltDetector$p_1 = e),
            (r.$BaseJsHaltDetector$p_2 = n),
            r
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.startDetection = function () {
            var t = this;
            if (!this.$BaseJsHaltDetector$p_3) {
              var n = Date.now();
              ((this.$BaseJsHaltDetector$p_3 = self.setInterval(function () {
                var e = Date.now(),
                  r = e - n - t.$BaseJsHaltDetector$p_1;
                (r > t.$BaseJsHaltDetector$p_2
                  ? t.trigger(c, r)
                  : r < -t.$BaseJsHaltDetector$p_2 && t.trigger(d, r),
                  (n = e));
              }, this.$BaseJsHaltDetector$p_1)),
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "JsHaltDetector:detection started",
                    ])),
                ));
            }
          }),
          (r.stopDetection = function () {
            this.$BaseJsHaltDetector$p_3 &&
              (self.clearInterval(this.$BaseJsHaltDetector$p_3),
              (this.$BaseJsHaltDetector$p_3 = null),
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "JsHaltDetector:detection stopped",
                  ])),
              ));
          }),
          (r.restartDetection = function () {
            (this.stopDetection(),
              this.startDetection(),
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "JsHaltDetector:detection restarted",
                  ])),
              ));
          }),
          n
        );
      })(r("WAWebEventEmitter"));
    ((l.JS_HALT_EVENT = c),
      (l.CLOCK_CHANGE_BACKWARDS_EVENT = d),
      (l.BaseJsHaltDetector = m));
  },
  98,
);
