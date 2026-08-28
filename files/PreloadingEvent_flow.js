__d(
  "PreloadingEvent.flow",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("$InternalEnum").Mirrored([
        "ADS_INTERFACES_PRELOADING_SUCCESS",
        "ADS_INTERFACES_PRELOADING_ISSUE",
      ]),
      l = n("$InternalEnum").Mirrored([
        "UNNECESSARY_SERVER_PRELOADING",
        "ERROR_LOADING_PRELOADED_DATA",
        "SERVER_DIDNT_SEND_ALL_NECESSARY_DATA",
        "SERVER_DIDNT_BEAT_JS_EXECUTION",
        "SERVER_DIDNT_BEAT_API_START",
        "SERVER_DIDNT_BEAT_API",
        "SERVER_DISABLED_DIDNT_SEND_DATA",
        "PRELOAD_HIT",
        "UNUSED_PRELOADED_DATA",
      ]);
    ((i.PreloadingEventName = e), (i.PreloadingEventType = l));
  },
  66,
);
