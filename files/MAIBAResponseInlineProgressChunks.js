__d(
  "MAIBAResponseInlineProgressChunks",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "response_segment",
      l = "tool_update",
      s = "progress_update",
      u = "message_update",
      c = "analysis_summarizer";
    function d(e) {
      if (e == null) return null;
      try {
        var t = JSON.parse(e);
        return t == null || typeof t != "object" || Array.isArray(t) ? null : t;
      } catch (e) {
        return null;
      }
    }
    function m(e) {
      var t = e.tool_call_id;
      if (e.tool_name !== s || t == null) return null;
      var n = d(e.tool_result),
        r = n == null ? void 0 : n[l];
      if (r == null || typeof r != "object" || Array.isArray(r)) return null;
      var o = r,
        a = o == null ? void 0 : o.tool_title,
        i = o == null ? void 0 : o.tool_summary;
      return typeof a != "string" || typeof i != "string"
        ? null
        : {
            isCompleted: e.is_completed === !0,
            kind: "tool_update",
            toolCallId: t,
            toolSummary: i,
            toolTitle: a,
          };
    }
    function p(t) {
      var n = d(t),
        r = n == null ? void 0 : n[e];
      return r != null && typeof r == "object" && !Array.isArray(r);
    }
    function _(e) {
      return e.tool_name !== u && e.tool_name !== c
        ? !1
        : p(e.tool_call_args) || p(e.tool_result);
    }
    function f(e) {
      var t = [];
      for (var n of (r = e.entity_ranges) != null ? r : []) {
        var r,
          o = n == null ? void 0 : n.entity;
        (o == null ? void 0 : o.__typename) === "XFBToolCallObject" &&
          t.push({
            __typename: o.__typename,
            is_completed: o.is_completed,
            tool_call_args: o.tool_call_args,
            tool_call_id: o.tool_call_id,
            tool_name: o.tool_name,
            tool_result: o.tool_result,
          });
      }
      return t;
    }
    function g(e, t, n) {
      if (e == null || e.offset == null) return e;
      var r = e.offset,
        o = e.length;
      if (o == null)
        return r >= t && r < n
          ? babelHelpers.extends({}, e, { offset: r - t })
          : null;
      var a = r + o;
      if (a <= t || r >= n) return null;
      var i = Math.max(r, t),
        l = Math.min(a, n);
      return babelHelpers.extends({}, e, { length: l - i, offset: i - t });
    }
    function h(e, t, n) {
      var r, o, a;
      return babelHelpers.extends({}, e, {
        entity_ranges:
          (r = e.entity_ranges) == null
            ? void 0
            : r
                .map(function (e) {
                  return g(e, t, n);
                })
                .filter(Boolean),
        inline_style_ranges:
          (o = e.inline_style_ranges) == null
            ? void 0
            : o
                .map(function (e) {
                  return g(e, t, n);
                })
                .filter(Boolean),
        text: (a = e.text) == null ? void 0 : a.slice(t, n),
      });
    }
    function y(e) {
      var t = e.text;
      if (typeof t != "string") return b(e);
      var n = t.split("");
      for (var r of (o = e.entity_ranges) != null ? o : []) {
        var o,
          a = r == null ? void 0 : r.entity;
        if ((a == null ? void 0 : a.__typename) !== "XFBToolCallObject")
          return !0;
        var i = r == null ? void 0 : r.offset,
          l = r == null ? void 0 : r.length;
        if (!(i == null || l == null))
          for (
            var s = Math.max(0, i), u = Math.min(i + l, n.length), c = s;
            c < u;
            c++
          )
            n[c] = " ";
      }
      return n.join("").trim() !== "";
    }
    function C(e, t) {
      var n,
        r = e.text;
      if (typeof r != "string" || r === "") return [e];
      var o = (n = e.entity_ranges) != null ? n : [],
        a = o.some(function (e) {
          var n = e == null ? void 0 : e.entity;
          return (
            (n == null ? void 0 : n.__typename) === "XFBToolCallObject" &&
            t({
              __typename: n.__typename,
              is_completed: n.is_completed,
              tool_call_args: n.tool_call_args,
              tool_call_id: n.tool_call_id,
              tool_name: n.tool_name,
              tool_result: n.tool_result,
            }) &&
            ((e == null ? void 0 : e.offset) == null ||
              (e == null ? void 0 : e.length) == null ||
              e.length <= 0)
          );
        });
      if (a) return [e];
      var i = o
        .filter(function (e) {
          var n = e == null ? void 0 : e.entity;
          return (
            (n == null ? void 0 : n.__typename) === "XFBToolCallObject" &&
            (e == null ? void 0 : e.offset) != null &&
            (e == null ? void 0 : e.length) != null &&
            e.length > 0 &&
            t({
              __typename: n.__typename,
              is_completed: n.is_completed,
              tool_call_args: n.tool_call_args,
              tool_call_id: n.tool_call_id,
              tool_name: n.tool_name,
              tool_result: n.tool_result,
            })
          );
        })
        .sort(function (e, t) {
          var n, r;
          return (
            ((n = e == null ? void 0 : e.offset) != null ? n : 0) -
            ((r = t == null ? void 0 : t.offset) != null ? r : 0)
          );
        });
      if (i.length === 0) return [e];
      var l = [],
        s = 0;
      for (var u of i) {
        var c = u == null ? void 0 : u.offset,
          d = u == null ? void 0 : u.length;
        if (!(c == null || d == null)) {
          if (c > s) {
            var m = h(e, s, c);
            (y(m) || b(m)) && l.push(m);
          }
          var p = Math.min(r.length, c + d),
            _ = Math.max(c, s);
          _ >= p || (l.push(h(e, _, p)), (s = p));
        }
      }
      if (s < r.length) {
        var f = h(e, s, r.length);
        (y(f) || b(f)) && l.push(f);
      }
      return l;
    }
    function b(e) {
      for (var t of (n = e.entity_ranges) != null ? n : []) {
        var n,
          r = t == null ? void 0 : t.entity;
        if (
          r != null &&
          (r.__typename !== "XFBToolCallObject" ||
            !_({
              __typename: r.__typename,
              is_completed: r.is_completed,
              tool_call_args: r.tool_call_args,
              tool_call_id: r.tool_call_id,
              tool_name: r.tool_name,
              tool_result: r.tool_result,
            }))
        )
          return !0;
      }
      return !1;
    }
    function v(e) {
      var t,
        n = (t = e.entity_ranges) != null ? t : [],
        r = n.filter(function (e) {
          var t = e == null ? void 0 : e.entity;
          return (t == null ? void 0 : t.__typename) !== "XFBToolCallObject"
            ? !0
            : !_({
                __typename: t.__typename,
                is_completed: t.is_completed,
                tool_call_args: t.tool_call_args,
                tool_call_id: t.tool_call_id,
                tool_name: t.tool_name,
                tool_result: t.tool_result,
              });
        });
      return r.length === n.length
        ? e
        : babelHelpers.extends({}, e, { entity_ranges: r });
    }
    function S(e) {
      var t = e.text;
      return (typeof t == "string" && t.trim() !== "") || b(e);
    }
    function R(e, t) {
      if (e == null || e.offset == null) return e;
      var n = e.offset,
        r = Math.max(0, n - t),
        o = e.length;
      if (o == null) return babelHelpers.extends({}, e, { offset: r });
      var a = Math.max(0, n + o - t),
        i = a - r;
      return i <= 0
        ? null
        : babelHelpers.extends({}, e, { length: i, offset: r });
    }
    function L(e) {
      var t,
        n,
        r,
        o,
        a = e.text;
      if (typeof a != "string") return e;
      var i =
        (t = (n = a.match(/^[\t\n\r ]+/)) == null ? void 0 : n[0].length) !=
        null
          ? t
          : 0;
      return i === 0
        ? e
        : babelHelpers.extends({}, e, {
            entity_ranges:
              (r = e.entity_ranges) == null
                ? void 0
                : r
                    .map(function (e) {
                      return R(e, i);
                    })
                    .filter(Boolean),
            inline_style_ranges:
              (o = e.inline_style_ranges) == null
                ? void 0
                : o
                    .map(function (e) {
                      return R(e, i);
                    })
                    .filter(Boolean),
            text: a.slice(i),
          });
    }
    function E(e, t) {
      for (var n of e) {
        var r = t(n);
        if (r != null) return r;
      }
      return null;
    }
    function k(e, t) {
      var n = [],
        r = [],
        o = [],
        a = [],
        i = new Map(
          (t != null ? t : []).map(function (e) {
            return [e.toolCallId, e];
          }),
        ),
        l = function (t) {
          var e = t.tool_call_id;
          if (e != null) {
            var n = i.get(e);
            if (n != null) return n;
          }
          return m(t);
        },
        s = e.flatMap(function (e) {
          return C(e, function (e) {
            return _(e) || l(e) != null;
          });
        }),
        u = function () {
          var e = [],
            t = null;
          for (var n of s) {
            var r = f(n),
              o = E(r, l);
            if (o != null) {
              t == null && ((t = o.toolCallId), e.push(o.toolCallId));
              continue;
            }
            if (t != null) {
              if (r.some(_)) {
                var a = v(n);
                y(a) && (t = null);
                continue;
              }
              y(n) && (t = null);
            }
          }
          return e;
        },
        c = u(),
        d = function (n, r) {
          if (t == null) return r;
          var e = c.indexOf(n),
            o = t.findIndex(function (e) {
              return e.toolCallId === n;
            });
          if (e === -1 || o === -1) return r;
          var a = c[e + 1];
          if (a == null) return t.slice(o);
          var i = t.findIndex(function (e) {
            return e.toolCallId === a;
          });
          return i === -1 || i <= o ? r : t.slice(o, i);
        },
        p = function () {
          r.length !== 0 &&
            (n.push({ blocks: r, id: "blocks-" + n.length, type: "blocks" }),
            (r = []));
        },
        g = function () {
          var e;
          if (a.length !== 0) {
            var t = [].concat(a);
            a.length = 0;
            var r = (e = t[0]) == null ? void 0 : e.toolCallId,
              o = r != null ? d(r, t) : t,
              i = o[0];
            i != null &&
              n.push({
                id: "progress-" + i.toolCallId,
                steps: o,
                type: "progress",
              });
          }
        },
        h = function (t) {
          var e = t.text;
          if (b(t) && (typeof e != "string" || e.trim() === "")) {
            r.push(t);
            return;
          }
          var n = L(t);
          S(n) && r.push(n);
        },
        R = function () {
          g();
          for (var e of o) h(e);
          o = [];
        };
      for (var k of s) {
        var I = f(k),
          T = E(I, l);
        if (T != null) {
          (p(), a.push(T));
          continue;
        }
        if (I.some(_)) {
          var D = v(k);
          y(D) ? (R(), h(D)) : S(D) ? (a.length > 0 ? o.push(D) : h(D)) : p();
          continue;
        }
        if (a.length > 0 && !y(k)) {
          o.push(k);
          continue;
        }
        (R(), h(k));
      }
      return (R(), p(), n);
    }
    i.default = k;
  },
  66,
);
