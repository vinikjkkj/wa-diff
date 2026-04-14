__d(
  "WAWebCAPIGroupAboutModal.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebFlex.react",
    "WAWebModalManager",
    "WAWebText.react",
    "WAWebWdsPictoPrivacyBusinessIcon.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = { textAlignCenter: { textAlign: "x2b8uid", $$css: !0 } },
      d = "https://faq.whatsapp.com/1148840052398648";
    function m() {
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: { surface: "unknown", viewName: "capi-group-about" },
        onOK: o("WAWebModalManager").closeModalManager,
        cancelText: s._(/*BTDS*/ "Learn more"),
        onCancel: function () {
          return window.open(d, "_blank");
        },
        children: u.jsx(p, {}),
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p() {
      return u.jsxs(o("WAWebFlex.react").FlexColumn, {
        align: "center",
        children: [
          u.jsx(
            o("WAWebWdsPictoPrivacyBusinessIcon.react")
              .WdsPictoPrivacyBusinessIcon,
            {},
          ),
          u.jsx(o("WAWebText.react").WAWebTextLarge, {
            xstyle: c.textAlignCenter,
            margin: [16, 0],
            weight: "medium",
            children: s._(/*BTDS*/ "About your messages with this group"),
          }),
          u.jsx(o("WAWebText.react").WAWebTextMuted, {
            xstyle: c.textAlignCenter,
            marginBottom: 8,
            children: s._(
              /*BTDS*/ "WhatsApp secures your messages with the business and other members in this group.",
            ),
          }),
          u.jsx(o("WAWebText.react").WAWebTextMuted, {
            xstyle: c.textAlignCenter,
            children: s._(
              /*BTDS*/ "You are always in control of the conversation. You can leave this group or block a business at any time.",
            ),
          }),
        ],
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"),
      (l.CAPI_GROUP_ABOUT_MODAL_LEARN_MORE_URL = d),
      (l.CAPIGroupAboutModal = m),
      (l.CAPIGroupAboutModalContent = p));
  },
  226,
);
