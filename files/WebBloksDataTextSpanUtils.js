__d(
  "WebBloksDataTextSpanUtils",
  [
    "WebBloksComponentContext",
    "WebBloksRichTextContext",
    "WebBloksStyle",
    "WebBloksTextStyle",
    "WebBloksTheme",
    "WebBloksUtils",
    "react",
    "react-compiler-runtime",
    "useClickablePropsForWebBloks",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useContext,
      c = s.useMemo,
      d = "\u41E9",
      m = "\u41EB",
      p = "\u41E7",
      _ = "\u41EA",
      f = "\u41E6",
      g = "\u41EC",
      h = "$",
      y = "#",
      C = "#",
      b = "$",
      v = "&",
      S = "(",
      R = "#",
      L = "#",
      E = ")",
      k = "*",
      I = ",",
      T = "#";
    function D(e, t, n, a) {
      var i = o("react-compiler-runtime").c(9),
        l = o("WebBloksStyle").useStyle(t, n),
        s = l.style,
        c = o("WebBloksComponentContext").useWebBloksContext(),
        d = c.bloksContext,
        m = o("WebBloksTheme").useTheme().getTheme(),
        p = u(r("WebBloksRichTextContext")),
        _ = p.isRootFontSizeEnabled,
        f = d.objectSet.environment.fontFamilyMappings,
        g = x(a, m, f, _),
        h;
      i[0] !== a ? ((h = $(a)), (i[0] = a), (i[1] = h)) : (h = i[1]);
      var y = r("useClickablePropsForWebBloks")(t, h),
        C;
      i[2] !== g || i[3] !== s
        ? ((C = babelHelpers.extends(
            {},
            s,
            {
              display: "inline",
              whiteSpace: "pre-wrap",
              overflowWrap: "break-word",
            },
            g,
          )),
          (i[2] = g),
          (i[3] = s),
          (i[4] = C))
        : (C = i[4]);
      var b;
      return (
        i[5] !== e || i[6] !== y || i[7] !== C
          ? ((b = babelHelpers.extends({ "aria-label": e, style: C }, y)),
            (i[5] = e),
            (i[6] = y),
            (i[7] = C),
            (i[8] = b))
          : (b = i[8]),
        b
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
