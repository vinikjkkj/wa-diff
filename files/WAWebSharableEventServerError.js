__d(
  "WAWebSharableEventServerError",
  ["$InternalEnum", "WAWebGraphQLConstants", "WAWebGraphQLServerError"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum")({
        CredentialsNotReady: "credentialsNotReady",
        Unauthorized: "unauthorized",
        Unavailable: "unavailable",
        Transport: "transport",
        Transient: "transient",
      }),
      s = 5049001,
      u = 5049008,
      c = 5049017,
      d = 0,
      m = new Map([
        [
          o("WAWebGraphQLConstants").WHATSAPP_GRAPHQL_UNAUTHORIZED_ERROR_CODE,
          e.CredentialsNotReady,
        ],
        [s, e.Unauthorized],
        [u, e.Unavailable],
        [c, e.Unavailable],
        [d, e.Transport],
      ]);
    function p(t) {
      var n;
      if (!(t instanceof o("WAWebGraphQLServerError").GraphQLServerError))
        return e.Transport;
      for (var r of (a = (i = t.source) == null ? void 0 : i.errors) != null
        ? a
        : []) {
        var a,
          i,
          l = r.code,
          s = m.get(l);
        if (s != null) return s;
      }
      return ((n = t.source) == null ? void 0 : n.httpStatus) != null
        ? e.Transport
        : e.Transient;
    }
    ((l.SharableEventErrorKind = e), (l.getSharableEventErrorKind = p));
  },
  98,
);
