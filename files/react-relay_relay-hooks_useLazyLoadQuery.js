__d(
  "react-relay/relay-hooks/useLazyLoadQuery",
  [
    "react-compiler-runtime",
    "react-relay/relay-hooks/useLazyLoadQueryNode",
    "react-relay/relay-hooks/useMemoOperationDescriptor",
    "react-relay/relay-hooks/useRelayEnvironment",
    "relay-runtime",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("react-compiler-runtime").c,
      l = n("relay-runtime").__internal.fetchQuery;
    function s(t, r, o) {
      var a = e(11),
        i = n("react-relay/relay-hooks/useRelayEnvironment")(),
        s;
      a[0] !== o
        ? ((s =
            o && o.networkCacheConfig ? o.networkCacheConfig : { force: !0 }),
          (a[0] = o),
          (a[1] = s))
        : (s = a[1]);
      var u = n("react-relay/relay-hooks/useMemoOperationDescriptor")(t, r, s),
        c = o == null ? void 0 : o.fetchKey,
        d;
      a[2] !== i || a[3] !== u
        ? ((d = l(i, u)), (a[2] = i), (a[3] = u), (a[4] = d))
        : (d = a[4]);
      var m = o == null ? void 0 : o.fetchPolicy,
        p = o == null ? void 0 : o.UNSTABLE_renderPolicy,
        _;
      a[5] !== u || a[6] !== c || a[7] !== d || a[8] !== m || a[9] !== p
        ? ((_ = {
            componentDisplayName: "useLazyLoadQuery()",
            fetchKey: c,
            fetchObservable: d,
            fetchPolicy: m,
            query: u,
            renderPolicy: p,
          }),
          (a[5] = u),
          (a[6] = c),
          (a[7] = d),
          (a[8] = m),
          (a[9] = p),
          (a[10] = _))
        : (_ = a[10]);
      var f = n("react-relay/relay-hooks/useLazyLoadQueryNode")(_);
      return f;
    }
    a.exports = s;
  },
  null,
);
