__d(
  "CAAWebEventRequestIdSingleton",
  ["uuidv4"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
        function e() {
          this.$1 = r("uuidv4")();
        }
        var t = e.prototype;
        return (
          (t.getEventRequestID = function () {
            return this.$1;
          }),
          (t.setEventRequestID = function (t) {
            this.$1 = t;
          }),
          e
        );
      })(),
      s = new e();
    l.default = s;
  },
  98,
);
