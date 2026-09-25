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
        $ = o("WebBloksTheme").useTheme().getTheme(),
        P = r.get(h);
      T.position === "absolute" &&
        T.left === "0px" &&
        T.right === "0px" &&
        (T.width = "100%");
      var N =
          T.position === "absolute" && T.top === "0px" && T.bottom === "0px"
            ? babelHelpers.extends({}, T, { height: "100%" })
            : T,
        M = S(i),
        w = {};
      if (u != null && l != null) {
        var A = M === "fill" ? "100% 100%" : M;
        w = {
          WebkitMaskImage: "url(" + l + ")",
          WebkitMaskSize: A,
          maskImage: "url(" + l + ")",
          maskSize: A,
          backgroundColor: o("WebBloksUtils").getRGBColorWithTheme(u, $),
          objectPosition: "10000px 10000px",
        };
      }
      var F = function (t) {
        b != null && k(r, b, [t, Date.now(), E]);
      };
      c(function () {
        F("ImageRequested");
      }, []);
      var O = P == null ? void 0 : P.get(v);
      if (O != null) {
        var B = O.charAt(0),
          W = "";
        switch (B) {
          case "/":
            W = "jpg";
            break;
          case "i":
            W = "png";
            break;
          case "R":
            W = "gif";
            break;
          case "U":
            W = "webp";
            break;
          case "P":
            W = "svg";
            break;
        }
        O = "data:image/" + W + ";base64," + O;
      }
      var q = $ === o("WebBloksTheme").THEME.light || a == null ? l : a,
        U = typeof q == "string" && q ? q.replace(/\\/g, "") : null,
        V = O != null ? O : U,
        H = babelHelpers.extends({}, x, {
          "aria-label": null,
          alt: (t = x == null ? void 0 : x["aria-label"]) != null ? t : "",
        }),
        G = d(
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
            H,
            {
              src: V,
              onLoad: function () {
                return F("ImageFinalRendered");
              },
              onError: function () {
                return F("ImageFailed");
              },
            },
            o("WebBloksStyle").getStyleProps(
              babelHelpers.extends(
                {},
                N,
                w,
                { objectFit: M },
                G != null ? { objectPosition: G } : null,
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
