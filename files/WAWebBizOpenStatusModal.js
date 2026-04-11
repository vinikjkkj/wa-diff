__d(
  "WAWebBizOpenStatusModal",
  [
    "WAWebButton.react",
    "WAWebFbtCommon",
    "WAWebModal.react",
    "WAWebModalManager",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u() {
      var e = s.jsx(
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
        s.jsx(o("WAWebModal.react").Modal, {
          actions: [e],
          children:
            "This is not supported on WhatsApp Web. Open WhatsApp on your phone to view more details.",
        }),
      );
    }
    l.default = u;
  },
  98,
);
