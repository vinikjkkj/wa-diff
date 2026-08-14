__d(
  "LSMailboxInitialSyncCursor",
  [
    "CurrentAppID",
    "CurrentEnvironment",
    "I64",
    "LSPlatformMessengerSyncParams",
    "LSPlatformWorkplaceSyncParams",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        (r("CurrentEnvironment").facebookdotcom ||
          r("CurrentEnvironment").messengerdotcom) &&
        !r("CurrentEnvironment").workplacedotcom,
      u = r("gkx")("20836")
        ? r("LSPlatformWorkplaceSyncParams").mailbox
        : r("LSPlatformMessengerSyncParams").mailbox;
    function c() {
      var e = o("CurrentAppID").getAppID();
      return e === String(772021112871879) || e === String(0x7e36f3fcc43bc);
    }
    var d = (e || (e = o("I64"))).of_int32(c() ? 3 : 1),
      m = e.of_int32(0);
    ((l.isWebApp = s),
      (l.syncParams = u),
      (l.isMessengerWebApp = c),
      (l.syncChannel = d),
      (l.lastSyncTimestampMs = m));
  },
  98,
);
