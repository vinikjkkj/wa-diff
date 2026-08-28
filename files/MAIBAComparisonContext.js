__d(
  "MAIBAComparisonContext",
  [
    "RelayHooks",
    "RelayModern",
    "SaveResponseTonePreferenceMutation",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useContext,
      m = u.useMemo,
      p = u.useRef,
      _ = u.useState,
      f = {
        comparisonConversationId: null,
        dismiss: function () {},
        getConversationIds: function () {
          return {
            comparisonConversationId: null,
            externalConversationId: null,
          };
        },
        isActive: !1,
        preference: null,
        selectPreference: function () {},
        shouldSwap: !1,
        startComparison: function () {},
        updateComparisonConversationId: function () {},
        updateExternalConversationId: function () {},
      },
      g = s.createContext(f),
      h = null;
    function y() {
      return h;
    }
    function C(e) {
      h = e;
    }
    function b() {
      return d(g);
    }
    function v(e) {
      var t = o("react-compiler-runtime").c(19),
        n = e.children,
        r = e.initialPreference,
        a = _(!1),
        i = a[0],
        l = a[1],
        u = _(r != null ? r : null),
        c = u[0],
        d = u[1],
        m = _(!1),
        f = m[0],
        y = m[1],
        C = p(null),
        b = _(null),
        v = b[0],
        S = b[1],
        R = o("RelayHooks").useRelayEnvironment(),
        L;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = function (t) {
            C.current = t;
          }),
          (t[0] = L))
        : (L = t[0]);
      var E = L,
        k;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = function (t) {
            (S(t), (h = t));
          }),
          (t[1] = k))
        : (k = t[1]);
      var I = k,
        T;
      t[2] !== v
        ? ((T = function () {
            return {
              comparisonConversationId: v,
              externalConversationId: C.current,
            };
          }),
          (t[2] = v),
          (t[3] = T))
        : (T = t[3]);
      var D = T,
        x;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = function () {
            var e = new Uint8Array(1);
            (crypto.getRandomValues(e), y(e[0] < 128), l(!0), d(null));
          }),
          (t[4] = x))
        : (x = t[4]);
      var $ = x,
        P;
      t[5] !== v || t[6] !== R
        ? ((P = function (t, n, r) {
            var e;
            (d(t), l(!1));
            var a = n != null ? n : C.current,
              i = (e = r != null ? r : v) != null ? e : h;
            a != null &&
              o("SaveResponseTonePreferenceMutation")
                .saveResponseTonePreferenceMutation != null &&
              o("RelayModern").commitMutation(R, {
                mutation: o("SaveResponseTonePreferenceMutation")
                  .saveResponseTonePreferenceMutation,
                variables: {
                  comparison_conversation_id: i != null ? i : void 0,
                  external_conversation_id: a,
                  preference: t,
                },
              });
          }),
          (t[5] = v),
          (t[6] = R),
          (t[7] = P))
        : (P = t[7]);
      var N = P,
        M;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = function () {
            (l(!1), d(null));
          }),
          (t[8] = M))
        : (M = t[8]);
      var w = M,
        A;
      t[9] !== v ||
      t[10] !== D ||
      t[11] !== i ||
      t[12] !== c ||
      t[13] !== N ||
      t[14] !== f
        ? ((A = {
            comparisonConversationId: v,
            dismiss: w,
            getConversationIds: D,
            isActive: i,
            preference: c,
            selectPreference: N,
            shouldSwap: f,
            startComparison: $,
            updateComparisonConversationId: I,
            updateExternalConversationId: E,
          }),
          (t[9] = v),
          (t[10] = D),
          (t[11] = i),
          (t[12] = c),
          (t[13] = N),
          (t[14] = f),
          (t[15] = A))
        : (A = t[15]);
      var F = A,
        O;
      return (
        t[16] !== n || t[17] !== F
          ? ((O = s.jsx(g, { value: F, children: n })),
            (t[16] = n),
            (t[17] = F),
            (t[18] = O))
          : (O = t[18]),
        O
      );
    }
    ((l.getLastComparisonConversationId = y),
      (l.setLastComparisonConversationId = C),
      (l.useMAIBAComparisonContext = b),
      (l.MAIBAComparisonProvider = v));
  },
  98,
);
