__d(
  "WAWebFailedMessageModal.react",
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
    function c(e) {
      var t = e.onDelete,
        n = e.resend,
        a = e.text,
        i = e.title,
        l = function () {
          return o("WAWebModalManager").ModalManager.close();
        };
      return n == null && t == null
        ? u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
            onOK: d,
            tsNavigationData: {
              surface: "unknown",
              viewName: "failed-message",
            },
            children: a,
          })
        : t != null
          ? u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              title: i,
              onOK: function () {
                (t(), o("WAWebModalManager").ModalManager.close());
              },
              okText: s._(/*BTDS*/ "Delete"),
              cancelText: r("WAWebFbtCommon")("Cancel"),
              onCancel: l,
              tsNavigationData: {
                surface: "unknown",
                viewName: "failed-message",
              },
              children: a,
            })
          : u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              onOK: function () {
                (n == null || n(), o("WAWebModalManager").ModalManager.close());
              },
              okText: s._(/*BTDS*/ "Try again"),
              cancelText: r("WAWebFbtCommon")("Cancel"),
              onCancel: l,
              tsNavigationData: {
                surface: "unknown",
                viewName: "failed-message",
              },
              children: a,
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
