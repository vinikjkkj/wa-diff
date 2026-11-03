__d(
  "WAWebSharableEventServerError",
  ["$InternalEnum", "WAWebGraphQLConstants", "WAWebGraphQLServerError"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum")({
        CredentialsNotReady: "credentialsNotReady",
        Unauthorized: "unauthorized",
        Unavailable: "unavailable",
        Validation: "validation",
        RateLimited: "rateLimited",
        Transport: "transport",
        Transient: "transient",
      }),
      s = n("$InternalEnum")({
        Unauthorized: 5049001,
        InvalidInput: 5049004,
        EventNotAvailable: 5049008,
        InvalidRequest: 5049010,
        MediaError: 5049011,
        CallLinkError: 5049012,
        NotInvited: 5049017,
        InvalidTitle: 5049018,
        InvalidStartTime: 5049019,
        InvalidEndTime: 5049020,
        InvalidReminderTime: 5049021,
        InvalidCallLinkMediaType: 5049024,
        InvalidCoverImageHandle: 5049025,
        CoverImageTooLarge: 5049026,
        CoverImageUploadFailed: 5049027,
        CreationRateLimited: 5049032,
      }),
      u = 0;
    function c(t) {
      var n, r, a, i;
      if (!(t instanceof o("WAWebGraphQLServerError").GraphQLServerError))
        return { kind: e.Transport, code: null };
      var l = (n = (r = t.source) == null ? void 0 : r.errors) != null ? n : [];
      for (var s of l) {
        var u = s.code,
          c = m(u);
        if (c != null) return { kind: c, code: u };
      }
      return {
        kind:
          ((a = t.source) == null ? void 0 : a.httpStatus) != null
            ? e.Transport
            : e.Transient,
        code: (i = l[0]) == null ? void 0 : i.code,
      };
    }
    function d(e) {
      return c(e).kind;
    }
    function m(t) {
      return t ===
        o("WAWebGraphQLConstants").WHATSAPP_GRAPHQL_UNAUTHORIZED_ERROR_CODE
        ? e.CredentialsNotReady
        : t === u
          ? e.Transport
          : (function (t) {
              return t === s.Unauthorized
                ? e.Unauthorized
                : t === s.EventNotAvailable || t === s.NotInvited
                  ? e.Unavailable
                  : t === s.InvalidInput ||
                      t === s.InvalidRequest ||
                      t === s.MediaError ||
                      t === s.InvalidTitle ||
                      t === s.InvalidStartTime ||
                      t === s.InvalidEndTime ||
                      t === s.InvalidReminderTime ||
                      t === s.InvalidCallLinkMediaType ||
                      t === s.InvalidCoverImageHandle ||
                      t === s.CoverImageTooLarge
                    ? e.Validation
                    : t === s.CreationRateLimited
                      ? e.RateLimited
                      : null;
            })(s.cast(t));
    }
    ((l.SharableEventErrorKind = e),
      (l.SharableEventServerCode = s),
      (l.getSharableEventError = c),
      (l.getSharableEventErrorKind = d));
  },
  98,
);
