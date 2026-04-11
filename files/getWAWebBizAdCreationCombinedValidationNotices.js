__d(
  "getWAWebBizAdCreationCombinedValidationNotices",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e.reduce(function (e, t) {
        return (
          Object.keys(t).forEach(function (n) {
            var r,
              o = (r = e[n]) != null ? r : [];
            e[n] = [].concat(o, t[n]);
          }),
          e
        );
      }, {});
    }
    i.default = e;
  },
  66,
);
