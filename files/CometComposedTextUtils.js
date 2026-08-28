__d(
  "CometComposedTextUtils",
  ["CometSplitPointForText", "FBLogger", "UnicodeUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return function (t) {
        return t.offset != null && t.offset < e;
      };
    }
    var u = 20;
    function c(t, n) {
      for (var r = [], a = !1, i = 0, l = 0; l < t.length; l++) {
        var c = n - i,
          d = t[l],
          m = d.text,
          p = d.block_type === "INLINE" || d.block_type === "TABLE",
          _ = !p;
        if (_ && typeof m == "string") {
          var f = m.length;
          if (f >= c + u) {
            var g = o("CometSplitPointForText").findSplitPointForText(m, c);
            if (g != null) {
              var h = (e || (e = o("UnicodeUtils"))).substring(m, 0, g);
              (r.push(
                babelHelpers.extends({}, d, {
                  entity_ranges: d.entity_ranges.filter(s(e.strlen(h))),
                  inline_style_ranges: d.inline_style_ranges.filter(
                    s(e.strlen(h)),
                  ),
                  text: h,
                  truncated: !0,
                }),
              ),
                (a = !0));
              break;
            }
          }
          i += f;
        }
        r.push(d);
      }
      return { composedText: r, splitWithinBlock: a };
    }
    function d(e) {
      return { children: [], type: "wrapper", wrapperType: e };
    }
    function m(e) {
      switch (e) {
        case "ORDERED_LIST_ITEM":
          return "ORDERED";
        case "UNORDERED_LIST_ITEM":
          return "UNORDERED";
        case "CHECKBOX_LIST_ITEM":
          return "CHECKBOX";
        default:
          return "UNSTYLED";
      }
    }
    function p(e) {
      switch (e.block_type) {
        case "ORDERED_LIST_ITEM":
        case "UNORDERED_LIST_ITEM":
        case "CHECKBOX_LIST_ITEM":
        case "BLOCKQUOTE":
        case "CODE":
          return !0;
        default:
          return !1;
      }
    }
    function _(e) {
      switch (e.block_type) {
        case "CHECKBOX_LIST_ITEM":
        case "UNORDERED_LIST_ITEM":
        case "ORDERED_LIST_ITEM":
        case "BLOCKQUOTE":
        case "CODE":
          return !0;
        default:
          return !1;
      }
    }
    function f(e) {
      if (p(e)) {
        if (e.depth == null)
          throw r("FBLogger")("comet_feed").mustfixThrow(
            "CometComposedTextUtils: unexpected wrapper item without a depth property",
          );
        return e.depth;
      }
      return e.block_type === "INLINE" && e.depth != null && e.depth > 0
        ? e.depth
        : 0;
    }
    function g(e, t) {
      if (t == null) return !1;
      var n = f(e);
      return e.block_type !== t.type && n === t.depth ? !1 : n >= t.depth;
    }
    function h(e, t, n) {
      var r = y(t.items, m(t.type), n, t.depth);
      return (e.children.push(r), r);
    }
    function y(e, t, n, o) {
      (n === void 0 && (n = 0), o === void 0 && (o = 0));
      for (var a = d(t), i = n, l = null, s = 0; s < e.length; s++) {
        var u = e[s],
          c = p(u);
        if (c && m(u.block_type) === t && u.depth === o) {
          var y = _(u) ? u.block_type : "UNSTYLED";
          ((u = babelHelpers.extends({}, u, { block_type: y })), (c = !1));
        }
        if (!c)
          l !== null &&
          u.block_type === "INLINE" &&
          u.depth != null &&
          u.depth > 0
            ? l.items.push(u)
            : (l !== null && (h(a, l, i), (l = null), (i = 0)),
              a.children.push({ data: u, type: "text" }));
        else {
          var C = g(u, l);
          if (l !== null && C) l.items.push(u);
          else {
            if (C)
              throw r("FBLogger")("comet_feed").mustfixThrow(
                "Unexpected state encountered while processing composed blocks",
              );
            var b;
            if (l !== null) {
              var v = h(a, l, i);
              (v.type === "wrapper" &&
                v.wrapperType === "ORDERED" &&
                (i += v.children.filter(function (e) {
                  return e.type === "text";
                }).length),
                (l = null));
            }
            l = {
              depth: f(u),
              items: [u],
              type: (b = u.block_type) != null ? b : "UNSTYLED",
            };
          }
        }
      }
      return (l !== null && h(a, l, i), a);
    }
    function C(e) {
      return y(e, "UNSTYLED");
    }
    function b(e) {
      var t = [],
        n = new Map(),
        r = 0;
      e.forEach(function (e, t) {
        if (e.type === "text") ((r = t), n.set(t, [e]));
        else {
          var o = n.get(r);
          o && o.push(e);
        }
      });
      var o = function () {
        var e = n.get(a);
        if (e)
          if (e.length === 1) {
            var r = e[0];
            t.push(r);
          } else {
            var o = [];
            e.forEach(function (e) {
              o.push(e);
            });
            var i = { children: o, type: "wrapper", wrapperType: "UNSTYLED" };
            t.push(i);
          }
      };
      for (var a of n.keys()) o();
      return t;
    }
    ((l.filterRangesOutsideOfLength = s),
      (l.getComposedTextTruncatedByLength = c),
      (l.getWrapperType = m),
      (l.getRootBlock = C),
      (l.unflattenStyledBlockList = b));
  },
  98,
);
