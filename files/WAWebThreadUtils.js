__d(
  "WAWebThreadUtils",
  ["WAWebMsgKey", "WAWebProtobufsE2E.pb", "WAWebThreadId", "err"],
  function (t, n, r, o, a, i, l) {
    var e = { AiThread: "aiThread", ViewAllReplies: "viewAllReplies" };
    function s(t) {
      switch (t) {
        case e.AiThread:
        case String(o("WAWebProtobufsE2E.pb").ThreadID$ThreadType.AI_THREAD):
          return e.AiThread;
        case e.ViewAllReplies:
        case String(o("WAWebProtobufsE2E.pb").ThreadID$ThreadType.VIEW_REPLIES):
          return e.ViewAllReplies;
        default:
          throw r("err")("getThreadTypeFromString error: invalid thread type");
      }
    }
    function u(t, n) {
      switch (n) {
        case e.AiThread:
          return new (r("WAWebThreadId"))({
            type: n,
            key: r("WAWebMsgKey").from(t),
          });
        case e.ViewAllReplies:
          return new (r("WAWebThreadId"))({
            type: n,
            key: r("WAWebMsgKey").from(t),
          });
        default:
          throw r("err")("getThreadIDfromType error: invalid thread type");
      }
    }
    function c(t) {
      switch (t) {
        case o("WAWebProtobufsE2E.pb").ThreadID$ThreadType.AI_THREAD:
          return e.AiThread;
        case o("WAWebProtobufsE2E.pb").ThreadID$ThreadType.VIEW_REPLIES:
          return e.ViewAllReplies;
        case o("WAWebProtobufsE2E.pb").ThreadID$ThreadType.UNKNOWN:
          throw r("err")(
            "getThreadsTypeFromE2EValue error: UNKNOWN thread type",
          );
      }
    }
    function d(t) {
      switch (t) {
        case e.AiThread:
          return o("WAWebProtobufsE2E.pb").ThreadID$ThreadType.AI_THREAD;
        case e.ViewAllReplies:
          return o("WAWebProtobufsE2E.pb").ThreadID$ThreadType.VIEW_REPLIES;
      }
    }
    ((l.ThreadType = e),
      (l.getThreadTypeFromString = s),
      (l.getThreadIDfromType = u),
      (l.getThreadsTypeFromE2EValue = c),
      (l.getThreadsTypeAsE2EValue = d));
  },
  98,
);
