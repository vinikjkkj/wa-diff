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
    "react-compiler-runtime",
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
        i = o("react-compiler-runtime").c(150),
        l = t.chat,
        s = t.chatEntryPoint,
        u = t.focusCtx,
        d = t.groupMetadata,
        m = t.msgCollection,
        _ = t.threadId,
        y = f(null),
        S = g(!1),
        R = S[0],
        L = S[1],
        E;
      i[0] !== R
        ? ((E = function (t) {
            t !== R && L(t);
          }),
          (i[0] = R),
          (i[1] = E))
        : (E = i[1]);
      var k = E,
        I;
      i[2] !== l
        ? ((I = o(
            "WAWebConversationDeprecatedLidChatUtils",
          ).getLidDeprecatedInfo(l)),
          (i[2] = l),
          (i[3] = I))
        : (I = i[3]);
      var T = I;
      (r("useWAWebShowCommunitySubjectSyncIssue")(l),
        r("useWAWebConversationPanelOpenChat")(l),
        r("useWAWebCommunityNux")(l),
        r("useWAWebConversationPanelEphemeralNux")(l));
      var D = o("WAWebChatGetters").getIsNewsletter(l)
          ? "channel-thread"
          : "chat",
        x = o("WAWebChatGetters").getIsNewsletter(l)
          ? (n = l.newsletterMetadata) == null
            ? void 0
            : n.size
          : (a = l.groupMetadata) == null
            ? void 0
            : a.participants.length,
        $ = o("WAWebChatGetters").getIsNewsletter(l) ? l.id : void 0,
        P;
      i[4] !== l.groupMetadata
        ? ((P =
            l.groupMetadata == null
              ? void 0
              : o("WAWebGroupType").groupTypeToWamEnum(
                  o("WAWebGroupType").getGroupTypeFromGroupMetadata(
                    l.groupMetadata,
                  ),
                )),
          (i[4] = l.groupMetadata),
          (i[5] = P))
        : (P = i[5]);
      var N;
      i[6] !== x || i[7] !== $ || i[8] !== P
        ? ((N = { groupSize: x, channelWid: $, typeOfGroup: P }),
          (i[6] = x),
          (i[7] = $),
          (i[8] = P),
          (i[9] = N))
        : (N = i[9]);
      var M;
      (i[10] !== D || i[11] !== N
        ? ((M = { surface: D, extras: N }),
          (i[10] = D),
          (i[11] = N),
          (i[12] = M))
        : (M = i[12]),
        o("WAWebTimeSpentLoggingNavigation").useTsNavigation(M));
      var w;
      (i[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = function () {
            var e;
            return (e = y.current) == null
              ? void 0
              : e.getRenderedMessageCount();
          }),
          (i[13] = w))
        : (w = i[13]),
        r("useWAWebConversationPanelMetrics")(l, w));
      var A;
      (i[14] !== l || i[15] !== s
        ? ((A = { chat: l, chatEntryPoint: s }),
          (i[14] = l),
          (i[15] = s),
          (i[16] = A))
        : (A = i[16]),
        o("useWAWebNewsletterOpenMetrics").useNewsletterOpenMetrics(A));
      var F;
      (i[17] !== l || i[18] !== s
        ? ((F = { chat: l, chatEntryPoint: s }),
          (i[17] = l),
          (i[18] = s),
          (i[19] = F))
        : (F = i[19]),
        o("useWAWebMetaAIChatOpenMetrics").useMetaAIChatOpenMetrics(F),
        o("useWAWebDynamicModesCacheWarmup").useWAWebDynamicModesCacheWarmup(l),
        o("useWAWebChatOpenMetrics").useChatOpenMetrics(l),
        o("useWAWebBroadcastThreadOpenMetrics").useBroadcastThreadOpenMetrics(
          l,
        ),
        r("useWAWebConversationPanelChatActionListeners")());
      var O;
      (i[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((O = ["isReadOnly", "isAnnounceGrpRestrict", "newsletterMetadata"]),
          (i[20] = O))
        : (O = i[20]),
        o("useWAWebModelValues").useModelValues(l, O));
      var B = r("useWAWebNewsletterPrivacyBanner")(l),
        W = r("useWAWebConversationPanelCanCompose")(l),
        q = W[0],
        U = W[1],
        V;
      i[21] !== q || i[22] !== l
        ? ((V = function () {
            return (
              !q &&
              o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(l) &&
              o("WAWebConversationSpamUtils").shouldShowSpamPanel(l)
            );
          }),
          (i[21] = q),
          (i[22] = l),
          (i[23] = V))
        : (V = i[23]);
      var H = g(V),
        G = H[0],
        z = H[1],
        j = r("useWAWebConversationPanelMessageSelection")(l.msgs),
        K = j.handleCancelSelection,
        Q = j.handleMessageSelect,
        X = j.handleSelectMessages,
        Y = j.selectable,
        J = j.selectedMessages,
        Z = j.selectionMode,
        ee;
      i[24] !== q || i[25] !== K || i[26] !== _
        ? ((ee = { canCompose: q, onDragEnter: K, threadId: _ }),
          (i[24] = q),
          (i[25] = K),
          (i[26] = _),
          (i[27] = ee))
        : (ee = i[27]);
      var te = r("useWAWebConversationPanelDragHandlers")(l, ee),
        ne = te[0],
        re = te[1],
        oe,
        ae,
        ie;
      i[28] === Symbol.for("react.memo_cache_sentinel")
        ? ((oe = function (t) {
            var e;
            return (e = y.current) == null ? void 0 : e.setScrollBottom(t);
          }),
          (ae = function () {
            var e;
            return (e = y.current) == null ? void 0 : e.getScrollBottom();
          }),
          (ie = function (t) {
            var e;
            return (e = y.current) == null
              ? void 0
              : e.onComposeHeightChange(t);
          }),
          (i[28] = oe),
          (i[29] = ae),
          (i[30] = ie))
        : ((oe = i[28]), (ae = i[29]), (ie = i[30]));
      var le;
      i[31] !== q || i[32] !== Y
        ? ((le = {
            canCompose: q,
            selectable: Y,
            setScrollBottom: oe,
            getScrollBottom: ae,
            onComposeHeightChange: ie,
          }),
          (i[31] = q),
          (i[32] = Y),
          (i[33] = le))
        : (le = i[33]);
      var se = r("useWAWebConversationPanelFiller.react")(le),
        ue = se.filler,
        ce = se.handleComposeHeightChange,
        de = se.msgPanelRef,
        me;
      i[34] === Symbol.for("react.memo_cache_sentinel")
        ? ((me = function () {
            var e;
            (e = y.current) == null || e.focus();
          }),
          (i[34] = me))
        : (me = i[34]);
      var pe = me,
        _e = f(null),
        fe = r("useWAWebUIM")(),
        ge = r("useWAWebUnmountSignal")(),
        he,
        ye;
      (i[35] === Symbol.for("react.memo_cache_sentinel")
        ? ((he = function () {
            return function () {
              (_e.current == null || _e.current(),
                o("WAWebSideNavButtonsActivityModel").getLastActiveButton() ==
                  null &&
                  o("WAWebDrawerManager").DrawerManager.closeDrawerMid());
            };
          }),
          (ye = []),
          (i[35] = he),
          (i[36] = ye))
        : ((he = i[35]), (ye = i[36])),
        p(he, ye));
      var Ce;
      (i[37] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ce = { onFocus: pe }), (i[37] = Ce))
        : (Ce = i[37]),
        r("useWAWebConversationPanelActionListeners")(Ce),
        o("WAWebUseMaybeRequestWelcomeMessage").useMaybeRequestWelcomeMessage(
          l,
        ));
      var be = r("useWAWebCappingWarningBanner.react")(l),
        ve = be[0],
        Se = be[1],
        Re;
      i[38] === Symbol.for("react.memo_cache_sentinel")
        ? ((Re = ["change:suspended"]), (i[38] = Re))
        : (Re = i[38]);
      var Le;
      i[39] !== l
        ? ((Le = function () {
            var e;
            return (
              o("WAWebChatGetters").getIsNewsletter(l) &&
              ((e = l.newsletterMetadata) == null ? void 0 : e.suspended) === !0
            );
          }),
          (i[39] = l),
          (i[40] = Le))
        : (Le = i[40]);
      var Ee = r("useWAWebEventTargetValue")(l.newsletterMetadata, Re, Le),
        ke;
      i[41] === Symbol.for("react.memo_cache_sentinel")
        ? ((ke = ["change:geosuspended"]), (i[41] = ke))
        : (ke = i[41]);
      var Ie;
      i[42] !== l
        ? ((Ie = function () {
            var e;
            return (
              o("WAWebChatGetters").getIsNewsletter(l) &&
              ((e = l.newsletterMetadata) == null ? void 0 : e.geosuspended) ===
                !0
            );
          }),
          (i[42] = l),
          (i[43] = Ie))
        : (Ie = i[43]);
      var Te = r("useWAWebEventTargetValue")(l.newsletterMetadata, ke, Ie),
        De;
      i[44] === Symbol.for("react.memo_cache_sentinel")
        ? ((De = function (t) {
            var e;
            (e = y.current) == null || e.onPageUpDown(t);
          }),
          (i[44] = De))
        : (De = i[44]);
      var xe = De,
        $e,
        Pe,
        Ne = null;
      if (
        o(
          "WAWebCongratulationsAnimationsGatingUtils",
        ).isCongratulationsAnimationsEnabled()
      ) {
        var Me;
        (i[45] !== l
          ? ((Me = c.jsx(r("WAWebCongratulationsAnimationConversation.react"), {
              chat: l,
            })),
            (i[45] = l),
            (i[46] = Me))
          : (Me = i[46]),
          (Ne = Me));
      }
      if (Y) {
        var we = J,
          Ae;
        i[47] !== l || i[48] !== K || i[49] !== Z || i[50] !== we
          ? ((Ae = c.jsx(o("WAWebMultiSelectBar.react").MultiSelectBar, {
              chat: l,
              selectedMessages: we,
              noSortOnForward: !1,
              onCancel: K,
              entryPoint: o("WAWebMultiSelectBar.react")
                .MultiSelectBarEntryPoint.CONVERSATION_PANEL,
              mode: Z,
            })),
            (i[47] = l),
            (i[48] = K),
            (i[49] = Z),
            (i[50] = we),
            (i[51] = Ae))
          : (Ae = i[51]);
        var Fe;
        (i[52] !== K || i[53] !== Ae
          ? ((Fe = c.jsx(o("WAWebUimUie.react").UIE, {
              displayName: "MultiSelect",
              escapable: !0,
              requestDismiss: K,
              children: Ae,
            })),
            (i[52] = K),
            (i[53] = Ae),
            (i[54] = Fe))
          : (Fe = i[54]),
          (Pe = Fe));
        var Oe;
        (i[55] === Symbol.for("react.memo_cache_sentinel")
          ? ((Oe = c.jsx("footer", {
              className:
                "_amm5 x1n2onr6 x1vjfegm x9f619 x1okw0bk xo1ph6p x122xwht",
            })),
            (i[55] = Oe))
          : (Oe = i[55]),
          ($e = Oe));
      } else if (q) {
        var Be;
        (i[56] !== R ||
        i[57] !== l ||
        i[58] !== ne ||
        i[59] !== ce ||
        i[60] !== _
          ? ((Be = c.jsx(o("WAWebComposeBox.react").ComposeBox, {
              chat: l,
              threadId: _,
              ref: ne,
              canShowSpamPanel: R,
              onComposeHeightChange: ce,
              onPageUpDown: xe,
            })),
            (i[56] = R),
            (i[57] = l),
            (i[58] = ne),
            (i[59] = ce),
            (i[60] = _),
            (i[61] = Be))
          : (Be = i[61]),
          ($e = Be));
      } else {
        var We = U != null ? U : B,
          qe = null;
        if (
          R &&
          G &&
          o("WAWebFrontendChatGetters").getShouldAppearInList(l) &&
          l.msgs.length > 0
        ) {
          var Ue;
          i[62] !== l
            ? ((Ue = function () {
                (z(!1),
                  o("WAWebConversationSpamUtils").acknowledgeGroupAsNotSpam(l));
              }),
              (i[62] = l),
              (i[63] = Ue))
            : (Ue = i[63]);
          var Ve;
          i[64] === Symbol.for("react.memo_cache_sentinel")
            ? ((Ve = function () {
                return z(!1);
              }),
              (i[64] = Ve))
            : (Ve = i[64]);
          var He;
          (i[65] !== l || i[66] !== Ue
            ? ((He = c.jsx(r("WAWebAnimationGroupItem.react"), {
                children: c.jsx(r("WAWebConversationSpam.react"), {
                  chat: l,
                  onClickNotSpam: Ue,
                  onClickDismissSpam: Ve,
                }),
              })),
              (i[65] = l),
              (i[66] = Ue),
              (i[67] = He))
            : (He = i[67]),
            (qe = He));
        }
        var Ge;
        (i[68] !== We || i[69] !== qe
          ? ((Ge =
              We != null &&
              c.jsxs("footer", {
                "data-testid": void 0,
                className:
                  "_amm5 x1n2onr6 x1vjfegm x9f619 x1okw0bk xo1ph6p x122xwht",
                children: [
                  qe,
                  c.jsx(
                    "div",
                    babelHelpers.extends(
                      { "data-testid": void 0 },
                      (e || (e = r("stylex"))).props(
                        h.footerMessage,
                        o("WAWebUISpacing").uiPadding.vert14,
                        o("WAWebUISpacing").uiPadding.horiz18,
                      ),
                      { children: We },
                    ),
                  ),
                ],
              })),
            (i[68] = We),
            (i[69] = qe),
            (i[70] = Ge))
          : (Ge = i[70]),
          ($e = Ge));
      }
      var ze;
      if (!q) {
        var je;
        i[71] === Symbol.for("react.memo_cache_sentinel")
          ? ((je = function () {
              var e;
              y == null || (e = y.current) == null || e.focus();
            }),
            (i[71] = je))
          : (je = i[71]);
        var Ke;
        (i[72] !== l
          ? ((Ke = c.jsx(o("WAWebComposeBox.react").PlaceholderComposeBox, {
              chat: l,
              handleFocus: je,
            })),
            (i[72] = l),
            (i[73] = Ke))
          : (Ke = i[73]),
          (ze = Ke));
      }
      var Qe;
      i[74] !== l || i[75] !== _ || i[76] !== fe || i[77] !== ge
        ? ((Qe = function (t) {
            var e = t.onMenuComplete,
              n = t.questionReplyQuotedMessage,
              a = t.questionType,
              i = t.threadId,
              s = o("WAWebMediaCapture").start({
                type: o("WAWebMediaCaptureStreamType")
                  .WAWebMediaCaptureStreamType.CAMERA,
                featureSurface: o("WAWebGuidePopup.react").FeatureSurface
                  .PHOTO_CAPTURE,
              }),
              u = s.asyncStream,
              d = s.disposeStream;
            ((_e.current = d),
              r("WAPromiseRaceAbort")(u, ge)
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
                          chat: o("WAWebStateUtils").unproxy(l),
                          stream: t,
                          disposeStream: _e.current,
                          onCaptureSent: function () {
                            (e(!0),
                              o(
                                "WAWebAttachmentMenuLogger",
                              ).AttachmentMenuLogger.logAttachmentSend(
                                l,
                                o("WAWebAttachmentMenuLogger")
                                  .AttachmentMenuTarget.CAMERA,
                              ));
                          },
                          onCancel: function () {
                            o(
                              "WAWebAttachmentMenuLogger",
                            ).AttachmentMenuLogger.logAttachmentCancel(
                              l,
                              o("WAWebAttachmentMenuLogger")
                                .AttachmentMenuTarget.CAMERA,
                            );
                          },
                          onClose: v,
                          questionType: a,
                          questionReplyQuotedMessage: n,
                          threadId: i != null ? i : _,
                        },
                      ),
                      {
                        transition: "slide-up",
                        uim: fe,
                        focusType: o("WAWebKeyboardTabUtils").FocusType
                          .TABBABLE,
                      },
                    ));
                })
                .catch(
                  o("WAFilteredCatch").filteredCatch(
                    o("WAWebMiscErrors").GetUserMedia.NotAllowedError,
                    b,
                  ),
                )
                .catch(
                  o("WAFilteredCatch").filteredCatch(
                    o("WAWebMiscErrors").GetUserMedia.GetUserMediaError,
                    C,
                  ),
                )
                .finally(function () {
                  o(
                    "WAWebPrepareMessageSendingAction",
                  ).prepareChatForMessageSending(l);
                }));
          }),
          (i[74] = l),
          (i[75] = _),
          (i[76] = fe),
          (i[77] = ge),
          (i[78] = Qe))
        : (Qe = i[78]);
      var Xe = Qe;
      o("useWAWebListener").useListener(
        o("WAWebCmd").Cmd,
        "open_capture_media",
        Xe,
      );
      var Ye;
      i[79] !== T.isLidDeprecated || i[80] !== T.latestLid
        ? ((Ye = T.isLidDeprecated
            ? c.jsx(
                r("WAWebConversationDeprecatedLidChatBanner.react"),
                { latestLid: T.latestLid },
                "deprecated-lid",
              )
            : null),
          (i[79] = T.isLidDeprecated),
          (i[80] = T.latestLid),
          (i[81] = Ye))
        : (Ye = i[81]);
      var Je = Ye,
        Ze;
      i[82] !== X
        ? ((Ze = function () {
            (o(
              "WAWebForwardActionUserJourneyLogger",
            ).ForwardActionUserJourneyLogger.selectTappedInContextMenu(),
              X());
          }),
          (i[82] = X),
          (i[83] = Ze))
        : (Ze = i[83]);
      var et = Ze,
        tt;
      i[84] !== X
        ? ((tt = function () {
            (o(
              "WAWebForwardActionUserJourneyLogger",
            ).ForwardActionUserJourneyLogger.selectTappedInMoreMenu(),
              X());
          }),
          (i[84] = X),
          (i[85] = tt))
        : (tt = i[85]);
      var nt = tt,
        rt;
      i[86] !== l
        ? ((rt = o("WAWebSignupGating").isSignupAGMEnabled()
            ? c.jsx(
                r("WAWebSignupLoadingSpinner.react"),
                { chat: l },
                "signup-loading",
              )
            : null),
          (i[86] = l),
          (i[87] = rt))
        : (rt = i[87]);
      var ot;
      i[88] !== Je || i[89] !== rt
        ? ((ot = [Je, rt]), (i[88] = Je), (i[89] = rt), (i[90] = ot))
        : (ot = i[90]);
      var at = ot,
        it;
      i[91] !== l ||
      i[92] !== at ||
      i[93] !== u ||
      i[94] !== k ||
      i[95] !== K ||
      i[96] !== Q ||
      i[97] !== et ||
      i[98] !== m ||
      i[99] !== t.notifyChatRendered ||
      i[100] !== t.updateOpenedChatInfo ||
      i[101] !== Y ||
      i[102] !== J ||
      i[103] !== _
        ? ((it = {
            ref: y,
            chat: l,
            selectable: Y,
            onMessageSelect: Q,
            onCancelSelectMessages: K,
            msgCollection: m,
            onSelectMessages: et,
            focusCtx: u,
            threadId: _,
            selectedMessages: J,
            notifyChatRendered: t.notifyChatRendered,
            updateOpenedChatInfo: t.updateOpenedChatInfo,
            updateCanShowSpamPanel: k,
            bottomBanners: at,
          }),
          (i[91] = l),
          (i[92] = at),
          (i[93] = u),
          (i[94] = k),
          (i[95] = K),
          (i[96] = Q),
          (i[97] = et),
          (i[98] = m),
          (i[99] = t.notifyChatRendered),
          (i[100] = t.updateOpenedChatInfo),
          (i[101] = Y),
          (i[102] = J),
          (i[103] = _),
          (i[104] = it))
        : (it = i[104]);
      var lt = it,
        st;
      i[105] !== lt
        ? ((st = c.jsx(r("WAWebHeroInteraction.react"), {
            description: "ConversationMsgs",
            enableHoldTrigger: !0,
            policy: r("WAWebInteractionTracePolicy").LOAD_MESSAGES,
            children: function (t, n) {
              return c.jsx("div", {
                ref: t,
                className: "x5yr21d",
                children: c.jsx(
                  r("WAWebConversationMsgs.react"),
                  babelHelpers.extends({}, lt, { interaction: n }),
                ),
              });
            },
          })),
          (i[105] = lt),
          (i[106] = st))
        : (st = i[106]);
      var ut = st,
        ct;
      i[107] !== l.newsletterMetadata ||
      i[108] !== ut ||
      i[109] !== Te ||
      i[110] !== Ee
        ? ((ct = Ee
            ? c.jsx(r("WAWebNewsletterSuspendedConversationPanelBody.react"), {
                isGeosuspended: Te,
                isAdminOrOwner:
                  o("WAWebNewsletterMembershipUtil").iAmOwner(
                    l.newsletterMetadata,
                  ) ||
                  o("WAWebNewsletterMembershipUtil").iAmAdmin(
                    l.newsletterMetadata,
                  ),
              })
            : ut),
          (i[107] = l.newsletterMetadata),
          (i[108] = ut),
          (i[109] = Te),
          (i[110] = Ee),
          (i[111] = ct))
        : (ct = i[111]);
      var dt = ct,
        mt;
      i[112] !== q || i[113] !== l
        ? ((mt =
            q &&
            o("WAWebBizAiAgentStatusUtils").isChatEligibleForAiAgent(l) &&
            !o("WAWebBizAiAgentStatusUtils").shouldShowAiAgentBlockBar(l) &&
            o("WAWebBizAiAgentGating").isAiMuteUnmuteV2Enabled()),
          (i[112] = q),
          (i[113] = l),
          (i[114] = mt))
        : (mt = i[114]);
      var pt = mt,
        _t;
      i[115] !== t.showDoodle || i[116] !== t.wallpaper
        ? ((_t = c.jsx(r("WAWebConversationBackground.react"), {
            wallpaper: t.wallpaper,
            showDoodle: t.showDoodle,
          })),
          (i[115] = t.showDoodle),
          (i[116] = t.wallpaper),
          (i[117] = _t))
        : (_t = i[117]);
      var ft;
      i[118] !== l || i[119] !== nt || i[120] !== _
        ? ((ft = c.jsx(o("WAWebHeader.react").ConversationHeader, {
            chat: l,
            onSelectMessages: nt,
            threadId: _,
          })),
          (i[118] = l),
          (i[119] = nt),
          (i[120] = _),
          (i[121] = ft))
        : (ft = i[121]);
      var gt;
      i[122] !== l || i[123] !== d
        ? ((gt = c.jsx(r("WAWebConversationPanelBanner.react"), {
            chat: l,
            groupMetadata: d,
          })),
          (i[122] = l),
          (i[123] = d),
          (i[124] = gt))
        : (gt = i[124]);
      var ht;
      i[125] === Symbol.for("react.memo_cache_sentinel")
        ? ((ht = "x1n2onr6 x1vjfegm x1cqoux5 x14yy4lh"), (i[125] = ht))
        : (ht = i[125]);
      var yt;
      i[126] !== Ne || i[127] !== dt || i[128] !== re || i[129] !== de
        ? ((yt = c.jsxs(
            "div",
            babelHelpers.extends({ className: ht, ref: de }, re, {
              "data-testid": void 0,
              children: [Ne, dt],
            }),
          )),
          (i[126] = Ne),
          (i[127] = dt),
          (i[128] = re),
          (i[129] = de),
          (i[130] = yt))
        : (yt = i[130]);
      var Ct;
      i[131] !== l || i[132] !== pt
        ? ((Ct =
            pt &&
            c.jsx(
              o("WAWebBizAiThreadControlFab.react").WAWEbBizAiThreadControlFab,
              { chat: l },
            )),
          (i[131] = l),
          (i[132] = pt),
          (i[133] = Ct))
        : (Ct = i[133]);
      var bt;
      i[134] !== Se || i[135] !== ve
        ? ((bt =
            ve &&
            c.jsx("div", {
              className: "xo1ph6p x2lah0s",
              children: c.jsx(
                o("WAWebCappingWarningBannerLoadable")
                  .CappingWarningBannerLoadable,
                { onClose: Se },
              ),
            })),
          (i[134] = Se),
          (i[135] = ve),
          (i[136] = bt))
        : (bt = i[136]);
      var vt;
      i[137] !== Pe
        ? ((vt = c.jsx(r("WAWebVelocityTransitionGroup"), {
            transitionName: "slide-up",
            children: Pe,
          })),
          (i[137] = Pe),
          (i[138] = vt))
        : (vt = i[138]);
      var St;
      return (
        i[139] !== $e ||
        i[140] !== ue ||
        i[141] !== ze ||
        i[142] !== _t ||
        i[143] !== ft ||
        i[144] !== gt ||
        i[145] !== yt ||
        i[146] !== Ct ||
        i[147] !== bt ||
        i[148] !== vt
          ? ((St = c.jsxs(
              r("WAWebGroupHistoryBundleInfoContextProvider.react"),
              { children: [_t, ft, gt, yt, ue, Ct, bt, $e, ze, vt] },
            )),
            (i[139] = $e),
            (i[140] = ue),
            (i[141] = ze),
            (i[142] = _t),
            (i[143] = ft),
            (i[144] = gt),
            (i[145] = yt),
            (i[146] = Ct),
            (i[147] = bt),
            (i[148] = vt),
            (i[149] = St))
          : (St = i[149]),
        St
      );
    }
    function C() {
      var e;
      o("WAWebModalManager").ModalManager.open(
        c.jsx((e = o("WAWebGuidePopup.react")).GuidePopup, {
          messaging: e.Messaging.CAMERA_MISSING,
          type: e.GuidePopupType.GUIDE_NONE,
          featureSurface: e.FeatureSurface.PHOTO_CAPTURE,
        }),
      );
    }
    function b() {
      var e;
      o("WAWebModalManager").ModalManager.open(
        c.jsx((e = o("WAWebGuidePopup.react")).GuidePopup, {
          messaging: e.Messaging.CAMERA_FAIL,
          type: e.GuidePopupType.GUIDE_UNBLOCK,
          featureSurface: e.FeatureSurface.PHOTO_CAPTURE,
        }),
      );
    }
    function v() {
      return o("WAWebDrawerManager").DrawerManager.closeDrawerMid();
    }
    l.default = y;
  },
  98,
);
