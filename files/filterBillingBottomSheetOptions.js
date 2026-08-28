__d(
  "filterBillingBottomSheetOptions",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      if (!e) return [];
      var n = e.filter(function (e) {
        var n;
        return (n = e.keywords) == null
          ? void 0
          : n.some(function (e) {
              return e
                .toString()
                .toLocaleLowerCase()
                .includes(t.toLocaleLowerCase());
            });
      });
      return n.length > 0
        ? n
        : e.filter(function (e) {
            var n,
              r = e.label
                .toString()
                .toLocaleLowerCase()
                .includes(t.toLocaleLowerCase()),
              o =
                (n = e.helperText) == null
                  ? void 0
                  : n
                      .toString()
                      .toLocaleLowerCase()
                      .includes(t.toLocaleLowerCase());
            return r || o === !0;
          });
    }
    i.default = e;
  },
  66,
);
