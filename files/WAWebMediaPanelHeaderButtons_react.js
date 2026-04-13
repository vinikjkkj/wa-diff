__d(
  "WAWebMediaPanelHeaderButtons.react",
  [
    "fbt",
    "$InternalEnum",
    "Promise",
    "WALogger",
    "WAPromiseDelays",
    "WAWebBotGating",
    "WAWebChatGetters",
    "WAWebChatMessageSearch",
    "WAWebChatRefreshedIcon.react",
    "WAWebCmd",
    "WAWebColumnChangeDispatch",
    "WAWebCommentsModal.react",
    "WAWebComposeBoxActions",
    "WAWebConfirmPopup.react",
    "WAWebCopyToClipboard",
    "WAWebDeleteRevokeMsgFlow.react",
    "WAWebDevOnlyBadge.react",
    "WAWebDrawerManager",
    "WAWebDrawerManagerContext",
    "WAWebDropdownItem.react",
    "WAWebEnvironment",
    "WAWebFbtCommon",
    "WAWebFileSaver",
    "WAWebForwardMessageFlowLoadable",
    "WAWebFrontendChatGetters",
    "WAWebFrontendMsgGetters",
    "WAWebIcDownloadIcon.react",
    "WAWebIcShareWindowsIcon.react",
    "WAWebInfoRefreshedIcon.react",
    "WAWebKeepInChatActions",
    "WAWebKeepInChatMsgUtils",
    "WAWebLaunchIcon.react",
    "WAWebMediaDocumentUtils",
    "WAWebMediaPanelHeaderTestIds",
    "WAWebMediaViewerConstants",
    "WAWebMediaViewerReportSpamPopupLoadable",
    "WAWebModalManager",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebNewsletterMembershipUtil",
    "WAWebPinInChatCollection",
    "WAWebPinMessageModal.react",
    "WAWebPinnedMessagesUserJourneyLogger",
    "WAWebPrivateMessageComplianceUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebReplyPrivatelyRefreshedIcon.react",
    "WAWebReplyToMsgChatAction",
    "WAWebRevokeMetricUtils",
    "WAWebSendPinMessageAction",
    "WAWebSendSpamChatAction",
    "WAWebSpamConstants",
    "WAWebStateUtils",
    "WAWebThreadMsgUtils",
    "WAWebWamEnumKicEntryPointType",
    "WDSIconIcBookmark.react",
    "WDSIconIcDelete.react",
    "WDSIconIcFastForward.react",
    "WDSIconIcGrade.react",
    "WDSIconIcMood.react",
    "WDSIconIcOpenInNew.react",
    "WDSIconIcPushPin.react",
    "WDSIconIcReply.react",
    "WDSIconIcThumbDown.react",
    "WDSIconWdsIcBookmarkSlash.react",
    "WDSIconWdsIcGradeSlash.react",
    "WDSIconWdsIcPushPinSlash.react",
    "WDSMenuBarItem.react",
    "cr:13786",
    "cr:23046",
    "cr:7565",
    "react",
    "react-compiler-runtime",
    "requireDeferred",
    "useWAWebHdImageChildMsg",
    "useWAWebIsPinnedMsg",
    "useWAWebListener",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m,
      p,
      _,
      f = _ || (_ = o("react")),
      g = _.useRef,
      h = r("requireDeferred")("WAWebComplianceReportTrigger").__setRef(
        "WAWebMediaPanelHeaderButtons.react",
      ),
      y = n("$InternalEnum").Mirrored(["MenuBar", "Dropdown"]);
    function C(e) {
      var t = o("WAWebFrontendMsgGetters").getChat(e);
      o("WAWebFrontendChatGetters").getIsCAG(t)
        ? o("WAWebModalManager").ModalManager.open(
            f.jsx(r("WAWebCommentsModal.react"), { parentMsgs: [e] }),
          )
        : ((t.composeQuotedMsg = e),
          o("WAWebComposeBoxActions").ComposeBoxActions.focus(t));
    }
    function b(e) {
      return s._(/*BTDS*/ "Report {contact_name}", [
        s._param("contact_name", e.displayName()),
      ]);
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(e) {
      return (
        o("WAWebMsgGetters").getIsSentByMe(e) ||
        o("WAWebNewsletterMembershipUtil").iAmAdminOrOwner(
          o("WAWebFrontendMsgGetters").getChat(e).newsletterMetadata,
        )
      );
    }
    var S = function () {
        return (
          (n("cr:23046") == null ||
          n("cr:23046").isWindowsShareSheetEnabled == null
            ? void 0
            : n("cr:23046").isWindowsShareSheetEnabled()) === !0
        );
      },
      R = function (r, a) {
        (r == null || r.stopPropagation(),
          n("cr:7565") == null ||
            n("cr:7565")
              .openMediaFile(
                o("WAWebStateUtils").unproxy(a),
                o("WAWebMediaDocumentUtils").displayFileOpeningToast,
              )
              .catch(function (t) {
                o("WALogger").ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Error while opening media file: ",
                      "",
                    ])),
                  t,
                );
              }));
      };
    function L(e) {
      var t = function (n) {
          R(n, e);
        },
        r = function (r) {
          (r.stopPropagation(),
            n("cr:7565") &&
              n("cr:7565")
                .saveMediaFile(o("WAWebStateUtils").unproxy(e))
                .then(function () {
                  if (n("cr:13786"))
                    return n("cr:13786").shareFile(
                      o("WAWebStateUtils").unproxy(e),
                    );
                })
                .catch(function (e) {
                  o("WALogger").ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "Error while sharing a message: ",
                        "",
                      ])),
                    e,
                  );
                }));
        },
        a = [
          f.jsx(
            o("WAWebDropdownItem.react").DropdownItem,
            {
              action: r,
              icon: f.jsx(
                o("WAWebIcShareWindowsIcon.react").IcShareWindowsIcon,
                {},
              ),
              children: s._(/*BTDS*/ "Share"),
            },
            "share",
          ),
          f.jsx(
            o("WAWebDropdownItem.react").DropdownItem,
            {
              action: t,
              icon: f.jsx(o("WAWebLaunchIcon.react").LaunchIcon, {}),
              children: s._(/*BTDS*/ "Open with"),
            },
            "open-with",
          ),
        ];
      return a;
    }
    function E(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.msg,
        a = e.onClose,
        i = e.type,
        l = o("WAWebDrawerManagerContext").useDrawerManagerContext("right"),
        u;
      t[0] !== n || t[1] !== a || t[2] !== l
        ? ((u = function (t) {
            var e;
            (t == null || t.stopPropagation(), a());
            var r = (e = l.existsDrawer()) != null ? e : !1;
            r &&
              o("WAWebColumnChangeDispatch").Column.column === 2 &&
              o("WAWebDrawerManager").DrawerManager.closeDrawerRight();
            var i = o("WAWebFrontendMsgGetters").getChat(n),
              s;
            i.id.isBot() &&
              o("WAWebBotGating").isAiChatThreadsEnabled() &&
              (s = o("WAWebThreadMsgUtils").getMsgAiThread(n.unsafe()));
            var u = o("WAWebChatMessageSearch").getSearchContext({
              chat: i,
              msgKey: o("WAWebStateUtils").unproxy(n).id,
              threadId: s,
            });
            o("WAWebCmd")
              .Cmd.openChatAt({
                chat: i,
                msgContext: u,
                threadId: s != null ? s : void 0,
              })
              .then(function (e) {
                e &&
                  (o("WAWebModalManager").ModalManager.close(),
                  o("WAWebComposeBoxActions").ComposeBoxActions.focus(
                    o("WAWebFrontendMsgGetters").getChat(n),
                  ));
              });
          }),
          (t[0] = n),
          (t[1] = a),
          (t[2] = l),
          (t[3] = u))
        : (u = t[3]);
      var c = u,
        d;
      return (
        t[4] !== c || t[5] !== i
          ? ((d =
              i === y.Dropdown
                ? f.jsx(o("WAWebDropdownItem.react").DropdownItem, {
                    action: c,
                    icon: f.jsx(
                      o("WAWebChatRefreshedIcon.react").ChatRefreshedIcon,
                      {},
                    ),
                    children: s._(/*BTDS*/ "Go to message"),
                  })
                : f.jsx(r("WDSMenuBarItem.react"), {
                    testid: void 0,
                    icon: o("WAWebChatRefreshedIcon.react").ChatRefreshedIcon,
                    title: s._(/*BTDS*/ "Go to message"),
                    onClick: c,
                  })),
            (t[4] = c),
            (t[5] = i),
            (t[6] = d))
          : (d = t[6]),
        d
      );
    }
    function k(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.msg,
        r;
      t[0] !== n.id
        ? ((r = function () {
            o("WAWebCopyToClipboard").copyTextToClipboard(n.id.toString());
          }),
          (t[0] = n.id),
          (t[1] = r))
        : (r = t[1]);
      var a;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = f.jsx(o("WAWebDevOnlyBadge.react").DevOnlyBadge, {
            label: "Copy Msg ID",
          })),
          (t[2] = a))
        : (a = t[2]);
      var i;
      return (
        t[3] !== r
          ? ((i = f.jsx(
              o("WAWebDropdownItem.react").DropdownItem,
              { addSpacing: !0, testid: void 0, action: r, children: a },
              "copy-id",
            )),
            (t[3] = r),
            (t[4] = i))
          : (i = t[4]),
        i
      );
    }
    function I(e) {
      var t = o("react-compiler-runtime").c(8),
        a = e.msg,
        i = e.onClose,
        l = e.theme,
        u = l === void 0 ? "default" : l,
        c;
      t[0] !== a || t[1] !== i || t[2] !== u
        ? ((c = function (t) {
            (i(),
              o("WAPromiseDelays")
                .delayMs(
                  o("WAWebMediaViewerConstants").CLOSE_ANIMATION_DURATION,
                )
                .then(function () {
                  if (u === "media_hub") {
                    var e = o("WAWebFrontendMsgGetters").getChat(a);
                    return o("WAWebCmd").Cmd.openChatAt({
                      chat: e,
                      msgContext: {
                        collection: e.msgs,
                        msg: e.msgs.assertGet(a.id),
                        key: a.id,
                        enableAnimation: !0,
                        highlightMsg: !0,
                      },
                    });
                  }
                  return (p || (p = n("Promise"))).resolve(!0);
                })
                .then(C.bind(null, o("WAWebStateUtils").unproxy(a))));
          }),
          (t[0] = a),
          (t[1] = i),
          (t[2] = u),
          (t[3] = c))
        : (c = t[3]);
      var d = c,
        m;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = r("WAWebMediaPanelHeaderTestIds").REPLY_BUTTON.valueOf()),
          (t[4] = m))
        : (m = t[4]);
      var _;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = s._(/*BTDS*/ "Reply")), (t[5] = _))
        : (_ = t[5]);
      var g;
      return (
        t[6] !== d
          ? ((g = f.jsx(r("WDSMenuBarItem.react"), {
              testid: void 0,
              icon: r("WDSIconIcReply.react"),
              title: _,
              onClick: d,
            })),
            (t[6] = d),
            (t[7] = g))
          : (g = t[7]),
        g
      );
    }
    function T(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.msg,
        a = e.onClose,
        i;
      t[0] !== n || t[1] !== a
        ? ((i = function (t) {
            (o("WAWebModalManager").ModalManager.open(
              f.jsx(r("WAWebDeleteRevokeMsgFlow.react"), {
                chat: o("WAWebFrontendMsgGetters").getChat(n),
                msgList: [o("WAWebStateUtils").unproxy(n)],
                onDelete: a,
              }),
            ),
              o("WAWebRevokeMetricUtils").UiRevokeActionHelper.startSession(),
              o(
                "WAWebRevokeMetricUtils",
              ).UiRevokeActionHelper.messageSelected());
          }),
          (t[0] = n),
          (t[1] = a),
          (t[2] = i))
        : (i = t[2]);
      var l = i,
        u;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = r("WAWebMediaPanelHeaderTestIds").DELETE_BUTTON.valueOf()),
          (t[3] = u))
        : (u = t[3]);
      var c;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = s._(/*BTDS*/ "Delete")), (t[4] = c))
        : (c = t[4]);
      var d;
      return (
        t[5] !== l
          ? ((d = f.jsx(r("WDSMenuBarItem.react"), {
              testid: void 0,
              icon: r("WDSIconIcDelete.react"),
              title: c,
              onClick: l,
            })),
            (t[5] = l),
            (t[6] = d))
          : (d = t[6]),
        d
      );
    }
    function D(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.isMediaDownloadable,
        a = e.msg,
        i = e.onDownloadClick,
        l = e.type,
        u = o("useWAWebHdImageChildMsg").useHdImageChildMsg(a),
        c;
      t[0] !== u || t[1] !== a || t[2] !== i
        ? ((c = function (t) {
            (t == null || t.stopPropagation(),
              o("WAWebFileSaver").FileSaver.initDownload(
                o("WAWebStateUtils").unproxy(u != null ? u : a),
              ),
              i == null || i());
          }),
          (t[0] = u),
          (t[1] = a),
          (t[2] = i),
          (t[3] = c))
        : (c = t[3]);
      var d = c;
      if (!n()) return null;
      var m;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = r("WAWebEnvironment").isWindows
            ? s._(/*BTDS*/ "Save as...")
            : s._(/*BTDS*/ "Download")),
          (t[4] = m))
        : (m = t[4]);
      var p = m,
        _;
      return (
        t[5] !== d || t[6] !== n || t[7] !== l
          ? ((_ =
              l === y.Dropdown
                ? f.jsx(o("WAWebDropdownItem.react").DropdownItem, {
                    action: d,
                    disabled: !n(),
                    icon: f.jsx(
                      o("WAWebIcDownloadIcon.react").IcDownloadIcon,
                      {},
                    ),
                    children: p,
                  })
                : f.jsx(r("WDSMenuBarItem.react"), {
                    testid: void 0,
                    icon: o("WAWebIcDownloadIcon.react").IcDownloadIcon,
                    title: p,
                    disabled: !n(),
                    onClick: d,
                  })),
            (t[5] = d),
            (t[6] = n),
            (t[7] = l),
            (t[8] = _))
          : (_ = t[8]),
        _
      );
    }
    function x(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.msg,
        a;
      t[0] !== n
        ? ((a = function (t) {
            R(t, n);
          }),
          (t[0] = n),
          (t[1] = a))
        : (a = t[1]);
      var i = a,
        l;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = s._(/*BTDS*/ "Open with")), (t[2] = l))
        : (l = t[2]);
      var u;
      return (
        t[3] !== i
          ? ((u = f.jsx(r("WDSMenuBarItem.react"), {
              icon: r("WDSIconIcOpenInNew.react"),
              title: l,
              onClick: i,
            })),
            (t[3] = i),
            (t[4] = u))
          : (u = t[4]),
        u
      );
    }
    function $(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.msg,
        a = e.openReactionTray,
        i = e.sendReactionButtonRef;
      if (n.type === o("WAWebMsgType").MSG_TYPE.STICKER) return null;
      var l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = r("WAWebMediaPanelHeaderTestIds").REACTIONS_BUTTON.valueOf()),
          (t[0] = l))
        : (l = t[0]);
      var u;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = s._(/*BTDS*/ "React")), (t[1] = u))
        : (u = t[1]);
      var c;
      return (
        t[2] !== a || t[3] !== i
          ? ((c = f.jsx(r("WDSMenuBarItem.react"), {
              ref: i,
              testid: void 0,
              icon: r("WDSIconIcMood.react"),
              title: u,
              onClick: a,
            })),
            (t[2] = a),
            (t[3] = i),
            (t[4] = c))
          : (c = t[4]),
        c
      );
    }
    function P(e) {
      var t = o("react-compiler-runtime").c(14),
        n = e.msg,
        a,
        i,
        l,
        u;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = [o("WAWebMsgGetters").getIsKept]), (t[0] = u))
        : (u = t[0]);
      var c = o("useWAWebMsgValues").useMsgValues(n.id, u),
        d = c[0],
        m;
      t[1] !== n
        ? ((m = function (t) {
            (t == null || t.stopPropagation(),
              o("WAWebKeepInChatActions").runKeepInChatUX(
                o("WAWebStateUtils").unproxy(n),
                o("WAWebWamEnumKicEntryPointType").KIC_ENTRY_POINT_TYPE.MEDIA,
              ));
          }),
          (t[1] = n),
          (t[2] = m))
        : (m = t[2]);
      var p = m,
        _;
      t[3] !== n
        ? ((_ = function (t) {
            (t == null || t.stopPropagation(),
              o("WAWebKeepInChatActions").runUndoKeepInChatUX(
                o("WAWebStateUtils").unproxy(n),
                o("WAWebWamEnumKicEntryPointType").KIC_ENTRY_POINT_TYPE.MEDIA,
              ));
          }),
          (t[3] = n),
          (t[4] = _))
        : (_ = t[4]);
      var g = _;
      if (d && o("WAWebKeepInChatMsgUtils").canShowUnkeepOption(n)) {
        ((a = r("WDSIconWdsIcBookmarkSlash.react")), (i = g));
        var h;
        (t[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = s._(/*BTDS*/ "Unkeep")), (t[5] = h))
          : (h = t[5]),
          (l = h));
      } else if (!d && o("WAWebKeepInChatMsgUtils").canShowKeepOption(n)) {
        ((a = r("WDSIconIcBookmark.react")), (i = p));
        var y;
        (t[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = s._(/*BTDS*/ "Keep")), (t[6] = y))
          : (y = t[6]),
          (l = y));
      } else return null;
      var C;
      t[7] !== d
        ? ((C = d
            ? r("WAWebMediaPanelHeaderTestIds").UNKEEP_BUTTON.valueOf()
            : r("WAWebMediaPanelHeaderTestIds").KEEP_BUTTON.valueOf()),
          (t[7] = d),
          (t[8] = C))
        : (C = t[8]);
      var b;
      return (
        t[9] !== a || t[10] !== i || t[11] !== C || t[12] !== l
          ? ((b = f.jsx(
              r("WDSMenuBarItem.react"),
              { testid: void 0, icon: a, title: l, onClick: i },
              "keep-in-chat-button",
            )),
            (t[9] = a),
            (t[10] = i),
            (t[11] = C),
            (t[12] = l),
            (t[13] = b))
          : (b = t[13]),
        b
      );
    }
    function N(e) {
      var t = o("react-compiler-runtime").c(14),
        n = e.msg,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = [o("WAWebMsgGetters").getStar]), (t[0] = a))
        : (a = t[0]);
      var i = o("useWAWebMsgValues").useMsgValues(n.id, a),
        l = i[0],
        u,
        c,
        d;
      if (l) {
        var m;
        (t[1] !== n
          ? ((m = function (t) {
              (t == null || t.stopPropagation(),
                o("WAWebCmd").Cmd.sendUnstarMsgs(
                  o("WAWebFrontendMsgGetters").getChat(n),
                  [o("WAWebStateUtils").unproxy(n)],
                ));
            }),
            (t[1] = n),
            (t[2] = m))
          : (m = t[2]),
          (u = m),
          (c = r("WDSIconWdsIcGradeSlash.react")));
        var p;
        (t[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = s._(
              /*BTDS*/ '_j{"*":"Unstar messages","_1":"Unstar message"}',
              [s._plural(1)],
            )),
            (t[3] = p))
          : (p = t[3]),
          (d = p));
      } else {
        var _;
        (t[4] !== n
          ? ((_ = function (t) {
              (t == null || t.stopPropagation(),
                o("WAWebCmd").Cmd.sendStarMsgs(
                  o("WAWebFrontendMsgGetters").getChat(n),
                  [o("WAWebStateUtils").unproxy(n)],
                ));
            }),
            (t[4] = n),
            (t[5] = _))
          : (_ = t[5]),
          (u = _),
          (c = r("WDSIconIcGrade.react")));
        var g;
        (t[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = s._(/*BTDS*/ '_j{"*":"Star"}', [s._plural(1)])), (t[6] = g))
          : (g = t[6]),
          (d = g));
      }
      var h;
      t[7] !== l
        ? ((h = l
            ? r("WAWebMediaPanelHeaderTestIds").UNSTAR_BUTTON.valueOf()
            : r("WAWebMediaPanelHeaderTestIds").STAR_BUTTON.valueOf()),
          (t[7] = l),
          (t[8] = h))
        : (h = t[8]);
      var y;
      return (
        t[9] !== u || t[10] !== c || t[11] !== h || t[12] !== d
          ? ((y = f.jsx(
              r("WDSMenuBarItem.react"),
              { testid: void 0, icon: c, title: d, onClick: u },
              "star-button",
            )),
            (t[9] = u),
            (t[10] = c),
            (t[11] = h),
            (t[12] = d),
            (t[13] = y))
          : (y = t[13]),
        y
      );
    }
    function M(e) {
      var t = e.msg,
        n = g(!1),
        a,
        i,
        l,
        u = r("useWAWebIsPinnedMsg")(t.id),
        d = o("WAWebFrontendMsgGetters").getChat(t);
      return (
        o("useWAWebListener").useListener(
          o("WAWebModalManager").ModalManager,
          "close_modal",
          function () {
            n.current &&
              ((n.current = !1),
              o("WAWebModalManager").ModalManager.setForceRequestFocusMedia(
                null,
                "media",
              ));
          },
        ),
        u
          ? ((a = function (n) {
              n == null || n.stopPropagation();
              var e = o(
                "WAWebPinInChatCollection",
              ).PinInChatCollection.getByParentMsgKey(t.id);
              (new (o(
                "WAWebPinnedMessagesUserJourneyLogger",
              ).PinnedMessagesUserJourneyLogger)(d).messageMenuClickUnpin(t, e),
                o("WAWebSendPinMessageAction")
                  .sendPinInChatMsg(
                    t,
                    o("WAWebProtobufsE2E.pb").Message$PinInChatMessage$Type
                      .UNPIN_FOR_ALL,
                  )
                  .catch(function (e) {
                    o("WALogger").ERROR(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "Error while unpinning a message: ",
                          "",
                        ])),
                      e,
                    );
                  }));
            }),
            (i = r("WDSIconWdsIcPushPinSlash.react")),
            (l = s._(/*BTDS*/ "Unpin")))
          : ((a = function (a) {
              a == null || a.stopPropagation();
              var e = new (o(
                "WAWebPinnedMessagesUserJourneyLogger",
              ).PinnedMessagesUserJourneyLogger)(d);
              (e.messageMenuClickPin(t),
                (n.current = !0),
                o("WAWebModalManager").ModalManager.setForceRequestFocusMedia(
                  !1,
                  "media",
                ),
                o("WAWebModalManager").ModalManager.open(
                  f.jsx(r("WAWebPinMessageModal.react"), { msg: t, logger: e }),
                ));
            }),
            (i = r("WDSIconIcPushPin.react")),
            (l = s._(/*BTDS*/ "Pin"))),
        f.jsx(
          r("WDSMenuBarItem.react"),
          { testid: void 0, icon: i, title: l, onClick: a },
          "pin-button",
        )
      );
    }
    M.displayName = M.name + " [from " + i.id + "]";
    function w(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.msg,
        a = A,
        i;
      t[0] !== n
        ? ((i = function (t) {
            (t == null || t.stopPropagation(),
              o("WAWebModalManager").ModalManager.setForceRequestFocusMedia(
                !1,
                "media",
              ),
              o("WAWebFrontendMsgGetters").getIsUnsentMedia(n)
                ? o("WAWebModalManager").ModalManager.open(
                    f.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                      tsNavigationData: {
                        surface: "unknown",
                        viewName: "media-panel-header",
                      },
                      title: s._(/*BTDS*/ "Can't forward"),
                      onOK: a,
                      okText: r("WAWebFbtCommon")("OK"),
                      children: s._(
                        /*BTDS*/ '_j{"*":"Wait until the messages finish sending and displays a checkmark before forwarding.","_1":"Wait until the message finishes sending and displays a checkmark before forwarding."}',
                        [s._plural(1)],
                      ),
                    }),
                  )
                : o("WAWebModalManager").ModalManager.open(
                    f.jsx(
                      o("WAWebForwardMessageFlowLoadable")
                        .ForwardMessageFlowLoadable,
                      { msgs: [o("WAWebStateUtils").unproxy(n)], onClose: a },
                    ),
                    { transition: "modal-flow" },
                  ));
          }),
          (t[0] = n),
          (t[1] = i))
        : (i = t[1]);
      var l = i,
        u;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = r("WAWebMediaPanelHeaderTestIds").FORWARD_BUTTON.valueOf()),
          (t[2] = u))
        : (u = t[2]);
      var c;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = s._(/*BTDS*/ "Forward")), (t[3] = c))
        : (c = t[3]);
      var d;
      return (
        t[4] !== l
          ? ((d = f.jsx(r("WDSMenuBarItem.react"), {
              testid: void 0,
              icon: r("WDSIconIcFastForward.react"),
              title: c,
              onClick: l,
            })),
            (t[4] = l),
            (t[5] = d))
          : (d = t[5]),
        d
      );
    }
    function A() {
      (o("WAWebModalManager").ModalManager.close(),
        o("WAWebModalManager").ModalManager.setForceRequestFocusMedia(
          null,
          "media",
        ));
    }
    function F(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.msg,
        a;
      t[0] !== n
        ? ((a = function () {
            r("WAWebReplyToMsgChatAction")(n);
          }),
          (t[0] = n),
          (t[1] = a))
        : (a = t[1]);
      var i = a,
        l,
        u;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = f.jsx(
            o("WAWebReplyPrivatelyRefreshedIcon.react")
              .ReplyPrivatelyRefreshedIcon,
            {},
          )),
          (u = s._(/*BTDS*/ "Reply privately")),
          (t[2] = l),
          (t[3] = u))
        : ((l = t[2]), (u = t[3]));
      var c;
      return (
        t[4] !== i
          ? ((c = f.jsx(o("WAWebDropdownItem.react").DropdownItem, {
              testid: void 0,
              action: i,
              icon: l,
              children: u,
            })),
            (t[4] = i),
            (t[5] = c))
          : (c = t[5]),
        c
      );
    }
    function O(e) {
      var t = e.msg,
        n = function (n) {
          n
            ? o("WAWebSendSpamChatAction").sendMessageReportBlock(
                t,
                o("WAWebSpamConstants").SpamFlow.MediaViewer,
              )
            : o("WAWebSendSpamChatAction")
                .sendMessageReport(
                  t,
                  o("WAWebSpamConstants").SpamFlow.MediaViewer,
                )
                .then(function (e) {
                  o("WAWebModalManager").ModalManager.close();
                  var n = o(
                    "WAWebPrivateMessageComplianceUtils",
                  ).getPrivateMessageReportComplianceConfig({
                    reportId: e,
                    msg: t,
                  });
                  n != null &&
                    h
                      .load()
                      .then(function (e) {
                        return e.WAWebComplianceReportTrigger(n);
                      })
                      .catch(function (e) {
                        o("WALogger")
                          .ERROR(
                            d ||
                              (d = babelHelpers.taggedTemplateLiteralLoose([
                                "[ComplianceReport] modal open failed (media viewer): ",
                                "",
                              ])),
                            e,
                          )
                          .sendLogs(
                            "report-message-compliance-from-media-viewer-error",
                          );
                      });
                })
                .catch(function (e) {
                  o("WALogger")
                    .ERROR(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "Error while reporting a message from media viewer: ",
                          "",
                        ])),
                      e,
                    )
                    .sendLogs("report-message-from-media-viewer-error");
                });
        },
        a = function () {
          var e, r;
          o("WAWebModalManager").ModalManager.open(
            f.jsx(
              o("WAWebMediaViewerReportSpamPopupLoadable")
                .WAWebMediaViewerReportSpamPopupLoadable,
              {
                isBusiness: t.senderObj.isBusiness,
                isGroup: o("WAWebChatGetters").getIsGroup(
                  o("WAWebFrontendMsgGetters").getChat(t),
                ),
                isBizBot3p:
                  (e =
                    (r = o("WAWebFrontendMsgGetters").getChat(t).contact
                      .businessProfile) == null
                      ? void 0
                      : r.isBizBot3p) != null
                    ? e
                    : !1,
                onReport: n,
                onCancel: function () {
                  return o("WAWebModalManager").ModalManager.close();
                },
                title: b(t),
              },
            ),
          );
        };
      return f.jsx(o("WAWebDropdownItem.react").DropdownItem, {
        action: a,
        icon: f.jsx(r("WDSIconIcThumbDown.react"), {}),
        children: b(t),
      });
    }
    O.displayName = O.name + " [from " + i.id + "]";
    function B(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.msg,
        r = e.onClose,
        a;
      t[0] !== n || t[1] !== r
        ? ((a = function (t) {
            (r(),
              o("WAPromiseDelays")
                .delayMs(
                  o("WAWebMediaViewerConstants").CLOSE_ANIMATION_DURATION + 250,
                )
                .then(
                  o("WAWebCmd").Cmd.msgInfoDrawer.bind(
                    o("WAWebCmd").Cmd,
                    o("WAWebStateUtils").unproxy(n),
                  ),
                ));
          }),
          (t[0] = n),
          (t[1] = r),
          (t[2] = a))
        : (a = t[2]);
      var i = a,
        l,
        u;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = f.jsx(o("WAWebInfoRefreshedIcon.react").InfoRefreshedIcon, {})),
          (u = s._(/*BTDS*/ "Message info")),
          (t[3] = l),
          (t[4] = u))
        : ((l = t[3]), (u = t[4]));
      var c;
      return (
        t[5] !== i
          ? ((c = f.jsx(o("WAWebDropdownItem.react").DropdownItem, {
              action: i,
              icon: l,
              children: u,
            })),
            (t[5] = i),
            (t[6] = c))
          : (c = t[6]),
        c
      );
    }
    ((l.ButtonType = y),
      (l.delayedReplyCallback = C),
      (l.getReportSpamTitle = b),
      (l.canDeleteMsg = v),
      (l.isShareSheetEnabled = S),
      (l.handleOpenAnotherAppButtonClick = R),
      (l.getDropdownMenuItemsForWindowsShareSheet = L),
      (l.GoToButton = E),
      (l.CopyMsgIdButton = k),
      (l.ReplyButton = I),
      (l.DeleteButton = T),
      (l.DownloadButton = D),
      (l.OpenWithAnotherAppButton = x),
      (l.SendReactionButton = $),
      (l.KeepInChatButton = P),
      (l.StarButton = N),
      (l.PinButton = M),
      (l.ForwardButton = w),
      (l.PrivateReplyButton = F),
      (l.ReportSpamButton = O),
      (l.MsgInfoButton = B));
  },
  226,
);
