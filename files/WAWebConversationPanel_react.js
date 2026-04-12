__d(
  "WAWebConversationPanel.react",
  [
    "cx",
    "WAFilteredCatch",
    "WAPromiseRaceAbort",
    "WAWebAnimationGroupItem.react",
    "WAWebAttachmentMenuLogger",
    "WAWebBizAiAgentGating",
    "WAWebBizAiAgentStatusUtils",
    "WAWebBizAiThreadControlFab.react",
    "WAWebCappingWarningBannerLoadable",
    "WAWebCaptureMediaDrawerLoadable",
    "WAWebChatGetters",
    "WAWebChatGroupUtils",
    "WAWebCmd",
    "WAWebComposeBox.react",
    "WAWebCongratulationsAnimationConversation.react",
    "WAWebCongratulationsAnimationsGatingUtils",
    "WAWebConversationBackground.react",
    "WAWebConversationDeprecatedLidChatBanner.react",
    "WAWebConversationDeprecatedLidChatUtils",
    "WAWebConversationMsgs.react",
    "WAWebConversationPanelBanner.react",
    "WAWebConversationSpam.react",
    "WAWebConversationSpamUtils",
    "WAWebDrawerManager",
    "WAWebForwardActionUserJourneyLogger",
    "WAWebFrontendChatGetters",
    "WAWebGroupHistoryBundleInfoContextProvider.react",
    "WAWebGroupType",
    "WAWebGuidePopup.react",
    "WAWebHeader.react",
    "WAWebHeroInteraction.react",
    "WAWebInteractionTracePolicy",
    "WAWebKeyboardTabUtils",
    "WAWebMediaCapture",
    "WAWebMediaCaptureStreamType",
    "WAWebMiscErrors",
    "WAWebModalManager",
    "WAWebMultiSelectBar.react",
    "WAWebNewsletterMembershipUtil",
    "WAWebNewsletterSuspendedConversationPanelBody.react",
    "WAWebPrepareMessageSendingAction",
    "WAWebSideNavButtonsActivityModel",
    "WAWebSignupGating",
    "WAWebSignupLoadingSpinner.react",
    "WAWebStateUtils",
    "WAWebTimeSpentLoggingNavigation",
    "WAWebUISpacing",
    "WAWebUimUie.react",
    "WAWebUseMaybeRequestWelcomeMessage",
    "WAWebVelocityTransitionGroup",
    "react",
    "stylex",
    "useWAWebBroadcastThreadOpenMetrics",
    "useWAWebCappingWarningBanner.react",
    "useWAWebChatOpenMetrics",
    "useWAWebCommunityNux",
    "useWAWebConversationPanelActionListeners",
    "useWAWebConversationPanelCanCompose",
    "useWAWebConversationPanelChatActionListeners",
    "useWAWebConversationPanelDragHandlers",
    "useWAWebConversationPanelEphemeralNux",
    "useWAWebConversationPanelFiller.react",
    "useWAWebConversationPanelMessageSelection",
    "useWAWebConversationPanelMetrics",
    "useWAWebConversationPanelOpenChat",
    "useWAWebDynamicModesCacheWarmup",
    "useWAWebEventTargetValue",
    "useWAWebListener",
    "useWAWebMetaAIChatOpenMetrics",
    "useWAWebModelValues",
    "useWAWebNewsletterOpenMetrics",
    "useWAWebNewsletterPrivacyBanner",
    "useWAWebShowCommunitySubjectSyncIssue",
    "useWAWebUIM",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useEffect,
      _ = d.useMemo,
      f = d.useRef,
      g = d.useState,
      h = {
        footerMessage: {
          boxSizing: "x9f619",
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          minHeight: "x122xwht",
          fontSize: "x1f6kntn",
          lineHeight: "x1fc57z9",
          color: "xhslqc4",
          textAlign: "x2b8uid",
          backgroundColor: "x1h3rtpe",
          $$css: !0,
        },
      };
    function y(t) {
      var n,
        a,
        i = t.chat,
        l = t.chatEntryPoint,
        s = t.focusCtx,
        u = t.groupMetadata,
        d = t.msgCollection,
        y = t.threadId,
        C = f(null),
        b = g(!1),
        v = b[0],
        S = b[1],
        R = m(
          function (e) {
            e !== v && S(e);
          },
          [v],
        ),
        L = _(
          function () {
            return o(
              "WAWebConversationDeprecatedLidChatUtils",
            ).getLidDeprecatedInfo(i);
          },
          [i],
        );
      (r("useWAWebShowCommunitySubjectSyncIssue")(i),
        r("useWAWebConversationPanelOpenChat")(i),
        r("useWAWebCommunityNux")(i),
        r("useWAWebConversationPanelEphemeralNux")(i),
        o("WAWebTimeSpentLoggingNavigation").useTsNavigation({
          surface: o("WAWebChatGetters").getIsNewsletter(i)
            ? "channel-thread"
            : "chat",
          extras: {
            groupSize: o("WAWebChatGetters").getIsNewsletter(i)
              ? (n = i.newsletterMetadata) == null
                ? void 0
                : n.size
              : (a = i.groupMetadata) == null
                ? void 0
                : a.participants.length,
            channelWid: o("WAWebChatGetters").getIsNewsletter(i)
              ? i.id
              : void 0,
            typeOfGroup:
              i.groupMetadata == null
                ? void 0
                : o("WAWebGroupType").groupTypeToWamEnum(
                    o("WAWebGroupType").getGroupTypeFromGroupMetadata(
                      i.groupMetadata,
                    ),
                  ),
          },
        }),
        r("useWAWebConversationPanelMetrics")(i, function () {
          var e;
          return (e = C.current) == null ? void 0 : e.getRenderedMessageCount();
        }),
        o("useWAWebNewsletterOpenMetrics").useNewsletterOpenMetrics({
          chat: i,
          chatEntryPoint: l,
        }),
        o("useWAWebMetaAIChatOpenMetrics").useMetaAIChatOpenMetrics({
          chat: i,
          chatEntryPoint: l,
        }),
        o("useWAWebDynamicModesCacheWarmup").useWAWebDynamicModesCacheWarmup(i),
        o("useWAWebChatOpenMetrics").useChatOpenMetrics(i),
        o("useWAWebBroadcastThreadOpenMetrics").useBroadcastThreadOpenMetrics(
          i,
        ),
        r("useWAWebConversationPanelChatActionListeners")(),
        o("useWAWebModelValues").useModelValues(i, [
          "isReadOnly",
          "isAnnounceGrpRestrict",
          "newsletterMetadata",
        ]));
      var E = r("useWAWebNewsletterPrivacyBanner")(i),
        k = r("useWAWebConversationPanelCanCompose")(i),
        I = k[0],
        T = k[1],
        D = g(function () {
          return (
            !I &&
            o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(i) &&
            o("WAWebConversationSpamUtils").shouldShowSpamPanel(i)
          );
        }),
        x = D[0],
        $ = D[1],
        P = r("useWAWebConversationPanelMessageSelection")(i.msgs),
        N = P.handleCancelSelection,
        M = P.handleMessageSelect,
        w = P.handleSelectMessages,
        A = P.selectable,
        F = P.selectedMessages,
        O = P.selectionMode,
        B = r("useWAWebConversationPanelDragHandlers")(i, {
          canCompose: I,
          onDragEnter: N,
          threadId: y,
        }),
        W = B[0],
        q = B[1],
        U = r("useWAWebConversationPanelFiller.react")({
          canCompose: I,
          selectable: A,
          setScrollBottom: function (t) {
            var e;
            return (e = C.current) == null ? void 0 : e.setScrollBottom(t);
          },
          getScrollBottom: function () {
            var e;
            return (e = C.current) == null ? void 0 : e.getScrollBottom();
          },
          onComposeHeightChange: function (t) {
            var e;
            return (e = C.current) == null
              ? void 0
              : e.onComposeHeightChange(t);
          },
        }),
        V = U.filler,
        H = U.handleComposeHeightChange,
        G = U.msgPanelRef,
        z = function () {
          var e;
          (e = C.current) == null || e.focus();
        },
        j = f(null),
        K = r("useWAWebUIM")(),
        Q = r("useWAWebUnmountSignal")();
      (p(function () {
        return function () {
          (j.current == null || j.current(),
            o("WAWebSideNavButtonsActivityModel").getLastActiveButton() ==
              null && o("WAWebDrawerManager").DrawerManager.closeDrawerMid());
        };
      }, []),
        r("useWAWebConversationPanelActionListeners")({ onFocus: z }),
        o("WAWebUseMaybeRequestWelcomeMessage").useMaybeRequestWelcomeMessage(
          i,
        ));
      var X = r("useWAWebCappingWarningBanner.react")(i),
        Y = X[0],
        J = X[1],
        Z = r("useWAWebEventTargetValue")(
          i.newsletterMetadata,
          ["change:suspended"],
          function () {
            var e;
            return (
              o("WAWebChatGetters").getIsNewsletter(i) &&
              ((e = i.newsletterMetadata) == null ? void 0 : e.suspended) === !0
            );
          },
        ),
        ee = r("useWAWebEventTargetValue")(
          i.newsletterMetadata,
          ["change:geosuspended"],
          function () {
            var e;
            return (
              o("WAWebChatGetters").getIsNewsletter(i) &&
              ((e = i.newsletterMetadata) == null ? void 0 : e.geosuspended) ===
                !0
            );
          },
        ),
        te = function (t) {
          var e;
          (e = C.current) == null || e.onPageUpDown(t);
        },
        ne,
        re,
        oe = null;
      if (
        (o(
          "WAWebCongratulationsAnimationsGatingUtils",
        ).isCongratulationsAnimationsEnabled() &&
          (oe = c.jsx(r("WAWebCongratulationsAnimationConversation.react"), {
            chat: i,
          })),
        A)
      )
        ((re = c.jsx(o("WAWebUimUie.react").UIE, {
          displayName: "MultiSelect",
          escapable: !0,
          requestDismiss: N,
          children: c.jsx(o("WAWebMultiSelectBar.react").MultiSelectBar, {
            chat: i,
            selectedMessages: F,
            noSortOnForward: !1,
            onCancel: N,
            entryPoint: o("WAWebMultiSelectBar.react").MultiSelectBarEntryPoint
              .CONVERSATION_PANEL,
            mode: O,
          }),
        })),
          (ne = c.jsx("footer", {
            className:
              "_amm5 x1n2onr6 x1vjfegm x9f619 x1okw0bk xo1ph6p x122xwht",
          })));
      else if (I)
        ne = c.jsx(o("WAWebComposeBox.react").ComposeBox, {
          chat: i,
          threadId: y,
          ref: W,
          canShowSpamPanel: v,
          onComposeHeightChange: H,
          onPageUpDown: te,
        });
      else {
        var ae = T != null ? T : E,
          ie = null;
        (v &&
          x &&
          o("WAWebFrontendChatGetters").getShouldAppearInList(i) &&
          i.msgs.length > 0 &&
          (ie = c.jsx(r("WAWebAnimationGroupItem.react"), {
            children: c.jsx(r("WAWebConversationSpam.react"), {
              chat: i,
              onClickNotSpam: function () {
                ($(!1),
                  o("WAWebConversationSpamUtils").acknowledgeGroupAsNotSpam(i));
              },
              onClickDismissSpam: function () {
                return $(!1);
              },
            }),
          })),
          (ne =
            ae != null &&
            c.jsxs("footer", {
              "data-testid": void 0,
              className:
                "_amm5 x1n2onr6 x1vjfegm x9f619 x1okw0bk xo1ph6p x122xwht",
              children: [
                ie,
                c.jsx(
                  "div",
                  babelHelpers.extends(
                    { "data-testid": void 0 },
                    (e || (e = r("stylex"))).props(
                      h.footerMessage,
                      o("WAWebUISpacing").uiPadding.vert14,
                      o("WAWebUISpacing").uiPadding.horiz18,
                    ),
                    { children: ae },
                  ),
                ),
              ],
            })));
      }
      var le;
      I ||
        (le = c.jsx(o("WAWebComposeBox.react").PlaceholderComposeBox, {
          chat: i,
          handleFocus: function () {
            var e;
            C == null || (e = C.current) == null || e.focus();
          },
        }));
      var se = function (t) {
        var e = t.onMenuComplete,
          n = t.questionReplyQuotedMessage,
          a = t.questionType,
          l = t.threadId,
          s = o("WAWebMediaCapture").start({
            type: o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
              .CAMERA,
            featureSurface: o("WAWebGuidePopup.react").FeatureSurface
              .PHOTO_CAPTURE,
          }),
          u = s.asyncStream,
          d = s.disposeStream;
        ((j.current = d),
          r("WAPromiseRaceAbort")(u, Q)
            .then(function (t) {
              t &&
                (o("WAWebCmd").Cmd.closeContextMenu(),
                o("WAWebCmd").Cmd.closeTooltip(),
                o("WAWebDrawerManager").DrawerManager.closeDrawerRight(),
                o("WAWebModalManager").ModalManager.close(),
                o("WAWebDrawerManager").DrawerManager.openDrawerMid(
                  c.jsx(
                    o("WAWebCaptureMediaDrawerLoadable")
                      .CaptureMediaDrawerLoadable,
                    {
                      chat: o("WAWebStateUtils").unproxy(i),
                      stream: t,
                      disposeStream: j.current,
                      onCaptureSent: function () {
                        (e(!0),
                          o(
                            "WAWebAttachmentMenuLogger",
                          ).AttachmentMenuLogger.logAttachmentSend(
                            i,
                            o("WAWebAttachmentMenuLogger").AttachmentMenuTarget
                              .CAMERA,
                          ));
                      },
                      onCancel: function () {
                        o(
                          "WAWebAttachmentMenuLogger",
                        ).AttachmentMenuLogger.logAttachmentCancel(
                          i,
                          o("WAWebAttachmentMenuLogger").AttachmentMenuTarget
                            .CAMERA,
                        );
                      },
                      onClose: function () {
                        return o(
                          "WAWebDrawerManager",
                        ).DrawerManager.closeDrawerMid();
                      },
                      questionType: a,
                      questionReplyQuotedMessage: n,
                      threadId: l != null ? l : y,
                    },
                  ),
                  {
                    transition: "slide-up",
                    uim: K,
                    focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                  },
                ));
            })
            .catch(
              o("WAFilteredCatch").filteredCatch(
                o("WAWebMiscErrors").GetUserMedia.NotAllowedError,
                function () {
                  var e;
                  o("WAWebModalManager").ModalManager.open(
                    c.jsx((e = o("WAWebGuidePopup.react")).GuidePopup, {
                      messaging: e.Messaging.CAMERA_FAIL,
                      type: e.GuidePopupType.GUIDE_UNBLOCK,
                      featureSurface: e.FeatureSurface.PHOTO_CAPTURE,
                    }),
                  );
                },
              ),
            )
            .catch(
              o("WAFilteredCatch").filteredCatch(
                o("WAWebMiscErrors").GetUserMedia.GetUserMediaError,
                function () {
                  var e;
                  o("WAWebModalManager").ModalManager.open(
                    c.jsx((e = o("WAWebGuidePopup.react")).GuidePopup, {
                      messaging: e.Messaging.CAMERA_MISSING,
                      type: e.GuidePopupType.GUIDE_NONE,
                      featureSurface: e.FeatureSurface.PHOTO_CAPTURE,
                    }),
                  );
                },
              ),
            )
            .finally(function () {
              o(
                "WAWebPrepareMessageSendingAction",
              ).prepareChatForMessageSending(i);
            }));
      };
      o("useWAWebListener").useListener(
        o("WAWebCmd").Cmd,
        "open_capture_media",
        se,
      );
      var ue = L.isLidDeprecated
          ? c.jsx(
              r("WAWebConversationDeprecatedLidChatBanner.react"),
              { latestLid: L.latestLid },
              "deprecated-lid",
            )
          : null,
        ce = m(
          function () {
            (o(
              "WAWebForwardActionUserJourneyLogger",
            ).ForwardActionUserJourneyLogger.selectTappedInContextMenu(),
              w());
          },
          [w],
        ),
        de = m(
          function () {
            (o(
              "WAWebForwardActionUserJourneyLogger",
            ).ForwardActionUserJourneyLogger.selectTappedInMoreMenu(),
              w());
          },
          [w],
        ),
        me = [
          ue,
          o("WAWebSignupGating").isSignupAGMEnabled()
            ? c.jsx(
                r("WAWebSignupLoadingSpinner.react"),
                { chat: i },
                "signup-loading",
              )
            : null,
        ],
        pe = {
          ref: C,
          chat: i,
          selectable: A,
          onMessageSelect: M,
          onCancelSelectMessages: N,
          msgCollection: d,
          onSelectMessages: ce,
          focusCtx: s,
          threadId: y,
          selectedMessages: F,
          notifyChatRendered: t.notifyChatRendered,
          updateOpenedChatInfo: t.updateOpenedChatInfo,
          updateCanShowSpamPanel: R,
          bottomBanners: me,
        },
        _e = c.jsx(r("WAWebHeroInteraction.react"), {
          description: "ConversationMsgs",
          enableHoldTrigger: !0,
          policy: r("WAWebInteractionTracePolicy").LOAD_MESSAGES,
          children: function (t, n) {
            return c.jsx("div", {
              ref: t,
              className: "x5yr21d",
              children: c.jsx(
                r("WAWebConversationMsgs.react"),
                babelHelpers.extends({}, pe, { interaction: n }),
              ),
            });
          },
        }),
        fe = Z
          ? c.jsx(r("WAWebNewsletterSuspendedConversationPanelBody.react"), {
              isGeosuspended: ee,
              isAdminOrOwner:
                o("WAWebNewsletterMembershipUtil").iAmOwner(
                  i.newsletterMetadata,
                ) ||
                o("WAWebNewsletterMembershipUtil").iAmAdmin(
                  i.newsletterMetadata,
                ),
            })
          : _e,
        ge =
          I &&
          o("WAWebBizAiAgentStatusUtils").isChatEligibleForAiAgent(i) &&
          !o("WAWebBizAiAgentStatusUtils").shouldShowAiAgentBlockBar(i) &&
          o("WAWebBizAiAgentGating").isAiMuteUnmuteV2Enabled();
      return c.jsxs(r("WAWebGroupHistoryBundleInfoContextProvider.react"), {
        children: [
          c.jsx(r("WAWebConversationBackground.react"), {
            wallpaper: t.wallpaper,
            showDoodle: t.showDoodle,
          }),
          c.jsx(o("WAWebHeader.react").ConversationHeader, {
            chat: i,
            onSelectMessages: de,
            threadId: y,
          }),
          c.jsx(r("WAWebConversationPanelBanner.react"), {
            chat: i,
            groupMetadata: u,
          }),
          c.jsxs(
            "div",
            babelHelpers.extends(
              { className: "x1n2onr6 x1vjfegm x1cqoux5 x14yy4lh", ref: G },
              q,
              { "data-testid": void 0, children: [oe, fe] },
            ),
          ),
          V,
          ge &&
            c.jsx(
              o("WAWebBizAiThreadControlFab.react").WAWEbBizAiThreadControlFab,
              { chat: i },
            ),
          Y &&
            c.jsx("div", {
              className: "xo1ph6p x2lah0s",
              children: c.jsx(
                o("WAWebCappingWarningBannerLoadable")
                  .CappingWarningBannerLoadable,
                { onClose: J },
              ),
            }),
          ne,
          le,
          c.jsx(r("WAWebVelocityTransitionGroup"), {
            transitionName: "slide-up",
            children: re,
          }),
        ],
      });
    }
    ((y.displayName = y.name + " [from " + i.id + "]"), (l.default = y));
  },
  98,
);
