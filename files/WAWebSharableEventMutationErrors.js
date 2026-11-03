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
          ? s._(/*BTDS*/ "Check your event details and try again.")
          : t;
    }
    function u(e) {
      return e ===
        o("WAWebSharableEventServerError").SharableEventServerCode.InvalidTitle
        ? s._(/*BTDS*/ "Enter a valid name")
        : e ===
            o("WAWebSharableEventServerError").SharableEventServerCode
              .InvalidStartTime
          ? s._(/*BTDS*/ "Enter a valid start time")
          : e ===
              o("WAWebSharableEventServerError").SharableEventServerCode
                .InvalidEndTime
            ? s._(/*BTDS*/ "Enter a valid end time")
            : e ===
                o("WAWebSharableEventServerError").SharableEventServerCode
                  .InvalidReminderTime
              ? s._(/*BTDS*/ "Choose a different reminder time")
              : e ===
                  o("WAWebSharableEventServerError").SharableEventServerCode
                    .InvalidCallLinkMediaType
                ? s._(/*BTDS*/ "Choose a supported call type and try again.")
                : e ===
                    o("WAWebSharableEventServerError").SharableEventServerCode
                      .CallLinkError
                  ? s._(
                      /*BTDS*/ "Call link unavailable. The event call link couldn't be created.",
                    )
                  : e ===
                        o("WAWebSharableEventServerError")
                          .SharableEventServerCode.MediaError ||
                      e ===
                        o("WAWebSharableEventServerError")
                          .SharableEventServerCode.InvalidCoverImageHandle
                    ? s._(/*BTDS*/ "Can't use this image")
                    : e ===
                        o("WAWebSharableEventServerError")
                          .SharableEventServerCode.CoverImageTooLarge
                      ? s._(/*BTDS*/ "Image too large. Choose a smaller image.")
                      : e ===
                          o("WAWebSharableEventServerError")
                            .SharableEventServerCode.CoverImageUploadFailed
                        ? s._(/*BTDS*/ "Couldn't upload image")
                        : e ===
                            o("WAWebSharableEventServerError")
                              .SharableEventServerCode.CreationRateLimited
                          ? s._(
                              /*BTDS*/ "You've reached the daily limit for creating events. Try again tomorrow.",
                            )
                          : null;
    }
    l.getSharableEventMutationErrorMessage = e;
  },
  226,
);
