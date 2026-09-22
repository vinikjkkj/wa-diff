__d(
  "WAWebHatchChannelNotificationBus",
  ["WALogger", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function t() {
          this.$1 = [];
        }
        var n = t.prototype;
        return (
          (n.subscribe = function (t) {
            var e = this;
            this.$1.push(t);
            var n = !1;
            return function () {
              if (!n) {
                n = !0;
                var r = e.$1.indexOf(t);
                r !== -1 && e.$1.splice(r, 1);
              }
            };
          }),
          (n.publish = function (n) {
            for (var t of [].concat(this.$1))
              try {
                t(n);
              } catch (t) {
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "hatch-notification: listener failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(t))
                  .sendLogs("hatch-notification-listener-error");
              }
          }),
          (n.__resetForTesting = function () {
            this.$1 = [];
          }),
          t
        );
      })(),
      u = new s(),
      c = u;
    l.default = c;
  },
  98,
);
