__d(
  "WebBloksNormaliseYogaDimension",
  ["WebBloksCollectionHelpers", "WebBloksConstants", "WebBloksModel"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Set([
        (e = o("WebBloksConstants")).BK_FLEXBOX,
        e.BK_IMAGE,
        e.BK_COLLECTION,
        e.BK_SLIDER,
      ]),
      u = "$GROW_WIDTH",
      c = "$GROW_HEIGHT";
    function d(e, t, n) {
      if ((n === void 0 && (n = !1), !(n || !s.has(e.styleId)))) {
        var r = e.getSubNode("_style"),
          a = r == null ? void 0 : r.get("width"),
          i = r == null ? void 0 : r.get("height"),
          l = r == null ? void 0 : r.get("position_type"),
          d = t[t.length - 2];
        if (
          (a === void 0 && v(e) && !e.get("use_correct_measure")
            ? (d != null && h(d, "width")
                ? b(e, "grow", 1)
                : b(e, "width", "100%"),
              _(t, t.length - 1, "width", "100%"))
            : e.styleId === o("WebBloksConstants").BK_SLIDER
              ? _(t, t.length - 1, "width", "100%")
              : typeof a == "string" &&
                a.endsWith("%") &&
                _(t, t.length - 1, "width", a),
          !(a != null && r != null && r.get("aspect_ratio")))
        ) {
          if (
            i === void 0 &&
            e.styleId === o("WebBloksConstants").BK_COLLECTION &&
            !e.get("use_correct_measure")
          )
            (d != null && h(d, "height")
              ? b(e, "grow", 1)
              : b(e, "height", "100%"),
              _(t, t.length - 1, "height", "100%"));
          else if (typeof i == "string" && i.endsWith("%") && l !== "absolute")
            if (C(d, "height") == null) {
              var p = m(t, "height");
              p ? b(d, "height", "100%") : _(t, t.length - 1, "height", i);
            } else _(t, t.length - 1, "height", i);
        }
        (e.set(u, void 0), e.set(c, void 0));
      }
    }
    function m(e, t) {
      for (var n = e.length - 2; n >= 0; n--) {
        var r = e[n];
        if (!y(e[n + 1], r) || !p(r)) return null;
        if (C(r, t) != null) return r;
      }
    }
    function p(e) {
      var t;
      return (
        e != null && ((t = e.get("children")) == null ? void 0 : t.length) === 1
      );
    }
    function _(e, t, n, r) {
      var a,
        i = e[t],
        l = e[t - 1];
      if (
        l &&
        e[t - 2] != null &&
        (l.styleId === o("WebBloksConstants").BK_SCREEN_WRAPPER_LEGACY ||
          l.styleId === o("WebBloksConstants").BK_SCREEN_WRAPPER)
      )
        return _(e, t - 2, n, r);
      if (
        l &&
        l.styleId === "bk.components.Collection" &&
        o("WebBloksCollectionHelpers").shouldUseWebBloksCollectionV2(l)
      ) {
        var s = l.getValues().direction;
        return !(
          (s === "row" && n === "height") ||
          (s === "column" && n === "width")
        );
      }
      if (
        !l ||
        l.styleId !== o("WebBloksConstants").BK_FLEXBOX ||
        C(l, n) != null ||
        C(l, "grow") === 0
      )
        return (b(i, n, r), !0);
      var u = ((a = l.get("children")) == null ? void 0 : a.length) === 1,
        c = h(l, n);
      if (u) {
        var d = _(e, t - 1, n, r);
        return (
          d
            ? (C(i, n) != null && b(i, n, void 0),
              c && C(i, "grow") == null && b(i, "grow", 1))
            : b(i, n, r),
          !0
        );
      }
      return c
        ? (b(i, n, r), f(e, t - 1, n), !0)
        : y(i, l)
          ? (f(e, t - 1, n), !1)
          : (b(i, n, r), f(e, t - 1, n), !0);
    }
    function f(e, t, n) {
      for (var r = t; r >= 0; r--) {
        var a = e[r];
        if (
          a.styleId !== o("WebBloksConstants").BK_FLEXBOX ||
          C(a, n) !== null ||
          C(a, "grow") === 0 ||
          a.get(n === "width" ? u : c)
        )
          break;
        a.set(n === "width" ? u : c, !0);
        var i = e[r - 1];
        if (i) {
          if (h(i, n)) {
            C(a, "grow") == null &&
              (b(a, "grow", 1), b(a, "justifyContent", "inherit"));
            continue;
          } else if (y(a, i)) continue;
        }
        b(a, n, "100%");
      }
    }
    function g(e) {
      return e.styleId !== o("WebBloksConstants").BK_FLEXBOX
        ? !1
        : e.get("flex_direction") === "column" ||
            e.get("flex_direction") === "column_reverse";
    }
    function h(e, t) {
      var n = g(e);
      return (n && t === "height") || (!n && t === "width");
    }
    function y(e, t) {
      var n, r, a;
      return !t || t.styleId !== o("WebBloksConstants").BK_FLEXBOX
        ? !1
        : ((n =
            (r =
              (a = e.getStyle("flex")) == null
                ? void 0
                : a.get("align_self")) != null
              ? r
              : t.get("align_items")) != null
            ? n
            : "stretch") === "stretch";
    }
    function C(e, t) {
      var n, r;
      return (n =
        e == null ||
        (r = e.getSubNode(o("WebBloksConstants").BK_STYLE_ATTR)) == null
          ? void 0
          : r.get(t)) != null
        ? n
        : null;
    }
    function b(e, t, n) {
      var r = e.get(o("WebBloksConstants").BK_STYLE_ATTR);
      if (r) {
        var a = r.getValues()[t];
        if (a !== n) {
          var i = r.makeCopy();
          ((i.getValues()[t] = n),
            e.set(o("WebBloksConstants").BK_STYLE_ATTR, i));
        }
      } else {
        var l,
          s = ((l = {}), (l[t] = n), l);
        e.getValues()[o("WebBloksConstants").BK_STYLE_ATTR] = new (o(
          "WebBloksModel",
        ).WebBloksModel)(o("WebBloksConstants").BK_FLEX, s);
      }
    }
    function v(e) {
      return e.styleId === o("WebBloksConstants").BK_COLLECTION;
    }
    function S(e, t, n, r) {
      (n === void 0 && (n = []), r === void 0 && (r = !1), n.push(e));
      var a = e.styleId,
        i = t[a];
      if (i != null) {
        var l = i.plural_subnodes,
          s = i.subnodes;
        if (s)
          for (var u of s) {
            var c = e.getSubNode(u);
            if (c != null) {
              var m = S(c, t, n, r);
              e.set(u, m);
            }
          }
        if (l) {
          for (var p of l)
            if (p !== o("WebBloksConstants").CHILD_TEMPLATES) {
              var _ = e.getSubNodes(p);
              _ != null &&
                e.set(
                  p,
                  _.map(function (e) {
                    return S(e, t, n, r);
                  }),
                );
            }
        }
      }
      return (d(e, n, r), n.pop(), e);
    }
    ((l.normaliseYogaDimensions = d), (l.normaliseBoundModel = S));
  },
  98,
);
