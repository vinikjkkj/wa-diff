__d(
  "WAWebCheckmarkInfoModal.react",
  [
    "fbt",
    "WAWebABProps",
    "WAWebClickableLink.react",
    "WAWebConfirmPopup.react",
    "WAWebEmojiText.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebModalManager",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      var e = o("WAWebFaqUrl").getBlueFaqUrl(),
        t = function () {
          o("WAWebModalManager").ModalManager.close();
        },
        n = function (n) {
          (n.preventDefault(),
            o("WAWebModalManager").ModalManager.close(),
            self.setTimeout(function () {
              return o("WAWebExternalLink.react").openExternalLink(e);
            }, 10));
        },
        a = d();
      return u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
        title: s._(/*BTDS*/ "Verified"),
        onOK: t,
        okText: r("WAWebFbtCommon")("Close"),
        children: [
          u.jsx(o("WAWebEmojiText.react").EmojiText, { text: a }),
          u.jsx("br", {}),
          u.jsx("br", {}),
          u.jsx(r("WAWebClickableLink.react"), {
            href: e,
            onClick: n,
            children: s._(/*BTDS*/ "Learn more about verified accounts"),
          }),
        ],
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d() {
      return o("WAWebABProps").getABPropConfigValue(
        "meta_verified_badge_education_vai_content",
      )
        ? s._(
            /*BTDS*/ "WhatsApp's parent company Meta has verified this account based on their activity and information or documents they provide.",
          )
        : o("WAWebABProps").getABPropConfigValue("blue_education_v2_enabled")
          ? s._(
              /*BTDS*/ "WhatsApp's parent company Meta has authenticated details of this account with trusted documentation.",
            )
          : s._(
              /*BTDS*/ "WhatsApp's parent company Meta has authenticated business details of this account. Some verified accounts are owned by a notable person or business and others are Meta Verified subscribers.",
            );
    }
    l.default = c;
  },
  226,
);
