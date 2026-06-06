__d(
  "WAWebSendAiMediaCollectionBatch",
  [
    "fbt",
    "WALogger",
    "WAWebActionToast.react",
    "WAWebAttachMediaModel",
    "WAWebCreateAiMediaCollectionMsgData",
    "WAWebGetMetaAiImagineEventContext",
    "WAWebImagineActionLogger",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebSendAiMediaCollectionEnvelope",
    "WAWebToastManager",
    "WAWebWamEnumImagineAction",
    "WAWebWamEnumImagineMediaType",
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
        l = t.threadId;
      if (i.length !== 0) {
        p(a, i);
        var s = await r("WAWebMsgKey").newId(),
          c = await o(
            "WAWebCreateAiMediaCollectionMsgData",
          ).createAiMediaCollectionMsgData({
            botPersonaId: n,
            collectionId: s,
            hasGlobalCaption: !1,
            chat: a,
            expectedMediaCount: i.length,
            threadId: l,
          });
        try {
          await o(
            "WAWebSendAiMediaCollectionEnvelope",
          ).sendAiMediaCollectionEnvelope(a, c);
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
            _(t));
          return;
        }
        var d = a.composeQuotedMsg;
        ((a.composeQuotedMsg = null), a.setAttachMediaContents(null));
        var m = c.botPersonaId,
          f = c.botMetricsMetadata,
          g = c.aiThreadInfo,
          h = await Promise.allSettled(
            i.map(function (e, t) {
              var n = {
                type: e.type,
                caption: e.caption,
                addEvenWhilePreparing:
                  e.previewable &&
                  e.state ===
                    o("WAWebAttachMediaModel").ATTACH_MEDIA_STATE.PROCESSING,
                botPersonaId: m,
                threadId: l,
                aiMediaCollectionInfo: { collectionId: s, uploadOrderIndex: t },
                botMetricsMetadata: f,
                aiThreadInfo: g,
              };
              return (
                t === 0 && (n.quotedMsg = d),
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
    async function p(e, t) {
      t.every(function (e) {
        return e.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT;
      }) &&
        o("WAWebImagineActionLogger").logImagineAction({
          action: o("WAWebWamEnumImagineAction").IMAGINE_ACTION
            .MEDIA_INPUT_SEND_CONFIRM,
          mediaType: o("WAWebWamEnumImagineMediaType").IMAGINE_MEDIA_TYPE
            .DOCUMENT,
          maxIndex: t.length,
          isSent: !0,
          eventContext: await o(
            "WAWebGetMetaAiImagineEventContext",
          ).getMetaAiImagineEventContext(e),
        });
    }
    function _(e) {
      var t = new (o("WAWebActionToast.react").ActionType)(
        s._(/*BTDS*/ "Couldn't send to Meta AI."),
        {
          actionText: s._(/*BTDS*/ "Try again."),
          actionHandler: function () {
            return m(e);
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
