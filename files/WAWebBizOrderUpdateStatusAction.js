__d(
  "WAWebBizOrderUpdateStatusAction",
  [
    "WAWebDrawerManager",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebOrderDetails",
    "WAWebOrderStatusUpdateFlowLoadable",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e, t, n) {
      var r = o("WAWebOrderDetails").getOrderInfo(e),
        a = o("WAWebMsgGetters").getSender(e);
      r == null ||
        a == null ||
        o("WAWebDrawerManager").DrawerManager.openDrawerRight(
          s.jsx(
            o("WAWebOrderStatusUpdateFlowLoadable")
              .OrderStatusUpdateFlowLoadable,
            {
              entryPoint: n,
              chat: o("WAWebFrontendMsgGetters").getChat(e.unsafe()),
              sellerJid: a.toJid(),
              orderInfo: r,
            },
          ),
          { transition: "slide-left", uim: t },
        );
    }
    l.openOrderStatusUpdateDrawer = u;
  },
  98,
);
