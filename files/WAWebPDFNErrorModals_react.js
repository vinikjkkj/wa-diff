__d(
  "WAWebPDFNErrorModals.react",
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
        onOK: o("WAWebModalManager").closeModalManager,
        title: s._(/*BTDS*/ "Couldn't load this page"),
        okText: r("WAWebFbtCommon")("Try again"),
        cancelText: s._(/*BTDS*/ "Dismiss"),
        onCancel: o("WAWebModalManager").closeModalManager,
        children: s._(/*BTDS*/ "Check your internet connection and try again."),
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d() {
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        onOK: o("WAWebModalManager").closeModalManager,
        title: s._(/*BTDS*/ "Couldn't load this page"),
        okText: r("WAWebFbtCommon")("Try again"),
        cancelText: s._(/*BTDS*/ "Dismiss"),
        onCancel: o("WAWebModalManager").closeModalManager,
        children: s._(/*BTDS*/ "Please try again later."),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"),
      (l.InternetErrorModal = c),
      (l.ServerErrorModal = d));
  },
  226,
);
