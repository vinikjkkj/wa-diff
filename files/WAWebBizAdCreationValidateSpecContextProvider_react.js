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
      var t = e.children,
        n = e.noticeActionOverrides,
        a = n === void 0 ? C : n,
        i = o("RelayHooks").useRelayEnvironment(),
        l = m(r("WAWebBizAdCreationSpecContext")),
        s = l.currentValue,
        c = r("useWAWebBizAdCreationBoostedComponentCreationSpec")(),
        b = g(r("WAWebBizAdCreationValidationStateEnum").STALE),
        v = b[0],
        S = b[1],
        R = g({}),
        L = R[0],
        E = R[1],
        k = g({}),
        I = k[0],
        T = k[1],
        D = g({}),
        x = D[0],
        $ = D[1],
        P = g({}),
        N = P[0],
        M = P[1],
        w = f(s),
        A = r("useDebouncedComet")(
          function () {
            (o("RelayHooks")
              .fetchQuery(i, h, {
                input: c,
                validate_options: { is_blocking_ads_creation: !0 },
              })
              .subscribe({
                error: function () {
                  (r("FBLogger")("wa_ctwa_web").mustfix(
                    "blocking validation query failed",
                  ),
                    S(r("WAWebBizAdCreationValidationStateEnum").COMPLETED));
                },
                next: function (t) {
                  var e;
                  (T(
                    r("toWAWebBizAdCreationServerSideNotices")(
                      (e = t.lwi) == null ? void 0 : e.validateSpec,
                    ),
                  ),
                    S(r("WAWebBizAdCreationValidationStateEnum").COMPLETED));
                },
                start: function () {
                  var e = r("getWAWebBizAdCreationValidationNeedCompareFields")(
                      w.current,
                    ),
                    t = r("getWAWebBizAdCreationValidationNeedCompareFields")(
                      s,
                    ),
                    n = e.budgetAmount !== t.budgetAmount;
                  (n && S(r("WAWebBizAdCreationValidationStateEnum").IN_FLIGHT),
                    (w.current = s));
                },
              }),
              o("RelayHooks")
                .fetchQuery(i, h, {
                  input: c,
                  validate_options: { is_blocking_ads_creation: !1 },
                })
                .subscribe({
                  next: function (t) {
                    var e;
                    $(
                      r("toWAWebBizAdCreationServerSideNotices")(
                        (e = t.lwi) == null ? void 0 : e.validateSpec,
                      ),
                    );
                  },
                }));
          },
          { wait: y },
        );
      p(
        function () {
          A();
        },
        [A, s],
      );
      var F = _(
          function () {
            return r("getWAWebBizAdCreationCombinedValidationNotices")([
              L,
              I,
              x,
            ]);
          },
          [L, I, x],
        ),
        O = _(
          function () {
            return r("getWAWebBizAdCreationCombinedInlineValidationNotices")([
              N,
            ]);
          },
          [N],
        ),
        B = d(function (e, t) {
          E(function (n) {
            return o("FBImmer").produce(n, function (n) {
              n[e] = t;
            });
          });
        }, []),
        W = d(function (e, t) {
          M(function (n) {
            return o("FBImmer").produce(n, function (n) {
              n[e] = t;
            });
          });
        }, []),
        q = _(
          function () {
            return {
              inlineNotices: O,
              isValidating:
                r("WAWebBizAdCreationValidationStateEnum").IN_FLIGHT === v,
              notices: F,
              noticeActionOverrides: a,
              revalidate: A,
              setSpecElementClientSideNotices: B,
              setSpecElementInlineValidationNotices: W,
            };
          },
          [O, F, A, a, B, W, v],
        );
      return u.jsx(r("WAWebBizAdCreationValidateSpecContext").Provider, {
        value: q,
        children: t,
      });
    }
    ((b.displayName = b.name + " [from " + i.id + "]"), (l.default = b));
  },
  98,
);
