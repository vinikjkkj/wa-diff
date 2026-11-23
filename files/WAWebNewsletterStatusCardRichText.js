__d(
  "WAWebNewsletterStatusCardRichText",
  [
    "WABidi",
    "WALinkify",
    "WAWebBlockQuoteFormatMutator",
    "WAWebBoldFormatMutator",
    "WAWebBulletedListFormatMutator",
    "WAWebBulletedListItemFormatMutator",
    "WAWebCodeFormatMutator",
    "WAWebFormat",
    "WAWebFormatConfiguration",
    "WAWebFormatSerializer",
    "WAWebInlineCodeFormatMutator",
    "WAWebItalicFormatMutator",
    "WAWebNewsletterStatusCardText",
    "WAWebNewsletterStatusCardTextLine",
    "WAWebNumberedListFormatMutator",
    "WAWebNumberedListItemFormatMutator",
    "WAWebRawGroupMentionFormatMutator",
    "WAWebRawMentionMutator",
    "WAWebSpoilerFormatMutator",
    "WAWebStrikethroughFormatMutator",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {
        isBold: !1,
        isItalic: !1,
        isStruckThrough: !1,
        isMonospace: !1,
        isLink: !1,
        isInlineCode: !1,
        isSpoiler: !1,
        paragraph: null,
      },
      u = " ",
      c = "\u202F",
      d = "\u2022",
      m = ">",
      p =
        /^[\t\x0B-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+/,
      _ = { kind: "bullet" },
      f = new Map([
        [(e = o("WAWebBulletedListItemFormatMutator")).BulletedListItem, _],
        [e.HyphenListItem, _],
        [o("WAWebBlockQuoteFormatMutator").BlockQuote, { kind: "quote" }],
      ]),
      g = [
        [[e.BulletedListItem, {}]],
        [[e.HyphenListItem, {}]],
        [[r("WAWebBulletedListFormatMutator"), {}]],
        [[o("WAWebNumberedListItemFormatMutator").NumberedListItem, {}]],
        [[r("WAWebNumberedListFormatMutator"), {}]],
      ],
      h = "\u200E",
      y = /:\/\/|@/,
      C = /[^\x21-\x7E]/,
      b = new Set([":", "=", "&"]),
      v = new Set(["~", ".", ",", "-", "_", "?", "#", "%", "=", "&"]),
      S = new Map([
        [r("WAWebBoldFormatMutator"), { isBold: !0 }],
        [r("WAWebItalicFormatMutator"), { isItalic: !0 }],
        [r("WAWebStrikethroughFormatMutator"), { isStruckThrough: !0 }],
        [o("WAWebCodeFormatMutator").Code, { isMonospace: !0 }],
        [
          r("WAWebInlineCodeFormatMutator"),
          { isMonospace: !0, isInlineCode: !0 },
        ],
        [r("WAWebSpoilerFormatMutator"), { isSpoiler: !0 }],
      ]);
    function R(e, t) {
      return r("WAWebFormat")(e, A(t), w);
    }
    function L(e, t) {
      return z(
        e.filter(function (e) {
          return !V(e);
        }),
      )
        .map(function (e) {
          var n = e.paragraph,
            r = e.spans;
          return r.length > 0 ? E(n) + k(r, t) : "";
        })
        .join("\n");
    }
    function E(e) {
      return (e == null ? void 0 : e.kind) === "bullet"
        ? d + " "
        : (e == null ? void 0 : e.kind) === "quote"
          ? m + " "
          : "";
    }
    function k(e, t) {
      return e
        .filter(function (t, n) {
          var r;
          return (
            !t.style.isSpoiler || !((r = e[n - 1]) != null && r.style.isSpoiler)
          );
        })
        .map(function (e) {
          return e.style.isSpoiler ? t : e.text;
        })
        .join("");
    }
    function I(e) {
      return e === "" ? [] : [{ text: e, style: s }];
    }
    function T(e) {
      var t = o("WALinkify")
        .findLinks(x(e))
        .map(function (e) {
          var t = e.index,
            n = e.url;
          return { start: t, end: t + n.length };
        });
      if (t.length === 0) return e;
      var n = 0;
      return oe(
        te(
          e,
          t.flatMap(function (e) {
            var t = e.end,
              n = e.start;
            return [n, t];
          }),
        )
          .flat()
          .map(function (e) {
            var r = n;
            return (
              (n += e.text.length),
              t.some(function (e) {
                return r >= e.start && r < e.end;
              })
                ? babelHelpers.extends({}, e, {
                    style: babelHelpers.extends({}, e.style, { isLink: !0 }),
                  })
                : e
            );
          }),
      );
    }
    function D(e) {
      for (var t = [].concat(e); t.length > 0 && H(t[0]); ) t.shift();
      for (; t.length > 0 && H(t[t.length - 1]); ) t.pop();
      var n = t.length - 1;
      return t.map(function (e, t) {
        if (e.style.isInlineCode) return e;
        var r = t === 0 ? e.text.trimStart() : e.text;
        return babelHelpers.extends({}, e, { text: t === n ? r.trimEnd() : r });
      });
    }
    function x(e) {
      return e
        .map(function (e) {
          return e.text;
        })
        .join("");
    }
    function $(e, t, n, r, a) {
      a === void 0 &&
        (a = function () {
          return 0;
        });
      var i = o("WABidi").bidiDir(x(e)) === "rtl",
        l = null;
      return z(e).flatMap(function (e) {
        var s = e.paragraph,
          u = e.spans,
          c = G({ isTextRtl: i, paragraph: s, previous: l, spans: u });
        l = { paragraph: s, isRtl: c };
        var d = o("WAWebNewsletterStatusCardText").measureInDirection(r, c),
          m = function (t) {
            return n - a(s, t === 0);
          };
        return j(u, t, m, d, c)
          .flatMap(function (e, n) {
            var r = P(e, c);
            return r === e
              ? [e]
              : j(
                  r,
                  t,
                  function (e) {
                    return m(n + e);
                  },
                  d,
                  c,
                );
          })
          .map(function (e, t) {
            return s != null
              ? { spans: e, isRtl: c, paragraph: s, isParagraphStart: t === 0 }
              : { spans: e, isRtl: c };
          });
      });
    }
    function P(e, t) {
      return o("WAWebNewsletterStatusCardTextLine").canDrawCardSpansSeparately({
        spans: e,
        isRtl: t,
      })
        ? e
        : I(x(e));
    }
    function N(e, t, n, r, a) {
      for (
        var i = e.isRtl,
          l = e.spans,
          u = { text: a, style: s },
          c = l.flatMap(function (e) {
            return o("WAWebNewsletterStatusCardText")
              .splitCardCharacters(e.text)
              .map(function (t) {
                return { text: t, style: e.style };
              });
          }),
          d = function () {
            return M(oe([].concat(re(c), [u])), t, r) <= n;
          },
          m = c.length;
        c.length > 0 && !d();
      )
        c.pop();
      var p = re(c),
        _ = p[p.length - 1],
        f = i && c.length < m && _ != null && _.style.isLink;
      return oe([].concat(p, f ? [{ text: h, style: _.style }] : [], [u]));
    }
    function M(e, t, n) {
      return e.reduce(function (e, r) {
        return e + n(r.text, t(r.style));
      }, 0);
    }
    var w = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      return (
        babelHelpers.inheritsLoose(t, e),
        (t.onDelimiter = function (t) {
          return [];
        }),
        (t.onMutator = function (t, n, o) {
          var e,
            a = B(t, o);
          if (a != null)
            return W(a.kind === "number" ? O(t, n, o) : q(n.flat()), a);
          var i = (e = S.get(t)) != null ? e : {},
            l = O(t, n, o).map(function (e) {
              return babelHelpers.extends({}, e, {
                style: babelHelpers.extends({}, e.style, i),
              });
            });
          return t === r("WAWebInlineCodeFormatMutator") ? U(l) : l;
        }),
        (t.onRoot = function (t) {
          return oe(t.flat());
        }),
        (t.onText = function (t) {
          return I(t);
        }),
        t
      );
    })(r("WAWebFormatSerializer"));
    function A(e) {
      var t = e.groupMentions,
        n = e.hasSpoiler,
        a = e.mentions,
        i = e.withParagraphs,
        l = o("WAWebFormatConfiguration").spoilerMutatorEntry({
          messageHasSpoiler: n,
        });
      return [
        [[o("WAWebCodeFormatMutator").Code, {}]],
        [[r("WAWebInlineCodeFormatMutator"), {}]],
      ].concat(
        i ? g : [],
        F(a, t),
        l != null ? [l] : [],
        [
          [
            [r("WAWebBoldFormatMutator"), {}],
            [r("WAWebItalicFormatMutator"), {}],
            [r("WAWebStrikethroughFormatMutator"), {}],
          ],
        ],
        i ? [[[o("WAWebBlockQuoteFormatMutator").BlockQuote, {}]]] : [],
      );
    }
    function F(e, t) {
      return [].concat(
        e != null ? [[[r("WAWebRawMentionMutator"), { mentions: e }]]] : [],
        t != null
          ? [
              [
                [
                  o("WAWebRawGroupMentionFormatMutator").RawGroupMention,
                  { groupMentions: t },
                ],
              ],
            ]
          : [],
      );
    }
    function O(e, t, n) {
      var r,
        o = e.unformatDecorations,
        a = o == null ? void 0 : o.pre;
      return [].concat(
        I(typeof a == "function" ? a(n) : a != null ? a : ""),
        t.flat(),
        I((r = o == null ? void 0 : o.post) != null ? r : ""),
      );
    }
    function B(e, t) {
      var n,
        r = f.get(e);
      if (
        r != null ||
        e !== o("WAWebNumberedListItemFormatMutator").NumberedListItem
      )
        return r;
      var a = (n = e.unformatDecorations) == null ? void 0 : n.pre;
      return {
        kind: "number",
        marker: typeof a == "function" ? a(t) : a != null ? a : "",
      };
    }
    function W(e, t) {
      return e.map(function (e) {
        return babelHelpers.extends({}, e, {
          style: babelHelpers.extends({}, e.style, { paragraph: t }),
        });
      });
    }
    function q(e) {
      var t = e.findIndex(function (e) {
        return e.style.isInlineCode || e.text.replace(p, "") !== "";
      });
      if (t === -1) return [];
      var n = e.slice(t),
        r = n[0],
        o = babelHelpers.arrayLikeToArray(n).slice(1);
      return [
        r.style.isInlineCode
          ? r
          : babelHelpers.extends({}, r, { text: r.text.replace(p, "") }),
      ].concat(o);
    }
    function U(e) {
      var t = {
        text: c,
        style: babelHelpers.extends({}, s, { isInlineCode: !0 }),
      };
      return [t].concat(e, [t]);
    }
    function V(e) {
      var t = e.style;
      return t.isInlineCode && !t.isMonospace;
    }
    function H(e) {
      return !e.style.isInlineCode && e.text.trim() === "";
    }
    function G(e) {
      var t,
        n = e.isTextRtl,
        r = e.paragraph,
        a = e.previous,
        i = e.spans,
        l = o("WABidi").bidiDir(x(i));
      return l != null
        ? l === "rtl"
        : (r == null ? void 0 : r.kind) === "quote" &&
            (a == null || (t = a.paragraph) == null ? void 0 : t.kind) ===
              "quote"
          ? a.isRtl
          : n;
    }
    function z(e) {
      var t = [{ spans: [], paragraph: null }];
      return (
        e.forEach(function (e) {
          var n = e.style,
            r = e.text;
          r.split("\n").forEach(function (e, r) {
            if (r > 0) {
              var o = t[t.length - 1];
              (o.spans.length === 0 && (o.paragraph = n.paragraph),
                t.push({ spans: [], paragraph: null }));
            }
            var a = t[t.length - 1];
            e !== "" &&
              (a.spans.length === 0 && (a.paragraph = n.paragraph),
              a.spans.push({ text: e, style: n }));
          });
        }),
        t
      );
    }
    function j(e, t, n, r, o) {
      var a = [],
        i = [],
        l = [],
        s = function () {
          var e,
            s =
              l.length === 0
                ? u.spans
                : [].concat(
                    l,
                    [{ text: u.separator, style: u.spaceStyle }],
                    u.spans,
                  );
          if (M(P(oe(s), o), t, r) <= n(a.length)) return ((l = s), 1);
          l.length > 0 && (a.push(l), i.push(u.separator === ""));
          var c = a.length,
            d = ne(
              u.spans,
              t,
              function (e) {
                return n(c + e);
              },
              r,
            );
          (d.slice(0, -1).forEach(function (e) {
            (a.push(e), i.push(!0));
          }),
            (l = (e = d[d.length - 1]) != null ? e : []));
        };
      for (var u of X(e)) s();
      a.push(l);
      var c = a.map(oe);
      return o ? K(c, i) : c;
    }
    function K(e, t) {
      return e.map(function (e, n) {
        return e.map(function (r, o) {
          var a = o === 0 && t[n - 1] === !0,
            i = o === e.length - 1 && t[n] === !0;
          return r.style.isLink && (a || i)
            ? babelHelpers.extends({}, r, { text: "" + Q(a) + r.text + Q(i) })
            : r;
        });
      });
    }
    function Q(e) {
      return e ? h : "";
    }
    function X(e) {
      var t = [],
        n = [],
        r = s;
      return (
        e.forEach(function (e) {
          var o = e.style,
            a = e.text;
          a.split(u).forEach(function (e, a) {
            (a > 0 &&
              (n.length > 0 &&
                t.push({ spans: n, spaceStyle: r, separator: u }),
              (n = []),
              (r = o)),
              e !== "" && n.push({ text: e, style: o }));
          });
        }),
        n.length > 0 && t.push({ spans: n, spaceStyle: r, separator: u }),
        t.flatMap(Y)
      );
    }
    function Y(e) {
      var t = [],
        n = 0;
      return (
        e.spans.forEach(function (e) {
          for (
            var r = e.style, o = e.text, a = r.isLink ? J(o) : 0, i = 1;
            i < a;
            i++
          )
            Z(o, i) && t.push(n + i);
          n += o.length;
        }),
        te(e.spans, t).map(function (t, n) {
          return n === 0
            ? babelHelpers.extends({}, e, { spans: t })
            : babelHelpers.extends({}, e, { spans: t, separator: "" });
        })
      );
    }
    function J(e) {
      var t = e.search(C),
        n = t === -1 ? e : e.slice(0, t);
      return y.test(n) ? n.length : 0;
    }
    function Z(e, t) {
      var n = e.charAt(t - 1);
      return b.has(n) || (n === "/" && e.charAt(t - 2) === "/")
        ? !0
        : n !== "-" && (v.has(e.charAt(t)) || ee(e, t));
    }
    function ee(e, t) {
      return (
        e.charAt(t) === "/" &&
        e.charAt(t - 1) !== "/" &&
        e.charAt(t + 1) !== "/"
      );
    }
    function te(e, t) {
      var n = [[]],
        r = 0;
      return (
        e.forEach(function (e) {
          var o = e.style,
            a = e.text,
            i = 0;
          (t
            .filter(function (e) {
              return e > r && e < r + a.length;
            })
            .forEach(function (e) {
              (n[n.length - 1].push({ text: a.slice(i, e - r), style: o }),
                n.push([]),
                (i = e - r));
            }),
            n[n.length - 1].push({ text: a.slice(i), style: o }),
            (r += a.length));
        }),
        n
      );
    }
    function ne(e, t, n, r) {
      var a = [],
        i = [];
      return (
        e.forEach(function (e) {
          var l = e.style,
            s = e.text;
          o("WAWebNewsletterStatusCardText")
            .splitCardCharacters(s)
            .forEach(function (e) {
              var o = [].concat(i, [{ text: e, style: l }]);
              i.length > 0 && M(oe(o), t, r) > n(a.length)
                ? (a.push(i), (i = [{ text: e, style: l }]))
                : (i = o);
            });
        }),
        a.push(i),
        a.map(oe)
      );
    }
    function re(e) {
      for (
        var t = [].concat(e);
        t.length > 0 && t[t.length - 1].text.trim() === "";
      )
        t.pop();
      return t;
    }
    function oe(e) {
      return e.reduce(function (e, t) {
        var n = e[e.length - 1];
        return (
          t.text === "" ||
            (n != null && ae(n.style, t.style)
              ? (e[e.length - 1] = babelHelpers.extends({}, n, {
                  text: n.text + t.text,
                }))
              : e.push(t)),
          e
        );
      }, []);
    }
    function ae(e, t) {
      return (
        e.isBold === t.isBold &&
        e.isItalic === t.isItalic &&
        e.isStruckThrough === t.isStruckThrough &&
        e.isMonospace === t.isMonospace &&
        e.isLink === t.isLink &&
        e.isInlineCode === t.isInlineCode &&
        e.isSpoiler === t.isSpoiler &&
        ie(e.paragraph, t.paragraph)
      );
    }
    function ie(e, t) {
      return e == null || t == null
        ? (e != null ? e : null) === (t != null ? t : null)
        : le(e) === le(t);
    }
    function le(e) {
      return e.kind === "number" ? e.kind + " " + e.marker : e.kind;
    }
    ((l.PLAIN_TEXT_STYLE = s),
      (l.parseCardRichText = R),
      (l.getCardRichTextAccessibleString = L),
      (l.toPlainCardRichText = I),
      (l.markCardRichTextLinks = T),
      (l.trimCardRichText = D),
      (l.getCardRichTextString = x),
      (l.wrapCardRichText = $),
      (l.toDrawableCardRichText = P),
      (l.shortenCardRichText = N),
      (l.measureCardRichText = M));
  },
  98,
);
