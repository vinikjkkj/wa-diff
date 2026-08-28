__d(
  "ZenonLoggingEventTypes",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("$InternalEnum").Mirrored(["Send", "Receive"]),
      l = n("$InternalEnum")({ Primary: "primary", Secondary: "secondary" }),
      s = "rtc_www";
    ((i.ZenonUpdateIceInfoDirection = e),
      (i.ZenonJoinMode = l),
      (i.tslogSource = s));
  },
  66,
);
