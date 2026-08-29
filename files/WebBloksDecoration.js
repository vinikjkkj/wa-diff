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
    function _(e, t, n, a) {
      var i = o("WebBloksTheme").useTheme().getTheme(),
        l = e == null ? void 0 : e.get("background"),
        _ = r("WebBloksDrawable")(l, a, { enabled: t != null ? t : void 0 }),
        f = e == null ? void 0 : e.get("border_width"),
        g = u(
          function () {
            var t = e == null ? void 0 : e.get("border_themed_color"),
              n = e == null ? void 0 : e.get("border_color");
            return t != null
              ? o("WebBloksUtils").convertThemedColorToArr(t, i)
              : n != null
                ? o("WebBloksUtils").convertRGBOrHexStringToArr(n)
                : null;
          },
          [e, i],
        ),
        h = g != null && g[3] < 1;
      if (f != null && g != null && !h) {
        var y = o("WebBloksUtils").toPx(f),
          C = o("WebBloksUtils").convertRGBArrToString(g),
          b = e == null ? void 0 : e.get("contrib"),
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
        L = e == null ? void 0 : e.get("shadow_opacity"),
        E = e == null ? void 0 : e.get("shadow_themed_color");
      if (E != null || L != null) {
        var k,
          I,
          T,
          D = p;
        if (E != null) {
          var x = o("WebBloksUtils").convertThemedColorToArr(E, i),
            $ = x[0],
            P = x[1],
            N = x[2],
            M = x[3],
            w = M * (L != null ? L : 1);
          D = o("WebBloksUtils").convertRGBArrToString([$, P, N, w]);
        }
        var A =
            (k = e == null ? void 0 : e.get("shadow_offset_width")) != null
              ? k
              : c,
          F =
            (I = e == null ? void 0 : e.get("shadow_offset_height")) != null
              ? I
              : d,
          O = (T = e == null ? void 0 : e.get("shadow_radius")) != null ? T : m;
        _.boxShadow = A + "px " + F + "px " + O + "px " + D;
      }
      var B = e == null ? void 0 : e.get("clipping");
      (o("WebBloksBooleanUtils").isTrue(B) && (_.overflow = "hidden"),
        n &&
          !o("WebBloksBooleanUtils").isFalse(t) &&
          ((_.cursor = "pointer"), (_.pointerEvents = "auto")));
      var W = e == null ? void 0 : e.get("corner_radius");
      if (W != null) {
        var q = e == null ? void 0 : e.get("corners_to_apply_radius");
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
