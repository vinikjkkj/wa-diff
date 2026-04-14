__d(
  "WAWebPipShade.react",
  ["react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.ref,
        n = e.theme,
        r = null;
      switch (n) {
        case "upper":
          r = s.jsx(
            "div",
            {
              ref: t,
              className:
                "x1o0tod x47corl x10l6tqk xh8yej3 xwzfr38 x1xw4htp x13vifvy",
            },
            "upper-shade",
          );
          break;
        case "lower":
          r = s.jsx(
            "div",
            {
              ref: t,
              className:
                "x1o0tod x47corl x10l6tqk xh8yej3 xwzfr38 x1osfgkz x1ey2m1c",
            },
            "lower-shade",
          );
          break;
        case "full-rounded":
          r = s.jsx(
            "div",
            {
              ref: t,
              className:
                "x1o0tod x47corl x10l6tqk xh8yej3 xmihuf0 x5yr21d x13vifvy xrxyp3c xv0oops x1isl5vh xn8zj9a",
            },
            "full-rounded-shade",
          );
          break;
        case "full-sharp":
          r = s.jsx(
            "div",
            {
              ref: t,
              className:
                "x1o0tod x47corl x10l6tqk xh8yej3 xmihuf0 x5yr21d x13vifvy",
            },
            "full-sharp-shade",
          );
          break;
      }
      return r;
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
