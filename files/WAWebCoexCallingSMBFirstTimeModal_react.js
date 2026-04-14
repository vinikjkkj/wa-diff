__d(
  "WAWebCoexCallingSMBFirstTimeModal.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebModal.react",
    "WAWebModalManager",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.onConfirm,
        n = function () {
          (o("WAWebModalManager").ModalManager.close("none"),
            self.setTimeout(function () {
              return o("WAWebExternalLink.react").openExternalLink(
                o("WAWebFaqUrl").getFirstTimeSMBCoexCallingLearnMoreUrl(),
              );
            }, 10));
        },
        r = s._(/*BTDS*/ "Continue"),
        a = function () {
          (t(), o("WAWebModalManager").ModalManager.close("none"));
        },
        i = { onClick: n, text: s._(/*BTDS*/ "Learn more") };
      return u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
        testid: void 0,
        onOK: a,
        buttonsDirection: "horizontal",
        okText: r,
        type: o("WAWebModal.react").ModalTheme.Multiline,
        extraButtonProps: i,
        children: [
          u.jsx("strong", { children: s._(/*BTDS*/ "About this call") }),
          u.jsx("br", {}),
          u.jsx("br", {}),
          s._(
            /*BTDS*/ "Your business uses a secure service from Meta to manage this call.",
          ),
        ],
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
