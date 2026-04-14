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
      var n = t.onDismiss,
        a = t.onOk;
      return c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: {
          surface: "unknown",
          viewName: "biz-order-expansion",
        },
        onOK: a,
        okText: s._(/*BTDS*/ "OK"),
        onOverlayClick: n,
        children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
          xstyle: o("WAWebUISpacing").uiPadding.horiz30,
          children: [
            c.jsx(o("WAWebFlex.react").FlexRow, {
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
            }),
            c.jsx(o("WAWebFlex.react").FlexRow, {
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
            }),
            c.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              xstyle: [
                o("WAWebUISpacing").uiMargin.bottom16,
                o("WAWebUISpacing").uiPadding.horiz18,
              ],
              children: [
                c.jsx(o("WAWebChatMsgIcon.react").ChatMsgIcon, {
                  height: 22,
                  width: 22,
                  xstyle: d.iconColor,
                }),
                c.jsxs(o("WAWebText_DONOTUSE.react").TextDiv, {
                  xstyle: o("WAWebUISpacing").uiMargin.start24,
                  children: [
                    c.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
                      size: "16",
                      weight: "medium",
                      color: "dark",
                      xstyle: [
                        o("WAWebUISpacing").uiMargin.bottom4,
                        d.listItem,
                      ],
                      children: s._(/*BTDS*/ "Easy to do in chat"),
                    }),
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
            }),
            c.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              xstyle: [
                o("WAWebUISpacing").uiMargin.bottom16,
                o("WAWebUISpacing").uiPadding.horiz18,
              ],
              children: [
                c.jsx(o("WAWebIcShieldLockIcon.react").IcShieldLockIcon, {
                  height: 22,
                  width: 22,
                  xstyle: d.iconColor,
                }),
                c.jsxs(o("WAWebText_DONOTUSE.react").TextDiv, {
                  xstyle: o("WAWebUISpacing").uiMargin.start24,
                  children: [
                    c.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
                      size: "16",
                      weight: "medium",
                      color: "dark",
                      xstyle: [
                        o("WAWebUISpacing").uiMargin.bottom4,
                        d.listItem,
                      ],
                      children: s._(/*BTDS*/ "Build trust with customers"),
                    }),
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
            }),
            c.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              xstyle: [
                o("WAWebUISpacing").uiMargin.bottom16,
                o("WAWebUISpacing").uiPadding.horiz18,
              ],
              children: [
                c.jsx(o("WAWebReceiptIcon.react").ReceiptIcon, {
                  height: 22,
                  width: 22,
                  xstyle: d.iconColor,
                }),
                c.jsxs(o("WAWebText_DONOTUSE.react").TextDiv, {
                  xstyle: o("WAWebUISpacing").uiMargin.start24,
                  children: [
                    c.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
                      size: "16",
                      weight: "medium",
                      color: "dark",
                      xstyle: [
                        o("WAWebUISpacing").uiMargin.bottom4,
                        d.listItem,
                      ],
                      children: o(
                        "WAWebBizGatingUtils",
                      ).isOrderContentOptimizationEnabled()
                        ? s._(/*BTDS*/ "Simple management")
                        : s._(/*BTDS*/ "Simple order management"),
                    }),
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
        }),
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
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
