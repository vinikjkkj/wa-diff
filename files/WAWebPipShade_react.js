__d(
  "WAWebPipShade.react",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(12),
        n = e.ref,
        r = e.theme,
        a = null;
      e: switch (r) {
        case "upper": {
          var i;
          t[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((i = {
                className:
                  "x1o0tod x47corl x10l6tqk xh8yej3 xwzfr38 x1xw4htp x13vifvy",
              }),
              (t[0] = i))
            : (i = t[0]);
          var l;
          (t[1] !== n
            ? ((l = s.jsx(
                "div",
                babelHelpers.extends({ ref: n }, i),
                "upper-shade",
              )),
              (t[1] = n),
              (t[2] = l))
            : (l = t[2]),
            (a = l));
          break e;
        }
        case "lower": {
          var u;
          t[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((u = {
                className:
                  "x1o0tod x47corl x10l6tqk xh8yej3 xwzfr38 x1osfgkz x1ey2m1c",
              }),
              (t[3] = u))
            : (u = t[3]);
          var c;
          (t[4] !== n
            ? ((c = s.jsx(
                "div",
                babelHelpers.extends({ ref: n }, u),
                "lower-shade",
              )),
              (t[4] = n),
              (t[5] = c))
            : (c = t[5]),
            (a = c));
          break e;
        }
        case "full-rounded": {
          var d;
          t[6] === Symbol.for("react.memo_cache_sentinel")
            ? ((d = {
                className:
                  "x1o0tod x47corl x10l6tqk xh8yej3 xmihuf0 x5yr21d x13vifvy xrxyp3c xv0oops x1isl5vh xn8zj9a",
              }),
              (t[6] = d))
            : (d = t[6]);
          var m;
          (t[7] !== n
            ? ((m = s.jsx(
                "div",
                babelHelpers.extends({ ref: n }, d),
                "full-rounded-shade",
              )),
              (t[7] = n),
              (t[8] = m))
            : (m = t[8]),
            (a = m));
          break e;
        }
        case "full-sharp": {
          var p;
          t[9] === Symbol.for("react.memo_cache_sentinel")
            ? ((p = {
                className:
                  "x1o0tod x47corl x10l6tqk xh8yej3 xmihuf0 x5yr21d x13vifvy",
              }),
              (t[9] = p))
            : (p = t[9]);
          var _;
          (t[10] !== n
            ? ((_ = s.jsx(
                "div",
                babelHelpers.extends({ ref: n }, p),
                "full-sharp-shade",
              )),
              (t[10] = n),
              (t[11] = _))
            : (_ = t[11]),
            (a = _));
        }
      }
      return a;
    }
    l.default = u;
  },
  98,
);
