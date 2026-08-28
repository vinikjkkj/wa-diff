__d(
  "WebBloksNormaliseYogaDimension",
  [
    "WebBloksCollectionHelpers",
    "WebBloksConstants",
    "WebBloksModel",
    "WebBloksUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Set([
        (e = o("WebBloksConstants")).BK_FLEXBOX,
        e.BK_FLEXBOX_MINIFIED,
        e.BK_IMAGE,
        e.BK_IMAGE_MINIFIED,
        e.BK_COLLECTION,
        e.BK_COLLECTION_MINIFIED,
        e.BK_SLIDER,
        e.BK_SLIDER_MINIFIED,
      ]),
      u = "$GROW_WIDTH",
      c = "$GROW_HEIGHT",
      d = "*",
      m = "?",
      p = "$",
      _ = ")",
      f = "#",
      g = "$",
      h = ")",
      y = "*",
      C = ">",
      b = "D",
      v = "\u3436",
      S = "#",
      R = ")",
      L = "\u5E89",
      E = "?",
      k = ")",
      I = ":";
    function T(e, t, n) {
      if ((n === void 0 && (n = !1), !(n || !s.has(e.styleId)))) {
        var r = e.getSubNode(o("WebBloksConstants").STYLE_ATTRIBUTE_KEY),
          a = F(r, "width"),
          i = F(r, "height"),
          l = F(r, "position_type"),
          d = t[t.length - 2];
        if (
          (a === void 0 && W(e) && !o("WebBloksUtils").cast(e).get(m)
            ? (d != null && M(d, "width")
                ? B(e, "grow", 1)
                : B(e, "width", "100%"),
              $(t, t.length - 1, "width", "100%"))
            : e.styleId === o("WebBloksConstants").BK_SLIDER_MINIFIED ||
                e.styleId === o("WebBloksConstants").BK_SLIDER
              ? $(t, t.length - 1, "width", "100%")
              : typeof a == "string" &&
                a.endsWith("%") &&
                $(t, t.length - 1, "width", a),
          !(a != null && F(r, "aspect_ratio")))
        ) {
          if (
            i === void 0 &&
            (e.styleId === o("WebBloksConstants").BK_COLLECTION_MINIFIED ||
              e.styleId === o("WebBloksConstants").BK_COLLECTION) &&
            !o("WebBloksUtils").cast(e).get(m)
          )
            (d != null && M(d, "height")
              ? B(e, "grow", 1)
              : B(e, "height", "100%"),
              $(t, t.length - 1, "height", "100%"));
          else if (typeof i == "string" && i.endsWith("%") && l !== "absolute")
            if (A(d, "height") == null) {
              var p = D(t, "height");
              p ? B(d, "height", "100%") : $(t, t.length - 1, "height", i);
            } else $(t, t.length - 1, "height", i);
        }
        (e.set(u, void 0), e.set(c, void 0));
      }
    }
    function D(e, t) {
      for (var n = e.length - 2; n >= 0; n--) {
        var r = e[n];
        if (!w(e[n + 1], r) || !x(r)) return null;
        if (A(r, t) != null) return r;
      }
    }
    function x(e) {
      var t;
      return (
        e != null &&
        ((t = e.get(o("WebBloksConstants").CHILDREN_ATTRIBUTE_KEY)) == null
          ? void 0
          : t.length) === 1
      );
    }
    function $(e, t, n, r) {
      var a,
        i = e[t],
        l = e[t - 1],
        s = l == null ? void 0 : l.styleId;
      if (
        l &&
        e[t - 2] != null &&
        (s === o("WebBloksConstants").BK_SCREEN_WRAPPER_LEGACY_MINIFIED ||
          s === o("WebBloksConstants").BK_SCREEN_WRAPPER_MINIFIED ||
          s === o("WebBloksConstants").BK_SCREEN_WRAPPER_LEGACY ||
          s === o("WebBloksConstants").BK_SCREEN_WRAPPER)
      )
        return $(e, t - 2, n, r);
      if (
        l &&
        (s === o("WebBloksConstants").BK_COLLECTION_MINIFIED ||
          s === o("WebBloksConstants").BK_COLLECTION) &&
        o("WebBloksCollectionHelpers").shouldUseWebBloksCollectionV2(
          o("WebBloksUtils").cast(l),
        )
      ) {
        var u = o("WebBloksUtils").cast(l).get(d);
        return !(
          (u === "row" && n === "height") ||
          (u === "column" && n === "width")
        );
      }
      if (
        !l ||
        (s !== o("WebBloksConstants").BK_FLEXBOX_MINIFIED &&
          s !== o("WebBloksConstants").BK_FLEXBOX) ||
        A(l, n) != null ||
        A(l, "grow") === 0
      )
        return (B(i, n, r), !0);
      var c = o("WebBloksUtils").cast(l),
        m =
          ((a = c.get(o("WebBloksConstants").CHILDREN_ATTRIBUTE_KEY)) == null
            ? void 0
            : a.length) === 1,
        p = M(c, n);
      if (m) {
        var _ = $(e, t - 1, n, r);
        return (
          _
            ? (A(i, n) != null && B(i, n, void 0),
              p && A(i, "grow") == null && B(i, "grow", 1))
            : B(i, n, r),
          !0
        );
      }
      return p
        ? (B(i, n, r), P(e, t - 1, n), !0)
        : w(i, c)
          ? (P(e, t - 1, n), !1)
          : (B(i, n, r), P(e, t - 1, n), !0);
    }
    function P(e, t, n) {
      for (var r = t; r >= 0; r--) {
        var a = e[r],
          i = a.styleId;
        if (
          (i !== o("WebBloksConstants").BK_FLEXBOX_MINIFIED &&
            i !== o("WebBloksConstants").BK_FLEXBOX) ||
          A(a, n) !== null ||
          A(a, "grow") === 0 ||
          a.get(n === "width" ? u : c)
        )
          break;
        a.set(n === "width" ? u : c, !0);
        var l = e[r - 1];
        if (l) {
          if (M(o("WebBloksUtils").cast(l), n)) {
            A(a, "grow") == null &&
              (B(a, "grow", 1), B(a, "justifyContent", "inherit"));
            continue;
          } else if (w(a, l)) continue;
        }
        B(a, n, "100%");
      }
    }
    function N(e) {
      var t = e.styleId;
      if (
        t !== o("WebBloksConstants").BK_FLEXBOX_MINIFIED &&
        t !== o("WebBloksConstants").BK_FLEXBOX
      )
        return !1;
      var n = o("WebBloksUtils").cast(e);
      return n.get(_) === "column" || n.get(_) === "column_reverse";
    }
    function M(e, t) {
      var n = N(e);
      return (n && t === "height") || (!n && t === "width");
    }
    function w(e, t) {
      var n,
        r,
        a,
        i = t == null ? void 0 : t.styleId;
      if (
        !t ||
        (i !== o("WebBloksConstants").BK_FLEXBOX_MINIFIED &&
          i !== o("WebBloksConstants").BK_FLEXBOX)
      )
        return !1;
      var l = o("WebBloksUtils").cast(t);
      return (
        ((n =
          (r =
            (a = e.getStyle(o("WebBloksConstants").BK_FLEX_MINIFIED)) == null
              ? void 0
              : a.get(f)) != null
            ? r
            : l.get(p)) != null
          ? n
          : "stretch") === "stretch"
      );
    }
    function A(e, t) {
      var n,
        r =
          e == null
            ? void 0
            : e.getSubNode(o("WebBloksConstants").STYLE_ATTRIBUTE_KEY);
      return (n = F(r, t)) != null ? n : null;
    }
    function F(e, t) {
      if (e != null) return e.get(O(e, t));
    }
    function O(e, t) {
      return e.styleId === v
        ? t === "width"
          ? R
          : t === "height"
            ? S
            : t
        : e.styleId === L
          ? t === "width"
            ? I
            : t === "height"
              ? k
              : t === "grow"
                ? E
                : t
          : t === "width"
            ? b
            : t === "height"
              ? y
              : t === "grow"
                ? h
                : t === "position_type"
                  ? C
                  : t === "aspect_ratio"
                    ? g
                    : t;
    }
    function B(e, t, n) {
      var r = e.get(o("WebBloksConstants").STYLE_ATTRIBUTE_KEY);
      if (r) {
        var a = O(r, t),
          i = r.get(a);
        if (i !== n) {
          var l = r.makeCopy();
          (l.set(a, n), e.set(o("WebBloksConstants").STYLE_ATTRIBUTE_KEY, l));
        }
      } else {
        var s,
          u = t === "width" ? b : t === "height" ? y : t === "grow" ? h : t,
          c = ((s = {}), (s[u] = n), s);
        e.set(
          o("WebBloksConstants").STYLE_ATTRIBUTE_KEY,
          new (o("WebBloksModel").WebBloksModel)(
            o("WebBloksConstants").BK_FLEX_MINIFIED,
            c,
            void 0,
            void 0,
            void 0,
            !0,
          ),
        );
      }
    }
    function W(e) {
      var t = e.styleId;
      return (
        t === o("WebBloksConstants").BK_COLLECTION_MINIFIED ||
        t === o("WebBloksConstants").BK_COLLECTION
      );
    }
    function q(e, t, n, r) {
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
              var d = q(c, t, n, r);
              e.set(u, d);
            }
          }
        if (l) {
          for (var m of l)
            if (
              !(
                m === o("WebBloksConstants").CHILD_TEMPLATES ||
                m === o("WebBloksConstants").CHILD_TEMPLATES_ATTRIBUTE_KEY
              )
            ) {
              var p = e.getSubNodes(m);
              p != null &&
                e.set(
                  m,
                  p.map(function (e) {
                    return q(e, t, n, r);
                  }),
                );
            }
        }
      }
      return (T(e, n, r), n.pop(), e);
    }
    ((l.normaliseYogaDimensions = T), (l.normaliseBoundModel = q));
  },
  98,
);
