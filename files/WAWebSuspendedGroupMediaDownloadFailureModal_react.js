__d(
  "WAWebSuspendedGroupMediaDownloadFailureModal.react",
  ["fbt", "WAWebConfirmPopup.react", "WAWebModalManager", "react"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      var e = function () {
        return o("WAWebModalManager").ModalManager.close();
      };
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: {
          surface: "unknown",
          viewName: "suspended-group-download-failure",
        },
        onOK: e,
        title: s._(/*BTDS*/ "Download failed"),
        children: s._(/*BTDS*/ "Media no longer available"),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
