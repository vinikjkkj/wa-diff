__d(
  "WAWebHatchShoppingVariants",
  ["WAWebHatchJsonReaders", "WAWebHatchShoppingMoney"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (!e.variantsValid || t.size !== e.groups.length) return null;
      var n = e.groups.map(function (e) {
        return e.options.find(function (n) {
          return n.value === t.get(e.dimension);
        });
      });
      if (
        n.some(function (e) {
          return e == null || !e.available;
        })
      )
        return null;
      var r = n.filter(Boolean).map(function (e) {
          return e.productIds;
        }),
        o =
          r.length === 0
            ? [e.id]
            : r[0].filter(function (e) {
                return r.every(function (t) {
                  return t.includes(e);
                });
              }),
        a = m(o, e.id);
      return !u(a) ||
        p(e.variantStock.get(a)) ||
        (a === e.id && (e.available === !1 || p(e.stockStatus)))
        ? null
        : s(e, a);
    }
    function s(e, t) {
      var n,
        r,
        a,
        i =
          t === e.id
            ? { current: e.currentPrice, original: e.originalPrice }
            : e.variantPrices.get(t),
        l = (n = e.variantImages.get(t)) != null ? n : [];
      return {
        id: t,
        price: o("WAWebHatchShoppingMoney").getShoppingPrice(
          (r = i == null ? void 0 : i.current) != null ? r : null,
          (a = i == null ? void 0 : i.original) != null ? a : null,
        ),
        images: l.length > 0 || t !== e.id ? l : e.images,
      };
    }
    function u(e, t) {
      return (
        t === void 0 && (t = 512),
        e == null
          ? !1
          : [
              e !== "",
              e === e.trim(),
              e.length <= t,
              !/[\0-\x1F\x7F-\x9F]/.test(e),
            ].every(Boolean)
      );
    }
    function c(e) {
      var t,
        n = _(e, "dimension"),
        r = _(e, "display_name"),
        a =
          (t = o("WAWebHatchJsonReaders").readArray(e, "options")) != null
            ? t
            : [],
        i = a.map(d).filter(Boolean),
        l =
          new Set(
            i.map(function (e) {
              return e.value;
            }),
          ).size === i.length,
        s = i.flatMap(function (e) {
          return e.productIds;
        }),
        u = new Set(s).size === s.length;
      return [
        n != null,
        r != null,
        i.length > 0,
        i.length === a.length,
        l,
        u,
      ].every(Boolean) &&
        n != null &&
        r != null
        ? { dimension: n, label: r, options: i }
        : null;
    }
    function d(e) {
      var t = _(e, "label"),
        n = o("WAWebHatchJsonReaders").readString(e, "value"),
        r = o("WAWebHatchJsonReaders").readArray(e, "product_ids");
      if (r == null) return null;
      var a = r.filter(function (e) {
        return typeof e == "string";
      });
      return t == null ||
        n == null ||
        n === "" ||
        o("WAWebHatchJsonReaders").readBool(e, "is_available") == null ||
        (a.length === 0 &&
          o("WAWebHatchJsonReaders").readBool(e, "is_available") !== !1) ||
        a.length !== r.length ||
        !a.every(function (e) {
          return u(e);
        })
        ? null
        : {
            label: t,
            value: n,
            available:
              o("WAWebHatchJsonReaders").readBool(e, "is_available") === !0,
            productIds: Array.from(new Set(a)),
          };
    }
    function m(e, t) {
      return e.includes(t) ? t : e.length === 1 ? e[0] : null;
    }
    function p(e) {
      return ["OUT_OF_STOCK", "NOT_AVAILABLE"].includes(e != null ? e : "");
    }
    function _(e, t) {
      var n,
        r =
          (n = o("WAWebHatchJsonReaders").readString(e, t)) == null
            ? void 0
            : n.trim();
      return r === "" ? null : r != null ? r : null;
    }
    ((l.resolveShoppingVariant = e), (l.isShoppingId = u), (l.decodeGroup = c));
  },
  98,
);
