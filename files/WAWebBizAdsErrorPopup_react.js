__d(
  "WAWebBizAdsErrorPopup.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebModalManager",
    "WAWebStopEvent",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useEffect;
    function d(e) {
      var t = e.fallback;
      return (
        c(function () {
          o("WAWebModalManager").ModalManager.open(
            u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              onOverlayClick: o("WAWebStopEvent").preventDefault,
              onOK: function () {
                window.location.reload();
              },
              okText: s._(/*BTDS*/ "Reload"),
              okButtonType: "primary",
              title: s._(/*BTDS*/ "Something went wrong"),
              children: u.jsx(r("WDSText.react"), {
                type: "Body1",
                colorName: "contentDefault",
                children: s._(/*BTDS*/ "Try reloading the page."),
              }),
            }),
            { blockClose: !0 },
          );
        }, []),
        t
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
