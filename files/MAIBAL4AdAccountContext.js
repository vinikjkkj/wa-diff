__d(
  "MAIBAL4AdAccountContext",
  [
    "BSHSharedAdAccountContext",
    "FBLogger",
    "MAIBASurfaceConfig",
    "MAIBASurfaceContext",
    "isMAIBAUnifiedThreadsEnabled",
    "react",
    "react-compiler-runtime",
    "useFetchAdAccounts",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["children"],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useContext,
      m = c.useEffect,
      p = c.useMemo,
      _ = c.useRef,
      f = {
        onAdAccountSelected: function () {},
        selectedAdAccount: {
          account_status: null,
          currency: null,
          id: null,
          name: null,
        },
        shouldShowL4AccountSelectorPage: !1,
        shouldShowL4AccountSwitcher: !1,
      },
      g = u.createContext(null);
    function h(e) {
      var t,
        n = o("react-compiler-runtime").c(22),
        a = e.children,
        i = e.currentAdAccountID,
        l = e.isUserLoggedInToAdAccount,
        s = e.onAdAccountSelected,
        c = e.shouldFallbackToRandomAccount,
        p = c === void 0 ? !1 : c,
        f = o("MAIBASurfaceContext").useMAIBASurfaceContext(),
        h = f.autoLoggingTool,
        y;
      n[0] !== h
        ? ((y = o("MAIBASurfaceConfig").isMBSSurfaceTool(h)),
          (n[0] = h),
          (n[1] = y))
        : (y = n[1]);
      var C = y,
        b = h === "Facebook Ad Center",
        v = h === "Business Support",
        S = h === "WhatsApp Manager" || h === "WA Manager Marketing Campaign",
        R = h === "DIRECT_SUPPORT",
        L = d(r("BSHSharedAdAccountContext")),
        E =
          v && (t = L == null ? void 0 : L.currentAdAccountID) != null ? t : i,
        k = v ? !1 : l,
        I = o("useFetchAdAccounts").useInitialAdAccountSelection(E, k, p, C, b),
        T = I.adAccount,
        D = I.initialFetchedCount;
      !k &&
        D === 0 &&
        r("FBLogger")("MAIBA L4 Ad account context").warn(
          "No ad account found",
        );
      var x = _(s),
        $,
        P;
      (n[2] !== s
        ? (($ = function () {
            x.current = s;
          }),
          (P = [s]),
          (n[2] = s),
          (n[3] = $),
          (n[4] = P))
        : (($ = n[3]), (P = n[4])),
        m($, P));
      var N = o("useFetchAdAccounts").useCommitAccountPayload(),
        M = L == null ? void 0 : L.onAdAccountSelected,
        w;
      n[5] !== (T == null ? void 0 : T.id) ||
      n[6] !== k ||
      n[7] !== D ||
      n[8] !== R ||
      n[9] !== S
        ? ((w =
            !S &&
            !R &&
            !r("isMAIBAUnifiedThreadsEnabled")() &&
            (T == null ? void 0 : T.id) == null &&
            !k &&
            D > 1),
          (n[5] = T == null ? void 0 : T.id),
          (n[6] = k),
          (n[7] = D),
          (n[8] = R),
          (n[9] = S),
          (n[10] = w))
        : (w = n[10]);
      var A = w,
        F =
          !S &&
          !R &&
          (b || v || (!k && (T == null ? void 0 : T.id) != null)) &&
          D > 1,
        O;
      n[11] !== N || n[12] !== M
        ? ((O = function (t) {
            (N(t), x.current(t.id), M == null || M(t.id));
          }),
          (n[11] = N),
          (n[12] = M),
          (n[13] = O))
        : (O = n[13]);
      var B;
      n[14] !== T || n[15] !== A || n[16] !== F || n[17] !== O
        ? ((B = {
            onAdAccountSelected: O,
            selectedAdAccount: T,
            shouldShowL4AccountSelectorPage: A,
            shouldShowL4AccountSwitcher: F,
          }),
          (n[14] = T),
          (n[15] = A),
          (n[16] = F),
          (n[17] = O),
          (n[18] = B))
        : (B = n[18]);
      var W = B,
        q;
      return (
        n[19] !== a || n[20] !== W
          ? ((q = u.jsx(g.Provider, { value: W, children: a })),
            (n[19] = a),
            (n[20] = W),
            (n[21] = q))
          : (q = n[21]),
        q
      );
    }
    function y(t) {
      var n = o("react-compiler-runtime").c(7),
        r,
        a;
      n[0] !== t
        ? ((r = t.children),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = r),
          (n[2] = a))
        : ((r = n[1]), (a = n[2]));
      var i = d(g),
        l;
      return (
        n[3] !== r || n[4] !== i || n[5] !== a
          ? ((l =
              i != null
                ? u.jsx(g.Provider, { value: i, children: r })
                : u.jsx(h, babelHelpers.extends({}, a, { children: r }))),
            (n[3] = r),
            (n[4] = i),
            (n[5] = a),
            (n[6] = l))
          : (l = n[6]),
        l
      );
    }
    function C() {
      var e;
      return (e = d(g)) != null ? e : f;
    }
    ((l.MAIBAL4AdAccountContextProvider = y),
      (l.useMAIBAL4AdAccountContext = C));
  },
  98,
);
