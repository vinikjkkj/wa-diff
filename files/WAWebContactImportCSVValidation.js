__d(
  "WAWebContactImportCSVValidation",
  [
    "Promise",
    "WAWebContactImportCSVParsingUtils",
    "WAWebContactImportTypedError",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function (e) {
        function t(t) {
          var n;
          return (
            (n =
              e.call(
                this,
                o("WAWebContactImportTypedError").FileError.FORMAT,
              ) || this),
            (n.issue = t),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(o("WAWebContactImportTypedError").WAWebContactImportTypedError);
    function u(e, t, n, r) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, r, a, i) {
            if ((i === void 0 && (i = {}), !v(r)))
              return { result: r, separator: null };
            var l = i.fullFileProbe === !0,
              s = l ? t : t.slice(0, h),
              u = l ? void 0 : y,
              c = yield (e || (e = n("Promise"))).all(
                b.map(function (e) {
                  return d(s, e, u, a);
                }),
              ),
              m = [],
              p = [];
            for (var _ of c)
              _.status === "failed"
                ? p.push(_.error)
                : _.candidate != null &&
                  m.push({ candidate: _.candidate, result: _.result });
            if (p.length === c.length) throw p[0];
            var f = m.length === 1 ? m[0] : null;
            return f == null
              ? { result: r, separator: null }
              : {
                  result: l
                    ? f.result
                    : yield o(
                        "WAWebContactImportCSVParsingUtils",
                      ).loadPapaParse(t, f.candidate.delimiter),
                  separator: f.candidate.separator,
                };
          },
        )),
        c.apply(this, arguments)
      );
    }
    function d(e, t, n, r) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            try {
              var a = yield o(
                  "WAWebContactImportCSVParsingUtils",
                ).loadPapaParse(e, t.delimiter, n),
                i = r(a.data, t.delimiter, a.errors.some(g));
              return {
                candidate: i != null && i.data.length >= C ? t : null,
                result: a,
                status: "completed",
              };
            } catch (e) {
              return { error: e, status: "failed" };
            }
          },
        )),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
      var n,
        r = D(e),
        o = S(r, [t.meta.delimiter]);
      if (o != null) throw new s(o);
      var a = t.errors.find(g);
      if (a != null) {
        var i = T(r, t.meta.delimiter),
          l = a.index != null ? x(r.slice(0, a.index)) + 1 : 1,
          u = a.row,
          c = a.index == null && u != null && (n = i[u]) != null ? n : l;
        throw new s(f(a, c));
      }
    }
    function _(e, t, n, r) {
      r === void 0 && (r = null);
      var o = t.data,
        a = o[n];
      if (a != null)
        for (
          var i = D(e), l = T(i, t.meta.delimiter), u = n + 1;
          u < o.length;
          u++
        ) {
          var c,
            d = o[u];
          if (!($(d) || d.length === a.length)) {
            var m = (c = l[u]) != null ? c : u + 1;
            throw r != null
              ? new s({
                  actualColumnCount: d.length,
                  expectedColumnCount: a.length,
                  physicalRow: m,
                  reason: "separator_column_count",
                  separator: r,
                })
              : new s({
                  actualColumnCount: d.length,
                  expectedColumnCount: a.length,
                  physicalRow: m,
                  reason: "column_count",
                });
          }
        }
    }
    function f(e, t) {
      return e.code === "InvalidQuotes"
        ? { physicalRow: t, reason: "invalid_quotes" }
        : e.code === "MissingQuotes"
          ? { physicalRow: t, reason: "missing_quotes" }
          : { physicalRow: t, reason: "parse_error" };
    }
    function g(e) {
      return e.type !== "FieldMismatch" && e.code !== "UndetectableDelimiter";
    }
    var h = 64 * 1024,
      y = 100,
      C = 2,
      b = [
        { delimiter: "	", separator: "tab" },
        { delimiter: ";", separator: "semicolon" },
      ];
    function v(e) {
      return e.errors.some(function (e) {
        return e.code === "UndetectableDelimiter";
      });
    }
    function S(e, t) {
      for (var n = !0, r = null, o = 1, a = 0; a < e.length; a++) {
        var i = e[a],
          l = E(e, a, t);
        if (i === '"') {
          if (!n) return { physicalRow: o, reason: "invalid_quotes" };
          var s = R(e, a + 1, o, t);
          if (s.issue != null) return s.issue;
          ((a = s.endIndex), (o = s.physicalRow), (n = !1));
        } else if (i === "\r" || i === "\n") {
          var u = I(e, a);
          if (u.endIndex < e.length - 1) {
            if (r == null) r = u.lineEnding;
            else if (u.lineEnding !== r)
              return {
                actualLineEnding: u.lineEnding,
                expectedLineEnding: r,
                physicalRow: o,
                reason: "mixed_line_endings",
              };
          }
          ((a = u.endIndex), o++, (n = !0));
        } else l != null ? ((a += l.length - 1), (n = !0)) : (n = !1);
      }
      return null;
    }
    function R(e, t, n, r) {
      for (var o = n, a = t; a < e.length; a++) {
        var i = e[a];
        if (i === "\r" || i === "\n") ((a = k(e, a)), o++);
        else if (i === '"') {
          if (e[a + 1] === '"') {
            a++;
            continue;
          }
          var l = L(e, a + 1, r),
            s = e[l];
          return s != null && E(e, l, r) == null && s !== "\r" && s !== "\n"
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
    function L(e, t, n) {
      for (var r = t; E(e, r, n) == null && (e[r] === " " || e[r] === "	"); )
        r++;
      return r;
    }
    function E(e, t, n) {
      return n.find(function (n) {
        return n !== "" && e.startsWith(n, t);
      });
    }
    function k(e, t) {
      return I(e, t).endIndex;
    }
    function I(e, t) {
      return e[t] === "\r"
        ? e[t + 1] === "\n"
          ? { endIndex: t + 1, lineEnding: "CRLF" }
          : { endIndex: t, lineEnding: "CR" }
        : { endIndex: t, lineEnding: "LF" };
    }
    function T(e, t) {
      for (var n = [1], r = !0, o = !1, a = 1, i = 0; i < e.length; i++) {
        var l = e[i];
        o
          ? l === '"'
            ? e[i + 1] === '"'
              ? i++
              : (o = !1)
            : (l === "\r" || l === "\n") && ((i = k(e, i)), a++)
          : l === "\r" || l === "\n"
            ? ((i = k(e, i)), a++, n.push(a), (r = !0))
            : l === t
              ? (r = !0)
              : (l === '"' && r && (o = !0), (r = !1));
      }
      return n;
    }
    function D(e) {
      return e.charCodeAt(0) === 65279 ? e.slice(1) : e;
    }
    function x(e) {
      var t = e.match(/\r\n|\r|\n/g);
      return t == null ? 0 : t.length;
    }
    function $(e) {
      return e.every(function (e) {
        return e.trim() === "";
      });
    }
    ((l.WAWebContactImportCSVFormatError = s),
      (l.recoverUndetectableCSVDelimiter = u),
      (l.validateCSVParseResult = p),
      (l.validateCSVColumnCounts = _));
  },
  98,
);
