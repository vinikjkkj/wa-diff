__d(
  "WAWebRespondToSharableEventAction",
  [
    "fbt",
    "WAWebSharableEventFailureLogger",
    "WAWebSharableEventPageLoadAction",
    "WAWebSharableEventServerError",
    "WAWebSharableEventUpdateRsvpJob",
    "WAWebToast.react",
    "WAWebToastManager",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            yield o("WAWebSharableEventUpdateRsvpJob").updateSharableEventRsvp(
              e,
              t,
            );
          } catch (t) {
            var n = o(
                "WAWebSharableEventFailureLogger",
              ).logSharableEventFailure("respond", t),
              r = n.kind;
            (o("WAWebToastManager").ToastManager.open(
              u.jsx(o("WAWebToast.react").Toast, { msg: m(r) }),
            ),
              r ===
                o("WAWebSharableEventServerError").SharableEventErrorKind
                  .Unavailable &&
                o("WAWebSharableEventPageLoadAction").loadSharableEventPage(e));
          }
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return e ===
        o("WAWebSharableEventServerError").SharableEventErrorKind.Transport
        ? s._(
            /*BTDS*/ "Couldn't update your response. Check your connection and try again.",
          )
        : e ===
            o("WAWebSharableEventServerError").SharableEventErrorKind
              .Unavailable
          ? s._(/*BTDS*/ "This event is no longer available.")
          : s._(/*BTDS*/ "Failed to update response");
    }
    l.respondToSharableEvent = c;
  },
  226,
);
