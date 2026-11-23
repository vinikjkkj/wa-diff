__d(
  "WAWebUseCartProductQuantity",
  ["WAWebCartCollection", "react", "useWAWebEventTargetValue"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useMemo,
      u = function (t) {
        var e,
          n,
          r =
            (e = (n = t.catalogWid) == null ? void 0 : n.toString()) != null
              ? e
              : null;
        return r ? o("WAWebCartCollection").CartCollection.findCart(r) : null;
      },
      c = function (t, n) {
        var e,
          r,
          o =
            (e = n == null ? void 0 : n.cartItemCollection.get(t)) != null
              ? e
              : null;
        return (r = o == null ? void 0 : o.get("quantity")) != null ? r : 0;
      },
      d = function (t, n) {
        var e,
          r = new Set(
            t == null ||
              (e = t.variantInfo) == null ||
              (e = e.availability) == null
              ? void 0
              : e.listing.map(function (e) {
                  return e.product_id;
                }),
          ),
          o = 0;
        return (
          n == null ||
            n.cartItemCollection.forEach(function (e) {
              r != null && r.has(e.id) && (o += e.quantity);
            }),
          o
        );
      };
    function m(e) {
      var t = s(
        function () {
          return u(e);
        },
        [e],
      );
      return r("useWAWebEventTargetValue")(
        t,
        "change:cartItemCollection",
        function () {
          return c(e.id.toString(), t);
        },
        [e.id],
      );
    }
    function p(e) {
      var t = s(
        function () {
          return u(e);
        },
        [e],
      );
      return r("useWAWebEventTargetValue")(
        t,
        "change:cartItemCollection",
        function () {
          return d(e, t);
        },
        [e],
      );
    }
    ((l.useCartProductQuantity = m), (l.useCartProductQuantityMultiple = p));
  },
  98,
);
