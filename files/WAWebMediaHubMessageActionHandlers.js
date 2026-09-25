__d(
  "WAWebMediaHubMessageActionHandlers",
  [
    "fbt",
    "Promise",
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
    "asyncToGeneratorRuntime",
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
      b,
      v,
      S = v || (v = o("react"));
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            (o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[MediaHub] downloadMessages ",
                  " msg(s)",
                ])),
              e.length,
            ),
            e.length !== 0)
          )
            if (r("WAWebEnvironment").isWindows && n("cr:7565") != null) {
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[MediaHub] Windows bulk save ",
                    " msg(s)",
                  ])),
                e.length,
              );
              try {
                (yield n("cr:7565").selectFolderAndSaveFiles(e),
                  o("WALogger").LOG(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "[MediaHub] Windows bulk save done ",
                        " msg(s)",
                      ])),
                    e.length,
                  ));
              } catch (t) {
                (o("WALogger")
                  .ERROR(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "[MediaHub] Windows bulk save failed ",
                        "",
                      ])),
                    e.length,
                  )
                  .catching(t),
                  o("WALogger").LOG(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "[MediaHub] fallback\u2192FileSaver ",
                        " msg(s)",
                      ])),
                    e.length,
                  ),
                  o("WAWebFileSaver").FileSaver.initDownload(e));
              }
            } else {
              var t = n("cr:7565") != null ? "yes" : "no";
              (o("WALogger").LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[MediaHub] FileSaver ",
                    " msg(s) win=",
                    " helpers=",
                    "",
                  ])),
                e.length,
                r("WAWebEnvironment").isWindows,
                t,
              ),
                o("WAWebFileSaver").FileSaver.initDownload(e));
            }
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
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
    function k(t, r, a) {
      var i = t.filter(function (e) {
        return e.mediaData;
      });
      if (i.length) {
        var l = i.filter(function (e) {
            return !e.mediaData.isDownloadable();
          }),
          d = function (t) {
            o("WAWebToastManager").ToastManager.open(
              S.jsx(o("WAWebToast.react").Toast, {
                msg: s._(
                  /*BTDS*/ '_j{"*":"Downloading {number_of_messages} items","_1":"Downloading 1 item"}',
                  [s._plural(t, "number_of_messages")],
                ),
              }),
            );
          };
        (a === "media_hub" && d(t.length),
          l.length > 0
            ? (a !== "media_hub" &&
                o("WAWebToastManager").ToastManager.open(
                  S.jsx(o("WAWebToast.react").Toast, {
                    msg: s._(/*BTDS*/ "Downloading\u2026"),
                  }),
                ),
              (b || (b = n("Promise")))
                .all(
                  l.map(function (e) {
                    return e.downloadMedia({
                      downloadEvenIfExpensive: !0,
                      rmrReason: o("WAWebWamEnumWebcRmrReasonCode")
                        .WEBC_RMR_REASON_CODE.MULTI_SELECT_DOWNLOAD,
                      isUserInitiated: !0,
                    });
                  }),
                )
                .then(function () {
                  var t = i.filter(function (e) {
                    return e.mediaData.isDownloadable();
                  });
                  (i.length > t.length &&
                    o("WAWebToastManager").ToastManager.open(
                      S.jsx(o("WAWebToast.react").Toast, {
                        msg: s._(
                          /*BTDS*/ '_j{"*":"{count} files couldn\'t be downloaded because they\'re no longer on your phone.","_1":"1 file couldn\'t be downloaded because it\'s no longer on your phone."}',
                          [s._plural(i.length - t.length, "count")],
                        ),
                      }),
                    ),
                    t.length &&
                      R(t).catch(function (t) {
                        o("WALogger")
                          .ERROR(
                            e ||
                              (e = babelHelpers.taggedTemplateLiteralLoose([
                                "[MediaHub] download failed",
                              ])),
                          )
                          .catching(t);
                      }));
                })
                .catch(function (e) {
                  o("WALogger").ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[MediaHub] phone download failed ",
                        "",
                      ])),
                    e,
                  );
                }))
            : R(i).catch(function (e) {
                o("WALogger")
                  .ERROR(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[MediaHub] download failed",
                      ])),
                  )
                  .catching(e);
              }),
          r == null || r(),
          o("WAWebMultiSelectUtils").logMessageActionClickMetric(
            i,
            o("WAWebWamEnumMessageContextMenuOptionType")
              .MESSAGE_CONTEXT_MENU_OPTION_TYPE.UNKNOWN,
          ));
      }
    }
    function I(e) {
      var t = o("WAWebStateUtils").unproxy(e),
        n = o("WAWebFrontendMsgGetters").getChat(t);
      (o("WAWebCmd").Cmd.sendUnstarMsgs(n, [t]),
        o("WAWebMultiSelectUtils").logMessageActionClickMetric(
          [e],
          o("WAWebWamEnumMessageContextMenuOptionType")
            .MESSAGE_CONTEXT_MENU_OPTION_TYPE.STAR_OR_UNSTAR,
        ));
    }
    function T(e) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            (yield o("WAWebKeepInChatActions").runKeepInChatUX(
              o("WAWebStateUtils").unproxy(e),
              o("WAWebWamEnumKicEntryPointType").KIC_ENTRY_POINT_TYPE.ALL_MEDIA,
              !0,
            ),
              o("WAWebToastManager").ToastManager.open(
                S.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(
                    /*BTDS*/ '_j{"*":"Kept {number_of_messages} items","_1":"Kept 1 item"}',
                    [s._plural(1, "number_of_messages")],
                  ),
                }),
              ));
          } catch (e) {
            var t;
            o("WALogger").LOG(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "Keep operation not complete. Reason: ",
                  "",
                ])),
              (t = e.reason) != null ? t : "unknown",
            );
          }
        })),
        D.apply(this, arguments)
      );
    }
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            (yield o("WAWebKeepInChatActions").runUndoKeepInChatUX(
              o("WAWebStateUtils").unproxy(e),
              o("WAWebWamEnumKicEntryPointType").KIC_ENTRY_POINT_TYPE.ALL_MEDIA,
              !0,
            ),
              o("WAWebToastManager").ToastManager.open(
                S.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(
                    /*BTDS*/ '_j{"*":"Unkept {number_of_messages} items","_1":"Unkept 1 item"}',
                    [s._plural(1, "number_of_messages")],
                  ),
                }),
              ));
          } catch (e) {
            var t;
            o("WALogger").LOG(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "UndoKeep operation not complete. Reason: ",
                  "",
                ])),
              (t = e.reason) != null ? t : "unknown",
            );
          }
        })),
        $.apply(this, arguments)
      );
    }
    function P(e) {
      var t = o("WAWebStateUtils").unproxy(e),
        n = o("WAWebFrontendMsgGetters").getChat(t);
      (o("WAWebCmd").Cmd.sendStarMsgs(n, [t]),
        o("WAWebMultiSelectUtils").logMessageActionClickMetric(
          [e],
          o("WAWebWamEnumMessageContextMenuOptionType")
            .MESSAGE_CONTEXT_MENU_OPTION_TYPE.STAR_OR_UNSTAR,
        ));
    }
    function N(e, t) {
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
            S.jsx(o("WAWebToast.react").Toast, {
              id: o("WAWebActionToast.react").genId(),
              msg: e,
              duration: 4e3,
            }),
          );
        },
      });
    }
    function M(e) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebFrontendMsgGetters").getChat(e);
          (o("WAWebDrawerManager").DrawerManager.closeDrawerLeft(),
            o("WAWebCmd").Cmd.setActiveNavBarItem(
              o("WAWebNavBarTypes").NavBarItems.Chats,
            ));
          var n = yield o("WAWebCmd").Cmd.openChatBottom({
            chat: t,
            chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.MediaHub,
          });
          if (!n) {
            o("WALogger").ERROR(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
                  "[MediaHub] reply failed",
                ])),
            );
            return;
          }
          (t.set(
            "composeQuotedMsg",
            o("WAWebMsgModelUtils").createMsgSnapshot(e),
          ),
            o("WAWebModalManager").ModalManager.close(),
            o("WAWebComposeBoxActions").ComposeBoxActions.focus(
              o("WAWebFrontendMsgGetters").getChat(e),
            ));
        })),
        w.apply(this, arguments)
      );
    }
    function A(e) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (o("WAWebDrawerManager").DrawerManager.closeDrawerLeft(),
            o("WAWebCmd").Cmd.setActiveNavBarItem(
              o("WAWebNavBarTypes").NavBarItems.Chats,
            ),
            yield r("WAWebReplyToMsgChatAction")(e),
            o("WAWebModalManager").ModalManager.close(),
            o("WAWebComposeBoxActions").ComposeBoxActions.focus(
              o("WAWebFrontendMsgGetters").getChat(e),
            ));
        })),
        F.apply(this, arguments)
      );
    }
    ((l.goToMessageFromModal = E),
      (l.handleMessageDownloadClick = k),
      (l.handleMessageUnstarClick = I),
      (l.handleKeepClick = T),
      (l.handleUndoKeepClick = x),
      (l.handleMessageStarClick = P),
      (l.handleForwardClick = N),
      (l.replyToMessageFromModal = M),
      (l.replyPrivatelyToMessageFromModal = A));
  },
  226,
);
