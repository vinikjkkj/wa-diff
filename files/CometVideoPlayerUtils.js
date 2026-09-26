__d(
  "CometVideoPlayerUtils",
  [
    "CometUFIVideoPlayerContext",
    "CometUFIVideoPlayerPortableIDContext",
    "VideoPlayerHooks",
    "react",
    "react-compiler-runtime",
    "useCometVideoPlayerStateAndController",
    "useVideoPlayerPortalingPassthroughProps",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useContext,
      p = c.useEffect,
      _ = c.useState;
    function f(e) {
      var t,
        n = o("react-compiler-runtime").c(6),
        a = e.children,
        i = _(null),
        l = i[0],
        s = l == null || (t = l.data) == null ? void 0 : t.portableVideoID,
        c;
      n[0] !== a || n[1] !== s
        ? ((c = u.jsx(r("CometUFIVideoPlayerPortableIDContext").Provider, {
            value: s,
            children: a,
          })),
          (n[0] = a),
          (n[1] = s),
          (n[2] = c))
        : (c = n[2]);
      var d;
      return (
        n[3] !== i || n[4] !== c
          ? ((d = u.jsx(r("CometUFIVideoPlayerContext").Provider, {
              value: i,
              children: c,
            })),
            (n[3] = i),
            (n[4] = c),
            (n[5] = d))
          : (d = n[5]),
        d
      );
    }
    function g(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.data,
        a = (s || (s = o("VideoPlayerHooks"))).useController(),
        i = r("useVideoPlayerPortalingPassthroughProps")(),
        l = m(r("CometUFIVideoPlayerContext")),
        u = l[1],
        c,
        d;
      return (
        t[0] !== a || t[1] !== n || t[2] !== i || t[3] !== u
          ? ((c = function () {
              return (
                u({ controller: a, data: babelHelpers.extends({}, n, i) }),
                function () {
                  u(null);
                }
              );
            }),
            (d = [a, n, i, u]),
            (t[0] = a),
            (t[1] = n),
            (t[2] = i),
            (t[3] = u),
            (t[4] = c),
            (t[5] = d))
          : ((c = t[4]), (d = t[5])),
        p(c, d),
        null
      );
    }
    function h() {
      var e = o("react-compiler-runtime").c(2),
        t = r("useCometVideoPlayerStateAndController")(),
        n;
      return (
        e[0] !== t
          ? ((n = function () {
              return t == null
                ? null
                : Math.floor(t.controller.getPlayheadPosition());
            }),
            (e[0] = t),
            (e[1] = n))
          : (n = e[1]),
        n
      );
    }
    function y() {
      var e = o("react-compiler-runtime").c(2),
        t = r("useCometVideoPlayerStateAndController")(),
        n;
      return (
        e[0] !== t
          ? ((n = function () {
              return t == null
                ? null
                : t.controller.getCurrentState().latencyLevel;
            }),
            (e[0] = t),
            (e[1] = n))
          : (n = e[1]),
        n
      );
    }
    function C() {
      var e = o("react-compiler-runtime").c(2),
        t = r("useCometVideoPlayerStateAndController")(),
        n;
      return (
        e[0] !== t
          ? ((n = function () {
              return t == null
                ? null
                : t.controller.getCurrentState().ullIneligibilityReason;
            }),
            (e[0] = t),
            (e[1] = n))
          : (n = e[1]),
        n
      );
    }
    ((l.CometVideoPlayerControllerAndStateContextProvider = f),
      (l.CometVideoPlayerControllerAndStateExtractor = g),
      (l.useGetCometUFIVideoPlayerTimestampInteger = h),
      (l.useGetCometGFIVideoPlayerLatencyLevel = y),
      (l.useGetCometGFIVideoPlayerULLIneligibilityReason = C));
  },
  98,
);
