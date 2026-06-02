__d(
  "WAWebSharableEventInviteValidationError",
  ["$InternalEnum", "WAWebHandleMsgError"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum")({
        SHARABLE_EVENT_INVITE_MISSING_EVENT_ID:
          "sharable_event_invite_missing_event_id",
        SHARABLE_EVENT_INVITE_MISSING_EVENT_TITLE:
          "sharable_event_invite_missing_event_title",
        SHARABLE_EVENT_INVITE_MISSING_START_TIME:
          "sharable_event_invite_missing_start_time",
        SHARABLE_EVENT_INVITE_MISSING_MESSAGE_SENDER:
          "sharable_event_invite_missing_message_sender",
      }),
      s = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name = "SharableEventInviteValidationError"),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(o("WAWebHandleMsgError").MessageValidationError);
    ((l.SharableEventInviteValidationErrorCode = e),
      (l.SharableEventInviteValidationError = s));
  },
  98,
);
