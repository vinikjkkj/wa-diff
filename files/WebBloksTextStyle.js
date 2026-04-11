__d(
  "WebBloksTextStyle",
  ["WebBloksSSRUtils", "WebBloksUtils"],
  function (t, n, r, o, a, i, l) {
    var e = o("WebBloksUtils").convertRGBArrToString(
        o("WebBloksUtils").convertRGBOrHexStringToArr("#0000000"),
      ),
      s = 1.3;
    function u(t, n, r) {
      return t != null
        ? {
            color: o("WebBloksUtils").convertRGBArrToString(
              o("WebBloksUtils").convertRGBOrHexStringToArr(t),
            ),
          }
        : n && r
          ? { color: o("WebBloksUtils").getRGBColorWithTheme(n, r) }
          : { color: e };
    }
    function c(e) {
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
    function d(e) {
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
    function m(e, t) {
      return e
        .map(function (e) {
          return o("WebBloksUtils").getRGBColorWithTheme(e, t);
        })
        .join(", ");
    }
    function p(e, t, n) {
      if (e == null || e.length === 0 || t == null) return {};
      var r = d(t),
        a = m(e, n);
      return {
        backgroundColor: o("WebBloksUtils").getRGBColorWithTheme(e[0], n),
        background: "linear-gradient(" + r + ", " + a + ")",
        backgroundSize: "100%",
        textFillColor: "transparent",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      };
    }
    function _(e, t, n) {
      var r = 0,
        o = 0;
      if (n) {
        var a, i;
        ((r = f(e, t, (a = n.cap_spacing) != null ? a : void 0)),
          (o = f(e, t, (i = n.baseline_spacing) != null ? i : void 0)));
      }
      function l(e) {
        if (typeof e == "string")
          return "translateY(calc(calc(" + e + " - 1em) / 2)";
        if (!(e <= s)) {
          var t = "calc(1em * " + e + ")",
            n = "calc(1em * " + s + ")";
          return "translateY(calc((" + t + " - " + n + ")/2))";
        }
      }
      return { paddingTop: r, paddingBottom: o, transform: l(e) };
    }
    function f(e, t, n) {
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
    function g(e, t) {
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
    var h = 12;
    function y(e) {
      if (e == null) return 0;
      var t = h;
      for (var n of e) {
        var r = h;
        switch (n.styleId) {
          case "bk.components.TextSpan": {
            var a = o("WebBloksUtils").toPx(n.get("text_size"));
            o("WebBloksSSRUtils").canUseDOM
              ? (r = parseFloat(
                  a != null
                    ? a
                    : window.getComputedStyle(document.body).fontSize,
                ))
              : (r = parseFloat(a));
            break;
          }
          case "bk.data.ComposableTextSpan":
          case "bk.data.TextSpan": {
            var i,
              l =
                (i = n.get("styles")) == null
                  ? void 0
                  : i.find(function (e) {
                      return e.styleId === "bk.style.textspan.TextStyle";
                    });
            if (l == null || l.styleId !== "bk.style.textspan.TextStyle") break;
            var s = o("WebBloksUtils").toPx(l.get("text_size"));
            o("WebBloksSSRUtils").canUseDOM
              ? (r = parseFloat(
                  s != null
                    ? s
                    : window.getComputedStyle(document.body).fontSize,
                ))
              : (r = parseFloat(s));
            break;
          }
          case "bk.data.ImageSpan": {
            var u,
              c = n.get("image_height");
            r = (u = parseFloat(c)) != null ? u : h;
            break;
          }
          default:
            continue;
        }
        r > t && (t = r);
      }
      return t;
    }
    function C(e) {
      return (e === void 0 && (e = 1), s * e);
    }
    function b(e, t) {
      if (e === "AvenyT") return "Instagram Sans Condensed";
      if (e != null && t != null && t[e]) {
        var n = t[e].webFontName;
        return n == null ? void 0 : n;
      }
      return e;
    }
    function v(e, t) {
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
    ((l.getTextColor = u),
      (l.getTextStyle = c),
      (l.getGradientColors = m),
      (l.getGradientTextStyle = p),
      (l.getVerticalSpacingStyles = _),
      (l.getLineClampStyle = g),
      (l.getMaxTextSizePx = y),
      (l.getLineHeight = C),
      (l.getFontFamily = b),
      (l.getTextShadow = v));
  },
  98,
);
