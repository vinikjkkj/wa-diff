__d(
  "WAWebSharableEventNotificationConstants",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    var e,
      l = (e = n("$InternalEnum")).Mirrored([
        "Invite",
        "Update",
        "Rsvp",
        "Delete",
        "Reminder",
        "InviteRemove",
        "Suspended",
      ]),
      s = e.Mirrored(["EventStartingSoon", "EventStarted"]),
      u = e.Mirrored([
        "OneMinute",
        "FiveMinutes",
        "FifteenMinutes",
        "ThirtyMinutes",
        "OneHour",
        "OneDay",
      ]);
    function c(e) {
      return e <= 3
        ? u.OneMinute
        : e <= 10
          ? u.FiveMinutes
          : e <= 22
            ? u.FifteenMinutes
            : e <= 45
              ? u.ThirtyMinutes
              : e <= 720
                ? u.OneHour
                : u.OneDay;
    }
    var d = e.Mirrored(["Going", "Maybe", "NotGoing", "NoResponse"]),
      m = e.Mirrored(["Active", "Canceled", "Suspended"]),
      p = e.Mirrored(["DeletedByHost", "Expired"]),
      _ = new Set([l.Update, l.Rsvp, l.Delete]);
    function f(e) {
      return _.has(e);
    }
    function g(e) {
      return e === l.Invite
        ? "invite"
        : e === l.Update
          ? "update"
          : e === l.Rsvp
            ? "rsvp"
            : e === l.Delete
              ? "delete"
              : e === l.Reminder
                ? "reminder"
                : e === l.InviteRemove
                  ? "inviteRemove"
                  : e === l.Suspended
                    ? "suspended"
                    : (function () {
                        throw Error(
                          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                            e,
                        );
                      })();
    }
    ((i.SharableEventNotificationType = l),
      (i.SharableEventReminderType = s),
      (i.SharableEventReminderLeadTimeBucket = u),
      (i.nearestReminderBucket = c),
      (i.SharableEventNotificationRsvpStatus = d),
      (i.SharableEventStatus = m),
      (i.SharableEventDeleteReason = p),
      (i.isSenderAttributed = f),
      (i.getIdentifierTag = g));
  },
  66,
);
