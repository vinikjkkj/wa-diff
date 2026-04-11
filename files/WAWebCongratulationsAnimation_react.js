__d(
  "WAWebCongratulationsAnimation.react",
  [
    "WAWebCongratulationsAnimationsUtils",
    "WAWebLottieAnimationLoadable",
    "react",
    "react-compiler-runtime",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useImperativeHandle,
      d = u.useRef,
      m = u.useState,
      p = {
        lottieComponent: { height: "x5yr21d", width: "xh8yej3", $$css: !0 },
      };
    function _(e) {
      var t = o("react-compiler-runtime").c(12),
        n = e.onAnimationComplete,
        a = e.ref,
        i = m(!1),
        l = i[0],
        u = i[1],
        _ = m(null),
        f = _[0],
        g = _[1],
        h = d(null),
        y = r("useWAWebUnmountSignal")(),
        C;
      t[0] !== n || t[1] !== y.aborted
        ? ((C = function () {
            (n == null || n(), !y.aborted && u(!1));
          }),
          (t[0] = n),
          (t[1] = y.aborted),
          (t[2] = C))
        : (C = t[2]);
      var b = C,
        v;
      t[3] !== y.aborted
        ? ((v = function (t) {
            if (!y.aborted) {
              var e = o(
                "WAWebCongratulationsAnimationsUtils",
              ).getCongratulationsAnimationPath(t.animation);
              (g(e), u(!0));
            }
          }),
          (t[3] = y.aborted),
          (t[4] = v))
        : (v = t[4]);
      var S = v,
        R;
      (t[5] !== S
        ? ((R = function () {
            return { triggerAnimation: S };
          }),
          (t[5] = S),
          (t[6] = R))
        : (R = t[6]),
        c(a, R));
      var L = null;
      if (l && f != null) {
        var E, k;
        t[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((E = {
              className:
                "x10l6tqk xc9l9hb x47corl x5yr21d xh8yej3 x78zum5 xl56j7k",
            }),
            (k = { className: "x5yr21d xktia5q" }),
            (t[7] = E),
            (t[8] = k))
          : ((E = t[7]), (k = t[8]));
        var I;
        (t[9] !== f || t[10] !== b
          ? ((I = s.jsx(
              "div",
              babelHelpers.extends({}, E, {
                children: s.jsx(
                  "div",
                  babelHelpers.extends({}, k, {
                    children: s.jsx(
                      o("WAWebLottieAnimationLoadable").LottieAnimation,
                      {
                        ref: h,
                        autoplay: !0,
                        path: f,
                        onComplete: b,
                        xstyle: p.lottieComponent,
                      },
                    ),
                  }),
                ),
              }),
            )),
            (t[9] = f),
            (t[10] = b),
            (t[11] = I))
          : (I = t[11]),
          (L = I));
      }
      return L;
    }
    var f = _;
    l.CongratulationsAnimation = f;
  },
  98,
);
