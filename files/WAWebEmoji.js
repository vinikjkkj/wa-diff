__d(
  "WAWebEmoji",
  [
    "invariant",
    "WABitArray",
    "WANullthrows",
    "WAOnceWithReset",
    "WAWebABProps",
    "WAWebEmojiCompile",
    "WAWebEmojiConst",
    "WAWebGetEmojiPathExperimental",
    "compactMap",
    "justknobx",
    "lodash",
    "objectEntries",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = "\u25A1",
      u = "\u200D",
      c = [
        "\uD83C\uDFFB",
        "\uD83C\uDFFC",
        "\uD83C\uDFFD",
        "\uD83C\uDFFE",
        "\uD83C\uDFFF",
      ],
      d = new RegExp(c.join("|"), "g"),
      m = "\uD83E\uDDD1\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1",
      p = "\uD83D\uDC6D",
      _ = "\uD83D\uDC6C",
      f = "\uD83D\uDC6B",
      g = String.fromCodePoint(
        128105,
        8205,
        10084,
        65039,
        8205,
        128139,
        8205,
        128104,
      ),
      h = String.fromCodePoint(
        128105,
        8205,
        10084,
        65039,
        8205,
        128139,
        8205,
        128105,
      ),
      y = String.fromCodePoint(
        128104,
        8205,
        10084,
        65039,
        8205,
        128139,
        8205,
        128104,
      ),
      C = String.fromCodePoint(
        129489,
        8205,
        10084,
        65039,
        8205,
        128139,
        8205,
        129489,
      ),
      b = String.fromCodePoint(128143),
      v = String.fromCodePoint(128105, 8205, 10084, 65039, 8205, 128104),
      S = String.fromCodePoint(128105, 8205, 10084, 65039, 8205, 128105),
      R = String.fromCodePoint(128104, 8205, 10084, 65039, 8205, 128104),
      L = String.fromCodePoint(129489, 8205, 10084, 65039, 8205, 129489),
      E = String.fromCodePoint(128145),
      k = String.fromCodePoint(129309),
      I = new Set([m, p, _, f, g, h, y, b, v, S, R, E, k]),
      T = o("WAWebEmojiConst").HEART_EMOJIS.map(function (e) {
        return e;
      }),
      D = new Set([
        "\uFE00",
        "\uFE01",
        "\uFE02",
        "\uFE03",
        "\uFE04",
        "\uFE05",
        "\uFE06",
        "\uFE07",
        "\uFE08",
        "\uFE09",
        "\uFE0A",
        "\uFE0B",
        "\uFE0C",
        "\uFE0D",
        "\uFE0E",
        "\uFE0F",
      ]),
      x = [127950, 65039],
      $ = [127950, 8205, 128960],
      P = [127950, 8205, 128961],
      N = x
        .map(function (e) {
          return String.fromCodePoint(e);
        })
        .join(""),
      M = $.map(function (e) {
        return String.fromCodePoint(e);
      }).join(""),
      w = P.map(function (e) {
        return String.fromCodePoint(e);
      }).join(""),
      A = function (t) {
        return t.replace(/\uFE0F/g, "");
      },
      F = r("lodash").memoize(
        function (e, t) {
          function n(r) {
            if ((r === void 0 && (r = []), r.length === t)) return [r];
            for (var o = [], a = 0; a < e.length; a++) {
              var i = [].concat(r);
              (i.push(e[a]), (o = o.concat(n(i))));
            }
            return o;
          }
          return n();
        },
        function (e, t) {
          return e.toString() + t;
        },
      ),
      O = (function () {
        function t() {
          var t = this,
            n;
          ((this.skinToneVariations = c),
            (this.emojiRegex = function () {
              var e = t.$2();
              return ((e.lastIndex = 0), e);
            }),
            (this.$2 = (n = r("WAOnceWithReset"))(function () {
              var e = t.$5();
              return new RegExp("(" + e + ")", "g");
            })),
            (this.onlyEmojiRegex = function () {
              var e = t.$4();
              return ((e.lastIndex = 0), e);
            }),
            (this.$4 = n(function () {
              var e = t.$5();
              return new RegExp("^(" + e + ")+$", "g");
            })),
            (this.splitEmojis = function (e) {
              return t.containsOnlyEmoji(e) === !1
                ? null
                : e.split(t.emojiRegex()).filter(Boolean);
            }),
            (this.extractAllEmojis = function (e) {
              return t.containsEmoji(e) === !1
                ? null
                : Array.from(e.matchAll(t.emojiRegex()))
                    .filter(Boolean)
                    .map(function (e) {
                      return e[1];
                    });
            }),
            (this.containsEmoji = function (e) {
              return t.emojiRegex().test(e);
            }),
            (this.containsOnlyEmoji = function (e) {
              return t.onlyEmojiRegex().test(e);
            }),
            (this.matchLargeEmojiPattern = function (e) {
              if (e != null) {
                if (e.length > 50 || e.includes(" ")) return null;
                var n = t.$14(),
                  r = n.exec(e);
                return r ? r.filter(Boolean).slice(1) : null;
              }
            }),
            (this.normalizeEmojiFromString = function (e) {
              return t.normalizeEmoji(e);
            }),
            (this.normalizeEmoji = function (e) {
              var n = A(e),
                r = t.$12(),
                o = r.unqualifiedToNormalizedEmoji;
              return o.get(n);
            }),
            (this.normalizeAllEmojis = r("lodash").memoize(function (n) {
              return n
                ? n.replace(t.emojiRegex(), function (n, r) {
                    var o;
                    return D.has(r)
                      ? ""
                      : (o = t.normalizeEmoji(r)) != null
                        ? o
                        : e;
                  })
                : "";
            })),
            (this.getSkinToneVariant = function (e, n) {
              var r = t.$8(),
                o = r.get(e);
              if (o == null) return null;
              var a = B(n);
              return o.get(a);
            }),
            (this.$12 = n(function () {
              var e = t.$13(),
                n = e.legacyToEmoji,
                o = e.orderedEmojis,
                a = new Map(),
                i = new Map(),
                l = new Map(),
                s = 0;
              return (
                o.forEach(function (e, t) {
                  if (!(e === "" || e == null)) {
                    var n = Array.isArray(e) ? e : [e];
                    (n.forEach(function (e) {
                      i.set(e, t);
                      var n = A(e);
                      l.set(n, e);
                    }),
                      a.set(t, s),
                      s++);
                  }
                }),
                r("objectEntries")(n).forEach(function (e) {
                  var t = e[0],
                    n = e[1];
                  i.set(t, n);
                  var r = A(t);
                  l.set(r, t);
                }),
                {
                  emojiToGlyphId: i,
                  glyphIdToIndex: a,
                  unqualifiedToNormalizedEmoji: l,
                }
              );
            })),
            (this.$8 = n(function () {
              var e = t.$12(),
                n = e.emojiToGlyphId,
                r = new Map(),
                o = function () {
                  var e,
                    n = i.replace(d, function (t) {
                      return (e == null && (e = []), e.push(t), "");
                    });
                  if (e == null) return 0;
                  var o = e,
                    a;
                  n === "\uD83D\uDC69" + u + "\uD83E\uDD1D" + u + "\uD83D\uDC69"
                    ? (a = p)
                    : n ===
                        "\uD83D\uDC68" + u + "\uD83E\uDD1D" + u + "\uD83D\uDC68"
                      ? (a = _)
                      : n ===
                          "\uD83D\uDC69" +
                            u +
                            "\uD83E\uDD1D" +
                            u +
                            "\uD83D\uDC68"
                        ? (a = f)
                        : n === L
                          ? (a = E)
                          : n === C
                            ? (a = b)
                            : n === String.fromCodePoint(129777, 8205, 129778)
                              ? (a = k)
                              : (a = n);
                  var l = t.normalizeEmoji(a);
                  if (l == null) return 0;
                  var s = r.get(l);
                  s == null && ((s = new Map()), s.set("", l), r.set(l, s));
                  var c = B(o);
                  s.set(c, i);
                },
                a;
              for (var i of n.keys()) a = o();
              return r;
            })),
            (this.$7 = n(function () {
              var e = new Map();
              for (var n of t.$8().entries()) {
                var r = n[0],
                  o = n[1];
                for (var a of o.values()) e.set(a, r);
              }
              return e;
            })),
            (this.$5 = n(function () {
              var e = t.$12(),
                n = e.emojiToGlyphId;
              return r("WAWebEmojiCompile")(
                [].concat(Array.from(n.keys()), Array.from(D)).filter(Boolean),
              );
            })),
            (this.$3 = n(function () {
              var e = t.$5();
              return new RegExp("^(" + e + ")(" + e + ")?(" + e + ")?$");
            })),
            (this.getEmojisInCategory = function (e) {
              var n;
              return (n = t.$13().categorizedEmojis[e]) != null ? n : [];
            }),
            (this.$9 = n(function () {
              var e = t.$13(),
                n = e.categorizedEmojis,
                r = new Map();
              return (
                Object.keys(n).forEach(function (e) {
                  var a = o("WAWebEmojiConst").CATEGORY_ORDERING.indexOf(e);
                  n[e].forEach(function (e) {
                    var n = t.normalizeEmoji(e);
                    n != null && r.set(n, a);
                  });
                }),
                r
              );
            })),
            (this.$15 = function (e) {
              if (e === N) {
                if (
                  o("WAWebABProps").getABPropConfigValue(
                    "custom_racing_emoji_feb2025",
                  )
                )
                  return w;
                if (
                  o("WAWebABProps").getABPropConfigValue("custom_racing_emoji")
                )
                  return M;
              }
              return e;
            }),
            (this.getGlyphId = function (e) {
              var n = t.normalizeEmoji(e);
              if (n == null) return null;
              var r = t.$15(n),
                o = t.$12(),
                a = o.emojiToGlyphId;
              return a.get(r);
            }),
            (this.getGlyphPath = function (e, n) {
              var r = t.normalizeEmojiFromString(e);
              if (r == null) return null;
              var a = t.$15(r),
                i = t.$12(),
                l = i.emojiToGlyphId,
                s = l.get(a);
              return s == null
                ? null
                : o("WAWebGetEmojiPathExperimental").getGlyphExperimentalPath(
                    a,
                    t.$13().emojiType,
                    n,
                  );
            }),
            (this.getSpritesPath = function (e, t, n, r) {
              return o(
                "WAWebGetEmojiPathExperimental",
              ).getEmojiSpritesExperimentalPath(e, t, n, r);
            }),
            (this.isGlyphCached = function (e) {
              var n = t.$16(e);
              return t.$6().get(n);
            }),
            (this.markGlyphCached = function (e) {
              var n = t.$16(e);
              t.$6().set(n);
            }),
            (this.$6 = n(function () {
              return new (r("WABitArray"))(t.$17());
            })),
            (this.getCssClasses = function (e, n) {
              return (
                n === void 0 && (n = "small"),
                [
                  "b" + t.getBucket(e),
                  n === "small" ? "emoji" : "emojik",
                  t.$13().emojiType === o("WAWebEmojiConst").EMOJI_TYPE.APPLE
                    ? "apple"
                    : "wa",
                ].join(" ")
              );
            }),
            (this.getStyle = function (e, n) {
              n === void 0 && (n = "small");
              var r = t.$18(e, n),
                o = r.xpos,
                a = r.ypos;
              return { backgroundPosition: "-" + o + "px -" + a + "px" };
            }),
            (this.getBucket = function (e) {
              var n = t.$16(e),
                r = Math.floor(n / o("WAWebEmojiConst").BUCKET_SIZE);
              return "" + r;
            }),
            (this.getHeartEmojis = n(function () {
              return r("compactMap")(T, t.normalizeEmoji);
            })),
            (this.$10 = n(function () {
              var e = t.$17();
              return e - (e % o("WAWebEmojiConst").BUCKET_SIZE);
            })),
            (this.$11 = n(function () {
              return Math.floor(Math.sqrt(t.$17() - t.$10()));
            })));
        }
        var n = t.prototype;
        return (
          (n.configure = function (t) {
            t !== this.$1 &&
              ((this.$1 = t),
              this.getHeartEmojis.reset(),
              this.$2.reset(),
              this.$3.reset(),
              this.$4.reset(),
              this.$5.reset(),
              this.$6.reset(),
              this.$7.reset(),
              this.$8.reset(),
              this.$9.reset(),
              this.$10.reset(),
              this.$11.reset(),
              this.$12.reset());
          }),
          (n.$13 = function () {
            return (this.$1 != null || s(0, 56544), this.$1);
          }),
          (n.isConfigured = function () {
            return this.$1 != null;
          }),
          (n.isEmoji = function (t) {
            return this.normalizeEmoji(t) != null;
          }),
          (n.getSkinToneBase = function (t) {
            var e,
              n = this.normalizeEmoji(t);
            return n == null ? null : (e = this.$7().get(n)) != null ? e : null;
          }),
          (n.$14 = function () {
            var e = this.$3();
            return ((e.lastIndex = 0), e);
          }),
          (n.$17 = function () {
            var e = this.$12(),
              t = e.glyphIdToIndex;
            return t.size;
          }),
          (n.$18 = function (t, n) {
            var e = this.$16(t),
              r = e % o("WAWebEmojiConst").BUCKET_SIZE,
              a =
                e >= this.$10()
                  ? this.$11()
                  : Math.floor(Math.sqrt(o("WAWebEmojiConst").BUCKET_SIZE)),
              i = o("WAWebEmojiConst").EMOJI_WIDTH[n],
              l = Math.floor(r / a),
              s = Math.floor(r % a),
              u = s * i,
              c = l * i;
            return { xpos: u, ypos: c, width: i };
          }),
          (n.$16 = function (t) {
            var e = this.$12(),
              n = e.glyphIdToIndex;
            return r("WANullthrows")(n.get(t));
          }),
          (n.getEmojiAggregate = function (t) {
            var e = this.getNormalizedOrTofu(t),
              n = this.getSkinToneBase(e);
            return n != null ? n : A(e);
          }),
          (n.getNormalizedOrTofu = function (n) {
            var t = this.normalizeEmojiFromString(n);
            return t ? (r("justknobx")._("3178") ? t : n) : e;
          }),
          t
        );
      })();
    function B(e) {
      return e.every(function (t) {
        return t === e[0];
      })
        ? e[0]
        : e.join("");
    }
    function W(e) {
      return I.has(e);
    }
    var q = new O();
    ((l.OPEN_BOX_CHAR = e),
      (l.PEOPLE_HOLDING_HANDS = m),
      (l.WOMEN_HOLDING_HANDS = p),
      (l.MEN_HOLDING_HANDS = _),
      (l.WOMAN_AND_MAN_HOLDING_HANDS = f),
      (l.KISS_WOMAN_MAN = g),
      (l.KISS_WOMAN_WOMAN = h),
      (l.KISS_MAN_MAN = y),
      (l.KISS = b),
      (l.COUPLE_WITH_HEART_WOMAN_MAN = v),
      (l.COUPLE_WITH_HEART_WOMAN_WOMAN = S),
      (l.COUPLE_WITH_HEART_MAN_MAN = R),
      (l.COUPLE_WITH_HEART = E),
      (l.HANDSHAKE = k),
      (l.getPermutations = F),
      (l.isBaseMultiSkinToneEmoji = W),
      (l.EmojiUtil = q));
  },
  98,
);
