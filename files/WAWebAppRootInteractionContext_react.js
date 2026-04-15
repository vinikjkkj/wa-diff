__d(
  "WAWebAppRootInteractionContext.react",
  [
    "CometHeroHoldTrigger.react",
    "CometHeroInteractionIDContext",
    "CometHeroInteractionWithDiv.react",
    "InteractionTracing",
    "getInteractionIDWithInheritance",
    "react",
    "react-compiler-runtime",
    "useWAWebCometInteractionTracing",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.use,
      d = u.useCallback,
      m = u.useMemo,
      p = u.useState,
      _ = {
        completeManualyHoldInteraction: function () {},
        getActiveTrace: function () {},
        setManualInteractionHold: function () {},
        updateInteractionId: function () {},
      },
      f = s.createContext(_),
      g = {
        container: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          height: "x5yr21d",
          $$css: !0,
        },
      };
    function h(e) {
      var t = o("react-compiler-runtime").c(26),
        n = e.children,
        a = c(r("CometHeroInteractionIDContext")),
        i = p(!1),
        l = i[0],
        u = i[1],
        d = p(),
        m = d[0],
        _ = d[1],
        h;
      t[0] !== m
        ? ((h = function () {
            return m != null
              ? r("InteractionTracing").getPendingInteractionById(m)
              : null;
          }),
          (t[0] = m),
          (t[1] = h))
        : (h = t[1]);
      var y = h,
        C;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = function (t) {
            _(t);
          }),
          (t[2] = C))
        : (C = t[2]);
      var b = C,
        v;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = function () {
            u(!1);
          }),
          (t[3] = v))
        : (v = t[3]);
      var S = v,
        R;
      t[4] !== y
        ? ((R = {
            completeManualyHoldInteraction: S,
            getActiveTrace: y,
            setManualInteractionHold: u,
            updateInteractionId: b,
          }),
          (t[4] = y),
          (t[5] = R))
        : (R = t[5]);
      var L = R,
        E,
        k,
        I,
        T,
        D;
      if (t[6] !== L || t[7] !== m || t[8] !== a) {
        var x, $;
        I = r("getInteractionIDWithInheritance")(a, m);
        var P =
          I != null
            ? r("InteractionTracing").getPendingInteractionById(I)
            : null;
        ((k = f.Provider),
          (D = L),
          (E = r("CometHeroInteractionWithDiv.react")),
          (T =
            (x =
              P == null || ($ = P.getTrace()) == null
                ? void 0
                : $.tracePolicy) != null
              ? x
              : "AppRootInteraction"),
          (t[6] = L),
          (t[7] = m),
          (t[8] = a),
          (t[9] = E),
          (t[10] = k),
          (t[11] = I),
          (t[12] = T),
          (t[13] = D));
      } else ((E = t[9]), (k = t[10]), (I = t[11]), (T = t[12]), (D = t[13]));
      var N;
      t[14] !== l
        ? ((N = s.jsx(r("CometHeroHoldTrigger.react"), {
            description: "AppRoot interaction hold",
            hold: l,
          })),
          (t[14] = l),
          (t[15] = N))
        : (N = t[15]);
      var M;
      t[16] !== E || t[17] !== n || t[18] !== I || t[19] !== T || t[20] !== N
        ? ((M = s.jsxs(E, {
            interactionDesc: T,
            interactionUUID: I,
            observeTextMutation: !0,
            pageletName: "AppRoot",
            xstyle: g.container,
            children: [N, n],
          })),
          (t[16] = E),
          (t[17] = n),
          (t[18] = I),
          (t[19] = T),
          (t[20] = N),
          (t[21] = M))
        : (M = t[21]);
      var w;
      return (
        t[22] !== k || t[23] !== D || t[24] !== M
          ? ((w = s.jsx(k, { value: D, children: M })),
            (t[22] = k),
            (t[23] = D),
            (t[24] = M),
            (t[25] = w))
          : (w = t[25]),
        w
      );
    }
    function y(e, t, n, a) {
      var i = o("react-compiler-runtime").c(12),
        l = t === void 0 ? !1 : t,
        s = n === void 0 ? !1 : n,
        u = a === void 0 ? 60 : a,
        d = c(f),
        m = d.setManualInteractionHold,
        p = d.updateInteractionId,
        _ = r("useWAWebCometInteractionTracing")(e, s, u),
        g = _.failInteraction,
        h = _.startInteraction,
        y;
      i[0] !== l || i[1] !== m || i[2] !== h || i[3] !== p
        ? ((y = function (t) {
            (l && m(!0),
              h(function (e) {
                (p(e.getTraceId()), t && t(e));
              }));
          }),
          (i[0] = l),
          (i[1] = m),
          (i[2] = h),
          (i[3] = p),
          (i[4] = y))
        : (y = i[4]);
      var C = y,
        b;
      i[5] !== l || i[6] !== m
        ? ((b = function () {
            l && m(!1);
          }),
          (i[5] = l),
          (i[6] = m),
          (i[7] = b))
        : (b = i[7]);
      var v = b,
        S;
      return (
        i[8] !== g || i[9] !== C || i[10] !== v
          ? ((S = {
              failInteraction: g,
              startInteraction: C,
              stopInteraction: v,
            }),
            (i[8] = g),
            (i[9] = C),
            (i[10] = v),
            (i[11] = S))
          : (S = i[11]),
        S
      );
    }
    function C() {
      return c(f);
    }
    ((l.WAWebAppRootInteractionContextProvider = h),
      (l.useInteractionWithAppRootContext = y),
      (l.useWAWebAppRootInteractionContext = C));
  },
  98,
);
