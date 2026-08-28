__d(
  "WebBloksImage",
  [
    "WebBloksComponentContext",
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
      m = "#",
      p = "$",
      _ = "(",
      f = ")",
      g = ",",
      h = ".",
      y = "=",
      C = "#",
      b = "$",
      v = "$";
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
        (T.top === "0px" && T.bottom === "0px" && (T.height = "100%"),
        T.left === "0px" && T.right === "0px" && (T.width = "100%"));
      var N = S(i),
        M = {};
      if (u != null && l != null) {
        var w = N === "fill" ? "100% 100%" : N;
        M = {
          WebkitMaskImage: "url(" + l + ")",
          WebkitMaskSize: w,
          maskImage: "url(" + l + ")",
          maskSize: w,
          backgroundColor: o("WebBloksUtils").getRGBColorWithTheme(u, $),
          objectPosition: "10000px 10000px",
        };
      }
      var A = function (t) {
        b != null && k(r, b, [t, Date.now(), E]);
      };
      c(function () {
        A("ImageRequested");
      }, []);
      var F = P == null ? void 0 : P.get(v);
      if (F != null) {
        var O = F.charAt(0),
          B = "";
        switch (O) {
          case "/":
            B = "jpg";
            break;
          case "i":
            B = "png";
            break;
          case "R":
            B = "gif";
            break;
          case "U":
            B = "webp";
            break;
          case "P":
            B = "svg";
            break;
        }
        F = "data:image/" + B + ";base64," + F;
      }
      var W = $ === o("WebBloksTheme").THEME.light || a == null ? l : a,
        q = typeof W == "string" && W ? W.replace(/\\/g, "") : null,
        U = F != null ? F : q,
        V = babelHelpers.extends({}, x, {
          "aria-label": null,
          alt: (t = x == null ? void 0 : x["aria-label"]) != null ? t : "",
        }),
        H = d(
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
            V,
            {
              src: U,
              onLoad: function () {
                return A("ImageFinalRendered");
              },
              onError: function () {
                return A("ImageFailed");
              },
            },
            o("WebBloksStyle").getStyleProps(
              babelHelpers.extends(
                {},
                T,
                M,
                { objectFit: N },
                H != null ? { objectPosition: H } : null,
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
