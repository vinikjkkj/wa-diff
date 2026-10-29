__d(
  "WAWebEmojis.story",
  [
    "WAWebEmoji",
    "WAWebEmoji.react",
    "WAWebEmojiDownloadSuggestions",
    "WAWebMessageLargeEmoji.react",
    "WAWebRichTextField.react",
    "WAWebShowroomUtils",
    "react",
    "react-compiler-runtime",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useState;
    function m(e) {
      for (var t = "", n = 0; n < e.length; n++) {
        var r,
          o,
          a =
            (r = (o = e.codePointAt(n)) == null ? void 0 : o.toString(16)) !=
            null
              ? r
              : "";
        t += a.toUpperCase() + " ";
      }
      return t;
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(28),
        n = e.emoji,
        a = e.emojiSearchWords,
        i;
      t[0] !== n ? ((i = m(n)), (t[0] = n), (t[1] = i)) : (i = t[1]);
      var l = i,
        u;
      t[2] !== n
        ? ((u = o("WAWebEmoji").EmojiUtil.getGlyphId(n)),
          (t[2] = n),
          (t[3] = u))
        : (u = t[3]);
      var c = u,
        d;
      t[4] !== a ? ((d = a.map(_)), (t[4] = a), (t[5] = d)) : (d = t[5]);
      var p = d,
        f,
        g;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = {
            className:
              "x889kno x2vl965 x1a8lsjc xe2zdcy x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xpypsur x1fe0zbt x249io5 xtq6bvn x1exxlbk x2b8uid xxymvpz",
          }),
          (g = { className: "x78zum5 x6s0dn4 xl56j7k" }),
          (t[6] = f),
          (t[7] = g))
        : ((f = t[6]), (g = t[7]));
      var h;
      t[8] !== n
        ? ((h = s.jsx(
            "td",
            babelHelpers.extends({}, f, {
              children: s.jsx(
                "div",
                babelHelpers.extends({}, g, {
                  children: s.jsx(
                    o("WAWebMessageLargeEmoji.react").LargeEmoji,
                    {
                      size: o("WAWebMessageLargeEmoji.react").SIZE.LARGE,
                      selectable: !1,
                      emoji: n,
                    },
                  ),
                }),
              ),
            }),
          )),
          (t[8] = n),
          (t[9] = h))
        : (h = t[9]);
      var y;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = {
            className:
              "x889kno x2vl965 x1a8lsjc xe2zdcy x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xpypsur x1fe0zbt x249io5 xtq6bvn x1exxlbk x2b8uid xxymvpz",
          }),
          (t[10] = y))
        : (y = t[10]);
      var C;
      t[11] !== n
        ? ((C = s.jsx(
            "td",
            babelHelpers.extends({}, y, {
              children: s.jsx(r("WAWebEmoji.react"), {
                element: "span",
                emoji: n,
                size: "small",
              }),
            }),
          )),
          (t[11] = n),
          (t[12] = C))
        : (C = t[12]);
      var b;
      t[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = {
            className:
              "x889kno x2vl965 x1a8lsjc xe2zdcy x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xpypsur x1fe0zbt x249io5 xtq6bvn x1exxlbk x2b8uid xxymvpz",
          }),
          (t[13] = b))
        : (b = t[13]);
      var v;
      t[14] !== l
        ? ((v = s.jsx("td", babelHelpers.extends({}, b, { children: l }))),
          (t[14] = l),
          (t[15] = v))
        : (v = t[15]);
      var S;
      t[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = {
            className:
              "x889kno x2vl965 x1a8lsjc xe2zdcy x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xpypsur x1fe0zbt x249io5 xtq6bvn x1exxlbk x2b8uid xxymvpz",
          }),
          (t[16] = S))
        : (S = t[16]);
      var R;
      t[17] !== c
        ? ((R = s.jsx("td", babelHelpers.extends({}, S, { children: c }))),
          (t[17] = c),
          (t[18] = R))
        : (R = t[18]);
      var L;
      t[19] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = {
            className:
              "x889kno x2vl965 x1a8lsjc xe2zdcy x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xpypsur x1fe0zbt x249io5 xtq6bvn x1exxlbk xxymvpz x1yc453h",
          }),
          (t[19] = L))
        : (L = t[19]);
      var E;
      t[20] !== p
        ? ((E = s.jsx(
            "td",
            babelHelpers.extends({}, L, {
              children: s.jsx("ul", { children: p }),
            }),
          )),
          (t[20] = p),
          (t[21] = E))
        : (E = t[21]);
      var k;
      return (
        t[22] !== v || t[23] !== R || t[24] !== E || t[25] !== h || t[26] !== C
          ? ((k = s.jsxs("tr", { children: [h, C, v, R, E] })),
            (t[22] = v),
            (t[23] = R),
            (t[24] = E),
            (t[25] = h),
            (t[26] = C),
            (t[27] = k))
          : (k = t[27]),
        k
      );
    }
    function _(e) {
      return s.jsx("li", { children: e }, e);
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.dictionary,
        r = e.rawEmojiArray,
        a;
      t[0] !== n || t[1] !== r
        ? ((a = []),
          r.forEach(function (e) {
            var t = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(e);
            if (t != null) {
              var r = [];
              if (n != null) {
                var i;
                r = (i = n.get(t)) != null ? i : [];
              }
              a.push(s.jsx(p, { emoji: t, emojiSearchWords: r }, t));
            }
          }),
          (t[0] = n),
          (t[1] = r),
          (t[2] = a))
        : (a = t[2]);
      var i;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = s.jsx("thead", {
            children: s.jsxs("tr", {
              children: [
                s.jsx("th", {
                  className:
                    "x889kno x2vl965 x1a8lsjc xe2zdcy x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xpypsur x1fe0zbt x249io5 xtq6bvn x1exxlbk x2b8uid xxymvpz",
                  children: "Emoji Large",
                }),
                s.jsx("th", {
                  className:
                    "x889kno x2vl965 x1a8lsjc xe2zdcy x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xpypsur x1fe0zbt x249io5 xtq6bvn x1exxlbk x2b8uid xxymvpz",
                  children: "Emoji Small",
                }),
                s.jsx("th", {
                  className:
                    "x889kno x2vl965 x1a8lsjc xe2zdcy x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xpypsur x1fe0zbt x249io5 xtq6bvn x1exxlbk x2b8uid xxymvpz",
                  children: "Codepoints",
                }),
                s.jsx("th", {
                  className:
                    "x889kno x2vl965 x1a8lsjc xe2zdcy x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xpypsur x1fe0zbt x249io5 xtq6bvn x1exxlbk x2b8uid xxymvpz",
                  children: "GlyphId",
                }),
                s.jsx("th", {
                  className:
                    "x889kno x2vl965 x1a8lsjc xe2zdcy x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xpypsur x1fe0zbt x249io5 xtq6bvn x1exxlbk x2b8uid xxymvpz",
                  children: "Search Words",
                }),
              ],
            }),
          })),
          (t[3] = i))
        : (i = t[3]);
      var l;
      return (
        t[4] !== a
          ? ((l = s.jsxs("table", {
              children: [i, s.jsx("tbody", { children: a })],
            })),
            (t[4] = a),
            (t[5] = l))
          : (l = t[5]),
        l
      );
    }
    function g(e) {
      var t = new Map();
      return (
        Object.keys(e).forEach(function (n) {
          var r = e[n];
          r.forEach(function (e) {
            var r = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(e);
            if (r != null) {
              var a,
                i = (a = t.get(r)) != null ? a : [];
              (i.push(n), t.set(r, i));
            }
          });
        }),
        t
      );
    }
    function h() {
      var e = o("react-compiler-runtime").c(16),
        t = r("useWAWebUnmountSignal")(),
        n = d(""),
        a = n[0],
        i = n[1],
        l = d(null),
        u = l[0],
        m = l[1],
        p,
        _;
      (e[0] !== t
        ? ((p = function () {
            o("WAWebEmojiDownloadSuggestions")
              .downloadEmojiSuggestions()
              .then(function (e) {
                if (!t.aborted) {
                  var n = g(e[0]);
                  m(n);
                }
              })
              .catch(y);
          }),
          (_ = [t]),
          (e[0] = t),
          (e[1] = p),
          (e[2] = _))
        : ((p = e[1]), (_ = e[2])),
        c(p, _));
      var h;
      e[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = function (t) {
            i(t.text);
          }),
          (e[3] = h))
        : (h = e[3]);
      var C = h,
        b;
      if (e[4] !== a) {
        if (((b = []), a != null && a !== "")) {
          var v = o("WAWebEmoji").EmojiUtil.emojiRegex(),
            S,
            R = a;
          do {
            if (((S = v.exec(R)), S != null)) {
              var L = S[0];
              (b.push(L), (R = R.slice(S.index + L.length)));
            }
            v.lastIndex = 0;
          } while (S != null);
        }
        ((e[4] = a), (e[5] = b));
      } else b = e[5];
      var E;
      e[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = { className: "x1vd4hg5" }), (e[6] = E))
        : (E = e[6]);
      var k;
      e[7] !== a
        ? ((k = s.jsx(o("WAWebRichTextField.react").RichTextField, {
            title: "Type emoji to test",
            value: a,
            onChange: C,
            managed: !0,
            emojiBtnPosition: "side",
          })),
          (e[7] = a),
          (e[8] = k))
        : (k = e[8]);
      var I;
      e[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = { className: "x14rvwrp x10wjd1d x10l6tqk x1anpbxc" }),
          (e[9] = I))
        : (I = e[9]);
      var T;
      e[10] !== u || e[11] !== b
        ? ((T = s.jsx(
            "div",
            babelHelpers.extends({}, I, {
              children: s.jsx(f, { rawEmojiArray: b, dictionary: u }),
            }),
          )),
          (e[10] = u),
          (e[11] = b),
          (e[12] = T))
        : (T = e[12]);
      var D;
      return (
        e[13] !== k || e[14] !== T
          ? ((D = s.jsxs(
              "div",
              babelHelpers.extends({}, E, { children: [k, T] }),
            )),
            (e[13] = k),
            (e[14] = T),
            (e[15] = D))
          : (D = e[15]),
        D
      );
    }
    function y() {}
    var C = {
      storyName: "WAWebEmojis",
      component: r("WAWebEmoji.react"),
      description: "Displays emoji info based on string",
      examples: [
        {
          example: function () {
            return s.jsx(h, {});
          },
          title: "Display Emoji info",
          description: "Display emoji info based on text input",
          templateStyle: o("WAWebShowroomUtils").XLTallPreview,
        },
      ],
    };
    l.default = C;
  },
  98,
);
