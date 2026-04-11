__d(
  "WAWebChatUpdates",
  [
    "WAAbortError",
    "WACommonTaskScheduler",
    "WAPromiseDelays",
    "WARaceSignal",
    "WAWebABProps",
    "WAWebChatGetMessage",
    "WAWebChatLoadMessages",
    "WAWebDBUpdateChatTable",
    "WAWebNoop",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = Number(e.mute.expiration);
      o("WAWebDBUpdateChatTable")
        .updateChatTable(e.id, { muteExpiration: t })
        .then(function () {
          return (e.muteExpiration = t);
        });
    }
    function s(e) {
      var t,
        n = (t = e.mute.mentionAllMuteExpiration) != null ? t : 0;
      e.mentionAllMuteExpiration !== n &&
        o("WAWebDBUpdateChatTable")
          .updateChatTable(e.id, { mentionAllMuteExpiration: n })
          .then(function () {
            e.mentionAllMuteExpiration = n;
          });
    }
    function u(e) {
      if (!e.promises.updateSortTime) {
        var t = new AbortController(),
          n = t.signal,
          a = r("WARaceSignal")(
            [n, e.getAbortController().signal],
            function (t) {
              var n = o("WAWebABProps").getABPropConfigValue(
                "wmi_worker_scheduler_web",
              )
                ? r("WACommonTaskScheduler").yield()
                : o("WAPromiseDelays").releaseToEventLoop();
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
    ((l.updateMuteExpiration = e),
      (l.updateMentionAllMuteExpiration = s),
      (l.updateSortTime = u));
  },
  98,
);
