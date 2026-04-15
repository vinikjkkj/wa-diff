__d(
  "WAWebBizOrderExpansionModal.react",
  [
    "fbt",
    "WAWebBizGatingUtils",
    "WAWebChatMsgIcon.react",
    "WAWebConfirmPopup.react",
    "WAWebFlex.react",
    "WAWebIcShieldLockIcon.react",
    "WAWebModalManager",
    "WAWebReceiptIcon.react",
    "WAWebText_DONOTUSE.react",
    "WAWebUISpacing",
    "WAWebWdsPictoBusinessIcon.react",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        iconColor: { color: "xx2jlie", $$css: !0 },
        illustration: {
          display: "x78zum5",
          justifyContent: "xl56j7k",
          $$css: !0,
        },
        listItem: { lineHeight: "x132q4wb", $$css: !0 },
        modalTitle: { lineHeight: "xo0entv", textAlign: "x2b8uid", $$css: !0 },
      };
    function m(t) {
      var n = o("react-compiler-runtime").c(19),
        a = t.onDismiss,
        i = t.onOk,
        l;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = { surface: "unknown", viewName: "biz-order-expansion" }),
          (n[0] = l))
        : (l = n[0]);
      var u;
      n[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = s._(/*BTDS*/ "OK")), (n[1] = u))
        : (u = n[1]);
      var m;
      n[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = c.jsx(o("WAWebFlex.react").FlexRow, {
            justify: "center",
            align: "center",
            alignSelf: "center",
            className: (e || (e = r("stylex")))([
              o("WAWebUISpacing").uiPadding.top28,
            ]),
            children: c.jsx(
              o("WAWebWdsPictoBusinessIcon.react").WdsPictoBusinessIcon,
              { height: 88, xstyle: d.illustration },
            ),
          })),
          (n[2] = m))
        : (m = n[2]);
      var p;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = c.jsx(o("WAWebFlex.react").FlexRow, {
            children: c.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
              weight: "medium",
              size: "24",
              color: "dark",
              xstyle: [o("WAWebUISpacing").uiMargin.vert24, d.modalTitle],
              children: o(
                "WAWebBizGatingUtils",
              ).isOrderContentOptimizationEnabled()
                ? s._(/*BTDS*/ "Manage your charges like a pro")
                : s._(/*BTDS*/ "Use orders to manage your sales like a pro"),
            }),
          })),
          (n[3] = p))
        : (p = n[3]);
      var _, f;
      n[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = [
            o("WAWebUISpacing").uiMargin.bottom16,
            o("WAWebUISpacing").uiPadding.horiz18,
          ]),
          (f = c.jsx(o("WAWebChatMsgIcon.react").ChatMsgIcon, {
            height: 22,
            width: 22,
            xstyle: d.iconColor,
          })),
          (n[4] = _),
          (n[5] = f))
        : ((_ = n[4]), (f = n[5]));
      var g;
      n[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = c.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
            size: "16",
            weight: "medium",
            color: "dark",
            xstyle: [o("WAWebUISpacing").uiMargin.bottom4, d.listItem],
            children: s._(/*BTDS*/ "Easy to do in chat"),
          })),
          (n[6] = g))
        : (g = n[6]);
      var h;
      n[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = c.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: _,
            children: [
              f,
              c.jsxs(o("WAWebText_DONOTUSE.react").TextDiv, {
                xstyle: o("WAWebUISpacing").uiMargin.start24,
                children: [
                  g,
                  c.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
                    size: "16",
                    weight: "normal",
                    color: "secondary",
                    xstyle: d.listItem,
                    children: s._(
                      /*BTDS*/ "Simply open a chat with a customer, then attach an order.",
                    ),
                  }),
                ],
              }),
            ],
          })),
          (n[7] = h))
        : (h = n[7]);
      var y, C;
      n[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = [
            o("WAWebUISpacing").uiMargin.bottom16,
            o("WAWebUISpacing").uiPadding.horiz18,
          ]),
          (y = c.jsx(o("WAWebIcShieldLockIcon.react").IcShieldLockIcon, {
            height: 22,
            width: 22,
            xstyle: d.iconColor,
          })),
          (n[8] = y),
          (n[9] = C))
        : ((y = n[8]), (C = n[9]));
      var b;
      n[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = c.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
            size: "16",
            weight: "medium",
            color: "dark",
            xstyle: [o("WAWebUISpacing").uiMargin.bottom4, d.listItem],
            children: s._(/*BTDS*/ "Build trust with customers"),
          })),
          (n[10] = b))
        : (b = n[10]);
      var v;
      n[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = c.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: C,
            children: [
              y,
              c.jsxs(o("WAWebText_DONOTUSE.react").TextDiv, {
                xstyle: o("WAWebUISpacing").uiMargin.start24,
                children: [
                  b,
                  c.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
                    size: "16",
                    weight: "normal",
                    color: "secondary",
                    xstyle: d.listItem,
                    children: s._(
                      /*BTDS*/ "Send receipts and status updates for their purchases, all in chat.",
                    ),
                  }),
                ],
              }),
            ],
          })),
          (n[11] = v))
        : (v = n[11]);
      var S, R;
      n[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = [
            o("WAWebUISpacing").uiMargin.bottom16,
            o("WAWebUISpacing").uiPadding.horiz18,
          ]),
          (R = c.jsx(o("WAWebReceiptIcon.react").ReceiptIcon, {
            height: 22,
            width: 22,
            xstyle: d.iconColor,
          })),
          (n[12] = S),
          (n[13] = R))
        : ((S = n[12]), (R = n[13]));
      var L;
      n[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = c.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
            size: "16",
            weight: "medium",
            color: "dark",
            xstyle: [o("WAWebUISpacing").uiMargin.bottom4, d.listItem],
            children: o(
              "WAWebBizGatingUtils",
            ).isOrderContentOptimizationEnabled()
              ? s._(/*BTDS*/ "Simple management")
              : s._(/*BTDS*/ "Simple order management"),
          })),
          (n[14] = L))
        : (L = n[14]);
      var E;
      n[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = c.jsxs(o("WAWebFlex.react").FlexColumn, {
            xstyle: o("WAWebUISpacing").uiPadding.horiz30,
            children: [
              m,
              p,
              h,
              v,
              c.jsxs(o("WAWebFlex.react").FlexRow, {
                align: "center",
                xstyle: S,
                children: [
                  R,
                  c.jsxs(o("WAWebText_DONOTUSE.react").TextDiv, {
                    xstyle: o("WAWebUISpacing").uiMargin.start24,
                    children: [
                      L,
                      c.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
                        size: "16",
                        weight: "normal",
                        color: "secondary",
                        xstyle: d.listItem,
                        children: s._(
                          /*BTDS*/ "Track which items you've sold and if you've been paid.",
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })),
          (n[15] = E))
        : (E = n[15]);
      var k;
      return (
        n[16] !== a || n[17] !== i
          ? ((k = c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: l,
              onOK: i,
              okText: u,
              onOverlayClick: a,
              children: E,
            })),
            (n[16] = a),
            (n[17] = i),
            (n[18] = k))
          : (k = n[18]),
        k
      );
    }
    var p = function (t) {
      var e = function () {
          (t(), o("WAWebModalManager").ModalManager.close());
        },
        n = function () {
          (t(), o("WAWebModalManager").ModalManager.close());
        };
      o("WAWebModalManager").ModalManager.open(
        c.jsx(m, { onDismiss: e, onOk: n }),
      );
    };
    ((l.BizOrderExpansionModal = m), (l.openOrderExpansionModal = p));
  },
  226,
);
