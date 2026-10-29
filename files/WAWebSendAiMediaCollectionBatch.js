__d(
  "WAWebSendAiMediaCollectionBatch",
  [
    "fbt",
    "Promise",
    "WALogger",
    "WAWebActionToast.react",
    "WAWebAttachMediaConstants",
    "WAWebAttachMediaGetters",
    "WAWebBotUtils",
    "WAWebCreateAiMediaCollectionMsgData",
    "WAWebImagineActionLogger",
    "WAWebMsgKey",
    "WAWebSendAiMediaCollectionEnvelope",
    "WAWebToastManager",
    "asyncToGeneratorRuntime",
    "countWhere",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m = d || (d = o("react"));
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = t.botPersonaId,
            i = t.chat,
            l = t.medias,
            s = t.threadId;
          if (l.length !== 0) {
            o("WAWebImagineActionLogger").logImagineMediaSendConfirm({
              chat: i,
              mediaTypes: l.map(function (e) {
                return e.type;
              }),
              origins: l.map(function (e) {
                return e.fileOrigin;
              }),
            });
            var d = yield r("WAWebMsgKey").newId(),
              m = yield o(
                "WAWebCreateAiMediaCollectionMsgData",
              ).createAiMediaCollectionMsgData({
                botPersonaId: a,
                collectionId: d,
                hasGlobalCaption: !1,
                chat: i,
                expectedMediaCount: l.length,
                threadId: s,
              });
            try {
              yield o(
                "WAWebSendAiMediaCollectionEnvelope",
              ).sendAiMediaCollectionEnvelope(i, m);
            } catch (n) {
              (o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[ai-media-collection] envelope send failed: ",
                      "",
                    ])),
                  n,
                )
                .sendLogs("ai-media-collection-envelope-send-failed"),
                f(t));
              return;
            }
            var p = i.composeQuotedMsg;
            ((i.composeQuotedMsg = null), i.setAttachMediaContents(null));
            var _ = m.botPersonaId,
              g = m.botMetricsMetadata,
              h = m.aiThreadInfo,
              y = yield (c || (c = n("Promise"))).allSettled(
                l.map(function (e, t) {
                  var n = {
                    type: e.type,
                    caption: e.caption,
                    addEvenWhilePreparing:
                      o("WAWebAttachMediaGetters").getPreviewable(e) &&
                      e.state ===
                        o("WAWebAttachMediaConstants").ATTACH_MEDIA_STATE
                          .PROCESSING,
                    botPersonaId: _,
                    threadId: s,
                    aiMediaCollectionInfo: {
                      collectionId: d,
                      uploadOrderIndex: t,
                    },
                    botMetricsMetadata: g,
                    aiThreadInfo: h,
                  };
                  return (
                    t === 0 && (n.quotedMsg = p),
                    e.sendToChat({ chat: i, options: n })
                  );
                }),
              ),
              C = r("countWhere")(y, function (e) {
                return e.status === "fulfilled";
              });
            C < l.length &&
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[ai-media-collection] ",
                      "/",
                      " child send fail; may buffer",
                    ])),
                  l.length - C,
                  l.length,
                )
                .sendLogs("ai-media-collection-child-send-shortfall");
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      var t = new (o("WAWebActionToast.react").ActionType)(
        o("WAWebBotUtils").isMetaAiBot(e.chat.id)
          ? s._(/*BTDS*/ "Couldn't send to Meta AI.")
          : s._(/*BTDS*/ "Couldn't send your files."),
        {
          actionText: s._(/*BTDS*/ "Try again."),
          actionHandler: function () {
            return p(e);
          },
        },
      );
      o("WAWebToastManager").ToastManager.open(
        m.jsx(o("WAWebActionToast.react").ActionToast, {
          initialAction: t,
          pendingAction: (c || (c = n("Promise"))).resolve(t),
        }),
      );
    }
    l.sendAiMediaCollectionBatch = p;
  },
  226,
);
