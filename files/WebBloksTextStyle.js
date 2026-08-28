__d(
  "WebBloksTextStyle",
  ["WebBloksSSRUtils", "WebBloksUtils"],
  function (t, n, r, o, a, i, l) {
    var e = "\u41F7",
      s = "\u4202",
      u = "\u41F0",
      c = "\u341B",
      d = "\u41E6",
      m = "*",
      p = "&",
      _ = "$",
      f = ")",
      g = "(",
      h = o("WebBloksUtils").convertRGBArrToString(
        o("WebBloksUtils").convertRGBOrHexStringToArr("#0000000"),
      ),
      y = 1.3;
    function C(e, t, n) {
      return e != null
        ? {
            color: o("WebBloksUtils").convertRGBArrToString(
              o("WebBloksUtils").convertRGBOrHexStringToArr(e),
            ),
          }
        : t && n
          ? { color: o("WebBloksUtils").getRGBColorWithTheme(t, n) }
          : { color: h };
    }
    function b(e) {
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
    function v(e) {
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
    function S(e, t) {
      return e
        .map(function (e) {
          return o("WebBloksUtils").getRGBColorWithTheme(e, t);
        })
        .join(", ");
    }
    function R(e, t, n) {
      if (e == null || e.length === 0 || t == null) return {};
      var r = v(t),
        a = S(e, n);
      return {
        backgroundColor: o("WebBloksUtils").getRGBColorWithTheme(e[0], n),
        background: "linear-gradient(" + r + ", " + a + ")",
        backgroundSize: "100%",
        textFillColor: "transparent",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      };
    }
    function L(e, t, n) {
      var r = 0,
        o = 0;
      if (n) {
        var a, i;
        ((r = E(e, t, (a = n.cap_spacing) != null ? a : void 0)),
          (o = E(e, t, (i = n.baseline_spacing) != null ? i : void 0)));
      }
      function l(e) {
        if (typeof e == "string")
          return "translateY(calc(calc(" + e + " - 1em) / 2)";
        if (!(e <= y)) {
          var t = "calc(1em * " + e + ")",
            n = "calc(1em * " + y + ")";
          return "translateY(calc((" + t + " - " + n + ")/2))";
        }
      }
      return { paddingTop: r, paddingBottom: o, transform: l(e) };
    }
    function E(e, t, n) {
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
    function k(e, t) {
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
    var I = 12;
    function T(t) {
      if (t == null) return 0;
      var n = I;
      for (var r of t) {
        var a = I;
        switch (r.styleId) {
          case c:
          case "bk.components.TextSpan": {
            var i = o("WebBloksUtils").toPx(o("WebBloksUtils").cast(r).get(m));
            o("WebBloksSSRUtils").canUseDOM
              ? (a = parseFloat(
                  i != null
                    ? i
                    : window.getComputedStyle(document.body).fontSize,
                ))
              : (a = parseFloat(i));
            break;
          }
          case e:
          case u:
          case "bk.data.ComposableTextSpan":
          case "bk.data.TextSpan": {
            var l =
                r.styleId === e || r.styleId === "bk.data.ComposableTextSpan"
                  ? o("WebBloksUtils").cast(r).get(p)
                  : o("WebBloksUtils").cast(r).get(_),
              h =
                l == null
                  ? void 0
                  : l.find(function (e) {
                      var t = e.styleId;
                      return t === d || t === "bk.style.textspan.TextStyle";
                    });
            if (h == null) break;
            var y = o("WebBloksUtils").toPx(o("WebBloksUtils").cast(h).get(f));
            o("WebBloksSSRUtils").canUseDOM
              ? (a = parseFloat(
                  y != null
                    ? y
                    : window.getComputedStyle(document.body).fontSize,
                ))
              : (a = parseFloat(y));
            break;
          }
          case s:
          case "bk.data.ImageSpan": {
            var C,
              b = o("WebBloksUtils").cast(r).get(g);
            a = (C = parseFloat(b)) != null ? C : I;
            break;
          }
          default:
            continue;
        }
        a > n && (n = a);
      }
      return n;
    }
    function D(e) {
      return (e === void 0 && (e = 1), y * e);
    }
    function x(e, t) {
      if (e === "AvenyT") return "Instagram Sans Condensed";
      if (e != null && t != null && t[e]) {
        var n = t[e].webFontName;
        return n == null ? void 0 : n;
      }
      return e;
    }
    function $(e, t) {
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
    ((l.getTextColor = C),
      (l.getTextStyle = b),
      (l.getGradientColors = S),
      (l.getGradientTextStyle = R),
      (l.getVerticalSpacingStyles = L),
      (l.getLineClampStyle = k),
      (l.getMaxTextSizePx = T),
      (l.getLineHeight = D),
      (l.getFontFamily = x),
      (l.getTextShadow = $));
  },
  98,
);
