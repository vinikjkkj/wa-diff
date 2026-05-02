__d(
  "WAWebImagineActionLogger",
  [
    "WAWebGetMetaAiImagineEventContext",
    "WAWebImagineActionsWamEvent",
    "WAWebWamEnumImagineAction",
    "WAWebWamEnumImagineActionSource",
    "WAWebWamEnumImagineActionTarget",
    "WAWebWamEnumImagineMediaType",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          u({
            action: o("WAWebWamEnumImagineAction").IMAGINE_ACTION
              .MEDIA_INPUT_DOCUMENT_CLICK,
            mediaType: o("WAWebWamEnumImagineMediaType").IMAGINE_MEDIA_TYPE
              .DOCUMENT,
            eventContext: yield o(
              "WAWebGetMetaAiImagineEventContext",
            ).getMetaAiImagineEventContext(e),
          });
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
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
    ((l.logMetaAiDocumentClick = e), (l.logImagineAction = u));
  },
  98,
);
