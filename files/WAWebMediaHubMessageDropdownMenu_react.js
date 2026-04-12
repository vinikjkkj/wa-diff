__d(
  "WAWebMediaHubMessageDropdownMenu.react",
  [
    "fbt",
    "WAWebBizCtwaAGMUtils",
    "WAWebChatGetters",
    "WAWebChatRefreshedIcon.react",
    "WAWebCheckRefreshedIcon.react",
    "WAWebCopyRefreshedIcon.react",
    "WAWebCopyUtils",
    "WAWebDeleteRefreshedIcon.react",
    "WAWebDeleteRevokeMsgFlow.react",
    "WAWebDropdown.react",
    "WAWebDropdownItem.react",
    "WAWebDropdownItemSeparator.react",
    "WAWebEnvironment",
    "WAWebExternalLink.react",
    "WAWebFlex.react",
    "WAWebForwardRefreshedIcon.react",
    "WAWebFrontendMsgGetters",
    "WAWebIcChevronDownMenuIcon.react",
    "WAWebKeepInChatMsgUtils",
    "WAWebMediaHubContextProvider",
    "WAWebMediaHubLogger",
    "WAWebMediaHubMessageActionHandlers",
    "WAWebMessageContextMenuActionsWamEvent",
    "WAWebModalManager",
    "WAWebMsgActionCapability",
    "WAWebMsgGetters",
    "WAWebMsgReply",
    "WAWebNoop",
    "WAWebReplyPrivatelyRefreshedIcon.react",
    "WAWebReplyRefreshedIcon.react",
    "WAWebRevokeMetricUtils",
    "WAWebStarRefreshedIcon.react",
    "WAWebStateUtils",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WAWebUnstarRefreshedIcon.react",
    "WAWebWamEnumActionCode",
    "WAWebWamEnumMessageContextMenuActionType",
    "WAWebWamEnumMessageContextMenuOptionType",
    "WDSIconIcBookmark.react",
    "WDSIconIcDownload.react",
    "WDSIconIcOpenInNew.react",
    "WDSIconWdsIcBookmarkSlash.react",
    "WDSMenuBarItem.react",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useRef,
      p = c.useState,
      _ = {
        isForMedia: {
          position: "x10l6tqk",
          top: "xfr5jun",
          insetInlineEnd: "x11dcrhx",
          left: null,
          right: null,
          zIndex: "x12xzxwr",
          transition: "x13k7yer",
          opacity: "xg01cxk",
          $$css: !0,
        },
        opacityVisible: { opacity: "x1hc1fzr", $$css: !0 },
        opacityInvisble: { opacity: "xg01cxk", $$css: !0 },
      };
    function f(e) {
      var t = e.isForMedia,
        n = t === void 0 ? !1 : t,
        a = e.isHover,
        i = e.link,
        l = e.msg,
        c = e.onHover,
        f = e.searchType,
        g = m(null),
        h = o("WAWebMediaHubContextProvider").useWAWebMediaHubContext(),
        C = h.contextMenuMsg,
        b = h.isSelectMode,
        v = h.onMessageSelect,
        S = h.setContextMenuMsg,
        R = h.setIsSelectMode,
        L = function () {
          (R(!0), v(l));
        },
        E = p(!1),
        k = E[0],
        I = E[1],
        T = function () {
          R(!1);
        };
      (o("useWAWebListener").useListener(l, "revoked", function () {
        k && S(null);
      }),
        d(
          function () {
            return (C == null ? void 0 : C.msg) === l &&
              (C == null ? void 0 : C.searchType) === f
              ? I(!0)
              : I(!1);
          },
          [C, l, f],
        ));
      var D = (a || k) && !b;
      if (!b) {
        var x = u.jsx(y, { msg: l, onMessageSelect: L, link: i, onCancel: T }),
          $ = C == null ? void 0 : C.event;
        return u.jsxs(o("WAWebFlex.react").FlexItem, {
          shrink: 0,
          align: "center",
          tabIndex: -1,
          xstyle: [_.opacityInvisble, n && _.isForMedia, D && _.opacityVisible],
          children: [
            u.jsx(r("WDSMenuBarItem.react"), {
              buttonSize: "small",
              title: s._(/*BTDS*/ "Message's context menu"),
              onClick: D
                ? function (e) {
                    (e == null || e.stopPropagation(),
                      S(k ? null : { msg: l, searchType: f }));
                  }
                : void 0,
              icon: o("WAWebIcChevronDownMenuIcon.react").IcChevronDownMenuIcon,
            }),
            k &&
              u.jsx(o("WAWebUimUie.react").UIE, {
                displayName: "MsgContextMenu",
                escapable: !0,
                popable: !0,
                dismissOnWindowResize: !0,
                requestDismiss: function () {
                  S(null);
                },
                children: u.jsx(r("WAWebUimUieMenu.react"), {
                  contextMenu:
                    $ != null
                      ? {
                          menu: x,
                          event: $,
                          dirX: o("WAWebDropdown.react").DirX.RIGHT,
                        }
                      : {
                          menu: x,
                          anchor: g == null ? void 0 : g.current,
                          dirX: n
                            ? o("WAWebDropdown.react").DirX.RIGHT
                            : o("WAWebDropdown.react").DirX.LEFT,
                          offsetX: n ? -12 : 0,
                          offsetY: n ? 16 : 0,
                        },
                }),
              }),
            u.jsx(
              "div",
              babelHelpers.extends(
                { ref: g },
                {
                  0: {},
                  2: {
                    className:
                      "x10l6tqk xfr5jun x11dcrhx x12xzxwr x13k7yer xg01cxk",
                  },
                  1: { className: "xomnu4r xdg88n9" },
                  3: {
                    className:
                      "x10l6tqk x12xzxwr x13k7yer xg01cxk xomnu4r xdg88n9",
                  },
                }[(!!n << 1) | (!!n << 0)],
              ),
            ),
          ],
        });
      }
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e, t) {
      new (o(
        "WAWebMessageContextMenuActionsWamEvent",
      ).MessageContextMenuActionsWamEvent)({
        isAGroup: o("WAWebChatGetters").getIsGroup(
          o("WAWebFrontendMsgGetters").getChat(e),
        ),
        isMultiAction: !1,
        isOriginalSender: o("WAWebMsgGetters").getIsSentByMe(e),
        messageContextMenuAction: o("WAWebWamEnumMessageContextMenuActionType")
          .MESSAGE_CONTEXT_MENU_ACTION_TYPE.CLICK,
        messageContextMenuOption: t,
      }).commit();
    }
    var h = { delete: { color: "xqnyt8g", $$css: !0 } };
    function y(e) {
      var t,
        a,
        i = e.isMsgVisible,
        l = e.link,
        c = e.msg,
        d = e.onCancel,
        m = e.onMessageSelect,
        p = o("WAWebFrontendMsgGetters").getChat(c),
        _ = function () {
          (o("WAWebModalManager").ModalManager.openSupportModal(
            u.jsx(r("WAWebDeleteRevokeMsgFlow.react"), {
              chat: p,
              msgList: [c].map(o("WAWebStateUtils").unproxy),
              isMsgVisible: i,
              onEnd: d,
              theme: "mediaHub",
            }),
          ),
            o("WAWebRevokeMetricUtils").UiRevokeActionHelper.startSession(),
            o("WAWebRevokeMetricUtils").UiRevokeActionHelper.messageSelected());
        },
        f =
          (!o("WAWebMsgGetters").getIsNewsletterMsg(c) ||
            o("WAWebMsgActionCapability").canRevokeNewsletterMsg(c)) &&
          !o("WAWebBizCtwaAGMUtils").isAutomatedGreetingMessage(
            (t = c.ctwaContext) == null ? void 0 : t.sourceApp,
            c.type,
            (a = c.ctwaContext) == null
              ? void 0
              : a.automatedGreetingMessageShown,
            c.subtype,
          ),
        y = [];
      return (
        y.push(
          u.jsx(
            o("WAWebDropdownItem.react").DropdownItem,
            {
              testid: void 0,
              action: m,
              icon: u.jsx(
                o("WAWebCheckRefreshedIcon.react").CheckRefreshedIcon,
                {},
              ),
              children: s._(/*BTDS*/ "Select"),
            },
            "select",
          ),
        ),
        y.push(
          u.jsx(r("WAWebDropdownItemSeparator.react"), {}, "separator-select"),
        ),
        !o("WAWebMsgActionCapability").canDownloadMsg(
          c,
          c.mediaObject != null,
        ) &&
          l != null &&
          y.push(
            u.jsx(
              o("WAWebDropdownItem.react").DropdownItem,
              {
                testid: void 0,
                action: function () {
                  (o("WAWebExternalLink.react").openExternalLink(l.href),
                    o("WAWebMediaHubLogger").logMediaHubAction({
                      action: o("WAWebWamEnumActionCode").ACTION_CODE.OPEN,
                    }));
                },
                icon: u.jsx(r("WDSIconIcOpenInNew.react"), {}),
                children: s._(/*BTDS*/ "Open link in a new tab"),
              },
              "link",
            ),
          ),
        y.push(
          u.jsx(
            o("WAWebDropdownItem.react").DropdownItem,
            {
              testid: void 0,
              action: function () {
                (o("WAWebMediaHubMessageActionHandlers").goToMessageFromModal(
                  c,
                ),
                  o("WAWebMediaHubLogger").logMediaHubAction({
                    action: o("WAWebWamEnumActionCode").ACTION_CODE
                      .GO_TO_MESSAGE,
                  }));
              },
              icon: u.jsx(o("WAWebChatRefreshedIcon.react").ChatRefreshedIcon, {
                directional: !0,
              }),
              children: s._(/*BTDS*/ "Go to message"),
            },
            "go-to-msg",
          ),
        ),
        o("WAWebMsgReply").canReplyMsg(c) &&
          y.push(
            u.jsx(
              o("WAWebDropdownItem.react").DropdownItem,
              {
                testid: void 0,
                action: n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* () {
                    (o("WAWebMediaHubLogger").logMediaHubAction({
                      action: o("WAWebWamEnumActionCode").ACTION_CODE.REPLY,
                    }),
                      yield o(
                        "WAWebMediaHubMessageActionHandlers",
                      ).replyToMessageFromModal(c),
                      g(
                        c,
                        o("WAWebWamEnumMessageContextMenuOptionType")
                          .MESSAGE_CONTEXT_MENU_OPTION_TYPE.REPLY,
                      ));
                  },
                ),
                icon: u.jsx(
                  o("WAWebReplyRefreshedIcon.react").ReplyRefreshedIcon,
                  {},
                ),
                children: s._(/*BTDS*/ "Reply"),
              },
              "reply",
            ),
          ),
        o("WAWebMsgReply").canPrivateReply(c) &&
          y.push(
            u.jsx(
              o("WAWebDropdownItem.react").DropdownItem,
              {
                testid: void 0,
                action: n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* () {
                    (o("WAWebMediaHubLogger").logMediaHubAction({
                      action: o("WAWebWamEnumActionCode").ACTION_CODE.REPLY,
                    }),
                      yield o(
                        "WAWebMediaHubMessageActionHandlers",
                      ).replyPrivatelyToMessageFromModal(c),
                      g(
                        c,
                        o("WAWebWamEnumMessageContextMenuOptionType")
                          .MESSAGE_CONTEXT_MENU_OPTION_TYPE.REPLY_PRIVATELY,
                      ));
                  },
                ),
                icon: u.jsx(
                  o("WAWebReplyPrivatelyRefreshedIcon.react")
                    .ReplyPrivatelyRefreshedIcon,
                  {},
                ),
                children: s._(/*BTDS*/ "Reply privately"),
              },
              "reply-privately",
            ),
          ),
        !r("WAWebEnvironment").isWindows &&
          o("WAWebMsgActionCapability").canDownloadMsg(
            c,
            c.mediaObject != null,
          ) &&
          y.push(
            u.jsx(
              o("WAWebDropdownItem.react").DropdownItem,
              {
                testid: void 0,
                action: function () {
                  (o(
                    "WAWebMediaHubMessageActionHandlers",
                  ).handleMessageDownloadClick([c], d, "media_hub"),
                    g(
                      c,
                      o("WAWebWamEnumMessageContextMenuOptionType")
                        .MESSAGE_CONTEXT_MENU_OPTION_TYPE.UNKNOWN,
                    ),
                    o("WAWebMediaHubLogger").logMediaHubAction({
                      action: o("WAWebWamEnumActionCode").ACTION_CODE.DOWNLOAD,
                    }));
                },
                icon: u.jsx(r("WDSIconIcDownload.react"), {}),
                children: s._(/*BTDS*/ "Download"),
              },
              "download",
            ),
          ),
        o("WAWebCopyUtils").canCopyMessage(c) &&
          y.push(
            u.jsx(
              o("WAWebDropdownItem.react").DropdownItem,
              {
                testid: void 0,
                action: function () {
                  (o("WAWebCopyUtils").copyMessageToClipboard(c),
                    g(
                      c,
                      o("WAWebWamEnumMessageContextMenuOptionType")
                        .MESSAGE_CONTEXT_MENU_OPTION_TYPE.COPY,
                    ));
                },
                icon: u.jsx(
                  o("WAWebCopyRefreshedIcon.react").CopyRefreshedIcon,
                  {},
                ),
                children: s._(/*BTDS*/ "Copy"),
              },
              "copy",
            ),
          ),
        o("WAWebMsgActionCapability").canForwardMsg(c) &&
          y.push(
            u.jsx(
              o("WAWebDropdownItem.react").DropdownItem,
              {
                testid: void 0,
                action: function () {
                  (o("WAWebMediaHubMessageActionHandlers").handleForwardClick(
                    c,
                    r("WAWebNoop"),
                  ),
                    g(
                      c,
                      o("WAWebWamEnumMessageContextMenuOptionType")
                        .MESSAGE_CONTEXT_MENU_OPTION_TYPE.FORWARD,
                    ),
                    o("WAWebMediaHubLogger").logMediaHubAction({
                      action: o("WAWebWamEnumActionCode").ACTION_CODE.FORWARD,
                    }));
                },
                icon: u.jsx(
                  o("WAWebForwardRefreshedIcon.react").ForwardRefreshedIcon,
                  { directional: !0 },
                ),
                children: s._(/*BTDS*/ "Forward"),
              },
              "forward",
            ),
          ),
        o("WAWebKeepInChatMsgUtils").canShowUnkeepOption(c)
          ? y.push(
              u.jsx(
                o("WAWebDropdownItem.react").DropdownItem,
                {
                  testid: void 0,
                  action: function () {
                    (o("WAWebMediaHubMessageActionHandlers")
                      .handleUndoKeepClick(c)
                      .catch(r("WAWebNoop")),
                      g(
                        c,
                        o("WAWebWamEnumMessageContextMenuOptionType")
                          .MESSAGE_CONTEXT_MENU_OPTION_TYPE.UNKNOWN,
                      ));
                  },
                  icon: u.jsx(r("WDSIconWdsIcBookmarkSlash.react"), {}),
                  children: s._(/*BTDS*/ "Unkeep"),
                },
                "unkeep",
              ),
            )
          : !o("WAWebMsgGetters").getIsKept(c) &&
            o("WAWebKeepInChatMsgUtils").canShowKeepOption(c) &&
            y.push(
              u.jsx(
                o("WAWebDropdownItem.react").DropdownItem,
                {
                  testid: void 0,
                  action: function () {
                    (o("WAWebMediaHubMessageActionHandlers")
                      .handleKeepClick(c)
                      .catch(r("WAWebNoop")),
                      g(
                        c,
                        o("WAWebWamEnumMessageContextMenuOptionType")
                          .MESSAGE_CONTEXT_MENU_OPTION_TYPE.UNKNOWN,
                      ));
                  },
                  icon: u.jsx(r("WDSIconIcBookmark.react"), {}),
                  children: s._(/*BTDS*/ "Keep"),
                },
                "keep",
              ),
            ),
        o("WAWebMsgActionCapability").canStarMsg(c) &&
          (c.star
            ? y.push(
                u.jsx(
                  o("WAWebDropdownItem.react").DropdownItem,
                  {
                    testid: void 0,
                    action: function () {
                      (o(
                        "WAWebMediaHubMessageActionHandlers",
                      ).handleMessageUnstarClick(c),
                        g(
                          c,
                          o("WAWebWamEnumMessageContextMenuOptionType")
                            .MESSAGE_CONTEXT_MENU_OPTION_TYPE.STAR_OR_UNSTAR,
                        ),
                        o("WAWebMediaHubLogger").logMediaHubAction({
                          action: o("WAWebWamEnumActionCode").ACTION_CODE.STAR,
                        }));
                    },
                    icon: u.jsx(
                      o("WAWebUnstarRefreshedIcon.react").UnstarRefreshedIcon,
                      {},
                    ),
                    children: s._(/*BTDS*/ "Unstar"),
                  },
                  "star",
                ),
              )
            : o("WAWebMsgGetters").getIsKept(c) ||
              y.push(
                u.jsx(
                  o("WAWebDropdownItem.react").DropdownItem,
                  {
                    testid: void 0,
                    action: function () {
                      (o(
                        "WAWebMediaHubMessageActionHandlers",
                      ).handleMessageStarClick(c),
                        g(
                          c,
                          o("WAWebWamEnumMessageContextMenuOptionType")
                            .MESSAGE_CONTEXT_MENU_OPTION_TYPE.STAR_OR_UNSTAR,
                        ),
                        o("WAWebMediaHubLogger").logMediaHubAction({
                          action: o("WAWebWamEnumActionCode").ACTION_CODE.STAR,
                        }));
                    },
                    icon: u.jsx(
                      o("WAWebStarRefreshedIcon.react").StarRefreshedIcon,
                      {},
                    ),
                    children: s._(/*BTDS*/ "Star"),
                  },
                  "star",
                ),
              )),
        f &&
          (y.push(
            u.jsx(r("WAWebDropdownItemSeparator.react"), {}, "separator"),
          ),
          y.push(
            u.jsx(
              o("WAWebDropdownItem.react").DropdownItem,
              {
                testid: void 0,
                action: function () {
                  (_(),
                    g(
                      c,
                      o("WAWebWamEnumMessageContextMenuOptionType")
                        .MESSAGE_CONTEXT_MENU_OPTION_TYPE.DELETE,
                    ),
                    o("WAWebMediaHubLogger").logMediaHubAction({
                      action: o("WAWebWamEnumActionCode").ACTION_CODE.DELETE,
                    }));
                },
                icon: u.jsx(
                  o("WAWebDeleteRefreshedIcon.react").DeleteRefreshedIcon,
                  {},
                ),
                xstyle: h.delete,
                children: s._(/*BTDS*/ "Delete"),
              },
              "delete",
            ),
          )),
        u.jsx(u.Fragment, { children: y })
      );
    }
    ((y.displayName = y.name + " [from " + i.id + "]"),
      (l.WAWebMediaHubMessageDropdownMenu = f),
      (l.DropdownMenuItems = y));
  },
  226,
);
