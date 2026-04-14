__d(
  "WAWebDownloadLogsPopup.react",
  [
    "WAWebConfirmPopup.react",
    "WAWebDownloadWebLogs",
    "WAWebModalManager",
    "WDSButton.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u() {
      return s.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        title: "Download logs",
        onCancel: function () {
          return o("WAWebModalManager").ModalManager.close();
        },
        cancelText: "Close",
        children: s.jsxs("div", {
          className: "x78zum5 xdt5ytf x1cy8zhl x8a3fw1 x1aj3ljl",
          children: [
            s.jsx(r("WDSButton.react"), {
              label: "Download all logs",
              onPress: function () {
                (o("WAWebDownloadWebLogs").createDownloadDataForMdWebLogs(),
                  o("WAWebModalManager").ModalManager.close());
              },
            }),
            s.jsx(r("WDSButton.react"), {
              label: "Download last call log",
              onPress: function () {
                (o("WAWebDownloadWebLogs").createDownloadDataForLastCallLog(),
                  o("WAWebModalManager").ModalManager.close());
              },
            }),
          ],
        }),
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
