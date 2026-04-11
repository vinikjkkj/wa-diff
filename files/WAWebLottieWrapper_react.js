__d(
  "WAWebLottieWrapper.react",
  [
    "WAWebFlex.react",
    "WAWebLottieAnimationLoadable",
    "WAWebStickerLikeMsgPlaceholder.react",
    "react",
    "stylex",
    "useMergeRefs",
    "useWAWebIntersection",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useEffect,
      m = c.useRef,
      p = c.useState,
      _ = 3;
    function f(t) {
      var n,
        a = m(null),
        i = (n = t.maxLoopCount) != null ? n : _,
        l = m(i),
        s = m(!1),
        c = r("useWAWebIntersection")({
          root: null,
          rootMargin: "190px",
          threshold: 0,
        }),
        f = c[0],
        g = c[1].isIntersecting,
        h = r("useWAWebIntersection")({
          root: null,
          rootMargin: "190px",
          threshold: 0.99,
        }),
        y = h[0],
        C = h[1].isIntersecting,
        b = r("useMergeRefs")(f, y),
        v = p(g),
        S = v[0],
        R = v[1];
      g && !S && R(!0);
      var L = function () {
          return (l.current = i);
        },
        E = function () {
          var e, t;
          ((e = a.current) == null || e.stop(),
            (t = a.current) == null || t.setLoop(!1),
            (s.current = !1));
        },
        k = function () {
          var e;
          ((e = a.current) == null || e.removeOnLoopCompleteHandler(), E());
        },
        I = function () {
          var e;
          (e = a.current) == null || e.addOnLoopCompleteHandler(k);
        },
        T = function () {
          var e = l.current - 1;
          if (e !== 0) {
            l.current = e;
            return;
          }
          (k(), L());
        },
        D = function (t) {
          var e, n, r;
          if (
            ((e = a.current) == null || e.removeOnLoopCompleteHandler(),
            t.withLoopCount)
          ) {
            var o, i;
            ((o = a.current) == null || o.stop(),
              (i = a.current) == null || i.addOnLoopCompleteHandler(T));
          }
          ((s.current = !0),
            (n = a.current) == null || n.setLoop(!0),
            (r = a.current) == null || r.play());
        },
        x = function () {
          var e, t;
          ((e = a.current) == null || e.removeOnLoopCompleteHandler(),
            (t = a.current) == null || t.addOnLoopCompleteHandler(k),
            L());
        },
        $ = function () {
          var e;
          ((e = a.current) == null || e.removeOnLoopCompleteHandler(),
            E(),
            L());
        },
        P = function () {
          var e = document.visibilityState === "visible";
          C && e ? D({ withLoopCount: !0 }) : s.current && $();
        };
      return (
        o("useWAWebListener").useListener(document, "visibilitychange", P),
        d(
          function () {
            C ? D({ withLoopCount: !0 }) : s.current && x();
          },
          [C],
        ),
        u.jsx("div", {
          className: "x78zum5 xl56j7k x5yr21d",
          onMouseEnter: D,
          onMouseLeave: I,
          ref: b,
          children: u.jsx(o("WAWebFlex.react").FlexColumn, {
            justify: "center",
            align: "center",
            xstyle: t.lottieWrapperXStyle,
            testid: void 0,
            children:
              S &&
              u.jsx(o("WAWebLottieAnimationLoadable").LottieAnimation, {
                autoplay: C,
                loop: t.maxLoopCount === 1 ? !1 : i,
                ref: a,
                xstyle: t.lottieSVGContainerXStyle,
                wrapperXstyle: t.lottieSVGContainerWrapperXStyle,
                path: t.path,
                data: t.data,
                fallback: u.jsx(r("WAWebStickerLikeMsgPlaceholder.react"), {
                  className: (e || (e = r("stylex")))(
                    t.placeholderContainerXStyle,
                  ),
                }),
                placeholder: u.jsx(r("WAWebStickerLikeMsgPlaceholder.react"), {
                  className: (e || (e = r("stylex")))(
                    t.placeholderContainerXStyle,
                  ),
                }),
              }),
          }),
        })
      );
    }
    f.displayName = f.name + " [from " + i.id + "]";
    var g = f;
    l.default = g;
  },
  98,
);
