__d(
  "WAWebUseCartProductQuantity",
  ["WAWebCartCollection", "react", "useWAWebListener"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useMemo,
      d = s.useState,
      m = function (t) {
        var e,
          n,
          r =
            (e = (n = t.catalogWid) == null ? void 0 : n.toString()) != null
              ? e
              : null;
        return r ? o("WAWebCartCollection").CartCollection.findCart(r) : null;
      },
      p = function (t, n) {
        var e,
          r,
          o =
            (e = n == null ? void 0 : n.cartItemCollection.get(t)) != null
              ? e
              : null;
        return (r = o == null ? void 0 : o.get("quantity")) != null ? r : 0;
      },
      _ = function (t, n) {
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
    function f(e) {
      var t = c(
          function () {
            return m(e);
          },
          [e],
        ),
        n = d(p(e.id.toString(), t)),
        r = n[0],
        a = n[1];
      return (
        u(
          function () {
            a(p(e.id.toString(), t));
          },
          [e.id, t],
        ),
        o("useWAWebListener").useListener(
          t,
          "change:cartItemCollection",
          function () {
            a(p(e.id.toString(), t));
          },
        ),
        r
      );
    }
    function g(e) {
      var t = c(
          function () {
            return m(e);
          },
          [e],
        ),
        n = d(_(e, t)),
        r = n[0],
        a = n[1];
      return (
        u(
          function () {
            a(_(e, t));
          },
          [e, t],
        ),
        o("useWAWebListener").useListener(
          t,
          "change:cartItemCollection",
          function () {
            a(_(e, t));
          },
        ),
        r
      );
    }
    ((l.useCartProductQuantity = f), (l.useCartProductQuantityMultiple = g));
  },
  98,
);
