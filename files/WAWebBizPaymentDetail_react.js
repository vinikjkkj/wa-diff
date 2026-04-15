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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(31),
        n = e.contactAndOrderInfo,
        a = e.orderPaymentStatusInfo,
        i = r("useWAWebUIM")(),
        l;
      t[0] !== n || t[1] !== i
        ? ((l = function () {
            var e = n.interactiveMsg;
            e &&
              (o("WAWebSyncdMdSyncFieldstatMeta")
                .MdSyncFieldStatsMeta.getMdSessionId()
                .then(m),
              o("WAWebCmd").Cmd.openChatFromUnread({
                chat: o("WAWebFrontendMsgGetters").getChat(e.unsafe()),
              }),
              o("WAWebBizOrderDetailAction").openOrderDetailDrawer(
                e,
                i,
                r("WAWebBizEntryPoint").FROM_CHAT,
                !0,
              ));
          }),
          (t[0] = n),
          (t[1] = i),
          (t[2] = l))
        : (l = t[2]);
      var c = l,
        d = n.interactiveMsg;
      if (d == null) return null;
      var p = o("WAWebMsgGetters").getIsSentByMe(d),
        _;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = { className: "x6s0dn4 x78zum5 x1yc453h xh8yej3" }), (t[3] = _))
        : (_ = t[3]);
      var f;
      t[4] !== n.contact.id
        ? ((f = s.jsx(o("WAWebFlex.react").FlexColumn, {
            xstyle: u.imageContainer,
            children: s.jsx(o("WAWebDetailImage.react").DetailImage, {
              id: n.contact.id,
              size: 40,
            }),
          })),
          (t[4] = n.contact.id),
          (t[5] = f))
        : (f = t[5]);
      var g;
      t[6] !== n.contact
        ? ((g = s.jsx(o("WAWebFlex.react").FlexColumn, {
            xstyle: u.nameColumn,
            children: s.jsx(o("WAWebName.react").Name, {
              titlify: !0,
              ellipsify: !0,
              contact: n.contact,
            }),
          })),
          (t[6] = n.contact),
          (t[7] = g))
        : (g = t[7]);
      var h = p ? "+" : "-",
        y;
      t[8] !== h
        ? ((y = s.jsx(r("WDSText.react"), {
            type: "Body1",
            colorName: "contentDefault",
            children: h,
          })),
          (t[8] = h),
          (t[9] = y))
        : (y = t[9]);
      var C =
          a === o("WAWebOrderPaymentStatus").OrderPaymentStatus.Failed
            ? u.strikethrough
            : void 0,
        b;
      if (t[10] !== n.orderInfo.currency || t[11] !== n.orderInfo.totalAmount) {
        var v;
        ((b = o("WAWebCurrencyUtils").formatAmount(
          n.orderInfo.currency,
          (v = n.orderInfo.totalAmount) != null ? v : 0,
        )),
          (t[10] = n.orderInfo.currency),
          (t[11] = n.orderInfo.totalAmount),
          (t[12] = b));
      } else b = t[12];
      var S;
      t[13] !== C || t[14] !== b
        ? ((S = s.jsx(r("WDSText.react"), {
            type: "Body1",
            colorName: "contentDefault",
            xstyle: C,
            children: b,
          })),
          (t[13] = C),
          (t[14] = b),
          (t[15] = S))
        : (S = t[15]);
      var R;
      t[16] !== y || t[17] !== S
        ? ((R = s.jsxs(o("WAWebFlex.react").FlexRow, {
            xstyle: u.amountRow,
            children: [y, S],
          })),
          (t[16] = y),
          (t[17] = S),
          (t[18] = R))
        : (R = t[18]);
      var L;
      t[19] !== a
        ? ((L = s.jsx(o("WAWebFlex.react").FlexColumn, {
            xstyle: u.orderSubDetails,
            children: s.jsx(r("WAWebBizPaymentStatusInfoLabel.react"), {
              orderPaymentStatusInfo: a,
            }),
          })),
          (t[19] = a),
          (t[20] = L))
        : (L = t[20]);
      var E;
      t[21] !== R || t[22] !== L
        ? ((E = s.jsxs(o("WAWebFlex.react").FlexColumn, {
            xstyle: u.rightColumn,
            children: [R, L],
          })),
          (t[21] = R),
          (t[22] = L),
          (t[23] = E))
        : (E = t[23]);
      var k;
      t[24] !== E || t[25] !== g
        ? ((k = s.jsx(o("WAWebFlex.react").FlexColumn, {
            xstyle: u.orderInfo,
            children: s.jsxs(o("WAWebFlex.react").FlexRow, {
              xstyle: u.title,
              children: [g, E],
            }),
          })),
          (t[24] = E),
          (t[25] = g),
          (t[26] = k))
        : (k = t[26]);
      var I;
      return (
        t[27] !== c || t[28] !== k || t[29] !== f
          ? ((I = s.jsxs(
              "button",
              babelHelpers.extends({ "data-testid": void 0, onClick: c }, _, {
                children: [f, k],
              }),
            )),
            (t[27] = c),
            (t[28] = k),
            (t[29] = f),
            (t[30] = I))
          : (I = t[30]),
        I
      );
    }
    function m(e) {
      o("WAWebPaymentsUserActionLogging").logPaymentsHomeEvent({
        actionTarget: o("WAWebWamEnumPaymentActionTargets")
          .PAYMENT_ACTION_TARGETS.ORDER_DETAIL,
        paymentActionType: o("WAWebWamEnumPaymentActionTypes")
          .PAYMENT_ACTION_TYPES.CLICK,
        paymentsEventId: e,
        screen: "payment_history",
      });
    }
    ((l.extractPaymentStatus = c), (l.WAWebBizPaymentDetail = d));
  },
  98,
);
