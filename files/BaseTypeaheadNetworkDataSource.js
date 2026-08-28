__d(
  "BaseTypeaheadNetworkDataSource",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e(e, t) {
        ((this.$1 = e), (this.$2 = t));
      }
      var t = e.prototype;
      return (
        (t.fetchNetwork = function (t) {
          var e = this;
          return this.$1.fetch(t).then(function (n) {
            var r = n.requestQueryVariables,
              o = n.response;
            return { entries: e.$2(o, r), params: t };
          });
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
