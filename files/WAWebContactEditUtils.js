__d(
  "WAWebContactEditUtils",
  [
    "WAWebContactEditDrawer.react",
    "WAWebContactUtils",
    "WAWebDrawerManager",
    "WAWebModalManager",
    "WAWebNativeContactsNuxPopup.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e, t) {
      if (o("WAWebContactUtils").shouldShowNativeContactsNux()) {
        o("WAWebModalManager").ModalManager.open(
          s.jsx(r("WAWebNativeContactsNuxPopup.react"), { source: t }),
        );
        return;
      }
      (o("WAWebDrawerManager").DrawerManager.closeDrawerRight(),
        o("WAWebDrawerManager").DrawerManager.openDrawerRight(
          s.jsx(r("WAWebContactEditDrawer.react"), {
            origin: t,
            contactData: e,
            onSave: function () {
              return o("WAWebDrawerManager").DrawerManager.closeDrawerRight();
            },
            onCancel: function () {
              return o("WAWebDrawerManager").DrawerManager.closeDrawerRight();
            },
          }),
        ));
    }
    l.openContactEditDrawer = u;
  },
  98,
);
