__d(
  "WAWebNewsletterStatusCardTextLine",
  ["WABidi"],
  function (t, n, r, o, a, i, l) {
    var e =
        /(?:[0-9\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0BE6-\u0BEF\u0C66-\u0C6F\u0CE6-\u0CEF\u0D66-\u0D6F\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F29\u1040-\u1049\u1090-\u1099\u17E0-\u17E9\u1810-\u1819\u1946-\u194F\u19D0-\u19D9\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\uA620-\uA629\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19]|\uD801[\uDCA0-\uDCA9]|[\uD803\uD818][\uDD30-\uDD39\uDD40-\uDD49]|\uD804[\uDC66-\uDC6F\uDCF0-\uDCF9\uDD36-\uDD3F\uDDD0-\uDDD9\uDEF0-\uDEF9]|\uD805[\uDC50-\uDC59\uDCD0-\uDCD9\uDE50-\uDE59\uDEC0-\uDEC9\uDED0-\uDEE3\uDF30-\uDF39]|\uD806[\uDCE0-\uDCE9\uDD50-\uDD59\uDFF0-\uDFF9]|\uD807[\uDC50-\uDC59\uDD50-\uDD59\uDDA0-\uDDA9\uDDE0-\uDDE9\uDF50-\uDF59]|\uD81A[\uDE60-\uDE69\uDEC0-\uDEC9\uDF50-\uDF59]|\uD81B[\uDD70-\uDD79]|\uD833[\uDCF0-\uDCF9]|\uD835[\uDFCE-\uDFFF]|\uD838[\uDD40-\uDD49\uDEF0-\uDEF9]|\uD839[\uDCF0-\uDCF9\uDDF1-\uDDFA]|\uD83A[\uDD50-\uDD59]|\uD83E[\uDFF0-\uDFF9])/,
      s =
        /(?:[\u0600-\u0604\u0606-\u060B\u060D-\u061A\u061C-\u061E\u0620-\u063F\u0641-\u064A\u0656-\u066F\u0671-\u06DC\u06DE-\u070D\u070F-\u074A\u074D-\u07B1\u0860-\u086A\u0870-\u0891\u0897-\u08E1\u08E3-\u08FF\uFB50-\uFD3D\uFD40-\uFDCF\uFDF0-\uFDFF\uFE70-\uFE74\uFE76-\uFEFC]|\uD803[\uDE60-\uDE7E\uDEC2-\uDEC7\uDED0-\uDED8\uDEFA-\uDEFF]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB\uDEF0\uDEF1])/,
      u =
        "%\\u066A\\u0609\\u060A\\u2030\\u2031#\\u00B0\\u00B1\\u2032\\u2033\\uFF05\\uFF03\\p{Sc}",
      c = "+\\-\\u2212",
      d = "[^\\P{Nd}\\u0660-\\u0669]",
      m = new RegExp("[" + u + c + "]", "u"),
      p = /[\',\.\/:\xA0\u066B\u066C\u2009\u2019\u202F]/,
      _ = 4,
      f = new RegExp(
        [d + "[" + u + "]", "[" + u + "]" + d, d + "[" + c + "]" + d].join("|"),
        "u",
      ),
      g = new RegExp(d, "u");
    function h(e) {
      var t = e.fontFor,
        n = e.left,
        r = e.line,
        o = e.lineHeight,
        a = e.measure,
        i = e.width,
        l = e.y,
        s = r.isRtl,
        u = r.spans,
        c = u.map(function (e) {
          var n = e.style,
            r = e.text;
          return a(r, t(n), s);
        }),
        d = c.reduce(function (e, t) {
          return e + t;
        }, 0),
        m = s ? n + i - d : n,
        p = s ? m + d : m,
        _ = u.map(function (e, n) {
          var r = e.style,
            a = e.text,
            i = { x: s ? p - c[n] : p, y: l - o / 2, width: c[n], height: o },
            u = babelHelpers.extends(
              {
                text: a,
                x: p,
                y: l,
                font: t(r),
                align: s ? "right" : "left",
                isRtl: s,
                isStruckThrough: r.isStruckThrough,
                isLink: r.isLink,
              },
              b(C(r, i)),
            );
          return ((p += s ? -c[n] : c[n]), u);
        });
      return { runs: y(_), endX: s ? m : m + d };
    }
    function y(e) {
      var t = [].concat(e),
        n = -1;
      return (
        e.forEach(function (e, r) {
          var o,
            a,
            i =
              ((o = e.highlight) == null ? void 0 : o.kind) === "spoiler"
                ? e.highlight.box
                : null,
            l =
              (a = t[n]) == null || (a = a.highlight) == null ? void 0 : a.box;
          if (i == null || l == null) {
            n = i != null ? r : -1;
            return;
          }
          var s = Math.min(l.x, i.x),
            u = Math.max(l.x + l.width, i.x + i.width);
          ((t[n] = babelHelpers.extends({}, t[n], {
            highlight: {
              kind: "spoiler",
              box: babelHelpers.extends({}, l, { x: s, width: u - s }),
            },
          })),
            (t[r] = babelHelpers.extends({}, e, {
              highlight: {
                kind: "spoiler",
                box: babelHelpers.extends({}, i, { width: 0 }),
              },
            })));
        }),
        t
      );
    }
    function C(e, t) {
      var n = e.isInlineCode,
        r = e.isSpoiler;
      return r
        ? { kind: "spoiler", box: t }
        : n
          ? { kind: "inlineCode", box: t }
          : null;
    }
    function b(e) {
      return e != null ? { highlight: e } : {};
    }
    function v(e) {
      var t = e.isRtl,
        n = e.spans;
      if (
        n.length <= 1 ||
        n.some(function (e) {
          return e.style.isSpoiler;
        })
      )
        return !0;
      var r = n
        .map(function (e) {
          return e.text;
        })
        .join("");
      return (
        n.every(function (e) {
          return L(e, t);
        }) &&
        !(t && (I(n, r) || S(n))) &&
        !E(
          n.map(function (e) {
            return e.text;
          }),
        )
      );
    }
    function S(e) {
      return e.some(function (t, n) {
        return (
          t.style.isLink &&
          R(
            e
              .slice(n + 1)
              .map(function (e) {
                return e.text;
              })
              .join(""),
          )
        );
      });
    }
    function R(e) {
      for (var t of Array.from(e)) {
        if (g.test(t)) return !0;
        var n = o("WABidi").bidiDir(t);
        if (n != null) return n === "ltr";
      }
      return !1;
    }
    function L(e, t) {
      var n = e.style,
        r = e.text,
        o = x(r);
      return t && n.isLink
        ? o.size <= 1
        : o.size === 0 || (o.size === 1 && o.has(t ? "rtl" : "ltr"));
    }
    function E(e) {
      var t = !1;
      return e.some(function (e) {
        var n = t && k(e);
        return ((t = t || s.test(e)), n);
      });
    }
    function k(e) {
      var t = Array.from(e),
        n = t.findIndex(function (e) {
          return o("WABidi").bidiDir(e) != null;
        });
      return f.test((n === -1 ? t : t.slice(0, n)).join(""));
    }
    function I(e, t) {
      var n = 0;
      for (var r of e.slice(0, -1))
        if (((n += r.text.length), T(t, n))) return !0;
      return !1;
    }
    function T(t, n) {
      var r,
        o,
        a = Array.from(t.slice(Math.max(0, n - _), n)),
        i = (r = a[a.length - 1]) != null ? r : "",
        l = (o = a[a.length - 2]) != null ? o : "",
        s = Array.from(t.slice(n, n + _)),
        u = s[0],
        c = u === void 0 ? "" : u,
        d = s[1],
        m = d === void 0 ? "" : d;
      return (e.test(i) && D(c, m)) || (e.test(c) && D(i, l));
    }
    function D(t, n) {
      return e.test(t) || m.test(t) || (p.test(t) && e.test(n));
    }
    function x(e) {
      var t = new Set();
      return (
        Array.from(e).forEach(function (e) {
          var n = o("WABidi").bidiDir(e);
          n != null && t.add(n);
        }),
        t
      );
    }
    ((l.positionCardRichTextLine = h),
      (l.canDrawCardSpansSeparately = v),
      (l.separatesNumberFromArabic = E),
      (l.getStrongDirections = x));
  },
  98,
);
