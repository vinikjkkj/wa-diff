__d(
  "WAWebEmojiSuggestionsPanel.react",
  [
    "Lexical",
    "WAWebEmojiPanelEmojiSuggestionsPanel.react",
    "WAWebL10N",
    "WAWebSuggestionsPanelContainer.react",
    "react",
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
      var t,
        n,
        a = e.editor,
        i = e.emojis,
        l = e.emojiSuggestionSelect,
        m = e.kind,
        p = e.onDismiss,
        _ = e.onSelect,
        f = u(),
        g = u(!1),
        h = function (t) {
          return !(!t && g.current);
        },
        y = function (t) {
          g.current = t;
        };
      ((t = o("useWAWebLexicalEvent")).useLexicalCommandListener(
        a,
        (n = o("Lexical")).KEY_ARROW_LEFT_COMMAND,
        function (e) {
          var t, n;
          return d(e) || !i
            ? !1
            : (r("WAWebL10N").isRTL()
                ? (t = f.current) == null || t.moveSelectionRight()
                : (n = f.current) == null || n.moveSelectionLeft(),
              !0);
        },
      ),
        t.useLexicalCommandListener(a, n.KEY_ARROW_RIGHT_COMMAND, function (e) {
          var t, n;
          return d(e) || !i
            ? !1
            : (r("WAWebL10N").isRTL()
                ? (t = f.current) == null || t.moveSelectionLeft()
                : (n = f.current) == null || n.moveSelectionRight(),
              !0);
        }));
      var C = function (t) {
        var e;
        return d(t) || !i
          ? !1
          : ((e = f.current) == null || e.pickSelectedEmoji(), !0);
      };
      (t.useLexicalCommandListener(a, n.KEY_ENTER_COMMAND, C),
        t.useLexicalCommandListener(a, n.KEY_TAB_COMMAND, C));
      var b = r("useWAWebMeasure")(),
        v = b[0],
        S = b[1].width,
        R = null;
      if (i) {
        var L =
          m !==
          o("WAWebSuggestionsPanelContainer.react").SuggestionsPanelKind.Menu
            ? { className: "x1y1aw1k xyri2b x1a8lsjc x1g0dm76" }
            : null;
        R = s.jsx(
          "div",
          babelHelpers.extends({}, L, {
            children: s.jsx(r("WAWebEmojiPanelEmojiSuggestionsPanel.react"), {
              ref: f,
              maxWidth:
                S -
                (m !==
                o("WAWebSuggestionsPanelContainer.react").SuggestionsPanelKind
                  .Menu
                  ? c
                  : 0),
              onEmoji: _,
              onSkinTonePicker: y,
              emojiList: i,
              emojiSuggestionSelect: l,
            }),
          }),
        );
      }
      return s.jsxs(s.Fragment, {
        children: [
          s.jsx(
            o("WAWebSuggestionsPanelContainer.react").SuggestionsPanelContainer,
            {
              editor: a,
              kind: m,
              onDismiss: p,
              onToggleVisibility: h,
              children: R,
            },
          ),
          s.jsx("div", { className: "x10l6tqk xh8yej3", ref: v }),
        ],
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
