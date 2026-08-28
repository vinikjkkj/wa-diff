__d(
  "CometInternalTypeaheadFetchProvider",
  [
    "CometInternalTypeaheadEmptyFetchProvider",
    "CometInternalTypeaheadFetchContext",
    "react",
    "react-compiler-runtime",
    "useBaseTypeaheadDataSourceFetch",
    "useCometInternalTypeaheadStateDispatcher",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useMemo;
    function m(e) {
      var t = o("react-compiler-runtime").c(20),
        n = e.children,
        a = e.dataSource,
        i = e.dataSourceFetchConfigParams,
        l = e.onFetchEntries_DO_NOT_USE,
        u = e.traceProvider,
        c = r("useCometInternalTypeaheadStateDispatcher")(),
        d = c.dispatchActiveEntries,
        m;
      t[0] !== d || t[1] !== l || t[2] !== u
        ? ((m = function (t, n) {
            var e = t.entries,
              r = n.isTraceComplete,
              o = n.source;
            (d(e != null ? e : []),
              l && l(e),
              u &&
                !u.isResolved() &&
                r &&
                (o === "cache" &&
                e.length >= u.getEntriesCountForVisualComplete()
                  ? u.setEndReason("max_suggestions_reached")
                  : o === "network"
                    ? u.setEndReason("all_queries_completed")
                    : o === "network-no-results" &&
                      u.setEndReason(
                        "all_queries_completed_no_network_results",
                      ),
                u.resolve()));
          }),
          (t[0] = d),
          (t[1] = l),
          (t[2] = u),
          (t[3] = m))
        : (m = t[3]);
      var p = m,
        _;
      t[4] !== a || t[5] !== i || t[6] !== p
        ? ((_ = {
            dataSource: a,
            dataSourceFetchConfigParams: i,
            onResolvePayload: p,
          }),
          (t[4] = a),
          (t[5] = i),
          (t[6] = p),
          (t[7] = _))
        : (_ = t[7]);
      var f = r("useBaseTypeaheadDataSourceFetch")(_),
        g = f[0],
        h = f[1],
        y = f[2],
        C = g.isLoading,
        b = g.source,
        v;
      t[8] !== h || t[9] !== C || t[10] !== y || t[11] !== b
        ? ((v = { fetch: h, isLoading: C, refetch: y, source: b }),
          (t[8] = h),
          (t[9] = C),
          (t[10] = y),
          (t[11] = b),
          (t[12] = v))
        : (v = t[12]);
      var S = v,
        R;
      t[13] !== n || t[14] !== C || t[15] !== b
        ? ((R = s.jsx(r("CometInternalTypeaheadEmptyFetchProvider"), {
            isLoading: C,
            source: b,
            children: n,
          })),
          (t[13] = n),
          (t[14] = C),
          (t[15] = b),
          (t[16] = R))
        : (R = t[16]);
      var L;
      return (
        t[17] !== R || t[18] !== S
          ? ((L = s.jsx(r("CometInternalTypeaheadFetchContext").Provider, {
              value: S,
              children: R,
            })),
            (t[17] = R),
            (t[18] = S),
            (t[19] = L))
          : (L = t[19]),
        L
      );
    }
    l.default = m;
  },
  98,
);
