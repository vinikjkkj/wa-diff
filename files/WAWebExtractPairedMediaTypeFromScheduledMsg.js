__d(
  "WAWebExtractPairedMediaTypeFromScheduledMsg",
  ["WAWebGetScheduledMsgContextInfo", "WAWebPairedMediaTypeProtoUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WAWebGetScheduledMsgContextInfo").getScheduledMsgContextInfo(
        e,
      );
      if (t == null) return {};
      var n = o("WAWebPairedMediaTypeProtoUtils").pairedMediaTypeFromProto(
        t.pairedMediaType,
      );
      return n != null ? { pairedMediaType: n } : {};
    }
    l.extractPairedMediaTypeFromScheduledMsg = e;
  },
  98,
);
