__d(
  "WAWebDBChatSerialization",
  [
    "WAWebProtobufsMdStorageChatRowOpaqueData.pb",
    "decodeProtobuf",
    "encodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["draftMessage"],
      s = ["draftMessage"];
    function u(e) {
      var t = babelHelpers.extends({}, e);
      return (c(t), t);
    }
    function c(e) {
      var t = o("decodeProtobuf").decodeProtobuf(
        o("WAWebProtobufsMdStorageChatRowOpaqueData.pb").ChatRowOpaqueDataSpec,
        e.chatRowOpaqueData,
      );
      s.forEach(function (n) {
        (t == null ? void 0 : t[n]) != null &&
          (e[n] = t == null ? void 0 : t[n]);
      });
    }
    function d(e) {
      return m(babelHelpers.extends({}, e));
    }
    function m(t) {
      var n = {};
      s.forEach(function (e) {
        n[e] = t[e];
      });
      var r = t.draftMessage,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = o("encodeProtobuf").encodeProtobuf(
          o("WAWebProtobufsMdStorageChatRowOpaqueData.pb")
            .ChatRowOpaqueDataSpec,
          n,
        );
      return ((a.chatRowOpaqueData = i.readBuffer()), a);
    }
    ((l.CHAT_OPAQUE_DATA_KEYS = s),
      (l.deserializeChat = u),
      (l.serializeChat = d));
  },
  98,
);
