__d(
  "WAWebChatContactMsgInfoCell.react",
  [
    "WAWebCellFrame.react",
    "WAWebClock",
    "WAWebEmojiText.react",
    "WAWebFlex.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.icon,
        a = e.t,
        i = e.title,
        l;
      t[0] !== a
        ? ((l =
            a != null ? o("WAWebClock").Clock.relativeDateAndTimeStr(a) : "-"),
          (t[0] = a),
          (t[1] = l))
        : (l = t[1]);
      var u = l,
        c;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = "x6ikm8r x10wlt62 xlyipyv xeaf4i8"), (t[2] = c))
        : (c = t[2]);
      var d;
      t[3] !== i
        ? ((d = s.jsx(o("WAWebEmojiText.react").EmojiText, {
            direction: "auto",
            text: i,
            titlify: !0,
            ellipsify: !0,
          })),
          (t[3] = i),
          (t[4] = d))
        : (d = t[4]);
      var m;
      t[5] !== n || t[6] !== d
        ? ((m = s.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            className: c,
            testid: void 0,
            children: [n, d],
          })),
          (t[5] = n),
          (t[6] = d),
          (t[7] = m))
        : (m = t[7]);
      var p = m,
        _;
      return (
        t[8] !== p || t[9] !== u
          ? ((_ = s.jsx(r("WAWebCellFrame.react"), {
              primary: p,
              secondary: u,
              theme: "plain",
              idle: !0,
              testid: void 0,
            })),
            (t[8] = p),
            (t[9] = u),
            (t[10] = _))
          : (_ = t[10]),
        _
      );
    }
    l.default = u;
  },
  98,
);
