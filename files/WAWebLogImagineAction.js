__d(
  "WAWebLogImagineAction",
  [
    "WAWebImagineActionsWamEvent",
    "WAWebWamEnumImagineActionSource",
    "WAWebWamEnumImagineActionTarget",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.action,
        n = e.source,
        r =
          n === void 0
            ? o("WAWebWamEnumImagineActionSource").IMAGINE_ACTION_SOURCE
                .ATTACHMEMT_TRAY
            : n,
        a = e.target,
        i =
          a === void 0
            ? o("WAWebWamEnumImagineActionTarget").IMAGINE_ACTION_TARGET
                .MEDIA_INPUT
            : a,
        l = e.mediaType,
        s = e.maxIndex,
        u = e.isCancelled,
        c = e.isSent,
        d = e.eventContext,
        m = new (o("WAWebImagineActionsWamEvent").ImagineActionsWamEvent)({
          aiSessionId: d.aiSessionId,
          imagineAction: t,
          imagineActionSource: r,
          imagineActionTarget: i,
          imagineMediaType: l,
          isCancelled: u,
          isSent: c,
          maxIndex: s,
          metaAiConversationThreadId: d.metaAiConversationThreadId,
          unifiedSessionId: d.unifiedSessionId,
        });
      m.commit();
    }
    l.logImagineAction = e;
  },
  98,
);
