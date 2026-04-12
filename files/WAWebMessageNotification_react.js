__d(
  "WAWebMessageNotification.react",
  [
    "fbt",
    "invariant",
    "WALogger",
    "WANullthrows",
    "WAWebABProps",
    "WAWebABPropsSaga",
    "WAWebAlertErrorIcon.react",
    "WAWebBizBot1pLearnMore.react",
    "WAWebBizBotConsumerContentVariant",
    "WAWebBizCoexGatingUtils",
    "WAWebBizGatingUtils",
    "WAWebBotGroupGatingUtils",
    "WAWebBotLearnMore.react",
    "WAWebBotProfileGetters",
    "WAWebBotUtils",
    "WAWebBusinessBroadcastHomeFlowLoadable",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebBusinessDataSharingIcon.react",
    "WAWebCAPIGroupAboutModal.react",
    "WAWebCagPhoneNumberPrivacyNux.react",
    "WAWebCallCollection",
    "WAWebCallLogMsgData.flow",
    "WAWebChatAssignmentIcon.react",
    "WAWebChatAssignmentLogEvents.flow",
    "WAWebChatCollection",
    "WAWebChatConstants",
    "WAWebChatEphemerality",
    "WAWebChatGetters",
    "WAWebChatMessageSearch",
    "WAWebClock",
    "WAWebCmd",
    "WAWebConsumerTransparencyModalDialog.react",
    "WAWebContactCollection",
    "WAWebDOIntroPopup.react",
    "WAWebDailyAggregatedStats",
    "WAWebDefaultEphemeralityDrawer.react",
    "WAWebDialpadSmallIcon.react",
    "WAWebDotTwoLoopsIntersectedIcon.react",
    "WAWebDoubleChevronInCircleIcon.react",
    "WAWebDrawerManager",
    "WAWebEmojiText.react",
    "WAWebEventsFormatEventEditNotification",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFeatureFlagName",
    "WAWebFormatCTAText",
    "WAWebFormatE2ENotification",
    "WAWebFormatEphemeralSetting",
    "WAWebFormatNotificationTemplateModalText",
    "WAWebFormatNotificationTemplateText",
    "WAWebFormatPinInChatNotification",
    "WAWebFormatSharePhoneNumber",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebGroupCallDropdownWithTrigger.react",
    "WAWebInfoFilledIcon.react",
    "WAWebL10N",
    "WAWebLid1X1MigrationGating",
    "WAWebLimitSharingUIUtils",
    "WAWebLogRequestPhoneNumber",
    "WAWebLogSystemMessageClick",
    "WAWebMarketingMessagesFeedbackResumeConfirmationLoadable",
    "WAWebMarketingMessagesFeedbackStopConfirmationLoadable",
    "WAWebMessageNotificationCallLog.react",
    "WAWebMessageNotificationHelpers.react",
    "WAWebMiscGatingUtils",
    "WAWebMmSignalSharingUIUtils",
    "WAWebModalManager",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebNotificationTemplateFaq",
    "WAWebNux",
    "WAWebOpenBotGroupOpenAddedModal.react",
    "WAWebOpenCoexSystemMessageModal.react",
    "WAWebOpenSystemMessageModal",
    "WAWebPerCustomerDataSharingUtils",
    "WAWebPnhCagDailyUtils",
    "WAWebPollsFormatPollAddOptionNotification",
    "WAWebPreCallUserJourneyLogger",
    "WAWebPrinaUtils",
    "WAWebPrivacyHighlightDailyUtils",
    "WAWebSagaModal.react",
    "WAWebSagaV1Modal.react",
    "WAWebSessionTransparencyNotification",
    "WAWebSharePhoneNumberModal.react",
    "WAWebSingleChevronInCircleIcon.react",
    "WAWebSpinner.react",
    "WAWebStateUtils",
    "WAWebSupportAIInfoNuxLoadable",
    "WAWebSystemMessageGatingUtils",
    "WAWebSystemMessageWithSingleCTA.react",
    "WAWebTeeBotGroupTeeAddedModal.react",
    "WAWebText.react",
    "WAWebUserPrefsMeUser",
    "WAWebVoipActivityTracker",
    "WAWebVoipGatingUtils",
    "WAWebVoipOngoingCallCollection",
    "WAWebVoipStartCall",
    "WAWebVoipWaCallEnums",
    "WAWebWamEnumCallFromUi",
    "WAWebWamEnumDisappearingModeEntryPointType",
    "WAWebWamEnumEntryPoint",
    "WAWebWamEnumLobbyEntryPointType",
    "WAWebWamEnumMmUserControlsEntryPoint",
    "WAWebWamEnumPnhActionType",
    "WAWebWamEnumPnhChatTypeType",
    "WAWebWamEnumPnhEntryPointType",
    "WAWebWamEnumPnhMessageChatParty",
    "WAWebWamEnumSmbDataSharingConsentScreenEntryPoint",
    "WAWebWamEnumSubSurface",
    "WAWebWamEnumSurfaceType",
    "WAWebWid",
    "WAWebWidFactory",
    "WAWebWidFormat",
    "countWhere",
    "react",
    "useWAWebGetFeatureFlag",
    "useWAWebIsWinHybridJoinableCallsEnabled",
    "useWAWebModelValues",
    "useWAWebMsgValues",
    "useWAWebNux",
    "useWAWebOptionalBotProfileValues",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    var e = ["ref"],
      c,
      d,
      m,
      p,
      _,
      f,
      g = f || (f = o("react")),
      h = f,
      y = h.useEffect,
      C = h.useImperativeHandle,
      b = h.useMemo,
      v = h.useRef;
    function S(e) {
      var t = e.chat,
        n = e.contact,
        a = e.displayAuthor,
        i = e.elRef,
        l = e.forwardClickRef,
        u = e.isMissedCall,
        d = e.isVideo,
        m = e.msg,
        p = b(function () {
          return new (o(
            "WAWebPreCallUserJourneyLogger",
          ).PreCallUserJourneyLogger)();
        }, []),
        _ = o("WAWebMsgGetters").getCallDuration(m),
        f = o("WAWebMsgGetters").getCallParticipants(m),
        h = o("WAWebClock").Clock.callDurationStrSimple(_ != null ? _ : 0),
        y =
          f != null
            ? r("countWhere")(f, function (e) {
                return (
                  e.outcome ===
                  o("WAWebVoipWaCallEnums").CallParticipantState.Connected
                );
              })
            : 0,
        C =
          _ != null && _ > 0
            ? s._(/*BTDS*/ "{time} \u2022 {joined-count} joined", [
                s._param("time", h),
                s._param("joined-count", y),
              ])
            : null,
        v = function () {
          (o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] group ICCE bubble clicked, opening dropdown",
              ])),
          ),
            o("WAWebVoipActivityTracker").startUiActivityTracking(),
            o("WAWebVoipActivityTracker").trackUiActivity(
              o("WAWebVoipActivityTracker").VoipUiActivity
                .ICCE_BUBBLE_GROUP_DROPDOWN_OPEN,
            ),
            p.clickCallDropdown(
              u
                ? o("WAWebWamEnumSubSurface").SUB_SURFACE.MISSED_ICCE_BUBBLE
                : o("WAWebWamEnumSubSurface").SUB_SURFACE
                    .ICCE_BUBBLE_OTHER_RESULT,
            ));
        };
      return g.jsx(r("WAWebGroupCallDropdownWithTrigger.react"), {
        chat: t,
        initialSubtext: C,
        isMissedCall: u,
        isVideo: d,
        logger: p,
        onDropdownOpen: v,
        trigger: function (t) {
          return g.jsx("div", {
            role: "button",
            ref: function (n) {
              ((i.current = n), t(n));
            },
            tabIndex: 0,
            children: g.jsx(r("WAWebMessageNotificationCallLog.react"), {
              ref: l,
              msg: m,
              contact: n,
              displayAuthor: a,
            }),
          });
        },
      });
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R(t) {
      var n,
        a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = i.msg,
        c = o("useWAWebModelValues").useOptionalModelValues(i.contact, [
          "id",
          "isEnterprise",
          "isContactBlocked",
          "verifiedLevel",
          "verifiedName",
          "shareOwnPn",
        ]),
        f = r("useWAWebNux")(o("WAWebNux").NUX.DO_AUTOMATIC_LABEL),
        h = f[1],
        b = v(null),
        R = o("useWAWebMsgValues").useMsgValues(i.msg.id, [
          (n = o("WAWebMsgGetters")).getId,
          n.getBody,
          n.getFrom,
          n.getType,
          n.getSubtype,
          n.getTemplateParams,
          n.getEphemeralDuration,
          n.getEphemeralSettingUser,
        ]),
        L = R[0],
        E = R[1],
        k = R[2],
        I = R[3],
        T = R[4],
        D = R[5],
        x = R[6],
        $ = R[7],
        P = o("WAWebFrontendMsgGetters").getChat(l.unsafe()),
        N = v(null),
        M = function (t) {
          var e, n;
          ((e = b.current) == null || e.click(),
            (n = N.current) == null || n.handleKeyActivation(t));
        };
      (C(a, function () {
        return { handleKeyActivation: M };
      }),
        y(function () {
          if (
            I === o("WAWebMsgType").MSG_TYPE.E2E_NOTIFICATION &&
            T === "encrypt" &&
            o("WAWebMiscGatingUtils").isPrivacyNarrativeV1Enabled() &&
            o("WAWebPrinaUtils").chatContainsGoldenBox(P)
          ) {
            var e = o("WAWebPrinaUtils").getHighlightSurfaceForGoldenBox(P.id);
            e != null &&
              o("WAWebPrivacyHighlightDailyUtils").incrementPrinaDailyCount(
                e,
                o("WAWebDailyAggregatedStats").PrinaDailyActionType
                  .NARRATIVE_APPEAR,
              );
          }
        }, []));
      var w = o("useWAWebOptionalBotProfileValues").useOptionalBotProfileValues(
          P.contact.id,
          [o("WAWebBotProfileGetters").getPosingAsProfessional],
        ),
        A = w[0],
        F = r("useWAWebGetFeatureFlag")(
          o("WAWebFeatureFlagName").FeatureFlagName.CHAT_ASSIGNMENT,
        ).enabled,
        O = o(
          "useWAWebIsWinHybridJoinableCallsEnabled",
        ).useIsWinHybridJoinableCallsEnabled(),
        B,
        W,
        q,
        U,
        V,
        H,
        G,
        z;
      switch (I) {
        case o("WAWebMsgType").MSG_TYPE.NOTIFICATION:
          W = E;
          break;
        case o("WAWebMsgType").MSG_TYPE.E2E_NOTIFICATION: {
          var j = o("WAWebStateUtils").unproxy(l);
          (j.type === o("WAWebMsgType").MSG_TYPE.E2E_NOTIFICATION ||
            u(0, 69177),
            (W = o("WAWebFormatE2ENotification").formatE2ENotification(j)),
            (z = o("WAWebFormatE2ENotification").getE2ENotificationEnum(j)),
            (q = r("WAWebFormatCTAText")({ type: I, id: j.id })));
          var K = T,
            Q = E ? o("WAWebWidFactory").createWid(E) : null,
            X = L.remote;
          o("WAWebMsgGetters").getIsCAPISupport(l)
            ? (G = function () {
                if (o("WAWebABPropsSaga").getIsSagaV1NuxEnabled())
                  o("WAWebModalManager").ModalManager.open(
                    g.jsx(
                      o("WAWebSupportAIInfoNuxLoadable")
                        .SupportAIInfoNuxLoadable,
                      {},
                    ),
                    { transition: "modal-flow" },
                  );
                else {
                  var e = o(
                      "WAWebFormatNotificationTemplateModalText",
                    ).formatFbModalText(!1, !0),
                    t = o("WAWebFaqUrl").getSupportChatSafetyFaqUrl();
                  o("WAWebOpenSystemMessageModal").openSystemMessageModal(e, t);
                }
              })
            : K === "group_transition_to_tee_bot_group"
              ? ((G = function () {
                  o("WAWebModalManager").ModalManager.open(
                    g.jsx(r("WAWebTeeBotGroupTeeAddedModal.react"), {}),
                  );
                }),
                (B = g.jsx(
                  o("WAWebMessageNotificationHelpers.react")
                    .TeeBotE2ENotificationIcon,
                  { msg: j },
                )))
              : ((G = function () {
                  o(
                    "WAWebMessageNotificationHelpers.react",
                  ).handleSecurityClick(K, Q, X, l, P.accountLid);
                }),
                (B = g.jsx(
                  o("WAWebMessageNotificationHelpers.react")
                    .E2ENotificationIcon,
                  { msg: j },
                )));
          break;
        }
        case o("WAWebMsgType").MSG_TYPE.CALL_LOG: {
          if (o("WAWebVoipGatingUtils").isCallingEnabled()) {
            var Y = o("WAWebMsgGetters").getIsVideoCall(l),
              J = o("WAWebMsgGetters").getIsMissedCall(l),
              Z = o("WAWebMsgGetters").getCallOutcome(l),
              ee =
                O &&
                o(
                  "WAWebVoipOngoingCallCollection",
                ).WAWebVoipOngoingCallCollection.get(l.id) != null;
            if (o("WAWebChatGetters").getIsGroup(P) && !ee)
              return o("WAWebVoipGatingUtils").isGroupCallingEnabled()
                ? g.jsx(S, {
                    chat: P,
                    elRef: b,
                    forwardClickRef: N,
                    isVideo: Y,
                    isMissedCall: J,
                    msg: l,
                    contact: c,
                    displayAuthor: i.displayAuthor,
                  })
                : g.jsx(r("WAWebMessageNotificationCallLog.react"), {
                    ref: N,
                    msg: l,
                    contact: c,
                    displayAuthor: i.displayAuthor,
                  });
            var te = function () {
              if (
                (o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[voip] start call video=",
                      " group=",
                      " joinable=",
                      "",
                    ])),
                  Y,
                  P.groupType,
                  ee,
                ),
                o("WAWebVoipActivityTracker").startActivityTracking(),
                o("WAWebVoipActivityTracker").startUiActivityTracking(),
                ee)
              ) {
                var e;
                (o("WAWebVoipActivityTracker").trackUiActivity(
                  o("WAWebVoipActivityTracker").VoipUiActivity
                    .ICCE_BUBBLE_CLICK_JOIN_ONGOING,
                ),
                  o("WALogger").LOG(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: joining ongoing group call",
                      ])),
                  ),
                  o("WAWebVoipStartCall").joinOngoingWAWebVoipGroupCallPN(
                    l.id.id,
                    P,
                    Y,
                    o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE
                      .CALL_LOG_MESSAGE_ONGOING,
                    ((e = r("WAWebCallCollection").activeCall) == null
                      ? void 0
                      : e.id) !== l.id.id &&
                      o("WAWebMsgGetters").getSelfOtherDeviceConnected(l) ===
                        !0 &&
                      o("WAWebVoipGatingUtils").isDeviceSwitchingEnabled(),
                  ));
              } else
                (o("WAWebVoipActivityTracker").trackUiActivity(
                  o("WAWebVoipActivityTracker").VoipUiActivity
                    .ICCE_BUBBLE_CLICK_1ON1,
                ),
                  o("WALogger").LOG(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: message notification: starting 1:1 call",
                      ])),
                  ),
                  o("WAWebVoipStartCall").startWAWebVoipCall(
                    P.contact.id,
                    Y,
                    o("WAWebWamEnumCallFromUi").CALL_FROM_UI
                      .CALL_LOG_MESSAGE_ENDED,
                    o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE
                      .NOT_OPENED,
                    Z === o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing
                      ? l.id.id
                      : null,
                  ));
            };
            return g.jsx("div", {
              role: "button",
              ref: b,
              tabIndex: 0,
              onKeyDown: te,
              onClick: te,
              children: g.jsx(r("WAWebMessageNotificationCallLog.react"), {
                ref: N,
                msg: l,
                contact: c,
                displayAuthor: i.displayAuthor,
              }),
            });
          }
          return g.jsx(r("WAWebMessageNotificationCallLog.react"), {
            ref: N,
            msg: l,
            contact: c,
            displayAuthor: i.displayAuthor,
          });
        }
        case o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE: {
          var ne;
          if (
            (o(
              "WAWebLid1X1MigrationGating",
            ).Lid1X1MigrationUtils.isLidMigrated() && (ne = P.accountLid),
            T === "change_number")
          ) {
            var re = D[0],
              oe = D[1],
              ae = D[2],
              ie = D[3],
              le = o("WAWebContactCollection").ContactCollection.get(re),
              se =
                le != null &&
                o("WAWebFrontendContactGetters").getIsMyContact(le)
                  ? o("WAWebFrontendContactGetters").getFormattedName(le)
                  : o("WAWebWidFormat").widToFormattedUser(re),
              ue = r("WAWebWid").equals(P.id, re),
              ce = r("WAWebWid").equals(P.id, ae);
            ((W =
              ce || ue
                ? s._(
                    /*BTDS*/ "{name} changed their phone number to a new number. Click to message the new number.",
                    [s._param("name", se)],
                  )
                : s._(
                    /*BTDS*/ "{name} changed their phone number. You're currently chatting with their new number.",
                    [s._param("name", se)],
                  )),
              (ce || ue) &&
                (G = function () {
                  return o(
                    "WAWebMessageNotificationHelpers.react",
                  ).handleChangeNumberClick(oe, re);
                }));
          } else if (
            T === "chat_assignment" ||
            T === "chat_assignment_unassign"
          ) {
            var de = r("WAWebFormatNotificationTemplateText")(
              o("WAWebStateUtils").unproxy(l.unsafe()),
            );
            ((W = de.text),
              (q = de.ctaText),
              o("WAWebStateUtils").unproxy(l.unsafe()),
              (B = g.jsx("div", {
                className: "x1rg5ohu x1gslohp xbelrpt x16dsc37",
                children: g.jsx(
                  o("WAWebChatAssignmentIcon.react").ChatAssignmentIcon,
                  { width: 12, height: 15 },
                ),
              })),
              F &&
                o("WAWebBizGatingUtils").chatAssignmentEnabled() &&
                (G = function () {
                  var e = o("WAWebChatCollection").ChatCollection.get(L.remote);
                  e != null &&
                    o("WAWebCmd").Cmd.assignChat(
                      e,
                      o("WAWebChatAssignmentLogEvents.flow")
                        .ChatAssignmentEntryPointType.SYSTEM_MESSAGE,
                    );
                }));
          } else if (T === "masked_thread_created") {
            var me = o("WAWebUserPrefsMeUser").getMaybeMePnUser(),
              pe = r("WAWebFormatNotificationTemplateText")(
                o("WAWebStateUtils").unproxy(l.unsafe()),
              );
            ((W = pe.text),
              (q = pe.ctaText),
              o("WAWebStateUtils").unproxy(l.unsafe()),
              (B = g.jsx("div", {
                className: "x1rg5ohu x2fvf9 xg49k01",
                children: g.jsx(
                  o("WAWebDialpadSmallIcon.react").DialpadSmallIcon,
                  { width: 16, height: 16 },
                ),
              })),
              (U = "masked_thread_created_system_message"),
              (G = function () {
                (o(
                  "WAWebLogRequestPhoneNumber",
                ).logPnhRequestRevealActionHelper(
                  o("WAWebWamEnumPnhChatTypeType").PNH_CHAT_TYPE_TYPE.CTWA,
                  o("WAWebWamEnumPnhMessageChatParty").PNH_MESSAGE_CHAT_PARTY
                    .CONSUMER,
                  o("WAWebWamEnumPnhActionType").PNH_ACTION_TYPE
                    .SHARE_PN_SHEET_APPEAR,
                  o("WAWebWamEnumPnhEntryPointType").PNH_ENTRY_POINT_TYPE
                    .SYSTEM_MESSAGE,
                ),
                  c != null && c.shareOwnPn
                    ? me != null &&
                      o("WAWebModalManager").ModalManager.open(
                        g.jsx(
                          o("WAWebSharePhoneNumberModal.react")
                            .PostSharePhoneNumberModal,
                          {
                            entryPoint: o("WAWebWamEnumPnhEntryPointType")
                              .PNH_ENTRY_POINT_TYPE.SYSTEM_MESSAGE,
                            mePnUser: me,
                          },
                        ),
                      )
                    : o("WAWebModalManager").ModalManager.open(
                        g.jsx(
                          o("WAWebSharePhoneNumberModal.react")
                            .SharePhoneNumberModal,
                          {
                            entryPoint: o("WAWebWamEnumPnhEntryPointType")
                              .PNH_ENTRY_POINT_TYPE.SYSTEM_MESSAGE,
                          },
                        ),
                      ));
              }));
          } else if (T === "cag_masked_thread_created") {
            var _e,
              fe = o("WAWebChatCollection").ChatCollection.get(L.remote),
              ge =
                fe == null || (_e = fe.groupMetadata) == null
                  ? void 0
                  : _e.parentGroup,
              he = r("WAWebFormatNotificationTemplateText")(
                o("WAWebStateUtils").unproxy(l.unsafe()),
              );
            ((W = he.text),
              (q = he.ctaText),
              o("WAWebStateUtils").unproxy(l.unsafe()),
              (B = g.jsx("div", {
                className: "x1rg5ohu x2fvf9 xg49k01",
                children: g.jsx(
                  o("WAWebDialpadSmallIcon.react").DialpadSmallIcon,
                  { width: 16, height: 16 },
                ),
              })),
              (G = function () {
                var e;
                (ge &&
                  o("WAWebPnhCagDailyUtils").incrementPnhDailyCount(
                    ge,
                    o("WAWebPnhCagDailyUtils").PnhCagDailyMetricsType
                      .PNH_INDICATOR_CLICKS_CHAT,
                  ),
                  o("WAWebModalManager").ModalManager.open(
                    fe != null &&
                      (e = fe.groupMetadata) != null &&
                      e.participants.iAmAdmin()
                      ? g.jsx(
                          o("WAWebCagPhoneNumberPrivacyNux.react")
                            .CagPhoneNumberSharedNux,
                          {},
                        )
                      : g.jsx(
                          o("WAWebCagPhoneNumberPrivacyNux.react")
                            .CagPhoneNumberHiddenNux,
                          {},
                        ),
                  ));
              }));
          } else if (
            l.subtype === "disappearing_mode" ||
            l.subtype === "disappearing_mode_update" ||
            l.subtype === "disappearing_mode_unsupported"
          ) {
            var ye = o("WAWebChatEphemerality").shouldShowEphemeralSetting(P);
            if (
              ((B = o(
                "WAWebMessageNotificationHelpers.react",
              ).renderDisappearingIcon()),
              T === "disappearing_mode")
            )
              ((W = o(
                "WAWebFormatEphemeralSetting",
              ).getDefaultDisappearingModeSystemMessageText(
                o("WAWebStateUtils").unproxy(l.unsafe()),
              )),
                ye &&
                  (G = function () {
                    o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
                      g.jsx(r("WAWebDefaultEphemeralityDrawer.react"), {
                        onClose: o("WAWebDrawerManager").closeDrawerLeft,
                        entryPoint: o(
                          "WAWebWamEnumDisappearingModeEntryPointType",
                        ).DISAPPEARING_MODE_ENTRY_POINT_TYPE.SYSTEM_MESSAGE,
                      }),
                    );
                  }));
            else if (T === "disappearing_mode_update") {
              var Ce = r("WANullthrows")(
                o("WAWebChatCollection").ChatCollection.get(l.id.remote),
              );
              ((W = o(
                "WAWebFormatEphemeralSetting",
              ).getDisappearingModeUpdateSystemMessageText(
                o("WAWebStateUtils").unproxy(l.unsafe()),
              )),
                ye &&
                  (G = function () {
                    return o(
                      "WAWebMessageNotificationHelpers.react",
                    ).handleEphemeralClick(Ce);
                  }));
            } else
              T === "disappearing_mode_unsupported" &&
                (W = o(
                  "WAWebFormatEphemeralSetting",
                ).getDMUnsupportedSystemMessageText());
          } else if (T === "sender_invite") {
            var be = r("WAWebFormatNotificationTemplateText")(
              o("WAWebStateUtils").unproxy(l.unsafe()),
            );
            ((W = be.text),
              (q = be.ctaText),
              o("WAWebStateUtils").unproxy(l.unsafe()));
          } else if (T === "biz_bot_1p_disclosure") {
            var ve = r("WAWebFormatNotificationTemplateText")(
              o("WAWebStateUtils").unproxy(l.unsafe()),
            );
            ((W = ve.text),
              (q = ve.ctaText),
              o("WAWebStateUtils").unproxy(l.unsafe()));
            var Se = o(
              "WAWebBizBotConsumerContentVariant",
            ).getBizBotConsumerContentVariant();
            ((B =
              Se ===
              o("WAWebBizBotConsumerContentVariant")
                .BizBotConsumerContentVariant.INDIA
                ? g.jsx("div", {
                    className: "x1rg5ohu x2fvf9 xg49k01",
                    children: g.jsx(
                      o("WAWebInfoFilledIcon.react").InfoFilledIcon,
                      { width: 16, height: 16 },
                    ),
                  })
                : g.jsx("div", {
                    className: "x1rg5ohu x2fvf9 xg49k01",
                    children: g.jsx(
                      o("WAWebDoubleChevronInCircleIcon.react")
                        .DoubleChevronInCircleIcon,
                      { width: 16, height: 16 },
                    ),
                  })),
              (G = function () {
                o("WAWebModalManager").ModalManager.open(
                  g.jsx(r("WAWebBizBot1pLearnMore.react"), {}),
                );
              }));
          } else if (T === "bot_init" || T === "bot_invoke_disclaimer") {
            var Re = r("WAWebFormatNotificationTemplateText")(
              o("WAWebStateUtils").unproxy(l.unsafe()),
              !1,
              A,
            );
            ((W = Re.text),
              (q = Re.ctaText),
              o("WAWebStateUtils").unproxy(l.unsafe()),
              (G = function () {
                if (o("WAWebBotUtils").isBotChannelFBID(L.remote)) {
                  var e = o("WAWebBotUtils").isHatchBot(L.remote)
                    ? o("WAWebFaqUrl").getHatchLearnMoreUrl()
                    : o("WAWebFaqUrl").getManusLearnMoreUrl();
                  o("WAWebExternalLink.react").openExternalLink(e);
                } else
                  o("WAWebModalManager").ModalManager.open(
                    g.jsx(r("WAWebBotLearnMore.react"), {
                      fromInvoke: T === "bot_invoke_disclaimer",
                    }),
                  );
              }));
          } else if (T === "change_username") {
            var Le = r("WAWebFormatNotificationTemplateText")(
              o("WAWebStateUtils").unproxy(l.unsafe()),
            );
            ((W = Le.text),
              (q = Le.ctaText),
              o("WAWebStateUtils").unproxy(l.unsafe()),
              (U = "change_username_system_message"));
          } else if (T === "change_lid") {
            var Ee = r("WAWebFormatNotificationTemplateText")(
              o("WAWebStateUtils").unproxy(l.unsafe()),
            );
            ((W = Ee.text),
              (q = Ee.ctaText),
              o("WAWebStateUtils").unproxy(l.unsafe()),
              (U = "change_lid_system_message"));
            var ke = D.find(function (e) {
                return r("WAWebWid").isWid(e);
              }),
              Ie =
                ke != null && typeof ke == "string"
                  ? o("WAWebWidFactory").createWid(ke)
                  : ke;
            Ie &&
              Ie.isLid() &&
              (G = function () {
                o("WAWebMessageNotificationHelpers.react").handleChangeLidClick(
                  Ie,
                );
              });
          } else if (T === "saga_init") {
            var Te = r("WAWebFormatNotificationTemplateText")(
              o("WAWebStateUtils").unproxy(l.unsafe()),
            );
            ((W = Te.text),
              (q = Te.ctaText),
              o("WAWebStateUtils").unproxy(l.unsafe()),
              (G = function () {
                o("WAWebModalManager").ModalManager.open(
                  o("WAWebABPropsSaga").getIsSagaV1NuxEnabled()
                    ? g.jsx(r("WAWebSagaV1Modal.react"), {})
                    : g.jsx(r("WAWebSagaModal.react"), {}),
                );
              }));
          } else if (
            o(
              "WAWebBizCoexGatingUtils",
            ).bizHostedDevicesSystemMessageEnabled() &&
            (T === "biz_account_type_is_hosted" ||
              T === "biz_account_type_changed_to_hosted")
          ) {
            var De = L.remote,
              xe = r("WAWebFormatNotificationTemplateText")(
                o("WAWebStateUtils").unproxy(l.unsafe()),
              );
            ((W = xe.text),
              (q = xe.ctaText),
              o("WAWebStateUtils").unproxy(l.unsafe()),
              (G = function () {
                o(
                  "WAWebOpenCoexSystemMessageModal.react",
                ).openCoexSecurityVerifySystemMessageModal(
                  o(
                    "WAWebFormatNotificationTemplateModalText",
                  ).formatCoexSecurityModalText(!0),
                  o(
                    "WAWebFormatNotificationTemplateModalText",
                  ).formatCoexSecurityModalTextLastParagraph(),
                  o("WAWebFaqUrl").getCoexHostedFaqUrl(),
                  De,
                  ne,
                  o("WAWebABProps").getABPropConfigValue(
                    "coex_calling_enabled",
                  ),
                );
              }));
          } else if (
            o(
              "WAWebBizCoexGatingUtils",
            ).bizHostedDevicesSystemMessageEnabled() &&
            (T === "biz_me_account_type_is_hosted" ||
              T === "biz_me_account_type_is_hosted_transition")
          ) {
            var $e = L.remote,
              Pe = r("WAWebFormatNotificationTemplateText")(
                o("WAWebStateUtils").unproxy(l.unsafe()),
              );
            ((W = Pe.text),
              (q = Pe.ctaText),
              o("WAWebStateUtils").unproxy(l.unsafe()),
              (G = function () {
                o(
                  "WAWebOpenCoexSystemMessageModal.react",
                ).openCoexSecurityVerifySystemMessageModal(
                  o(
                    "WAWebFormatNotificationTemplateModalText",
                  ).formatCoexSecurityModalTextForYourBusiness(),
                  null,
                  o("WAWebFaqUrl").getCoexHostedFaqUrl(),
                  $e,
                  ne,
                  o("WAWebABProps").getABPropConfigValue(
                    "coex_calling_enabled",
                  ),
                );
              }));
          } else if (T === "is_capi_hosted_group") {
            var Ne = r("WAWebFormatNotificationTemplateText")(
              o("WAWebStateUtils").unproxy(l.unsafe()),
            );
            ((W = Ne.text),
              (q = Ne.ctaText),
              o("WAWebStateUtils").unproxy(l.unsafe()),
              (H = o(
                "WAWebFormatNotificationTemplateModalText",
              ).formatNotificationTemplateModalText(
                o("WAWebStateUtils").unproxy(l.unsafe()),
              )),
              H != null &&
                (G = function () {
                  o("WAWebOpenSystemMessageModal").openSystemMessageModal(
                    g.jsx(
                      o("WAWebCAPIGroupAboutModal.react")
                        .CAPIGroupAboutModalContent,
                      {},
                    ),
                    o("WAWebCAPIGroupAboutModal.react")
                      .CAPI_GROUP_ABOUT_MODAL_LEARN_MORE_URL,
                  );
                }));
          } else if (
            o("WAWebMsgGetters").getIsCAPISupport(l) &&
            o("WAWebABPropsSaga").getIsSagaV1NuxEnabled() &&
            (T === "biz_privacy_mode_init_fb" || T === "support_system_message")
          ) {
            var Me = r("WAWebFormatNotificationTemplateText")(
              o("WAWebStateUtils").unproxy(l.unsafe()),
            );
            ((W = Me.text),
              (q = Me.ctaText),
              o("WAWebStateUtils").unproxy(l.unsafe()),
              (G = function () {
                o("WAWebModalManager").ModalManager.open(
                  g.jsx(
                    o("WAWebSupportAIInfoNuxLoadable").SupportAIInfoNuxLoadable,
                    {},
                  ),
                  { transition: "modal-flow" },
                );
              }));
          } else if (T === "marketing_messages_from_business_stopped") {
            var we = r("WAWebFormatNotificationTemplateText")(
              o("WAWebStateUtils").unproxy(l.unsafe()),
            );
            ((W = we.text),
              (q = we.ctaText),
              o("WAWebStateUtils").unproxy(l.unsafe()),
              (G = function () {
                P.contact.isContactOptedOut &&
                  o("WAWebModalManager").ModalManager.open(
                    g.jsx(
                      o(
                        "WAWebMarketingMessagesFeedbackResumeConfirmationLoadable",
                      )
                        .WAWebMarketingMessagesFeedbackResumeConfirmationLoadable,
                      {
                        chat: P,
                        logEntryPoint: o("WAWebWamEnumMmUserControlsEntryPoint")
                          .MM_USER_CONTROLS_ENTRY_POINT.SYSTEM_MESSAGE,
                      },
                    ),
                    { transition: "default" },
                  );
              }));
          } else if (T === "marketing_messages_from_business_resumed") {
            var Ae = r("WAWebFormatNotificationTemplateText")(
              o("WAWebStateUtils").unproxy(l.unsafe()),
            );
            ((W = Ae.text),
              (q = Ae.ctaText),
              o("WAWebStateUtils").unproxy(l.unsafe()),
              (G = function () {
                P.contact.isContactOptedOut ||
                  o("WAWebModalManager").ModalManager.open(
                    g.jsx(
                      o(
                        "WAWebMarketingMessagesFeedbackStopConfirmationLoadable",
                      ).WAWebMarketingMessagesFeedbackStopConfirmationLoadable,
                      {
                        chat: P,
                        logEntryPoint: o("WAWebWamEnumMmUserControlsEntryPoint")
                          .MM_USER_CONTROLS_ENTRY_POINT.SYSTEM_MESSAGE,
                      },
                    ),
                    { transition: "modal-flow" },
                  );
              }));
          } else if (T === "marketing_messages_post_send_opt_out") {
            var Fe = r("WAWebFormatNotificationTemplateText")(
              o("WAWebStateUtils").unproxy(l.unsafe()),
            );
            ((W = Fe.text),
              (q = s._(/*BTDS*/ "Stop")),
              (G = function () {
                P.contact.isContactOptedOut ||
                  o("WAWebModalManager").ModalManager.open(
                    g.jsx(
                      o(
                        "WAWebMarketingMessagesFeedbackStopConfirmationLoadable",
                      ).WAWebMarketingMessagesFeedbackStopConfirmationLoadable,
                      {
                        chat: P,
                        logEntryPoint: o("WAWebWamEnumMmUserControlsEntryPoint")
                          .MM_USER_CONTROLS_ENTRY_POINT
                          .POST_SEND_SYSTEM_MESSAGE,
                      },
                    ),
                    { transition: "modal-flow" },
                  );
              }));
          } else if (T === "limit_sharing_system_message") {
            var Oe = o(
              "WAWebLimitSharingUIUtils",
            ).getLimitSharingMessageNotification(P, l);
            ((W = Oe.text), (q = Oe.ctaText), (G = Oe.handleClick));
          } else if (T === "mm_signal_sharing_system_message") {
            var Be = o(
              "WAWebMmSignalSharingUIUtils",
            ).getMmSignalSharingMessageNotification(P);
            ((W = Be.text),
              (q = Be.ctaText),
              (G = Be.handleClick),
              (B = g.jsx("div", {
                className: "x1rg5ohu x2fvf9 xg49k01",
                children: g.jsx(
                  o("WAWebSingleChevronInCircleIcon.react")
                    .SingleChevronInCircleIcon,
                  {
                    width: 16,
                    height: 16,
                    viewBox: { x: 0, y: 0, width: 20, height: 20 },
                  },
                ),
              })));
          } else if (T === "bot_session_transparency_notice") {
            var We = r("WANullthrows")(
                l.botSessionTransparencyType,
                "botSessionTransparencyType should not be null for bot_session_transparency_notice subtype",
              ),
              qe = o(
                "WAWebSessionTransparencyNotification",
              ).getBotSessionTransparencySystemMessageNotification(We);
            ((W = qe.text), (G = qe.handleClick));
          } else if (T === "biz_automatically_labeled_chat_system_message") {
            var Ue = r("WAWebFormatNotificationTemplateText")(
              o("WAWebStateUtils").unproxy(l.unsafe()),
            );
            ((W = Ue.text),
              (q = Ue.ctaText),
              o("WAWebStateUtils").unproxy(l.unsafe()),
              (V = "xd4r4e8 x1tawftj x14ug900"),
              (q = g.jsx(o("WAWebText.react").WAWebClickableText, {
                weight: "bold",
                color: "primary",
                children: r("WAWebFormatCTAText")({
                  type: I,
                  subtype: T,
                  id: l.id,
                }),
              })),
              (B = g.jsx("div", {
                className: "x1rg5ohu x2fvf9 xg49k01",
                children: g.jsx(
                  o("WAWebDotTwoLoopsIntersectedIcon.react")
                    .DotTwoLoopsIntersectedIcon,
                  {
                    width: 16,
                    height: 16,
                    viewBox: { x: 0, y: 0, width: 24, height: 24 },
                  },
                ),
              })),
              (G = function () {
                o("WAWebModalManager").ModalManager.open(
                  g.jsx(r("WAWebDOIntroPopup.react"), {
                    onContinue: function () {
                      (h(), o("WAWebModalManager").ModalManager.close());
                    },
                    surfaceType: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT,
                  }),
                );
              }));
          } else if (
            T === "biz_per_customer_3pd_data_share_opt_in" ||
            T === "biz_per_customer_3pd_data_share_opt_out"
          ) {
            var Ve, He;
            U = "per_customer_data_sharing_system_message";
            var Ge = r("WAWebFormatNotificationTemplateText")(
              o("WAWebStateUtils").unproxy(l.unsafe()),
            );
            ((W = Ge.text),
              (V = "xd4r4e8 x1tawftj x14ug900"),
              o("WAWebStateUtils").unproxy(l.unsafe()),
              (q = g.jsx(o("WAWebText.react").WAWebClickableText, {
                weight: "bold",
                color: "primary",
                children: r("WAWebFormatCTAText")({
                  type: I,
                  subtype: T,
                  id: l.id,
                }),
              })),
              (B = g.jsx("div", {
                className: "x1rg5ohu x2fvf9 xg49k01",
                children: g.jsx(
                  o("WAWebBusinessDataSharingIcon.react")
                    .BusinessDataSharingIcon,
                  {
                    width: 16,
                    height: 16,
                    viewBox: { x: 0, y: 0, width: 24, height: 24 },
                  },
                ),
              })));
            var ze =
              (Ve = (He = P.accountLid) == null ? void 0 : He.toString()) !=
              null
                ? Ve
                : "";
            G = function () {
              o(
                "WAWebPerCustomerDataSharingUtils",
              ).getModalForPerCustomerDataSharing(
                ze,
                o("WAWebWamEnumSmbDataSharingConsentScreenEntryPoint")
                  .SMB_DATA_SHARING_CONSENT_SCREEN_ENTRY_POINT
                  .DATA_SHARING_SYSTEM_MESSAGE,
                P,
              );
            };
          } else if (
            T === "ctwa_consumer_data_sharing_disclosure_system_message"
          ) {
            U = "ctwa_consumer_data_sharing_disclosure_system_message";
            var je = r("WAWebFormatNotificationTemplateText")(
              o("WAWebStateUtils").unproxy(l.unsafe()),
            );
            ((W = je.text),
              (V = "xd4r4e8 x1tawftj x14ug900"),
              o("WAWebStateUtils").unproxy(l.unsafe()),
              (q = g.jsx(o("WAWebText.react").WAWebClickableText, {
                weight: "bold",
                color: "primary",
                children: r("WAWebFormatCTAText")({
                  type: I,
                  subtype: T,
                  id: l.id,
                }),
              })),
              (B = g.jsx("div", {
                className: "x1rg5ohu x2fvf9 xg49k01",
                children: g.jsx(
                  o("WAWebSingleChevronInCircleIcon.react")
                    .SingleChevronInCircleIcon,
                  {
                    width: 16,
                    height: 16,
                    viewBox: { x: 0, y: 0, width: 20, height: 20 },
                  },
                ),
              })),
              (G = function () {
                o(
                  "WAWebConsumerTransparencyModalDialog.react",
                ).showConsumerTransparencyModalDialog();
              }));
          } else if (
            o(
              "WAWebBotGroupGatingUtils",
            ).isOpenGroupBotParticipantAddEnabled() &&
            T === "group_transition_to_bot_group"
          ) {
            var Ke = r("WAWebFormatNotificationTemplateText")(
              o("WAWebStateUtils").unproxy(l.unsafe()),
            );
            ((W = Ke.text),
              o("WAWebStateUtils").unproxy(l.unsafe()),
              (G = function () {
                o("WAWebModalManager").ModalManager.open(
                  g.jsx(r("WAWebOpenBotGroupOpenAddedModal.react"), {}),
                );
              }));
          } else if (T === "biz_broadcast_status") {
            var Qe,
              Xe = r("WAWebFormatNotificationTemplateText")(
                o("WAWebStateUtils").unproxy(l.unsafe()),
              );
            ((W = Xe.text), (q = s._(/*BTDS*/ "View")));
            var Ye =
              ((Qe = l.templateParams) == null ? void 0 : Qe[0]) != null
                ? Number(l.templateParams[0].toString())
                : 0;
            (Ye > 0
              ? (B = g.jsx("div", {
                  className: "x1rg5ohu x2fvf9 xg49k01",
                  children: g.jsx(o("WAWebSpinner.react").Spinner, {
                    size: 16,
                  }),
                }))
              : (B = g.jsx("div", {
                  className: "x1rg5ohu x2fvf9 xg49k01",
                  children: g.jsx(
                    o("WAWebAlertErrorIcon.react").AlertErrorIcon,
                    { width: 16, height: 16 },
                  ),
                })),
              (G = function () {
                (o(
                  "WAWebBusinessBroadcastUserJourneyLogger",
                ).BusinessBroadcastUserJourneyLogger.bbThreadSystemMessageCtaClicked(),
                  o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(
                    g.jsx(
                      o("WAWebBusinessBroadcastHomeFlowLoadable")
                        .WAWebBusinessBroadcastHomeFlowLoadable,
                      {
                        entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT
                          .BB_THREAD,
                        onClose: function () {
                          return o(
                            "WAWebDrawerManager",
                          ).DrawerManager.closeDrawerFullscreen();
                        },
                      },
                    ),
                  ));
              }),
              (U = "biz_broadcast_status_system_message"));
          } else {
            var Je = r("WAWebFormatNotificationTemplateText")(
              o("WAWebStateUtils").unproxy(l.unsafe()),
            );
            if (
              ((W = Je.text),
              (q = Je.ctaText),
              o("WAWebStateUtils").unproxy(l.unsafe()),
              (H = o(
                "WAWebFormatNotificationTemplateModalText",
              ).formatNotificationTemplateModalText(
                o("WAWebStateUtils").unproxy(l.unsafe()),
              )),
              H != null)
            ) {
              var Ze = r("WAWebNotificationTemplateFaq")(T, l.id.remote);
              G = function () {
                o("WAWebOpenSystemMessageModal").openSystemMessageModal(H, Ze);
              };
            }
          }
          o("WAWebMessageNotificationHelpers.react").showInfoIcon(I, T) &&
            (B = g.jsx("div", {
              className: "x1rg5ohu x1gslohp x2fvf9 x16dsc37 x7mk7yj",
              children: g.jsx(o("WAWebInfoFilledIcon.react").InfoFilledIcon, {
                width: 12,
                height: 15,
              }),
            }));
          break;
        }
        case o("WAWebMsgType").MSG_TYPE.PROTOCOL: {
          o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "WAWebMessageNotification: protocol",
              ])),
          );
          var et = k,
            tt = L.remote,
            nt = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
          if (T === "ephemeral_setting")
            ((W = o(
              "WAWebFormatEphemeralSetting",
            ).getDisappearingModeUpdateSystemMessageText(
              o("WAWebStateUtils").unproxy(l.unsafe()),
            )),
              o("WAWebChatEphemerality").shouldShowEphemeralSetting(P) &&
                (G = function () {
                  o(
                    "WAWebMessageNotificationHelpers.react",
                  ).handleEphemeralClick(P);
                }),
              (B = o(
                "WAWebMessageNotificationHelpers.react",
              ).renderDisappearingIcon()),
              (U = "ephemeral_system_message"));
          else if (T === "share_phone_number")
            ((W = r("WAWebFormatSharePhoneNumber")(et, tt, L.fromMe)),
              (G = function () {
                nt != null &&
                  o("WAWebModalManager").ModalManager.open(
                    g.jsx(
                      o("WAWebSharePhoneNumberModal.react")
                        .PostSharePhoneNumberModal,
                      { mePnUser: nt },
                    ),
                  );
              }),
              (B = g.jsx("div", {
                className: "x1rg5ohu x2fvf9 xg49k01",
                children: g.jsx(
                  o("WAWebDialpadSmallIcon.react").DialpadSmallIcon,
                  { width: 16, height: 16 },
                ),
              })),
              (U = "share_phone_number_system_message"));
          else if (T === "event_edit_decrypted") {
            var rt = o("WAWebStateUtils").unproxy(l.unsafe()),
              ot = o("WAWebMsgCollection").MsgCollection.get(
                rt.protocolMessageKey,
              );
            ((W = o(
              "WAWebEventsFormatEventEditNotification",
            ).formatEventEditNotification(rt)),
              (q = ot ? r("WAWebFormatCTAText")({ type: I, subtype: T }) : ""),
              (G = function () {
                if (ot != null) {
                  var e = o("WAWebFrontendMsgGetters").getAsEventCreation(ot);
                  e != null && o("WAWebCmd").Cmd.openEventInfoDrawer(P, e);
                }
              }));
          } else if (T === "limit_sharing_system_message") {
            var at = o(
              "WAWebLimitSharingUIUtils",
            ).getLimitSharingMessageNotification(P, l);
            ((W = at.text), (q = at.ctaText), (G = at.handleClick));
          } else if (T === "mm_signal_sharing_system_message") {
            var it = o(
              "WAWebMmSignalSharingUIUtils",
            ).getMmSignalSharingMessageNotification(P);
            ((W = it.text),
              (q = it.ctaText),
              (G = it.handleClick),
              (B = g.jsx("div", {
                className: "x1rg5ohu x2fvf9 xg49k01",
                children: g.jsx(
                  o("WAWebSingleChevronInCircleIcon.react")
                    .SingleChevronInCircleIcon,
                  {
                    width: 16,
                    height: 16,
                    viewBox: { x: 0, y: 0, width: 20, height: 20 },
                  },
                ),
              })));
          }
          break;
        }
        case o("WAWebMsgType").MSG_TYPE.POLL_ADD_OPTION_DECRYPTED: {
          ((W = o(
            "WAWebPollsFormatPollAddOptionNotification",
          ).formatPollAddOptionNotification(
            o("WAWebStateUtils").unproxy(l).unsafe(),
          )),
            (q = r("WAWebFormatCTAText")({ type: I })),
            (U = "poll_add_option_system_message"));
          var lt = o("WAWebStateUtils").unproxy(l.unsafe()).parentMsgKey;
          G = function () {
            var e =
              lt != null ? o("WAWebMsgCollection").MsgCollection.get(lt) : null;
            if (
              e != null &&
              o("WAWebFrontendMsgGetters").getAsPollCreation(e) != null
            ) {
              var t = o("WAWebChatMessageSearch").getSearchContext({
                chat: P,
                msgKey: e.id,
              });
              o("WAWebCmd").Cmd.openChatAt({ chat: P, msgContext: t });
            }
          };
          break;
        }
        case o("WAWebMsgType").MSG_TYPE.PINNED_MESSAGE: {
          ((W = o(
            "WAWebFormatPinInChatNotification",
          ).formatPinInChatNotification(
            o("WAWebStateUtils").unproxy(l).unsafe(),
          )),
            (U = "pinned_message_system_message"));
          break;
        }
      }
      var st = g.jsx(o("WAWebEmojiText.react").EmojiText, {
          direction: r("WAWebL10N").isRTL() ? "rtl" : "ltr",
          text: W,
          breakWord: !0,
        }),
        ut = function () {
          var e = !(
              P.msgs.some(function (e) {
                return o("WAWebMsgGetters").isRealMessage(e);
              }) ||
              P.endOfHistoryTransferType ===
                o("WAWebChatConstants")
                  .ConversationEndOfHistoryTransferModelPropType.INCOMPLETE
            ),
            t = o(
              "WAWebSystemMessageWithSingleCTA.react",
            ).getSystemMessageCategoryType(I);
          t != null &&
            z != null &&
            o("WAWebLogSystemMessageClick").logSystemMessageClick(
              t,
              z,
              o("WAWebChatGetters").getIsGroup(P),
              e,
            );
        },
        ct;
      if (
        o(
          "WAWebSystemMessageGatingUtils",
        ).systemMessageActionTextStylingEnabled() &&
        q != null
      )
        ct = g.jsx(
          o("WAWebSystemMessageWithSingleCTA.react").SystemMessageWithSingleCTA,
          {
            bodyText: st,
            ctaText: q,
            className: V,
            icon: B,
            onClick: function () {
              (ut(), G == null || G());
            },
            onclickRef: b,
            testid: void 0,
          },
        );
      else if (
        ((ct = g.jsxs("span", { "data-testid": void 0, children: [B, st] })), G)
      )
        return g.jsx("div", {
          role: "button",
          ref: b,
          onClick: function () {
            (o(
              "WAWebSystemMessageGatingUtils",
            ).systemMessageActionTextStylingEnabled() && ut(),
              G == null || G());
          },
          children: ct,
        });
      return g.jsx("span", { children: ct });
    }
    ((R.displayName = R.name + " [from " + i.id + "]"), (l.default = R));
  },
  226,
);
