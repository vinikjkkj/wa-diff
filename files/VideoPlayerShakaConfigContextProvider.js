__d(
  "VideoPlayerShakaConfigContextProvider",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e() {
        this.$1 = {};
      }
      var t = e.prototype;
      return (
        (t.setContext = function (t, n) {
          if (this.$1[t] !== n) {
            var e;
            this.$1 = babelHelpers.extends(
              {},
              this.$1,
              ((e = {}), (e[t] = n), e),
            );
          }
        }),
        (t.setAllContexts = function (t) {
          this.$1 = t;
        }),
        (t.getAllContexts = function () {
          return this.$1;
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
