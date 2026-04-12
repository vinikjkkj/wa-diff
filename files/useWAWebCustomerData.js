__d(
  "useWAWebCustomerData",
  ["WAWebCustomerDataCollection", "react", "useWAWebListener"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useState;
    function d(e, t) {
      (e === void 0 && (e = "modifiedAt"), t === void 0 && (t = "desc"));
      var n = u(
          function () {
            var n = t === "asc" ? 1 : -1;
            return o("WAWebCustomerDataCollection")
              .CustomerDataCollection.getCustomerModels()
              .slice()
              .sort(function (t, r) {
                var o, a;
                return (
                  n *
                  (((o = t[e]) != null ? o : 0) - ((a = r[e]) != null ? a : 0))
                );
              });
          },
          [e, t],
        ),
        r = c(n),
        a = r[0],
        i = r[1];
      return (
        o("useWAWebListener").useListeners([
          {
            source: o("WAWebCustomerDataCollection").CustomerDataCollection,
            eventOrEvents: ["add", "remove", "change"],
            callback: function () {
              i(n());
            },
          },
        ]),
        a
      );
    }
    l.default = d;
  },
  98,
);
