__d(
  "WAWebVideoAutoplayManager.react",
  [
    "VideoAutoplayLocalScopeProvider.react",
    "VideoPlayerAutoplayContexts",
    "VideoPlayerAutoplayRulesProvider",
    "react",
    "react-compiler-runtime",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useMemo,
      m = u.useRef,
      p = o("VideoPlayerAutoplayRulesProvider").makeVideoPlayerAutoplayRules(
        [],
      );
    function _(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.children,
        a = e.disableAutoplayManagement,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = new Map()), (t[0] = i))
        : (i = t[0]);
      var l = m(i),
        u = m(null),
        c;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = function (t) {
            return { selectedAutoplayVideoSymbol: u.current };
          }),
          (t[1] = c))
        : (c = t[1]);
      var d = c,
        _;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = function (t, n, r, o, a, i) {
            l.current.set(t, {
              controller: o,
              shouldAutoplayManageVideo: i,
              symbol: t,
            });
          }),
          (t[2] = _))
        : (_ = t[2]);
      var f = _,
        g;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = function (t) {
            (l.current.delete(t), u.current === t && (u.current = null));
          }),
          (t[3] = g))
        : (g = t[3]);
      var h = g,
        y;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = function (t, n, o) {
            var e = l.current.get(t);
            if (e != null) {
              var a = e.controller,
                i = e.shouldAutoplayManageVideo;
              if (n === "ALLOW" && i && u.current !== t) {
                var s = a.getCurrentState(),
                  c = s.paused;
                c &&
                  ((u.current = t),
                  r("setTimeout")(function () {
                    var e = a.getCurrentState();
                    e.paused && a.play("autoplay_initiated");
                  }, 0));
              } else n !== "ALLOW" && u.current === t && (u.current = null);
            }
          }),
          (t[4] = y))
        : (y = t[4]);
      var C = y,
        b;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = {
            getAutoplayManagerDebugInfo: d,
            register: f,
            unregister: h,
            update: C,
          }),
          (t[5] = b))
        : (b = t[5]);
      var v = b,
        S;
      t[6] !== a
        ? ((S =
            a === !0
              ? p
              : o("VideoPlayerAutoplayRulesProvider").provideAutoplayRules(
                  "wa_web",
                )),
          (t[6] = a),
          (t[7] = S))
        : (S = t[7]);
      var R = S,
        L;
      return (
        t[8] !== R || t[9] !== n
          ? ((L = s.jsx(
              o("VideoPlayerAutoplayContexts").AutoplayApiContext.Provider,
              {
                value: v,
                children: s.jsx(r("VideoAutoplayLocalScopeProvider.react"), {
                  autoplayLocalRules: R,
                  children: n,
                }),
              },
            )),
            (t[8] = R),
            (t[9] = n),
            (t[10] = L))
          : (L = t[10]),
        L
      );
    }
    l.default = _;
  },
  98,
);
