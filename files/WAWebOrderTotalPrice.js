__d(
  "WAWebOrderTotalPrice",
  [
    "fbt",
    "WAWebBizEntryPoint",
    "WAWebButton.react",
    "WAWebOrdersExpansionUtils",
    "WAWebText_DONOTUSE.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { errorLabel: { textAlign: "x2b8uid", $$css: !0 } };
    function d(e) {
      var t = e.disabled,
        n = e.onClick,
        r = e.testid,
        a = e.title;
      return u.jsx("div", {
        className: "x6s0dn4 x78zum5 xdt5ytf x98l61r",
        children: u.jsx(o("WAWebButton.react").Button, {
          type: "primary",
          disabled: t,
          onClick: n,
          testid: void 0,
          children: a,
        }),
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t = e.entryPoint,
        n = t === void 0 ? null : t,
        a = e.onClick,
        i = a === void 0 ? null : a;
      return n === r("WAWebBizEntryPoint").FROM_CART &&
        i != null &&
        o("WAWebOrdersExpansionUtils").isOrderExpansionEnabled()
        ? u.jsx("div", {
            className: "x6s0dn4 x78zum5 xdt5ytf x98l61r",
            children: u.jsx(o("WAWebButton.react").Button, {
              type: "secondary",
              onClick: i,
              testid: void 0,
              children: s._(/*BTDS*/ "Decline cart"),
            }),
          })
        : null;
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = e.confirmTitle,
        n = e.disabled,
        r = e.entryPoint,
        a = r === void 0 ? null : r,
        i = e.error,
        l = i === void 0 ? null : i,
        s = e.onConfirm,
        p = e.onDeclineOrder,
        _ = p === void 0 ? null : p,
        f = e.testid,
        g = e.title,
        h = e.totalPrice,
        y = e.visible,
        C = e.xstyle;
      return y
        ? u.jsxs(o("WAWebText_DONOTUSE.react").TextDiv, {
            xstyle: C,
            children: [
              l == null
                ? u.jsxs("div", {
                    className: "x78zum5 x1q0g3np x117nqv4 x1qughib",
                    "data-testid": void 0,
                    children: [g, u.jsx("p", { children: h })],
                  })
                : u.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
                    color: "danger",
                    size: "16",
                    xstyle: c.errorLabel,
                    children: l,
                  }),
              u.jsx(d, {
                title: t,
                onClick: s,
                disabled: n || !!l,
                testid: void 0,
              }),
              u.jsx(m, { entryPoint: a, onClick: _ }),
            ],
          })
        : null;
    }
    ((p.displayName = p.name + " [from " + i.id + "]"),
      (l.OrderApplyChangesButton = d),
      (l.OrderTotalPrice = p));
  },
  226,
);
