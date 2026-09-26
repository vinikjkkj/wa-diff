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
    function u(e, t, n) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r, a) {
          if (!y(r)) return { result: r, separator: null };
          var i = t.slice(0, f),
            l = yield (e || (e = n("Promise"))).all(
              h.map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      try {
                        var t = yield o(
                            "WAWebContactImportCSVParsingUtils",
                          ).loadPapaParse(i, e.delimiter, g),
                          n = a(t.data);
                        return {
                          candidate: n != null && n.data.length >= 2 ? e : null,
                          status: "completed",
                        };
                      } catch (e) {
                        return { error: e, status: "failed" };
                      }
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
            ),
            s = [],
            u = [];
          for (var c of l)
            c.status === "failed"
              ? u.push(c.error)
              : c.candidate != null && s.push(c.candidate);
          if (u.length === l.length) throw u[0];
          var d = s.length === 1 ? s[0] : null;
          return d == null
            ? { result: r, separator: null }
            : {
                result: yield o(
                  "WAWebContactImportCSVParsingUtils",
                ).loadPapaParse(t, d.delimiter),
                separator: d.separator,
              };
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
      var n,
        r = k(e),
        o = C(r, [t.meta.delimiter]);
      if (o != null) throw new s(o);
      var a = t.errors.find(_);
      if (a != null) {
        var i = E(r, t.meta.delimiter),
          l = a.index != null ? I(r.slice(0, a.index)) + 1 : 1,
          u = a.row,
          c = a.index == null && u != null && (n = i[u]) != null ? n : l;
        throw new s(p(a, c));
      }
    }
    function m(e, t, n, r) {
      r === void 0 && (r = null);
      var o = t.data,
        a = o[n];
      if (a != null)
        for (
          var i = k(e), l = E(i, t.meta.delimiter), u = n + 1;
          u < o.length;
          u++
        ) {
          var c,
            d = o[u];
          if (!(T(d) || d.length === a.length)) {
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
    function p(e, t) {
      return e.code === "InvalidQuotes"
        ? { physicalRow: t, reason: "invalid_quotes" }
        : e.code === "MissingQuotes"
          ? { physicalRow: t, reason: "missing_quotes" }
          : { physicalRow: t, reason: "parse_error" };
    }
    function _(e) {
      return e.type !== "FieldMismatch" && e.code !== "UndetectableDelimiter";
    }
    var f = 64 * 1024,
      g = 100,
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
        var i = e[a],
          l = S(e, a, t);
        if (i === '"') {
          if (!n) return { physicalRow: o, reason: "invalid_quotes" };
          var s = b(e, a + 1, o, t);
          if (s.issue != null) return s.issue;
          ((a = s.endIndex), (o = s.physicalRow), (n = !1));
        } else if (i === "\r" || i === "\n") {
          var u = L(e, a);
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
    function b(e, t, n, r) {
      for (var o = n, a = t; a < e.length; a++) {
        var i = e[a];
        if (i === "\r" || i === "\n") ((a = R(e, a)), o++);
        else if (i === '"') {
          if (e[a + 1] === '"') {
            a++;
            continue;
          }
          var l = v(e, a + 1, r),
            s = e[l];
          return s != null && S(e, l, r) == null && s !== "\r" && s !== "\n"
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
      for (var r = t; S(e, r, n) == null && (e[r] === " " || e[r] === "	"); )
        r++;
      return r;
    }
    function S(e, t, n) {
      return n.find(function (n) {
        return n !== "" && e.startsWith(n, t);
      });
    }
    function R(e, t) {
      return L(e, t).endIndex;
    }
    function L(e, t) {
      return e[t] === "\r"
        ? e[t + 1] === "\n"
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
            : (l === "\r" || l === "\n") && ((i = R(e, i)), a++)
          : l === "\r" || l === "\n"
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
    ((l.WAWebContactImportCSVFormatError = s),
      (l.recoverUndetectableCSVDelimiter = u),
      (l.validateCSVParseResult = d),
      (l.validateCSVColumnCounts = m));
  },
  98,
);
