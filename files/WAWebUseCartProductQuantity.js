__d(
  "WAWebUseCartProductQuantity",
  [
    "WAWebCartCollection",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
  ],
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
      var t = o("react-compiler-runtime").c(12),
        n;
      t[0] !== e ? ((n = m(e)), (t[0] = e), (t[1] = n)) : (n = t[1]);
      var r = n,
        a;
      t[2] !== r || t[3] !== e.id
        ? ((a = p(e.id.toString(), r)), (t[2] = r), (t[3] = e.id), (t[4] = a))
        : (a = t[4]);
      var i = d(a),
        l = i[0],
        s = i[1],
        c,
        _;
      (t[5] !== r || t[6] !== e.id
        ? ((c = function () {
            s(p(e.id.toString(), r));
          }),
          (_ = [e.id, r]),
          (t[5] = r),
          (t[6] = e.id),
          (t[7] = c),
          (t[8] = _))
        : ((c = t[7]), (_ = t[8])),
        u(c, _));
      var f;
      return (
        t[9] !== r || t[10] !== e.id
          ? ((f = function () {
              s(p(e.id.toString(), r));
            }),
            (t[9] = r),
            (t[10] = e.id),
            (t[11] = f))
          : (f = t[11]),
        o("useWAWebListener").useListener(r, "change:cartItemCollection", f),
        l
      );
    }
    function g(e) {
      var t = o("react-compiler-runtime").c(12),
        n;
      t[0] !== e ? ((n = m(e)), (t[0] = e), (t[1] = n)) : (n = t[1]);
      var r = n,
        a;
      t[2] !== r || t[3] !== e
        ? ((a = _(e, r)), (t[2] = r), (t[3] = e), (t[4] = a))
        : (a = t[4]);
      var i = d(a),
        l = i[0],
        s = i[1],
        c,
        p;
      (t[5] !== r || t[6] !== e
        ? ((c = function () {
            s(_(e, r));
          }),
          (p = [e, r]),
          (t[5] = r),
          (t[6] = e),
          (t[7] = c),
          (t[8] = p))
        : ((c = t[7]), (p = t[8])),
        u(c, p));
      var f;
      return (
        t[9] !== r || t[10] !== e
          ? ((f = function () {
              s(_(e, r));
            }),
            (t[9] = r),
            (t[10] = e),
            (t[11] = f))
          : (f = t[11]),
        o("useWAWebListener").useListener(r, "change:cartItemCollection", f),
        l
      );
    }
    ((l.useCartProductQuantity = f), (l.useCartProductQuantityMultiple = g));
  },
  98,
);
