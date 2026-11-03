__d(
  "WAWebSharableEventInviteGenerateEventInviteMessageProto",
  ["WAWebProtobufsE2E.pb", "WAWebSharableEventInviteStatus"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.contextInfo,
        n = e.json;
      return {
        eventInviteMessage: {
          contextInfo: t != null ? t : void 0,
          eventId: n == null ? void 0 : n.sharableEventInviteId,
          eventTitle: n == null ? void 0 : n.sharableEventInviteTitle,
          startTime: n == null ? void 0 : n.sharableEventInviteStartTime,
          endTime: n == null ? void 0 : n.sharableEventInviteEndTime,
          callLink: n == null ? void 0 : n.sharableEventInviteCallLink,
          jpegThumbnail:
            n == null ? void 0 : n.sharableEventInviteJpegThumbnail,
          status:
            (n == null ? void 0 : n.sharableEventInviteStatus) != null
              ? o("WAWebSharableEventInviteStatus").toEventInviteMessageStatus(
                  n.sharableEventInviteStatus,
                )
              : o("WAWebProtobufsE2E.pb").Message$EventInviteMessage$EventStatus
                  .ACTIVE,
          locationName: n == null ? void 0 : n.sharableEventInviteLocationName,
          coverImageHandle:
            n == null ? void 0 : n.sharableEventInviteCoverImageHandle,
          lastUpdatedTsUsec:
            n == null ? void 0 : n.sharableEventInviteLastUpdatedTsUsec,
        },
      };
    }
    l.default = e;
  },
  98,
);
