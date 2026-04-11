__d(
  "WAWebMessageSpacerText.react",
  [
    "cx",
    "WAWebABProps",
    "WAWebClassnames",
    "WAWebCurrentUser",
    "WAWebMsgGetters",
    "WAWebSpacerText.react",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(17),
        n = e.children,
        a = e.className,
        i = e.isFollowUpReply,
        l = e.msg,
        s = e.overflowVisible,
        c = e.spacer,
        d = e.theme,
        m;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = [o("WAWebMsgGetters").getIsFromTemplate]), (t[0] = m))
        : (m = t[0]);
      var p = o("useWAWebMsgValues").useMsgValues(l.id, m),
        _ = p[0],
        f = c != null ? c : !0,
        g;
      if (
        o("WAWebCurrentUser").isEmployee() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_debug_color_code_retry_messages",
        )
      ) {
        var h =
            l.backgroundColor != null &&
            typeof l.backgroundColor == "number" &&
            "#" + l.backgroundColor.toString(16),
          y;
        (t[1] !== h
          ? ((y = { backgroundColor: h }), (t[1] = h), (t[2] = y))
          : (y = t[2]),
          (g = y));
      }
      var C;
      if (t[3] !== a || t[4] !== _ || t[5] !== s || t[6] !== d) {
        var b;
        ((C = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          a,
          ((b = {}),
          (b._akbu = !0),
          (b._akbw = d === "placeholder"),
          (b._akbv = _),
          (b._aut5 = d === "unifiedResponse"),
          b),
          s === !0 ? null : "x6ikm8r x10wlt62",
        )),
          (t[3] = a),
          (t[4] = _),
          (t[5] = s),
          (t[6] = d),
          (t[7] = C));
      } else C = t[7];
      var v;
      t[8] !== f || t[9] !== i || t[10] !== l
        ? ((v =
            f &&
            u.jsx(r("WAWebSpacerText.react"), { msg: l, isFollowUpReply: i })),
          (t[8] = f),
          (t[9] = i),
          (t[10] = l),
          (t[11] = v))
        : (v = t[11]);
      var S;
      return (
        t[12] !== g || t[13] !== n || t[14] !== C || t[15] !== v
          ? ((S = u.jsxs("div", { className: C, style: g, children: [n, v] })),
            (t[12] = g),
            (t[13] = n),
            (t[14] = C),
            (t[15] = v),
            (t[16] = S))
          : (S = t[16]),
        S
      );
    }
    l.default = c;
  },
  98,
);
