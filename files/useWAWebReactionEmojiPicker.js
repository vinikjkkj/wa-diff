__d(
  "useWAWebReactionEmojiPicker",
  ["WAWebDropdown.react", "WAWebReactionsPanel.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.msgId,
        n = e.onCloseDetailsPane,
        a = e.onCloseEmojiPicker,
        i = e.onEmojiSelected,
        l = e.onOpenEmojiPicker,
        u = function (u, c) {
          (n == null || n(),
            self.setTimeout(function () {
              var e,
                n = function (t) {
                  (i(t), a == null || a());
                };
              l == null ||
                l({
                  menu: s.jsx(r("WAWebReactionsPanel.react"), {
                    msgId: t,
                    onSelection: n,
                  }),
                  dirY: o("WAWebDropdown.react").DirY.BOTTOM,
                  type: o("WAWebDropdown.react").MenuType.ReactionPicker,
                  anchor: (e = c.current) != null ? e : u.currentTarget,
                });
            }, 150));
        };
      return u;
    }
    l.default = u;
  },
  98,
);
