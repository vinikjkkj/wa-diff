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
            s = t.onMsgKeyCreated,
            d = t.threadId;
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
            var m = yield r("WAWebMsgKey").newId(),
              p = yield o(
                "WAWebCreateAiMediaCollectionMsgData",
              ).createAiMediaCollectionMsgData({
                botPersonaId: a,
                collectionId: m,
                hasGlobalCaption: !1,
                chat: i,
                expectedMediaCount: l.length,
                threadId: d,
              });
            try {
              yield o(
                "WAWebSendAiMediaCollectionEnvelope",
              ).sendAiMediaCollectionEnvelope(i, p);
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
            var _ = i.composeQuotedMsg;
            ((i.composeQuotedMsg = null), i.setAttachMediaContents(null));
            var g = p.botPersonaId,
              h = p.botMetricsMetadata,
              y = p.aiThreadInfo,
              C = yield (c || (c = n("Promise"))).allSettled(
                l.map(function (e, t) {
                  var n = {
                    type: e.type,
                    caption: e.caption,
                    addEvenWhilePreparing:
                      o("WAWebAttachMediaGetters").getPreviewable(e) &&
                      e.state ===
                        o("WAWebAttachMediaConstants").ATTACH_MEDIA_STATE
                          .PROCESSING,
                    botPersonaId: g,
                    threadId: d,
                    aiMediaCollectionInfo: {
                      collectionId: m,
                      uploadOrderIndex: t,
                    },
                    botMetricsMetadata: h,
                    aiThreadInfo: y,
                    onMsgKeyCreated: s != null ? s : void 0,
                  };
                  return (
                    t === 0 && (n.quotedMsg = _),
                    e.sendToChat({ chat: i, options: n })
                  );
                }),
              ),
              b = r("countWhere")(C, function (e) {
                return e.status === "fulfilled";
              });
            b < l.length &&
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[ai-media-collection] ",
                      "/",
                      " child send fail; may buffer",
                    ])),
                  l.length - b,
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
            return p(babelHelpers.extends({}, e, { onMsgKeyCreated: void 0 }));
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
