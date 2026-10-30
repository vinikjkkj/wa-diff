__d(
  "WAWebOrderEnterPriceToastMessage",
  ["fbt", "WAWebNoop", "WDSToastImperativeHost"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
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
    function u(t, n) {
      var a = t.reduce(function (e, t) {
          var r,
            o = (r = t.price) != null ? r : n[t.id];
          return (Number.isInteger(o) || e.push(t.name || ""), e);
        }, []),
        i = e(a);
      i &&
        o("WDSToastImperativeHost").showWDSToast({
          action: { label: s._(/*BTDS*/ "OK"), onPress: r("WAWebNoop") },
          message: i,
        });
    }
    ((l.getErrorMsgFromProducts = e), (l.notifyIfAnyProductMissesPrice = u));
  },
  226,
);
