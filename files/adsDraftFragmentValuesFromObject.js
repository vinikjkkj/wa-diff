__d(
  "adsDraftFragmentValuesFromObject",
  ["AdsDraftFragmentValueRecord", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return r("immutable")
        .Map(e)
        .map(function (e, t) {
          return new (r("AdsDraftFragmentValueRecord"))({
            field: t,
            newValue: e,
          });
        });
    }
    l.default = e;
  },
  98,
);
