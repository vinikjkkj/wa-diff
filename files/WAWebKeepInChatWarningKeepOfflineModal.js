__d(
  "WAWebKeepInChatWarningKeepOfflineModal",
  ["fbt", "WAWebConfirmPopup.react", "WAWebModalManager", "react"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = function () {
        o("WAWebModalManager").ModalManager.closeSupportOrModal();
      };
    function d() {
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: { surface: "unknown", viewName: "kic-keep-offline" },
        testid: void 0,
        onOK: c,
        children: s._(
          /*BTDS*/ "You can't update a message while offline. Check your internet connection and try again.",
        ),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"),
      (l.WarningKeepOfflineModal = d));
  },
  226,
);
