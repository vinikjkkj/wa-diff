__d(
  "WebBloksImage",
  [
    "WebBloksComponentContext",
    "WebBloksModel",
    "WebBloksStyle",
    "WebBloksTheme",
    "WebBloksUtils",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useMemo,
      m = o("WebBloksModel").defineWebBloksAttributeKey("#"),
      p = o("WebBloksModel").defineWebBloksAttributeKey("$"),
      _ = o("WebBloksModel").defineWebBloksAttributeKey("("),
      f = o("WebBloksModel").defineWebBloksAttributeKey(")"),
      g = o("WebBloksModel").defineWebBloksAttributeKey(","),
      h = o("WebBloksModel").defineWebBloksAttributeKey("."),
      y = o("WebBloksModel").defineWebBloksAttributeKey("="),
      C = o("WebBloksModel").defineWebBloksAttributeKey("#"),
      b = o("WebBloksModel").defineWebBloksAttributeKey("$"),
      v = o("WebBloksModel").defineWebBloksAttributeKey("$");
    function S(e) {
      switch (e) {
        case "contain":
          return "contain";
        case "stretch":
          return "fill";
        case "cover":
        default:
          return "cover";
      }
    }
    function R(e) {
      if (e != null) {
        var t = e.get(C),
          n = e.get(b);
        if (!(t == null || n == null)) return t * 100 + "% " + n * 100 + "%";
      }
    }
    function L(e) {
      var t,
        n = e.externalStyle,
        r = e.node,
        a = r.get(p),
        i = r.get(_),
        l = r.get(f),
        u = r.get(m),
        C = r.get(y),
        b = r.getExpression(g),
        L = o("WebBloksComponentContext").useWebBloksContext(),
        E = L.bloksContext,
        k = L.executeCatch,
        I = o("WebBloksStyle").useStyle(r, n),
        T = I.style,
        D = I.wrapper,
        x = I.wrapperProps,
        $ = babelHelpers.extends({}, T),
        P = o("WebBloksTheme").useTheme().getTheme(),
        N = r.get(h);
      $.position === "absolute" &&
        $.left === "0px" &&
        $.right === "0px" &&
        ($.width = "100%");
      var M =
          $.position === "absolute" && $.top === "0px" && $.bottom === "0px"
            ? babelHelpers.extends({}, $, { height: "100%" })
            : $,
        w = S(i),
        A = {};
      if (u != null && l != null) {
        var F = w === "fill" ? "100% 100%" : w;
        A = {
          WebkitMaskImage: "url(" + l + ")",
          WebkitMaskSize: F,
          maskImage: "url(" + l + ")",
          maskSize: F,
          backgroundColor: o("WebBloksUtils").getRGBColorWithTheme(u, P),
          objectPosition: "10000px 10000px",
        };
      }
      var O = function (t) {
        b != null && k(r, b, [t, Date.now(), E]);
      };
      c(function () {
        O("ImageRequested");
      }, []);
      var B = N == null ? void 0 : N.get(v);
      if (B != null) {
        var W = B.charAt(0),
          q = "";
        switch (W) {
          case "/":
            q = "jpg";
            break;
          case "i":
            q = "png";
            break;
          case "R":
            q = "gif";
            break;
          case "U":
            q = "webp";
            break;
          case "P":
            q = "svg";
            break;
        }
        B = "data:image/" + q + ";base64," + B;
      }
      var U = P === o("WebBloksTheme").THEME.light || a == null ? l : a,
        V = typeof U == "string" && U ? U.replace(/\\/g, "") : null,
        H = B != null ? B : V,
        G = babelHelpers.extends({}, x, {
          "aria-label": null,
          alt: (t = x == null ? void 0 : x["aria-label"]) != null ? t : "",
        }),
        z = d(
          function () {
            return C != null && u == null ? R(C) : void 0;
          },
          [u, C],
        );
      return D(
        s.jsx(
          "img",
          babelHelpers.extends(
            {},
            G,
            {
              src: H,
              onLoad: function () {
                return O("ImageFinalRendered");
              },
              onError: function () {
                return O("ImageFailed");
              },
            },
            o("WebBloksStyle").getStyleProps(
              babelHelpers.extends(
                {},
                M,
                A,
                { objectFit: w },
                z != null ? { objectPosition: z } : null,
                { overflow: "hidden" },
              ),
            ),
          ),
        ),
      );
    }
    ((L.displayName = L.name + " [from " + i.id + "]"), (l.default = L));
  },
  98,
);
