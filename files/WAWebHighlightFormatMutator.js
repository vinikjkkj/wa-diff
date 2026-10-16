__d(
  "WAWebHighlightFormatMutator",
  [
    "WAWebABProps",
    "WAWebExtractRangesUsingRegex",
    "WAWebFormatMutator",
    "WAWebHighlightMutatorComponent.react",
    "WAWebL10N",
    "WAWebL10NIsLatinAlphabetLanguage",
    "WAWebL10NRemoveAccents",
    "escapeRegex",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u =
        /^(?:[\u0300-\u036F\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0897-\u089F\u08CA-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09C1-\u09C4\u09CD\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3F\u0B41-\u0B44\u0B4D\u0B55\u0B56\u0B62\u0B63\u0B82\u0BC0\u0BCD\u0C00\u0C04\u0C3C\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC6\u0CCC\u0CCD\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D41-\u0D44\u0D4D\u0D62\u0D63\u0D81\u0DCA\u0DD2-\u0DD4\u0DD6\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732\u1733\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u180F\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1ABD\u1ABF-\u1ADD\u1AE0-\u1AEB\u1B00-\u1B03\u1B34\u1B36-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DFF\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302D\u3099\u309A\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDD69-\uDD6D\uDEAB\uDEAC\uDEFA-\uDEFF\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC01\uDC38-\uDC46\uDC70\uDC73\uDC74\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDCC2\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDE41\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF40\uDF66-\uDF6C\uDF70-\uDF74\uDFBB-\uDFC0\uDFCE\uDFD0\uDFD2\uDFE1\uDFE2]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB3-\uDCB8\uDCBA\uDCBF\uDCC0\uDCC2\uDCC3\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99\uDF60\uDF62-\uDF64\uDF66]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4\uDF00\uDF01\uDF36-\uDF3A\uDF40\uDF42\uDF5A]|\uD80D[\uDC40\uDC47-\uDC55]|\uD818[\uDD1E-\uDD29\uDD2D-\uDD2F]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD67-\uDD69\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDC8F\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD839[\uDCEC-\uDCEF\uDDEE\uDDEF\uDEE3\uDEE6\uDEEE\uDEEF\uDEF5]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uDB40[\uDD00-\uDDEF])$/,
      c = /[^\x00-\x7F]|[`^]/,
      d = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (
          babelHelpers.inheritsLoose(t, e),
          (t.match = function (t, n) {
            if (!n) return [];
            var e = n.boundary,
              o = e === void 0 ? !1 : e,
              a = n.ignoreDiacritics,
              i = a === void 0 ? !1 : a,
              l = n.terms;
            if (
              !l.length ||
              l.every(function (e) {
                return e.length === 0;
              })
            )
              return [];
            var s = m(t, l, i),
              u = p(t, s),
              c = u ? f(t) : null,
              d = _(t, s, u, c),
              g = r("WAWebExtractRangesUsingRegex")(d, S(l, o, s));
            return y(g, c);
          }),
          t
        );
      })(r("WAWebFormatMutator"));
    d.jsx = function (e, t, n) {
      var o = n.selectable;
      return s.jsx(r("WAWebHighlightMutatorComponent.react"), {
        selectable: o,
        children: e,
      });
    };
    function m(e, t, n) {
      return (
        n &&
        o("WAWebL10NIsLatinAlphabetLanguage").isLatinAlphabetLanguage(e) &&
        t.every(function (e) {
          return o("WAWebL10NIsLatinAlphabetLanguage").isLatinAlphabetLanguage(
            e,
          );
        }) &&
        !r("WAWebL10N").isRTL()
      );
    }
    function p(e, t) {
      return (
        t &&
        c.test(e) &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_search_highlight_offset_normalization_enabled",
        )
      );
    }
    function _(e, t, n, r) {
      if (n) {
        var a;
        return (a = r == null ? void 0 : r.text) != null ? a : e;
      }
      return t ? o("WAWebL10NRemoveAccents").removeAccents(e) : e;
    }
    function f(e) {
      var t = [],
        n = [],
        r = new Map(),
        o = !1,
        a = "",
        i = null,
        l = 0;
      for (var s of Array.from(e)) {
        var c = h(s, r);
        if (((o = o || c !== s), c === "")) {
          (u.test(s)
            ? (t.length === 0 && i == null && (i = l), g(t, l, s.length))
            : (i = null),
            (l += s.length));
          continue;
        }
        a += c;
        for (var d = 0; d < c.length; d++)
          (n.push(i != null ? i : l), t.push(l + s.length - 1));
        ((i = null), (l += s.length));
      }
      return o
        ? { endOffsets: t, sourceText: e, startOffsets: n, text: a }
        : null;
    }
    function g(e, t, n) {
      for (var r = e.length - 1; r >= 0 && e[r] === t - 1; r--)
        e[r] = t + n - 1;
    }
    function h(e, t) {
      if (/^[\x00-\x7F]$/.test(e) && e !== "^" && e !== "`") return e;
      var n = t.get(e);
      if (n != null) return n;
      var r = o("WAWebL10NRemoveAccents").removeAccents(e);
      return (t.set(e, r), r);
    }
    function y(e, t) {
      if (t == null) return e;
      var n = [];
      for (var r of e) {
        var o = C(r, t);
        o != null && n.push(o);
      }
      var a = [];
      for (var i of n) {
        var l = a[a.length - 1];
        l == null || i[0] > l[3]
          ? a.push(i)
          : (a[a.length - 1] = v(l, i, t.sourceText));
      }
      return a;
    }
    function C(e, t) {
      var n = e[0],
        r = e[1],
        o = e[2],
        a = e[3],
        i = e[4],
        l = b(t.startOffsets, n),
        s = b(t.startOffsets, r),
        u = b(t.endOffsets, o),
        c = b(t.endOffsets, a);
      return l == null || s == null || u == null || c == null
        ? null
        : ((i[0] = t.sourceText.slice(l, c + 1)),
          i[1] != null && (i[1] = t.sourceText.slice(s, u + 1)),
          (i.index = l),
          (i.input = t.sourceText),
          [l, s, u, c, i]);
    }
    function b(e, t) {
      return e[t];
    }
    function v(e, t, n) {
      var r = Math.min(e[0], t[0]),
        o = Math.min(e[1], t[1]),
        a = Math.max(e[2], t[2]),
        i = Math.max(e[3], t[3]),
        l = e[4];
      return (
        (l[0] = n.slice(r, i + 1)),
        l[1] != null && (l[1] = n.slice(o, a + 1)),
        (l.index = r),
        (l.input = n),
        [r, o, a, i, l]
      );
    }
    function S(e, t, n) {
      var a = n ? e.map(o("WAWebL10NRemoveAccents").removeAccents) : e,
        i = a.filter(function (e) {
          return e.trim().length > 0;
        }),
        l = i.map(r("escapeRegex")).join("|");
      return r("WAWebL10N").isRTL()
        ? new RegExp((t ? "(?:^|\\b)" : "") + "(\\S+)?(" + l + ")(\\S+)?", "ig")
        : new RegExp((t ? "(?:^|\\b)" : "") + "(" + l + ")", "ig");
    }
    l.default = d;
  },
  98,
);
