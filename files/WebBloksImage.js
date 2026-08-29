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
      d = u.useMemo;
    function m(e) {
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
    function p(e) {
      if (e != null) {
        var t = e.get("x"),
          n = e.get("y");
        if (!(t == null || n == null)) return t * 100 + "% " + n * 100 + "%";
      }
    }
    function _(e) {
      var t,
        n = e.externalStyle,
        r = e.node,
        a = r.get("dark_url"),
        i = r.get("scale_type"),
        l = r.get("url"),
        u = r.get("color_filter"),
        _ = r.get("focus_point"),
        f = r.getExpression("on_image_perf_update"),
        g = o("WebBloksComponentContext").useWebBloksContext(),
        h = g.bloksContext,
        y = g.executeCatch,
        C = o("WebBloksStyle").useStyle(r, n),
        b = C.style,
        v = C.wrapper,
        S = C.wrapperProps,
        R = o("WebBloksTheme").useTheme().getTheme(),
        L = r.get("contrib");
      b.position === "absolute" &&
        (b.top === "0px" && b.bottom === "0px" && (b.height = "100%"),
        b.left === "0px" && b.right === "0px" && (b.width = "100%"));
      var E = m(i),
        k = {};
      if (u != null && l != null) {
        var I = E === "fill" ? "100% 100%" : E;
        k = {
          WebkitMaskImage: "url(" + l + ")",
          WebkitMaskSize: I,
          maskImage: "url(" + l + ")",
          maskSize: I,
          backgroundColor: o("WebBloksUtils").getRGBColorWithTheme(u, R),
          objectPosition: "10000px 10000px",
        };
      }
      var T = function (t) {
        f != null && y(r, f, [t, Date.now(), h]);
      };
      c(function () {
        T("ImageRequested");
      }, []);
      var D = L == null ? void 0 : L.get("base_sixty_four_encoded_image");
      if (D != null) {
        var x = D.charAt(0),
          $ = "";
        switch (x) {
          case "/":
            $ = "jpg";
            break;
          case "i":
            $ = "png";
            break;
          case "R":
            $ = "gif";
            break;
          case "U":
            $ = "webp";
            break;
          case "P":
            $ = "svg";
            break;
        }
        D = "data:image/" + $ + ";base64," + D;
      }
      var P = R === o("WebBloksTheme").THEME.light || a == null ? l : a,
        N = typeof P == "string" && P ? P.replace(/\\/g, "") : null,
        M = D != null ? D : N,
        w = babelHelpers.extends({}, S, {
          "aria-label": null,
          alt: (t = S == null ? void 0 : S["aria-label"]) != null ? t : "",
        }),
        A = d(
          function () {
            return _ != null && u == null ? p(_) : void 0;
          },
          [u, _],
        );
      return v(
        s.jsx(
          "img",
          babelHelpers.extends(
            {},
            w,
            {
              src: M,
              onLoad: function () {
                return T("ImageFinalRendered");
              },
              onError: function () {
                return T("ImageFailed");
              },
            },
            o("WebBloksStyle").getStyleProps(
              babelHelpers.extends(
                {},
                b,
                k,
                { objectFit: E },
                A != null ? { objectPosition: A } : null,
                { overflow: "hidden" },
              ),
            ),
          ),
        ),
      );
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  98,
);
