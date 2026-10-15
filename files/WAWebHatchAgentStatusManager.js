__d(
  "WAWebHatchAgentStatusManager",
  ["WAWebBaseJSHaltDetector", "WAWebJSHaltDetector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 3e5,
      s = (function () {
        function t() {
          var e = this;
          ((this.$1 = null),
            (this.$2 = []),
            (this.$3 = 0),
            (this.$4 = null),
            (this.$8 = function () {
              Date.now() >= e.$3 && e.clearAgentStatus();
            }));
        }
        var n = t.prototype;
        return (
          (n.subscribeToStatusText = function (t) {
            var e = this;
            return (
              this.$2.push(t),
              function () {
                e.$2 = e.$2.filter(function (e) {
                  return e !== t;
                });
              }
            );
          }),
          (n.getAgentStatus = function () {
            return this.$1;
          }),
          (n.setAgentStatus = function (t) {
            ((this.$1 = t), this.$5(), this.$6(this.getDisplayText(t)));
          }),
          (n.clearAgentStatus = function () {
            (this.$7(), (this.$1 = null), this.$6(null));
          }),
          (n.__resetForTesting = function () {
            (this.$7(), (this.$1 = null), (this.$2 = []));
          }),
          (n.getDisplayText = function (t) {
            var e = t.activityEmoji,
              n = t.activityText;
            return e != null && e !== "" ? e + " " + n : n;
          }),
          (n.$6 = function (t) {
            for (var e of [].concat(this.$2)) e(t);
          }),
          (n.$5 = function () {
            var t = this;
            (this.$7(),
              (this.$3 = Date.now() + e),
              (this.$4 = self.setTimeout(function () {
                return t.clearAgentStatus();
              }, e)),
              o("WAWebJSHaltDetector").jsHaltDetector.on(
                o("WAWebBaseJSHaltDetector").JS_HALT_EVENT,
                this.$8,
              ));
          }),
          (n.$7 = function () {
            this.$4 != null &&
              (self.clearTimeout(this.$4),
              (this.$4 = null),
              o("WAWebJSHaltDetector").jsHaltDetector.off(
                o("WAWebBaseJSHaltDetector").JS_HALT_EVENT,
                this.$8,
              ));
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
