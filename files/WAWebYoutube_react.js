__d(
  "WAWebYoutube.react",
  [
    "Promise",
    "WAWebNoop",
    "WAWebTimeSpentLoggingNavigation",
    "asyncToGeneratorRuntime",
    "lodash",
    "react",
    "youtube-player",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useCallback,
      m = c.useEffect,
      p = c.useRef;
    function _(e, t) {
      var n, r;
      if (e.videoId !== t.videoId) return !0;
      var o = ((n = e.opts) == null ? void 0 : n.playerVars) || {},
        a = ((r = t.opts) == null ? void 0 : r.playerVars) || {};
      return o.start !== a.start || o.end !== a.end;
    }
    function f(e) {
      return babelHelpers.extends({}, e, {
        playerVars: babelHelpers.extends(
          {},
          e == null ? void 0 : e.playerVars,
          { autoplay: 0, start: 0, end: 0 },
        ),
      });
    }
    function g(e, t) {
      return !r("lodash").isEqual(
        f(e == null ? void 0 : e.opts),
        f(t == null ? void 0 : t.opts),
      );
    }
    function h(e, t) {
      return e.id === t.id || e.className === t.className;
    }
    var y = {
      UNSTARTED: -1,
      ENDED: 0,
      PLAYING: 1,
      PAUSED: 2,
      BUFFERING: 3,
      CUED: 5,
    };
    function C(t) {
      var a = t.onReady,
        i = a === void 0 ? r("WAWebNoop") : a,
        l = t.onError,
        s = l === void 0 ? r("WAWebNoop") : l,
        c = t.onStateChange,
        f = c === void 0 ? r("WAWebNoop") : c,
        C = t.onEnd,
        b = C === void 0 ? r("WAWebNoop") : C,
        v = t.onPlay,
        S = v === void 0 ? r("WAWebNoop") : v,
        R = t.onPause,
        L = R === void 0 ? r("WAWebNoop") : R,
        E = t.onPlaybackRateChange,
        k = E === void 0 ? r("WAWebNoop") : E,
        I = t.onPlaybackQualityChange,
        T = I === void 0 ? r("WAWebNoop") : I,
        D = t.opts,
        x = D === void 0 ? { playerVars: {} } : D,
        $ = t.videoId,
        P = t.id,
        N = P === void 0 ? null : P,
        M = t.className,
        w = M === void 0 ? null : M,
        A = t.containerClassName,
        F = A === void 0 ? "" : A,
        O = p(null),
        B = p(null),
        W = p([]),
        q = p(t),
        U = d(
          function (e) {
            return i(e);
          },
          [i],
        ),
        V = d(
          function (e) {
            return s(e);
          },
          [s],
        ),
        H = d(
          function (e) {
            switch ((f(e), e.data)) {
              case y.ENDED:
                b(e);
                break;
              case y.PLAYING:
                S(e);
                break;
              case y.PAUSED:
                L(e);
                break;
              default:
                return;
            }
          },
          [b, L, S, f],
        ),
        G = d(
          function (e) {
            return k(e);
          },
          [k],
        ),
        z = d(
          function (e) {
            return T(e);
          },
          [T],
        ),
        j = d(
          function () {
            var e,
              t,
              n,
              o,
              a = babelHelpers.extends({}, x, { videoId: $ });
            ((B.current = r("youtube-player")(O.current, a)),
              W.current.push(
                B.current.on("ready", U),
                (e = B.current) == null ? void 0 : e.on("error", V),
                (t = B.current) == null ? void 0 : t.on("stateChange", H),
                (n = B.current) == null
                  ? void 0
                  : n.on("playbackRateChange", G),
                (o = B.current) == null
                  ? void 0
                  : o.on("playbackQualityChange", z),
              ));
          },
          [V, z, G, U, H, x, $],
        );
      m(function () {
        return (
          j(),
          function () {
            var e;
            (W.current.filter(Boolean).forEach(function (e) {
              var t;
              (t = B.current) == null || t.off(e);
            }),
              (e = B.current) == null || e.destroy());
          }
        );
      }, []);
      var K = d(
          function () {
            var t, r;
            return (t =
              (r = B.current) == null ? void 0 : r.destroy().then(j)) != null
              ? t
              : (e || (e = n("Promise"))).resolve();
          },
          [j],
        ),
        Q = d(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e,
              t = yield (e = B.current) == null ? void 0 : e.getIframe();
            (N
              ? t == null || t.setAttribute("id", N)
              : t == null || t.removeAttribute("id"),
              w
                ? t == null || t.setAttribute("class", w)
                : t == null || t.removeAttribute("class"));
          }),
          [w, N],
        ),
        X = d(
          function () {
            var e;
            if ($ == null) {
              var t;
              (t = B.current) == null || t.stopVideo();
              return;
            }
            var n = !1,
              r,
              o;
            "playerVars" in x &&
              ((n = x.playerVars.autoplay === 1),
              "start" in x.playerVars && (r = x.playerVars.start),
              "end" in x.playerVars && (o = x.playerVars.end));
            var a = { videoId: $, startSeconds: r, endSeconds: o };
            if (n) {
              var i;
              (i = B.current) == null || i.loadVideoById(a);
              return;
            }
            (e = B.current) == null || e.cueVideoById(a);
          },
          [x, $],
        );
      return (
        m(
          function () {
            var e = q.current;
            (h(e, t) && Q(), g(e, t) && K(), _(e, t) && X(), (q.current = t));
          },
          [t, K, Q, X],
        ),
        o("WAWebTimeSpentLoggingNavigation").useTsNavigation({
          surface: "youtube-player",
        }),
        u.jsx("span", {
          className: F,
          children: u.jsx("div", { id: N, className: w, ref: O }),
        })
      );
    }
    ((C.displayName = C.name + " [from " + i.id + "]"), (l.default = C));
  },
  98,
);
