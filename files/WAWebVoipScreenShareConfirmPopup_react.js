__d(
  "WAWebVoipScreenShareConfirmPopup.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebModalManager",
    "WAWebVoipStackInterface",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.closeModal,
        a = e.message,
        i = e.okText,
        l = e.onOK,
        c = t != null ? t : o("WAWebModalManager").closeModalManager,
        d = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (l) yield l();
            else {
              var e = yield o(
                "WAWebVoipStackInterface",
              ).getVoipStackInterface();
              (e == null ? void 0 : e.type) === "web" &&
                (yield e.requestVideoUpgrade());
            }
            c();
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        m = function () {
          c();
        };
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        onOK: d,
        onCancel: m,
        okText: i != null ? i : s._(/*BTDS*/ "Switch"),
        cancelText: s._(/*BTDS*/ "Cancel"),
        children: u.jsx(r("WDSText.react"), {
          colorName: "contentDefault",
          type: "Body2",
          preserveNewLines: !1,
          children:
            a != null
              ? a
              : s._(/*BTDS*/ "Switch to video call to share your screen."),
        }),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"),
      (l.WAWebVoipScreenShareConfirmPopup = c));
  },
  226,
);
