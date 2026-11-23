__d(
  "WebBloksDrawable",
  ["WebBloksModel", "WebBloksTheme", "WebBloksUtils", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useMemo,
      d = s.useState,
      m = "bk.components.ColorDrawable",
      p = "bk.components.GradientDrawable",
      _ = "bk.components.GradientThemedColorDrawable",
      f = "bk.components.StateDrawable",
      g = "bk.components.ThemedColorDrawable",
      h = o("WebBloksModel").defineWebBloksAttributeKey("#"),
      y = o("WebBloksModel").defineWebBloksAttributeKey("#"),
      C = o("WebBloksModel").defineWebBloksAttributeKey("#"),
      b = o("WebBloksModel").defineWebBloksAttributeKey("$"),
      v = o("WebBloksModel").defineWebBloksAttributeKey("&"),
      S = o("WebBloksModel").defineWebBloksAttributeKey("("),
      R = o("WebBloksModel").defineWebBloksAttributeKey("#"),
      L = o("WebBloksModel").defineWebBloksAttributeKey("$"),
      E = o("WebBloksModel").defineWebBloksAttributeKey("&"),
      k = o("WebBloksModel").defineWebBloksAttributeKey("("),
      I = o("WebBloksModel").defineWebBloksAttributeKey("#"),
      T = o("WebBloksModel").defineWebBloksAttributeKey("#"),
      D = o("WebBloksModel").defineWebBloksAttributeKey("$");
    function x(e) {
      var t = [1, void 0, !0];
      return t.includes(e);
    }
    function $(e, t, n) {
      n === void 0 && (n = {});
      var r = P(e),
        o = N(e, t, n);
      return c(
        function () {
          return babelHelpers.extends({}, r, o);
        },
        [r, o],
      );
    }
    function P(e) {
      var t = o("WebBloksTheme").useTheme().getTheme();
      return c(
        function () {
          if (!e) return {};
          var n = w(t, e);
          return n == null ? {} : { background: n };
        },
        [e, t],
      );
    }
    function N(e, t, n) {
      n === void 0 && (n = {});
      var r = o("WebBloksTheme").useTheme().getTheme(),
        a = d(x(n.enabled) ? "default" : "disabled"),
        i = a[0],
        l = a[1];
      return (
        u(
          function () {
            l(x(n.enabled) ? "default" : "disabled");
          },
          [n.enabled],
        ),
        u(
          function () {
            var r = t.current;
            if (r == null) return;
            function a() {
              l("pressed");
              function e() {
                (l("default"),
                  document.removeEventListener("mouseup", e),
                  document.removeEventListener("touchend", e));
              }
              (document.addEventListener("mouseup", e),
                document.addEventListener("touchend", e));
            }
            return (
              x(n.enabled) &&
                ((e == null ? void 0 : e.styleId) === f ||
                  (e == null ? void 0 : e.styleId) ===
                    "bk.components.StateDrawable") &&
                A(o("WebBloksUtils").cast(e), "pressed") &&
                (r.addEventListener("mousedown", a),
                r.addEventListener("touchstart", a)),
              function () {
                (r.removeEventListener("mousedown", a),
                  r.removeEventListener("touchstart", a));
              }
            );
          },
          [e, n.enabled, t],
        ),
        c(
          function () {
            if (
              (e == null ? void 0 : e.styleId) === f ||
              (e == null ? void 0 : e.styleId) === "bk.components.StateDrawable"
            ) {
              var t = F(r, o("WebBloksUtils").cast(e), i);
              return { background: t != null ? t : void 0 };
            }
            return {};
          },
          [r, e, i],
        )
      );
    }
    var M = {
      top_to_bottom: "180deg",
      left_to_right: "90deg",
      bottom_left_to_top_right: "45deg",
      top_left_to_bottom_right: "135deg",
    };
    function w(e, t) {
      switch (t.styleId) {
        case m:
        case "bk.components.ColorDrawable": {
          var n = o("WebBloksUtils").cast(t).get(h);
          if (n == null) break;
          return o("WebBloksUtils").convertRGBArrToString(
            o("WebBloksUtils").convertRGBOrHexStringToArr(n),
          );
        }
        case g:
        case "bk.components.ThemedColorDrawable": {
          var r = o("WebBloksUtils").cast(t).get(y);
          if (r == null) break;
          return o("WebBloksUtils").getRGBColorWithTheme(r, e);
        }
        case p:
        case "bk.components.GradientDrawable": {
          var a = o("WebBloksUtils").cast(t),
            i = a.get(S),
            l = a.get(C),
            s = a.get(v),
            u = a.get(b),
            c = "";
          return (
            i != null && (c += M[i] + ","),
            l != null &&
              (c +=
                o("WebBloksUtils").convertRGBArrToString(
                  o("WebBloksUtils").convertRGBOrHexStringToArr(l),
                ) + ","),
            s != null &&
              (c +=
                o("WebBloksUtils").convertRGBArrToString(
                  o("WebBloksUtils").convertRGBOrHexStringToArr(s),
                ) + ","),
            u != null &&
              (c += o("WebBloksUtils").convertRGBArrToString(
                o("WebBloksUtils").convertRGBOrHexStringToArr(u),
              )),
            "linear-gradient(" + c + ")"
          );
        }
        case _:
        case "bk.components.GradientThemedColorDrawable": {
          var d = o("WebBloksUtils").cast(t),
            f = d.get(k),
            I = d.get(R),
            T = d.get(E),
            D = d.get(L),
            x = "";
          return (
            f != null && (x += M[f] + ","),
            I != null &&
              (x += o("WebBloksUtils").getRGBColorWithTheme(I, e) + ","),
            T != null &&
              (x += o("WebBloksUtils").getRGBColorWithTheme(T, e) + ","),
            D != null && (x += o("WebBloksUtils").getRGBColorWithTheme(D, e)),
            "linear-gradient(" + x + ")"
          );
        }
        default:
          return null;
      }
    }
    function A(e, t) {
      var n,
        r = (n = e == null ? void 0 : e.get(I)) != null ? n : [];
      return r.some(function (e) {
        return e.get(D) === t;
      });
    }
    function F(e, t, n) {
      var r = t.get(I);
      for (var o of r) if (o.get(D) === n) return w(e, o.get(T));
      return null;
    }
    l.default = $;
  },
  98,
);
