__d(
  "WAWebContactInfoTopCard.react",
  [
    "fbt",
    "WALogger",
    "WAWebAddUserIcon.react",
    "WAWebBizGatingUtils",
    "WAWebBotFrontendUtils",
    "WAWebBotGating",
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebChatCollection",
    "WAWebChatEntryPoint",
    "WAWebChatInfoActionButton.react",
    "WAWebChatRefreshedIcon.react",
    "WAWebCmd",
    "WAWebComposeBoxActions",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebContactInfoNotes.react",
    "WAWebContactInfoPhoneNumberHidden.react",
    "WAWebContactManagementGating",
    "WAWebContactUtils",
    "WAWebCopyPasteSelectable.react",
    "WAWebCustomerManagerGating",
    "WAWebDetailImage.react",
    "WAWebDialpadSmallIcon.react",
    "WAWebDrawerSection.react",
    "WAWebEnvironment",
    "WAWebFbtCommon",
    "WAWebFindChatAction",
    "WAWebFlex.react",
    "WAWebFrontendContactGetters",
    "WAWebLabelsInfoDrawerLabelWell.react",
    "WAWebLidMigrationUtils",
    "WAWebMemberLabelContactInfo.react",
    "WAWebModalManager",
    "WAWebName.react",
    "WAWebNotesUtils",
    "WAWebRequestPhoneNumberModal.react",
    "WAWebStreamModel",
    "WAWebText.react",
    "WAWebUISpacing",
    "WAWebUserPrefsPhoneNumberHidingThreadPromotionMigration",
    "WAWebUsernameExposedWamEvent",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameWorkerCompatibleGatingUtils",
    "WAWebVoipStartCall",
    "WAWebWamEnumCallFromUi",
    "WAWebWamEnumLobbyEntryPointType",
    "WAWebWamEnumOppositeVisibleIdentificationType",
    "WAWebWamEnumPnhEntryPointType",
    "WAWebWid",
    "WAWebWidFormat",
    "WDSActionTile.react",
    "WDSActionTileGroup.react",
    "WDSFocusStateStyles",
    "WDSIconIcCall.react",
    "WDSIconIcDialpad.react",
    "WDSIconIcPersonAdd.react",
    "WDSIconIcSearch.react",
    "WDSIconIcVideocam.react",
    "WDSIconWdsIcChat.react",
    "WDSIconWdsIcPrivateProcessingAiLockSparkleFill.react",
    "WDSTooltip.react",
    "asyncToGeneratorRuntime",
    "isStringNullOrEmpty",
    "react",
    "stylex",
    "useWAWebABPropConfigValue",
    "useWAWebContactValues",
    "useWAWebVoipIsCallingEnabledAndInited",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m = d || (d = o("react")),
      p = d.useEffect,
      _ = {
        avatar: { display: "x78zum5", justifyContent: "xl56j7k", $$css: !0 },
        secondaryWrapper: { lineHeight: "x1evy7pa", $$css: !0 },
      };
    function f(e) {
      var t = e.contact,
        n = e.displayRequestPhoneNumber,
        a = e.isMessageYourselfChat,
        i = e.onContactInfoAction,
        l = e.onDetailImageClick,
        u = e.onDetailImageLoad,
        d = e.onOpenChatTabInCustomerManager,
        f = e.onSaveContact,
        g = e.onSearchMsgs,
        h = e.sourceChat,
        b = o("useWAWebContactValues").useContactValues(t.id, [
          o("WAWebFrontendContactGetters").getPhoneNumber,
        ]),
        v = b[0],
        S =
          v != null
            ? o("WAWebContactCollection").ContactCollection.get(v)
            : null,
        R = C({ contact: t, phoneNumberContact: S }),
        L = R.title,
        E = R.type;
      p(
        function () {
          L != null &&
            E ===
              o("WAWebWamEnumOppositeVisibleIdentificationType")
                .OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.USERNAME &&
            o("WAWebUsernameGatingUtils").usernameExposedLoggingEnabled() &&
            new (o("WAWebUsernameExposedWamEvent").UsernameExposedWamEvent)({
              usernameExposureContext: "contact_info_subtitle",
            }).commit();
        },
        [L, E],
      );
      var k =
          o("WAWebNotesUtils").shouldEnableNotesForWid(
            t == null ? void 0 : t.id,
          ) &&
          !(
            o("WAWebCustomerManagerGating").customerManagerEnabled() &&
            o("WAWebCustomerManagerGating").isEligibleForCustomerFields(t)
          )
            ? m.jsx(r("WAWebContactInfoNotes.react"), { contact: t })
            : null,
        I =
          o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled() &&
          o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(t.id),
        T = m.jsx(o("WAWebName.react").Name, {
          testid: void 0,
          contact: t,
          showMessageYourselfName: a,
          useLiftMeUp: !1,
          selectable: !0,
          breakWord: !0,
          checkmarkLarge: !0,
        }),
        D = s._(/*BTDS*/ "View photo"),
        x = m.jsx(o("WAWebDetailImage.react").DetailImage, {
          id: t.id,
          size: o("WAWebDetailImage.react").DetailImageSize.Refresh,
          loader: !0,
          onLoad: u,
          onClick: I ? void 0 : l,
          quality: o("WAWebDetailImage.react").DetailImageQuality.High,
          tabIndex: I ? void 0 : 0,
          xstyle: I
            ? void 0
            : o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
          ariaLabel: I ? void 0 : D,
        }),
        $ =
          n &&
          !o(
            "WAWebUserPrefsPhoneNumberHidingThreadPromotionMigration",
          ).hasPhoneNumberHidingThreadPromotionMigrationStarted(),
        P = I ? x : m.jsx(r("WDSTooltip.react"), { label: D, children: x });
      return m.jsxs(r("WAWebDrawerSection.react"), {
        theme: "refresh-new",
        children: [
          m.jsx(
            "div",
            babelHelpers.extends(
              {},
              (c || (c = r("stylex"))).props(
                _.avatar,
                o("WAWebUISpacing").uiMargin.bottom10,
              ),
              {
                children: I
                  ? m.jsxs("div", {
                      className: "x1n2onr6 x1rg5ohu",
                      children: [
                        P,
                        m.jsx("div", {
                          className:
                            "x10l6tqk x1ey2m1c xqqy42c x12peec7 x1c9tyrk xeusxvb x1pahc9y x1ertn4p x78zum5 x6s0dn4 xl56j7k x1247r65 xng8ra xvuyptp",
                          children: m.jsx(
                            r(
                              "WDSIconWdsIcPrivateProcessingAiLockSparkleFill.react",
                            ),
                            { height: 40, width: 34 },
                          ),
                        }),
                      ],
                    })
                  : P,
              },
            ),
          ),
          m.jsxs(o("WAWebFlex.react").FlexColumn, {
            align: "center",
            children: [
              m.jsx(o("WAWebText.react").WAWebTextLargeRefreshed, {
                children: T,
              }),
              !t.id.isBot() &&
                L != null &&
                m.jsx(
                  "div",
                  babelHelpers.extends(
                    {},
                    (c || (c = r("stylex"))).props(
                      _.secondaryWrapper,
                      o("WAWebUISpacing").uiMargin.top10,
                    ),
                    {
                      children: m.jsx(
                        o("WAWebCopyPasteSelectable.react").SelectableSpan,
                        {
                          dir: "auto",
                          selectable: !0,
                          children: m.jsx(
                            o("WAWebText.react").WAWebTextTitleRefreshed,
                            { color: "wdsContentDeemphasized", children: L },
                          ),
                        },
                      ),
                    },
                  ),
                ),
              I &&
                m.jsx(
                  "div",
                  babelHelpers.extends(
                    {},
                    (c || (c = r("stylex"))).props(
                      _.secondaryWrapper,
                      o("WAWebUISpacing").uiMargin.top10,
                    ),
                    {
                      children: m.jsx(
                        o("WAWebText.react").WAWebTextTitleRefreshed,
                        {
                          color: "wdsContentDeemphasized",
                          children: o(
                            "WAWebBotFrontendUtils",
                          ).getMetaAiTEEBotSecondaryLine(t.id),
                        },
                      ),
                    },
                  ),
                ),
              m.jsx(
                o("WAWebMemberLabelContactInfo.react").MemberLabelContactInfo,
                { contact: t, chat: h },
              ),
            ],
          }),
          n && m.jsx(r("WAWebContactInfoPhoneNumberHidden.react"), {}),
          !a &&
            !o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(t.id) &&
            m.jsx(y, {
              contact: t,
              displayRequestPnButton: $,
              onContactInfoAction: i,
              onSaveContact: f,
              onSearchMsgs: g,
              onOpenChatTabInCustomerManager: d,
            }),
          o("WAWebBizGatingUtils").canDisplayLabel() &&
            !(
              o("WAWebCustomerManagerGating").customerManagerEnabled() &&
              o("WAWebCustomerManagerGating").isEligibleForCustomerFields(t)
            ) &&
            m.jsx(r("WAWebLabelsInfoDrawerLabelWell.react"), {
              labels: t.labels,
            }),
          k,
        ],
      });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = yield o("WAWebFindChatAction").findOrCreateLatestChat(
                e,
                "chatInfoTopCard",
              ),
              n = t.chat;
            if (
              o("WAWebBotUtils").isMetaAiBot(e) &&
              o("WAWebBotGating").isAiChatThreadsEnabled()
            )
              o("WAWebBotFrontendUtils").runMetaAiThreadsFlow(n, {
                type: "MetaAiContactInfo",
              });
            else {
              var r = yield o("WAWebCmd").Cmd.openChatFromUnread({
                chat: n,
                chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
                  .ContactInfo,
              });
              r && o("WAWebComposeBoxActions").ComposeBoxActions.focus(n);
            }
          } catch (e) {
            e instanceof Error &&
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "Failed to open chat from contact info",
                    ])),
                )
                .catching(e)
                .sendLogs("contact-info-start-chat-fail");
          }
        })),
        h.apply(this, arguments)
      );
    }
    function y(t) {
      var n = t.contact,
        a = t.displayRequestPnButton,
        i = t.onContactInfoAction,
        l = t.onOpenChatTabInCustomerManager,
        u = t.onSaveContact,
        c = t.onSearchMsgs,
        d = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "waweb_chatinfo_refresh",
        ),
        p = o(
          "useWAWebVoipIsCallingEnabledAndInited",
        ).useWAWebVoipIsCallingEnabledAndInited(),
        _ = p.inited,
        f = function () {
          if (l != null) {
            l();
            return;
          }
          (i == null || i("message"), g(n.id));
        },
        h = [];
      if (
        (d &&
          h.push({
            Icon: r("WDSIconIcSearch.react"),
            wdsIcon: r("WDSIconIcSearch.react"),
            onClick: c,
            title: s._(/*BTDS*/ "Search"),
            testid: "contact-action search-button",
          }),
        a)
      ) {
        var y = s._(/*BTDS*/ "Request"),
          C = s._(/*BTDS*/ "Requested"),
          b = o("WAWebContactGetters").getCanRequestPhoneNumber(n) ? y : C;
        h.push({
          Icon: o("WAWebDialpadSmallIcon.react").DialpadSmallIcon,
          wdsIcon: r("WDSIconIcDialpad.react"),
          onClick: function () {
            o("WAWebModalManager").ModalManager.open(
              m.jsx(r("WAWebRequestPhoneNumberModal.react"), {
                entryPoint: o("WAWebWamEnumPnhEntryPointType")
                  .PNH_ENTRY_POINT_TYPE.CHAT_INFO_REQUEST,
              }),
            );
          },
          testid: "request-phone-number-button-consumer",
          title: b,
          disabled: !o("WAWebContactGetters").getCanRequestPhoneNumber(n),
        });
      }
      var v = o("WAWebChatCollection").ChatCollection.getActive(),
        S = l != null || !(v != null && v.id.equals(n.id));
      S &&
        h.push({
          Icon: o("WAWebChatRefreshedIcon.react").ChatRefreshedIcon,
          wdsIcon: r("WDSIconWdsIcChat.react"),
          onClick: f,
          testid: "contact-action chat-button",
          title: s._(/*BTDS*/ "Message"),
          disabled: !1,
        });
      var R = o("WAWebLidMigrationUtils").toPn(n.id) != null,
        L =
          o("WAWebLidMigrationUtils").toLid(n.id) != null &&
          !r("isStringNullOrEmpty")(n.username);
      if (
        (o("WAWebContactUtils").canSaveAsMyContact(n.id) &&
          !o("WAWebFrontendContactGetters").getIsMyContact(n) &&
          (R ||
            (L &&
              o(
                "WAWebUsernameWorkerCompatibleGatingUtils",
              ).usernameContactUIEnabled())) &&
          o("WAWebContactManagementGating").contactManagementEnabled() &&
          h.push({
            Icon: o("WAWebAddUserIcon.react").AddUserIcon,
            wdsIcon: r("WDSIconIcPersonAdd.react"),
            onClick: u,
            testid: "contact-action contact-button",
            title: r("WAWebFbtCommon")("Add"),
            ariaLabel: s._(/*BTDS*/ "Add to contacts"),
            disabled: !1,
          }),
        (r("WAWebEnvironment").isWindows || _) &&
          !o("WAWebFrontendContactGetters").getIsContactBlocked(n) &&
          !n.id.isBot() &&
          o("WAWebStreamModel").Stream.displayInfo ===
            o("WAWebStreamModel").StreamInfo.NORMAL)
      ) {
        var E = s._(/*BTDS*/ "Voice"),
          k = s._(/*BTDS*/ "Video"),
          I = function (r) {
            (i == null || i(r ? "video_call" : "audio_call"),
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: contact info: start 1:1 call, isVideo: ",
                    "",
                  ])),
                r,
              ),
              o("WAWebVoipStartCall").startWAWebVoipCall(
                n.id,
                r,
                o("WAWebWamEnumCallFromUi").CALL_FROM_UI.CONTACT_INFO,
                o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE
                  .NOT_OPENED,
              ));
          };
        (h.push({
          Icon: r("WDSIconIcVideocam.react"),
          wdsIcon: r("WDSIconIcVideocam.react"),
          onClick: function () {
            return I(!0);
          },
          testid: "contact-video-call-button",
          title: k,
        }),
          h.push({
            Icon: r("WDSIconIcCall.react"),
            wdsIcon: r("WDSIconIcCall.react"),
            onClick: function () {
              return I(!1);
            },
            testid: "contact-voice-call-button",
            title: E,
          }));
      }
      var T;
      if (d) {
        var D = h.map(function (e, t) {
          var n = e.onClick,
            o = e.testid,
            a = e.title,
            i = e.wdsIcon;
          return m.jsx(
            r("WDSActionTile.react"),
            { Icon: i, onPress: n, label: a, testid: void 0 },
            t,
          );
        });
        h.length >= 2 && h.length <= 5
          ? (T = m.jsx(r("WDSActionTileGroup.react"), { children: D }))
          : (T = m.jsx("div", {
              className:
                "x78zum5 xh8yej3 x9f619 xl56j7k x1s70e7g xdx6fka xvtqlqk",
              children: D,
            }));
      } else
        T = h.map(function (e, t) {
          var n = e.Icon,
            a = e.disabled,
            i = e.onClick,
            l = e.testid,
            s = e.title;
          return m.jsx(
            r("WAWebChatInfoActionButton.react"),
            {
              Icon: n,
              iconWidth: 19,
              label: s,
              testid: void 0,
              xstyle: [
                o("WAWebUISpacing").uiMargin.start16,
                o("WAWebUISpacing").uiMargin.end16,
              ],
              disabled: a != null ? a : !1,
              onClick: i,
            },
            t,
          );
        });
      return m.jsx(o("WAWebFlex.react").FlexRow, {
        justify: "center",
        xstyle: [
          o("WAWebUISpacing").uiMargin.top8,
          o("WAWebUISpacing").uiMargin.bottom4,
        ],
        children: T,
      });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e) {
      var t = e.contact,
        n = e.phoneNumberContact;
      if (r("WAWebWid").isPSA(t.id)) {
        var a = s._(/*BTDS*/ "Official WhatsApp Account");
        return {
          title: a,
          type: o("WAWebWamEnumOppositeVisibleIdentificationType")
            .OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.VERIFIED_BUSINESS_NAME,
        };
      }
      if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
        var i = o("WAWebFrontendContactGetters").getFormattedUserAndType(t);
        e: {
          if (
            i.type ===
              o("WAWebWamEnumOppositeVisibleIdentificationType")
                .OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PHONE_NUMBER ||
            i.type ===
              o("WAWebWamEnumOppositeVisibleIdentificationType")
                .OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.MASKED_PHONE_NUMBER ||
            i.type ===
              o("WAWebWamEnumOppositeVisibleIdentificationType")
                .OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.USERNAME
          )
            break e;
          {
            var l = o(
                "WAWebFrontendContactGetters",
              ).getFormattedUsernameOrPhoneAndType(t),
              u = l.displayName,
              c = l.type;
            return u === t.name
              ? { title: null, type: null }
              : { title: u, type: c };
          }
        }
      } else {
        if (!t.id.isLid() && o("WAWebFrontendContactGetters").getIsMyContact(t))
          return {
            title: o("WAWebWidFormat").widToFormattedUser(t.id),
            type: o("WAWebWamEnumOppositeVisibleIdentificationType")
              .OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PHONE_NUMBER,
          };
        if (
          t.id.isLid() &&
          n != null &&
          o("WAWebFrontendContactGetters").getIsMyContact(n)
        )
          return {
            title: o("WAWebWidFormat").widToFormattedUser(n.id),
            type: o("WAWebWamEnumOppositeVisibleIdentificationType")
              .OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PHONE_NUMBER,
          };
      }
      var d = o("WAWebContactGetters").getNotifyName(t);
      return d != null
        ? {
            title: "~" + d,
            type: o("WAWebWamEnumOppositeVisibleIdentificationType")
              .OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PUSHNAME,
          }
        : { title: null, type: null };
    }
    l.default = f;
  },
  226,
);
