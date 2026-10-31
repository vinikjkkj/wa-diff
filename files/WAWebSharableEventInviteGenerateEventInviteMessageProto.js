__d(
  "WAWebSharableEventInviteGenerateEventInviteMessageProto",
  ["WAWebProtobufsE2E.pb"],
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
          status: o("WAWebProtobufsE2E.pb")
            .Message$EventInviteMessage$EventStatus.ACTIVE,
        },
      };
    }
    l.default = e;
  },
  98,
);
