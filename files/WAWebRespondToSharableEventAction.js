__d(
  "WAWebRespondToSharableEventAction",
  [
    "fbt",
    "WAWebSharableEventFailureLogger",
    "WAWebSharableEventInviteeUserJourneyLogger",
    "WAWebSharableEventJoinViaLinkJob",
    "WAWebSharableEventLinkPreview",
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
            (yield m(e, t),
              o(
                "WAWebSharableEventInviteeUserJourneyLogger",
              ).logSharableEventInviteeRsvpCompleted(e, t));
          } catch (t) {
            var n = o(
                "WAWebSharableEventFailureLogger",
              ).logSharableEventFailure("respond", t),
              r = n.kind;
            (o(
              "WAWebSharableEventInviteeUserJourneyLogger",
            ).logSharableEventInviteeRsvpFailed(e, t),
              o("WAWebToastManager").ToastManager.open(
                u.jsx(o("WAWebToast.react").Toast, { msg: _(r) }),
              ),
              r ===
                o("WAWebSharableEventServerError").SharableEventErrorKind
                  .Unavailable &&
                (o(
                  "WAWebSharableEventLinkPreview",
                ).dropSharableEventLinkPreview(e),
                o("WAWebSharableEventPageLoadAction").loadSharableEventPage(
                  e,
                )));
          }
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WAWebSharableEventLinkPreview").getSharableEventLinkToken(
            e,
          );
          if (n == null) {
            yield o("WAWebSharableEventUpdateRsvpJob").updateSharableEventRsvp(
              e,
              t,
            );
            return;
          }
          (yield o("WAWebSharableEventJoinViaLinkJob").joinSharableEventViaLink(
            n,
            t,
          ),
            o("WAWebSharableEventLinkPreview").endSharableEventLinkPreview(e));
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
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
