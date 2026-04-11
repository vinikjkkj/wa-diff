__d(
  "WAWebEventsGenerateEventCreationMessageProto",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      var t,
        n = e.contextInfo,
        r = e.json,
        o = {
          description: r.eventDescription,
          isCanceled: r.isEventCanceled,
          location: r.eventLocation,
          name: r.eventName,
          startTime: r.eventStartTime,
          endTime: r.eventEndTime,
          joinLink: r.eventJoinLink,
          contextInfo: n != null ? n : void 0,
          isScheduleCall: (t = r.eventIsScheduledCall) != null ? t : void 0,
        };
      return { eventMessage: o };
    }
    i.default = e;
  },
  66,
);
