__d(
  "WAWebUseLottie.react",
  [
    "invariant",
    "$InternalEnum",
    "WAWeb-lottie-light",
    "WAWebNetworkResourceCache",
    "lodash",
    "react",
    "react-compiler-runtime",
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
      var n = o("react-compiler-runtime").c(46),
        a = t.autoplay,
        i = t.data,
        l = t.direction,
        u = t.fallback,
        d = t.loop,
        m = t.path,
        h = t.placeholder,
        C = t.renderer,
        b = t.speed,
        v = t.xstyle,
        S = t.wrapperXstyle,
        R = t.onComplete,
        L = t.onLoopComplete,
        E = a === void 0 ? !1 : a,
        k = l === void 0 ? 1 : l,
        I = u === void 0 ? null : u,
        T = d === void 0 ? !1 : d,
        D = h === void 0 ? null : h,
        x = C === void 0 ? g.SVG : C,
        $ = b === void 0 ? 1 : b,
        P = f(i),
        N = P[0],
        M = P[1];
      (i == null && m != null) || (i != null && m == null) || s(0, 56323);
      var w = _(),
        A = _(),
        F,
        O,
        B;
      if (n[0] !== m) {
        var W;
        ((F = o("WAWebNetworkResourceCache").getNetworkResourceCache().cache),
          (O = f),
          (B = m != null && ((W = F) == null ? void 0 : W.isCached(m)) === !1),
          (n[0] = m),
          (n[1] = F),
          (n[2] = O),
          (n[3] = B));
      } else ((F = n[1]), (O = n[2]), (B = n[3]));
      var q = O(B),
        U = q[0],
        V = q[1],
        H = f(!1),
        G = H[0],
        z = H[1],
        j,
        K;
      (n[4] !== i
        ? ((j = function () {
            M(i);
          }),
          (K = [i]),
          (n[4] = i),
          (n[5] = j),
          (n[6] = K))
        : ((j = n[5]), (K = n[6])),
        p(j, K));
      var Q;
      n[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((Q = function () {
            var e;
            (e = w.current) == null || e.play();
          }),
          (n[7] = Q))
        : (Q = n[7]);
      var X = Q,
        Y;
      n[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((Y = function () {
            var e;
            (e = w.current) == null || e.stop();
          }),
          (n[8] = Y))
        : (Y = n[8]);
      var J = Y,
        Z;
      n[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((Z = function () {
            var e;
            (e = w.current) == null || e.pause();
          }),
          (n[9] = Z))
        : (Z = n[9]);
      var ee = Z,
        te;
      n[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((te = function (t, n) {
            var e;
            (e = w.current) == null || e.goToAndPlay(t, n);
          }),
          (n[10] = te))
        : (te = n[10]);
      var ne = te,
        re;
      n[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((re = function (t, n) {
            var e;
            (e = w.current) == null || e.goToAndStop(t, n);
          }),
          (n[11] = re))
        : (re = n[11]);
      var oe = re,
        ae;
      n[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((ae = function (t) {
            var e;
            (e = w.current) == null || e.getDuration(t);
          }),
          (n[12] = ae))
        : (ae = n[12]);
      var ie = ae,
        le;
      n[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((le = function (t) {
            w.current != null && (w.current.loop = t);
          }),
          (n[13] = le))
        : (le = n[13]);
      var se = le,
        ue;
      n[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((ue = function (t) {
            var e;
            (e = w.current) == null || e.addEventListener("loopComplete", t);
          }),
          (n[14] = ue))
        : (ue = n[14]);
      var ce = ue,
        de;
      n[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((de = function () {
            var e;
            (e = w.current) == null || e.removeEventListener("loopComplete");
          }),
          (n[15] = de))
        : (de = n[15]);
      var me = de,
        pe;
      n[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((pe = {
            play: X,
            stop: J,
            pause: ee,
            goToAndPlay: ne,
            goToAndStop: oe,
            getDuration: ie,
            setLoop: se,
            addOnLoopCompleteHandler: ce,
            removeOnLoopCompleteHandler: me,
          }),
          (n[16] = pe))
        : (pe = n[16]);
      var _e = pe,
        fe,
        ge;
      (n[17] !== F || n[18] !== m
        ? ((fe = function () {
            if (m != null && m !== "") {
              var e;
              (e = F) == null ||
                e
                  .getOrRun(m)
                  .then(function (e) {
                    (M(e), V(!1));
                  })
                  .catch(function (e) {
                    return z(!0);
                  });
            }
          }),
          (ge = [F, m]),
          (n[17] = F),
          (n[18] = m),
          (n[19] = fe),
          (n[20] = ge))
        : ((fe = n[19]), (ge = n[20])),
        p(fe, ge));
      var he, ye;
      (n[21] !== N ||
      n[22] !== E ||
      n[23] !== T ||
      n[24] !== R ||
      n[25] !== L ||
      n[26] !== x
        ? ((he = function () {
            var e = r("WAWeb-lottie-light").loadAnimation({
              container: A.current,
              animationData: r("lodash").cloneDeep(N),
              renderer: x,
              loop: T,
              autoplay: E,
            });
            (e.setSubframe(!1), (w.current = e));
            var t = [
                {
                  name: "data_failed",
                  handler: function () {
                    return z(!0);
                  },
                },
                {
                  name: "complete",
                  handler: function () {
                    R == null || R();
                  },
                },
                {
                  name: "loopComplete",
                  handler: function () {
                    L == null || L();
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
              n.forEach(y);
              try {
                e.destroy();
              } catch (e) {}
            };
          }),
          (ye = [N, x, T, E, R, L]),
          (n[21] = N),
          (n[22] = E),
          (n[23] = T),
          (n[24] = R),
          (n[25] = L),
          (n[26] = x),
          (n[27] = he),
          (n[28] = ye))
        : ((he = n[27]), (ye = n[28])),
        p(he, ye));
      var Ce, be;
      (n[29] !== $
        ? ((Ce = function () {
            var e;
            (e = w.current) == null || e.setSpeed($);
          }),
          (be = [$]),
          (n[29] = $),
          (n[30] = Ce),
          (n[31] = be))
        : ((Ce = n[30]), (be = n[31])),
        p(Ce, be));
      var ve, Se;
      (n[32] !== k
        ? ((ve = function () {
            var e;
            (e = w.current) == null || e.setDirection(k);
          }),
          (Se = [k]),
          (n[32] = k),
          (n[33] = ve),
          (n[34] = Se))
        : ((ve = n[33]), (Se = n[34])),
        p(ve, Se));
      var Re = U && !G,
        Le;
      n[35] !== S
        ? ((Le = (e || (e = r("stylex"))).props(S)), (n[35] = S), (n[36] = Le))
        : (Le = n[36]);
      var Ee;
      n[37] !== v
        ? ((Ee = (e || (e = r("stylex"))).props(v)), (n[37] = v), (n[38] = Ee))
        : (Ee = n[38]);
      var ke;
      n[39] !== Ee
        ? ((ke = c.jsx("div", babelHelpers.extends({}, Ee, { ref: A }))),
          (n[39] = Ee),
          (n[40] = ke))
        : (ke = n[40]);
      var Ie = Re ? D : null,
        Te = G ? I : null,
        De;
      if (n[41] !== Le || n[42] !== ke || n[43] !== Ie || n[44] !== Te) {
        var xe = c.jsxs(
          "div",
          babelHelpers.extends({}, Le, { children: [ke, Ie, Te] }),
        );
        ((De = [xe, _e]),
          (n[41] = Le),
          (n[42] = ke),
          (n[43] = Ie),
          (n[44] = Te),
          (n[45] = De));
      } else De = n[45];
      return De;
    }
    function y(e) {
      return e();
    }
    ((l.Renderer = g), (l.useLottie = h));
  },
  98,
);
