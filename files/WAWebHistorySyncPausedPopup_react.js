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
    "react-compiler-runtime",
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
      var e = o("react-compiler-runtime").c(4),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = { surface: "unknown", viewName: "history-sync-paused" }),
          (e[0] = t))
        : (t = e[0]);
      var n;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = u.jsx(o("WAWebText_DONOTUSE.react").TextHeader, {
            xstyle: c.title,
            children: o("WAWebHistorySyncUIText").SYNCING_PAUSED_POPUP_TITLE(),
          })),
          (e[1] = n))
        : (n = e[1]);
      var r;
      e[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = s._(/*BTDS*/ "Learn more")), (e[2] = r))
        : (r = e[2]);
      var a;
      return (
        e[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: t,
              title: n,
              type: o("WAWebModal.react").ModalTheme.HistorySyncProgress,
              cancelText: r,
              onOK: o("WAWebModalManager").closeModalManager,
              onCancel: m,
              children: u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
                xstyle: c.body,
                children: o(
                  "WAWebHistorySyncUIText",
                ).SYNCING_PAUSED_POPUP_DESC(),
              }),
            })),
            (e[3] = a))
          : (a = e[3]),
        a
      );
    }
    function m() {
      window.open(o("WAWebFaqUrl").getMessageHistoryOnLinkedDevicesFAQUrl());
    }
    l.default = d;
  },
  226,
);
