__d(
  "WAWebLimitSharingBlockedDueToAIGroup.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebModalManager",
    "WAWebText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c() {
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        title: s._(/*BTDS*/ "Advanced chat privacy and Meta AI"),
        okText: r("WAWebFbtCommon")("OK"),
        onOK: o("WAWebModalManager").closeModalManager,
        children: u.jsx(o("WAWebText.react").WAWebTextMuted, {
          testid: void 0,
          children: s._(
            /*BTDS*/ "Meta AI is in this chat. To turn on advanced chat privacy, Meta AI must first be removed from the group chat.",
          ),
        }),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
