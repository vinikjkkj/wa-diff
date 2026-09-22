__d(
  "WebBloksTextStyle",
  ["WebBloksModel", "WebBloksSSRUtils", "WebBloksUtils"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "bk.data.ComposableTextSpan",
      u = "bk.data.ImageSpan",
      c = "bk.data.TextSpan",
      d = "bk.components.TextSpan",
      m = "bk.style.textspan.TextStyle",
      p = (e = o("WebBloksModel")).defineWebBloksAttributeKey("*"),
      _ = e.defineWebBloksAttributeKey("&"),
      f = e.defineWebBloksAttributeKey("$"),
      g = e.defineWebBloksAttributeKey(")"),
      h = e.defineWebBloksAttributeKey("("),
      y = o("WebBloksUtils").convertRGBArrToString(
        o("WebBloksUtils").convertRGBOrHexStringToArr("#0000000"),
      ),
      C = 1.3;
    function b(e, t, n) {
      return e != null
        ? {
            color: o("WebBloksUtils").convertRGBArrToString(
              o("WebBloksUtils").convertRGBOrHexStringToArr(e),
            ),
          }
        : t && n
          ? { color: o("WebBloksUtils").getRGBColorWithTheme(t, n) }
          : { color: y };
    }
    function v(e) {
      var t, n;
      switch (e) {
        case "normal":
          t = 400;
          break;
        case "heavy":
          t = 900;
          break;
        case "bold":
          t = 700;
          break;
        case "italic":
          n = "italic";
          break;
        case "bold_italic":
          ((t = 700), (n = "italic"));
          break;
        case "light":
          t = 300;
          break;
        case "medium":
          t = 500;
          break;
        case "semibold":
          t = 600;
          break;
      }
      return { fontWeight: t, fontStyle: n };
    }
    function S(e) {
      var t = "";
      switch (e) {
        case "top_to_bottom":
          t = "180deg";
          break;
        case "left_to_right":
          t = "90deg";
          break;
        case "bottom_left_to_top_right":
          t = "45deg";
          break;
        case "top_left_to_bottom_right":
          t = "135deg";
          break;
      }
      return t;
    }
    function R(e, t) {
      return e
        .map(function (e) {
          return o("WebBloksUtils").getRGBColorWithTheme(e, t);
        })
        .join(", ");
    }
    function L(e, t, n) {
      if (e == null || e.length === 0 || t == null) return {};
      var r = S(t),
        a = R(e, n);
      return {
        backgroundColor: o("WebBloksUtils").getRGBColorWithTheme(e[0], n),
        background: "linear-gradient(" + r + ", " + a + ")",
        backgroundSize: "100%",
        textFillColor: "transparent",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      };
    }
    function E(e, t, n) {
      var r = 0,
        o = 0;
      if (n) {
        var a, i;
        ((r = k(e, t, (a = n.cap_spacing) != null ? a : void 0)),
          (o = k(e, t, (i = n.baseline_spacing) != null ? i : void 0)));
      }
      function l(e) {
        if (typeof e == "string")
          return "translateY(calc(calc(" + e + " - 1em) / 2)";
        if (!(e <= C)) {
          var t = "calc(1em * " + e + ")",
            n = "calc(1em * " + C + ")";
          return "translateY(calc((" + t + " - " + n + ")/2))";
        }
      }
      return { paddingTop: r, paddingBottom: o, transform: l(e) };
    }
    function k(e, t, n) {
      if (n == null) return 0;
      if (t != null) {
        var r = t * 0.8,
          o = typeof e == "string" ? parseInt(e, 10) : t * e,
          a = (o - r) / 2,
          i = n - a;
        if (Math.abs(i) > 0.3) return i;
      }
      return 0;
    }
    function I(e, t) {
      return (
        t === void 0 && (t = !0),
        e == null || e < 1
          ? {}
          : {
              display: t ? "-webkit-inline-box" : "-webkit-box",
              overflow: "hidden",
              textOverflow: "ellipsis",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: e,
              wordBreak: "break-word",
              maxHeight: "999999px",
            }
      );
    }
    var T = 12;
    function D(e, t) {
      return t
        ? e != null
          ? parseFloat(e)
          : T
        : o("WebBloksSSRUtils").canUseDOM
          ? parseFloat(
              e != null ? e : window.getComputedStyle(document.body).fontSize,
            )
          : parseFloat(e);
    }
    function x(e, t) {
      if ((t === void 0 && (t = !1), e == null)) return 0;
      var n = T;
      for (var r of e) {
        var a = T;
        switch (r.styleId) {
          case d:
          case "bk.components.TextSpan": {
            var i = o("WebBloksUtils").toPx(o("WebBloksUtils").cast(r).get(p));
            a = D(i, t);
            break;
          }
          case s:
          case c:
          case "bk.data.ComposableTextSpan":
          case "bk.data.TextSpan": {
            var l =
                r.styleId === s || r.styleId === "bk.data.ComposableTextSpan"
                  ? o("WebBloksUtils").cast(r).get(_)
                  : o("WebBloksUtils").cast(r).get(f),
              y =
                l == null
                  ? void 0
                  : l.find(function (e) {
                      var t = e.styleId;
                      return t === m || t === "bk.style.textspan.TextStyle";
                    });
            if (y == null) break;
            var C = o("WebBloksUtils").toPx(o("WebBloksUtils").cast(y).get(g));
            a = D(C, t);
            break;
          }
          case u:
          case "bk.data.ImageSpan": {
            var b,
              v = o("WebBloksUtils").cast(r).get(h);
            a = (b = parseFloat(v)) != null ? b : T;
            break;
          }
          default:
            continue;
        }
        a > n && (n = a);
      }
      return n;
    }
    function $(e) {
      return (e === void 0 && (e = 1), C * e);
    }
    function P(e, t) {
      if (e === "AvenyT") return "Instagram Sans Condensed";
      if (e != null && t != null && t[e]) {
        var n = t[e].webFontName;
        return n == null ? void 0 : n;
      }
      return e;
    }
    function N(e, t) {
      var n,
        r,
        a,
        i = (n = e.shadow_offset_dx) == null ? void 0 : n.toString(),
        l = (r = e.shadow_offset_dy) == null ? void 0 : r.toString(),
        s = (a = e.shadow_radius) == null ? void 0 : a.toString(),
        u = e.shadow_color
          ? o("WebBloksUtils").getRGBColorWithTheme(e.shadow_color, t)
          : null,
        c;
      return (
        i != null && l != null && (c = i + "px " + l + "px"),
        c != null &&
          (s != null && (c = c + " " + s + "px"),
          u != null && (c = c + " " + u)),
        c
      );
    }
    ((l.getTextColor = b),
      (l.getTextStyle = v),
      (l.getGradientColors = R),
      (l.getGradientTextStyle = L),
      (l.getVerticalSpacingStyles = E),
      (l.getLineClampStyle = I),
      (l.getMaxTextSizePx = x),
      (l.getLineHeight = $),
      (l.getFontFamily = P),
      (l.getTextShadow = N));
  },
  98,
);
