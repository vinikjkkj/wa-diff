__d(
  "SubscriptionsHandler",
  ["invariant"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = ["remove", "reset", "unsubscribe", "cancel", "dispose"];
    function u(t) {
      for (var n of e) if (typeof t[n] == "function") return t[n];
    }
    function c(e) {
      var t;
      (t = u(e)) == null || t.call(e);
    }
    var d = (function () {
      function e() {
        this.$1 = [];
      }
      var t = e.prototype;
      return (
        (t.addSubscriptions = function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          (t.every(u) || s(0, 3659),
            this.$1 != null ? (this.$1 = this.$1.concat(t)) : t.forEach(c));
        }),
        (t.engage = function () {
          this.$1 == null && (this.$1 = []);
        }),
        (t.release = function () {
          this.$1 != null && (this.$1.forEach(c), (this.$1 = null));
        }),
        (t.releaseOne = function (t) {
          var e = this.$1;
          if (e != null) {
            var n = e.indexOf(t);
            n !== -1 &&
              (c(t), e.splice(n, 1), e.length === 0 && (this.$1 = null));
          }
        }),
        e
      );
    })();
    l.default = d;
  },
  98,
);
