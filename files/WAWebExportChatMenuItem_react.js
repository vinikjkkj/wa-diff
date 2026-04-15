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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.chat;
      if (
        !o("WAWebExportChatGatingUtils").canExportChat(n) ||
        !o("WAWebExportChatGatingUtils").isExportChatHistorySyncReady()
      )
        return null;
      var a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = s._(/*BTDS*/ "Export chat")), (t[0] = a))
        : (a = t[0]);
      var i = a,
        l;
      return (
        t[1] !== n
          ? ((l = u.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: r("WDSIconIcDownload.react"),
                title: i,
                onPress: function () {
                  o("WAWebModalManager").ModalManager.open(
                    u.jsx(
                      o("WAWebExportChatModalLoadable").ExportChatModalLoadable,
                      {
                        chat: n,
                        onClose: o("WAWebModalManager").closeModalManager,
                      },
                    ),
                  );
                },
                testid: void 0,
              },
              "export",
            )),
            (t[1] = n),
            (t[2] = l))
          : (l = t[2]),
        l
      );
    }
    l.default = c;
  },
  226,
);
