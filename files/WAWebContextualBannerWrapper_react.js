__d(
  "WAWebContextualBannerWrapper.react",
  [
    "WAWebContextualBanner.react",
    "WAWebContextualBannerConfig",
    "WAWebVelocityTransitionGroup",
    "react",
    "react-compiler-runtime",
    "useVisibility",
    "useWAWebCallbackOnce",
    "useWAWebContextualBanner",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useState;
    function m(e) {
      var t = o("react-compiler-runtime").c(35),
        n = e.bannerListOrderedByPriority,
        a;
      t[0] !== n ? ((a = n.map(p)), (t[0] = n), (t[1] = a)) : (a = t[1]);
      var i = r("useWAWebContextualBanner")(a),
        l = i[0],
        u = i[1],
        c = i[2],
        m = i[3],
        _ = i[4],
        f;
      t[2] !== n || t[3] !== l
        ? ((f = function () {
            return n.find(function (e) {
              var t = e.id;
              return l(t);
            });
          }),
          (t[2] = n),
          (t[3] = l),
          (t[4] = f))
        : (f = t[4]);
      var g = f,
        h = d(g),
        y = h[0],
        C = h[1],
        b;
      t[5] !== y ? ((b = [y]), (t[5] = y), (t[6] = b)) : (b = t[6]);
      var v = r("useWAWebCallbackOnce")(u, b),
        S;
      t[7] !== y || t[8] !== v
        ? ((S = {
            onVisible: function () {
              y && v(y.id);
            },
          }),
          (t[7] = y),
          (t[8] = v),
          (t[9] = S))
        : (S = t[9]);
      var R = r("useVisibility")(S),
        L = R[0],
        E;
      t[10] !== g
        ? ((E = function () {
            C(g());
          }),
          (t[10] = g),
          (t[11] = E))
        : (E = t[11]);
      var k = E;
      if (y != null) {
        var I;
        t[12] !== y.id || t[13] !== l
          ? ((I = l(y.id)), (t[12] = y.id), (t[13] = l), (t[14] = I))
          : (I = t[14]);
        var T;
        t[15] !== y.id
          ? ((T = o("WAWebContextualBannerConfig").getContextualBannerConfig(
              y.id,
            )),
            (t[15] = y.id),
            (t[16] = T))
          : (T = t[16]);
        var D;
        t[17] !== y || t[18] !== c || t[19] !== k
          ? ((D = function () {
              (c(y.id), y.onClick == null || y.onClick(), k());
            }),
            (t[17] = y),
            (t[18] = c),
            (t[19] = k),
            (t[20] = D))
          : (D = t[20]);
        var x;
        t[21] !== y.id || t[22] !== m || t[23] !== k
          ? ((x = function () {
              (m(y.id), k());
            }),
            (t[21] = y.id),
            (t[22] = m),
            (t[23] = k),
            (t[24] = x))
          : (x = t[24]);
        var $;
        t[25] !== y.id || t[26] !== _
          ? (($ = function () {
              _(y.id);
            }),
            (t[25] = y.id),
            (t[26] = _),
            (t[27] = $))
          : ($ = t[27]);
        var P;
        if (
          t[28] !== I ||
          t[29] !== T ||
          t[30] !== D ||
          t[31] !== x ||
          t[32] !== $ ||
          t[33] !== L
        ) {
          var N = s.jsx(r("WAWebContextualBanner.react"), {
            ref: L,
            canShow: I,
            config: T,
            onClick: D,
            onDismiss: x,
            onReset: $,
          });
          ((P = s.jsx(r("WAWebVelocityTransitionGroup"), {
            transitionName: "butterbar",
            children: N,
          })),
            (t[28] = I),
            (t[29] = T),
            (t[30] = D),
            (t[31] = x),
            (t[32] = $),
            (t[33] = L),
            (t[34] = P));
        } else P = t[34];
        return P;
      }
    }
    function p(e) {
      return e.id;
    }
    l.default = m;
  },
  98,
);
