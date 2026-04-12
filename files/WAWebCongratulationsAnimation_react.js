__d(
  "WAWebCongratulationsAnimation.react",
  [
    "WAWebCongratulationsAnimationsUtils",
    "WAWebLottieAnimationLoadable",
    "react",
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
      var t = e.onAnimationComplete,
        n = e.ref,
        a = m(!1),
        i = a[0],
        l = a[1],
        u = m(null),
        _ = u[0],
        f = u[1],
        g = d(null),
        h = r("useWAWebUnmountSignal")(),
        y = function () {
          (t == null || t(), !h.aborted && l(!1));
        },
        C = function (t) {
          if (!h.aborted) {
            var e = o(
              "WAWebCongratulationsAnimationsUtils",
            ).getCongratulationsAnimationPath(t.animation);
            (f(e), l(!0));
          }
        };
      c(n, function () {
        return { triggerAnimation: C };
      });
      var b = null;
      return (
        i &&
          _ != null &&
          (b = s.jsx("div", {
            className:
              "x10l6tqk xc9l9hb x47corl x5yr21d xh8yej3 x78zum5 xl56j7k",
            children: s.jsx("div", {
              className: "x5yr21d xktia5q",
              children: s.jsx(
                o("WAWebLottieAnimationLoadable").LottieAnimation,
                {
                  ref: g,
                  autoplay: !0,
                  path: _,
                  onComplete: y,
                  xstyle: p.lottieComponent,
                },
              ),
            }),
          })),
        b
      );
    }
    _.displayName = _.name + " [from " + i.id + "]";
    var f = _;
    l.CongratulationsAnimation = f;
  },
  98,
);
