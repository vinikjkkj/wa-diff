__d(
  "MAIBAPlatformMessageListConnectionKey",
  ["MAIBAPlatformThreadRecordID", "RelayRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "MAIBAGeoPlatformMessageList_messages",
      s = "MAIBAPlatformMessageList_messages";
    function u(t) {
      return o("RelayRuntime").ConnectionHandler.getConnectionID(
        o("MAIBAPlatformThreadRecordID").maibaGeoPlatformThreadRecordID(t),
        e,
      );
    }
    function c(e) {
      return o("RelayRuntime").ConnectionHandler.getConnectionID(e, s);
    }
    ((l.maibaGeoPlatformThreadRecordID = o(
      "MAIBAPlatformThreadRecordID",
    ).maibaGeoPlatformThreadRecordID),
      (l.MAIBA_GEO_PLATFORM_MESSAGE_LIST_CONNECTION_KEY = e),
      (l.MAIBA_PLATFORM_MESSAGE_LIST_CONNECTION_KEY = s),
      (l.getMAIBAGeoPlatformMessageListConnectionID = u),
      (l.getMAIBAPlatformMessageListConnectionID = c));
  },
  98,
);
