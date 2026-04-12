__d(
  "WAWebHistorySyncInProgressPopup.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebFaqUrl",
    "WAWebHistorySyncProgressGetters",
    "WAWebHistorySyncUIText",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebProgressBar.react",
    "WAWebText_DONOTUSE.react",
    "react",
    "useWAWebHistorySyncProgressValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = "x1gnekcx-B",
      d = {
        body: {
          fontWeight: "xo1l8bm",
          fontSize: "x1jchvi3",
          lineHeight: "x1xet1wb",
          color: "x19q65qo",
          $$css: !0,
        },
      };
    function m() {
      var e = o(
          "useWAWebHistorySyncProgressValues",
        ).useHistorySyncProgressValues([
          o("WAWebHistorySyncProgressGetters").getProgress,
        ]),
        t = e[0];
      return u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: {
          surface: "unknown",
          viewName: "history-sync-in-progress",
        },
        type: o("WAWebModal.react").ModalTheme.HistorySyncProgress,
        title: o("WAWebHistorySyncUIText").SYNCING_OLDER_MESSAGES_MODAL_TITLE(),
        cancelText: s._(/*BTDS*/ "Learn more"),
        onOK: o("WAWebModalManager").closeModalManager,
        onCancel: f,
        children: [
          u.jsx(p, { progress: t }),
          u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
            xstyle: d.body,
            children: o(
              "WAWebHistorySyncUIText",
            ).SYNCING_OLDER_MESSAGES_MODAL_TEXT(),
          }),
        ],
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = e.progress,
        n = t;
      return u.jsxs(u.Fragment, {
        children: [
          u.jsx("div", {
            className: "xz9dl7a xod5an3 x78zum5 xdt5ytf",
            children:
              n == null
                ? u.jsx(_, {})
                : u.jsx(r("WAWebProgressBar.react"), { value: n, max: 100 }),
          }),
          u.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
            color: "dark",
            size: "12",
            className: "x1kpxq89 xieb3on",
            children:
              n == null
                ? ""
                : o(
                    "WAWebHistorySyncUIText",
                  ).SYNCING_OLDER_MESSAGES_MODAL_PERCENT(n),
          }),
        ],
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _() {
      return u.jsx("div", {
        className: "x1izncso x7t6ubo xa4qsjk xc0ps8e xgbwgrv xuoj239",
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f() {
      window.open(o("WAWebFaqUrl").getMessageHistoryOnLinkedDevicesFAQUrl());
    }
    l.default = m;
  },
  226,
);
