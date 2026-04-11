__d(
  "WAWebBizOpenBookingConfirmationDrawer.react",
  [
    "WAWebBizBookingConfirmationDrawer.react",
    "WAWebDrawerManager",
    "WAWebKeyboardTabUtils",
    "WAWebQueryExistsJob",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e, t) {
      var n = e.phoneNumber,
        a = n != null ? o("WAWebQueryExistsJob").queryPhoneExists(n) : null;
      o("WAWebDrawerManager").DrawerManager.openDrawerRight(
        s.jsx(r("WAWebBizBookingConfirmationDrawer.react"), {
          onClose: o("WAWebDrawerManager").closeDrawerRight,
          bookingInfo: e,
          msg: t,
          phoneExistsPromise: a,
        }),
        { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
      );
    }
    l.openBookingConfirmationDrawer = u;
  },
  98,
);
