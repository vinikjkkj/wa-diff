__d(
  "WAWebContactImportCSVValidation",
  ["WAWebContactImportCSVParsingUtils", "WAWebContactImportTypedError"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t) {
        var n;
        return (
          (n =
            e.call(this, o("WAWebContactImportTypedError").FileError.FORMAT) ||
            this),
          (n.issue = t),
          n
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(o("WAWebContactImportTypedError").WAWebContactImportTypedError);
    async function s(e, t, n, r) {
      if ((r === void 0 && (r = {}), !y(t)))
        return { result: t, separator: null };
      var a = r.fullFileProbe === !0,
        i = a ? e : e.slice(0, _),
        l = a ? void 0 : f,
        s = await Promise.all(
          h.map(function (e) {
            return u(i, e, l, n);
          }),
        ),
        c = [],
        d = [];
      for (var m of s)
        m.status === "failed"
          ? d.push(m.error)
          : m.candidate != null &&
            c.push({ candidate: m.candidate, result: m.result });
      if (d.length === s.length) throw d[0];
      var p = c.length === 1 ? c[0] : null;
      return p == null
        ? { result: t, separator: null }
        : {
            result: a
              ? p.result
              : await o("WAWebContactImportCSVParsingUtils").loadPapaParse(
                  e,
                  p.candidate.delimiter,
                ),
            separator: p.candidate.separator,
          };
    }
    async function u(e, t, n, r) {
      try {
        var a = await o("WAWebContactImportCSVParsingUtils").loadPapaParse(
            e,
            t.delimiter,
            n,
          ),
          i = r(a.data, t.delimiter, a.errors.some(p));
        return {
          candidate: i != null && i.data.length >= g ? t : null,
          result: a,
          status: "completed",
        };
      } catch (e) {
        return { error: e, status: "failed" };
      }
    }
    function c(t, n) {
      var r,
        o = k(t),
        a = C(o, n.meta.delimiter);
      if (a != null) throw new e(a);
      var i = n.errors.find(p);
      if (i != null) {
        var l = E(o, n.meta.delimiter),
          s = i.index != null ? I(o.slice(0, i.index)) + 1 : 1,
          u = i.row,
          c = i.index == null && u != null && (r = l[u]) != null ? r : s;
        throw new e(m(i, c));
      }
    }
    function d(t, n, r, o) {
      o === void 0 && (o = null);
      var a = n.data,
        i = a[r];
      if (i != null)
        for (
          var l = k(t), s = E(l, n.meta.delimiter), u = r + 1;
          u < a.length;
          u++
        ) {
          var c,
            d = a[u];
          if (!(T(d) || d.length === i.length)) {
            var m = (c = s[u]) != null ? c : u + 1;
            throw o != null
              ? new e({
                  actualColumnCount: d.length,
                  expectedColumnCount: i.length,
                  physicalRow: m,
                  reason: "separator_column_count",
                  separator: o,
                })
              : new e({
                  actualColumnCount: d.length,
                  expectedColumnCount: i.length,
                  physicalRow: m,
                  reason: "column_count",
                });
          }
        }
    }
    function m(e, t) {
      return e.code === "InvalidQuotes"
        ? { physicalRow: t, reason: "invalid_quotes" }
        : e.code === "MissingQuotes"
          ? { physicalRow: t, reason: "missing_quotes" }
          : { physicalRow: t, reason: "parse_error" };
    }
    function p(e) {
      return e.type !== "FieldMismatch" && e.code !== "UndetectableDelimiter";
    }
    var _ = 64 * 1024,
      f = 100,
      g = 2,
      h = [
        { delimiter: "	", separator: "tab" },
        { delimiter: ";", separator: "semicolon" },
      ];
    function y(e) {
      return e.errors.some(function (e) {
        return e.code === "UndetectableDelimiter";
      });
    }
    function C(e, t) {
      for (var n = !0, r = null, o = 1, a = 0; a < e.length; a++) {
        var i = e[a];
        if (i === '"') {
          if (!n) return { physicalRow: o, reason: "invalid_quotes" };
          var l = b(e, a + 1, o, t);
          if (l.issue != null) return l.issue;
          ((a = l.endIndex), (o = l.physicalRow), (n = !1));
        } else if (
          i === "\r" ||
          i ===
            `
`
        ) {
          var s = L(e, a);
          if (s.endIndex < e.length - 1) {
            if (r == null) r = s.lineEnding;
            else if (s.lineEnding !== r)
              return {
                actualLineEnding: s.lineEnding,
                expectedLineEnding: r,
                physicalRow: o,
                reason: "mixed_line_endings",
              };
          }
          ((a = s.endIndex), o++, (n = !0));
        } else S(e, a, t) ? ((a += t.length - 1), (n = !0)) : (n = !1);
      }
      return null;
    }
    function b(e, t, n, r) {
      for (var o = n, a = t; a < e.length; a++) {
        var i = e[a];
        if (
          i === "\r" ||
          i ===
            `
`
        )
          ((a = R(e, a)), o++);
        else if (i === '"') {
          if (e[a + 1] === '"') {
            a++;
            continue;
          }
          var l = v(e, a + 1, r),
            s = e[l];
          return s != null &&
            !S(e, l, r) &&
            s !== "\r" &&
            s !==
              `
`
            ? {
                endIndex: a,
                issue: { physicalRow: o, reason: "invalid_quotes" },
                physicalRow: o,
              }
            : { endIndex: a, issue: null, physicalRow: o };
        }
      }
      return {
        endIndex: e.length,
        issue: { physicalRow: n, reason: "missing_quotes" },
        physicalRow: o,
      };
    }
    function v(e, t, n) {
      for (var r = t; !S(e, r, n) && (e[r] === " " || e[r] === "	"); ) r++;
      return r;
    }
    function S(e, t, n) {
      return n !== "" && e.startsWith(n, t);
    }
    function R(e, t) {
      return L(e, t).endIndex;
    }
    function L(e, t) {
      return e[t] === "\r"
        ? e[t + 1] ===
          `
`
          ? { endIndex: t + 1, lineEnding: "CRLF" }
          : { endIndex: t, lineEnding: "CR" }
        : { endIndex: t, lineEnding: "LF" };
    }
    function E(e, t) {
      for (var n = [1], r = !0, o = !1, a = 1, i = 0; i < e.length; i++) {
        var l = e[i];
        o
          ? l === '"'
            ? e[i + 1] === '"'
              ? i++
              : (o = !1)
            : (l === "\r" ||
                l ===
                  `
`) &&
              ((i = R(e, i)), a++)
          : l === "\r" ||
              l ===
                `
`
            ? ((i = R(e, i)), a++, n.push(a), (r = !0))
            : l === t
              ? (r = !0)
              : (l === '"' && r && (o = !0), (r = !1));
      }
      return n;
    }
    function k(e) {
      return e.charCodeAt(0) === 65279 ? e.slice(1) : e;
    }
    function I(e) {
      var t = e.match(/\r\n|\r|\n/g);
      return t == null ? 0 : t.length;
    }
    function T(e) {
      return e.every(function (e) {
        return e.trim() === "";
      });
    }
    ((l.WAWebContactImportCSVFormatError = e),
      (l.recoverUndetectableCSVDelimiter = s),
      (l.validateCSVParseResult = c),
      (l.validateCSVColumnCounts = d));
  },
  98,
);
