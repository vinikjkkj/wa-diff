__d(
  "WAWebBizMessageOpenCallModal",
  [
    "fbt",
    "WAWebFbtCommon",
    "WAWebModal.react",
    "WAWebModalManager",
    "WDSButton.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      var e = u.jsx(
        r("WDSButton.react"),
        {
          testid: "popup-controls-ok",
          onPress: o("WAWebModalManager").closeModalManager,
          label: r("WAWebFbtCommon")("OK"),
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
