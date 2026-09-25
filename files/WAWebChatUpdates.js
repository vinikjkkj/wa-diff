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
    var e, s;
    function u(t) {
      var n = Number(t.mute.expiration);
      o("WAWebDBUpdateChatTable")
        .updateChatTable(t.id, { muteExpiration: n })
        .then(function () {
          return (t.muteExpiration = n);
        })
        .catch(function (n) {
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "models:Chat:updateMuteExpiration ",
                  "",
                ])),
              t.id.toString(),
            )
            .catching(r("getErrorSafe")(n))
            .sendLogs("chat-update-mute-expiration-fail");
        });
    }
    function c(e) {
      var t,
        n = (t = e.mute.mentionAllMuteExpiration) != null ? t : 0;
      e.mentionAllMuteExpiration !== n &&
        o("WAWebDBUpdateChatTable")
          .updateChatTable(e.id, { mentionAllMuteExpiration: n })
          .then(function () {
            e.mentionAllMuteExpiration = n;
          });
    }
    function d(e) {
      var t,
        n = (t = e.mute.callExpiration) != null ? t : 0;
      e.callMuteExpiration !== n &&
        o("WAWebDBUpdateChatTable")
          .updateChatTable(e.id, { callMuteExpiration: n })
          .then(function () {
            e.callMuteExpiration = n;
          })
          .catch(function (t) {
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "models:Chat:updateCallMuteExpiration ",
                    "",
                  ])),
                e.id.toString(),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("chat-update-call-mute-expiration-fail");
          });
    }
    function m(e) {
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
    ((l.updateMuteExpiration = u),
      (l.updateMentionAllMuteExpiration = c),
      (l.updateCallMuteExpiration = d),
      (l.updateSortTime = m));
  },
  98,
);
