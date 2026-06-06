__d(
  "WAWebMediaHubMessageActionHandlers",
  [
    "fbt",
    "WALogger",
    "WAWebActionToast.react",
    "WAWebBotFrontendUtils",
    "WAWebBotGating",
    "WAWebChatEntryPoint",
    "WAWebChatMessageSearch",
    "WAWebCmd",
    "WAWebComposeBoxActions",
    "WAWebDrawerManager",
    "WAWebEnvironment",
    "WAWebFileSaver",
    "WAWebFrontendMsgGetters",
    "WAWebKeepInChatActions",
    "WAWebMessageHandlers",
    "WAWebModalManager",
    "WAWebMsgModelUtils",
    "WAWebMultiSelectUtils",
    "WAWebNavBarTypes",
    "WAWebReplyToMsgChatAction",
    "WAWebStateUtils",
    "WAWebThreadMsgUtils",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWamEnumKicEntryPointType",
    "WAWebWamEnumMessageContextMenuOptionType",
    "WAWebWamEnumWebcRmrReasonCode",
    "cr:7565",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b = C || (C = o("react"));
    async function v(t) {
      if (
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[MediaHub] downloadMessages ",
              " msg(s)",
            ])),
          t.length,
        ),
        t.length !== 0)
      )
        if (r("WAWebEnvironment").isWindows && n("cr:7565") != null) {
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[MediaHub] Windows bulk save ",
                " msg(s)",
              ])),
            t.length,
          );
          try {
            (await n("cr:7565").selectFolderAndSaveFiles(t),
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[MediaHub] Windows bulk save done ",
                    " msg(s)",
                  ])),
                t.length,
              ));
          } catch (e) {
            (o("WALogger")
              .ERROR(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[MediaHub] Windows bulk save failed ",
                    "",
                  ])),
                t.length,
              )
              .catching(e),
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[MediaHub] fallback\u2192FileSaver ",
                    " msg(s)",
                  ])),
                t.length,
              ),
              o("WAWebFileSaver").FileSaver.initDownload(t));
          }
        } else {
          var a = n("cr:7565") != null ? "yes" : "no";
          (o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "[MediaHub] FileSaver ",
                " msg(s) win=",
                " helpers=",
                "",
              ])),
            t.length,
            r("WAWebEnvironment").isWindows,
            a,
          ),
            o("WAWebFileSaver").FileSaver.initDownload(t));
        }
    }
    function S(e) {
      var t = o("WAWebFrontendMsgGetters").getChat(e),
        n = o("WAWebThreadMsgUtils").getMsgAiThread(e);
      if (n != null && o("WAWebBotGating").isAiChatThreadsEnabled()) {
        (o("WAWebBotFrontendUtils").runMetaAiThreadsFlow(t, {
          type: "MessageSearch",
          msg: e,
        }),
          o("WAWebModalManager").ModalManager.close());
        return;
      }
      (o("WAWebDrawerManager").DrawerManager.closeDrawerLeft(),
        o("WAWebCmd").Cmd.setActiveNavBarItem(
          o("WAWebNavBarTypes").NavBarItems.Chats,
        ),
        o("WAWebCmd")
          .Cmd.openChatAt({
            chat: t,
            msgContext: o("WAWebChatMessageSearch").getSearchContext({
              chat: t,
              msgKey: e.id,
            }),
            chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.MediaHub,
          })
          .then(function (t) {
            t &&
              (o("WAWebModalManager").ModalManager.close(),
              o("WAWebComposeBoxActions").ComposeBoxActions.focus(
                o("WAWebFrontendMsgGetters").getChat(e),
              ));
          }));
    }
    function R(e, t, n) {
      var r = e.filter(function (e) {
        return e.mediaData;
      });
      if (r.length) {
        var a = r.filter(function (e) {
            return !e.mediaData.isDownloadable();
          }),
          i = function (t) {
            o("WAWebToastManager").ToastManager.open(
              b.jsx(o("WAWebToast.react").Toast, {
                msg: s._(
                  /*BTDS*/ '_j{"*":"Downloading {number_of_messages} items","_1":"Downloading 1 item"}',
                  [s._plural(t, "number_of_messages")],
                ),
              }),
            );
          };
        (n === "media_hub" && i(e.length),
          a.length > 0
            ? (n !== "media_hub" &&
                o("WAWebToastManager").ToastManager.open(
                  b.jsx(o("WAWebToast.react").Toast, {
                    msg: s._(/*BTDS*/ "Downloading\u2026"),
                  }),
                ),
              Promise.all(
                a.map(function (e) {
                  return e.downloadMedia({
                    downloadEvenIfExpensive: !0,
                    rmrReason: o("WAWebWamEnumWebcRmrReasonCode")
                      .WEBC_RMR_REASON_CODE.MULTI_SELECT_DOWNLOAD,
                    isUserInitiated: !0,
                  });
                }),
              ).then(function () {
                var e = r.filter(function (e) {
                  return e.mediaData.isDownloadable();
                });
                (r.length > e.length &&
                  o("WAWebToastManager").ToastManager.open(
                    b.jsx(o("WAWebToast.react").Toast, {
                      msg: s._(
                        /*BTDS*/ '_j{"*":"{count} files failed to be downloaded because they are no longer on your phone.","_1":"1 file failed to be downloaded because it\'s no longer on your phone."}',
                        [s._plural(r.length - e.length, "count")],
                      ),
                    }),
                  ),
                  e.length &&
                    v(e).catch(function (e) {
                      o("WALogger")
                        .ERROR(
                          _ ||
                            (_ = babelHelpers.taggedTemplateLiteralLoose([
                              "[MediaHub] download failed",
                            ])),
                        )
                        .catching(e);
                    }));
              }))
            : v(r).catch(function (e) {
                o("WALogger")
                  .ERROR(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "[MediaHub] download failed",
                      ])),
                  )
                  .catching(e);
              }),
          t == null || t(),
          o("WAWebMultiSelectUtils").logMessageActionClickMetric(
            r,
            o("WAWebWamEnumMessageContextMenuOptionType")
              .MESSAGE_CONTEXT_MENU_OPTION_TYPE.UNKNOWN,
          ));
      }
    }
    function L(e) {
      var t = o("WAWebStateUtils").unproxy(e),
        n = o("WAWebFrontendMsgGetters").getChat(t);
      (o("WAWebCmd").Cmd.sendUnstarMsgs(n, [t]),
        o("WAWebMultiSelectUtils").logMessageActionClickMetric(
          [e],
          o("WAWebWamEnumMessageContextMenuOptionType")
            .MESSAGE_CONTEXT_MENU_OPTION_TYPE.STAR_OR_UNSTAR,
        ));
    }
    async function E(e) {
      try {
        (await o("WAWebKeepInChatActions").runKeepInChatUX(
          o("WAWebStateUtils").unproxy(e),
          o("WAWebWamEnumKicEntryPointType").KIC_ENTRY_POINT_TYPE.ALL_MEDIA,
          !0,
        ),
          o("WAWebToastManager").ToastManager.open(
            b.jsx(o("WAWebToast.react").Toast, {
              msg: s._(
                /*BTDS*/ '_j{"*":"Kept {number_of_messages} items","_1":"Kept 1 item"}',
                [s._plural(1, "number_of_messages")],
              ),
            }),
          ));
      } catch (e) {
        var t;
        o("WALogger").LOG(
          g ||
            (g = babelHelpers.taggedTemplateLiteralLoose([
              "Keep operation not complete. Reason: ",
              "",
            ])),
          (t = e.reason) != null ? t : "unknown",
        );
      }
    }
    async function k(e) {
      try {
        (await o("WAWebKeepInChatActions").runUndoKeepInChatUX(
          o("WAWebStateUtils").unproxy(e),
          o("WAWebWamEnumKicEntryPointType").KIC_ENTRY_POINT_TYPE.ALL_MEDIA,
          !0,
        ),
          o("WAWebToastManager").ToastManager.open(
            b.jsx(o("WAWebToast.react").Toast, {
              msg: s._(
                /*BTDS*/ '_j{"*":"Unkept {number_of_messages} items","_1":"Unkept 1 item"}',
                [s._plural(1, "number_of_messages")],
              ),
            }),
          ));
      } catch (e) {
        var t;
        o("WALogger").LOG(
          h ||
            (h = babelHelpers.taggedTemplateLiteralLoose([
              "UndoKeep operation not complete. Reason: ",
              "",
            ])),
          (t = e.reason) != null ? t : "unknown",
        );
      }
    }
    function I(e) {
      var t = o("WAWebStateUtils").unproxy(e),
        n = o("WAWebFrontendMsgGetters").getChat(t);
      (o("WAWebCmd").Cmd.sendStarMsgs(n, [t]),
        o("WAWebMultiSelectUtils").logMessageActionClickMetric(
          [e],
          o("WAWebWamEnumMessageContextMenuOptionType")
            .MESSAGE_CONTEXT_MENU_OPTION_TYPE.STAR_OR_UNSTAR,
        ));
    }
    function T(e, t) {
      o("WAWebMessageHandlers").handleOpenForwardFlow({
        multiSelect: !1,
        msg: o("WAWebStateUtils").unproxy(e),
        handleSelectClick: t,
        handleBack: function () {
          o("WAWebModalManager").ModalManager.closeSupportModal();
        },
        openAsSupportModal: !0,
        onForward: function () {
          var e = s._(
            /*BTDS*/ '_j{"*":"Forwarded {number_of_messages} items","_1":"Forwarded 1 item"}',
            [s._plural(1, "number_of_messages")],
          );
          o("WAWebToastManager").ToastManager.open(
            b.jsx(o("WAWebToast.react").Toast, {
              id: o("WAWebActionToast.react").genId(),
              msg: e,
              duration: 4e3,
            }),
          );
        },
      });
    }
    async function D(e) {
      var t = o("WAWebFrontendMsgGetters").getChat(e);
      (o("WAWebDrawerManager").DrawerManager.closeDrawerLeft(),
        o("WAWebCmd").Cmd.setActiveNavBarItem(
          o("WAWebNavBarTypes").NavBarItems.Chats,
        ));
      var n = await o("WAWebCmd").Cmd.openChatBottom({
        chat: t,
        chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.MediaHub,
      });
      if (!n) {
        o("WALogger").ERROR(
          y ||
            (y = babelHelpers.taggedTemplateLiteralLoose([
              "[MediaHub] reply failed",
            ])),
        );
        return;
      }
      (t.set("composeQuotedMsg", o("WAWebMsgModelUtils").createMsgSnapshot(e)),
        o("WAWebModalManager").ModalManager.close(),
        o("WAWebComposeBoxActions").ComposeBoxActions.focus(
          o("WAWebFrontendMsgGetters").getChat(e),
        ));
    }
    async function x(e) {
      (o("WAWebDrawerManager").DrawerManager.closeDrawerLeft(),
        o("WAWebCmd").Cmd.setActiveNavBarItem(
          o("WAWebNavBarTypes").NavBarItems.Chats,
        ),
        await r("WAWebReplyToMsgChatAction")(e),
        o("WAWebModalManager").ModalManager.close(),
        o("WAWebComposeBoxActions").ComposeBoxActions.focus(
          o("WAWebFrontendMsgGetters").getChat(e),
        ));
    }
    ((l.goToMessageFromModal = S),
      (l.handleMessageDownloadClick = R),
      (l.handleMessageUnstarClick = L),
      (l.handleKeepClick = E),
      (l.handleUndoKeepClick = k),
      (l.handleMessageStarClick = I),
      (l.handleForwardClick = T),
      (l.replyToMessageFromModal = D),
      (l.replyPrivatelyToMessageFromModal = x));
  },
  226,
);
