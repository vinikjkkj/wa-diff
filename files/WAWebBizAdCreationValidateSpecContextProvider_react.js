__d(
  "WAWebBizAdCreationValidateSpecContextProvider.react",
  [
    "FBImmer",
    "FBLogger",
    "RelayHooks",
    "WAWebBizAdCreationSpecContext",
    "WAWebBizAdCreationValidateSpecContext",
    "WAWebBizAdCreationValidateSpecContextProviderQuery.graphql",
    "WAWebBizAdCreationValidationStateEnum",
    "getWAWebBizAdCreationCombinedInlineValidationNotices",
    "getWAWebBizAdCreationCombinedValidationNotices",
    "getWAWebBizAdCreationValidationNeedCompareFields",
    "react",
    "react-compiler-runtime",
    "toWAWebBizAdCreationServerSideNotices",
    "useDebouncedComet",
    "useWAWebBizAdCreationBoostedComponentCreationSpec",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useCallback,
      m = c.useContext,
      p = c.useEffect,
      _ = c.useMemo,
      f = c.useRef,
      g = c.useState,
      h =
        e !== void 0
          ? e
          : (e = n(
              "WAWebBizAdCreationValidateSpecContextProviderQuery.graphql",
            )),
      y = 500,
      C = {};
    function b(e) {
      var t = o("react-compiler-runtime").c(31),
        n = e.children,
        a = e.noticeActionOverrides,
        i = a === void 0 ? C : a,
        l = o("RelayHooks").useRelayEnvironment(),
        s = m(r("WAWebBizAdCreationSpecContext")),
        c = s.currentValue,
        d = r("useWAWebBizAdCreationBoostedComponentCreationSpec")(),
        _ = g(r("WAWebBizAdCreationValidationStateEnum").STALE),
        b = _[0],
        v = _[1],
        S;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = {}), (t[0] = S))
        : (S = t[0]);
      var R = g(S),
        L = R[0],
        E = R[1],
        k;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = {}), (t[1] = k))
        : (k = t[1]);
      var I = g(k),
        T = I[0],
        D = I[1],
        x;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = {}), (t[2] = x))
        : (x = t[2]);
      var $ = g(x),
        P = $[0],
        N = $[1],
        M;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = {}), (t[3] = M))
        : (M = t[3]);
      var w = g(M),
        A = w[0],
        F = w[1],
        O = f(c),
        B;
      t[4] !== d || t[5] !== l || t[6] !== c
        ? ((B = function () {
            (o("RelayHooks")
              .fetchQuery(l, h, {
                input: d,
                validate_options: { is_blocking_ads_creation: !0 },
              })
              .subscribe({
                error: function () {
                  (r("FBLogger")("wa_ctwa_web").mustfix(
                    "blocking validation query failed",
                  ),
                    v(r("WAWebBizAdCreationValidationStateEnum").COMPLETED));
                },
                next: function (t) {
                  var e;
                  (D(
                    r("toWAWebBizAdCreationServerSideNotices")(
                      (e = t.lwi) == null ? void 0 : e.validateSpec,
                    ),
                  ),
                    v(r("WAWebBizAdCreationValidationStateEnum").COMPLETED));
                },
                start: function () {
                  var e = r("getWAWebBizAdCreationValidationNeedCompareFields")(
                      O.current,
                    ),
                    t = r("getWAWebBizAdCreationValidationNeedCompareFields")(
                      c,
                    ),
                    n = e.budgetAmount !== t.budgetAmount;
                  (n && v(r("WAWebBizAdCreationValidationStateEnum").IN_FLIGHT),
                    (O.current = c));
                },
              }),
              o("RelayHooks")
                .fetchQuery(l, h, {
                  input: d,
                  validate_options: { is_blocking_ads_creation: !1 },
                })
                .subscribe({
                  next: function (t) {
                    var e;
                    N(
                      r("toWAWebBizAdCreationServerSideNotices")(
                        (e = t.lwi) == null ? void 0 : e.validateSpec,
                      ),
                    );
                  },
                }));
          }),
          (t[4] = d),
          (t[5] = l),
          (t[6] = c),
          (t[7] = B))
        : (B = t[7]);
      var W;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((W = { wait: y }), (t[8] = W))
        : (W = t[8]);
      var q = r("useDebouncedComet")(B, W),
        U;
      t[9] !== q
        ? ((U = function () {
            q();
          }),
          (t[9] = q),
          (t[10] = U))
        : (U = t[10]);
      var V;
      (t[11] !== q || t[12] !== c
        ? ((V = [q, c]), (t[11] = q), (t[12] = c), (t[13] = V))
        : (V = t[13]),
        p(U, V));
      var H;
      t[14] !== L || t[15] !== T || t[16] !== P
        ? ((H = r("getWAWebBizAdCreationCombinedValidationNotices")([L, T, P])),
          (t[14] = L),
          (t[15] = T),
          (t[16] = P),
          (t[17] = H))
        : (H = t[17]);
      var G = H,
        z;
      t[18] !== A
        ? ((z = r("getWAWebBizAdCreationCombinedInlineValidationNotices")([A])),
          (t[18] = A),
          (t[19] = z))
        : (z = t[19]);
      var j = z,
        K;
      t[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((K = function (t, n) {
            E(function (e) {
              return o("FBImmer").produce(e, function (e) {
                e[t] = n;
              });
            });
          }),
          (t[20] = K))
        : (K = t[20]);
      var Q = K,
        X;
      t[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((X = function (t, n) {
            F(function (e) {
              return o("FBImmer").produce(e, function (e) {
                e[t] = n;
              });
            });
          }),
          (t[21] = X))
        : (X = t[21]);
      var Y = X,
        J = r("WAWebBizAdCreationValidationStateEnum").IN_FLIGHT === b,
        Z;
      t[22] !== j || t[23] !== G || t[24] !== q || t[25] !== i || t[26] !== J
        ? ((Z = {
            inlineNotices: j,
            isValidating: J,
            notices: G,
            noticeActionOverrides: i,
            revalidate: q,
            setSpecElementClientSideNotices: Q,
            setSpecElementInlineValidationNotices: Y,
          }),
          (t[22] = j),
          (t[23] = G),
          (t[24] = q),
          (t[25] = i),
          (t[26] = J),
          (t[27] = Z))
        : (Z = t[27]);
      var ee = Z,
        te;
      return (
        t[28] !== n || t[29] !== ee
          ? ((te = u.jsx(r("WAWebBizAdCreationValidateSpecContext").Provider, {
              value: ee,
              children: n,
            })),
            (t[28] = n),
            (t[29] = ee),
            (t[30] = te))
          : (te = t[30]),
        te
      );
    }
    l.default = b;
  },
  98,
);
