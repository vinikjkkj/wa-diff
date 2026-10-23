__d(
  "WAWebUseCartProductQuantity",
  [
    "WAWebCartCollection",
    "react",
    "react-compiler-runtime",
    "useWAWebEventTargetValue",
  ],
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
      var t = o("react-compiler-runtime").c(7),
        n;
      t[0] !== e ? ((n = u(e)), (t[0] = e), (t[1] = n)) : (n = t[1]);
      var a = n,
        i;
      t[2] !== a || t[3] !== e.id
        ? ((i = function () {
            return c(e.id.toString(), a);
          }),
          (t[2] = a),
          (t[3] = e.id),
          (t[4] = i))
        : (i = t[4]);
      var l;
      return (
        t[5] !== e.id ? ((l = [e.id]), (t[5] = e.id), (t[6] = l)) : (l = t[6]),
        r("useWAWebEventTargetValue")(a, "change:cartItemCollection", i, l)
      );
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(7),
        n;
      t[0] !== e ? ((n = u(e)), (t[0] = e), (t[1] = n)) : (n = t[1]);
      var a = n,
        i;
      t[2] !== a || t[3] !== e
        ? ((i = function () {
            return d(e, a);
          }),
          (t[2] = a),
          (t[3] = e),
          (t[4] = i))
        : (i = t[4]);
      var l;
      return (
        t[5] !== e ? ((l = [e]), (t[5] = e), (t[6] = l)) : (l = t[6]),
        r("useWAWebEventTargetValue")(a, "change:cartItemCollection", i, l)
      );
    }
    ((l.useCartProductQuantity = m), (l.useCartProductQuantityMultiple = p));
  },
  98,
);
