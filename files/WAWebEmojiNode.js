__d(
  "WAWebEmojiNode",
  [
    "$InternalEnum",
    "Lexical",
    "WAWebClassnames",
    "WAWebEmoji",
    "WAWebStylesEnv",
    "err",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = n("$InternalEnum").Mirrored(["Small", "Medium", "Large"]),
      u = {
        emoji: {
          display: "x1rg5ohu",
          verticalAlign: "x16dsc37",
          fontSize: "x1c3i2sq",
          fontFamily: "x19la9d6",
          lineHeight: "x1fc57z9",
          paddingTop: "xexx8yu",
          paddingInlineEnd: "x1ccui7m",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x18pi947",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          color: "x19co3pv",
          caretColor: "x11tp94h",
          width: "xw4jnvo",
          height: "x1qx5ct2",
          backgroundSize: "xfibh0p",
          backgroundRepeat: "xiy17q3",
          backgroundPosition: "x1xsqp64",
          $$css: !0,
        },
        emojiWin: {
          fontSize: "x1lkfr7t",
          paddingTop: "xexx8yu",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x1c1uobl",
          $$css: !0,
        },
        emojiSafari: {
          paddingTop: "xexx8yu",
          paddingInlineEnd: "x1im30kd",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x1djpfga",
          fontSize: "x1f6kntn",
          marginTop: "xdj266r",
          marginInlineEnd: "xjn30re",
          marginBottom: "xat24cr",
          marginInlineStart: "x1hb08if",
          fontFamily: "xz6nz0p",
          $$css: !0,
        },
        emojiFirefox: {
          fontSize: "x1lkfr7t",
          paddingTop: "xexx8yu",
          paddingInlineEnd: "x1j8ymqv",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x4tra6z",
          $$css: !0,
        },
        emojiLarge: {
          fontSize: "x8cw2a4",
          width: "x1247r65",
          height: "xng8ra",
          backgroundSize: "xkclhyd",
          paddingTop: "x1tiyuxx",
          paddingInlineEnd: "x1nzty39",
          paddingBottom: "x1nbhmlj",
          paddingInlineStart: "x12w63v0",
          $$css: !0,
        },
        emojiMedium: {
          fontSize: "x579bpy",
          width: "x100vrsf",
          height: "x1vqgdyp",
          backgroundSize: "x1umgpko",
          paddingTop: "x1tiyuxx",
          paddingInlineEnd: "x1nzty39",
          paddingBottom: "x1nbhmlj",
          paddingInlineStart: "x12w63v0",
          $$css: !0,
        },
        innerWin: {
          "::selection_backgroundColor": "xrtxmta",
          "::selection_color": "x1bhl96m",
          $$css: !0,
        },
      },
      c = (function (t) {
        function n(e, n, r, o) {
          var a;
          return (
            (a = t.call(this, e, o) || this),
            (a.__textEmoji = n),
            (a.__emojiSize = r),
            a
          );
        }
        (babelHelpers.inheritsLoose(n, t),
          (n.clone = function (t) {
            return new n(t.__text, t.__textEmoji, t.__emojiSize, t.__key);
          }),
          (n.getType = function () {
            return "emoji";
          }),
          (n.importJSON = function () {
            throw r("err")("Deserialization of EmojiNode is unsupported");
          }));
        var a = n.prototype;
        return (
          (a.emoji = function () {
            return this.__text;
          }),
          (a.textEmoji = function () {
            return this.__textEmoji;
          }),
          (a.createDOM = function () {
            var t = this.__text,
              n = document.createElement("span"),
              a = o("WAWebStylesEnv").hasSafariFix && u.emojiSafari,
              i = o("WAWebStylesEnv").hasFirefoxFix && u.emojiFirefox,
              l = o("WAWebStylesEnv").isOSWin && u.emojiWin,
              c = null,
              d = null;
            switch (this.__emojiSize) {
              case s.Small:
                d = o("WAWebEmoji").EmojiUtil.getGlyphPath(t, 40);
                break;
              case s.Medium:
                ((d = o("WAWebEmoji").EmojiUtil.getGlyphPath(t, 64)),
                  (c = u.emojiMedium));
                break;
              case s.Large:
                ((d = o("WAWebEmoji").EmojiUtil.getGlyphPath(t, 64)),
                  (c = u.emojiLarge));
                break;
            }
            ((n.className = o(
              "WAWebClassnames",
            ).classnamesConvertMeToStylexPlease(
              n.className,
              this.__emojiSize === s.Small && "emoji",
              (e || (e = r("stylex")))(u.emoji, a, i, l, c),
            )),
              d != null && (n.style.backgroundImage = "url('" + d + "')"));
            var m = document.createElement("span");
            m.textContent = t;
            var p = o("WAWebStylesEnv").isOSWin && u.innerWin;
            return ((m.className = e(p)), n.appendChild(m), n);
          }),
          (a.updateDOM = function (t, n) {
            var e = n.firstChild;
            if (e == null) return !0;
            var r = this.__text;
            return (e.textContent !== r && (e.textContent = r), !1);
          }),
          (a.exportJSON = function () {
            return babelHelpers.extends({}, t.prototype.exportJSON.call(this), {
              type: "emoji-node",
            });
          }),
          n
        );
      })(o("Lexical").TextNode);
    function d(e, t, n) {
      return (n === void 0 && (n = s.Small), new c(e, t, n).setMode("token"));
    }
    function m(e) {
      return e instanceof c;
    }
    ((l.EmojiSize = s),
      (l.EmojiNode = c),
      (l.$createEmojiNode = d),
      (l.$isEmojiNode = m));
  },
  98,
);
