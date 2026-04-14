__d(
  "WAWebBizPaymentDetail.react",
  [
    "WAWebBizEntryPoint",
    "WAWebBizOrderDetailAction",
    "WAWebBizPaymentStatusInfoLabel.react",
    "WAWebCmd",
    "WAWebCurrencyUtils",
    "WAWebDetailImage.react",
    "WAWebFlex.react",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebName.react",
    "WAWebOrderPaymentStatus",
    "WAWebOrderStatus",
    "WAWebPaymentsUserActionLogging",
    "WAWebSyncdMdSyncFieldstatMeta",
    "WAWebWamEnumPaymentActionTargets",
    "WAWebWamEnumPaymentActionTypes",
    "WDSText.react",
    "react",
    "useWAWebUIM",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        amountRow: { columnGap: "x1trrmfo", $$css: !0 },
        imageContainer: {
          paddingTop: "x1xrf6ya",
          paddingBottom: "xscbp6u",
          paddingInlineStart: "xdx6fka",
          paddingInlineEnd: "xvtqlqk",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        nameColumn: { flexGrow: "x1iyjqo2", $$css: !0 },
        orderInfo: {
          alignItems: "x1qjc9v5",
          flexGrow: "x1iyjqo2",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          paddingTop: "x1xrf6ya",
          paddingBottom: "xscbp6u",
          paddingInlineEnd: "xvtqlqk",
          $$css: !0,
        },
        orderSubDetails: {
          color: "x1mhprgp",
          fontSize: "x1f6kntn",
          lineHeight: "x37zpob",
          $$css: !0,
        },
        rightColumn: {
          alignItems: "xuk3077",
          flexShrink: "x2lah0s",
          $$css: !0,
        },
        strikethrough: {
          textDecoration: "xmqliwb",
          whiteSpace: "xuxw1ft",
          $$css: !0,
        },
        title: {
          alignItems: "x6s0dn4",
          color: "x6o5irq",
          fontSize: "x1jchvi3",
          justifyContent: "x1qughib",
          lineHeight: "x1evy7pa",
          $$css: !0,
        },
      };
    function c(e, t) {
      var n = e[t];
      return n == null
        ? o("WAWebOrderPaymentStatus").OrderPaymentStatus.Pending
        : n.paymentStatus != null
          ? n.paymentStatus
          : n.status === o("WAWebOrderStatus").OrderStatus.Complete
            ? o("WAWebOrderPaymentStatus").OrderPaymentStatus.Captured
            : n.status === o("WAWebOrderStatus").OrderStatus.Canceled
              ? o("WAWebOrderPaymentStatus").OrderPaymentStatus.Failed
              : o("WAWebOrderPaymentStatus").OrderPaymentStatus.Pending;
    }
    function d(e) {
      var t,
        n = e.contactAndOrderInfo,
        a = e.orderPaymentStatusInfo,
        i = r("useWAWebUIM")(),
        l = function () {
          var e = n.interactiveMsg;
          e &&
            (o("WAWebSyncdMdSyncFieldstatMeta")
              .MdSyncFieldStatsMeta.getMdSessionId()
              .then(function (e) {
                o("WAWebPaymentsUserActionLogging").logPaymentsHomeEvent({
                  actionTarget: o("WAWebWamEnumPaymentActionTargets")
                    .PAYMENT_ACTION_TARGETS.ORDER_DETAIL,
                  paymentActionType: o("WAWebWamEnumPaymentActionTypes")
                    .PAYMENT_ACTION_TYPES.CLICK,
                  paymentsEventId: e,
                  screen: "payment_history",
                });
              }),
            o("WAWebCmd").Cmd.openChatFromUnread({
              chat: o("WAWebFrontendMsgGetters").getChat(e.unsafe()),
            }),
            o("WAWebBizOrderDetailAction").openOrderDetailDrawer(
              e,
              i,
              r("WAWebBizEntryPoint").FROM_CHAT,
              !0,
            ));
        },
        c = n.interactiveMsg;
      if (c == null) return null;
      var d = o("WAWebMsgGetters").getIsSentByMe(c);
      return s.jsxs("button", {
        "data-testid": void 0,
        onClick: l,
        className: "x6s0dn4 x78zum5 x1yc453h xh8yej3",
        children: [
          s.jsx(o("WAWebFlex.react").FlexColumn, {
            xstyle: u.imageContainer,
            children: s.jsx(o("WAWebDetailImage.react").DetailImage, {
              id: n.contact.id,
              size: 40,
            }),
          }),
          s.jsx(o("WAWebFlex.react").FlexColumn, {
            xstyle: u.orderInfo,
            children: s.jsxs(o("WAWebFlex.react").FlexRow, {
              xstyle: u.title,
              children: [
                s.jsx(o("WAWebFlex.react").FlexColumn, {
                  xstyle: u.nameColumn,
                  children: s.jsx(o("WAWebName.react").Name, {
                    titlify: !0,
                    ellipsify: !0,
                    contact: n.contact,
                  }),
                }),
                s.jsxs(o("WAWebFlex.react").FlexColumn, {
                  xstyle: u.rightColumn,
                  children: [
                    s.jsxs(o("WAWebFlex.react").FlexRow, {
                      xstyle: u.amountRow,
                      children: [
                        s.jsx(r("WDSText.react"), {
                          type: "Body1",
                          colorName: "contentDefault",
                          children: d ? "+" : "-",
                        }),
                        s.jsx(r("WDSText.react"), {
                          type: "Body1",
                          colorName: "contentDefault",
                          xstyle:
                            a ===
                            o("WAWebOrderPaymentStatus").OrderPaymentStatus
                              .Failed
                              ? u.strikethrough
                              : void 0,
                          children: o("WAWebCurrencyUtils").formatAmount(
                            n.orderInfo.currency,
                            (t = n.orderInfo.totalAmount) != null ? t : 0,
                          ),
                        }),
                      ],
                    }),
                    s.jsx(o("WAWebFlex.react").FlexColumn, {
                      xstyle: u.orderSubDetails,
                      children: s.jsx(
                        r("WAWebBizPaymentStatusInfoLabel.react"),
                        { orderPaymentStatusInfo: a },
                      ),
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"),
      (l.extractPaymentStatus = c),
      (l.WAWebBizPaymentDetail = d));
  },
  98,
);
