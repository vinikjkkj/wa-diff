__d(
  "CometLexicalEmojiNode",
  ["Lexical"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 9,
      s = 16,
      u = 20,
      c = 16,
      d = (function (t) {
        function n(e, n, r, o, a) {
          var i;
          return (
            o === void 0 && (o = c),
            (i = t.call(this, e, a) || this),
            (i.__src = r),
            (i.__rawText = n),
            (i.__size = o),
            i
          );
        }
        (babelHelpers.inheritsLoose(n, t),
          (n.getType = function () {
            return "emoji";
          }),
          (n.clone = function (t) {
            return new n(t.__text, t.__rawText, t.__src, t.__size, t.__key);
          }),
          (n.importJSON = function (t) {
            var e = p(t.text, t.rawText, t.src, t.size);
            return e;
          }));
        var r = n.prototype;
        return (
          (r.exportJSON = function () {
            return babelHelpers.extends({}, t.prototype.exportJSON.call(this), {
              rawText: this.__rawText,
              size: this.__size,
              src: this.__src,
              type: "emoji",
            });
          }),
          (r.getRawText = function () {
            var e = this.getLatest();
            return e.__rawText;
          }),
          (r.createDOM = function () {
            var t = this.__text,
              n = this.__size,
              r = this.__src,
              o = document.createElement("span"),
              a = document.createElement("span"),
              i = o.style;
            if (
              ((i.cursor = "default"),
              (o.className =
                "x1xsqp64 xiy17q3 x1o6pynw x19co3pv xdj266r xjn30re xat24cr x1hb08if x2b8uid"),
              o.setAttribute("data-testid", "emoji"),
              r != null)
            ) {
              o.dataset.emojiSize = String(n);
              var l = new Image();
              ((l.src = r),
                l.complete && l.naturalWidth > 0
                  ? ((i.backgroundImage = "url(" + r + ")"),
                    (i.backgroundSize = n + "px " + n + "px"))
                  : t === this.__rawText
                    ? ((i.color = "inherit"),
                      (l.onload = function () {
                        var e = Number(o.dataset.emojiSize);
                        ((i.backgroundImage = "url(" + r + ")"),
                          (i.backgroundSize = e + "px " + e + "px"),
                          (i.color = ""));
                      }),
                      (l.onerror = function () {
                        i.color = "inherit";
                      }))
                    : ((l.onload = function () {
                        var e = Number(o.dataset.emojiSize);
                        ((i.backgroundImage = "url(" + r + ")"),
                          (i.backgroundSize = e + "px " + e + "px"));
                      }),
                      (l.onerror = function () {
                        var e = Number(o.dataset.emojiSize);
                        ((i.backgroundImage = "url(" + r + ")"),
                          (i.backgroundSize = e + "px " + e + "px"));
                      })));
            }
            return (
              t !== this.__rawText &&
                ((o.style.width = "calc(" + n + "px + 0.3em)"),
                (o.style.height = n + "px"),
                (o.className =
                  "x1xsqp64 xiy17q3 x1o6pynw x19co3pv xdj266r xjn30re xat24cr x1hb08if x2b8uid x1rg5ohu x6ikm8r x10wlt62 xmziwt1 xuxw1ft"),
                o.setAttribute("spellcheck", "false"),
                (a.style.fontFamily =
                  'Courier, "Courier New", Menlo, Monaco, monospace'),
                (a.style.fontSize = "15px"),
                (a.style.letterSpacing = n / (e * t.length) - 1 + "ch")),
              (a.textContent = t),
              (a.className =
                "xexx8yu xcaqkgz x18d9i69 xbwkkl7 x3jgonx x1bhl96m"),
              o.appendChild(a),
              o
            );
          }),
          (r.updateDOM = function (t, n) {
            var e = n.firstChild;
            if (e == null) return !0;
            var r = this.__text;
            return (
              e.textContent !== r && (e.textContent = r),
              (n.style.backgroundSize =
                this.__size + "px " + this.__size + "px"),
              !1
            );
          }),
          (r.setSize = function (t) {
            var e = this.getWritable();
            e.__size = t;
          }),
          (r.selectionTransform = function (t, n) {
            var e = this.__text;
            if (
              !(
                e === this.__rawText ||
                !o("Lexical").$isRangeSelection(t) ||
                t.is(n)
              )
            ) {
              var r = t.focus,
                a = n.focus,
                i = e.length,
                l = n.isCollapsed();
              a.offset === 0 ||
                a.offset === e.length ||
                r.is(a) ||
                (r.isBefore(a)
                  ? a.set(a.key, i, "text")
                  : a.set(a.key, 0, "text"),
                l && n.anchor.set(a.key, a.offset, "text"));
            }
          }),
          n
        );
      })(o("Lexical").TextNode);
    function m(e) {
      return e instanceof d;
    }
    function p(e, t, n, r) {
      return new d(e, t, n, r).setMode("token");
    }
    ((l.UFI_EMOJI_SIZE = s),
      (l.COMPOSER_EMOJI_SIZE_LARGE = u),
      (l.COMPOSER_EMOJI_SIZE_SMALL = c),
      (l.EmojiNode = d),
      (l.$isEmojiNode = m),
      (l.$createEmojiNode = p));
  },
  98,
);
