__d(
  "WAWebOrderEnterPriceToastMessage",
  ["fbt", "WAWebToast.react", "WAWebToastManager", "react"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.length;
      return t === 0
        ? ""
        : t === 1
          ? s._(/*BTDS*/ "Enter a price for {first-product-name}", [
              s._param("first-product-name", e[0]),
            ])
          : t === 2
            ? s._(
                /*BTDS*/ "Enter prices for {first-product-name} and {second-product-name}",
                [
                  s._param("first-product-name", e[0]),
                  s._param("second-product-name", e[1]),
                ],
              )
            : s._(
                /*BTDS*/ '_j{"*":"Enter prices for {first-product-name}, {second-product-name} and {other-items} other items","_1":"Enter prices for {first-product-name}, {second-product-name} and 1 other item"}',
                [
                  s._plural(t - 2, "other-items"),
                  s._param("first-product-name", e[0]),
                  s._param("second-product-name", e[1]),
                ],
              );
    }
    var d = function (t, n) {
      var e = t.reduce(function (e, t) {
          var r,
            o = (r = t.price) != null ? r : n[t.id];
          return (Number.isInteger(o) || e.push(t.name || ""), e);
        }, []),
        r = c(e);
      r &&
        o("WAWebToastManager").ToastManager.open(
          u.jsx(o("WAWebToast.react").Toast, {
            duration: 1e4,
            msg: r,
            action: {
              actionText: s._(/*BTDS*/ "OK"),
              dismiss: !0,
              theme: "success",
            },
          }),
        );
    };
    ((l.getErrorMsgFromProducts = c), (l.notifyIfAnyProductMissesPrice = d));
  },
  226,
);
