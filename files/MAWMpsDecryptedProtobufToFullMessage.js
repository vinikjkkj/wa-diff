__d(
  "MAWMpsDecryptedProtobufToFullMessage",
  [
    "MAWMpsGenerateMessageFromBackupMessage",
    "MAWMpsGenerateSupplementalFromBackupMessage",
    "MpsTypes",
    "WmiErrorFixesGate",
    "WmiMapIsolated",
    "classifyProtobufDecodeError",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (!o("WmiErrorFixesGate").isWmiErrorFixEnabled())
        try {
          return e
            .map(function (e) {
              return s(e, t);
            })
            .filter(Boolean);
        } catch (e) {
          throw r("classifyProtobufDecodeError")(e, "protobuf_decode");
        }
      var n = o("WmiMapIsolated").wmiMapIsolated(
          e,
          function (e) {
            return e == null ? void 0 : e.otid;
          },
          function (e) {
            return s(e, t);
          },
          function (e, t) {
            return r("classifyProtobufDecodeError")(e, t, "read_failed");
          },
          "protobuf_decode",
        ),
        a = n.results;
      return a.filter(Boolean);
    }
    function s(e, t) {
      var n;
      if (e == null) return null;
      var r = o("MAWMpsGenerateMessageFromBackupMessage").generateMessage(
        e.toplevelProtobuf,
        t,
      );
      if (r == null) return null;
      var a = new Map();
      return (
        e.supplementalProtobufs.forEach(function (e, t) {
          var n = e.decryptedProtobuf,
            r = o(
              "MAWMpsGenerateSupplementalFromBackupMessage",
            ).generateSupplemental(n);
          r != null && a.set(o("MpsTypes").toSupplementalKey(t), r);
        }),
        {
          attachmentData: e.attachmentData,
          expiryTimestampMs: null,
          supplementalProtobufs: a,
          tags: (n = e.tags) != null ? n : [],
          toplevelProtobuf: r,
        }
      );
    }
    l.decryptedProtobufToFullMessage = e;
  },
  98,
);
