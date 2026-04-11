__d(
  "WAWebControlledAnimatedSticker.react",
  [
    "WANullthrows",
    "WAWebMediaAnimatedStickerUrlProvider",
    "react",
    "useWAWebIntersection",
    "useWAWebListener",
    "useWAWebSetModelValue",
    "useWAWebTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useImperativeHandle,
      m = u.useRef,
      p = u.useState;
    function _(e) {
      var t = e.className,
        n = e.downloadMedia,
        a = e.imageRef,
        i = e.label,
        l = e.mediaData,
        u = e.onClick,
        _ = e.onEnter,
        f = e.onFocus,
        g = e.placeholderRenderer,
        h = e.ref,
        y = e.startAnimation,
        C = m(),
        b = m(),
        v = m(),
        S = r("useWAWebIntersection")({
          root: null,
          rootMargin: "25px",
          threshold: 0.99,
        }),
        R = S[0],
        L = S[1].isIntersecting,
        E = p(y),
        k = E[0],
        I = E[1],
        T = p(!1),
        D = T[0],
        x = T[1],
        $ = o("useWAWebTimeout").useManualTimeout(function () {
          var e = b.current;
          (e == null || e.refreshBlob(), I(!1), (v.current = null));
        }),
        P = $[0],
        N = $[1],
        M = function () {
          var e = r("WANullthrows")(l.singleLoopDuration),
            t = (Date.now() - r("WANullthrows")(v.current)) % e,
            n = l.animationDuration - t;
          P(n);
        },
        w = function () {
          (N(), v.current == null && (v.current = Date.now()), I(!0));
        },
        A = function () {
          var e = document.visibilityState === "visible";
          L && e ? (w(), M()) : I(!1);
        };
      (o("useWAWebListener").useListener(document, "visibilitychange", A),
        c(
          function () {
            L ? (w(), M()) : v.current != null && M();
          },
          [L],
        ));
      var F = o("useWAWebSetModelValue").useSetModelValue(
          l,
          "animatedAsNewMsg",
        ),
        O = function () {
          if (!D) {
            var e = C.current,
              t = a.current;
            (e &&
              t &&
              ((e.width = t.naturalWidth / 2),
              (e.height = t.naturalHeight / 2),
              e.getContext("2d").drawImage(t, 0, 0, e.width, e.height)),
              y && ((v.current = Date.now()), M(), F(!0)),
              x(!0));
          }
        },
        B = function () {
          v.current != null && M();
        };
      d(h, function () {
        return { startAnimation: w };
      });
      var W = !D || k;
      return s.jsxs("div", {
        className: t,
        onMouseEnter: w,
        onKeyPress: _,
        onFocus: f,
        onMouseLeave: B,
        onClick: u,
        role: "button",
        tabIndex: 0,
        label: i,
        ref: R,
        children: [
          s.jsx(r("WAWebMediaAnimatedStickerUrlProvider"), {
            ref: b,
            mediaData: l,
            placeholderRenderer: g,
            downloadMedia: n,
            children: function (n) {
              return s.jsx("img", {
                alt: i,
                className: t,
                style: { display: W ? "block" : "none" },
                draggable: "false",
                src: n,
                ref: a,
                onLoad: O,
              });
            },
          }),
          s.jsx("canvas", {
            className: t,
            style: { display: W ? "none" : "block" },
            draggable: "false",
            ref: C,
          }),
        ],
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  98,
);
