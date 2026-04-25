__d(
  "WAWebSendAiMediaCollectionBatch",
  [
    "fbt",
    "Promise",
    "WALogger",
    "WAWebActionToast.react",
    "WAWebAttachMediaModel",
    "WAWebCreateAiMediaCollectionMsgData",
    "WAWebMsgKey",
    "WAWebSendAiMediaCollectionEnvelope",
    "WAWebSendTextMsgChatAction",
    "WAWebToastManager",
    "asyncToGeneratorRuntime",
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
          var a,
            i = t.botPersonaId,
            l = t.caption,
            s = t.chat,
            d = t.medias,
            m = t.threadId;
          if (d.length !== 0) {
            var p = yield r("WAWebMsgKey").newId(),
              _ = (a = l == null ? void 0 : l.trim()) != null ? a : "",
              g = _.length > 0,
              h = yield o(
                "WAWebCreateAiMediaCollectionMsgData",
              ).createAiMediaCollectionMsgData({
                botPersonaId: i,
                collectionId: p,
                hasGlobalCaption: g,
                chat: s,
                expectedMediaCount: d.length,
              });
            try {
              yield o(
                "WAWebSendAiMediaCollectionEnvelope",
              ).sendAiMediaCollectionEnvelope(s, h);
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
            var y = s.composeQuotedMsg;
            ((s.composeQuotedMsg = null), s.setAttachMediaContents(null));
            var C = yield (c || (c = n("Promise"))).allSettled(
                d.map(function (e, t) {
                  var n = {
                    type: e.type,
                    caption: e.caption,
                    addEvenWhilePreparing:
                      e.previewable &&
                      e.state ===
                        o("WAWebAttachMediaModel").ATTACH_MEDIA_STATE
                          .PROCESSING,
                    botPersonaId: i,
                    threadId: m,
                    aiMediaCollectionInfo: {
                      collectionId: p,
                      uploadOrderIndex: t,
                    },
                  };
                  if (t === 0) {
                    var r;
                    ((n.quotedMsg = y),
                      g &&
                        ((r = n.caption) == null ? void 0 : r.trim()) === _ &&
                        (n.caption = void 0));
                  }
                  return e.sendToChat({ chat: s, options: n });
                }),
              ),
              b = C.filter(function (e) {
                return e.status === "fulfilled";
              }).length;
            (b < d.length &&
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[ai-media-collection] ",
                      "/",
                      " child sends failed; server may buffer until TTL",
                    ])),
                  d.length - b,
                  d.length,
                )
                .sendLogs("ai-media-collection-child-send-shortfall"),
              g &&
                (yield o("WAWebSendTextMsgChatAction").sendTextMsgToChat(s, _, {
                  aiMediaCollectionInfo: { collectionId: p },
                })));
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
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
