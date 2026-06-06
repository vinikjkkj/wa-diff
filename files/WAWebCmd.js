__d(
  "WAWebCmd",
  [
    "JSResourceForInteraction",
    "WAAbortError",
    "WALogger",
    "WAPromiseDelays",
    "WAWebAppTracker",
    "WAWebBoolFunc",
    "WAWebBotGating",
    "WAWebBotUtils",
    "WAWebCmd.flow",
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
      C = 400,
      b = (function (t) {
        function n() {
          var e;
          return (
            (e = t.call(this) || this),
            (e.isMainStreamReadyMd = !1),
            (e.isOfflineDeliveryEnd = !1),
            (e.$CmdImpl$p_1 = null),
            o(
              "WAWebUiIdleEventBus",
            ).UiIdleEventBus.setDeferUntilDocumentFlushed(v),
            e
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.muteAllReactions = function (t, n, r) {
            this.trigger("mute_all_reactions", t, n, r);
          }),
          (a.muteChat = function (t, n, r, a) {
            this.trigger("mute_chat", o("WAWebStateUtils").unproxy(t), n, r, a);
          }),
          (a.muteChatMultiselect = function (t, n, r) {
            this.trigger("mute_chat_multiselect", t, n, r);
          }),
          (a.muteChatWithDuration = function (t, n) {
            this.trigger(
              "mute_chat_with_duration",
              o("WAWebStateUtils").unproxy(t),
              n,
            );
          }),
          (a.muteChatFromEntryPoint = function (t, n, r, a) {
            this.trigger(
              "mute_chat_from_entrypoint",
              o("WAWebStateUtils").unproxy(t),
              n,
              r,
              a,
            );
          }),
          (a.assignChat = function (t, n) {
            this.trigger("assign_chat", o("WAWebStateUtils").unproxy(t), n);
          }),
          (a.deleteOrExitChat = function (t, n) {
            this.trigger(
              "delete_or_exit_chat",
              o("WAWebStateUtils").unproxy(t),
              n,
            );
          }),
          (a.deleteOrExitChatFromEntryPoint = function (t, n, r) {
            this.trigger(
              "delete_or_exit_chat_from_entrypoint",
              o("WAWebStateUtils").unproxy(t),
              n,
              r,
            );
          }),
          (a.clearChat = function (t, n) {
            this.trigger("clear_chat", o("WAWebStateUtils").unproxy(t), n);
          }),
          (a.clearSelectedChats = function (t, n) {
            this.trigger(
              "clear_selected_chats",
              t.map(function (e) {
                return o("WAWebStateUtils").unproxy(e);
              }),
              n,
            );
          }),
          (a.archiveChat = function (t, n, r) {
            (r === void 0 && (r = !0),
              this.trigger("archive_chat", {
                archive: n,
                chat: o("WAWebStateUtils").unproxy(t),
                showToast: r,
              }));
          }),
          (a.archiveChatFromEntryPoint = function (t) {
            var e = t.archive,
              n = t.chat,
              r = t.entryPoint,
              a = t.showToast,
              i = a === void 0 ? !0 : a;
            this.trigger("archive_chat_from_entrypoint", {
              archive: e,
              chat: o("WAWebStateUtils").unproxy(n),
              entryPoint: r,
              showToast: i,
            });
          }),
          (a.pinChat = function (t, n) {
            this.trigger("pin_chat", o("WAWebStateUtils").unproxy(t), n);
          }),
          (a.favoriteChat = function (t, n, r) {
            this.trigger(
              "favorite_chat",
              o("WAWebStateUtils").unproxy(t),
              n,
              r,
            );
          }),
          (a.markChatUnread = function (t, n) {
            this.trigger(
              "mark_chat_unread",
              o("WAWebStateUtils").unproxy(t),
              n,
            );
          }),
          (a.msgInfoDrawer = function (t) {
            this.trigger("msg_info_drawer", o("WAWebStateUtils").unproxy(t));
          }),
          (a.chatSearch = function (t) {
            this.trigger("chat_search", o("WAWebStateUtils").unproxy(t));
          }),
          (a.scrollChatHeight = function (t) {
            this.trigger("scroll_chat_by_height", t);
          }),
          (a.ctwaAdPreviewDrawer = function (t, n, r) {
            this.trigger(
              "ctwa_ad_preview_drawer",
              o("WAWebStateUtils").unproxy(t),
              n,
              r,
            );
          }),
          (a.galaxyFlowDrawer = function (t) {
            var e = t.chat,
              n = t.messageData,
              r = t.msg,
              o = t.onClose;
            this.trigger("galaxy_flows_drawer", e, n, r, o);
          }),
          (a.chatInfoDrawer = function (t, n) {
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
          (a.newsletterDeleteDrawer = function (t) {
            this.trigger(
              "delete_newsletter_drawer",
              o("WAWebStateUtils").unproxy(t),
            );
          }),
          (a.openCurrentChatInfo = function () {
            this.trigger("open_current_chat_info");
          }),
          (a.blockCurrentChat = function () {
            this.trigger("block_current_chat");
          }),
          (a.clearCurrentChatConversationHistory = function () {
            this.trigger("clear_current_chat_conversation_history");
          }),
          (a.exitCurrentGroup = function () {
            this.trigger("exit_current_group");
          }),
          (a.replyCurrentMessageKeyboardShortcut = function () {
            this.trigger("reply_current_message_keyboard_shortcut");
          }),
          (a.replyCurrentMessagePrivate = function () {
            this.trigger("reply_current_message_private");
          }),
          (a.forwardCurrentMessage = function () {
            this.trigger("forward_current_message");
          }),
          (a.starCurrentMessage = function () {
            this.trigger("star_current_message");
          }),
          (a.startPttRecording = function () {
            this.trigger("start_ptt_recording");
          }),
          (a.pausePttRecording = function () {
            this.trigger("pause_ptt_recording");
          }),
          (a.sendPttRecording = function () {
            S.trigger("send_ptt_recording");
          }),
          (a.editGroupDescription = function () {
            this.trigger("edit_group_description");
          }),
          (a.attachMediaDrawer = function (t) {
            var e = this,
              n = o("WAWebStateUtils").unproxy(t.chat);
            if (
              !(
                n.id.isBot() &&
                !o("WAWebBotUtils").isBotChannelFBID(n.id) &&
                (!o("WAWebBotUtils").isMetaAiBot(n.id) ||
                  !(
                    o("WAWebBotGating").isAnyMetaAiMediaInputEnabled() ||
                    o("WAWebBotGating").isMetaAiDocUploadEnabled()
                  ))
              )
            ) {
              if (o("WAWebBotUtils").isMetaAiBot(n.id)) {
                var a = t.attachments;
                if (a != null) {
                  Promise.all(a).then(async function (o) {
                    var a = await r("JSResourceForInteraction")(
                        "WAWebBotMultiModalUtils",
                      )
                        .__setRef("WAWebCmd")
                        .load(),
                      i = a.showMetaAiAttachmentErrors,
                      l = a.validateMetaAiAttachments,
                      s = l(o, n.id),
                      u = s.errors,
                      c = s.validAttachments;
                    (i(u),
                      c.length !== 0 &&
                        e.$CmdImpl$p_2(
                          babelHelpers.extends({}, t, {
                            attachments: c.map(function (e) {
                              return e;
                            }),
                          }),
                          n,
                        ));
                  });
                  return;
                }
              }
              this.$CmdImpl$p_2(t, n);
            }
          }),
          (a.$CmdImpl$p_2 = function (t, n) {
            var e = function (r) {
                (r.length > 0 &&
                  o("WAWebComposeBoxActions").ComposeBoxActions.setTextContent(
                    n,
                    r.join(`

`),
                  ),
                  t.onCancel == null || t.onCancel());
              },
              r = babelHelpers.extends({}, t, { chat: n, onCancel: e });
            this.trigger("attach_media_drawer", r);
          }),
          (a.attachProduct = function (t) {
            this.trigger("attach_product", t);
          }),
          (a.verificationDrawer = function (t) {
            this.trigger("verification_drawer", t);
          }),
          (a.mediaViewerModal = function (t) {
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
          (a.openMediaViewerForAlbumMedia = function (t) {
            this.trigger("open_media_viewer_for_album_media", t);
          }),
          (a.productImageViewerModal = function (t, n) {
            this.trigger("product_image_viewer_modal", t, n);
          }),
          (a.ephemeralDrawer = function (t, n, r) {
            this.trigger("ephemeral_drawer", t, n, r);
          }),
          (a.chatThemeDrawer = function (t) {
            this.trigger("chat_theme_drawer", o("WAWebStateUtils").unproxy(t));
          }),
          (a.openCommunityHome = function (t, n) {
            this.trigger("open_community_home", t, n);
          }),
          (a.openCommunityTabbedInfo = function (t, n, r, o) {
            this.trigger("open_community_tabbed_info", t, n, r, o);
          }),
          (a.openCommunityPendingGroupsDrawer = function (t) {
            this.trigger("open_community_pending_groups_drawer", t);
          }),
          (a.openCommunityHomeManageGroups = function (t) {
            this.trigger("open_community_home_manage_groups", t);
          }),
          (a.openCommunitySettingsDrawer = function (t) {
            this.trigger("open_community_settings_drawer", t);
          }),
          (a.openMetaAiThreadDrawer = function (t, n) {
            this.trigger("open_meta_ai_thread_drawer", t, n);
          }),
          (a.updateAiThreadlistSelection = function () {
            this.trigger("update_ai_thread_list_selection");
          }),
          (a.openCommunitySubgroupJoinModal = function (t, n) {
            this.trigger("open_subgroup_join_modal", t, n);
          }),
          (a.openProfile = function (t) {
            this.trigger("open_profile", t);
          }),
          (a.communityAddNewGroup = function (t, n, r) {
            this.trigger("open_community_add_new_group", t, n, r);
          }),
          (a.communityAddExistingGroup = function (t) {
            this.trigger("open_community_add_existing_group", t);
          }),
          (a.openCreatedNewsletter = function (t) {
            this.trigger("open_created_newsletter", t);
          }),
          (a.openNewsletterProfile = function (t, n) {
            this.trigger("open_newsletter_profile", t, n);
          }),
          (a.newsletterMuteToggle = function (t, n, r) {
            this.trigger("newsletter:mute_toggle", t, n, r);
          }),
          (a.editNewsletterDescription = function () {
            this.trigger("edit_newsletter_description");
          }),
          (a.openEventInfoDrawer = function (t, n, r, o) {
            this.trigger("open_event_info_drawer", t, n, r, o);
          }),
          (a.sendStarMsgs = function (t, n, r, a) {
            this.trigger(
              "send_star_msgs",
              o("WAWebStateUtils").unproxy(t),
              n,
              r,
              a,
            );
          }),
          (a.sendUnstarMsgs = function (t, n, r, a) {
            this.trigger(
              "send_unstar_msgs",
              o("WAWebStateUtils").unproxy(t),
              n,
              r,
              a,
            );
          }),
          (a.sendDeleteMsgs = function (t, n, r, a, i, l) {
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
          (a.sendRevokeMsgs = function (t, n, r) {
            this.trigger(
              "send_revoke_msgs",
              o("WAWebStateUtils").unproxy(t),
              n,
              r,
            );
          }),
          (a.$CmdImpl$p_3 = function (n) {
            var t = this,
              r = n.chat,
              a = n.chatEntryPoint,
              i = n.msgContext,
              l = n.threadId,
              u = this.$CmdImpl$p_1 != null && this.$CmdImpl$p_1 === r.id;
            return (
              u
                ? o("WALogger").LOG(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "openChat: preserving entry point ",
                        ", skipping ",
                        " for same chat",
                      ])),
                    r.chatEntryPoint,
                    a,
                  )
                : (r.chatEntryPoint = a),
              (this.$CmdImpl$p_1 = r.id),
              o("WAWebWamMemoryStat").uploadMemoryIfChatWasOpened(r.id),
              new Promise(function (e) {
                t.trigger("open_chat", {
                  chat: r,
                  msgContext: i,
                  chatEntryPoint: a,
                  threadId: l,
                  onComplete: async function (n) {
                    var t,
                      r = o(
                        "WAWebDrawerManagerGlobalContext",
                      ).getGlobalDrawerManager("right"),
                      a =
                        (t = r == null ? void 0 : r.existsDrawer()) != null
                          ? t
                          : !1;
                    (a &&
                      window.matchMedia("(max-width: " + y + "px)").matches &&
                      (r == null || r.closeDrawer()),
                      e(n));
                  },
                });
              }).catch(function (e) {
                throw (
                  o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "Unexpected openChat error: ",
                        "",
                      ])),
                    String(e),
                  ),
                  e
                );
              })
            );
          }),
          (a.openChatAt = function (t) {
            var e = this,
              n = t.chat,
              r = t.chatEntryPoint,
              a = t.msgContext,
              i = t.noFocus,
              l = t.onSuccess,
              s = t.threadId,
              u = o("WAWebStateUtils").unproxy(n);
            if (!a) return this.openChatBottom({ chat: u, chatEntryPoint: r });
            o("WAWebUiIdleEventBus").UiIdleEventBus.setUiBusy(!0);
            var c = this.$CmdImpl$p_3({
              chat: u,
              msgContext: a,
              chatEntryPoint: r,
              threadId: s,
            })
              .then(async function (t) {
                var n,
                  r,
                  o = a.enableAnimation != null ? a.enableAnimation : !0;
                if (t)
                  if (t.wasVisible)
                    ((n = function () {
                      return e.$CmdImpl$p_4({
                        pos: "offset",
                        offset: t.offset,
                      });
                    }),
                      (r = function () {
                        return e.$CmdImpl$p_4({
                          pos: "center",
                          animate: o,
                          duration: C,
                          easing: [0.7, 0, 0.3, 1],
                        });
                      }));
                  else
                    switch (
                      ((n = function () {
                        return e.$CmdImpl$p_4({
                          pos: t.alignAt,
                          scrollIfNeeded: !0,
                        });
                      }),
                      t.alignAt)
                    ) {
                      case "top":
                      case "bottom":
                        r = function () {
                          return e.$CmdImpl$p_4({
                            pos: "center",
                            animate: o,
                            duration: C,
                            easing: [0.88, 0.64, 0.13, 0.99],
                          });
                        };
                        break;
                      case "center":
                      default:
                        r = function () {
                          return Promise.resolve();
                        };
                    }
                else
                  ((n = function () {
                    return e.$CmdImpl$p_4({ pos: "center" });
                  }),
                    (r = function () {
                      return Promise.resolve();
                    }));
                return (await n(), r());
              })
              .then(function () {
                var t;
                if (
                  (a == null || (t = a.msg) == null
                    ? void 0
                    : t.botPluginReferenceIndex) != null
                ) {
                  var n,
                    r =
                      a == null || (n = a.msg) == null
                        ? void 0
                        : n.botResponseTargetId;
                  r != null && e.botTogglePluginSearchDetailsToggle(r, !0);
                }
                (a == null ? void 0 : a.highlightMsg) === !0 &&
                  e.flashFocusedMsg(a.highlightMentionMsg, i);
              })
              .then(function () {
                if (l) {
                  var e = l.mediaMsgToOpenInMediaViewer,
                    t = l.onScrollToQuotedCarouselCard;
                  e &&
                    o("WAPromiseDelays")
                      .delayMs(500)
                      .then(function () {
                        (S.openMediaViewerForAlbumMedia(
                          o("WAWebStateUtils").unproxy(e),
                        ),
                          t == null || t());
                      });
                }
                return !0;
              })
              .then(function (t) {
                return (e.$CmdImpl$p_5(a), t);
              })
              .catch(
                o("WAAbortError").catchAbort(o("WAWebBoolFunc").returnFalse),
              );
            return (
              c.finally(function () {
                o("WAWebUiIdleEventBus").UiIdleEventBus.setUiBusy(!1);
              }),
              c
            );
          }),
          (a.openChatFromUnread = function (t) {
            var e = this,
              n = t.chat,
              a = t.chatEntryPoint,
              i = t.threadId,
              l = o("WAWebStateUtils").unproxy(n);
            if (!r("gkx")("26258")) {
              window.chat = l;
              var s =
                (l.unreadMsgAnchor && l.unreadMsgAnchor.id.toString()) ||
                "No unreadMsgAnchor found";
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "openChatFromUnread anchor=",
                    " unread=",
                    "",
                  ])),
                s,
                l.unreadCount,
              );
            }
            var c,
              d = o("WAWebThreadModelResolver").resolveThreadOrChat(l, i);
            if (
              (d.unreadMsgAnchor &&
                (c = {
                  collection: d.unreadMsgAnchor.getMsgChunk(
                    d !== l ? i : void 0,
                  ),
                  promise: Promise.resolve(),
                  msg: d.unreadMsgAnchor,
                  isUnreadDivider: l.shouldShowUnreadDivider(),
                }),
              c || l.unreadCount > 0)
            ) {
              o("WAWebUiIdleEventBus").UiIdleEventBus.setUiBusy(!0);
              var m = this.$CmdImpl$p_3({
                chat: l,
                msgContext: c,
                chatEntryPoint: a,
                threadId: i,
              })
                .then(function () {
                  return e.$CmdImpl$p_4({ pos: "top", offset: -120 });
                })
                .then(o("WAWebBoolFunc").returnTrue)
                .catch(
                  o("WAAbortError").catchAbort(o("WAWebBoolFunc").returnFalse),
                );
              return (
                m.finally(function () {
                  o("WAWebUiIdleEventBus").UiIdleEventBus.setUiBusy(!1);
                }),
                m
              );
            }
            return this.openChatBottom({ chat: l, chatEntryPoint: a });
          }),
          (a.openChatBottom = function (t) {
            var e = this,
              n = t.chat,
              r = t.chatEntryPoint,
              a = t.threadId,
              i = o("WAWebStateUtils").unproxy(n);
            (o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "openChatBottom",
                ])),
            ),
              i.id.isLid() &&
                o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "openChatBottom. entry point: ",
                      "",
                    ])),
                  r,
                ),
              o("WAWebUiIdleEventBus").UiIdleEventBus.setUiBusy(!0));
            var l,
              s = o("WAWebThreadModelResolver").resolveThreadOrChat(i, a),
              u = s.msgs;
            if (u.length > 0) {
              var m;
              (s !== i
                ? (m = u.last())
                : a != null
                  ? (m = i.msgs.findLast(function (e) {
                      return o("WAWebThreadMsgUtils").isMsgInThread(e, a);
                    }))
                  : (m = i.msgs.last()),
                (l = { collection: u, msg: m, isUnreadDivider: !1 }));
            }
            var p = this.$CmdImpl$p_3({
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
          (a.$CmdImpl$p_4 = function (t) {
            var e = this;
            return new Promise(function (n) {
              e.trigger("scroll_to_focused_msg", n, t);
            }).catch(function (e) {
              o("WALogger").WARN(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "Unexpected_scrollToFocusedMsg error: ",
                    "",
                  ])),
                String(e),
              );
            });
          }),
          (a.scrollChatToBottom = function () {
            var e = this;
            return new Promise(function (t) {
              e.trigger("scroll_chat_to_bottom", t);
            }).catch(function (e) {
              o("WALogger").WARN(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "Unexpected scrollChatToBottom error: ",
                    "",
                  ])),
                String(e),
              );
            });
          }),
          (a.scrollToActiveChat = function () {
            this.trigger("scroll_to_active_chat");
          }),
          (a.scrollChatListToTop = function () {
            this.trigger("scroll_chat_list_to_top");
          }),
          (a.flashFocusedMsg = function (t, n) {
            var e = this;
            self.setTimeout(function () {
              (e.trigger("flash_focused_msg", n),
                t && e.trigger("flash_mention_msg"));
            }, 0);
          }),
          (a.setActiveNavBarItem = function (t) {
            this.trigger("set_active_nav_bar", t);
          }),
          (a.setActiveFilter = function (t, n, r) {
            this.trigger("set_active_filter", t, n, r);
          }),
          (a.updateChatlistSelection = function (t) {
            var e = o("WAWebStateUtils").unproxy(t);
            this.trigger("update_chatlist_selection", e);
          }),
          (a.closeChat = function (t) {
            var e = o("WAWebStateUtils").unproxy(t);
            (this.$CmdImpl$p_1 != null &&
              this.$CmdImpl$p_1 === e.id &&
              (this.$CmdImpl$p_1 = null),
              this.trigger("close_chat", e),
              o("WAWebWamMemoryStat").uploadMemoryInfoOnChatClose());
          }),
          (a.closeActiveChat = function () {
            ((this.$CmdImpl$p_1 = null), this.trigger("close_active_chat"));
          }),
          (a.focusNextChat = function (t) {
            this.trigger("focus_next_chat", t);
          }),
          (a.focusPrevChat = function (t) {
            this.trigger("focus_prev_chat", t);
          }),
          (a.focusChatSearch = function () {
            this.trigger("focus_chat_search");
          }),
          (a.closeStatusViewer = function () {
            this.trigger("close_status_viewer");
          }),
          (a.openComposeBoxExpressionPanel = function (t) {
            this.trigger("open_compose_box_panel", t);
          }),
          (a.openAttachmentDropdown = function () {
            this.trigger("open_attachment_dropdown");
          }),
          (a.openCaptureMedia = function (t) {
            this.trigger("open_capture_media", t);
          }),
          (a.closeExpressionPanels = function () {
            this.trigger("close_expression_panels");
          }),
          (a.onLogoutFromBridge = function () {
            if (!r("gkx")("26258"))
              try {
                throw r("err")(
                  "Non Error - CMD logout, thrown only for getting logout stack trace",
                );
              } catch (e) {
                e instanceof Error &&
                  o("WALogger")
                    .LOG(
                      _ ||
                        (_ = babelHelpers.taggedTemplateLiteralLoose(
                          [
                            `CMD.onLogoutFromBridge debug: 
 `,
                            "",
                          ],
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
          (a.openContextMenu = function (t, n) {
            this.trigger("open_context_menu", t, n);
          }),
          (a.closeContextMenu = function (t) {
            this.trigger("close_context_menu", t);
          }),
          (a.openTooltip = function (t, n) {
            this.trigger("open_tooltip", t, n);
          }),
          (a.closeTooltip = function (t) {
            this.trigger("close_tooltip", t);
          }),
          (a.alertNewMsg = function (t) {
            this.trigger("alert_new_msg", t);
          }),
          (a.newMediaMsg = function (t) {
            this.trigger("new_media_msg", t);
          }),
          (a.alertCall = function (t, n, r, o, a, i, l) {
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
          (a.cancelCall = function (t) {
            this.trigger("cancel_call", t);
          }),
          (a.windowError = function (t) {}),
          (a.onPanesWillChange = function (t) {
            this.trigger("panes_will_change", t);
          }),
          (a.onPanesDidChange = function (t) {
            this.trigger("panes_did_change", t);
          }),
          (a.reactionChangeLastMessage = function () {
            this.trigger("reaction_changed_last_msg");
          }),
          (a.openGroupsV4InviteRequestFlow = function (t, n, r, o, a) {
            this.trigger("open_groups_v4_invite_request_flow", t, n, r, o, a);
          }),
          (a.toggleLidDebugBadge = function () {
            this.trigger("toggle_lid_debug_badge");
          }),
          (a.openCommandPalette = function () {
            this.trigger("open_command_palette");
          }),
          (a.closeCommandPalette = function () {
            this.trigger("close_command_palette");
          }),
          (a.windowMouseDown = function (t) {
            this.trigger("window_mousedown", t);
          }),
          (a.windowClick = function (t) {
            this.trigger("window_click", t);
          }),
          (a.midnight = function () {
            this.trigger("midnight");
          }),
          (a.scrollMessages = function () {
            this.trigger("scroll_messages");
          }),
          (a.getConversationHeaderOffset = function (t) {
            this.trigger("get_conversation_header_offset", t);
          }),
          (a.getChatListPanelOffset = function (t) {
            this.trigger("get_chat_list_panel_offset", t);
          }),
          (a.floaterEscapeOverlap = function (t, n) {
            this.trigger("floater_escape_overlap", t, n);
          }),
          (a.refreshMessages = function () {
            this.trigger("refresh_messages");
          }),
          (a.editGroupSubject = function () {
            this.trigger("edit_group_subject");
          }),
          (a.endFlow = function () {
            this.trigger("end_flow");
          }),
          (a.socketStreamDisconnectedFromBridge = function () {
            this.trigger("socket_stream_disconnected_from_bridge");
          }),
          (a.openSocketStreamFromBridge = function () {
            this.trigger("open_socket_stream_from_bridge");
          }),
          (a.openLongLinkModal = function () {
            this.trigger("open_long_link_modal");
          }),
          (a.closeLongLinkModal = function (t) {
            (t === void 0 && (t = !1),
              this.trigger("close_long_link_modal", t));
          }),
          (a.openLockScreenModal = function () {
            this.trigger("open_lock_screen_modal");
          }),
          (a.correctPasscodeLockScreen = function (t) {
            this.trigger("correct_passcode_lock_screen", t);
          }),
          (a.incorrectPasscodeLockScreen = function () {
            this.trigger("incorrect_passcode_lock_screen");
          }),
          (a.onOfflineDeliveryEndFromBridge = function () {
            ((this.isOfflineDeliveryEnd = !0),
              this.trigger("offline_delivery_end_from_bridge"));
          }),
          (a.onOfflineDeliveryStateResetFromBridge = function () {
            ((this.isOfflineDeliveryEnd = !1),
              this.trigger("offline_delivery_state_reset_from_bridge"));
          }),
          (a.onMainStreamModeReadyFromBridge = function () {
            (o("WAWebPageLoadLogging").addPageLoadQplPoint(
              "main_stream_mode_ready",
            ),
              (this.isMainStreamReadyMd = !0),
              o("WALogger").LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "Cmd: onMainStreamModeReadyFromBridge",
                  ])),
              ),
              this.trigger("main_stream_mode_ready_from_bridge"));
          }),
          (a.onInitialChatHistorySyncedFromBridge = function () {
            this.trigger("on_initial_chat_synced_from_bridge");
          }),
          (a.onAppStateSyncCompletedFromBridge = function () {
            this.trigger("app_state_sync_completed_from_bridge");
          }),
          (a.onHistorySyncChunkProcessedFromBridge = function (t) {
            this.trigger("new_history_sync_chunk_processed_from_bridge", t);
          }),
          (a.onOfflineProgressUpdateFromBridge = function () {
            this.trigger("offline_progress_update_from_bridge");
          }),
          (a.criticalSyncDoneFromBridge = function () {
            this.trigger("on_critical_sync_done_from_bridge");
          }),
          (a.onTemporaryBanFromBridge = function (t) {
            this.trigger("account_temporarily_banned_from_bridge", t);
          }),
          (a.onStartingLogoutFromBridge = function () {
            this.trigger("starting_logout_from_bridge");
          }),
          (a.onUnexpectedLogoutModalFromBridge = function (t) {
            this.trigger("unexpected_logout_modal_from_bridge", t);
          }),
          (a.onInitialLoadReadyFromBridge = function () {
            (o("WALogger").LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "Cmd: onInitialLoadReadyFromBridge",
                ])),
            ),
              this.trigger("initial_load_ready_from_bridge"));
          }),
          (a.onServiceUnavailableFromBridge = function () {
            this.trigger("service_unavailable_503_from_bridge");
          }),
          (a.onScheduledMsgRevealedFromBridge = function (t) {
            this.trigger("scheduled_msg_revealed_from_bridge", t);
          }),
          (a.merchantDetailsDrawer = function (t) {
            this.trigger("merchant_details_drawer", t);
          }),
          (a.showMerchantDetailsEntityTypePopup = function (t, n) {
            this.trigger("show_merchant_details_entity_type_popup", t, n);
          }),
          (a.showCountrySelector = function (t, n, r, o, a, i, l) {
            this.trigger("show_country_selector_popup", t, n, r, o, a, i, l);
          }),
          (a.toggleStickerMaker = function () {
            this.trigger("toggle_sticker_maker");
          }),
          (a.onAccountSyncForPrivacyFromBridge = function (t) {
            this.trigger("account_sync_for_privacy_from_bridge", t);
          }),
          (a.updateCrosspostAutoShareSettingsFromBridge = function (t) {
            this.trigger("update_crosspost_auto_share_settings_from_bridge", t);
          }),
          (a.updateStatusPrivacySettingsFromBridge = function (t) {
            this.trigger("update_status_privacy_settings_from_bridge", t);
          }),
          (a.openStickerPack = function (t) {
            this.trigger("open_sticker_pack", t);
          }),
          (a.onStatusViewerOpen = function () {
            this.trigger("status_viewer_open");
          }),
          (a.onStatusPostingFlow = function () {
            this.trigger("status_posting_flow");
          }),
          (a.triggerStorageAlert = function () {
            r("gkx")("26258") || this.trigger("handle_low_storage_butter_bar");
          }),
          (a.triggerBugReportV2 = function () {
            o("WAWebCurrentUser").isEmployee() &&
              this.trigger("trigger_bugreport_v2");
          }),
          (a.onNotificationPermissionChange = function () {
            this.trigger("on_notification_permission_change");
          }),
          (a.onBrigadingStateChangeFromBridge = function (t) {
            this.trigger("on_brigading_state_change_from_bridge", t);
          }),
          (a.onAbPropsUpdateFromBridge = function (t) {
            this.trigger("on_ab_props_update_from_bridge", t);
          }),
          (a.onAbPropsLoadedFromBridge = function () {
            this.trigger("ab_props_loaded_from_bridge");
          }),
          (a.playNextPtv = function (t) {
            this.trigger("sequential_ptv_playback", t);
          }),
          (a.groupNotificationContextCardRendered = function (t) {
            this.trigger("group_notification_context_card_rendered", t);
          }),
          (a.botTogglePluginSearchDetailsToggle = function (t, n) {
            if (t == null) {
              o("WALogger").WARN(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
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
          (a.rerenderApp = function () {
            this.trigger("rerender_app");
          }),
          (a.changeAiReplyStatus = function (t, n) {
            this.trigger("change_ai_reply_status", t, n);
          }),
          (a.chatListVisibilityChange = function (t) {
            this.trigger("chat_list_visibility_change", t);
          }),
          (a.limitSharingDrawer = function (t) {
            this.trigger("limit_sharing_drawer", t);
          }),
          (a.reachoutTimelockStateChange = function () {
            this.trigger("reachout_timelock_state_change");
          }),
          (a.newChatMessageCappingStateChange = function () {
            this.trigger("new_chat_message_capping_state_change");
          }),
          (a.chatMessageSent = function (t) {
            this.trigger("chat_message_sent", o("WAWebStateUtils").unproxy(t));
          }),
          (a.typingIndicatorVisibilityChange = function (t) {
            this.trigger("typing_indicator_visibility_change", t);
          }),
          (a.$CmdImpl$p_5 = function (t) {
            t.highlightTerms != null &&
              t.highlightTerms.length > 0 &&
              this.trigger("set_msg_highlight_terms", t.highlightTerms, t.key);
          }),
          n
        );
      })(r("WAWebEventEmitter"));
    function v(e) {
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
    var S = new b();
    ((l.Revoke = o("WAWebCmd.flow").Revoke),
      (l.CmdImpl = b),
      (l.deferUntilDocumentFlushed = v),
      (l.Cmd = S));
  },
  98,
);
