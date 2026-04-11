__d(
  "WAWebBizShowCartAction",
  [
    "WAWebCartFlowLoadable",
    "WAWebDrawerManager",
    "WAWebModalManager",
    "WAWebOpenChatFlow.react",
    "WAWebWidFactory",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e, t, n) {
      if (t && t.id.toString() === e)
        return s.jsx(o("WAWebCartFlowLoadable").CartFlowLoadable, {
          sellerJid: e,
          chat: t,
        });
      var r = function (r) {
        var t = r.chat;
        self.setTimeout(function () {
          o("WAWebDrawerManager").DrawerManager.openDrawerRight(
            s.jsx(o("WAWebCartFlowLoadable").CartFlowLoadable, {
              sellerJid: e,
              chat: t,
            }),
            { transition: "slide-left", newDrawerContext: n },
          );
        }, 100);
      };
      o("WAWebModalManager").ModalManager.open(
        s.jsx(o("WAWebOpenChatFlow.react").OpenChatFlow, {
          target: { wid: o("WAWebWidFactory").createWid(e) },
          onSuccess: r,
          msgText: null,
        }),
        { transition: "modal-flow" },
      );
    }
    l.default = u;
  },
  98,
);
