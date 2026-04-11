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
        L = r.getValues(),
        E = L.contrib;
      b.position === "absolute" &&
        (b.top === "0px" && b.bottom === "0px" && (b.height = "100%"),
        b.left === "0px" && b.right === "0px" && (b.width = "100%"));
      var k = m(i),
        I = {};
      if (u != null && l != null) {
        var T = k === "fill" ? "100% 100%" : k;
        I = {
          WebkitMaskImage: "url(" + l + ")",
          WebkitMaskSize: T,
          maskImage: "url(" + l + ")",
          maskSize: T,
          backgroundColor: o("WebBloksUtils").getRGBColorWithTheme(u, R),
          objectPosition: "10000px 10000px",
        };
      }
      var D = function (t) {
        f != null && y(r, f, [t, Date.now(), h]);
      };
      c(function () {
        D("ImageRequested");
      }, []);
      var x = E == null ? void 0 : E.get("base_sixty_four_encoded_image");
      if (x != null) {
        var $ = x.charAt(0),
          P = "";
        switch ($) {
          case "/":
            P = "jpg";
            break;
          case "i":
            P = "png";
            break;
          case "R":
            P = "gif";
            break;
          case "U":
            P = "webp";
            break;
          case "P":
            P = "svg";
            break;
        }
        x = "data:image/" + P + ";base64," + x;
      }
      var N = R === o("WebBloksTheme").THEME.light || a == null ? l : a,
        M = typeof N == "string" && N ? N.replace(/\\/g, "") : null,
        w = x != null ? x : M,
        A = babelHelpers.extends({}, S, {
          "aria-label": null,
          alt: (t = S == null ? void 0 : S["aria-label"]) != null ? t : "",
        }),
        F = d(
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
            A,
            {
              src: w,
              onLoad: function () {
                return D("ImageFinalRendered");
              },
              onError: function () {
                return D("ImageFailed");
              },
            },
            o("WebBloksStyle").getStyleProps(
              babelHelpers.extends(
                {},
                b,
                I,
                { objectFit: k },
                F != null ? { objectPosition: F } : null,
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
