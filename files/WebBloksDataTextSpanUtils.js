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
      c = s.useMemo;
    function d(e, t) {
      var n = o("react-compiler-runtime").c(9),
        a;
      n[0] !== e
        ? ((a = e.get("accessibility_label")), (n[0] = e), (n[1] = a))
        : (a = n[1]);
      var i = a,
        l = o("WebBloksStyle").useStyle(e, t),
        s = l.style,
        c = o("WebBloksComponentContext").useWebBloksContext(),
        d = c.bloksContext,
        _ = o("WebBloksTheme").useTheme().getTheme(),
        f = u(r("WebBloksRichTextContext")),
        g = f.isRootFontSizeEnabled,
        h = d.objectSet.environment.fontFamilyMappings,
        y = e.get("styles"),
        C = m(y, _, h, g),
        b = r("useClickablePropsForWebBloks")(e, p(y)),
        v;
      n[2] !== C || n[3] !== s
        ? ((v = babelHelpers.extends(
            {},
            s,
            {
              display: "inline",
              whiteSpace: "pre-wrap",
              overflowWrap: "break-word",
            },
            C,
          )),
          (n[2] = C),
          (n[3] = s),
          (n[4] = v))
        : (v = n[4]);
      var S;
      return (
        n[5] !== i || n[6] !== b || n[7] !== v
          ? ((S = babelHelpers.extends({ "aria-label": i, style: v }, b)),
            (n[5] = i),
            (n[6] = b),
            (n[7] = v),
            (n[8] = S))
          : (S = n[8]),
        S
      );
    }
    function m(e, t, n, r) {
      var a = {};
      if (e != null)
        for (var i of e)
          switch (i == null ? void 0 : i.styleId) {
            case "bk.style.textspan.TextStyle": {
              var l = i == null ? void 0 : i.get("font_family"),
                s = i == null ? void 0 : i.get("text_style"),
                u = i == null ? void 0 : i.get("text_size"),
                c = i == null ? void 0 : i.get("tracking");
              if (
                (u != null && !r && (a.fontSize = o("WebBloksUtils").toPx(u)),
                s != null)
              ) {
                var d = o("WebBloksTextStyle").getTextStyle(s),
                  m = d.fontStyle,
                  p = d.fontWeight;
                ((a.fontWeight = p), (a.fontStyle = m));
              }
              if (l != null) {
                var _;
                a.fontFamily =
                  (_ = o("WebBloksTextStyle").getFontFamily(l, n)) != null
                    ? _
                    : void 0;
              }
              c != null && (a.letterSpacing = c);
              break;
            }
            case "bk.style.textspan.ColorStyle": {
              var f = i == null ? void 0 : i.get("text_themed_color");
              f != null &&
                (a.color = o("WebBloksUtils").getRGBColorWithTheme(f, t));
              break;
            }
            case "bk.style.textspan.ShadowStyle": {
              var g = i.get("shadow_radius"),
                h = i.get("shadow_offset_dx"),
                y = i.get("shadow_offset_dy"),
                C = i.get("shadow_color");
              if (C != null && (g != null || h != null || y != null)) {
                var b = o("WebBloksTextStyle").getTextShadow(
                  {
                    shadow_radius: g,
                    shadow_offset_dx: h,
                    shadow_offset_dy: y,
                    shadow_color: C,
                  },
                  t,
                );
                b != null && (a.textShadow = b);
              }
              break;
            }
            case "bk.style.textspan.StrikethroughStyle": {
              var v = i.get("strikethrough");
              v === !0 && (a.textDecoration = "line-through");
              break;
            }
            case "bk.style.textspan.UnderlineStyle": {
              var S = i.get("underline");
              S === !0 && (a.textDecoration = "underline");
              break;
            }
          }
      return a;
    }
    function p(e) {
      var t = null;
      if (e != null)
        for (var n of e)
          (n == null ? void 0 : n.styleId) ===
            "bk.style.textspan.ClickableStyle" &&
            (t = n == null ? void 0 : n.getExpression("on_click"));
      return t;
    }
    l.useWebBloksBaseTextSpanProps = d;
  },
  98,
);
