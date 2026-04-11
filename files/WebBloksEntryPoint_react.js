__d(
  "WebBloksEntryPoint.react",
  [
    "WebBloksApp",
    "WebBloksEntryPointContainerContext",
    "WebBloksEnvironmentContext",
    "WebBloksMergeRefs",
    "WebBloksServerData",
    "WebBloksTheme",
    "WebBloksUtils",
    "WebBloksViewpointProvider",
    "react",
    "react-compiler-runtime",
    "useWebBloksAnalytics",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useRef;
    function c(e) {
      var t = o("react-compiler-runtime").c(18),
        n = e.environment,
        a = e.externalObjectSet,
        i = e.externalVariables,
        l = e.initialFetchParams,
        c = e.payload,
        d = e.style,
        m = e.theme,
        p = d === void 0 ? o("WebBloksApp").bloksRootStyles : d;
      c &&
        c.server_data != null &&
        o("WebBloksServerData").handleWebBloksServerData(
          o("WebBloksUtils").cast(c.server_data),
        );
      var _;
      t[0] !== l
        ? ((_ = l != null ? l : {}), (t[0] = l), (t[1] = _))
        : (_ = t[1]);
      var f = _,
        g = f.appId,
        h = f.params,
        y = r("useWebBloksAnalytics")(n, g != null ? g : ""),
        C = u(null),
        b = r("WebBloksMergeRefs")(y, C),
        v;
      t[2] !== g || t[3] !== a || t[4] !== i || t[5] !== h || t[6] !== c
        ? ((v = s.jsx(
            o("WebBloksEntryPointContainerContext")
              .WebBloksEntryPointContainerContextProvider,
            {
              value: C,
              children: s.jsx(o("WebBloksApp").WebBloksApp, {
                node: c,
                appId: g,
                params: h,
                externalObjectSet: a,
                externalVariables: i,
              }),
            },
          )),
          (t[2] = g),
          (t[3] = a),
          (t[4] = i),
          (t[5] = h),
          (t[6] = c),
          (t[7] = v))
        : (v = t[7]);
      var S;
      t[8] !== n || t[9] !== v
        ? ((S = s.jsx(
            o("WebBloksEnvironmentContext").WebBloksEnvironmentProvider,
            { environment: n, children: v },
          )),
          (t[8] = n),
          (t[9] = v),
          (t[10] = S))
        : (S = t[10]);
      var R;
      t[11] !== S || t[12] !== m
        ? ((R = s.jsx(r("WebBloksViewpointProvider"), {
            children: s.jsx(o("WebBloksTheme").WebBloksThemeProvider, {
              initialTheme: m,
              children: S,
            }),
          })),
          (t[11] = S),
          (t[12] = m),
          (t[13] = R))
        : (R = t[13]);
      var L = R,
        E;
      return (
        t[14] !== L || t[15] !== b || t[16] !== p
          ? ((E = s.jsx("div", { style: p, ref: b, children: L })),
            (t[14] = L),
            (t[15] = b),
            (t[16] = p),
            (t[17] = E))
          : (E = t[17]),
        E
      );
    }
    l.default = c;
  },
  98,
);
