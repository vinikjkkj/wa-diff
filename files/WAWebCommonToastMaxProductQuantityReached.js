__d(
  "WAWebCommonToastMaxProductQuantityReached",
  [
    "fbt",
    "WAWebBizCartConstants",
    "WAWebBizGatingUtils",
    "WAWebFbtCommon",
    "WAWebToast.react",
    "WAWebToastManager",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e, t) {
      (e === void 0 && (e = o("WAWebBizCartConstants").CART_ITEM_MAX_QUANTITY),
        t === void 0 && (t = !1));
      var n =
          o("WAWebBizGatingUtils").isQuantityControlsFeatureEnabled() || t
            ? null
            : {
                actionText: r("WAWebFbtCommon")("GOT IT"),
                dismiss: !0,
                theme: "success",
              },
        a = s._(
          /*BTDS*/ '_j{"*":{"*":"Only {max-number-of-items} of these items are currently available.","_1":"Only {max-number-of-items} of these items is currently available."}}',
          [s._param("max-number-of-items", e, [0]), s._plural(e)],
        );
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, {
          action: n,
          duration: 6e3,
          msg: a,
        }),
      );
    }
    l.default = c;
  },
  226,
);
