__d(
  "WAWebSendAiMediaCollectionBatch",
  [
    "fbt",
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
    "countWhere",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = c || (c = o("react"));
    async function m(t) {
      var n = t.botPersonaId,
        a = t.chat,
        i = t.medias,
        l = t.onMsgKeyCreated,
        s = t.threadId;
      if (i.length !== 0) {
        o("WAWebImagineActionLogger").logImagineMediaSendConfirm({
          chat: a,
          mediaTypes: i.map(function (e) {
            return e.type;
          }),
          origins: i.map(function (e) {
            return e.fileOrigin;
          }),
        });
        var c = await r("WAWebMsgKey").newId(),
          d = await o(
            "WAWebCreateAiMediaCollectionMsgData",
          ).createAiMediaCollectionMsgData({
            botPersonaId: n,
            collectionId: c,
            hasGlobalCaption: !1,
            chat: a,
            expectedMediaCount: i.length,
            threadId: s,
          });
        try {
          await o(
            "WAWebSendAiMediaCollectionEnvelope",
          ).sendAiMediaCollectionEnvelope(a, d);
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
            p(t));
          return;
        }
        var m = a.composeQuotedMsg;
        ((a.composeQuotedMsg = null), a.setAttachMediaContents(null));
        var _ = d.botPersonaId,
          f = d.botMetricsMetadata,
          g = d.aiThreadInfo,
          h = await Promise.allSettled(
            i.map(function (e, t) {
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
                aiMediaCollectionInfo: { collectionId: c, uploadOrderIndex: t },
                botMetricsMetadata: f,
                aiThreadInfo: g,
                onMsgKeyCreated: l != null ? l : void 0,
              };
              return (
                t === 0 && (n.quotedMsg = m),
                e.sendToChat({ chat: a, options: n })
              );
            }),
          ),
          y = r("countWhere")(h, function (e) {
            return e.status === "fulfilled";
          });
        y < i.length &&
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[ai-media-collection] ",
                  "/",
                  " child send fail; may buffer",
                ])),
              i.length - y,
              i.length,
            )
            .sendLogs("ai-media-collection-child-send-shortfall");
      }
    }
    function p(e) {
      var t = new (o("WAWebActionToast.react").ActionType)(
        o("WAWebBotUtils").isMetaAiBot(e.chat.id)
          ? s._(/*BTDS*/ "")
          : s._(/*BTDS*/ ""),
        {
          actionText: s._(/*BTDS*/ ""),
          actionHandler: function () {
            return m(babelHelpers.extends({}, e, { onMsgKeyCreated: void 0 }));
          },
        },
      );
      o("WAWebToastManager").ToastManager.open(
        d.jsx(o("WAWebActionToast.react").ActionToast, {
          initialAction: t,
          pendingAction: Promise.resolve(t),
        }),
      );
    }
    l.sendAiMediaCollectionBatch = m;
  },
  226,
);
