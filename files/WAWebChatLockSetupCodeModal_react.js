__d(
  "WAWebChatLockSetupCodeModal.react",
  [
    "fbt",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebIconPopup.react",
    "WAWebTextUtils.react",
    "WAWebWdsPictoChatlockIcon.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c() {
      return u.jsx(r("WAWebIconPopup.react"), {
        icon: o("WAWebWdsPictoChatlockIcon.react").WdsPictoChatlockIcon,
        iconSize: "large",
        useFilledIcon: !1,
        title: s._(/*BTDS*/ "Set up your secret code"),
        primaryActionText: r("WAWebFbtCommon")("OK"),
        description: u.jsx(o("WAWebTextUtils.react").TextAlign, {
          align: "center",
          children: s._(
            /*BTDS*/ "To open locked chats on this device, you first need to create a secret code. Open {=m1} on your primary phone and select {=m3}. {=m5}",
            [
              s._implicitParam(
                "=m1",
                u.jsx(o("WAWebTextUtils.react").Bold, {
                  children: s._(/*BTDS*/ "Locked Chats"),
                }),
              ),
              s._implicitParam(
                "=m3",
                u.jsx(o("WAWebTextUtils.react").Bold, {
                  children: s._(/*BTDS*/ "Settings > Secret code"),
                }),
              ),
              s._implicitParam(
                "=m5",
                u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                  href: o("WAWebFaqUrl").getChatLockSecretCodeFaqUrl(),
                  children: s._(/*BTDS*/ "Learn more"),
                }),
              ),
            ],
          ),
        }),
        stretchButtons: !0,
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
