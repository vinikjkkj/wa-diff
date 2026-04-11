__d(
  "useBaseEntryPointDialog",
  [
    "CometDialogContext",
    "CometRelay",
    "CometSuspendedDialogImpl.react",
    "react",
    "react-compiler-runtime",
    "tracePolicyFromResource",
    "useCometEntryPointPrerendererWithQueryTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useContext;
    function m(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.onClose,
        r = e.onHide,
        a = e.otherProps,
        i = e.preloadedEntryPoint,
        l = e.relayEnvironmentUsedForEntrypoint,
        u;
      t[0] !== n || t[1] !== r || t[2] !== a
        ? ((u = babelHelpers.extends({}, a, { onClose: n, onHide: r })),
          (t[0] = n),
          (t[1] = r),
          (t[2] = a),
          (t[3] = u))
        : (u = t[3]);
      var c = u,
        d;
      t[4] !== i || t[5] !== c
        ? ((d = s.jsx(o("CometRelay").EntryPointContainer, {
            entryPointReference: i,
            props: c,
          })),
          (t[4] = i),
          (t[5] = c),
          (t[6] = d))
        : (d = t[6]);
      var m = d;
      if (l != null) {
        var p;
        (t[7] !== l || t[8] !== m
          ? ((p = s.jsx(o("CometRelay").RelayEnvironmentProvider, {
              environment: l,
              children: m,
            })),
            (t[7] = l),
            (t[8] = m),
            (t[9] = p))
          : (p = t[9]),
          (m = p));
      }
      return m;
    }
    function p(e, t, n, a, i) {
      var l,
        s = o("react-compiler-runtime").c(20),
        u = n === void 0 ? "button" : n,
        c = d(r("CometDialogContext")),
        p = m,
        _ = i == null ? void 0 : i.baseModalProps,
        f =
          (l = i == null ? void 0 : i.carryOverRelayEnvironment_EXPERIMENTAL) !=
          null
            ? l
            : !1,
        g = i == null ? void 0 : i.overrideRelayEnv,
        h = i == null ? void 0 : i.queryIsCheap_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
        y;
      s[0] !== g || s[1] !== h
        ? ((y = {
            overrideRelayEnv: g,
            queryIsCheap_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: h,
          }),
          (s[0] = g),
          (s[1] = h),
          (s[2] = y))
        : (y = s[2]);
      var C = r("useCometEntryPointPrerendererWithQueryTimeout")(e, t, u, y),
        b = C[0],
        v = C[1],
        S = C[2],
        R = C[3],
        L = C[4],
        E = o("CometRelay").useRelayEnvironment(),
        k = (i == null ? void 0 : i.overrideRelayEnv) || E,
        I = (i == null ? void 0 : i.overrideRelayEnv) != null || f,
        T;
      (s[3] !== c ||
      s[4] !== _ ||
      s[5] !== e.root ||
      s[6] !== a ||
      s[7] !== (i == null ? void 0 : i.traceAPIAddOn) ||
      s[8] !== (i == null ? void 0 : i.tracePolicyPrefix) ||
      s[9] !== u ||
      s[10] !== k ||
      s[11] !== I ||
      s[12] !== b
        ? ((T = function (n, o, l, s) {
            b(function (t, o) {
              var d;
              c(
                r("CometSuspendedDialogImpl.react"),
                {
                  dialog: m,
                  dialogProps: {
                    otherProps: n,
                    preloadedEntryPoint: t,
                    relayEnvironmentUsedForEntrypoint: I ? k : null,
                  },
                  fallback: a,
                },
                {
                  loadType: "entrypoint",
                  preloadTrigger: u,
                  traceAPIAddOn: i == null ? void 0 : i.traceAPIAddOn,
                  tracePolicy:
                    l != null
                      ? l
                      : r("tracePolicyFromResource")(
                          (d = i == null ? void 0 : i.tracePolicyPrefix) != null
                            ? d
                            : "comet.dialog",
                          e.root,
                        ),
                },
                o,
                { baseModalProps: _, replaceCurrentDialog: s },
              );
            }, o);
          }),
          (s[3] = c),
          (s[4] = _),
          (s[5] = e.root),
          (s[6] = a),
          (s[7] = i == null ? void 0 : i.traceAPIAddOn),
          (s[8] = i == null ? void 0 : i.tracePolicyPrefix),
          (s[9] = u),
          (s[10] = k),
          (s[11] = I),
          (s[12] = b),
          (s[13] = T))
        : (T = s[13]),
        i == null || i.traceAPIAddOn,
        i == null || i.tracePolicyPrefix);
      var D = T,
        x;
      return (
        s[14] !== L || s[15] !== v || s[16] !== S || s[17] !== R || s[18] !== D
          ? ((x = [D, v, S, R, L]),
            (s[14] = L),
            (s[15] = v),
            (s[16] = S),
            (s[17] = R),
            (s[18] = D),
            (s[19] = x))
          : (x = s[19]),
        x
      );
    }
    l.default = p;
  },
  98,
);
