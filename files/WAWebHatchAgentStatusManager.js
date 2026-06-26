__d(
  "WAWebHatchAgentStatusManager",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
        function e() {
          ((this.$1 = null), (this.$2 = []));
        }
        var t = e.prototype;
        return (
          (t.subscribeToStatusText = function (t) {
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
          (t.getAgentStatus = function () {
            return this.$1;
          }),
          (t.setAgentStatus = function (t) {
            ((this.$1 = t), this.$3(this.$4(t)));
          }),
          (t.clearAgentStatus = function () {
            ((this.$1 = null), this.$3(null));
          }),
          (t.__resetForTesting = function () {
            ((this.$1 = null), (this.$2 = []));
          }),
          (t.$4 = function (t) {
            var e = t.activityEmoji,
              n = t.activityText;
            return e != null && e !== "" ? e + " " + n : n;
          }),
          (t.$3 = function (t) {
            for (var e of [].concat(this.$2)) e(t);
          }),
          e
        );
      })(),
      l = new e(),
      s = l;
    i.default = s;
  },
  66,
);
