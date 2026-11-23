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
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    async function c(e, t) {
      try {
        (await d(e, t),
          o(
            "WAWebSharableEventInviteeUserJourneyLogger",
          ).logSharableEventInviteeRsvpCompleted(e, t));
      } catch (t) {
        var n = o("WAWebSharableEventFailureLogger").logSharableEventFailure(
            "respond",
            t,
          ),
          r = n.kind;
        (o(
          "WAWebSharableEventInviteeUserJourneyLogger",
        ).logSharableEventInviteeRsvpFailed(e, t),
          o("WAWebToastManager").ToastManager.open(
            u.jsx(o("WAWebToast.react").Toast, { msg: m(r) }),
          ),
          r ===
            o("WAWebSharableEventServerError").SharableEventErrorKind
              .Unavailable &&
            (o("WAWebSharableEventLinkPreview").dropSharableEventLinkPreview(e),
            o("WAWebSharableEventPageLoadAction").loadSharableEventPage(e)));
      }
    }
    async function d(e, t) {
      var n = o("WAWebSharableEventLinkPreview").getSharableEventLinkToken(e);
      if (n == null) {
        await o("WAWebSharableEventUpdateRsvpJob").updateSharableEventRsvp(
          e,
          t,
        );
        return;
      }
      (await o("WAWebSharableEventJoinViaLinkJob").joinSharableEventViaLink(
        n,
        t,
      ),
        o("WAWebSharableEventLinkPreview").endSharableEventLinkPreview(e));
    }
    function m(e) {
      return e ===
        o("WAWebSharableEventServerError").SharableEventErrorKind.Transport
        ? s._(/*BTDS*/ "")
        : e ===
            o("WAWebSharableEventServerError").SharableEventErrorKind
              .Unavailable
          ? s._(/*BTDS*/ "")
          : s._(/*BTDS*/ "");
    }
    l.respondToSharableEvent = c;
  },
  226,
);
