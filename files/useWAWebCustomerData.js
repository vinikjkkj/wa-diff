__d(
  "useWAWebCustomerData",
  [
    "WAWebCustomerDataCollection",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useState;
    function d(e, t) {
      var n = o("react-compiler-runtime").c(6),
        r = e === void 0 ? "modifiedAt" : e,
        a = t === void 0 ? "desc" : t,
        i;
      n[0] !== r || n[1] !== a
        ? ((i = function () {
            var e = a === "asc" ? 1 : -1;
            return o("WAWebCustomerDataCollection")
              .CustomerDataCollection.getCustomerModels()
              .slice()
              .sort(function (t, n) {
                var o, a;
                return (
                  e *
                  (((o = t[r]) != null ? o : 0) - ((a = n[r]) != null ? a : 0))
                );
              });
          }),
          (n[0] = r),
          (n[1] = a),
          (n[2] = i))
        : (i = n[2]);
      var l = i,
        s = c(l),
        u = s[0],
        d = s[1],
        m;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = ["add", "remove", "change"]), (n[3] = m))
        : (m = n[3]);
      var p;
      return (
        n[4] !== l
          ? ((p = [
              {
                source: o("WAWebCustomerDataCollection").CustomerDataCollection,
                eventOrEvents: m,
                callback: function () {
                  d(l());
                },
              },
            ]),
            (n[4] = l),
            (n[5] = p))
          : (p = n[5]),
        o("useWAWebListener").useListeners(p),
        u
      );
    }
    l.default = d;
  },
  98,
);
