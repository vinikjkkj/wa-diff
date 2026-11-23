__d(
  "WAWebSharableEventMutationErrors",
  ["fbt", "WAWebSharableEventServerError"],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t) {
      var n = o("WAWebSharableEventServerError").getSharableEventError(e),
        r = n.code,
        a = n.kind,
        i = u(
          o("WAWebSharableEventServerError").SharableEventServerCode.cast(r),
        );
      return i != null
        ? i
        : a ===
            o("WAWebSharableEventServerError").SharableEventErrorKind.Validation
          ? s._(/*BTDS*/ "")
          : t;
    }
    function u(e) {
      return e ===
        o("WAWebSharableEventServerError").SharableEventServerCode.InvalidTitle
        ? s._(/*BTDS*/ "")
        : e ===
            o("WAWebSharableEventServerError").SharableEventServerCode
              .InvalidStartTime
          ? s._(/*BTDS*/ "")
          : e ===
              o("WAWebSharableEventServerError").SharableEventServerCode
                .InvalidEndTime
            ? s._(/*BTDS*/ "")
            : e ===
                o("WAWebSharableEventServerError").SharableEventServerCode
                  .InvalidReminderTime
              ? s._(/*BTDS*/ "")
              : e ===
                  o("WAWebSharableEventServerError").SharableEventServerCode
                    .InvalidCallLinkMediaType
                ? s._(/*BTDS*/ "")
                : e ===
                    o("WAWebSharableEventServerError").SharableEventServerCode
                      .CallLinkError
                  ? s._(/*BTDS*/ "")
                  : e ===
                        o("WAWebSharableEventServerError")
                          .SharableEventServerCode.MediaError ||
                      e ===
                        o("WAWebSharableEventServerError")
                          .SharableEventServerCode.InvalidCoverImageHandle
                    ? s._(/*BTDS*/ "")
                    : e ===
                        o("WAWebSharableEventServerError")
                          .SharableEventServerCode.CoverImageTooLarge
                      ? s._(/*BTDS*/ "")
                      : e ===
                          o("WAWebSharableEventServerError")
                            .SharableEventServerCode.CoverImageUploadFailed
                        ? s._(/*BTDS*/ "")
                        : e ===
                            o("WAWebSharableEventServerError")
                              .SharableEventServerCode.CreationRateLimited
                          ? s._(/*BTDS*/ "")
                          : null;
    }
    l.getSharableEventMutationErrorMessage = e;
  },
  226,
);
