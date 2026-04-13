__d(
  "WAWebOrderDetailSellerProfile.react",
  [
    "fbt",
    "WAWebBizGatingUtils",
    "WAWebContactCollection",
    "WAWebDetailImage.react",
    "WAWebFlex.react",
    "WAWebName.react",
    "WAWebText_DONOTUSE.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        container: { columnGap: "x1amjocr", rowGap: "x1b8z93w", $$css: !0 },
        paddingHoriz16: {
          paddingInlineStart: "xdx6fka",
          paddingInlineEnd: "xvtqlqk",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.orderId,
        r = e.orderStatus,
        a = e.sellerWid,
        i = e.testid,
        l;
      t[0] !== a
        ? ((l = o("WAWebContactCollection").ContactCollection.get(a)),
          (t[0] = a),
          (t[1] = l))
        : (l = t[1]);
      var d = l,
        m;
      t[2] !== n || t[3] !== d || t[4] !== a
        ? ((m = d
            ? u.jsxs(u.Fragment, {
                children: [
                  u.jsx(o("WAWebFlex.react").FlexRow, {
                    children: u.jsx(o("WAWebDetailImage.react").DetailImage, {
                      id: a,
                      size: 48,
                    }),
                  }),
                  u.jsxs(o("WAWebFlex.react").FlexColumn, {
                    align: "center",
                    children: [
                      u.jsx(o("WAWebName.react").Name, {
                        className: "x14ug900 x1603h9y xk50ysn x1u7k74",
                        useDisplayName: !0,
                        contact: d,
                      }),
                      n != null
                        ? u.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
                            color: "secondary",
                            weight: "medium",
                            className: "xtvhhri xav9cv8",
                            children: o(
                              "WAWebBizGatingUtils",
                            ).isOrderContentOptimizationEnabled()
                              ? s._(/*BTDS*/ "charge #{order-id}", [
                                  s._param("order-id", n),
                                ])
                              : s._(/*BTDS*/ "order #{order-id}", [
                                  s._param("order-id", n),
                                ]),
                          })
                        : null,
                    ],
                  }),
                ],
              })
            : null),
          (t[2] = n),
          (t[3] = d),
          (t[4] = a),
          (t[5] = m))
        : (m = t[5]);
      var p = m,
        _;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = [c.container, c.paddingHoriz16]), (t[6] = _))
        : (_ = t[6]);
      var f;
      return (
        t[7] !== r || t[8] !== p || t[9] !== i
          ? ((f = u.jsxs(o("WAWebFlex.react").FlexColumn, {
              align: "center",
              xstyle: _,
              testid: void 0,
              children: [p, r],
            })),
            (t[7] = r),
            (t[8] = p),
            (t[9] = i),
            (t[10] = f))
          : (f = t[10]),
        f
      );
    }
    l.default = d;
  },
  226,
);
