__d(
  "WAWebBizMessageOpenCallModal",
  [
    "fbt",
    "WAWebButton.react",
    "WAWebFbtCommon",
    "WAWebModal.react",
    "WAWebModalManager",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      var e = u.jsx(
        o("WAWebButton.react").Button,
        {
          testid: void 0,
          type: "primary",
          onClick: o("WAWebModalManager").closeModalManager,
          children: r("WAWebFbtCommon")("OK"),
        },
        0,
      );
      o("WAWebModalManager").ModalManager.open(
        u.jsx(o("WAWebModal.react").Modal, {
          actions: [e],
          children: s._(
            /*BTDS*/ "Calls are not supported on WhatsApp Web. Open WhatsApp on your phone to call this business.",
          ),
        }),
      );
    }
    l.default = c;
  },
  226,
);
