__d(
  "WAWebPinChatAuraUpsellModal.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebModalManager",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c() {
      var e = o("react-compiler-runtime").c(3),
        t,
        n;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = { surface: "unknown", viewName: "pin-chat-aura-upsell" }),
          (n = s._(/*BTDS*/ "This is a premium feature")),
          (e[0] = t),
          (e[1] = n))
        : ((t = e[0]), (n = e[1]));
      var r;
      return (
        e[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: t,
              title: n,
              onOK: d,
              children: s._(
                /*BTDS*/ "View this on your phone to learn how to access and use it.",
              ),
            })),
            (e[2] = r))
          : (r = e[2]),
        r
      );
    }
    function d() {
      o("WAWebModalManager").ModalManager.closeAlert();
    }
    l.default = c;
  },
  226,
);
