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
      I = s.defineWebBloksAttributeKey("?"),
      T = s.defineWebBloksAttributeKey("#"),
      D = s.defineWebBloksAttributeKey(")"),
      x = s.defineWebBloksAttributeKey("6"),
      $ = s.defineWebBloksAttributeKey(":");
    function P(e, t, n) {
      if ((n === void 0 && (n = !1), !(n || !u.has(e.styleId)))) {
        var r = e.getSubNode(o("WebBloksConstants").STYLE_ATTRIBUTE_KEY),
          a = q(r, "width"),
          i = q(r, "height"),
          l = q(r, "position_type"),
          s = t[t.length - 2];
        if (
          (a === void 0 && H(e) && !o("WebBloksUtils").cast(e).get(p)
            ? (s != null && O(s, "width")
                ? V(e, "grow", 1)
                : V(e, "width", "100%"),
              w(t, t.length - 1, "width", "100%"))
            : e.styleId === o("WebBloksConstants").BK_SLIDER
              ? w(t, t.length - 1, "width", "100%")
              : typeof a == "string" &&
                a.endsWith("%") &&
                w(t, t.length - 1, "width", a),
          !(a != null && q(r, "aspect_ratio")))
        ) {
          if (
            i === void 0 &&
            e.styleId === o("WebBloksConstants").BK_COLLECTION &&
            !o("WebBloksUtils").cast(e).get(p)
          )
            (s != null && O(s, "height")
              ? V(e, "grow", 1)
              : V(e, "height", "100%"),
              w(t, t.length - 1, "height", "100%"));
          else if (typeof i == "string" && i.endsWith("%") && l !== "absolute")
            if (W(s, "height") == null) {
              var m = N(t, "height");
              m ? V(s, "height", "100%") : w(t, t.length - 1, "height", i);
            } else w(t, t.length - 1, "height", i);
        }
        (e.set(c, void 0), e.set(d, void 0));
      }
    }
    function N(e, t) {
      for (var n = e.length - 2; n >= 0; n--) {
        var r = e[n];
        if (!B(e[n + 1], r) || !M(r)) return null;
        if (W(r, t) != null) return r;
      }
    }
    function M(e) {
      var t;
      return (
        e != null &&
        ((t = e.get(o("WebBloksConstants").CHILDREN_ATTRIBUTE_KEY)) == null
          ? void 0
          : t.length) === 1
      );
    }
    function w(e, t, n, r) {
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
        return w(e, t - 2, n, r);
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
      if (
        !l ||
        s !== o("WebBloksConstants").BK_FLEXBOX ||
        W(l, n) != null ||
        W(l, "grow") === 0
      )
        return (V(i, n, r), !0);
      var c = o("WebBloksUtils").cast(l),
        d =
          ((a = c.get(o("WebBloksConstants").CHILDREN_ATTRIBUTE_KEY)) == null
            ? void 0
            : a.length) === 1,
        p = O(c, n);
      if (d) {
        var _ = w(e, t - 1, n, r);
        return (
          _
            ? (W(i, n) != null && V(i, n, void 0),
              p && W(i, "grow") == null && V(i, "grow", 1))
            : V(i, n, r),
          !0
        );
      }
      return p
        ? (V(i, n, r), A(e, t - 1, n), !0)
        : B(i, c)
          ? (A(e, t - 1, n), !1)
          : (V(i, n, r), A(e, t - 1, n), !0);
    }
    function A(e, t, n) {
      for (var r = t; r >= 0; r--) {
        var a = e[r],
          i = a.styleId;
        if (
          i !== o("WebBloksConstants").BK_FLEXBOX ||
          W(a, n) !== null ||
          W(a, "grow") === 0 ||
          a.getUntyped(n === "width" ? c : d)
        )
          break;
        a.set(n === "width" ? c : d, !0);
        var l = e[r - 1];
        if (l) {
          if (O(o("WebBloksUtils").cast(l), n)) {
            W(a, "grow") == null &&
              (V(a, "grow", 1), V(a, "justify_content", "inherit"));
            continue;
          } else if (B(a, l)) continue;
        }
        V(a, n, "100%");
      }
    }
    function F(e) {
      var t = e.styleId;
      if (t !== o("WebBloksConstants").BK_FLEXBOX) return !1;
      var n = o("WebBloksUtils").cast(e);
      return n.get(f) === "column" || n.get(f) === "column_reverse";
    }
    function O(e, t) {
      var n = F(e);
      return (n && t === "height") || (!n && t === "width");
    }
    function B(e, t) {
      var n,
        r,
        a,
        i = t == null ? void 0 : t.styleId;
      if (!t || i !== o("WebBloksConstants").BK_FLEXBOX) return !1;
      var l = o("WebBloksUtils").cast(t);
      return (
        ((n =
          (r =
            (a = e.getStyle(o("WebBloksConstants").BK_FLEX)) == null
              ? void 0
              : a.get(g)) != null
            ? r
            : l.get(_)) != null
          ? n
          : "stretch") === "stretch"
      );
    }
    function W(e, t) {
      var n,
        r =
          e == null
            ? void 0
            : e.getSubNode(o("WebBloksConstants").STYLE_ATTRIBUTE_KEY);
      return (n = q(r, t)) != null ? n : null;
    }
    function q(e, t) {
      if (e != null) return e.getUntyped(U(e, t));
    }
    function U(e, t) {
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
            ? $
            : t === "height"
              ? D
              : t === "grow"
                ? I
                : t === "position_type"
                  ? x
                  : t === "aspect_ratio"
                    ? T
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
    function V(e, t, n) {
      var r = e.get(o("WebBloksConstants").STYLE_ATTRIBUTE_KEY);
      if (r) {
        var a = U(r, t),
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
    function H(e) {
      var t = e.styleId;
      return t === o("WebBloksConstants").BK_COLLECTION;
    }
    function G(e, t, n, r) {
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
              var d = G(c, t, n, r);
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
                    return G(e, t, n, r);
                  }),
                );
            }
        }
      }
      return (P(e, n, r), n.pop(), e);
    }
    ((l.normaliseYogaDimensions = P), (l.normaliseBoundModel = G));
  },
  98,
);
