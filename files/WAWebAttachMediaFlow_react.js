__d(
  "WAWebAttachMediaFlow.react",
  [
    "fbt",
    "WALogger",
    "WAWebApiPrepareCtwaContextSend",
    "WAWebAttachMediaModel",
    "WAWebBizBotTosUtils",
    "WAWebBotProfileCollection",
    "WAWebBotUtils",
    "WAWebChatGetters",
    "WAWebCmd",
    "WAWebComposeBoxActions",
    "WAWebComposeBoxUtils",
    "WAWebConfirmPopup.react",
    "WAWebDrawerManager",
    "WAWebFbtCommon",
    "WAWebMediaEditorEnumsThemes",
    "WAWebMediaEditorForChatLoadable.react",
    "WAWebMediaGatingUtils",
    "WAWebPrepareMessageSendingAction",
    "WAWebQuestions.flow",
    "WAWebUA",
    "WAWebUiIdleEventBus",
    "WAWebUimUie.react",
    "WAWebWamEnumThreadType",
    "asyncToGeneratorRuntime",
    "once",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useEffect,
      _ = d.useRef;
    function f(t) {
      var a = t.chat,
        i = t.initCaption,
        l = t.isQuestion,
        u = t.mediaCollection,
        d = t.onCancel,
        f = t.onComplete,
        g = t.onDismiss,
        h = t.onRender,
        y = t.onSend,
        C = t.openTrigger,
        b = t.questionReplyQuotedMessage,
        v = t.sendAsSticker,
        S = t.threadId,
        R = _();
      p(function () {
        return (
          o("WAWebCmd").Cmd.closeContextMenu(),
          o("WAWebCmd").Cmd.closeTooltip(),
          o("WAWebDrawerManager").DrawerManager.closeDrawerRight(),
          o("WAWebPrepareMessageSendingAction").prepareChatForMessageSending(a),
          function () {
            o("WAWebUA").UA.isGecko
              ? self.setTimeout(function () {
                  return o("WAWebComposeBoxActions").ComposeBoxActions.focus(a);
                }, 1)
              : o("WAWebComposeBoxActions").ComposeBoxActions.focus(a);
          }
        );
      }, []);
      var L = m(
          function () {
            a == null || a.setAttachMediaContents(null);
          },
          [a],
        ),
        E = m(
          function (e) {
            var t, n;
            e === void 0 && (e = !0);
            var i = function () {
              var t,
                n = [];
              ((t = a.attachMediaContents) == null ||
                t.forEach(function (e) {
                  var t,
                    r = (t = e.caption) == null ? void 0 : t.trim();
                  r != null && r.length > 0 && n.push(r);
                }),
                e && L(),
                f == null || f(!1),
                d == null || d(n),
                u.mediaPickerStatsLogger.logCancel(),
                g());
            };
            e &&
            ((t =
              (n = a.attachMediaContents) == null ||
              (n = n.selection) == null ||
              (n = n.list) == null
                ? void 0
                : n.length) != null
              ? t
              : 0) > 0
              ? o("WAWebConfirmPopup.react")
                  .waitForConfirmPopup({
                    children: s._(/*BTDS*/ "Discard selection?"),
                    okText: s._(/*BTDS*/ "Discard"),
                    cancelText: r("WAWebFbtCommon")("Cancel"),
                  })
                  .then(function (e) {
                    e && i();
                  })
              : i();
          },
          [a.attachMediaContents, L, u.mediaPickerStatsLogger, d, f, g],
        ),
        k = function (t) {
          var e;
          (e = R.current) != null && e.handleRequestDismiss(t);
        },
        I = r("once")(
          (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t, n) {
                (n === void 0 && (n = {}),
                  yield o("WAWebBizBotTosUtils").maybeShowBizBot1pTos(a));
                var r = n,
                  s = r.initCaptionUsed,
                  c = r.isViewOnce,
                  d = r.isWamoSub;
                (o("WAWebUiIdleEventBus").UiIdleEventBus.once(
                  "ui_idle",
                  function () {
                    var n = null;
                    if (o("WAWebBotUtils").isMetaAiBot(a.id)) {
                      var r;
                      n =
                        (r = o(
                          "WAWebBotProfileCollection",
                        ).BotProfileCollection.get(a.id)) == null
                          ? void 0
                          : r.personaId;
                    }
                    (t.forEach(function (e, t) {
                      var r = e.media,
                        s = {};
                      if (
                        (t === 0 &&
                          ((s.quotedMsg = a.composeQuotedMsg),
                          (a.composeQuotedMsg = null)),
                        (s.type = r.type),
                        (s.isViewOnce = c),
                        (s.mentionedJidList = e.mentionedJidList),
                        (s.groupMentions = e.groupMentions),
                        (s.caption = r.caption),
                        (s.addEvenWhilePreparing =
                          r.previewable &&
                          r.state ===
                            o("WAWebAttachMediaModel").ATTACH_MEDIA_STATE
                              .PROCESSING),
                        (s.isWamoSub = d),
                        (s.isQuestion = l),
                        (s.questionReplyQuotedMessage = b),
                        (s.botPersonaId = n),
                        (s.threadId = S),
                        i != null && i.ctwaContextLinkData)
                      ) {
                        var u = i.ctwaContext,
                          m = i.ctwaContextLinkData;
                        s.ctwaContext = o(
                          "WAWebApiPrepareCtwaContextSend",
                        ).prepareCtwaContextSend(m, u);
                      }
                      r.sendToChat({ chat: a, options: s });
                    }),
                      o("WALogger").LOG(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "AttachMediaFlow: sendToChat called for ",
                            " media items",
                          ])),
                        t.length,
                      ),
                      L());
                  },
                ),
                  f == null || f(!0, { initCaptionUsed: s }),
                  y == null || y(),
                  u.mediaPickerStatsLogger.logSend({ isViewOnce: !!c }),
                  o("WAWebCmd").Cmd.closeExpressionPanels(),
                  g());
              },
            );
            return function (e, n) {
              return t.apply(this, arguments);
            };
          })(),
        ),
        T = r("once")(function (e) {
          (e != null &&
            o("WAWebUiIdleEventBus").UiIdleEventBus.once(
              "ui_idle",
              function () {
                o("WAWebComposeBoxActions").ComposeBoxActions.paste(a, e);
              },
            ),
            g());
        }),
        D;
      o("WAWebChatGetters").getIsNewsletter(a) &&
        (D = {
          surface: "channel-producer-media-editor",
          extras: {
            channelWid: a.id,
            threadType: o("WAWebWamEnumThreadType").THREAD_TYPE.CHANNEL,
          },
        });
      var x;
      return (
        l === !0
          ? (x = o("WAWebQuestions.flow").QuestionType.Question)
          : b != null && (x = o("WAWebQuestions.flow").QuestionType.Reply),
        c.jsx(o("WAWebUimUie.react").UIE, {
          displayName: "AttachMediaFlow",
          escapable: !0,
          requestDismiss: k,
          children: c.jsx(
            o("WAWebMediaEditorForChatLoadable.react")
              .MediaEditorForChatLoadable,
            {
              theme: o("WAWebMediaEditorEnumsThemes").MediaTheme.ATTACH,
              ref: R,
              chat: a,
              onClose: E,
              onRender: h,
              initCaption: i,
              onSendMedia: I,
              mediaCollection: u,
              onDropText: T,
              sendAsSticker: v,
              tsNavigationData: D,
              threadId: S,
              openTrigger: C,
              allowMultipleMedia:
                l !== !0 &&
                b == null &&
                o("WAWebMediaGatingUtils").supportsMultipleUploads(a.id),
              placeholderText: o(
                "WAWebComposeBoxUtils",
              ).getComposeBoxPlaceholderText({ chat: a, questionType: x }),
            },
          ),
        })
      );
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  226,
);
