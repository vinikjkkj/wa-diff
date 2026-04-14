__d(
  "WAWebCommonQuantityControls.react",
  [
    "fbt",
    "WAWebBizCartConstants",
    "WAWebCommonToastMaxProductQuantityReached",
    "WAWebL10N",
    "WAWebPlusIcon.react",
    "WAWebQuantityControlsRemoveItemBtnDarkIcon.react",
    "WAWebQuantityControlsRemoveItemBtnIcon.react",
    "WAWebStopEvent",
    "WAWebThemeContext",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useMemo,
      d = {
        svg: {
          color: "xhslqc4",
          display: "x78zum5",
          justifyContent: "xl56j7k",
          $$css: !0,
        },
      };
    function m(e) {
      var t = e.onClick;
      return u.jsx("button", {
        className:
          "x1280gxy xuv73ul x1xeqo68 xpfj8cy xy5ipz4 xbrszos xea3l6g x18isctg x2q3nzr x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x9f619 xhslqc4 x1ypdohk x10w6t97 x1td3qas xajj3lu x1ss49kh xtj9sai xgak4ha x1lwdpx3 xb90sal x1rlzdi xrhz2io xysibl7 x4yb96v x1kylhsf xed3198 x12ln5q2",
        title: s._(/*BTDS*/ "Add 1 item"),
        onClick: t,
        children: u.jsx(o("WAWebPlusIcon.react").PlusIcon, {
          xstyle: d.svg,
          width: 20,
        }),
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = e.isDarkTheme,
        n = e.onClick,
        r = t
          ? o("WAWebQuantityControlsRemoveItemBtnDarkIcon.react")
              .QuantityControlsRemoveItemBtnDarkIcon
          : o("WAWebQuantityControlsRemoveItemBtnIcon.react")
              .QuantityControlsRemoveItemBtnIcon;
      return u.jsx("button", {
        className:
          "x1280gxy xuv73ul x1xeqo68 xpfj8cy xy5ipz4 xbrszos xea3l6g x18isctg x2q3nzr x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x9f619 xhslqc4 x1ypdohk x10w6t97 x1td3qas xajj3lu x1ss49kh xtj9sai xgak4ha x1lwdpx3 xb90sal x1rlzdi xrhz2io xysibl7 x4yb96v x1kylhsf xed3198 x12ln5q2",
        title: s._(/*BTDS*/ "Remove 1 item"),
        onClick: n,
        children: u.jsx(r, { xstyle: d.svg, width: 14, height: 14 }),
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      var t = e.quantity,
        n = e.quantityTitle;
      return c(
        function () {
          return u.jsx("div", {
            className:
              "x6s0dn4 x78zum5 x1jchvi3 x10w6t97 xl56j7k x1td3qas xpfry4w xbrszos xea3l6g x18isctg x2q3nzr x17t9dm2",
            title: n,
            children: t,
          });
        },
        [t, n],
      );
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t = o("WAWebThemeContext").useIsDarkTheme(),
        n = e.quantity,
        a = e.quantityTitle,
        i = a === void 0 ? s._(/*BTDS*/ "Selected items") : a,
        l = e.isCollapsed,
        c = l === void 0 ? !1 : l,
        d = e.onAddOneClick,
        f = e.onRemoveOneClick,
        g = e.maxQuantity,
        h =
          g === void 0 ? o("WAWebBizCartConstants").CART_ITEM_MAX_QUANTITY : g,
        y = function (t) {
          (o("WAWebStopEvent").stopEvent(t), f());
        },
        C = function (t) {
          (o("WAWebStopEvent").stopEvent(t),
            n < h
              ? d()
              : r("WAWebCommonToastMaxProductQuantityReached")(h, !0));
        },
        b = u.jsxs(u.Fragment, {
          children: [
            u.jsx(p, { isDarkTheme: t, onClick: y }),
            u.jsx("div", {
              className:
                "x6s0dn4 x14ug900 x78zum5 x1jchvi3 x10w6t97 xl56j7k x1td3qas",
              title: i,
              children: r("WAWebL10N").n(n),
            }),
            u.jsx(m, { onClick: C }),
          ],
        });
      return (
        c && (b = u.jsx(_, { quantity: n, quantityTitle: i })),
        n === 0 && (b = u.jsx(m, { onClick: C })),
        u.jsx("div", { className: "x3nfvp2 x13a6bvl", children: b })
      );
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  226,
);
