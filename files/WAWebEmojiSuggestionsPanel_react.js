__d(
  "WAWebEmojiSuggestionsPanel.react",
  [
    "Lexical",
    "WAWebEmojiPanelEmojiSuggestionsPanel.react",
    "WAWebL10N",
    "WAWebSuggestionsPanelContainer.react",
    "react",
    "react-compiler-runtime",
    "useWAWebLexicalEvent",
    "useWAWebMeasure",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useRef,
      c = 12;
    function d(e) {
      return !!(e && (e.metaKey || e.shiftKey || e.altKey || e.ctrlKey));
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(29),
        n = e.editor,
        a = e.emojis,
        i = e.emojiSuggestionSelect,
        l = e.kind,
        m = e.onDismiss,
        p = e.onSelect,
        _ = u(),
        f = u(!1),
        g;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = function (t) {
            return !(!t && f.current);
          }),
          (t[0] = g))
        : (g = t[0]);
      var h = g,
        y;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = function (t) {
            f.current = t;
          }),
          (t[1] = y))
        : (y = t[1]);
      var C = y,
        b;
      (t[2] !== a
        ? ((b = function (t) {
            var e, n;
            return d(t) || !a
              ? !1
              : (r("WAWebL10N").isRTL()
                  ? (e = _.current) == null || e.moveSelectionRight()
                  : (n = _.current) == null || n.moveSelectionLeft(),
                !0);
          }),
          (t[2] = a),
          (t[3] = b))
        : (b = t[3]),
        o("useWAWebLexicalEvent").useLexicalCommandListener(
          n,
          o("Lexical").KEY_ARROW_LEFT_COMMAND,
          b,
        ));
      var v;
      (t[4] !== a
        ? ((v = function (t) {
            var e, n;
            return d(t) || !a
              ? !1
              : (r("WAWebL10N").isRTL()
                  ? (e = _.current) == null || e.moveSelectionLeft()
                  : (n = _.current) == null || n.moveSelectionRight(),
                !0);
          }),
          (t[4] = a),
          (t[5] = v))
        : (v = t[5]),
        o("useWAWebLexicalEvent").useLexicalCommandListener(
          n,
          o("Lexical").KEY_ARROW_RIGHT_COMMAND,
          v,
        ));
      var S;
      t[6] !== a
        ? ((S = function (t) {
            var e;
            return d(t) || !a
              ? !1
              : ((e = _.current) == null || e.pickSelectedEmoji(), !0);
          }),
          (t[6] = a),
          (t[7] = S))
        : (S = t[7]);
      var R = S;
      (o("useWAWebLexicalEvent").useLexicalCommandListener(
        n,
        o("Lexical").KEY_ENTER_COMMAND,
        R,
      ),
        o("useWAWebLexicalEvent").useLexicalCommandListener(
          n,
          o("Lexical").KEY_TAB_COMMAND,
          R,
        ));
      var L = r("useWAWebMeasure")(),
        E = L[0],
        k = L[1],
        I = k.width,
        T = null;
      if (a) {
        var D;
        t[8] !== l
          ? ((D =
              l !==
              o("WAWebSuggestionsPanelContainer.react").SuggestionsPanelKind
                .Menu
                ? { className: "x1y1aw1k xyri2b x1a8lsjc x1g0dm76" }
                : null),
            (t[8] = l),
            (t[9] = D))
          : (D = t[9]);
        var x = D,
          $ =
            I -
            (l !==
            o("WAWebSuggestionsPanelContainer.react").SuggestionsPanelKind.Menu
              ? c
              : 0),
          P;
        t[10] !== i || t[11] !== a || t[12] !== p || t[13] !== $
          ? ((P = s.jsx(r("WAWebEmojiPanelEmojiSuggestionsPanel.react"), {
              ref: _,
              maxWidth: $,
              onEmoji: p,
              onSkinTonePicker: C,
              emojiList: a,
              emojiSuggestionSelect: i,
            })),
            (t[10] = i),
            (t[11] = a),
            (t[12] = p),
            (t[13] = $),
            (t[14] = P))
          : (P = t[14]);
        var N;
        (t[15] !== x || t[16] !== P
          ? ((N = s.jsx("div", babelHelpers.extends({}, x, { children: P }))),
            (t[15] = x),
            (t[16] = P),
            (t[17] = N))
          : (N = t[17]),
          (T = N));
      }
      var M;
      t[18] !== T || t[19] !== n || t[20] !== l || t[21] !== m
        ? ((M = s.jsx(
            o("WAWebSuggestionsPanelContainer.react").SuggestionsPanelContainer,
            {
              editor: n,
              kind: l,
              onDismiss: m,
              onToggleVisibility: h,
              children: T,
            },
          )),
          (t[18] = T),
          (t[19] = n),
          (t[20] = l),
          (t[21] = m),
          (t[22] = M))
        : (M = t[22]);
      var w;
      t[23] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = { className: "x10l6tqk xh8yej3" }), (t[23] = w))
        : (w = t[23]);
      var A;
      t[24] !== E
        ? ((A = s.jsx("div", babelHelpers.extends({}, w, { ref: E }))),
          (t[24] = E),
          (t[25] = A))
        : (A = t[25]);
      var F;
      return (
        t[26] !== M || t[27] !== A
          ? ((F = s.jsxs(s.Fragment, { children: [M, A] })),
            (t[26] = M),
            (t[27] = A),
            (t[28] = F))
          : (F = t[28]),
        F
      );
    }
    l.default = m;
  },
  98,
);
