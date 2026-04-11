__d(
  "WAWebMessagePluginGenerateWebMessageInfo",
  [
    "WAWebE2EProtoUtils",
    "WAWebMessagePluginGenerateWebMessageInfoRegistry",
    "WAWebPluginCreateRegistryLookup",
    "WAWebProtobufMsgKeyUtils",
    "WAWebProtobufsWeb.pb",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebPluginCreateRegistryLookup").createMsgTypeRegistryLookup(
      r("WAWebMessagePluginGenerateWebMessageInfoRegistry"),
    );
    function s(t, n) {
      var r,
        a,
        i,
        l = babelHelpers.extends(
          {
            key: o("WAWebProtobufMsgKeyUtils").msgKeyToProtobuf(t.id),
            labels: (r = t.labels) != null ? r : [],
            status: o("WAWebProtobufsWeb.pb").WebMessageInfo$Status.PENDING,
            messageTimestamp: t.t,
          },
          n,
        );
      t.ephemeralStartTimestamp != null &&
        (l.ephemeralStartTimestamp = t.ephemeralStartTimestamp);
      var s = o("WAWebE2EProtoUtils").encodeJid(t.originalSelfAuthor);
      return (
        s != null && (l.originalSelfAuthorUserJidString = s),
        t.revokeTimestamp != null &&
          (l.revokeMessageTimestamp = t.revokeTimestamp),
        t.id.participant &&
          (l.participant = o("WAWebE2EProtoUtils").encodeJid(t.id.participant)),
        (a =
          (i = e(t.type, t.subtype)) == null || i.generateWebMessageInfo == null
            ? void 0
            : i.generateWebMessageInfo(t, l)) != null
          ? a
          : null
      );
    }
    l.generateWebMessageInfo = s;
  },
  98,
);
