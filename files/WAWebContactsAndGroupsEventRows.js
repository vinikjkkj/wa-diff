__d(
  "WAWebContactsAndGroupsEventRows",
  ["WAWebContactsAndGroupsSampleData", "WAWebFrontendChatGetters"],
  function (t, n, r, o, a, i, l) {
    var e = 3600,
      s = 24 * e,
      u = 2 * e,
      c = [
        { days: 1, hour: 18, name: "Monthly catch-up" },
        { days: 3, hour: 12, name: "Team lunch" },
        { days: 6, hour: 19, name: "Movie night" },
      ];
    function d(t, n) {
      var r = t.filter(function (e) {
        return !o("WAWebFrontendChatGetters").getIsCommunity(e);
      });
      if (r.length === 0) return [];
      var a = new Date(n * 1e3);
      a.setHours(0, 0, 0, 0);
      var i = Math.floor(a.getTime() / 1e3);
      return c.map(function (t, n) {
        var a = i + t.days * s + t.hour * e;
        return {
          chat: r[n % r.length],
          endTime: a + u,
          key: "sample-event-" + n,
          name: t.name,
          onOpen: o("WAWebContactsAndGroupsSampleData").showSampleDataToast,
          startTime: a,
        };
      });
    }
    function m(e, t) {
      var n;
      return {
        chat: e.chat,
        endTime: e.msg.eventEndTime,
        key: e.msg.id.toString(),
        name: (n = e.msg.eventName) != null ? n : "",
        onOpen: function () {
          return t(e);
        },
        startTime: e.msg.eventStartTime,
      };
    }
    ((l.getSampleEventRows = d), (l.toEventRow = m));
  },
  98,
);
