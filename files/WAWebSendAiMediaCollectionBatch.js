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
        s = t.pathfinderAccountToken,
        c = t.threadId;
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
        var d = await r("WAWebMsgKey").newId(),
          m = await o(
            "WAWebCreateAiMediaCollectionMsgData",
          ).createAiMediaCollectionMsgData({
            botPersonaId: n,
            collectionId: d,
            hasGlobalCaption: !1,
            chat: a,
            expectedMediaCount: i.length,
            threadId: c,
          });
        try {
          await o(
            "WAWebSendAiMediaCollectionEnvelope",
          ).sendAiMediaCollectionEnvelope(a, m);
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
        var _ = a.composeQuotedMsg;
        ((a.composeQuotedMsg = null), a.setAttachMediaContents(null));
        var f = m.botPersonaId,
          g = m.botMetricsMetadata,
          h = m.aiThreadInfo,
          y = await Promise.allSettled(
            i.map(function (e, t) {
              var n = {
                type: e.type,
                caption: e.caption,
                addEvenWhilePreparing:
                  o("WAWebAttachMediaGetters").getPreviewable(e) &&
                  e.state ===
                    o("WAWebAttachMediaConstants").ATTACH_MEDIA_STATE
                      .PROCESSING,
                botPersonaId: f,
                threadId: c,
                aiMediaCollectionInfo: { collectionId: d, uploadOrderIndex: t },
                botMetricsMetadata: g,
                aiThreadInfo: h,
                onMsgKeyCreated: l != null ? l : void 0,
                pathfinderAccountToken: s,
              };
              return (
                t === 0 && (n.quotedMsg = _),
                e.sendToChat({ chat: a, options: n })
              );
            }),
          ),
          C = r("countWhere")(y, function (e) {
            return e.status === "fulfilled";
          });
        C < i.length &&
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[ai-media-collection] ",
                  "/",
                  " child send fail; may buffer",
                ])),
              i.length - C,
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
