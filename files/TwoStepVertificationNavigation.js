__d(
  "TwoStepVertificationNavigation",
  [
    "CometRouteParams",
    "FBLogger",
    "XCometPasskeyUpsellControllerRouteBuilder",
    "XCometTwoStepVerificationTwoFactorRememberBrowserControllerRouteBuilder",
    "XPolarisRememberBrowserControllerRouteBuilder",
    "gkx",
    "goForceFullPageRedirectTo",
    "react",
    "react-compiler-runtime",
    "useCAAPasskeyClientSupport",
    "useCometRouterDispatcher",
    "useNavigateToNextUriOnCheckpointCleared",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useRef;
    function u(e, t, n, a, i, l, u) {
      var d = o("react-compiler-runtime").c(33),
        m = n === void 0 ? !1 : n,
        p = a === void 0 ? !1 : a,
        _ = i === void 0 ? !1 : i,
        f = r("useCometRouterDispatcher")(),
        g = o("CometRouteParams").useRouteParams(),
        h = u != null ? u : typeof g.next == "string" ? g.next : null,
        y;
      d[0] !== h
        ? ((y =
            h != null && h.includes("/business/unifiedfblogin/callback")
              ? h
              : null),
          (d[0] = h),
          (d[1] = y))
        : (y = d[1]);
      var C = y,
        b = r("useNavigateToNextUriOnCheckpointCleared")(),
        v;
      d[2] !== C || d[3] !== b || d[4] !== t
        ? ((v =
            t === void 0
              ? function () {
                  C != null ? r("goForceFullPageRedirectTo")(C) : b();
                }
              : t),
          (d[2] = C),
          (d[3] = b),
          (d[4] = t),
          (d[5] = v))
        : (v = d[5]);
      var S = v,
        R = r("useCAAPasskeyClientSupport")(),
        L = R.isPasskeySupported,
        E = s(l != null ? l : null),
        k = S;
      if (g.flow === "two_factor_login") {
        if (f == null)
          throw r("FBLogger")(
            "two_factor",
            "login.comet.dispatcher.null",
          ).mustfixThrow("Dispatcher expceted to be nonnull, but null found.");
        var I;
        d[6] !== f || d[7] !== g.encrypted_context || d[8] !== g.next
          ? ((I = function (t) {
              var e,
                n = r("gkx")("22979"),
                o = r(
                  n
                    ? "XPolarisRememberBrowserControllerRouteBuilder"
                    : "XCometTwoStepVerificationTwoFactorRememberBrowserControllerRouteBuilder",
                ),
                a = o.buildURL({
                  encrypted_context: String(g.encrypted_context),
                  next: String((e = t != null ? t : g.next) != null ? e : "/"),
                });
              f == null || f.go(a, {});
            }),
            (d[6] = f),
            (d[7] = g.encrypted_context),
            (d[8] = g.next),
            (d[9] = I))
          : (I = d[9]);
        var T = I,
          D;
        d[10] !== f || d[11] !== g.next
          ? ((D = function (t) {
              var e;
              f == null ||
                f.go(
                  r("XCometPasskeyUpsellControllerRouteBuilder").buildURL({
                    entrypoint: "post_two_factor_login_additional_passkey_web",
                    next: String(
                      (e = t != null ? t : g.next) != null ? e : "/",
                    ),
                  }),
                  {},
                );
            }),
            (d[10] = f),
            (d[11] = g.next),
            (d[12] = D))
          : (D = d[12]);
        var x = D,
          $;
        (d[13] !== _ ||
        d[14] !== L ||
        d[15] !== p ||
        d[16] !== x ||
        d[17] !== T ||
        d[18] !== S ||
        d[19] !== m
          ? (($ = function (t) {
              var e = m && !p;
              if (e) {
                S();
                return;
              }
              E.current !== "PASSKEY" && L && _
                ? x(t)
                : m
                  ? r("gkx")("4832") && t != null
                    ? r("goForceFullPageRedirectTo")(t)
                    : S()
                  : T(t);
            }),
            (d[13] = _),
            (d[14] = L),
            (d[15] = p),
            (d[16] = x),
            (d[17] = T),
            (d[18] = S),
            (d[19] = m),
            (d[20] = $))
          : ($ = d[20]),
          (k = $));
      }
      var P;
      d[21] !== C
        ? ((P = function (t) {
            C != null
              ? r("goForceFullPageRedirectTo")(C)
              : r("goForceFullPageRedirectTo")(String(t != null ? t : ""));
          }),
          (d[21] = C),
          (d[22] = P))
        : (P = d[22]);
      var N;
      d[23] !== C || d[24] !== k
        ? ((N =
            C != null
              ? function () {
                  return r("goForceFullPageRedirectTo")(C);
                }
              : k),
          (d[23] = C),
          (d[24] = k),
          (d[25] = N))
        : (N = d[25]);
      var M;
      d[26] !== e
        ? ((M = function (n) {
            ((E.current = n.method), e(n));
          }),
          (d[26] = e),
          (d[27] = M))
        : (M = d[27]);
      var w;
      d[28] !== S || d[29] !== P || d[30] !== N || d[31] !== M
        ? ((w = {
            navigateTo: P,
            navigateToNextOrHome: S,
            navigateToRememberBrowser: N,
            navigateToTwoFactorMethod: M,
            showMethodPickerDialog: c,
          }),
          (d[28] = S),
          (d[29] = P),
          (d[30] = N),
          (d[31] = M),
          (d[32] = w))
        : (w = d[32]);
      var A = w;
      return A;
    }
    function c() {}
    l.useTwoStepVertificationNavigation = u;
  },
  98,
);
