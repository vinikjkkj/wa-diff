__d(
  "WAWebMediaNotReadableModal.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebModalManager",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: {
          surface: "unknown",
          viewName: "media-not-readable",
        },
        title: s._(/*BTDS*/ "Can't send changed file"),
        onOK: d,
        okText: r("WAWebFbtCommon")("OK"),
        children: s._(
          /*BTDS*/ "This document has changed since you tried to send it. Please try again.",
        ),
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d() {
      o("WAWebModalManager").ModalManager.close();
    }
    l.default = c;
  },
  226,
);
