__d(
  "WAWebContactEditUtils",
  [
    "WAWebContactEditDrawer.react",
    "WAWebContactUtils",
    "WAWebDrawerManager",
    "WAWebNativeContactsNuxPopup.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e, t) {
      if (o("WAWebContactUtils").shouldShowNativeContactsNux()) {
        o("WAWebNativeContactsNuxPopup.react").openNativeContactsNuxPopup(t);
        return;
      }
      (o("WAWebDrawerManager").DrawerManager.closeDrawerRight(),
        o("WAWebDrawerManager").DrawerManager.openDrawerRight(
          s.jsx(r("WAWebContactEditDrawer.react"), {
            origin: t,
            contactData: e,
            onSave: o("WAWebDrawerManager").closeDrawerRight,
            onCancel: o("WAWebDrawerManager").closeDrawerRight,
          }),
        ));
    }
    l.openContactEditDrawer = u;
  },
  98,
);
