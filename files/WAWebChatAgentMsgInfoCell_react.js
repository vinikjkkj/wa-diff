__d(
  "WAWebChatAgentMsgInfoCell.react",
  [
    "WAWebBoolFunc",
    "WAWebChatCell.react",
    "WAWebClock",
    "WAWebDetailImage.react",
    "WAWebEmojiText.react",
    "WAWebMsgGetters",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(18),
        n = e.agentName,
        a = e.msg,
        i = e.theme,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = [o("WAWebMsgGetters").getFrom, o("WAWebMsgGetters").getT]),
          (t[0] = l))
        : (l = t[0]);
      var u = o("useWAWebMsgValues").useMsgValues(a.id, l),
        c = u[0],
        d = u[1],
        m;
      t[1] !== d
        ? ((m = o("WAWebClock").Clock.relativeDateAndTimeStr(d)),
          (t[1] = d),
          (t[2] = m))
        : (m = t[2]);
      var p = m,
        _;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = o("WAWebDetailImage.react").getSize(
            o("WAWebDetailImage.react").DetailImageSize.Small,
          )),
          (t[3] = _))
        : (_ = t[3]);
      var f = _,
        g,
        h;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = "x1n2onr6"),
          (h = { height: f, width: f }),
          (t[4] = g),
          (t[5] = h))
        : ((g = t[4]), (h = t[5]));
      var y;
      t[6] !== c
        ? ((y = s.jsx("div", {
            className: g,
            style: h,
            children: s.jsx(o("WAWebDetailImage.react").DefaultIcon, { id: c }),
          })),
          (t[6] = c),
          (t[7] = y))
        : (y = t[7]);
      var C;
      t[8] !== n
        ? ((C = s.jsx(o("WAWebEmojiText.react").EmojiText, {
            direction: "auto",
            text: n,
            titlify: !0,
            ellipsify: !0,
          })),
          (t[8] = n),
          (t[9] = C))
        : (C = t[9]);
      var b;
      t[10] !== p
        ? ((b = s.jsx("span", { title: p, children: p })),
          (t[10] = p),
          (t[11] = b))
        : (b = t[11]);
      var v;
      t[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = "x1sqbtui x1bnvlk4"), (t[12] = v))
        : (v = t[12]);
      var S;
      return (
        t[13] !== y || t[14] !== C || t[15] !== b || t[16] !== i
          ? ((S = s.jsx(r("WAWebChatCell.react"), {
              contextEnabled: o("WAWebBoolFunc").returnFalse,
              image: y,
              primary: C,
              secondary: b,
              className: v,
              theme: i,
              idle: !0,
            })),
            (t[13] = y),
            (t[14] = C),
            (t[15] = b),
            (t[16] = i),
            (t[17] = S))
          : (S = t[17]),
        S
      );
    }
    l.default = u;
  },
  98,
);
