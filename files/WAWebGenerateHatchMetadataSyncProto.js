__d(
  "WAWebGenerateHatchMetadataSyncProto",
  ["WAWebGenerateHatchProtocolMessage", "cr:7454", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        a = e.json,
        i = a.hatchMetadataSync;
      if (i == null || i.type !== "req")
        throw r("err")(
          "Missing req-typed hatchMetadataSync for hatch_metadata_sync message",
        );
      var l = o(
          "WAWebGenerateHatchProtocolMessage",
        ).generateHatchProtocolMessage(i),
        s =
          (t = l.protocolMessage) == null ||
          (t = t.aiMetadataOperation) == null ||
          (t = t.hatchMetadataSync) == null
            ? void 0
            : t.data;
      return (
        s != null &&
          (n("cr:7454") == null ||
            n("cr:7454").recordOutbound(i.request, i.requestId, s)),
        l
      );
    }
    l.default = e;
  },
  98,
);
