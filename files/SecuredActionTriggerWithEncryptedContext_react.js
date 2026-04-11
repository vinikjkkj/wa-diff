__d(
  "SecuredActionTriggerWithEncryptedContext.react",
  [
    "XMDSDialogLoadingState.react",
    "Xfac_XFACAppealType",
    "getGraphQLEnumSafe",
    "nullthrows",
    "react",
    "react-compiler-runtime",
    "useCometEntryPointDialog",
    "useIXTXfacUniversalTriggerCDSDialog",
    "usePasskeyUpsellEligibilityCheck",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useRef,
      m = function (t) {
        return s.jsx(r("XMDSDialogLoadingState.react"), {
          onClose: t,
          withCloseButton: !1,
        });
      };
    function p(e, t) {
      var n = o("react-compiler-runtime").c(4),
        a;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = r("nullthrows")(
            r("getGraphQLEnumSafe")(r("Xfac_XFACAppealType"), 37),
          )),
          (n[0] = a))
        : (a = n[0]);
      var i;
      n[1] !== t || n[2] !== e
        ? ((i = {
            security_token: e,
            trigger_event_type:
              "XFAC_UNIVERSAL_ENTRY_ORGANIC_SENSITIVE_ACTIONS",
            xfac_appeal_type: a,
            xfac_config: t,
          }),
          (n[1] = t),
          (n[2] = e),
          (n[3] = i))
        : (i = n[3]);
      var l = r("useIXTXfacUniversalTriggerCDSDialog")(i, void 0, void 0, m),
        s = l[0];
      return s;
    }
    function _(e) {
      var t = o("react-compiler-runtime").c(13),
        n = e.encryptedContext,
        a = e.entrypoint,
        i = e.flow,
        l = e.onExit,
        s = e.onSuccess,
        u = e.useXFAC,
        m = e.xfacConfig,
        _ = u === void 0 ? !1 : u,
        f = p(n, m),
        g = r("usePasskeyUpsellEligibilityCheck")(),
        h;
      t[0] !== n || t[1] !== i
        ? ((h = { encryptedContext: n, flow: i }),
          (t[0] = n),
          (t[1] = i),
          (t[2] = h))
        : (h = t[2]);
      var y = r("useCometEntryPointDialog")(a, h),
        C = y[0],
        b = d(!0),
        v,
        S;
      return (
        t[3] !== n ||
        t[4] !== i ||
        t[5] !== l ||
        t[6] !== s ||
        t[7] !== C ||
        t[8] !== g ||
        t[9] !== f ||
        t[10] !== _
          ? ((v = function () {
              (b.current &&
                (_
                  ? f({
                      flowCallbacks: {
                        onClose: l,
                        onComplete: function () {
                          g(n, s);
                        },
                      },
                    })
                  : C({
                      routeProps: {
                        encryptedContext: n,
                        flow: i,
                        onExit: l,
                        onSuccess: function () {
                          return g(n, s);
                        },
                      },
                    })),
                (b.current = !1));
            }),
            (S = [C, n, i, l, s, f, _, g]),
            (t[3] = n),
            (t[4] = i),
            (t[5] = l),
            (t[6] = s),
            (t[7] = C),
            (t[8] = g),
            (t[9] = f),
            (t[10] = _),
            (t[11] = v),
            (t[12] = S))
          : ((v = t[11]), (S = t[12])),
        c(v, S),
        null
      );
    }
    l.default = _;
  },
  98,
);
