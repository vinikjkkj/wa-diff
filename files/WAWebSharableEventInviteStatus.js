__d(
  "WAWebSharableEventInviteStatus",
  ["$InternalEnum", "WAWebProtobufsE2E.pb", "WAWebSharableEventStorageEnums"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum")({
      Active: "active",
      Canceled: "canceled",
      Suspended: "suspended",
      Deleted: "deleted",
      Left: "left",
      Removed: "removed",
    });
    function s(t) {
      return t ===
        o("WAWebProtobufsE2E.pb").Message$EventInviteMessage$EventStatus.ACTIVE
        ? e.Active
        : t ===
            o("WAWebProtobufsE2E.pb").Message$EventInviteMessage$EventStatus
              .CANCELED
          ? e.Canceled
          : t ===
              o("WAWebProtobufsE2E.pb").Message$EventInviteMessage$EventStatus
                .SUSPENDED
            ? e.Suspended
            : t ===
                o("WAWebProtobufsE2E.pb").Message$EventInviteMessage$EventStatus
                  .DELETED
              ? e.Deleted
              : t ===
                  o("WAWebProtobufsE2E.pb")
                    .Message$EventInviteMessage$EventStatus.LEFT_EVENT
                ? e.Left
                : t ===
                    o("WAWebProtobufsE2E.pb")
                      .Message$EventInviteMessage$EventStatus
                      .REMOVED_FROM_INVITE_LIST
                  ? e.Removed
                  : t ===
                        o("WAWebProtobufsE2E.pb")
                          .Message$EventInviteMessage$EventStatus.UNKNOWN ||
                      t === null ||
                      t === void 0
                    ? null
                    : (function () {
                        throw Error(
                          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                            t,
                        );
                      })();
    }
    function u(t) {
      return t === e.Active
        ? o("WAWebProtobufsE2E.pb").Message$EventInviteMessage$EventStatus
            .ACTIVE
        : t === e.Canceled
          ? o("WAWebProtobufsE2E.pb").Message$EventInviteMessage$EventStatus
              .CANCELED
          : t === e.Suspended
            ? o("WAWebProtobufsE2E.pb").Message$EventInviteMessage$EventStatus
                .SUSPENDED
            : t === e.Deleted
              ? o("WAWebProtobufsE2E.pb").Message$EventInviteMessage$EventStatus
                  .DELETED
              : t === e.Left
                ? o("WAWebProtobufsE2E.pb")
                    .Message$EventInviteMessage$EventStatus.LEFT_EVENT
                : t === e.Removed
                  ? o("WAWebProtobufsE2E.pb")
                      .Message$EventInviteMessage$EventStatus
                      .REMOVED_FROM_INVITE_LIST
                  : (function () {
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          t,
                      );
                    })();
    }
    function c(t) {
      return t ===
        o("WAWebSharableEventStorageEnums").SharableEventStoredStatus.Active
        ? e.Active
        : t ===
            o("WAWebSharableEventStorageEnums").SharableEventStoredStatus
              .Canceled
          ? e.Canceled
          : t ===
              o("WAWebSharableEventStorageEnums").SharableEventStoredStatus
                .Suspended
            ? e.Suspended
            : t ===
                o("WAWebSharableEventStorageEnums").SharableEventStoredStatus
                  .Unknown
              ? null
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      t,
                  );
                })();
    }
    function d(t) {
      return t === e.Deleted || t === e.Left || t === e.Removed;
    }
    function m(t, n) {
      return t === e.Canceled || n === !0;
    }
    ((l.SharableEventInviteStatus = e),
      (l.toSharableEventInviteStatus = s),
      (l.toEventInviteMessageStatus = u),
      (l.toSharableEventInviteStatusFromStored = c),
      (l.isSharableEventInviteAccessLost = d),
      (l.isSharableEventInviteCanceled = m));
  },
  98,
);
