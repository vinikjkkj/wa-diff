__d(
  "useWAWebReactionEmojiPicker",
  [
    "WAWebDropdown.react",
    "WAWebReactionsPanel.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.msgId,
        a = e.onCloseDetailsPane,
        i = e.onCloseEmojiPicker,
        l = e.onEmojiSelected,
        u = e.onOpenEmojiPicker,
        c;
      t[0] !== n || t[1] !== a || t[2] !== i || t[3] !== l || t[4] !== u
        ? ((c = function (t, c) {
            (a == null || a(),
              self.setTimeout(function () {
                var e,
                  a = function (t) {
                    (l(t), i == null || i());
                  };
                u == null ||
                  u({
                    menu: s.jsx(r("WAWebReactionsPanel.react"), {
                      msgId: n,
                      onSelection: a,
                    }),
                    dirY: o("WAWebDropdown.react").DirY.BOTTOM,
                    type: o("WAWebDropdown.react").MenuType.ReactionPicker,
                    anchor: (e = c.current) != null ? e : t.currentTarget,
                  });
              }, 150));
          }),
          (t[0] = n),
          (t[1] = a),
          (t[2] = i),
          (t[3] = l),
          (t[4] = u),
          (t[5] = c))
        : (c = t[5]);
      var d = c;
      return d;
    }
    l.default = u;
  },
  98,
);
