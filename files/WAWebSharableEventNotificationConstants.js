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
        "GuestJoinedWa",
      ]),
      s = e.Mirrored(["EventStartingSoon", "EventStarted"]),
      u = e.Mirrored([
        "FifteenMinutes",
        "ThirtyMinutes",
        "OneHour",
        "OneDay",
        "ThreeDays",
      ]);
    function c(e) {
      return e <= 22
        ? u.FifteenMinutes
        : e <= 45
          ? u.ThirtyMinutes
          : e <= 720
            ? u.OneHour
            : e <= 2880
              ? u.OneDay
              : u.ThreeDays;
    }
    var d = e.Mirrored(["DeletedByHost", "Expired"]),
      m = new Set([l.Update, l.Rsvp, l.Delete, l.GuestJoinedWa]);
    function p(e) {
      return m.has(e);
    }
    function _(e) {
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
                    : e === l.GuestJoinedWa
                      ? "guestJoinedWa"
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
      (i.SharableEventDeleteReason = d),
      (i.isSenderAttributed = p),
      (i.getIdentifierTag = _));
  },
  66,
);
