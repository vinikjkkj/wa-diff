__d(
  "WAWebThreadsMetadataIdUtils",
  [
    "WALogger",
    "WAWebDBMessageUtils",
    "WAWebMsgKey",
    "WAWebProtobufsE2E.pb",
    "WAWebThreadUtils",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      var n = t.key;
      if (n instanceof r("WAWebMsgKey")) return n.toString();
      o("WALogger")
        .ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "threadMetadataDBId: key is not a WAWebMsgKey, type=",
              "",
            ])),
          t.type,
        )
        .sendLogs("thread-metadata-db-id: non-MsgKey-key");
      try {
        return r("WAWebMsgKey").from(n).toString();
      } catch (e) {
        return n.toString();
      }
    }
    function u(e) {
      var t = o("WAWebThreadUtils").getThreadsTypeAsE2EValue(e.type);
      if (t !== o("WAWebProtobufsE2E.pb").ThreadID$ThreadType.AI_THREAD)
        throw r("err")(
          "craftAiThreadDBId error: threadTypeEnum must be AI_THREAD",
        );
      return String(t) + "_" + s(e);
    }
    function c(e) {
      var t = o("WAWebThreadUtils").getThreadsTypeAsE2EValue(e.type);
      if (t !== o("WAWebProtobufsE2E.pb").ThreadID$ThreadType.VIEW_REPLIES)
        throw r("err")(
          "craftViewRepliesThreadDBId error: threadTypeEnum must be VIEW_REPLIES",
        );
      return String(t) + "_" + s(e);
    }
    function d(e) {
      var t = o("WAWebThreadUtils").getThreadsTypeAsE2EValue(e.type);
      return String(t) + "_" + s(e);
    }
    function m(e, t, n) {
      var r = o("WAWebThreadUtils").getThreadsTypeAsE2EValue(e),
        a = o("WAWebDBMessageUtils").orderPreservingHex(n);
      return String(r) + "_" + t + "_" + a;
    }
    function p(e, t) {
      var n = o("WAWebThreadUtils").getThreadsTypeAsE2EValue(t);
      return String(n) + "_" + e + "_";
    }
    ((l.craftAiThreadDBId = u),
      (l.craftViewRepliesThreadDBId = c),
      (l.craftThreadMetadataDBId = d),
      (l.craftThreadsMetadataInternalId = m),
      (l.craftThreadsMetadataInternalIdPrefixForChatAndThreadType = p));
  },
  98,
);
