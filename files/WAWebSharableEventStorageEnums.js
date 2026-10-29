__d(
  "WAWebSharableEventStorageEnums",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    var e,
      l = (e = n("$InternalEnum"))({
        Unknown: 0,
        Active: 1,
        Canceled: 2,
        Suspended: 3,
      }),
      s = e({ NoResponse: 0, Going: 1, Maybe: 2, NotGoing: 3 }),
      u = e({ Video: 0, Voice: 1 }),
      c = e({
        NewEvent: 1,
        DateChanged: 2,
        TimeChanged: 4,
        LocationChanged: 8,
      });
    ((i.SharableEventStoredStatus = l),
      (i.SharableEventStoredRsvpStatus = s),
      (i.SharableEventCallLinkMediaType = u),
      (i.SharableEventChangeFlag = c));
  },
  66,
);
