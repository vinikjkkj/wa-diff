__d(
  "WAWebEmojisPlugin.react",
  [
    "Lexical",
    "LexicalComposerContext",
    "WAWebEmoji",
    "WAWebEmojiNode",
    "WAWebEmojiVariantCollection",
    "WAWebFontLoader",
    "WAWebLexicalUtils",
    "react",
    "react-compiler-runtime",
    "useWAWebABPropConfigValue",
    "useWAWebLexicalEvent",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useEffect;
    function* u(e) {
      for (var t = o("WAWebEmoji").EmojiUtil.emojiRegex(), n = 0; ; ) {
        var r = t.exec(e);
        if (!r) break;
        var a = r[0],
          i = r.index,
          l = n;
        ((n = t.lastIndex), yield { emoji: a, index: i, lastIndex: l });
      }
    }
    function c(e, t) {
      if (e.isSimpleText()) {
        var n = e.getTextContent(),
          r = e;
        for (var a of u(n)) {
          var i = a.emoji,
            l = a.index,
            s = a.lastIndex,
            c = l - s,
            d = void 0,
            m = void 0;
          if (c === 0) {
            var p = r.splitText(i.length);
            ((d = p[0]), (m = p[1]));
          } else {
            var _ = r.splitText(c, c + i.length);
            ((d = _[1]), (m = _[2]));
          }
          r = m;
          var f = o("WAWebEmojiNode").$createEmojiNode(i, null, t);
          d.replace(f);
        }
      }
    }
    var d = String.fromCodePoint(128077),
      m = String.fromCodePoint(128078),
      p = String.fromCodePoint(128578),
      _ = String.fromCodePoint(128577),
      f = String.fromCodePoint(128539),
      g = String.fromCodePoint(128528),
      h = String.fromCodePoint(128533),
      y = String.fromCodePoint(128512),
      C = String.fromCodePoint(128536),
      b = String.fromCodePoint(128558),
      v = String.fromCodePoint(10084, 65039),
      S = String.fromCodePoint(128513),
      R = String.fromCodePoint(128518),
      L = String.fromCodePoint(128521),
      E = String.fromCodePoint(128546),
      k = {
        "(y)": d,
        "(Y)": d,
        "(n)": m,
        "(N)": m,
        ":-)": p,
        ":-(": _,
        ":-p": f,
        ":-P": f,
        ":-\\": h,
        ":-D": y,
        ":-o": b,
        ";-)": L,
        ":-*": C,
        ":-|": g,
        ":'(": E,
        "^_^": S,
        "<3": v,
        ">_<": R,
      },
      I = 3,
      T = 2;
    function D(e, t) {
      if (e.isSimpleText()) {
        var n = o("WAWebLexicalUtils").$getRangeSelection(),
          r = o("WAWebLexicalUtils").$getPreviousRangeSelection(),
          a = r && o("Lexical").$getNodeByKey(r.anchor.key);
        if (
          !(
            !n ||
            !n.isCollapsed() ||
            n.anchor.getNode() !== e ||
            (a && a !== e)
          )
        ) {
          for (
            var i = n.anchor.offset, l = e.getTextContent(), s, u, c = T;
            c <= I;
            c++
          )
            if (((s = l.slice(i - c, i)), (u = k[s]), u != null)) {
              var d =
                o("WAWebEmoji").EmojiUtil.getSkinToneBase(u) &&
                o(
                  "WAWebEmojiVariantCollection",
                ).EmojiVariantCollection.getVariant(u);
              u = d != null ? d : u;
              break;
            }
          if (!(!s || !u)) {
            var m,
              p = i - s.length;
            if (p === 0) {
              var _ = e.splitText(s.length);
              m = _[0];
            } else {
              var f = e.splitText(p, p + s.length);
              m = f[1];
            }
            var g = o("WAWebEmojiNode").$createEmojiNode(u, s, t);
            m.replace(g);
          }
        }
      }
    }
    function x(e) {
      var t = o("react-compiler-runtime").c(16),
        n = e.emojiSize,
        r = e.transformTextEmoji,
        a = o("LexicalComposerContext").useLexicalComposerContext(),
        i = a[0],
        l = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "custom_racing_emoji",
        ),
        u = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "custom_racing_emoji_feb2025",
        ),
        d,
        m;
      (t[0] !== i || t[1] !== n || t[2] !== r
        ? ((d = function () {
            var e = i.registerNodeTransform(
                o("Lexical").TextNode,
                function (e) {
                  c(e, n);
                },
              ),
              t = i.registerNodeTransform(o("Lexical").TextNode, function (e) {
                r && D(e, n);
              });
            return function () {
              (e(), t());
            };
          }),
          (m = [i, n, r]),
          (t[0] = i),
          (t[1] = n),
          (t[2] = r),
          (t[3] = d),
          (t[4] = m))
        : ((d = t[3]), (m = t[4])),
        s(d, m));
      var p;
      t[5] !== i || t[6] !== n
        ? ((p = function () {
            i.update(function () {
              var e = [];
              for (var t of o("WAWebLexicalUtils").textNodesIterator(
                o("Lexical").$getRoot(),
              ))
                o("WAWebEmojiNode").$isEmojiNode(t) && e.push(t);
              e.forEach(function (e) {
                e.replace(
                  o("WAWebEmojiNode").$createEmojiNode(
                    e.emoji(),
                    e.textEmoji(),
                    n,
                  ),
                );
              });
            });
          }),
          (t[5] = i),
          (t[6] = n),
          (t[7] = p))
        : (p = t[7]);
      var _;
      (t[8] !== i || t[9] !== n || t[10] !== u || t[11] !== l
        ? ((_ = [i, n, l, u]),
          (t[8] = i),
          (t[9] = n),
          (t[10] = u),
          (t[11] = l),
          (t[12] = _))
        : (_ = t[12]),
        s(p, _));
      var f;
      (t[13] !== i
        ? ((f = function () {
            var e;
            return (
              i.update(
                function () {
                  var t = o("WAWebLexicalUtils").$getPreviousRangeSelection();
                  if (!(!t || !t.isCollapsed())) {
                    var n = t.anchor.getNode();
                    n instanceof o("WAWebEmojiNode").EmojiNode &&
                      (e = n.textEmoji());
                  }
                },
                {
                  onUpdate: function () {
                    e != null &&
                      i.update(
                        function () {
                          e != null && o("WAWebLexicalUtils").$insertText(e);
                        },
                        { skipTransforms: !0 },
                      );
                  },
                },
              ),
              !1
            );
          }),
          (t[13] = i),
          (t[14] = f))
        : (f = t[14]),
        o("useWAWebLexicalEvent").useLexicalCommandListener(
          i,
          o("Lexical").KEY_BACKSPACE_COMMAND,
          f,
        ));
      var g;
      return (
        t[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = []), (t[15] = g))
          : (g = t[15]),
        s($, g),
        null
      );
    }
    function $() {
      o("WAWebFontLoader").FontLoader.load(
        o("WAWebFontLoader").Font.NOTO_EMOJI,
      );
    }
    l.default = x;
  },
  98,
);
