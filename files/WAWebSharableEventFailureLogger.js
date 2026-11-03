__d(
  "WAWebSharableEventFailureLogger",
  [
    "WALogger",
    "WAWebGraphQLServerError",
    "WAWebSharableEventServerError",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = new Set([
        (u = o("WAWebSharableEventServerError")).SharableEventErrorKind
          .Transport,
        u.SharableEventErrorKind.CredentialsNotReady,
        u.SharableEventErrorKind.Unavailable,
        u.SharableEventErrorKind.Validation,
        u.SharableEventErrorKind.RateLimited,
      ]);
    function d(t, n) {
      var a = o("WAWebSharableEventServerError").getSharableEventError(n),
        i = p(a, n);
      return c.has(a.kind)
        ? (o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[sharable_event][",
                "] failed ",
                "",
              ])),
            t,
            i,
          ),
          a)
        : (o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[sharable_event][",
                  "] failed ",
                  "",
                ])),
              t,
              i,
            )
            .catching(r("getErrorSafe")(n))
            .tags("sharable_event", t)
            .sendLogs("sharable-event-" + t + "-failed"),
          a);
    }
    function m(e) {
      return p(o("WAWebSharableEventServerError").getSharableEventError(e), e);
    }
    function p(e, t) {
      var n, a, i, l;
      if (!(t instanceof o("WAWebGraphQLServerError").GraphQLServerError)) {
        var s = r("getErrorSafe")(t);
        return "kind=" + e.kind + " " + s.name + ": " + s.message;
      }
      var u = (
        (n = (a = t.source) == null ? void 0 : a.errors) != null ? n : []
      )
        .map(function (e) {
          var t = e.code,
            n = e.summary;
          return n == null ? String(t) : t + "(" + n + ")";
        })
        .join(",");
      return (
        "kind=" +
        e.kind +
        " codes=" +
        u +
        " http=" +
        String(
          (i = (l = t.source) == null ? void 0 : l.httpStatus) != null
            ? i
            : "none",
        )
      );
    }
    ((l.logSharableEventFailure = d),
      (l.describeSharableEventError = m),
      (l.formatSharableEventError = p));
  },
  98,
);
