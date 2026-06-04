__d(
  "WAWebChatUpdates",
  [
    "WAAbortError",
    "WALogger",
    "WARaceSignal",
    "WAWebChatGetMessage",
    "WAWebChatLoadMessages",
    "WAWebDBUpdateChatTable",
    "WAWebNoop",
    "WAWebReleaseToEventLoop",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      var t = Number(e.mute.expiration);
      o("WAWebDBUpdateChatTable")
        .updateChatTable(e.id, { muteExpiration: t })
        .then(function () {
          return (e.muteExpiration = t);
        });
    }
    function u(e) {
      var t,
        n = (t = e.mute.mentionAllMuteExpiration) != null ? t : 0;
      e.mentionAllMuteExpiration !== n &&
        o("WAWebDBUpdateChatTable")
          .updateChatTable(e.id, { mentionAllMuteExpiration: n })
          .then(function () {
            e.mentionAllMuteExpiration = n;
          });
    }
    function c(t) {
      var n,
        a = (n = t.mute.callExpiration) != null ? n : 0;
      t.callMuteExpiration !== a &&
        o("WAWebDBUpdateChatTable")
          .updateChatTable(t.id, { callMuteExpiration: a })
          .then(function () {
            t.callMuteExpiration = a;
          })
          .catch(function (n) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "models:Chat:updateCallMuteExpiration ",
                    "",
                  ])),
                t.id.toString(),
              )
              .catching(r("getErrorSafe")(n))
              .sendLogs("chat-update-call-mute-expiration-fail");
          });
    }
    function d(e) {
      if (!e.promises.updateSortTime) {
        var t = new AbortController(),
          n = t.signal,
          a = r("WARaceSignal")(
            [n, e.getAbortController().signal],
            function (t) {
              var n = o("WAWebReleaseToEventLoop").releaseToEventLoop();
              return n
                .then(function () {
                  var t = o("WAWebChatGetMessage").getLastTimestampMsg(e);
                  if (t) {
                    e.t = t.t;
                    return;
                  } else {
                    if (e.msgs.msgLoadState.noEarlierMsgs) return;
                    if (e.pendingMsgs) return;
                  }
                  return o("WAWebChatLoadMessages").loadEarlierMsgs({
                    chat: e,
                  });
                })
                .then(function (n) {
                  if (t.aborted) throw new (o("WAAbortError").AbortError)();
                  if (n) {
                    var r = o("WAWebChatGetMessage").getLastTimestampMsg(e);
                    e.t = r ? r.t : void 0;
                  }
                })
                .catch(r("WAWebNoop"))
                .finally(function () {
                  e.promises.updateSortTime = void 0;
                });
            },
          );
        e.promises.updateSortTime = { promise: a, abortController: t };
      }
    }
    ((l.updateMuteExpiration = s),
      (l.updateMentionAllMuteExpiration = u),
      (l.updateCallMuteExpiration = c),
      (l.updateSortTime = d));
  },
  98,
);
