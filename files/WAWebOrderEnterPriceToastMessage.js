__d(
  "WAWebOrderEnterPriceToastMessage",
  ["fbt", "WAWebNoop", "WDSToastImperativeHost"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = e.length;
      return t === 0
        ? ""
        : t === 1
          ? s._(/*BTDS*/ "", [s._param("first-product-name", e[0])])
          : t === 2
            ? s._(/*BTDS*/ "", [
                s._param("first-product-name", e[0]),
                s._param("second-product-name", e[1]),
              ])
            : s._(/*BTDS*/ "", [
                s._plural(t - 2, "other-items"),
                s._param("first-product-name", e[0]),
                s._param("second-product-name", e[1]),
              ]);
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
          action: { label: s._(/*BTDS*/ ""), onPress: r("WAWebNoop") },
          message: i,
        });
    }
    ((l.getErrorMsgFromProducts = e), (l.notifyIfAnyProductMissesPrice = u));
  },
  226,
);
