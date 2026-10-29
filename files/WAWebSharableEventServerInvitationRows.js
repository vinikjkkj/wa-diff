__d(
  "WAWebSharableEventServerInvitationRows",
  [
    "WAWebSharableEventServerInvitationRows_invitation.graphql",
    "WAWebSharableEventServerInvitationRows_summary.graphql",
    "WAWebSharableEventServerRows",
    "WAWebSharableEventStorageEnums",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u =
        e !== void 0
          ? e
          : (e = n(
              "WAWebSharableEventServerInvitationRows_invitation.graphql",
            )),
      c =
        s !== void 0
          ? s
          : (s = n("WAWebSharableEventServerInvitationRows_summary.graphql"));
    function d(e, t) {
      var n = e(u, t);
      return n == null ? null : _(n);
    }
    function m(e, t) {
      var n = e(c, t);
      return n == null ? null : p(n);
    }
    function p(e) {
      var t,
        n,
        r,
        a,
        i,
        l,
        s = e.count_by_rsvp_status;
      return {
        countGoing: (t = s == null ? void 0 : s.going) != null ? t : 0,
        countMaybe: (n = s == null ? void 0 : s.maybe) != null ? n : 0,
        countNotGoing: (r = s == null ? void 0 : s.not_going) != null ? r : 0,
        countNoResponse:
          (a = s == null ? void 0 : s.no_response) != null ? a : 0,
        totalInvitedCount: (i = e.total_invited_count) != null ? i : 0,
        lastInvitationUpdatedTsUsec:
          (l = o("WAWebSharableEventServerRows").toOptionalNumber(
            e.last_updated_ts_usec,
          )) != null
            ? l
            : 0,
      };
    }
    function _(e) {
      var t,
        n,
        r,
        a,
        i,
        l,
        s = o("WAWebSharableEventServerRows").toStoredLid(e.invitee_lid);
      return s == null
        ? null
        : {
            inviteeLid: s,
            username: (t = e.username) != null ? t : void 0,
            rsvpStatus: f(e.rsvp_status),
            isWaUser: e.is_wa_user === !0,
            extraGuestCount: (n = e.extra_guest_count) != null ? n : 0,
            createdTsSec:
              (r = o("WAWebSharableEventServerRows").toOptionalNumber(
                e.created_ts_sec,
              )) != null
                ? r
                : 0,
            lastUpdatedTsSec:
              (a = o("WAWebSharableEventServerRows").toOptionalNumber(
                e.last_updated_ts_sec,
              )) != null
                ? a
                : 0,
            phoneNumber: (i = e.phone_number) != null ? i : void 0,
            guestName: (l = e.guest_name) != null ? l : void 0,
          };
    }
    function f(e) {
      return e === "GOING"
        ? o("WAWebSharableEventStorageEnums").SharableEventStoredRsvpStatus
            .Going
        : e === "MAYBE"
          ? o("WAWebSharableEventStorageEnums").SharableEventStoredRsvpStatus
              .Maybe
          : e === "NOT_GOING"
            ? o("WAWebSharableEventStorageEnums").SharableEventStoredRsvpStatus
                .NotGoing
            : o("WAWebSharableEventStorageEnums").SharableEventStoredRsvpStatus
                .NoResponse;
    }
    ((l.readSharableEventInvitee = d),
      (l.readSharableEventInvitationSummary = m),
      (l.toSharableEventInvitationSummary = p),
      (l.toSharableEventInvitee = _));
  },
  98,
);
