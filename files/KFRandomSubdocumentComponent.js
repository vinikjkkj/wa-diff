__d(
  "KFRandomSubdocumentComponent",
  ["KFComponentNames", "randomShuffle"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        ((this.$1 = e), (this.$2 = []));
      }
      var t = e.prototype;
      return (
        (t.$3 = function () {
          this.$2.length === 0 && this.$4();
        }),
        (t.$4 = function () {
          this.$2 = r("randomShuffle")(this.$1.slice(0));
        }),
        (t.getNextRandomSubdocumentIndex = function () {
          return (this.$3(), this.$2.pop());
        }),
        (t.toString = function () {
          return o("KFComponentNames").RANDOM_SUBDOCUMENT;
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
