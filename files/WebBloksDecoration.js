__d(
  "WebBloksDecoration",
  [
    "WebBloksBooleanUtils",
    "WebBloksDrawable",
    "WebBloksTheme",
    "WebBloksUtils",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useMemo,
      c = 0,
      d = 3,
      m = 6,
      p = "#000000";
    function _(e, t) {
      var n = o("WebBloksTheme").useTheme().getTheme(),
        a = e.decoration,
        i = e.enabled,
        l = a == null ? void 0 : a.get("background"),
        _ = r("WebBloksDrawable")(l, t, e),
        f = a == null ? void 0 : a.get("border_width"),
        g = u(
          function () {
            var e = a == null ? void 0 : a.get("border_themed_color"),
              t = a == null ? void 0 : a.get("border_color");
            return e != null
              ? o("WebBloksUtils").convertThemedColorToArr(e, n)
              : t != null
                ? o("WebBloksUtils").convertRGBOrHexStringToArr(t)
                : null;
          },
          [a, n],
        ),
        h = g != null && g[3] < 1;
      if (f != null && g != null && !h) {
        var y = o("WebBloksUtils").toPx(f),
          C = o("WebBloksUtils").convertRGBArrToString(g),
          b = a == null ? void 0 : a.get("contrib"),
          v = b == null ? void 0 : b.get("borders_to_apply");
        if (v != null && v.length > 0)
          for (var S of v)
            e: {
              if (S === "top") {
                _.borderTop = y + " solid " + C;
                break e;
              }
              if (S === "right") {
                _.borderRight = y + " solid " + C;
                break e;
              }
              if (S === "bottom") {
                _.borderBottom = y + " solid " + C;
                break e;
              }
              if (S === "left") {
                _.borderLeft = y + " solid " + C;
                break e;
              }
              break e;
            }
        else _.border = y + " solid " + C;
      }
      var R = u(
          function () {
            if (f == null || g == null || !h) return null;
            var e = o("WebBloksUtils").toPx(f),
              t = {
                position: "absolute",
                pointerEvents: "none",
                inset: 0,
                borderRadius: "inherit",
                border:
                  e + " solid " + o("WebBloksUtils").convertRGBArrToString(g),
              };
            return s.jsx("div", { style: t });
          },
          [f, g, h],
        ),
        L = a == null ? void 0 : a.get("shadow_opacity"),
        E = a == null ? void 0 : a.get("shadow_themed_color");
      if (E != null || L != null) {
        var k,
          I,
          T,
          D = p;
        if (E != null) {
          var x = o("WebBloksUtils").convertThemedColorToArr(E, n),
            $ = x[0],
            P = x[1],
            N = x[2],
            M = x[3],
            w = M * (L != null ? L : 1);
          D = o("WebBloksUtils").convertRGBArrToString([$, P, N, w]);
        }
        var A =
            (k = a == null ? void 0 : a.get("shadow_offset_width")) != null
              ? k
              : c,
          F =
            (I = a == null ? void 0 : a.get("shadow_offset_height")) != null
              ? I
              : d,
          O = (T = a == null ? void 0 : a.get("shadow_radius")) != null ? T : m;
        _.boxShadow = A + "px " + F + "px " + O + "px " + D;
      }
      var B = a == null ? void 0 : a.get("clipping");
      (o("WebBloksBooleanUtils").isTrue(B) && (_.overflow = "hidden"),
        Object.prototype.hasOwnProperty.call(e, "on_click") &&
          !o("WebBloksBooleanUtils").isFalse(i) &&
          ((_.cursor = "pointer"), (_.pointerEvents = "auto")));
      var W = a == null ? void 0 : a.get("corner_radius");
      if (W != null) {
        var q = a == null ? void 0 : a.get("corners_to_apply_radius");
        if (q != null && q.length > 0)
          for (var U of q)
            switch (U) {
              case "top_left":
                _.borderTopLeftRadius = o("WebBloksUtils").toPx(W);
                break;
              case "top_right":
                _.borderTopRightRadius = o("WebBloksUtils").toPx(W);
                break;
              case "bottom_right":
                _.borderBottomRightRadius = o("WebBloksUtils").toPx(W);
                break;
              case "bottom_left":
                _.borderBottomLeftRadius = o("WebBloksUtils").toPx(W);
                break;
              default:
                break;
            }
        else _.borderRadius = o("WebBloksUtils").toPx(W);
      }
      return [_, R];
    }
    l.default = _;
  },
  98,
);
