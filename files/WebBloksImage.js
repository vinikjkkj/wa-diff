__d(
  "WebBloksImage",
  [
    "WebBloksComponentContext",
    "WebBloksModel",
    "WebBloksRenderDiagnostics",
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
      if (e != null && e.startsWith("data:"))
        return { host: "data", source: "data" };
      try {
        var t = new URL(e != null ? e : "", window.location.href),
          n = t.host,
          r = n === "fbcdn.net" || n.endsWith(".fbcdn.net");
        return { host: n, source: r ? "fbcdn" : "external" };
      } catch (e) {
        return { host: "unparseable", source: "unparseable" };
      }
    }
    function E(e) {
      var t,
        n = e.externalStyle,
        r = e.node,
        a = r.get(p),
        i = r.get(_),
        l = r.get(f),
        u = r.get(m),
        C = r.get(y),
        b = r.getExpression(g),
        E = o("WebBloksComponentContext").useWebBloksContext(),
        k = E.bloksContext,
        I = E.executeCatch,
        T = o("WebBloksStyle").useStyle(r, n),
        D = T.style,
        x = T.wrapper,
        $ = T.wrapperProps,
        P = babelHelpers.extends({}, D),
        N = o("WebBloksTheme").useTheme().getTheme(),
        M = r.get(h);
      P.position === "absolute" &&
        P.left === "0px" &&
        P.right === "0px" &&
        (P.width = "100%");
      var w =
          P.position === "absolute" && P.top === "0px" && P.bottom === "0px"
            ? babelHelpers.extends({}, P, { height: "100%" })
            : P,
        A = S(i),
        F = {};
      if (u != null && l != null) {
        var O = A === "fill" ? "100% 100%" : A;
        F = {
          WebkitMaskImage: "url(" + l + ")",
          WebkitMaskSize: O,
          maskImage: "url(" + l + ")",
          maskSize: O,
          backgroundColor: o("WebBloksUtils").getRGBColorWithTheme(u, N),
          objectPosition: "10000px 10000px",
        };
      }
      var B = function (t) {
        b != null && I(r, b, [t, Date.now(), k]);
      };
      c(function () {
        B("ImageRequested");
      }, []);
      var W = M == null ? void 0 : M.get(v);
      if (W != null) {
        var q = W.charAt(0),
          U = "";
        switch (q) {
          case "/":
            U = "jpg";
            break;
          case "i":
            U = "png";
            break;
          case "R":
            U = "gif";
            break;
          case "U":
            U = "webp";
            break;
          case "P":
            U = "svg";
            break;
        }
        W = "data:image/" + U + ";base64," + W;
      }
      var V = N === o("WebBloksTheme").THEME.light || a == null ? l : a,
        H = typeof V == "string" && V ? V.replace(/\\/g, "") : null,
        G = W != null ? W : H,
        z = babelHelpers.extends({}, $, {
          "aria-label": null,
          alt: (t = $ == null ? void 0 : $["aria-label"]) != null ? t : "",
        }),
        j = d(
          function () {
            return C != null && u == null ? R(C) : void 0;
          },
          [u, C],
        );
      return x(
        s.jsx(
          "img",
          babelHelpers.extends(
            {},
            z,
            {
              src: G,
              onLoad: function () {
                return B("ImageFinalRendered");
              },
              onError: function () {
                if (
                  (B("ImageFailed"),
                  o(
                    "WebBloksRenderDiagnostics",
                  ).isWebBloksRenderDiagnosticsInstalled())
                ) {
                  var e = L(G),
                    t = e.host,
                    n = e.source;
                  o("WebBloksRenderDiagnostics").reportWebBloksRenderDrop(
                    "media_load_failed",
                    { attribute: n, message: t, styleId: r.styleId },
                  );
                }
              },
            },
            o("WebBloksStyle").getStyleProps(
              babelHelpers.extends(
                {},
                w,
                F,
                { objectFit: A },
                j != null ? { objectPosition: j } : null,
                { overflow: "hidden" },
              ),
            ),
          ),
        ),
      );
    }
    ((E.displayName = E.name + " [from " + i.id + "]"), (l.default = E));
  },
  98,
);
