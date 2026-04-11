__d(
  "WAWebDBChatSerialization",
  [
    "WAWebProtobufsMdStorageChatRowOpaqueData.pb",
    "decodeProtobuf",
    "encodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["draftMessage"];
    function s(e) {
      var t = babelHelpers.extends({}, e);
      return (u(t), t);
    }
    function u(t) {
      var n = o("decodeProtobuf").decodeProtobuf(
        o("WAWebProtobufsMdStorageChatRowOpaqueData.pb").ChatRowOpaqueDataSpec,
        t.chatRowOpaqueData,
      );
      e.forEach(function (e) {
        (n == null ? void 0 : n[e]) != null &&
          (t[e] = n == null ? void 0 : n[e]);
      });
    }
    function c(e) {
      var t = babelHelpers.extends({}, e);
      return (d(t), t);
    }
    function d(t) {
      var n = {};
      e.forEach(function (e) {
        ((n[e] = t[e]), delete t[e]);
      });
      var r = o("encodeProtobuf").encodeProtobuf(
        o("WAWebProtobufsMdStorageChatRowOpaqueData.pb").ChatRowOpaqueDataSpec,
        n,
      );
      t.chatRowOpaqueData = r.readBuffer();
    }
    ((l.deserializeChat = s), (l.serializeChat = c));
  },
  98,
);
