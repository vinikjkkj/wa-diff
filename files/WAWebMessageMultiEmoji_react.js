__d(
  "WAWebMessageMultiEmoji.react",
  ["WAWebCopyPasteSelectable.react", "WAWebMessageLargeEmoji.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.animation,
        n = e.emojis,
        r = n ? n.length : 0;
      if (r === 0) return null;
      var a;
      switch (r) {
        default:
        case 3:
          a = o("WAWebMessageLargeEmoji.react").SIZE.MEDIUM;
          break;
        case 2:
          a = o("WAWebMessageLargeEmoji.react").SIZE.LARGE;
          break;
        case 1:
          a = o("WAWebMessageLargeEmoji.react").SIZE.XLARGE;
          break;
      }
      var i = n.map(function (e, n) {
        return s.jsx(
          o("WAWebMessageLargeEmoji.react").LargeEmoji,
          { animation: t, size: a, emoji: e, selectable: !0 },
          e + n,
        );
      });
      return s.jsx(o("WAWebCopyPasteSelectable.react").SelectableDiv, {
        selectable: !0,
        className:
          "x1n2onr6 xc9l9hb x78zum5 xl56j7k x1yrsyyn xdj266r x1emmycd x1u7kmwd xx6jrq6 x1ed109x",
        children: i,
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
