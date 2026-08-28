__d(
  "BaseTypeaheadDataProviderQueryVariablesBuilder",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e(e) {
        ((this.$1 = null), (this.$2 = null), (this.$3 = e));
      }
      var t = e.prototype;
      return (
        (t.build = function () {
          return this.$3(this.$1, this.$2);
        }),
        (t.setComputedVariables = function (t) {
          return ((this.$2 = t), this);
        }),
        (t.setDefaultVariables = function (t) {
          return ((this.$1 = t), this);
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
