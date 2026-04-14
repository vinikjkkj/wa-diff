__d(
  "WAWebLottieAnimation.react",
  ["WAWebUseLottie.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = s.useImperativeHandle;
    function d(t) {
      var n = t.ref,
        r = babelHelpers.objectWithoutPropertiesLoose(t, e),
        a = o("WAWebUseLottie.react").useLottie(r),
        i = a[0],
        l = a[1];
      return (
        c(n, function () {
          return l;
        }),
        i
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
