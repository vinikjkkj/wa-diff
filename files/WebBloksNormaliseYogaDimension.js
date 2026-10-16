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
      s,
      u = new Set([
        (e = o("WebBloksConstants")).BK_FLEXBOX,
        e.BK_IMAGE,
        e.BK_COLLECTION,
        e.BK_SLIDER,
      ]),
      c = (s = o("WebBloksModel")).defineWebBloksInternalAttributeKey(
        "$GROW_WIDTH",
      ),
      d = s.defineWebBloksInternalAttributeKey("$GROW_HEIGHT"),
      m = s.defineWebBloksAttributeKey("*"),
      p = s.defineWebBloksAttributeKey("?"),
      _ = s.defineWebBloksAttributeKey("$"),
      f = s.defineWebBloksAttributeKey(")"),
      g = s.defineWebBloksAttributeKey("#"),
      h = s.defineWebBloksAttributeKey("$"),
      y = s.defineWebBloksAttributeKey(")"),
      C = s.defineWebBloksAttributeKey("*"),
      b = s.defineWebBloksAttributeKey(">"),
      v = s.defineWebBloksAttributeKey("D"),
      S = "collection",
      R = s.defineWebBloksAttributeKey("#"),
      L = s.defineWebBloksAttributeKey("+"),
      E = s.defineWebBloksAttributeKey(")"),
      k = "bk.style.Base",
      I = s.defineWebBloksAttributeKey("="),
      T = s.defineWebBloksAttributeKey("?"),
      D = s.defineWebBloksAttributeKey("#"),
      x = s.defineWebBloksAttributeKey(")"),
      $ = s.defineWebBloksAttributeKey("6"),
      P = s.defineWebBloksAttributeKey(":");
    function N(e, t, n) {
      if ((n === void 0 && (n = !1), !(n || !u.has(e.styleId)))) {
        var r = e.getSubNode(o("WebBloksConstants").STYLE_ATTRIBUTE_KEY),
          a = V(r, "width"),
          i = V(r, "height"),
          l = V(r, "position_type"),
          s = t[t.length - 2];
        if (
          (a === void 0 && z(e) && !o("WebBloksUtils").cast(e).get(p)
            ? (s != null && W(s, "width")
                ? G(e, "grow", 1)
                : G(e, "width", "100%"),
              A(t, t.length - 1, "width", "100%"))
            : e.styleId === o("WebBloksConstants").BK_SLIDER
              ? A(t, t.length - 1, "width", "100%")
              : typeof a == "string" &&
                a.endsWith("%") &&
                A(t, t.length - 1, "width", a),
          !(a != null && V(r, "aspect_ratio")))
        ) {
          if (
            i === void 0 &&
            e.styleId === o("WebBloksConstants").BK_COLLECTION &&
            !o("WebBloksUtils").cast(e).get(p)
          )
            (s != null && W(s, "height")
              ? G(e, "grow", 1)
              : G(e, "height", "100%"),
              A(t, t.length - 1, "height", "100%"));
          else if (typeof i == "string" && i.endsWith("%") && l !== "absolute")
            if (U(s, "height") == null) {
              var m = M(t, "height");
              m ? G(s, "height", "100%") : A(t, t.length - 1, "height", i);
            } else A(t, t.length - 1, "height", i);
        }
        (e.set(c, void 0), e.set(d, void 0));
      }
    }
    function M(e, t) {
      for (var n = e.length - 2; n >= 0; n--) {
        var r = e[n];
        if (!q(e[n + 1], r) || !w(r)) return null;
        if (U(r, t) != null) return r;
      }
    }
    function w(e) {
      var t;
      return (
        e != null &&
        ((t = e.get(o("WebBloksConstants").CHILDREN_ATTRIBUTE_KEY)) == null
          ? void 0
          : t.length) === 1
      );
    }
    function A(e, t, n, r) {
      var a,
        i = e[t],
        l = e[t - 1],
        s = l == null ? void 0 : l.styleId;
      if (
        l &&
        e[t - 2] != null &&
        (s === o("WebBloksConstants").BK_SCREEN_WRAPPER_LEGACY ||
          s === o("WebBloksConstants").BK_SCREEN_WRAPPER_LEGACY ||
          s === o("WebBloksConstants").BK_SCREEN_WRAPPER)
      )
        return A(e, t - 2, n, r);
      if (
        l &&
        s === o("WebBloksConstants").BK_COLLECTION &&
        o("WebBloksCollectionHelpers").shouldUseWebBloksCollectionV2(
          o("WebBloksUtils").cast(l),
        )
      ) {
        var u = o("WebBloksUtils").cast(l).get(m);
        return !(
          (u === "row" && n === "height") ||
          (u === "column" && n === "width")
        );
      }
      if (O(i, l)) return !0;
      if (
        !l ||
        s !== o("WebBloksConstants").BK_FLEXBOX ||
        U(l, n) != null ||
        U(l, "grow") === 0
      )
        return (G(i, n, r), !0);
      var c = o("WebBloksUtils").cast(l),
        d =
          ((a = c.get(o("WebBloksConstants").CHILDREN_ATTRIBUTE_KEY)) == null
            ? void 0
            : a.length) === 1,
        p = W(c, n);
      if (d) {
        var _ = A(e, t - 1, n, r);
        return (
          _
            ? (U(i, n) != null && G(i, n, void 0),
              p && U(i, "grow") == null && G(i, "grow", 1))
            : G(i, n, r),
          !0
        );
      }
      return p
        ? (G(i, n, r), F(e, t - 1, n), !0)
        : q(i, c)
          ? (F(e, t - 1, n), !1)
          : (G(i, n, r), F(e, t - 1, n), !0);
    }
    function F(e, t, n) {
      for (var r = t; r >= 0; r--) {
        var a = e[r],
          i = a.styleId;
        if (
          i !== o("WebBloksConstants").BK_FLEXBOX ||
          U(a, n) !== null ||
          U(a, "grow") === 0 ||
          a.getUntyped(n === "width" ? c : d)
        )
          break;
        a.set(n === "width" ? c : d, !0);
        var l = e[r - 1];
        if (l) {
          if (W(o("WebBloksUtils").cast(l), n)) {
            U(a, "grow") == null &&
              (G(a, "grow", 1), G(a, "justify_content", "inherit"));
            continue;
          } else if (q(a, l)) continue;
        }
        if (O(a, l)) break;
        G(a, n, "100%");
      }
    }
    function O(e, t) {
      var n = t == null ? void 0 : t.styleId;
      if (
        t == null ||
        n !== o("WebBloksConstants").BK_COLLECTION ||
        o("WebBloksCollectionHelpers").shouldUseWebBloksCollectionV2(
          o("WebBloksUtils").cast(t),
        )
      )
        return !1;
      var r = e.getSubNode(o("WebBloksConstants").STYLE_ATTRIBUTE_KEY);
      return r != null && r.styleId !== o("WebBloksConstants").BK_FLEX;
    }
    function B(e) {
      var t = e.styleId;
      if (t !== o("WebBloksConstants").BK_FLEXBOX) return !1;
      var n = o("WebBloksUtils").cast(e);
      return n.get(f) === "column" || n.get(f) === "column_reverse";
    }
    function W(e, t) {
      var n = B(e);
      return (n && t === "height") || (!n && t === "width");
    }
    function q(e, t) {
      var n,
        r,
        a,
        i,
        l,
        s = t == null ? void 0 : t.styleId;
      if (!t || s !== o("WebBloksConstants").BK_FLEXBOX) return !1;
      var u = o("WebBloksUtils").cast(t);
      return (
        ((n =
          (r =
            (a =
              (i = e.getStyle(o("WebBloksConstants").BK_FLEX)) == null
                ? void 0
                : i.get(g)) != null
              ? a
              : (l = e.getStyle(k)) == null
                ? void 0
                : l.get(I)) != null
            ? r
            : u.get(_)) != null
          ? n
          : "stretch") === "stretch"
      );
    }
    function U(e, t) {
      var n,
        r =
          e == null
            ? void 0
            : e.getSubNode(o("WebBloksConstants").STYLE_ATTRIBUTE_KEY);
      return (n = V(r, t)) != null ? n : null;
    }
    function V(e, t) {
      if (e != null) return e.getUntyped(H(e, t));
    }
    function H(e, t) {
      return e.styleId === S
        ? t === "width"
          ? E
          : t === "height"
            ? R
            : t === "aspect_ratio"
              ? L
              : o("WebBloksConstants").YOGA_JUSTIFY_CONTENT_ATTRIBUTE_KEY
        : e.styleId === k
          ? t === "width"
            ? P
            : t === "height"
              ? x
              : t === "grow"
                ? T
                : t === "position_type"
                  ? $
                  : t === "aspect_ratio"
                    ? D
                    : o("WebBloksConstants").YOGA_JUSTIFY_CONTENT_ATTRIBUTE_KEY
          : t === "width"
            ? v
            : t === "height"
              ? C
              : t === "grow"
                ? y
                : t === "position_type"
                  ? b
                  : t === "aspect_ratio"
                    ? h
                    : o("WebBloksConstants").YOGA_JUSTIFY_CONTENT_ATTRIBUTE_KEY;
    }
    function G(e, t, n) {
      var r = e.get(o("WebBloksConstants").STYLE_ATTRIBUTE_KEY);
      if (r) {
        var a = H(r, t),
          i = r.getUntyped(a);
        if (i !== n) {
          var l = r.makeCopy();
          (l.set(a, n), e.set(o("WebBloksConstants").STYLE_ATTRIBUTE_KEY, l));
        }
      } else {
        var s,
          u =
            t === "width"
              ? v
              : t === "height"
                ? C
                : t === "grow"
                  ? y
                  : t === "position_type"
                    ? b
                    : t === "aspect_ratio"
                      ? h
                      : o("WebBloksConstants")
                          .YOGA_JUSTIFY_CONTENT_ATTRIBUTE_KEY,
          c = ((s = {}), (s[u] = n), s);
        e.set(
          o("WebBloksConstants").STYLE_ATTRIBUTE_KEY,
          new (o("WebBloksModel").WebBloksModel)(
            o("WebBloksConstants").BK_FLEX,
            c,
          ),
        );
      }
    }
    function z(e) {
      var t = e.styleId;
      return t === o("WebBloksConstants").BK_COLLECTION;
    }
    function j(e, t, n, r) {
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
              var d = j(c, t, n, r);
              e.set(u, d);
            }
          }
        if (l) {
          for (var m of l)
            if (m !== o("WebBloksConstants").CHILD_TEMPLATES_ATTRIBUTE_KEY) {
              var p = e.getSubNodes(m);
              p != null &&
                e.set(
                  m,
                  p.map(function (e) {
                    return j(e, t, n, r);
                  }),
                );
            }
        }
      }
      return (N(e, n, r), n.pop(), e);
    }
    ((l.normaliseYogaDimensions = N), (l.normaliseBoundModel = j));
  },
  98,
);
