__d(
  "WAWebCmd",
  [
    "$InternalEnum",
    "JSResourceForInteraction",
    "Promise",
    "WAAbortError",
    "WALogger",
    "WAPromiseDelays",
    "WAWebAppTracker",
    "WAWebBoolFunc",
    "WAWebBotGating",
    "WAWebBotUtils",
    "WAWebChatEntryPoint",
    "WAWebComposeBoxActions",
    "WAWebCurrentUser",
    "WAWebDocumentFlushed",
    "WAWebDrawerManagerGlobalContext",
    "WAWebEventEmitter",
    "WAWebPageLoadLogging",
    "WAWebStateUtils",
    "WAWebThreadModelResolver",
    "WAWebThreadMsgUtils",
    "WAWebUiIdleEventBus",
    "WAWebWamMemoryStat",
    "asyncToGeneratorRuntime",
    "err",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y = 1300,
      C = n("$InternalEnum").Mirrored(["Sender", "Admin"]),
      b = 400,
      v = (function (t) {
        function a() {
          var e;
          return (
            (e = t.call(this) || this),
            (e.isMainStreamReadyMd = !1),
            (e.isOfflineDeliveryEnd = !1),
            o(
              "WAWebUiIdleEventBus",
            ).UiIdleEventBus.setDeferUntilDocumentFlushed(S),
            e
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.muteAllReactions = function (t, n, r) {
            this.trigger("mute_all_reactions", t, n, r);
          }),
          (i.muteChat = function (t, n, r, a) {
            this.trigger("mute_chat", o("WAWebStateUtils").unproxy(t), n, r, a);
          }),
          (i.muteChatMultiselect = function (t, n, r) {
            this.trigger("mute_chat_multiselect", t, n, r);
          }),
          (i.muteChatWithDuration = function (t, n) {
            this.trigger(
              "mute_chat_with_duration",
              o("WAWebStateUtils").unproxy(t),
              n,
            );
          }),
          (i.muteChatFromEntryPoint = function (t, n, r, a) {
            this.trigger(
              "mute_chat_from_entrypoint",
              o("WAWebStateUtils").unproxy(t),
              n,
              r,
              a,
            );
          }),
          (i.assignChat = function (t, n) {
            this.trigger("assign_chat", o("WAWebStateUtils").unproxy(t), n);
          }),
          (i.deleteOrExitChat = function (t, n) {
            this.trigger(
              "delete_or_exit_chat",
              o("WAWebStateUtils").unproxy(t),
              n,
            );
          }),
          (i.deleteOrExitChatFromEntryPoint = function (t, n, r) {
            this.trigger(
              "delete_or_exit_chat_from_entrypoint",
              o("WAWebStateUtils").unproxy(t),
              n,
              r,
            );
          }),
          (i.clearChat = function (t, n) {
            this.trigger("clear_chat", o("WAWebStateUtils").unproxy(t), n);
          }),
          (i.clearSelectedChats = function (t, n) {
            this.trigger(
              "clear_selected_chats",
              t.map(function (e) {
                return o("WAWebStateUtils").unproxy(e);
              }),
              n,
            );
          }),
          (i.archiveChat = function (t, n, r) {
            (r === void 0 && (r = !0),
              this.trigger("archive_chat", {
                archive: n,
                chat: o("WAWebStateUtils").unproxy(t),
                showToast: r,
              }));
          }),
          (i.archiveChatFromEntryPoint = function (t, n, r, a) {
            (a === void 0 && (a = !0),
              this.trigger(
                "archive_chat_from_entrypoint",
                o("WAWebStateUtils").unproxy(t),
                n,
                r,
                a,
              ));
          }),
          (i.pinChat = function (t, n) {
            this.trigger("pin_chat", o("WAWebStateUtils").unproxy(t), n);
          }),
          (i.favoriteChat = function (t, n, r) {
            this.trigger(
              "favorite_chat",
              o("WAWebStateUtils").unproxy(t),
              n,
              r,
            );
          }),
          (i.markChatUnread = function (t, n) {
            this.trigger(
              "mark_chat_unread",
              o("WAWebStateUtils").unproxy(t),
              n,
            );
          }),
          (i.msgInfoDrawer = function (t) {
            this.trigger("msg_info_drawer", o("WAWebStateUtils").unproxy(t));
          }),
          (i.chatSearch = function (t) {
            this.trigger("chat_search", o("WAWebStateUtils").unproxy(t));
          }),
          (i.scrollChatHeight = function (t) {
            this.trigger("scroll_chat_by_height", t);
          }),
          (i.ctwaAdPreviewDrawer = function (t, n, r) {
            this.trigger(
              "ctwa_ad_preview_drawer",
              o("WAWebStateUtils").unproxy(t),
              n,
              r,
            );
          }),
          (i.galaxyFlowDrawer = function (t) {
            var e = t.chat,
              n = t.messageData,
              r = t.msg,
              o = t.onClose;
            this.trigger("galaxy_flows_drawer", e, n, r, o);
          }),
          (i.chatInfoDrawer = function (t, n) {
            this.trigger(
              "chat_info_drawer",
              o("WAWebStateUtils").unproxy(t),
              n == null ? void 0 : n.showFullGroupDescription,
              n == null ? void 0 : n.scrollToParticipantList,
              n == null ? void 0 : n.sourceGroupChatOrNewsletter,
              n == null ? void 0 : n.focusNewsletterDescriptionOnMount,
              n == null ? void 0 : n.focusGroupSubjectOnMount,
              n == null ? void 0 : n.focusGroupDescriptionOnMount,
              n == null ? void 0 : n.threadId,
            );
          }),
          (i.newsletterDeleteDrawer = function (t) {
            this.trigger(
              "delete_newsletter_drawer",
              o("WAWebStateUtils").unproxy(t),
            );
          }),
          (i.openCurrentChatInfo = function () {
            this.trigger("open_current_chat_info");
          }),
          (i.blockCurrentChat = function () {
            this.trigger("block_current_chat");
          }),
          (i.clearCurrentChatConversationHistory = function () {
            this.trigger("clear_current_chat_conversation_history");
          }),
          (i.exitCurrentGroup = function () {
            this.trigger("exit_current_group");
          }),
          (i.replyCurrentMessageKeyboardShortcut = function () {
            this.trigger("reply_current_message_keyboard_shortcut");
          }),
          (i.replyCurrentMessagePrivate = function () {
            this.trigger("reply_current_message_private");
          }),
          (i.forwardCurrentMessage = function () {
            this.trigger("forward_current_message");
          }),
          (i.starCurrentMessage = function () {
            this.trigger("star_current_message");
          }),
          (i.startPttRecording = function () {
            this.trigger("start_ptt_recording");
          }),
          (i.pausePttRecording = function () {
            this.trigger("pause_ptt_recording");
          }),
          (i.sendPttRecording = function () {
            R.trigger("send_ptt_recording");
          }),
          (i.editGroupDescription = function () {
            this.trigger("edit_group_description");
          }),
          (i.attachMediaDrawer = function (t) {
            var e = this,
              a = o("WAWebStateUtils").unproxy(t.chat);
            if (
              !(
                a.id.isBot() &&
                !o("WAWebBotUtils").isBotChannelFBID(a.id) &&
                (!o("WAWebBotUtils").isMetaAiBot(a.id) ||
                  !(
                    o("WAWebBotGating").isMetaAiImageInputEnabled() ||
                    o("WAWebBotGating").isMetaAiDocUploadEnabled()
                  ))
              )
            ) {
              if (o("WAWebBotUtils").isMetaAiBot(a.id)) {
                var i = t.attachments;
                if (i != null) {
                  (h || (h = n("Promise"))).all(i).then(
                    (function () {
                      var o = n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* (o) {
                          var i = yield r("JSResourceForInteraction")(
                              "WAWebBotMultiModalUtils",
                            )
                              .__setRef("WAWebCmd")
                              .load(),
                            l = i.getSupportedMetaAiAttachments,
                            s = i.hasMetaAiMixedMediaTypes,
                            u = i.maybeShowUnsupportedFileToast;
                          if (
                            s(
                              o.map(function (e) {
                                return e.file;
                              }),
                            )
                          ) {
                            var c = yield r("JSResourceForInteraction")(
                                "WAWebBotMultiModalToasts",
                              )
                                .__setRef("WAWebCmd")
                                .load(),
                              d = c.showMixedMediaTypeToast;
                            d();
                            return;
                          }
                          var m = l(o);
                          if ((u(m.length, o.length), m.length !== 0)) {
                            var p = yield (h || (h = n("Promise"))).all([
                                r("JSResourceForInteraction")("WAWebFileUtils")
                                  .__setRef("WAWebCmd")
                                  .load(),
                                r("JSResourceForInteraction")(
                                  "WAWebMediaGatingUtils",
                                )
                                  .__setRef("WAWebCmd")
                                  .load(),
                              ]),
                              _ = p[0].typeFromMimetype,
                              f = p[1].getMaxNumberSelectableMedia,
                              g = _(m[0].file.type),
                              y = f(m.length, a.id, g),
                              C = m;
                            if (m.length > y) {
                              var b = yield r("JSResourceForInteraction")(
                                  "WAWebBotMultiModalToasts",
                                )
                                  .__setRef("WAWebCmd")
                                  .load(),
                                v = b.showDocumentUploadLimitExceededToast,
                                S = b.showImageSendLimitExceededToast;
                              (g === "image" ? S(y) : g === "document" && v(y),
                                (C = m.slice(0, y)));
                            }
                            e.$CmdImpl$p_1(
                              babelHelpers.extends({}, t, {
                                attachments: C.map(function (e) {
                                  return e;
                                }),
                              }),
                              a,
                            );
                          }
                        },
                      );
                      return function (e) {
                        return o.apply(this, arguments);
                      };
                    })(),
                  );
                  return;
                }
              }
              this.$CmdImpl$p_1(t, a);
            }
          }),
          (i.$CmdImpl$p_1 = function (t, n) {
            var e = function (r) {
                (r.length > 0 &&
                  o("WAWebComposeBoxActions").ComposeBoxActions.setTextContent(
                    n,
                    r.join("\n\n"),
                  ),
                  t.onCancel == null || t.onCancel());
              },
              r = babelHelpers.extends({}, t, { chat: n, onCancel: e });
            this.trigger("attach_media_drawer", r);
          }),
          (i.attachProduct = function (t) {
            this.trigger("attach_product", t);
          }),
          (i.verificationDrawer = function (t) {
            this.trigger("verification_drawer", t);
          }),
          (i.mediaViewerModal = function (t) {
            var e = t.currentTime,
              n = t.getZoomNode,
              r = t.highlightedMsgIds,
              o = t.msg,
              a = t.shouldShowAllMedia,
              i = t.shouldShowNumberText;
            this.trigger("media_viewer_modal", {
              msg: o,
              getZoomNode: n,
              currentTime: e,
              highlightedMsgIds: r,
              shouldShowNumberText: i,
              shouldShowAllMedia: a,
            });
          }),
          (i.openMediaViewerForAlbumMedia = function (t) {
            this.trigger("open_media_viewer_for_album_media", t);
          }),
          (i.productImageViewerModal = function (t, n) {
            this.trigger("product_image_viewer_modal", t, n);
          }),
          (i.ephemeralDrawer = function (t, n, r) {
            this.trigger("ephemeral_drawer", t, n, r);
          }),
          (i.chatThemeDrawer = function (t) {
            this.trigger("chat_theme_drawer", o("WAWebStateUtils").unproxy(t));
          }),
          (i.openCommunityHome = function (t, n) {
            this.trigger("open_community_home", t, n);
          }),
          (i.openCommunityTabbedInfo = function (t, n, r, o) {
            this.trigger("open_community_tabbed_info", t, n, r, o);
          }),
          (i.openCommunityPendingGroupsDrawer = function (t) {
            this.trigger("open_community_pending_groups_drawer", t);
          }),
          (i.openCommunityHomeManageGroups = function (t) {
            this.trigger("open_community_home_manage_groups", t);
          }),
          (i.openCommunitySettingsDrawer = function (t) {
            this.trigger("open_community_settings_drawer", t);
          }),
          (i.openMetaAiThreadDrawer = function (t, n) {
            this.trigger("open_meta_ai_thread_drawer", t, n);
          }),
          (i.updateAiThreadlistSelection = function () {
            this.trigger("update_ai_thread_list_selection");
          }),
          (i.openCommunitySubgroupJoinModal = function (t, n) {
            this.trigger("open_subgroup_join_modal", t, n);
          }),
          (i.openProfile = function (t) {
            this.trigger("open_profile", t);
          }),
          (i.communityAddNewGroup = function (t, n, r) {
            this.trigger("open_community_add_new_group", t, n, r);
          }),
          (i.openCreatedNewsletter = function (t) {
            this.trigger("open_created_newsletter", t);
          }),
          (i.openNewsletterProfile = function (t, n) {
            this.trigger("open_newsletter_profile", t, n);
          }),
          (i.newsletterMuteToggle = function (t, n, r) {
            this.trigger("newsletter:mute_toggle", t, n, r);
          }),
          (i.editNewsletterDescription = function () {
            this.trigger("edit_newsletter_description");
          }),
          (i.openEventInfoDrawer = function (t, n, r, o) {
            this.trigger("open_event_info_drawer", t, n, r, o);
          }),
          (i.sendStarMsgs = function (t, n, r, a) {
            this.trigger(
              "send_star_msgs",
              o("WAWebStateUtils").unproxy(t),
              n,
              r,
              a,
            );
          }),
          (i.sendUnstarMsgs = function (t, n, r, a) {
            this.trigger(
              "send_unstar_msgs",
              o("WAWebStateUtils").unproxy(t),
              n,
              r,
              a,
            );
          }),
          (i.sendDeleteMsgs = function (t, n, r, a, i, l) {
            this.trigger(
              "send_delete_msgs",
              o("WAWebStateUtils").unproxy(t),
              n,
              r,
              a,
              i,
              l,
            );
          }),
          (i.sendRevokeMsgs = function (t, n, r) {
            this.trigger(
              "send_revoke_msgs",
              o("WAWebStateUtils").unproxy(t),
              n,
              r,
            );
          }),
          (i.$CmdImpl$p_2 = function (r) {
            var t = this,
              a = r.chat,
              i = r.msgContext,
              l = r.chatEntryPoint,
              s =
                l === void 0
                  ? o("WAWebChatEntryPoint").ChatEntryPoint.Unknown
                  : l,
              u = r.threadId;
            return (
              (a.chatEntryPoint = s),
              o("WAWebWamMemoryStat").uploadMemoryIfChatWasOpened(a.id),
              new (h || (h = n("Promise")))(function (e) {
                t.trigger("open_chat", {
                  chat: a,
                  msgContext: i,
                  chatEntryPoint: s,
                  threadId: u,
                  onComplete: (function () {
                    var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (t) {
                        var n,
                          r = o(
                            "WAWebDrawerManagerGlobalContext",
                          ).getGlobalDrawerManager("right"),
                          a =
                            (n = r == null ? void 0 : r.existsDrawer()) != null
                              ? n
                              : !1;
                        (a &&
                          window.matchMedia("(max-width: " + y + "px)")
                            .matches &&
                          (r == null || r.closeDrawer()),
                          e(t));
                      },
                    );
                    function r(e) {
                      return t.apply(this, arguments);
                    }
                    return r;
                  })(),
                });
              }).catch(function (t) {
                throw (
                  o("WALogger").LOG(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Unexpected openChat error: ",
                        "",
                      ])),
                    String(t),
                  ),
                  t
                );
              })
            );
          }),
          (i.openChatAt = function (t) {
            var e = this,
              r = t.chat,
              a = t.chatEntryPoint,
              i = t.msgContext,
              l = t.noFocus,
              s = t.onSuccess,
              u = t.threadId,
              c = o("WAWebStateUtils").unproxy(r);
            if (!i) return this.openChatBottom({ chat: c, chatEntryPoint: a });
            o("WAWebUiIdleEventBus").UiIdleEventBus.setUiBusy(!0);
            var d = this.$CmdImpl$p_2({
              chat: c,
              msgContext: i,
              chatEntryPoint: a,
              threadId: u,
            })
              .then(
                (function () {
                  var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (t) {
                      var r,
                        o,
                        a = i.enableAnimation != null ? i.enableAnimation : !0;
                      if (t)
                        if (t.wasVisible)
                          ((r = function () {
                            return e.$CmdImpl$p_3({
                              pos: "offset",
                              offset: t.offset,
                            });
                          }),
                            (o = function () {
                              return e.$CmdImpl$p_3({
                                pos: "center",
                                animate: a,
                                duration: b,
                                easing: [0.7, 0, 0.3, 1],
                              });
                            }));
                        else
                          switch (
                            ((r = function () {
                              return e.$CmdImpl$p_3({
                                pos: t.alignAt,
                                scrollIfNeeded: !0,
                              });
                            }),
                            t.alignAt)
                          ) {
                            case "top":
                            case "bottom":
                              o = function () {
                                return e.$CmdImpl$p_3({
                                  pos: "center",
                                  animate: a,
                                  duration: b,
                                  easing: [0.88, 0.64, 0.13, 0.99],
                                });
                              };
                              break;
                            case "center":
                            default:
                              o = function () {
                                return (h || (h = n("Promise"))).resolve();
                              };
                          }
                      else
                        ((r = function () {
                          return e.$CmdImpl$p_3({ pos: "center" });
                        }),
                          (o = function () {
                            return (h || (h = n("Promise"))).resolve();
                          }));
                      return (yield r(), o());
                    },
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              )
              .then(function () {
                var t;
                if (
                  (i == null || (t = i.msg) == null
                    ? void 0
                    : t.botPluginReferenceIndex) != null
                ) {
                  var n,
                    r =
                      i == null || (n = i.msg) == null
                        ? void 0
                        : n.botResponseTargetId;
                  r != null && e.botTogglePluginSearchDetailsToggle(r, !0);
                }
                (i == null ? void 0 : i.highlightMsg) === !0 &&
                  e.flashFocusedMsg(i.highlightMentionMsg, l);
              })
              .then(function () {
                if (s) {
                  var e = s.mediaMsgToOpenInMediaViewer,
                    t = s.onScrollToQuotedCarouselCard;
                  e &&
                    o("WAPromiseDelays")
                      .delayMs(500)
                      .then(function () {
                        (R.openMediaViewerForAlbumMedia(
                          o("WAWebStateUtils").unproxy(e),
                        ),
                          t == null || t());
                      });
                }
                return !0;
              })
              .then(function (t) {
                return (e.$CmdImpl$p_4(i), t);
              })
              .catch(
                o("WAAbortError").catchAbort(o("WAWebBoolFunc").returnFalse),
              );
            return (
              d.finally(function () {
                o("WAWebUiIdleEventBus").UiIdleEventBus.setUiBusy(!1);
              }),
              d
            );
          }),
          (i.openChatFromUnread = function (t) {
            var e = this,
              a = t.chat,
              i = t.chatEntryPoint,
              l = t.threadId,
              u = o("WAWebStateUtils").unproxy(a);
            if (!r("gkx")("26258")) {
              window.chat = u;
              var c =
                (u.unreadMsgAnchor && u.unreadMsgAnchor.id.toString()) ||
                "No unreadMsgAnchor found";
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "openChatFromUnread anchor=",
                    " unread=",
                    "",
                  ])),
                c,
                u.unreadCount,
              );
            }
            var d,
              m = o("WAWebThreadModelResolver").resolveThreadOrChat(u, l);
            if (
              (m.unreadMsgAnchor &&
                (d = {
                  collection: m.unreadMsgAnchor.getMsgChunk(
                    m !== u ? l : void 0,
                  ),
                  promise: (h || (h = n("Promise"))).resolve(),
                  msg: m.unreadMsgAnchor,
                  isUnreadDivider: u.shouldShowUnreadDivider(),
                }),
              d || u.unreadCount > 0)
            ) {
              o("WAWebUiIdleEventBus").UiIdleEventBus.setUiBusy(!0);
              var p = this.$CmdImpl$p_2({
                chat: u,
                msgContext: d,
                chatEntryPoint: i,
                threadId: l,
              })
                .then(function () {
                  return e.$CmdImpl$p_3({ pos: "top", offset: -120 });
                })
                .then(o("WAWebBoolFunc").returnTrue)
                .catch(
                  o("WAAbortError").catchAbort(o("WAWebBoolFunc").returnFalse),
                );
              return (
                p.finally(function () {
                  o("WAWebUiIdleEventBus").UiIdleEventBus.setUiBusy(!1);
                }),
                p
              );
            }
            return this.openChatBottom({ chat: u, chatEntryPoint: i });
          }),
          (i.openChatBottom = function (t) {
            var e = this,
              n = t.chat,
              r = t.chatEntryPoint,
              a = t.threadId,
              i = o("WAWebStateUtils").unproxy(n);
            (o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "openChatBottom",
                ])),
            ),
              i.id.isLid() &&
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "openChatBottom. entry point: ",
                      "",
                    ])),
                  r,
                ),
              o("WAWebUiIdleEventBus").UiIdleEventBus.setUiBusy(!0));
            var l,
              s = o("WAWebThreadModelResolver").resolveThreadOrChat(i, a),
              d = s.msgs;
            if (d.length > 0) {
              var m;
              (s !== i
                ? (m = d.last())
                : a != null
                  ? (m = i.msgs.findLast(function (e) {
                      return o("WAWebThreadMsgUtils").isMsgInThread(e, a);
                    }))
                  : (m = i.msgs.last()),
                (l = { collection: d, msg: m, isUnreadDivider: !1 }));
            }
            var p = this.$CmdImpl$p_2({
              chat: i,
              msgContext: l,
              chatEntryPoint: r,
              threadId: a,
            })
              .then(function () {
                return e.scrollChatToBottom();
              })
              .then(o("WAWebBoolFunc").returnTrue)
              .catch(
                o("WAAbortError").catchAbort(o("WAWebBoolFunc").returnFalse),
              );
            return (
              p.finally(function () {
                o("WAWebUiIdleEventBus").UiIdleEventBus.setUiBusy(!1);
              }),
              p
            );
          }),
          (i.$CmdImpl$p_3 = function (t) {
            var e = this;
            return new (h || (h = n("Promise")))(function (n) {
              e.trigger("scroll_to_focused_msg", n, t);
            }).catch(function (e) {
              o("WALogger").WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "Unexpected_scrollToFocusedMsg error: ",
                    "",
                  ])),
                String(e),
              );
            });
          }),
          (i.scrollChatToBottom = function () {
            var e = this;
            return new (h || (h = n("Promise")))(function (t) {
              e.trigger("scroll_chat_to_bottom", t);
            }).catch(function (e) {
              o("WALogger").WARN(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "Unexpected scrollChatToBottom error: ",
                    "",
                  ])),
                String(e),
              );
            });
          }),
          (i.scrollToActiveChat = function () {
            this.trigger("scroll_to_active_chat");
          }),
          (i.scrollChatListToTop = function () {
            this.trigger("scroll_chat_list_to_top");
          }),
          (i.flashFocusedMsg = function (t, n) {
            var e = this;
            self.setTimeout(function () {
              (e.trigger("flash_focused_msg", n),
                t && e.trigger("flash_mention_msg"));
            }, 0);
          }),
          (i.setActiveNavBarItem = function (t) {
            this.trigger("set_active_nav_bar", t);
          }),
          (i.setActiveFilter = function (t, n, r) {
            this.trigger("set_active_filter", t, n, r);
          }),
          (i.updateChatlistSelection = function (t) {
            var e = o("WAWebStateUtils").unproxy(t);
            this.trigger("update_chatlist_selection", e);
          }),
          (i.closeChat = function (t) {
            var e = o("WAWebStateUtils").unproxy(t);
            (this.trigger("close_chat", e),
              o("WAWebWamMemoryStat").uploadMemoryInfoOnChatClose());
          }),
          (i.closeActiveChat = function () {
            this.trigger("close_active_chat");
          }),
          (i.focusNextChat = function (t) {
            this.trigger("focus_next_chat", t);
          }),
          (i.focusPrevChat = function (t) {
            this.trigger("focus_prev_chat", t);
          }),
          (i.focusChatSearch = function () {
            this.trigger("focus_chat_search");
          }),
          (i.closeStatusViewer = function () {
            this.trigger("close_status_viewer");
          }),
          (i.openComposeBoxExpressionPanel = function (t) {
            this.trigger("open_compose_box_panel", t);
          }),
          (i.openAttachmentDropdown = function () {
            this.trigger("open_attachment_dropdown");
          }),
          (i.openCaptureMedia = function (t) {
            this.trigger("open_capture_media", t);
          }),
          (i.closeExpressionPanels = function () {
            this.trigger("close_expression_panels");
          }),
          (i.onLogoutFromBridge = function () {
            if (!r("gkx")("26258"))
              try {
                throw r("err")(
                  "Non Error - CMD logout, thrown only for getting logout stack trace",
                );
              } catch (e) {
                e instanceof Error &&
                  o("WALogger")
                    .LOG(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose(
                          ["CMD.onLogoutFromBridge debug: \n ", ""],
                          ["CMD.onLogoutFromBridge debug: \\n ", ""],
                        )),
                      e.stack,
                    )
                    .verbose();
              }
            (o("WAWebAppTracker").AppTracker.mark(
              o("WAWebAppTracker").AppTrackerType.Logout,
            ),
              this.trigger("logout_from_bridge"));
          }),
          (i.openContextMenu = function (t, n) {
            this.trigger("open_context_menu", t, n);
          }),
          (i.closeContextMenu = function (t) {
            this.trigger("close_context_menu", t);
          }),
          (i.openTooltip = function (t, n) {
            this.trigger("open_tooltip", t, n);
          }),
          (i.closeTooltip = function (t) {
            this.trigger("close_tooltip", t);
          }),
          (i.alertNewMsg = function (t) {
            this.trigger("alert_new_msg", t);
          }),
          (i.newMediaMsg = function (t) {
            this.trigger("new_media_msg", t);
          }),
          (i.alertCall = function (t, n, r, o, a, i, l) {
            this.trigger("alert_call", {
              wid: t,
              msgId: n,
              isVideo: r,
              isGroup: o,
              isSilenced: a,
              groupJid: i,
              groupCallParticipants: l,
            });
          }),
          (i.cancelCall = function (t) {
            this.trigger("cancel_call", t);
          }),
          (i.windowError = function (t) {}),
          (i.onPanesWillChange = function (t) {
            this.trigger("panes_will_change", t);
          }),
          (i.onPanesDidChange = function (t) {
            this.trigger("panes_did_change", t);
          }),
          (i.reactionChangeLastMessage = function () {
            this.trigger("reaction_changed_last_msg");
          }),
          (i.openGroupsV4InviteRequestFlow = function (t, n, r, o, a) {
            this.trigger("open_groups_v4_invite_request_flow", t, n, r, o, a);
          }),
          (i.toggleLidDebugBadge = function () {
            this.trigger("toggle_lid_debug_badge");
          }),
          (i.openCommandPalette = function () {
            this.trigger("open_command_palette");
          }),
          (i.closeCommandPalette = function () {
            this.trigger("close_command_palette");
          }),
          (i.windowMouseDown = function (t) {
            this.trigger("window_mousedown", t);
          }),
          (i.windowClick = function (t) {
            this.trigger("window_click", t);
          }),
          (i.midnight = function () {
            this.trigger("midnight");
          }),
          (i.scrollMessages = function () {
            this.trigger("scroll_messages");
          }),
          (i.getConversationHeaderOffset = function (t) {
            this.trigger("get_conversation_header_offset", t);
          }),
          (i.getChatListPanelOffset = function (t) {
            this.trigger("get_chat_list_panel_offset", t);
          }),
          (i.floaterEscapeOverlap = function (t, n) {
            this.trigger("floater_escape_overlap", t, n);
          }),
          (i.refreshMessages = function () {
            this.trigger("refresh_messages");
          }),
          (i.editGroupSubject = function () {
            this.trigger("edit_group_subject");
          }),
          (i.endFlow = function () {
            this.trigger("end_flow");
          }),
          (i.socketStreamDisconnectedFromBridge = function () {
            this.trigger("socket_stream_disconnected_from_bridge");
          }),
          (i.openSocketStreamFromBridge = function () {
            this.trigger("open_socket_stream_from_bridge");
          }),
          (i.openLongLinkModal = function () {
            this.trigger("open_long_link_modal");
          }),
          (i.closeLongLinkModal = function (t) {
            (t === void 0 && (t = !1),
              this.trigger("close_long_link_modal", t));
          }),
          (i.openLockScreenModal = function () {
            this.trigger("open_lock_screen_modal");
          }),
          (i.correctPasscodeLockScreen = function (t) {
            this.trigger("correct_passcode_lock_screen", t);
          }),
          (i.incorrectPasscodeLockScreen = function () {
            this.trigger("incorrect_passcode_lock_screen");
          }),
          (i.onOfflineDeliveryEndFromBridge = function () {
            ((this.isOfflineDeliveryEnd = !0),
              this.trigger("offline_delivery_end_from_bridge"));
          }),
          (i.onOfflineDeliveryStateResetFromBridge = function () {
            ((this.isOfflineDeliveryEnd = !1),
              this.trigger("offline_delivery_state_reset_from_bridge"));
          }),
          (i.onMainStreamModeReadyFromBridge = function () {
            (o("WAWebPageLoadLogging").addPageLoadQplPoint(
              "main_stream_mode_ready",
            ),
              (this.isMainStreamReadyMd = !0),
              o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "Cmd: onMainStreamModeReadyFromBridge",
                  ])),
              ),
              this.trigger("main_stream_mode_ready_from_bridge"));
          }),
          (i.onInitialChatHistorySyncedFromBridge = function () {
            this.trigger("on_initial_chat_synced_from_bridge");
          }),
          (i.onAppStateSyncCompletedFromBridge = function () {
            this.trigger("app_state_sync_completed_from_bridge");
          }),
          (i.onHistorySyncChunkProcessedFromBridge = function (t) {
            this.trigger("new_history_sync_chunk_processed_from_bridge", t);
          }),
          (i.onOfflineProgressUpdateFromBridge = function () {
            this.trigger("offline_progress_update_from_bridge");
          }),
          (i.criticalSyncDoneFromBridge = function () {
            this.trigger("on_critical_sync_done_from_bridge");
          }),
          (i.onTemporaryBanFromBridge = function (t) {
            this.trigger("account_temporarily_banned_from_bridge", t);
          }),
          (i.onStartingLogoutFromBridge = function () {
            this.trigger("starting_logout_from_bridge");
          }),
          (i.onUnexpectedLogoutModalFromBridge = function (t) {
            this.trigger("unexpected_logout_modal_from_bridge", t);
          }),
          (i.onInitialLoadReadyFromBridge = function () {
            (o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "Cmd: onInitialLoadReadyFromBridge",
                ])),
            ),
              this.trigger("initial_load_ready_from_bridge"));
          }),
          (i.onServiceUnavailableFromBridge = function () {
            this.trigger("service_unavailable_503_from_bridge");
          }),
          (i.merchantDetailsDrawer = function (t) {
            this.trigger("merchant_details_drawer", t);
          }),
          (i.showMerchantDetailsEntityTypePopup = function (t, n) {
            this.trigger("show_merchant_details_entity_type_popup", t, n);
          }),
          (i.showCountrySelector = function (t, n, r, o, a, i, l) {
            this.trigger("show_country_selector_popup", t, n, r, o, a, i, l);
          }),
          (i.toggleStickerMaker = function () {
            this.trigger("toggle_sticker_maker");
          }),
          (i.onAccountSyncForPrivacyFromBridge = function (t) {
            this.trigger("account_sync_for_privacy_from_bridge", t);
          }),
          (i.updateCrosspostAutoShareSettingsFromBridge = function (t) {
            this.trigger("update_crosspost_auto_share_settings_from_bridge", t);
          }),
          (i.updateStatusPrivacySettingsFromBridge = function (t) {
            this.trigger("update_status_privacy_settings_from_bridge", t);
          }),
          (i.openStickerPack = function (t) {
            this.trigger("open_sticker_pack", t);
          }),
          (i.onStatusViewerOpen = function () {
            this.trigger("status_viewer_open");
          }),
          (i.onStatusPostingFlow = function () {
            this.trigger("status_posting_flow");
          }),
          (i.triggerStorageAlert = function () {
            r("gkx")("26258") || this.trigger("handle_low_storage_butter_bar");
          }),
          (i.triggerBugReportV2 = function () {
            o("WAWebCurrentUser").isEmployee() &&
              this.trigger("trigger_bugreport_v2");
          }),
          (i.onNotificationPermissionChange = function () {
            this.trigger("on_notification_permission_change");
          }),
          (i.onBrigadingStateChangeFromBridge = function (t) {
            this.trigger("on_brigading_state_change_from_bridge", t);
          }),
          (i.onAbPropsUpdateFromBridge = function (t) {
            this.trigger("on_ab_props_update_from_bridge", t);
          }),
          (i.onAbPropsLoadedFromBridge = function () {
            this.trigger("ab_props_loaded_from_bridge");
          }),
          (i.playNextPtv = function (t) {
            this.trigger("sequential_ptv_playback", t);
          }),
          (i.groupNotificationContextCardRendered = function (t) {
            this.trigger("group_notification_context_card_rendered", t);
          }),
          (i.botTogglePluginSearchDetailsToggle = function (t, n) {
            if (t == null) {
              o("WALogger").WARN(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "botTogglePluginSearchDetailsToggle: null target id",
                  ])),
              );
              return;
            }
            this.trigger(
              "bot_toggle_plugin_search_details_for_target_id_" + t,
              n,
            );
          }),
          (i.rerenderApp = function () {
            this.trigger("rerender_app");
          }),
          (i.changeAiReplyStatus = function (t, n) {
            this.trigger("change_ai_reply_status", t, n);
          }),
          (i.chatListVisibilityChange = function (t) {
            this.trigger("chat_list_visibility_change", t);
          }),
          (i.limitSharingDrawer = function (t) {
            this.trigger("limit_sharing_drawer", t);
          }),
          (i.reachoutTimelockStateChange = function () {
            this.trigger("reachout_timelock_state_change");
          }),
          (i.newChatMessageCappingStateChange = function () {
            this.trigger("new_chat_message_capping_state_change");
          }),
          (i.chatMessageSent = function (t) {
            this.trigger("chat_message_sent", o("WAWebStateUtils").unproxy(t));
          }),
          (i.typingIndicatorVisibilityChange = function (t) {
            this.trigger("typing_indicator_visibility_change", t);
          }),
          (i.$CmdImpl$p_4 = function (t) {
            t.highlightTerms != null &&
              t.highlightTerms.length > 0 &&
              this.trigger("set_msg_highlight_terms", t.highlightTerms, t.key);
          }),
          a
        );
      })(r("WAWebEventEmitter"));
    function S(e) {
      var t,
        n = function () {
          if (!t) {
            t = new AbortController();
            var n = t,
              r = n.signal;
            o("WAWebDocumentFlushed")
              .documentFlushed({ signal: r })
              .then(
                function () {
                  r.aborted || ((t = null), e());
                },
                function (e) {
                  if (
                    !(
                      e instanceof Error &&
                      e.name === o("WAAbortError").ABORT_ERROR
                    )
                  )
                    throw e;
                },
              );
          }
        };
      return (
        (n.cancel = function () {
          t && (t.abort(), (t = null));
        }),
        n
      );
    }
    var R = new v();
    ((l.Revoke = C),
      (l.CmdImpl = v),
      (l.deferUntilDocumentFlushed = S),
      (l.Cmd = R));
  },
  98,
);
