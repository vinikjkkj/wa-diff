__d(
  "WAWebPresenceBridgeApi",
  [
    "WAWebChangePresenceHandlerAction",
    "WAWebPresenceCollection",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
      changePresenceHandler: function (t) {
        var e = t.id,
          n = t.participant,
          a = t.type;
        return r("WAWebChangePresenceHandlerAction")({
          id: o("WAWebWidFactory").createWid(e),
          type: a,
          participant: n != null ? o("WAWebWidFactory").createWid(n) : void 0,
        });
      },
      resetPresence: function (t) {
        var e = t.id,
          n = o("WAWebPresenceCollection").PresenceCollection.get(
            o("WAWebWidFactory").createWid(e),
          );
        n && n.reset();
      },
    };
    l.PresenceBridgeApi = e;
  },
  98,
);
