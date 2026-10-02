__d(
  "WAWebThreadsMetadataProtoUtils",
  [
    "WALogger",
    "WAWebAiThreadCreationUtils",
    "WAWebAiThreadTypeUtils",
    "WAWebBotBaseGating",
    "WAWebBotUtils",
    "WAWebProtobufMsgKeyUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebThreadMsgUtils",
    "WAWebThreadUtils",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e, t) {
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
    function m(e, t) {
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
    function p(t, n) {
      if ((n == null ? void 0 : n.threadId) != null) {
        var a = [],
          i = new Set();
        for (var l of n.threadId) {
          var u = l.threadType;
          if (u != null) {
            if (i.has(u))
              throw (
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[parseThreadsMetadataProto] duplicate threadType=",
                        "",
                      ])),
                    u,
                  )
                  .sendLogs("parse-threads-metadata-duplicate-thread-type"),
                r("err")("Duplicate ThreadType")
              );
            var c = null;
            e: {
              if (
                u === o("WAWebProtobufsE2E.pb").ThreadID$ThreadType.VIEW_REPLIES
              )
                continue;
              if (
                u === o("WAWebProtobufsE2E.pb").ThreadID$ThreadType.AI_THREAD
              ) {
                c = d(l, t.id);
                break e;
              }
              if (u === o("WAWebProtobufsE2E.pb").ThreadID$ThreadType.UNKNOWN) {
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[parseThreadsMetadataProto] unknown threadType=",
                      "",
                    ])),
                  u,
                );
                continue;
              }
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  u,
              );
            }
            c != null && (a.push(c), i.add(u));
          }
        }
        a.length > 0 && (t.threadIds = a);
      }
    }
    function _(e, t) {
      var n,
        r,
        a = (n = e.threadIds) != null ? n : [];
      if (o("WAWebThreadMsgUtils").threadsContainAiThread(a)) {
        var i = (r = t == null ? void 0 : t.botMetadata) != null ? r : {},
          l = i.botThreadInfo,
          s = m(l != null ? l : {}, e.id);
        if (s != null) e.aiThreadInfo = s;
        else {
          var d = e.id.toString();
          o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[maybeParseAiThreadInfoFromProto] no aiThreadInfo, id=",
                  "",
                ])),
              d,
            )
            .sendLogs("ai-thread-missing-ai-thread-info");
          var p = JSON.stringify(e),
            _ = JSON.stringify(t);
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[maybeParseAiThreadInfoFromProto] msg=",
                ", ctxInfo=",
                "",
              ])),
            p,
            _,
          );
        }
      }
    }
    function f(e, t) {
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
    ((l.parseAiThreadInfo = m),
      (l.parseThreadsMetadataProto = p),
      (l.maybeParseAiThreadInfoFromProto = _),
      (l.maybeAddHistoricalAiThreadForMetaAi = f));
  },
  98,
);
