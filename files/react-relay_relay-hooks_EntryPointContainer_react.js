__d(
  "react-relay/relay-hooks/EntryPointContainer.react",
  [
    "react",
    "react-compiler-runtime",
    "react-relay/relay-hooks/ProfilerContext",
    "react-relay/relay-hooks/useRelayEnvironment",
    "warning",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = n("react-compiler-runtime").c,
      s = e || (e = n("react")),
      u = e,
      c = u.useContext,
      d = u.useEffect;
    function m(e) {
      var t = l(13),
        r = e.entryPointReference,
        o = e.props;
      n("warning")(
        r.isDisposed === !1,
        "<EntryPointContainer>: Expected entryPointReference to not be disposed yet. This is because disposing the entrypoint marks it for future garbage collection, and as such may no longer be present in the Relay store. In the future, this will become a hard error.",
      );
      var a = r.getComponent,
        i = r.queries,
        u = r.entryPoints,
        m = r.extraProps,
        p = r.rootModuleID,
        _;
      t[0] !== a ? ((_ = a()), (t[0] = a), (t[1] = _)) : (_ = t[1]);
      var f = _,
        g = c(n("react-relay/relay-hooks/ProfilerContext")),
        h = n("react-relay/relay-hooks/useRelayEnvironment")(),
        y,
        C;
      (t[2] !== h || t[3] !== g || t[4] !== p
        ? ((y = function () {
            h.__log({
              name: "entrypoint.root.consume",
              profilerContext: g,
              rootModuleID: p,
            });
          }),
          (C = [h, g, p]),
          (t[2] = h),
          (t[3] = g),
          (t[4] = p),
          (t[5] = y),
          (t[6] = C))
        : ((y = t[5]), (C = t[6])),
        d(y, C));
      var b;
      return (
        t[7] !== f || t[8] !== u || t[9] !== m || t[10] !== o || t[11] !== i
          ? ((b = s.jsx(f, {
              entryPoints: u,
              extraProps: m,
              props: o,
              queries: i,
            })),
            (t[7] = f),
            (t[8] = u),
            (t[9] = m),
            (t[10] = o),
            (t[11] = i),
            (t[12] = b))
          : (b = t[12]),
        b
      );
    }
    a.exports = m;
  },
  null,
);
