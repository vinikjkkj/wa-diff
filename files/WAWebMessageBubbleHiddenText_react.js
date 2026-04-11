__d(
  "WAWebMessageBubbleHiddenText.react",
  [
    "WAWebClassnames",
    "WAWebClock",
    "WAWebConnModel",
    "WAWebContactGetters",
    "WAWebCopyPasteCopyable.react",
    "WAWebFrontendContactGetters",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebContactValues",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react"));
    function c(e, t) {
      var n = t != null ? t : "";
      return e && o("WAWebConnModel").Conn.pushname
        ? o("WAWebConnModel").Conn.pushname
        : n;
    }
    function d(t) {
      var n = o("react-compiler-runtime").c(16),
        a = t.children,
        i = t.className,
        l = t.contact,
        s = t.msg,
        d = t.onClick,
        m = t.style,
        p = t.xstyle,
        _;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = [
            o("WAWebFrontendContactGetters").getFormattedUser,
            o("WAWebContactGetters").getIsMe,
          ]),
          (n[0] = _))
        : (_ = n[0]);
      var f = o("useWAWebContactValues").useContactValues(l.id, _),
        g = f[0],
        h = f[1],
        y;
      n[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = ["senderObj", "t"]), (n[1] = y))
        : (y = n[1]);
      var C = o("useWAWebModelValues").useModelValues(s, y),
        b = C.t,
        v;
      n[2] !== b
        ? ((v = o("WAWebClock").Clock.timeStr(b)), (n[2] = b), (n[3] = v))
        : (v = n[3]);
      var S = v,
        R;
      n[4] !== g || n[5] !== h
        ? ((R = c(h, g)), (n[4] = g), (n[5] = h), (n[6] = R))
        : (R = n[6]);
      var L = R,
        E;
      n[7] !== i || n[8] !== p
        ? ((E = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            i,
            (e || (e = r("stylex")))(p),
          )),
          (n[7] = i),
          (n[8] = p),
          (n[9] = E))
        : (E = n[9]);
      var k = "[" + S + "] " + L + ": ",
        I;
      return (
        n[10] !== a || n[11] !== d || n[12] !== m || n[13] !== E || n[14] !== k
          ? ((I = u.jsx(o("WAWebCopyPasteCopyable.react").CopyableDiv, {
              className: E,
              onClick: d,
              prePlainText: k,
              style: m,
              children: a,
            })),
            (n[10] = a),
            (n[11] = d),
            (n[12] = m),
            (n[13] = E),
            (n[14] = k),
            (n[15] = I))
          : (I = n[15]),
        I
      );
    }
    l.default = d;
  },
  98,
);
