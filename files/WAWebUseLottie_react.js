__d(
  "WAWebUseLottie.react",
  [
    "invariant",
    "$InternalEnum",
    "WAWeb-lottie-light",
    "WAWebNetworkResourceCache",
    "lodash",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useEffect,
      _ = d.useRef,
      f = d.useState,
      g = n("$InternalEnum")({ SVG: "svg", Canvas: "canvas" });
    function h(t) {
      var n = t.autoplay,
        a = n === void 0 ? !1 : n,
        i = t.data,
        l = t.direction,
        u = l === void 0 ? 1 : l,
        d = t.fallback,
        h = d === void 0 ? null : d,
        y = t.loop,
        C = y === void 0 ? !1 : y,
        b = t.path,
        v = t.placeholder,
        S = v === void 0 ? null : v,
        R = t.renderer,
        L = R === void 0 ? g.SVG : R,
        E = t.speed,
        k = E === void 0 ? 1 : E,
        I = t.xstyle,
        T = t.wrapperXstyle,
        D = t.onComplete,
        x = t.onLoopComplete,
        $ = f(i),
        P = $[0],
        N = $[1];
      (i == null && b != null) || (i != null && b == null) || s(0, 56323);
      var M = _(),
        w = _(),
        A = o("WAWebNetworkResourceCache").getNetworkResourceCache().cache,
        F = f(b != null && (A == null ? void 0 : A.isCached(b)) === !1),
        O = F[0],
        B = F[1],
        W = f(!1),
        q = W[0],
        U = W[1];
      p(
        function () {
          N(i);
        },
        [i],
      );
      var V = m(function () {
          var e;
          (e = M.current) == null || e.play();
        }, []),
        H = m(function () {
          var e;
          (e = M.current) == null || e.stop();
        }, []),
        G = m(function () {
          var e;
          (e = M.current) == null || e.pause();
        }, []),
        z = m(function (e, t) {
          var n;
          (n = M.current) == null || n.goToAndPlay(e, t);
        }, []),
        j = m(function (e, t) {
          var n;
          (n = M.current) == null || n.goToAndStop(e, t);
        }, []),
        K = m(function (e) {
          var t;
          (t = M.current) == null || t.getDuration(e);
        }, []),
        Q = m(function (e) {
          M.current != null && (M.current.loop = e);
        }, []),
        X = m(function (e) {
          var t;
          (t = M.current) == null || t.addEventListener("loopComplete", e);
        }, []),
        Y = m(function () {
          var e;
          (e = M.current) == null || e.removeEventListener("loopComplete");
        }, []),
        J = {
          play: V,
          stop: H,
          pause: G,
          goToAndPlay: z,
          goToAndStop: j,
          getDuration: K,
          setLoop: Q,
          addOnLoopCompleteHandler: X,
          removeOnLoopCompleteHandler: Y,
        };
      (p(
        function () {
          b != null &&
            b !== "" &&
            (A == null ||
              A.getOrRun(b)
                .then(function (e) {
                  (N(e), B(!1));
                })
                .catch(function (e) {
                  return U(!0);
                }));
        },
        [A, b],
      ),
        p(
          function () {
            var e = r("WAWeb-lottie-light").loadAnimation({
              container: w.current,
              animationData: r("lodash").cloneDeep(P),
              renderer: L,
              loop: C,
              autoplay: a,
            });
            (e.setSubframe(!1), (M.current = e));
            var t = [
                {
                  name: "data_failed",
                  handler: function () {
                    return U(!0);
                  },
                },
                {
                  name: "complete",
                  handler: function () {
                    D == null || D();
                  },
                },
                {
                  name: "loopComplete",
                  handler: function () {
                    x == null || x();
                  },
                },
              ],
              n = t.map(function (t) {
                return (
                  e.addEventListener(t.name, t.handler),
                  function () {
                    return e.removeEventListener(t.name, t.handler);
                  }
                );
              });
            return function () {
              n.forEach(function (e) {
                return e();
              });
              try {
                e.destroy();
              } catch (e) {}
            };
          },
          [P, L, C, a, D, x],
        ),
        p(
          function () {
            var e;
            (e = M.current) == null || e.setSpeed(k);
          },
          [k],
        ),
        p(
          function () {
            var e;
            (e = M.current) == null || e.setDirection(u);
          },
          [u],
        ));
      var Z = O && !q,
        ee = c.jsxs(
          "div",
          babelHelpers.extends({}, (e || (e = r("stylex"))).props(T), {
            children: [
              c.jsx("div", babelHelpers.extends({}, e.props(I), { ref: w })),
              Z ? S : null,
              q ? h : null,
            ],
          }),
        );
      return [ee, J];
    }
    ((l.Renderer = g), (l.useLottie = h));
  },
  98,
);
