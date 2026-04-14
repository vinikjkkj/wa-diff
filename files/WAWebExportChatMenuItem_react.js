__d(
  "WAWebExportChatMenuItem.react",
  [
    "fbt",
    "WAWebExportChatGatingUtils",
    "WAWebExportChatModalLoadable",
    "WAWebModalManager",
    "WDSIconIcDownload.react",
    "WDSMenuItem.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.chat;
      if (
        !o("WAWebExportChatGatingUtils").canExportChat(t) ||
        !o("WAWebExportChatGatingUtils").isExportChatHistorySyncReady()
      )
        return null;
      var n = s._(/*BTDS*/ "Export chat");
      return u.jsx(
        r("WDSMenuItem.react"),
        {
          Icon: r("WDSIconIcDownload.react"),
          title: n,
          onPress: function () {
            o("WAWebModalManager").ModalManager.open(
              u.jsx(o("WAWebExportChatModalLoadable").ExportChatModalLoadable, {
                chat: t,
                onClose: o("WAWebModalManager").closeModalManager,
              }),
            );
          },
          testid: void 0,
        },
        "export",
      );
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
