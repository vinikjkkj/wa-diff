__d(
  "WAFtsTokenizerBaseNormalizer",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e(e) {
        var t = this,
          n = [];
        ((this.$1 = new Map()),
          e.forEach(function (e) {
            var r = e[0],
              o = e[1];
            (t.$1.set(r, o), n.push(r));
          }),
          (this.$2 = new RegExp(n.join("|"), "g")));
      }
      var t = e.prototype;
      return (
        (t.normalize = function (t) {
          var e = this;
          return (
            t === void 0 && (t = ""),
            t.replace(this.$2, function (t) {
              var n = e.$1.get(t);
              return n != null ? n : t;
            })
          );
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
