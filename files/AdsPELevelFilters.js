__d(
  "AdsPELevelFilters",
  ["AdsPEFilterFieldsImpl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e() {
        ((this.$1 = { campaignGroup: [], campaign: [], adgroup: [] }),
          (this.$2 = { campaignGroup: [], campaign: [], adgroup: [] }));
      }
      var t = e.prototype;
      return (
        (t.addFilter = function (t, n) {
          var e = o("AdsPEFilterFieldsImpl").getFilterFieldAdLevel(n.field);
          (this.$1[e].push(t), this.$2[e].push(n));
        }),
        (t.addFilterFor = function (t, n) {
          this.$1[t].push(n);
        }),
        (t.getFiltersFor = function (t) {
          return this.$1[t];
        }),
        (t.getFilterSetFor = function (t) {
          return this.$2[t];
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
