__d(
  "WAWebMediaHubMessageActionHandlers",
  [
    "fbt",
    "Promise",
    "WALogger",
    "WAWebActionToast.react",
    "WAWebChatMessageSearch",
    "WAWebCmd",
    "WAWebComposeBoxActions",
    "WAWebEnvironment",
    "WAWebFileSaver",
    "WAWebFrontendMsgGetters",
    "WAWebKeepInChatActions",
    "WAWebMessageHandlers",
    "WAWebModalManager",
    "WAWebMsgModelUtils",
    "WAWebMultiSelectUtils",
    "WAWebReplyToMsgChatAction",
    "WAWebStateUtils",
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
      v = b || (b = o("react"));
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            (o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[MediaHub] downloadMessages ",
                  " msg(s)",
                ])),
              e.length,
            ),
            e.length !== 0)
          )
            if (r("WAWebEnvironment").isWindows && n("cr:7565") != null) {
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[MediaHub] Windows bulk save ",
                    " msg(s)",
                  ])),
                e.length,
              );
              try {
                (yield n("cr:7565").selectFolderAndSaveFiles(e),
                  o("WALogger").LOG(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[MediaHub] Windows bulk save done ",
                        " msg(s)",
                      ])),
                    e.length,
                  ));
              } catch (t) {
                (o("WALogger")
                  .ERROR(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "[MediaHub] Windows bulk save failed ",
                        "",
                      ])),
                    e.length,
                  )
                  .catching(t),
                  o("WALogger").LOG(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
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
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
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
        R.apply(this, arguments)
      );
    }
    function L(e) {
      var t = o("WAWebFrontendMsgGetters").getChat(e);
      o("WAWebCmd")
        .Cmd.openChatAt({
          chat: t,
          msgContext: o("WAWebChatMessageSearch").getSearchContext({
            chat: t,
            msgKey: e.id,
          }),
        })
        .then(function (t) {
          t &&
            (o("WAWebModalManager").ModalManager.close(),
            o("WAWebComposeBoxActions").ComposeBoxActions.focus(
              o("WAWebFrontendMsgGetters").getChat(e),
            ));
        });
    }
    function E(t, r, a) {
      var i = t.filter(function (e) {
        return e.mediaData;
      });
      if (i.length) {
        var l = i.filter(function (e) {
            return !e.mediaData.isDownloadable();
          }),
          c = function (t) {
            o("WAWebToastManager").ToastManager.open(
              v.jsx(o("WAWebToast.react").Toast, {
                msg: s._(
                  /*BTDS*/ '_j{"*":"Downloading {number_of_messages} items","_1":"Downloading 1 item"}',
                  [s._plural(t, "number_of_messages")],
                ),
              }),
            );
          };
        (a === "media_hub" && c(t.length),
          l.length > 0
            ? (a !== "media_hub" &&
                o("WAWebToastManager").ToastManager.open(
                  v.jsx(o("WAWebToast.react").Toast, {
                    msg: s._(/*BTDS*/ "Downloading\u2026"),
                  }),
                ),
              (C || (C = n("Promise")))
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
                      v.jsx(o("WAWebToast.react").Toast, {
                        msg: s._(
                          /*BTDS*/ '_j{"*":"{count} files failed to be downloaded because they are no longer on your phone.","_1":"1 file failed to be downloaded because it\'s no longer on your phone."}',
                          [s._plural(i.length - t.length, "count")],
                        ),
                      }),
                    ),
                    t.length &&
                      S(t).catch(function (t) {
                        o("WALogger")
                          .ERROR(
                            e ||
                              (e = babelHelpers.taggedTemplateLiteralLoose([
                                "[MediaHub] download failed",
                              ])),
                          )
                          .catching(t);
                      }));
                }))
            : S(i).catch(function (e) {
                o("WALogger")
                  .ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
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
    function k(e) {
      var t = o("WAWebStateUtils").unproxy(e),
        n = o("WAWebFrontendMsgGetters").getChat(t);
      (o("WAWebCmd").Cmd.sendUnstarMsgs(n, [t]),
        o("WAWebMultiSelectUtils").logMessageActionClickMetric(
          [e],
          o("WAWebWamEnumMessageContextMenuOptionType")
            .MESSAGE_CONTEXT_MENU_OPTION_TYPE.STAR_OR_UNSTAR,
        ));
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            (yield o("WAWebKeepInChatActions").runKeepInChatUX(
              o("WAWebStateUtils").unproxy(e),
              o("WAWebWamEnumKicEntryPointType").KIC_ENTRY_POINT_TYPE.ALL_MEDIA,
              !0,
            ),
              o("WAWebToastManager").ToastManager.open(
                v.jsx(o("WAWebToast.react").Toast, {
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
        })),
        T.apply(this, arguments)
      );
    }
    function D(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            (yield o("WAWebKeepInChatActions").runUndoKeepInChatUX(
              o("WAWebStateUtils").unproxy(e),
              o("WAWebWamEnumKicEntryPointType").KIC_ENTRY_POINT_TYPE.ALL_MEDIA,
              !0,
            ),
              o("WAWebToastManager").ToastManager.open(
                v.jsx(o("WAWebToast.react").Toast, {
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
        })),
        x.apply(this, arguments)
      );
    }
    function $(e) {
      var t = o("WAWebStateUtils").unproxy(e),
        n = o("WAWebFrontendMsgGetters").getChat(t);
      (o("WAWebCmd").Cmd.sendStarMsgs(n, [t]),
        o("WAWebMultiSelectUtils").logMessageActionClickMetric(
          [e],
          o("WAWebWamEnumMessageContextMenuOptionType")
            .MESSAGE_CONTEXT_MENU_OPTION_TYPE.STAR_OR_UNSTAR,
        ));
    }
    function P(e, t) {
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
            v.jsx(o("WAWebToast.react").Toast, {
              id: o("WAWebActionToast.react").genId(),
              msg: e,
              duration: 4e3,
            }),
          );
        },
      });
    }
    function N(e) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebFrontendMsgGetters").getChat(e),
            n = yield o("WAWebCmd").Cmd.openChatBottom({ chat: t });
          if (!n) {
            o("WALogger").ERROR(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
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
        M.apply(this, arguments)
      );
    }
    function w(e) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (yield r("WAWebReplyToMsgChatAction")(e),
            o("WAWebModalManager").ModalManager.close(),
            o("WAWebComposeBoxActions").ComposeBoxActions.focus(
              o("WAWebFrontendMsgGetters").getChat(e),
            ));
        })),
        A.apply(this, arguments)
      );
    }
    ((l.goToMessageFromModal = L),
      (l.handleMessageDownloadClick = E),
      (l.handleMessageUnstarClick = k),
      (l.handleKeepClick = I),
      (l.handleUndoKeepClick = D),
      (l.handleMessageStarClick = $),
      (l.handleForwardClick = P),
      (l.replyToMessageFromModal = N),
      (l.replyPrivatelyToMessageFromModal = w));
  },
  226,
);
