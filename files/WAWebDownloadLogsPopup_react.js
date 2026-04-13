__d(
  "WAWebDownloadLogsPopup.react",
  [
    "WAWebConfirmPopup.react",
    "WAWebDownloadWebLogs",
    "WAWebModalManager",
    "WDSButton.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = s.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              title: "Download logs",
              onCancel: m,
              cancelText: "Close",
              children: s.jsxs("div", {
                className: "x78zum5 xdt5ytf x1cy8zhl x8a3fw1 x1aj3ljl",
                children: [
                  s.jsx(r("WDSButton.react"), {
                    label: "Download all logs",
                    onPress: d,
                  }),
                  s.jsx(r("WDSButton.react"), {
                    label: "Download last call log",
                    onPress: c,
                  }),
                ],
              }),
            })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function c() {
      (o("WAWebDownloadWebLogs").createDownloadDataForLastCallLog(),
        o("WAWebModalManager").ModalManager.close());
    }
    function d() {
      (o("WAWebDownloadWebLogs").createDownloadDataForMdWebLogs(),
        o("WAWebModalManager").ModalManager.close());
    }
    function m() {
      return o("WAWebModalManager").ModalManager.close();
    }
    l.default = u;
  },
  98,
);
