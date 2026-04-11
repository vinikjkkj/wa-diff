__d(
  "WAWebLottieAnimation.react",
  ["WAWebUseLottie.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = s.useImperativeHandle;
    function d(t) {
      var n = o("react-compiler-runtime").c(5),
        r,
        a;
      n[0] !== t
        ? ((a = t.ref),
          (r = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = r),
          (n[2] = a))
        : ((r = n[1]), (a = n[2]));
      var i = o("WAWebUseLottie.react").useLottie(r),
        l = i[0],
        s = i[1],
        u;
      return (
        n[3] !== s
          ? ((u = function () {
              return s;
            }),
            (n[3] = s),
            (n[4] = u))
          : (u = n[4]),
        c(a, u),
        l
      );
    }
    l.default = d;
  },
  98,
);
