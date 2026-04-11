__d(
  "WAWebSendMsgToVerifyIdentityPopup.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebEmojiText.react",
    "WAWebFbtCommon",
    "WAWebModalManager",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.onOK,
        n = function () {
          (o("WAWebModalManager").ModalManager.close(), t());
        },
        a = e.name || s._(/*BTDS*/ "Contact"),
        i = s._(/*BTDS*/ "To verify, send a message to {name} and try again.", [
          s._param("name", a),
        ]);
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: { surface: "unknown", viewName: "verify-identity" },
        onOK: n,
        okText: r("WAWebFbtCommon")("OK"),
        children: u.jsx("div", {
          children: u.jsx(o("WAWebEmojiText.react").EmojiText, { text: i }),
        }),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
