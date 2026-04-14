__d(
  "WAWebHistorySyncPausedPopup.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebFaqUrl",
    "WAWebHistorySyncUIText",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebText_DONOTUSE.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        title: { fontWeight: "xk50ysn", fontSize: "x1603h9y", $$css: !0 },
        body: {
          fontWeight: "xo1l8bm",
          fontSize: "x1jchvi3",
          lineHeight: "x1xet1wb",
          color: "x19q65qo",
          $$css: !0,
        },
      };
    function d() {
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: {
          surface: "unknown",
          viewName: "history-sync-paused",
        },
        title: u.jsx(o("WAWebText_DONOTUSE.react").TextHeader, {
          xstyle: c.title,
          children: o("WAWebHistorySyncUIText").SYNCING_PAUSED_POPUP_TITLE(),
        }),
        type: o("WAWebModal.react").ModalTheme.HistorySyncProgress,
        cancelText: s._(/*BTDS*/ "Learn more"),
        onOK: o("WAWebModalManager").closeModalManager,
        onCancel: m,
        children: u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
          xstyle: c.body,
          children: o("WAWebHistorySyncUIText").SYNCING_PAUSED_POPUP_DESC(),
        }),
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m() {
      window.open(o("WAWebFaqUrl").getMessageHistoryOnLinkedDevicesFAQUrl());
    }
    l.default = d;
  },
  226,
);
