__d(
  "WAWebUnstarAllPopup.react",
  [
    "fbt",
    "WAWebChatCollection",
    "WAWebConfirmPopup.react",
    "WAWebEmojiText.react",
    "WAWebModalManager",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = function () {
        o("WAWebModalManager").ModalManager.close();
      };
    function d(e) {
      var t = e.chat,
        n = e.msgs,
        r = function () {
          (t && t.pendingAction++,
            o("WAWebChatCollection")
              .ChatCollection.unstarAllMessages(n, t)
              .finally(function () {
                t && t.pendingAction--;
              }),
            o("WAWebModalManager").ModalManager.close());
        };
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: { surface: "unknown", viewName: "unstar-all" },
        onOK: r,
        okText: s._(/*BTDS*/ "Unstar"),
        onCancel: c,
        children: u.jsx("div", {
          children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
            text: s._(/*BTDS*/ "Unstar all messages?"),
          }),
        }),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
