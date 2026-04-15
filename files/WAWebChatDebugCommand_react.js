__d(
  "WAWebChatDebugCommand.react",
  [
    "WAWebDebugCommandGetters",
    "WAWebEmojiText.react",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebHighlightedText.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebStateUtils",
    "WAWebUISpacing",
    "WAWebUnstyledButton.react",
    "react",
    "react-compiler-runtime",
    "useWAWebActiveSelection",
    "useWAWebDebugCommandValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        button: { width: "xh8yej3", backgroundColor: "x1280gxy", $$css: !0 },
        container: {
          height: "xdiz9cm",
          fontSize: "x1jchvi3",
          marginTop: "xdj266r",
          marginInlineEnd: "x14z9mp",
          marginBottom: "xat24cr",
          marginInlineStart: "x1lziwak",
          borderTopWidth: "x178xt8z",
          borderTopStyle: "x13fuv20",
          borderTopColor: "xx42vgk",
          textAlign: "x1yc453h",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        inactive: { ":hover_backgroundColor": "x17gydlx", $$css: !0 },
        active: { backgroundColor: "x4wrhlh", $$css: !0 },
        name: { fontSize: "x1jchvi3", $$css: !0 },
        doc: {
          fontSize: "x1f6kntn",
          lineHeight: "x1fc57z9",
          color: "xraqfvc",
          display: "x1lliihq",
          $$css: !0,
        },
      };
    function c(e) {
      var t = o("react-compiler-runtime").c(28),
        n = e.debugCommand,
        a = n.id,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = [
            o("WAWebDebugCommandGetters").getDoc,
            o("WAWebDebugCommandGetters").getName,
          ]),
          (t[0] = i))
        : (i = t[0]);
      var l = o("useWAWebDebugCommandValues").useDebugCommandValues(a, i),
        c = l[0],
        m = l[1],
        p = e.onClick,
        _ = r("useWAWebActiveSelection")(e.active, a),
        f = _[0],
        g = _[1],
        h;
      t[1] !== n || t[2] !== p
        ? ((h = function (t) {
            p(t, o("WAWebStateUtils").unproxy(n));
          }),
          (t[1] = n),
          (t[2] = p),
          (t[3] = h))
        : (h = t[3]);
      var y = h,
        C = d,
        b;
      t[4] !== y
        ? ((b = { enter: y, space: y }), (t[4] = y), (t[5] = b))
        : (b = t[5]);
      var v = b,
        S = g && u.active,
        R = !g && u.inactive,
        L;
      t[6] !== S || t[7] !== R
        ? ((L = [u.button, o("WAWebUISpacing").uiPadding.start30, S, R]),
          (t[6] = S),
          (t[7] = R),
          (t[8] = L))
        : (L = t[8]);
      var E = "li-" + a,
        k;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = [u.container, o("WAWebUISpacing").uiPadding.end30]), (t[9] = k))
        : (k = t[9]);
      var I;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = [u.name, o("WAWebUISpacing").uiPadding.bottom5]), (t[10] = I))
        : (I = t[10]);
      var T;
      t[11] !== m || t[12] !== e.searchQuery
        ? ((T = s.jsx(r("WAWebFlexItem.react"), {
            children: s.jsx(o("WAWebHighlightedText.react").HighlightedText, {
              text: m,
              xstyle: I,
              searchQuery: e.searchQuery,
            }),
          })),
          (t[11] = m),
          (t[12] = e.searchQuery),
          (t[13] = T))
        : (T = t[13]);
      var D;
      t[14] !== c
        ? ((D = s.jsx(r("WAWebFlexItem.react"), {
            children: s.jsx(o("WAWebEmojiText.react").EmojiText, {
              xstyle: u.doc,
              text: c,
              ellipsify: !0,
            }),
          })),
          (t[14] = c),
          (t[15] = D))
        : (D = t[15]);
      var x;
      t[16] !== D || t[17] !== T
        ? ((x = s.jsxs(o("WAWebFlex.react").FlexColumn, {
            justify: "center",
            align: "stretch",
            xstyle: k,
            children: [T, D],
          })),
          (t[16] = D),
          (t[17] = T),
          (t[18] = x))
        : (x = t[18]);
      var $;
      t[19] !== y || t[20] !== x || t[21] !== L || t[22] !== E
        ? (($ = s.jsx(r("WAWebUnstyledButton.react"), {
            xstyle: L,
            testid: void 0,
            onClick: y,
            children: x,
          })),
          (t[19] = y),
          (t[20] = x),
          (t[21] = L),
          (t[22] = E),
          (t[23] = $))
        : ($ = t[23]);
      var P;
      return (
        t[24] !== v || t[25] !== f || t[26] !== $
          ? ((P = s.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
              ref: f,
              onFocus: C,
              handlers: v,
              children: $,
            })),
            (t[24] = v),
            (t[25] = f),
            (t[26] = $),
            (t[27] = P))
          : (P = t[27]),
        P
      );
    }
    function d(e) {
      (e.stopPropagation(), e.preventDefault());
    }
    l.default = c;
  },
  98,
);
