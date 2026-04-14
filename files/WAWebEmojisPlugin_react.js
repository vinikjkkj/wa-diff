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
      var t = e.emojiSize,
        n = e.transformTextEmoji,
        r = o("LexicalComposerContext").useLexicalComposerContext(),
        a = r[0],
        i = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "custom_racing_emoji",
        ),
        l = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "custom_racing_emoji_feb2025",
        );
      return (
        s(
          function () {
            var e = a.registerNodeTransform(
                o("Lexical").TextNode,
                function (e) {
                  c(e, t);
                },
              ),
              r = a.registerNodeTransform(o("Lexical").TextNode, function (e) {
                n && D(e, t);
              });
            return function () {
              (e(), r());
            };
          },
          [a, t, n],
        ),
        s(
          function () {
            a.update(function () {
              var e = [];
              for (var n of o("WAWebLexicalUtils").textNodesIterator(
                o("Lexical").$getRoot(),
              ))
                o("WAWebEmojiNode").$isEmojiNode(n) && e.push(n);
              e.forEach(function (e) {
                e.replace(
                  o("WAWebEmojiNode").$createEmojiNode(
                    e.emoji(),
                    e.textEmoji(),
                    t,
                  ),
                );
              });
            });
          },
          [a, t, i, l],
        ),
        o("useWAWebLexicalEvent").useLexicalCommandListener(
          a,
          o("Lexical").KEY_BACKSPACE_COMMAND,
          function () {
            var e;
            return (
              a.update(
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
                      a.update(
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
          },
        ),
        s(function () {
          o("WAWebFontLoader").FontLoader.load(
            o("WAWebFontLoader").Font.NOTO_EMOJI,
          );
        }, []),
        null
      );
    }
    l.default = x;
  },
  98,
);
