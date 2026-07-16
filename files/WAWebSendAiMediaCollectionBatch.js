__d(
  "WAWebSendAiMediaCollectionBatch",
  [
    "fbt",
    "Promise",
    "WALogger",
    "WAWebActionToast.react",
    "WAWebAttachMediaModel",
    "WAWebCreateAiMediaCollectionMsgData",
    "WAWebGetMetaAiImagineEventContext",
    "WAWebLogImagineAction",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebSendAiMediaCollectionEnvelope",
    "WAWebToastManager",
    "WAWebWamEnumImagineAction",
    "WAWebWamEnumImagineMediaType",
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
            f(i, l);
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
                h(t));
              return;
            }
            var p = i.composeQuotedMsg;
            ((i.composeQuotedMsg = null), i.setAttachMediaContents(null));
            var _ = m.botPersonaId,
              g = m.botMetricsMetadata,
              y = m.aiThreadInfo,
              C = yield (c || (c = n("Promise"))).allSettled(
                l.map(function (e, t) {
                  var n = {
                    type: e.type,
                    caption: e.caption,
                    addEvenWhilePreparing:
                      e.previewable &&
                      e.state ===
                        o("WAWebAttachMediaModel").ATTACH_MEDIA_STATE
                          .PROCESSING,
                    botPersonaId: _,
                    threadId: s,
                    aiMediaCollectionInfo: {
                      collectionId: d,
                      uploadOrderIndex: t,
                    },
                    botMetricsMetadata: g,
                    aiThreadInfo: y,
                  };
                  return (
                    t === 0 && (n.quotedMsg = p),
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
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          t.every(function (e) {
            return e.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT;
          }) &&
            o("WAWebLogImagineAction").logImagineAction({
              action: o("WAWebWamEnumImagineAction").IMAGINE_ACTION
                .MEDIA_INPUT_SEND_CONFIRM,
              mediaType: o("WAWebWamEnumImagineMediaType").IMAGINE_MEDIA_TYPE
                .DOCUMENT,
              maxIndex: t.length,
              isSent: !0,
              eventContext: yield o(
                "WAWebGetMetaAiImagineEventContext",
              ).getMetaAiImagineEventContext(e),
            });
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      var t = new (o("WAWebActionToast.react").ActionType)(
        s._(/*BTDS*/ "Couldn't send to Meta AI."),
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
