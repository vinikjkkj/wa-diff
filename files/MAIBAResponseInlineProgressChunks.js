__d(
  "MAIBAResponseInlineProgressChunks",
  ["actionabilityTools"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "response_segment",
      s = "tool_update",
      u = "progress_update",
      c = "message_update",
      d = "analysis_summarizer";
    function m(e) {
      if (e == null) return null;
      try {
        var t = JSON.parse(e);
        return t == null || typeof t != "object" || Array.isArray(t) ? null : t;
      } catch (e) {
        return null;
      }
    }
    function p(e) {
      var t = e.tool_call_id;
      if (e.tool_name !== u || t == null) return null;
      var n = m(e.tool_result),
        r = n == null ? void 0 : n[s];
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
    function _(t) {
      var n = m(t),
        r = n == null ? void 0 : n[e];
      return r != null && typeof r == "object" && !Array.isArray(r);
    }
    function f(e) {
      return e.tool_name !== c && e.tool_name !== d
        ? !1
        : _(e.tool_call_args) || _(e.tool_result);
    }
    function g(e) {
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
    function h(e, t, n) {
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
    function y(e, t, n) {
      var r, o, a;
      return babelHelpers.extends({}, e, {
        entity_ranges:
          (r = e.entity_ranges) == null
            ? void 0
            : r
                .map(function (e) {
                  return h(e, t, n);
                })
                .filter(Boolean),
        inline_style_ranges:
          (o = e.inline_style_ranges) == null
            ? void 0
            : o
                .map(function (e) {
                  return h(e, t, n);
                })
                .filter(Boolean),
        text: (a = e.text) == null ? void 0 : a.slice(t, n),
      });
    }
    function C(e) {
      var t = e.text;
      if (typeof t != "string") return v(e);
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
    function b(e, t) {
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
            var m = y(e, s, c);
            (C(m) || v(m)) && l.push(m);
          }
          var p = Math.min(r.length, c + d),
            _ = Math.max(c, s);
          _ >= p || (l.push(y(e, _, p)), (s = p));
        }
      }
      if (s < r.length) {
        var f = y(e, s, r.length);
        (C(f) || v(f)) && l.push(f);
      }
      return l;
    }
    function v(e) {
      for (var t of (n = e.entity_ranges) != null ? n : []) {
        var n,
          r = t == null ? void 0 : t.entity;
        if (
          r != null &&
          (r.__typename !== "XFBToolCallObject" ||
            !f({
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
    function S(e) {
      var t,
        n = (t = e.entity_ranges) != null ? t : [],
        r = n.filter(function (e) {
          var t = e == null ? void 0 : e.entity;
          return (t == null ? void 0 : t.__typename) !== "XFBToolCallObject"
            ? !0
            : !f({
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
    function R(e) {
      var t = e.text;
      return (typeof t == "string" && t.trim() !== "") || v(e);
    }
    function L(e, t) {
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
    function E(e) {
      var t,
        n,
        r,
        a,
        i = e.text;
      if (typeof i != "string") return e;
      var l =
          (t = (n = i.match(/^[\t\n\r ]+/)) == null ? void 0 : n[0].length) !=
          null
            ? t
            : 0,
        s = l;
      for (var u of (c = e.entity_ranges) != null ? c : []) {
        var c,
          d = u == null ? void 0 : u.entity,
          m = u == null ? void 0 : u.offset,
          p = u == null ? void 0 : u.length;
        (d == null ? void 0 : d.__typename) === "XFBToolCallObject" &&
          m != null &&
          p != null &&
          p > 0 &&
          m >= 0 &&
          m < s &&
          o("actionabilityTools").shouldRenderToolInActionabilitySection(
            d.tool_name,
            !1,
            d.tool_result,
          ) &&
          (s = m);
      }
      return s === 0
        ? e
        : babelHelpers.extends({}, e, {
            entity_ranges:
              (r = e.entity_ranges) == null
                ? void 0
                : r
                    .map(function (e) {
                      return L(e, s);
                    })
                    .filter(Boolean),
            inline_style_ranges:
              (a = e.inline_style_ranges) == null
                ? void 0
                : a
                    .map(function (e) {
                      return L(e, s);
                    })
                    .filter(Boolean),
            text: i.slice(s),
          });
    }
    function k(e, t) {
      for (var n of e) {
        var r = t(n);
        if (r != null) return r;
      }
      return null;
    }
    function I(e, t, n, r) {
      if (e == null) return r;
      var o = t.indexOf(n),
        a = e.findIndex(function (e) {
          return e.toolCallId === n;
        });
      if (o === -1 || a === -1) return r;
      var i = t[o + 1];
      if (i == null) return e.slice(a);
      var l = e.findIndex(function (e) {
        return e.toolCallId === i;
      });
      return l === -1 || l <= a ? r : e.slice(a, l);
    }
    function T(e, t) {
      var n = [],
        r = null;
      for (var o of e) {
        var a = g(o),
          i = k(a, t);
        if (i != null) {
          r == null && ((r = i.toolCallId), n.push(i.toolCallId));
          continue;
        }
        if (r != null) {
          if (a.some(f)) {
            var l = S(o);
            C(l) && (r = null);
            continue;
          }
          C(o) && (r = null);
        }
      }
      return n;
    }
    function D(e) {
      var t = [],
        n = [],
        r = null;
      for (var o of e) {
        var a = g(o).some(function (e) {
          return !f(e);
        });
        (r != null && r !== a && (t.push(n), (n = [])), n.push(o), (r = a));
      }
      return (n.length > 0 && t.push(n), t);
    }
    function x(e) {
      var t = e[e.length - 1];
      if ((t == null ? void 0 : t.type) === "blocks") {
        var n = D(t.blocks);
        if (!(n.length <= 1)) {
          e.pop();
          for (var r of n)
            e.push({
              blocks: r,
              id: e.length === 0 || n[0] === r ? t.id : "blocks-" + e.length,
              type: "blocks",
            });
        }
      }
    }
    function $(e, t, n) {
      n === void 0 && (n = !0);
      var r = [],
        o = [],
        a = [],
        i = [],
        l = new Map(
          (t != null ? t : []).map(function (e) {
            return [e.toolCallId, e];
          }),
        ),
        s = function (t) {
          if (!n) return null;
          var e = t.tool_call_id;
          if (e != null) {
            var r = l.get(e);
            if (r != null) return r;
          }
          return p(t);
        },
        u = e.flatMap(function (e) {
          return b(e, function (e) {
            return f(e) || s(e) != null;
          });
        }),
        c = T(u, s),
        d = function () {
          o.length !== 0 &&
            (r.push({ blocks: o, id: "blocks-" + r.length, type: "blocks" }),
            (o = []));
        },
        m = function () {
          var e;
          if (i.length !== 0) {
            var n = [].concat(i);
            i.length = 0;
            var o = (e = n[0]) == null ? void 0 : e.toolCallId,
              a = o != null ? I(t, c, o, n) : n,
              l = a[0];
            l != null &&
              r.push({
                id: "progress-" + l.toolCallId,
                steps: a,
                type: "progress",
              });
          }
        },
        _ = function (t) {
          var e = t.text;
          if (v(t) && (typeof e != "string" || e.trim() === "")) {
            o.push(t);
            return;
          }
          var n = E(t);
          R(n) && o.push(n);
        },
        h = function () {
          m();
          for (var e of a) _(e);
          a = [];
        };
      for (var y of u) {
        var L = g(y),
          D = k(L, s);
        if (D != null) {
          (d(), i.push(D));
          continue;
        }
        if (L.some(f)) {
          var $ = S(y);
          C($)
            ? (h(), d(), _($))
            : R($)
              ? i.length > 0
                ? a.push($)
                : _($)
              : d();
          continue;
        }
        if (i.length > 0 && !C(y)) {
          a.push(y);
          continue;
        }
        (h(), _(y));
      }
      (h(), d());
      var P = e.some(function (e) {
        return g(e).some(function (e) {
          return !f(e);
        });
      });
      return (
        !r.some(function (e) {
          return e.type === "progress";
        }) &&
          (n || !P) &&
          t != null &&
          t.length > 0 &&
          r.unshift({
            id: "progress-" + t[0].toolCallId,
            steps: t,
            type: "progress",
          }),
        x(r),
        r
      );
    }
    l.default = $;
  },
  98,
);
