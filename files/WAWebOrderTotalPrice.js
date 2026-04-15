__d(
  "WAWebOrderTotalPrice",
  [
    "fbt",
    "WAWebBizEntryPoint",
    "WAWebButton.react",
    "WAWebOrdersExpansionUtils",
    "WAWebText_DONOTUSE.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { errorLabel: { textAlign: "x2b8uid", $$css: !0 } };
    function d(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.disabled,
        r = e.onClick,
        a = e.testid,
        i = e.title,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = { className: "x6s0dn4 x78zum5 xdt5ytf x98l61r" }), (t[0] = l))
        : (l = t[0]);
      var s;
      return (
        t[1] !== n || t[2] !== r || t[3] !== a || t[4] !== i
          ? ((s = u.jsx(
              "div",
              babelHelpers.extends({}, l, {
                children: u.jsx(o("WAWebButton.react").Button, {
                  type: "primary",
                  disabled: n,
                  onClick: r,
                  testid: void 0,
                  children: i,
                }),
              }),
            )),
            (t[1] = n),
            (t[2] = r),
            (t[3] = a),
            (t[4] = i),
            (t[5] = s))
          : (s = t[5]),
        s
      );
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.entryPoint,
        a = e.onClick,
        i = n === void 0 ? null : n,
        l = a === void 0 ? null : a;
      if (
        i === r("WAWebBizEntryPoint").FROM_CART &&
        l != null &&
        o("WAWebOrdersExpansionUtils").isOrderExpansionEnabled()
      ) {
        var c;
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = { className: "x6s0dn4 x78zum5 xdt5ytf x98l61r" }), (t[0] = c))
          : (c = t[0]);
        var d;
        t[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = s._(/*BTDS*/ "Decline cart")), (t[1] = d))
          : (d = t[1]);
        var m;
        return (
          t[2] !== l
            ? ((m = u.jsx(
                "div",
                babelHelpers.extends({}, c, {
                  children: u.jsx(o("WAWebButton.react").Button, {
                    type: "secondary",
                    onClick: l,
                    testid: void 0,
                    children: d,
                  }),
                }),
              )),
              (t[2] = l),
              (t[3] = m))
            : (m = t[3]),
          m
        );
      }
      return null;
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(12),
        n = e.confirmTitle,
        r = e.disabled,
        a = e.entryPoint,
        i = e.error,
        l = e.onConfirm,
        s = e.onDeclineOrder,
        p = e.testid,
        _ = e.title,
        f = e.totalPrice,
        g = e.visible,
        h = e.xstyle,
        y = a === void 0 ? null : a,
        C = i === void 0 ? null : i,
        b = s === void 0 ? null : s,
        v;
      return (
        t[0] !== n ||
        t[1] !== r ||
        t[2] !== y ||
        t[3] !== C ||
        t[4] !== l ||
        t[5] !== b ||
        t[6] !== p ||
        t[7] !== _ ||
        t[8] !== f ||
        t[9] !== g ||
        t[10] !== h
          ? ((v = g
              ? u.jsxs(o("WAWebText_DONOTUSE.react").TextDiv, {
                  xstyle: h,
                  children: [
                    C == null
                      ? u.jsxs("div", {
                          className: "x78zum5 x1q0g3np x117nqv4 x1qughib",
                          "data-testid": void 0,
                          children: [_, u.jsx("p", { children: f })],
                        })
                      : u.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
                          color: "danger",
                          size: "16",
                          xstyle: c.errorLabel,
                          children: C,
                        }),
                    u.jsx(d, {
                      title: n,
                      onClick: l,
                      disabled: r || !!C,
                      testid: void 0,
                    }),
                    u.jsx(m, { entryPoint: y, onClick: b }),
                  ],
                })
              : null),
            (t[0] = n),
            (t[1] = r),
            (t[2] = y),
            (t[3] = C),
            (t[4] = l),
            (t[5] = b),
            (t[6] = p),
            (t[7] = _),
            (t[8] = f),
            (t[9] = g),
            (t[10] = h),
            (t[11] = v))
          : (v = t[11]),
        v
      );
    }
    ((l.OrderApplyChangesButton = d), (l.OrderTotalPrice = p));
  },
  226,
);
