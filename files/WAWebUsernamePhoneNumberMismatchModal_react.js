__d(
  "WAWebUsernamePhoneNumberMismatchModal.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebModalManager",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      var e = s._(/*BTDS*/ "Can't save changes"),
        t = s._(
          /*BTDS*/ "The phone number you added doesn't match this account. Make sure the phone number is correct and try again.",
        );
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        title: e,
        okButtonType: "primary",
        onOK: o("WAWebModalManager").closeModalManager,
        okText: r("WAWebFbtCommon")("OK"),
        children: u.jsx(r("WDSText.react"), {
          type: "Body2",
          colorName: "contentDeemphasized",
          children: t,
        }),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
