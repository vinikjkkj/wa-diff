__d(
  "WAWebMessageGroupedSticker.react",
  [
    "fbt",
    "WALogger",
    "WAWebAuraGating",
    "WAWebCmd",
    "WAWebComposeBoxActions",
    "WAWebCopyStickerToClipboard",
    "WAWebCopyToClipboard",
    "WAWebDebugGatingUtils",
    "WAWebDropdown.react",
    "WAWebFavoriteStickerAction",
    "WAWebFindChatAction",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebFocusTracer",
    "WAWebFrontendMsgGetters",
    "WAWebInMemoryLottieStickerCache",
    "WAWebMediaInMemoryBlobCache",
    "WAWebMessageDebugMenuItems.react",
    "WAWebMessageMenu.react",
    "WAWebMessagePosition",
    "WAWebMessageStickerBubble.react",
    "WAWebMiscGatingUtils",
    "WAWebMsgActionCapability",
    "WAWebMsgGetters",
    "WAWebMsgReply",
    "WAWebReactionUserJourneyLogger",
    "WAWebReactionsPanel.react",
    "WAWebReactionsUtils",
    "WAWebReplyPrivatelyRefreshedIcon.react",
    "WAWebReplyToMsgChatAction",
    "WAWebRevokeMetricUtils",
    "WAWebRound.react",
    "WAWebSendReactionMsgAction",
    "WAWebSendReactionsTray.react",
    "WAWebSendReactionsTrayContainer.react",
    "WAWebStateUtils",
    "WAWebStickerUtils",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WAWebVelocityTransitionGroup",
    "WAWebWamEnumReactionUserJourneyEntryPoint",
    "WAWebWrapperListeners.react",
    "WDSIconIcContentCopy.react",
    "WDSIconIcDelete.react",
    "WDSIconIcFastForward.react",
    "WDSIconIcFavorite.react",
    "WDSIconIcFavoriteFilled.react",
    "WDSIconIcGrade.react",
    "WDSIconIcInfo.react",
    "WDSIconIcMood.react",
    "WDSIconIcReply.react",
    "WDSIconWdsIcChat.react",
    "WDSIconWdsIcGradeSlash.react",
    "WDSIconWdsIcSticker.react",
    "WDSMenu.react",
    "WDSMenuItem.react",
    "react",
    "useWAWebDebouncedCallback",
    "useWAWebMsgValues",
    "useWAWebStableCallback",
    "useWDSMenu",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = ["ref"],
      m,
      p = m || (m = o("react")),
      _ = m,
      f = _.useEffect,
      g = _.useImperativeHandle,
      h = _.useRef,
      y = _.useState,
      C = { reactIconRefreshed: { color: "xhslqc4", $$css: !0 } },
      b = { REACTION_BUTTON: 75 };
    function v(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, d),
        i = a.menuTransition,
        l = a.msg,
        m = a.onModalClosed,
        _ = a.onOpenDeleteFlow,
        v = a.onOpenForwardFlow,
        S = a.rowIsKeyboardFocused,
        R = S === void 0 ? !1 : S,
        L = h(null),
        E = h(),
        k = h(null),
        I = h(null),
        T = y(null),
        D = T[0],
        x = T[1],
        $ = y(!1),
        P = $[0],
        N = $[1],
        M = y(null),
        w = M[0],
        A = M[1],
        F = y(null),
        O = F[0],
        B = F[1],
        W = y(!1),
        q = W[0],
        U = W[1],
        V = h(null),
        H = h(!1),
        G = l.unsafe(),
        z = o("useWAWebMsgValues").useMsgValues(l.id, [
          o("WAWebFrontendMsgGetters").getAsRevoked,
        ]),
        j = z[0];
      j && o("WAWebCmd").Cmd.refreshMessages();
      var K = function (t) {
          V.current && r("WAWebFocusTracer").focus(V.current, t);
        },
        Q = r("useWAWebStableCallback")(function () {
          K({ preventScroll: !0 });
        }),
        X = r("useWAWebDebouncedCallback")(U, b.REACTION_BUTTON);
      f(
        function () {
          X(P || w != null || R);
        },
        [P, w, X, R],
      );
      var Y = function (t) {
          N(!0);
        },
        J = function () {
          N(!1);
        },
        Z = function () {
          X(P || w != null || R);
        },
        ee = function () {
          o("WAWebCmd").Cmd.msgInfoDrawer(o("WAWebStateUtils").unproxy(G));
        },
        te = function () {
          var e = o("WAWebStateUtils").unproxy(G),
            t = o("WAWebFrontendMsgGetters").getChat(e);
          ((t.composeQuotedMsg = e),
            o("WAWebComposeBoxActions").ComposeBoxActions.focus(t));
        },
        ne = function () {
          var t = o("WAWebStateUtils").unproxy(G);
          r("WAWebReplyToMsgChatAction")(t).catch(function () {
            return o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[private msg reply] failed to privately reply to msg",
                  ])),
              )
              .sendLogs("private-msg-reply-failed");
          });
        },
        re = function () {
          var e = o("WAWebStateUtils").unproxy(G);
          o("WAWebCmd").Cmd.sendStarMsgs(
            o("WAWebFrontendMsgGetters").getChat(e),
            [e],
          );
        },
        oe = function () {
          var e = o("WAWebStateUtils").unproxy(G);
          o("WAWebCmd").Cmd.sendUnstarMsgs(
            o("WAWebFrontendMsgGetters").getChat(e),
            [e],
          );
        },
        ae = function () {
          o("WAWebFavoriteStickerAction").addStickerMsgsToFavorites([
            o("WAWebStateUtils").unproxy(G),
          ]);
        },
        ie = function () {
          o("WAWebFavoriteStickerAction").removeStickerMsgFromFavorites(
            o("WAWebStateUtils").unproxy(G),
          );
        },
        le = function () {
          (_(!0, G),
            o("WAWebRevokeMetricUtils").UiRevokeActionHelper.startSession(),
            o("WAWebRevokeMetricUtils").UiRevokeActionHelper.messageSelected());
        },
        se = function () {
          o("WAWebFindChatAction")
            .findOrCreateLatestChat(l.author, "messageGroupedSticker")
            .then(function (e) {
              var t = e.chat;
              o("WAWebCmd")
                .Cmd.openChatFromUnread({ chat: t })
                .then(function (e) {
                  e && o("WAWebComposeBoxActions").ComposeBoxActions.focus(t);
                })
                .catch(function () {
                  return o("WALogger")
                    .ERROR(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "[contact chat] failed to open chat from unread",
                        ])),
                    )
                    .sendLogs("failed-to-open-chat-from-unread");
                });
            })
            .catch(function () {
              return o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[contact chat] failed to find or create latest chat",
                    ])),
                )
                .sendLogs("failed-to-find-or-create-latest-chat");
            });
        },
        ue = function () {
          (m == null || m(),
            A(null),
            Q(),
            H.current ||
              o(
                "WAWebReactionUserJourneyLogger",
              ).ReactionUserJourneyLogger.trayClose());
        },
        ce = function () {
          (m == null || m(),
            B(null),
            Q(),
            o(
              "WAWebReactionUserJourneyLogger",
            ).ReactionUserJourneyLogger.trayClose(),
            (H.current = !1));
        },
        de = r("useWAWebStableCallback")(function (e) {
          if (o("WAWebReactionsUtils").canReactToMessage(e)) {
            var t = function (n) {
              (o("WAWebSendReactionMsgAction")
                .sendReactionToMsg(e, n)
                .then(function () {
                  o(
                    "WAWebReactionUserJourneyLogger",
                  ).ReactionUserJourneyLogger.reactionSelect(n);
                })
                .catch(function (e) {}),
                ce());
            };
            B({
              dirY: o("WAWebDropdown.react").DirY.BOTTOM,
              dirX: o("WAWebMsgGetters").getIsSentByMe(e)
                ? o("WAWebDropdown.react").DirX.LEFT
                : o("WAWebDropdown.react").DirX.RIGHT,
              type: o("WAWebDropdown.react").MenuType.ReactionPicker,
              menu: p.jsx(r("WAWebReactionsPanel.react"), {
                msgId: e.id.toString(),
                onSelection: t,
              }),
              flipOnRTL: !0,
              anchor: E.current,
            });
          }
        }),
        me = function (t, n) {
          if (o("WAWebReactionsUtils").canReactToMessage(t)) {
            var e = function (n) {
                ((H.current =
                  n === o("WAWebSendReactionsTray.react").MORE_REACTIONS),
                  n !== o("WAWebSendReactionsTray.react").MORE_REACTIONS
                    ? o("WAWebSendReactionMsgAction")
                        .sendReactionToMsg(t, n)
                        .then(function () {
                          o(
                            "WAWebReactionUserJourneyLogger",
                          ).ReactionUserJourneyLogger.reactionSelect(n);
                        })
                        .catch(function (e) {})
                    : self.setTimeout(function () {
                        de(t);
                      }, 150),
                  ue());
              },
              r = {
                dirY: o("WAWebDropdown.react").DirY.TOP,
                dirX: o("WAWebDropdown.react").DirX.CENTER,
                type: o("WAWebDropdown.react").MenuType.ReactionSendTray,
                menu: p.jsx(
                  o("WAWebSendReactionsTrayContainer.react")
                    .SendReactionsTrayContainer,
                  {
                    msg: G,
                    selectedCallback: e,
                    onMouseEnter: Y,
                    onMouseOver: Y,
                    onMouseLeave: J,
                    userJourneyEntryPoint: n,
                  },
                ),
                flipOnRTL: !1,
                anchor: E.current,
              };
            A(r);
          }
        },
        pe = function () {
          (m == null || m(), x(null));
        },
        _e = p.jsx(r("WDSMenu.react"), {
          useMaxWidth: !1,
          children: (function (e, t, n) {
            var a = [],
              i = o("WAWebStateUtils").unproxy(l);
            if (
              (o("WAWebMsgGetters").getIsSentByMe(i) &&
                !o("WAWebFrontendMsgGetters").getAsRevoked(i.unsafe()) &&
                a.push(
                  p.jsx(
                    r("WDSMenuItem.react"),
                    {
                      Icon: r("WDSIconIcInfo.react"),
                      title: s._(/*BTDS*/ "Message info"),
                      onPress: ee,
                      testid: void 0,
                    },
                    "info",
                  ),
                ),
              o("WAWebMsgReply").canReplyMsg(i.unsafe()) &&
                a.push(
                  p.jsx(
                    r("WDSMenuItem.react"),
                    {
                      Icon: r("WDSIconIcReply.react"),
                      title: s._(/*BTDS*/ "Reply"),
                      onPress: te,
                      testid: void 0,
                    },
                    "reply",
                  ),
                ),
              (o("WAWebMsgReply").canPrivateReply(i.unsafe()) ||
                o("WAWebMsgReply").canPrivateReplyInRestrictedGrp(
                  i.unsafe(),
                )) &&
                a.push(
                  p.jsx(
                    r("WDSMenuItem.react"),
                    {
                      Icon: o("WAWebReplyPrivatelyRefreshedIcon.react")
                        .ReplyPrivatelyRefreshedIcon,
                      title: s._(/*BTDS*/ "Reply privately"),
                      onPress: ne,
                      testid: void 0,
                    },
                    "private_reply",
                  ),
                ),
              o("WAWebMsgGetters").getIsGroupMsg(l) &&
                l.author &&
                !o("WAWebMsgGetters").getIsSentByMe(l) &&
                a.push(
                  p.jsx(
                    r("WDSMenuItem.react"),
                    {
                      Icon: r("WDSIconWdsIcChat.react"),
                      title: s._(/*BTDS*/ "Message {author}", [
                        s._param("author", l.displayName()),
                      ]),
                      onPress: se,
                      testid: void 0,
                      truncateText: !0,
                    },
                    "author",
                  ),
                ),
              o("WAWebReactionsUtils").canReactToMessage(G) &&
                a.push(
                  p.jsx(
                    r("WDSMenuItem.react"),
                    {
                      Icon: r("WDSIconIcMood.react"),
                      title: s._(/*BTDS*/ "React"),
                      onPress: function () {
                        me(
                          G,
                          o("WAWebWamEnumReactionUserJourneyEntryPoint")
                            .REACTION_USER_JOURNEY_ENTRY_POINT
                            .MACOS_MESSAGE_MENU_ITEM_REACTION,
                        );
                      },
                      testid: void 0,
                    },
                    "sendReaction",
                  ),
                ),
              o("WAWebMsgActionCapability").canForwardMsg(i.unsafe()) &&
                a.push(
                  p.jsx(
                    r("WDSMenuItem.react"),
                    {
                      Icon: r("WDSIconIcFastForward.react"),
                      iconDirectional: !0,
                      title: s._(
                        /*BTDS*/ '_j{"*":"Forward messages","_1":"Forward"}',
                        [s._plural(1)],
                      ),
                      onPress: function () {
                        v(!0, G);
                      },
                      testid: void 0,
                    },
                    "forward",
                  ),
                ),
              o("WAWebMsgActionCapability").canStarMsg(i.unsafe()) &&
                (i.star
                  ? a.push(
                      p.jsx(
                        r("WDSMenuItem.react"),
                        {
                          Icon: r("WDSIconWdsIcGradeSlash.react"),
                          title: s._(
                            /*BTDS*/ '_j{"*":"Unstar messages","_1":"Unstar message"}',
                            [s._plural(1)],
                          ),
                          onPress: oe,
                          testid: void 0,
                        },
                        "star",
                      ),
                    )
                  : a.push(
                      p.jsx(
                        r("WDSMenuItem.react"),
                        {
                          Icon: r("WDSIconIcGrade.react"),
                          title: s._(/*BTDS*/ '_j{"*":"Star"}', [s._plural(1)]),
                          onPress: re,
                          testid: void 0,
                        },
                        "star",
                      ),
                    )),
              o("WAWebMiscGatingUtils").isFavoriteStickersEnabled())
            ) {
              var u;
              o("WAWebFavoriteStickerAction").isStickerFilehashFavorited(
                l.filehash,
              )
                ? a.push(
                    p.jsx(
                      r("WDSMenuItem.react"),
                      {
                        Icon: r("WDSIconIcFavoriteFilled.react"),
                        title: s._(/*BTDS*/ "Remove from Favorites"),
                        onPress: ie,
                        testid: void 0,
                      },
                      "remove-favorite-sticker",
                    ),
                  )
                : r("WAWebAuraGating").canUsePremiumSticker(
                    G.stickerPremiumStatus,
                  ) &&
                  r("WAWebAuraGating").canUsePremiumSticker(
                    (u = G.mediaData) == null ? void 0 : u.stickerPremiumStatus,
                  ) &&
                  a.push(
                    p.jsx(
                      r("WDSMenuItem.react"),
                      {
                        Icon: r("WDSIconIcFavorite.react"),
                        title: s._(/*BTDS*/ "Add to favorites"),
                        onPress: ae,
                        testid: void 0,
                      },
                      "favorite-sticker",
                    ),
                  );
            }
            var c = s._(/*BTDS*/ "Copy sticker image"),
              d = o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(
                l.filehash,
              );
            if (
              o("WAWebStickerUtils").getStickerFileType(
                (e = l.mediaData) == null ? void 0 : e.mimetype,
              ) === o("WAWebStickerUtils").StickerFileType.LOTTIE
            ) {
              var m = o(
                "WAWebInMemoryLottieStickerCache",
              ).InMemoryLottieStickerCache.get(l.filehash);
              m != null &&
                o("WAWebCopyToClipboard").supportsCopyImageToClipboard() &&
                a.push(
                  p.jsx(
                    r("WDSMenuItem.react"),
                    {
                      Icon: r("WDSIconIcContentCopy.react"),
                      title: c,
                      onPress: function () {
                        o(
                          "WAWebCopyStickerToClipboard",
                        ).copyLottieStickerToClipboard(m);
                      },
                      testid: void 0,
                    },
                    "copy-favorite-sticker",
                  ),
                );
            } else
              d != null &&
                o("WAWebCopyToClipboard").supportsCopyImageToClipboard() &&
                a.push(
                  p.jsx(
                    r("WDSMenuItem.react"),
                    {
                      Icon: r("WDSIconIcContentCopy.react"),
                      title: c,
                      onPress: function () {
                        o("WAWebCopyToClipboard").copyImageToClipboard(d);
                      },
                      testid: void 0,
                    },
                    "copy-favorite-sticker",
                  ),
                );
            var _ = (t = l.mediaData) == null ? void 0 : t.isFirstParty,
              f = (n = l.mediaData) == null ? void 0 : n.stickerPackId;
            return (
              f != null &&
                _ === !0 &&
                a.push(
                  p.jsx(
                    r("WDSMenuItem.react"),
                    {
                      Icon: r("WDSIconWdsIcSticker.react"),
                      title: s._(/*BTDS*/ "View pack"),
                      onPress: function () {
                        return o("WAWebCmd").Cmd.openStickerPack(f);
                      },
                      testid: void 0,
                    },
                    "open-sticker-pack",
                  ),
                ),
              a.push(
                p.jsx(
                  r("WDSMenuItem.react"),
                  { type: "separator" },
                  "separator",
                ),
              ),
              a.push(
                p.jsx(
                  r("WDSMenuItem.react"),
                  {
                    Icon: r("WDSIconIcDelete.react"),
                    title: s._(/*BTDS*/ '_j{"*":"Delete"}', [s._plural(1)]),
                    onPress: le,
                    testid: void 0,
                    destructive: !0,
                  },
                  "delete",
                ),
              ),
              o("WAWebDebugGatingUtils").msgDebugMenuItemsEnabled() &&
                (a.push(
                  p.jsx(
                    r("WDSMenuItem.react"),
                    { type: "separator" },
                    "debug-separator",
                  ),
                ),
                a.push.apply(
                  a,
                  o(
                    "WAWebMessageDebugMenuItems.react",
                  ).getWAWebMessageDebugMenuItems(G),
                )),
              a
            );
          })(),
        }),
        fe = r("useWDSMenu")({
          targetRef: I,
          menu: _e,
          enableUIM: !0,
          onClose: pe,
        }),
        ge = fe.menuPortal,
        he = fe.openMenu,
        ye = function () {
          he();
        },
        Ce = function (t, n) {
          a.scrollMsg(t, n);
        },
        be = { scrollMsg: Ce };
      g(n, function () {
        return { scrollMsg: Ce };
      });
      var ve;
      (P || D || R) &&
        (ve = p.jsx(
          r("WAWebMessageMenu.react"),
          {
            msg: G,
            hasAuthor: !1,
            displayType: a.displayType,
            position: o("WAWebMessagePosition").MsgPosition.SINGLE,
            ref: L,
            onToggle: function (t) {
              ye();
            },
            isGroupedSticker: !0,
            role: "button",
            ariaLabel: s._(/*BTDS*/ "Context menu"),
            isMenuOpen: !!D,
            tabIndex: 0,
            contextOwnerIsKeyboardFocused: R,
          },
          "icon-context",
        ));
      var Se;
      a.isFocused === !0 &&
        (Se = p.jsx(o("WAWebWrapperListeners.react").WhileFocusedListener, {
          parent: be,
        }));
      var Re;
      w
        ? (Re = p.jsx(o("WAWebUimUie.react").UIE, {
            displayName: "MsgReaction",
            escapable: !0,
            popable: !0,
            dismissOnWindowResize: !0,
            requestDismiss: ue,
            children: p.jsx(r("WAWebUimUieMenu.react"), { contextMenu: w }),
          }))
        : O &&
          (Re = p.jsx(o("WAWebUimUie.react").UIE, {
            displayName: "MsgReactionPicker",
            escapable: !0,
            popable: !0,
            dismissOnWindowResize: !0,
            requestDismiss: ce,
            children: p.jsx(r("WAWebUimUieMenu.react"), { contextMenu: O }),
          }));
      var Le = p.jsx(
          r("WAWebMessageStickerBubble.react"),
          {
            mediaData: l.mediaData,
            msg: l,
            displayAuthor: !1,
            forwardRef: a.forwardRef,
            animateOnView: !0,
            displayType: a.displayType,
            onDetailsPaneClosed: m,
            isGroupedSticker: !0,
          },
          "sticker-bubble",
        ),
        Ee = function () {
          w
            ? ue()
            : me(
                G,
                o("WAWebWamEnumReactionUserJourneyEntryPoint")
                  .REACTION_USER_JOURNEY_ENTRY_POINT
                  .MACOS_MESSAGE_REACTION_BUTTON,
              );
        },
        ke = [Le];
      if (o("WAWebReactionsUtils").canReactToMessage(G)) {
        var Ie = null;
        q &&
          (Ie = p.jsx(r("WAWebFlexItem.react"), {
            children: p.jsx(o("WAWebRound.react").Round, {
              testid: void 0,
              label: s._(/*BTDS*/ "React"),
              theme: o("WAWebRound.react").RoundTheme.QuickActionRefreshed,
              onClick: function () {
                return Ee(G);
              },
              small: !0,
              children: p.jsx(r("WDSIconIcMood.react"), {
                xstyle: C.reactIconRefreshed,
                height: 20,
              }),
            }),
          }));
        var Te = p.jsx(
          "div",
          { ref: E, className: "x1n2onr6 xzi7r1p xezl2tj", children: Ie },
          "reaction-entry-point",
        );
        o("WAWebMsgGetters").getIsSentByMe(l) ? ke.unshift(Te) : ke.push(Te);
      }
      return p.jsxs("div", {
        className: "x78zum5",
        onMouseEnter: Y,
        onFocus: Z,
        onBlur: Z,
        ref: V,
        onMouseLeave: J,
        children: [
          p.jsx(o("WAWebFlex.react").FlexRow, { children: ke }),
          p.jsxs("div", {
            className: "x1n2onr6 xe2zdcy",
            ref: k,
            children: [
              p.jsx(r("WAWebVelocityTransitionGroup"), {
                transitionName: i,
                children: ve,
              }),
              p.jsx("div", { ref: I }),
            ],
          }),
          ge,
          Re,
          Se,
        ],
      });
    }
    ((v.displayName = v.name + " [from " + i.id + "]"), (l.default = v));
  },
  226,
);
