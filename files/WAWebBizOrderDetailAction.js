__d(
  "WAWebBizOrderDetailAction",
  [
    "WAWebBizGatingUtils",
    "WAWebDrawerManager",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebOrderDetails",
    "WAWebProductDetailsFlowLoadable",
    "WAWebProtobufsE2E.pb",
    "WAWebUserPrefsMeUser",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e, t, n, r) {
      var a = o("WAWebMsgGetters").getSender(e.unsafe());
      a != null &&
        o("WAWebDrawerManager").DrawerManager.openDrawerRight(
          s.jsx(
            o("WAWebProductDetailsFlowLoadable").ProductDetailsFlowLoadable,
            {
              entryPoint: n,
              onlyShowPaymentDetails: r,
              chat: o("WAWebFrontendMsgGetters").getChat(e.unsafe()),
              sellerJid: a.toJid(),
              orderInfo: o("WAWebOrderDetails").getOrderInfo(e),
              interactiveMessage: e,
            },
          ),
          { transition: "slide-left", uim: t },
        );
    }
    function c(e, t, n) {
      var r,
        a,
        i = e.orderId,
        l = e.sellerJid,
        u = e.status,
        c = e.token,
        d = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
        m =
          (r =
            (a = o("WAWebMsgGetters").getSender(e)) == null
              ? void 0
              : a.equals(d)) != null
            ? r
            : !1;
      if (i != null && l != null && c != null) {
        if (
          o("WAWebBizGatingUtils").isBuyerOrderRevampEnabled() &&
          u !==
            o("WAWebProtobufsE2E.pb").Message$OrderMessage$OrderStatus.INQUIRY
        )
          return;
        o("WAWebDrawerManager").DrawerManager.openDrawerRight(
          s.jsx(
            o("WAWebProductDetailsFlowLoadable").ProductDetailsFlowLoadable,
            {
              entryPoint: n,
              chat: o("WAWebFrontendMsgGetters").getChat(e.unsafe()),
              orderMessage: e,
              orderId: i,
              token: c,
              userIsCartOwner: m,
              sellerJid: l,
            },
          ),
          { transition: "slide-left", uim: t },
        );
      }
    }
    ((l.openOrderDetailDrawer = u), (l.openOrderRequestDrawer = c));
  },
  98,
);
