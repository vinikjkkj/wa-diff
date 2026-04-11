__d(
  "WAWebChatEphemeralExemptionCache",
  [],
  function (t, n, r, o, a, i) {
    var e = (function () {
        function e() {
          this.chatEphemeralExemptionMap = new Map();
        }
        var t = e.prototype;
        return (
          (t.has = function (t) {
            return this.chatEphemeralExemptionMap.has(t);
          }),
          (t.get = function (t) {
            var e;
            return (e = this.chatEphemeralExemptionMap.get(t)) != null
              ? e
              : null;
          }),
          (t.add = function (t, n) {
            this.chatEphemeralExemptionMap.set(t, n);
          }),
          (t.clear = function () {
            this.chatEphemeralExemptionMap.clear();
          }),
          e
        );
      })(),
      l = new e();
    i.default = l;
  },
  66,
);
