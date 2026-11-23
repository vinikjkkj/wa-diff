__d(
  "WebBloksDataTextSpanUtils",
  [
    "WebBloksComponentContext",
    "WebBloksModel",
    "WebBloksRichTextContext",
    "WebBloksStyle",
    "WebBloksTextStyle",
    "WebBloksTheme",
    "WebBloksUtils",
    "react",
    "useClickablePropsForWebBloks",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useContext,
      c = s.useMemo,
      d = "bk.style.textspan.ClickableStyle",
      m = "bk.style.textspan.ColorStyle",
      p = "bk.style.textspan.ShadowStyle",
      _ = "bk.style.textspan.StrikethroughStyle",
      f = "bk.style.textspan.TextStyle",
      g = "bk.style.textspan.UnderlineStyle",
      h = o("WebBloksModel").defineWebBloksAttributeKey("$"),
      y = o("WebBloksModel").defineWebBloksAttributeKey("#"),
      C = o("WebBloksModel").defineWebBloksAttributeKey("#"),
      b = o("WebBloksModel").defineWebBloksAttributeKey("$"),
      v = o("WebBloksModel").defineWebBloksAttributeKey("&"),
      S = o("WebBloksModel").defineWebBloksAttributeKey("("),
      R = o("WebBloksModel").defineWebBloksAttributeKey("#"),
      L = o("WebBloksModel").defineWebBloksAttributeKey("#"),
      E = o("WebBloksModel").defineWebBloksAttributeKey(")"),
      k = o("WebBloksModel").defineWebBloksAttributeKey("*"),
      I = o("WebBloksModel").defineWebBloksAttributeKey(","),
      T = o("WebBloksModel").defineWebBloksAttributeKey("#");
    function D(e, t, n, a) {
      var i = o("WebBloksStyle").useStyle(t, n),
        l = i.style,
        s = o("WebBloksComponentContext").useWebBloksContext(),
        d = s.bloksContext,
        m = o("WebBloksTheme").useTheme().getTheme(),
        p = u(r("WebBloksRichTextContext")),
        _ = p.isRootFontSizeEnabled,
        f = d.objectSet.environment.fontFamilyMappings,
        g = x(a, m, f, _),
        h = r("useClickablePropsForWebBloks")(t, $(a));
      return c(
        function () {
          return babelHelpers.extends(
            {
              "aria-label": e,
              style: babelHelpers.extends(
                {},
                l,
                {
                  display: "inline",
                  whiteSpace: "pre-wrap",
                  overflowWrap: "break-word",
                },
                g,
              ),
            },
            h,
          );
        },
        [e, l, g, h],
      );
    }
    function x(e, t, n, r) {
      var a = {};
      if (e != null)
        for (var i of e)
          switch (i == null ? void 0 : i.styleId) {
            case f:
            case "bk.style.textspan.TextStyle": {
              var l = o("WebBloksUtils").cast(i),
                s = l.get(L),
                u = l.get(k),
                c = l.get(E),
                d = l.get(I);
              if (
                (c != null && !r && (a.fontSize = o("WebBloksUtils").toPx(c)),
                u != null)
              ) {
                var h = o("WebBloksTextStyle").getTextStyle(u),
                  D = h.fontStyle,
                  x = h.fontWeight;
                ((a.fontWeight = x), (a.fontStyle = D));
              }
              if (s != null) {
                var $;
                a.fontFamily =
                  ($ = o("WebBloksTextStyle").getFontFamily(s, n)) != null
                    ? $
                    : void 0;
              }
              d != null && (a.letterSpacing = d);
              break;
            }
            case m:
            case "bk.style.textspan.ColorStyle": {
              var P = o("WebBloksUtils").cast(i),
                N = P.get(y);
              N != null &&
                (a.color = o("WebBloksUtils").getRGBColorWithTheme(N, t));
              break;
            }
            case p:
            case "bk.style.textspan.ShadowStyle": {
              var M = o("WebBloksUtils").cast(i),
                w = M.get(S),
                A = M.get(b),
                F = M.get(v),
                O = M.get(C);
              if (O != null && (w != null || A != null || F != null)) {
                var B = o("WebBloksTextStyle").getTextShadow(
                  {
                    shadow_radius: w,
                    shadow_offset_dx: A,
                    shadow_offset_dy: F,
                    shadow_color: O,
                  },
                  t,
                );
                B != null && (a.textShadow = B);
              }
              break;
            }
            case _:
            case "bk.style.textspan.StrikethroughStyle": {
              var W = o("WebBloksUtils").cast(i),
                q = W.get(R);
              q === !0 && (a.textDecoration = "line-through");
              break;
            }
            case g:
            case "bk.style.textspan.UnderlineStyle": {
              var U = o("WebBloksUtils").cast(i),
                V = U.get(T);
              V === !0 && (a.textDecoration = "underline");
              break;
            }
          }
      return a;
    }
    function $(e) {
      var t = null;
      if (e != null)
        for (var n of e)
          ((n == null ? void 0 : n.styleId) === d ||
            (n == null ? void 0 : n.styleId) ===
              "bk.style.textspan.ClickableStyle") &&
            (t = o("WebBloksUtils").cast(n).getExpression(h));
      return t;
    }
    l.useWebBloksBaseTextSpanProps = D;
  },
  98,
);
