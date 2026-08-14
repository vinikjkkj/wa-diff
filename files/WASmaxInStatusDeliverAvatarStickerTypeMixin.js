__d(
  "WASmaxInStatusDeliverAvatarStickerTypeMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "enc");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "sticker_type",
        "avatar",
      );
      return n.success
        ? o("WAResultOrError").makeResult({ stickerType: n.value })
        : n;
    }
    l.parseAvatarStickerTypeMixin = e;
  },
  98,
);
