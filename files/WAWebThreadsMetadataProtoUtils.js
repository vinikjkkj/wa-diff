__d(
  "WAWebThreadsMetadataProtoUtils",
  [
    "WALogger",
    "WAWebAiThreadCreationUtils",
    "WAWebAiThreadTypeUtils",
    "WAWebBotBaseGating",
    "WAWebBotUtils",
    "WAWebE2EProtoUtils",
    "WAWebProtobufMsgKeyUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebThreadMsgUtils",
    "WAWebThreadUtils",
    "WAWebThreadsGating",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m(e, t) {
      if (
        e.threadKey == null ||
        !o("WAWebBotBaseGating").isAiChatThreadsInfraEnabled()
      )
        return null;
      var n = {
          id: e.threadKey.id,
          remoteJid: t.remote.toString(),
          fromMe: !0,
        },
        r = o("WAWebProtobufMsgKeyUtils").protobufToMsgKey(n);
      return o("WAWebThreadUtils").getThreadIDfromType(
        r,
        o("WAWebThreadUtils").ThreadType.AiThread,
      );
    }
    function p(e, t) {
      var n = e.serverInfo,
        r = n == null ? void 0 : n.title,
        a = t.remote;
      if (o("WAWebBotUtils").isMetaAiBot(a))
        return {
          title: r,
          aiThreadType: o("WAWebAiThreadTypeUtils").AiThreadType.Default,
        };
      var i = e == null ? void 0 : e.clientInfo;
      if (i == null || i.type == null) return null;
      var l = o("WAWebAiThreadTypeUtils").getAiThreadTypeFromProto(i.type);
      return o("WAWebAiThreadTypeUtils").getAiThreadInfoFromType(r, l);
    }
    function _(t, n) {
      if (
        t.threadKey == null ||
        !o("WAWebThreadsGating").isViewRepliesInfraEnabled()
      )
        return null;
      var r = o(
        "WAWebE2EProtoUtils",
      ).translateRegularMessageKeyToLocalReference(t.threadKey, n);
      return r == null
        ? (o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[parseViewAllRepliesThreadId] null msgKey",
              ])),
          ),
          null)
        : o("WAWebThreadUtils").getThreadIDfromType(
            r,
            o("WAWebThreadUtils").ThreadType.ViewAllReplies,
          );
    }
    function f(e, t) {
      if ((t == null ? void 0 : t.threadId) != null) {
        var n = [],
          a = new Set();
        for (var i of t.threadId) {
          var l = i.threadType;
          if (l != null) {
            if (a.has(l))
              throw (
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[parseThreadsMetadataProto] duplicate threadType=",
                        "",
                      ])),
                    l,
                  )
                  .sendLogs("parse-threads-metadata-duplicate-thread-type"),
                r("err")("Duplicate ThreadType")
              );
            var c = null;
            e: {
              if (
                l === o("WAWebProtobufsE2E.pb").ThreadID$ThreadType.VIEW_REPLIES
              ) {
                c = _(i, e);
                break e;
              }
              if (
                l === o("WAWebProtobufsE2E.pb").ThreadID$ThreadType.AI_THREAD
              ) {
                c = m(i, e.id);
                break e;
              }
              if (l === o("WAWebProtobufsE2E.pb").ThreadID$ThreadType.UNKNOWN) {
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[parseThreadsMetadataProto] unknown threadType=",
                      "",
                    ])),
                  l,
                );
                continue;
              }
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  l,
              );
            }
            c != null && (n.push(c), a.add(l));
          }
        }
        n.length > 0 && (e.threadIds = n);
      }
    }
    function g(e, t) {
      var n,
        r,
        a = (n = e.threadIds) != null ? n : [];
      if (o("WAWebThreadMsgUtils").threadsContainAiThread(a)) {
        var i = (r = t == null ? void 0 : t.botMetadata) != null ? r : {},
          l = i.botThreadInfo,
          s = p(l != null ? l : {}, e.id);
        if (s != null) e.aiThreadInfo = s;
        else {
          var u = e.id.toString();
          o("WALogger")
            .WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[maybeParseAiThreadInfoFromProto] no aiThreadInfo, id=",
                  "",
                ])),
              u,
            )
            .sendLogs("ai-thread-missing-ai-thread-info");
          var m = JSON.stringify(e),
            _ = JSON.stringify(t);
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[maybeParseAiThreadInfoFromProto] msg=",
                ", ctxInfo=",
                "",
              ])),
            m,
            _,
          );
        }
      }
    }
    function h(e, t) {
      var n;
      if (
        t === "history" &&
        o("WAWebBotUtils").isMetaAiBot(e.id.remote) &&
        o("WAWebBotBaseGating").isAiChatThreadsInfraEnabled()
      ) {
        var r = (n = e.threadIds) != null ? n : [];
        (o("WAWebThreadMsgUtils").threadsContainAiThread(r) ||
          (e.threadIds = [].concat(r, [
            o("WAWebAiThreadCreationUtils").getHistoricalMetaAiThreadId(),
          ])),
          e.aiThreadInfo == null &&
            (e.aiThreadInfo = {
              aiThreadType: o("WAWebAiThreadTypeUtils").AiThreadType.Default,
              title: void 0,
            }));
      }
    }
    ((l.parseAiThreadInfo = p),
      (l.parseThreadsMetadataProto = f),
      (l.maybeParseAiThreadInfoFromProto = g),
      (l.maybeAddHistoricalAiThreadForMetaAi = h));
  },
  98,
);
