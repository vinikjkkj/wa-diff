__d(
  "WAWebToastAddedProductToCart",
  [
    "fbt",
    "WAWebBizShowCartAction",
    "WAWebCartLogEvents",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUtilsLogQplEvents",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e, t) {
      var n = function () {
        (o("WAWebUtilsLogQplEvents").qplStartCartView("Toast"),
          r("WAWebBizShowCartAction")(e.catalogWid.toString(), void 0, t),
          o("WAWebCartLogEvents").logCartToastClick(
            e.catalogWid.toString(),
            t,
          ));
      };
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, {
          action: {
            actionText: s._(/*BTDS*/ "View cart"),
            onAction: function () {
              n();
            },
          },
          duration: 6e3,
          msg: s._(/*BTDS*/ "Item added to cart"),
        }),
      );
    }
    l.default = c;
  },
  226,
);
