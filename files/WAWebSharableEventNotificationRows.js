__d(
  "WAWebSharableEventNotificationRows",
  ["WAWebSharableEventServerRows", "WAWebSharableEventStorageEnums"],
  function (t, n, r, o, a, i, l) {
    var e = 1e6;
    function s(e) {
      var t;
      return o("WAWebSharableEventServerRows").toSharableEventMetadata({
        id: e.event_id,
        name: e.event_name,
        description: e.description,
        status: e.event_status,
        created_ts_sec: e.created_ts_sec,
        last_updated_ts_usec: e.event_updated_ts_usec,
        start_ts_sec: e.start_ts_sec,
        end_ts_sec: e.end_ts_sec,
        reminder_ts_sec: e.reminder_ts_sec,
        max_additional_guests: e.max_additional_guests,
        creator_lid: e.creator_lid,
        location: e.location,
        call_link: e.call_link,
        cover_image_handle: (t = e.cover_image) == null ? void 0 : t.handle,
        cover_image:
          e.cover_image == null
            ? null
            : {
                uri: e.cover_image.uri,
                is_preset_image: e.cover_image.is_preset_image,
              },
      });
    }
    function u(t, n) {
      var r,
        a =
          (r = o("WAWebSharableEventServerRows").toOptionalNumber(
            t.invitation_list_updated_ts_usec,
          )) != null
            ? r
            : 0;
      return {
        eventId: t.event_id,
        inviteeLid: n,
        rsvpStatus: o("WAWebSharableEventStorageEnums")
          .SharableEventStoredRsvpStatus.NoResponse,
        isWaUser: !0,
        extraGuestCount: 0,
        createdTsSec: 0,
        lastUpdatedTsSec: Math.floor(a / e),
      };
    }
    ((l.toSharableEventMetadataFromNotification = s),
      (l.toSelfInviteeFromNotification = u));
  },
  98,
);
