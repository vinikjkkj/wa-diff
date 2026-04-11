__d(
  "WAWebChatKeptByMsgInfoCell.react",
  [
    "WAWebBoolFunc",
    "WAWebChatCell.react",
    "WAWebClock",
    "WAWebContactGetters",
    "WAWebDetailImage.react",
    "WAWebEmojiText.react",
    "WAWebFrontendContactGetters",
    "react",
    "react-compiler-runtime",
    "useWAWebContactValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(19),
        n = e.contact,
        a = e.kicTimestampMs,
        i = e.theme,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = [
            o("WAWebContactGetters").getId,
            o("WAWebContactGetters").getName,
            o("WAWebFrontendContactGetters").getFormattedName,
            o("WAWebContactGetters").getNotifyName,
          ]),
          (t[0] = l))
        : (l = t[0]);
      var u = o("useWAWebContactValues").useContactValues(n.id, l),
        c = u[0],
        d = u[1],
        m = u[2],
        p = u[3],
        _;
      t[1] !== c
        ? ((_ = s.jsx(o("WAWebDetailImage.react").DetailImage, { id: c })),
          (t[1] = c),
          (t[2] = _))
        : (_ = t[2]);
      var f = _,
        g;
      if (a != null) {
        var h;
        (t[3] !== a
          ? ((h = o("WAWebClock").Clock.relativeDateAndTimeStr(a / 1e3)),
            (t[3] = a),
            (t[4] = h))
          : (h = t[4]),
          (g = h));
      }
      var y;
      t[5] !== g
        ? ((y = s.jsx("span", { title: g, children: g })),
          (t[5] = g),
          (t[6] = y))
        : (y = t[6]);
      var C = y,
        b;
      if (!d && p) {
        var v;
        t[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = "xxayilr"), (t[7] = v))
          : (v = t[7]);
        var S;
        (t[8] !== p
          ? ((S = s.jsx(o("WAWebEmojiText.react").EmojiText, {
              className: v,
              direction: "auto",
              text: p,
            })),
            (t[8] = p),
            (t[9] = S))
          : (S = t[9]),
          (b = S));
      }
      var R;
      t[10] !== m
        ? ((R = s.jsx(o("WAWebEmojiText.react").EmojiText, {
            direction: "auto",
            text: m,
            titlify: !0,
            ellipsify: !0,
          })),
          (t[10] = m),
          (t[11] = R))
        : (R = t[11]);
      var L = b,
        E;
      t[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = "x1sqbtui x1bnvlk4"), (t[12] = E))
        : (E = t[12]);
      var k;
      return (
        t[13] !== f || t[14] !== C || t[15] !== b || t[16] !== R || t[17] !== i
          ? ((k = s.jsx(r("WAWebChatCell.react"), {
              contextEnabled: o("WAWebBoolFunc").returnFalse,
              image: f,
              primary: R,
              secondary: C,
              secondaryDetail: L,
              style: E,
              theme: i,
              idle: !0,
              testid: void 0,
            })),
            (t[13] = f),
            (t[14] = C),
            (t[15] = b),
            (t[16] = R),
            (t[17] = i),
            (t[18] = k))
          : (k = t[18]),
        k
      );
    }
    l.default = u;
  },
  98,
);
