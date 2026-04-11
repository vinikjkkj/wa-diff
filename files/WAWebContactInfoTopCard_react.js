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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(67),
        n = e.contact,
        a = e.displayRequestPhoneNumber,
        i = e.isMessageYourselfChat,
        l = e.onContactInfoAction,
        u = e.onDetailImageClick,
        d = e.onDetailImageLoad,
        f = e.onOpenChatTabInCustomerManager,
        g = e.onSaveContact,
        h = e.onSearchMsgs,
        b = e.sourceChat,
        v;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = [o("WAWebFrontendContactGetters").getPhoneNumber]), (t[0] = v))
        : (v = t[0]);
      var S = o("useWAWebContactValues").useContactValues(n.id, v),
        R = S[0],
        L;
      if (t[1] !== n || t[2] !== R) {
        var E =
          R != null
            ? o("WAWebContactCollection").ContactCollection.get(R)
            : null;
        ((L = C({ contact: n, phoneNumberContact: E })),
          (t[1] = n),
          (t[2] = R),
          (t[3] = L));
      } else L = t[3];
      var k = L,
        I = k.title,
        T = k.type,
        D,
        x;
      (t[4] !== I || t[5] !== T
        ? ((D = function () {
            I != null &&
              T ===
                o("WAWebWamEnumOppositeVisibleIdentificationType")
                  .OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.USERNAME &&
              o("WAWebUsernameGatingUtils").usernameExposedLoggingEnabled() &&
              new (o("WAWebUsernameExposedWamEvent").UsernameExposedWamEvent)({
                usernameExposureContext: "contact_info_subtitle",
              }).commit();
          }),
          (x = [I, T]),
          (t[4] = I),
          (t[5] = T),
          (t[6] = D),
          (t[7] = x))
        : ((D = t[6]), (x = t[7])),
        p(D, x));
      var $;
      t[8] !== n
        ? (($ =
            o("WAWebNotesUtils").shouldEnableNotesForWid(
              n == null ? void 0 : n.id,
            ) &&
            !(
              o("WAWebCustomerManagerGating").customerManagerEnabled() &&
              o("WAWebCustomerManagerGating").isEligibleForCustomerFields(n)
            )
              ? m.jsx(r("WAWebContactInfoNotes.react"), { contact: n })
              : null),
          (t[8] = n),
          (t[9] = $))
        : ($ = t[9]);
      var P = $,
        N;
      t[10] !== n.id
        ? ((N =
            o(
              "WAWebBotGroupGatingUtils",
            ).isTEEGroupBotParticipantAddEnabled() &&
            o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(n.id)),
          (t[10] = n.id),
          (t[11] = N))
        : (N = t[11]);
      var M = N,
        w;
      t[12] !== n || t[13] !== i
        ? ((w = m.jsx(o("WAWebName.react").Name, {
            testid: void 0,
            contact: n,
            showMessageYourselfName: i,
            useLiftMeUp: !1,
            selectable: !0,
            breakWord: !0,
            checkmarkLarge: !0,
          })),
          (t[12] = n),
          (t[13] = i),
          (t[14] = w))
        : (w = t[14]);
      var A = w,
        F;
      t[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((F = s._(/*BTDS*/ "View photo")), (t[15] = F))
        : (F = t[15]);
      var O = F,
        B = M ? void 0 : u,
        W = M ? void 0 : 0,
        q = M
          ? void 0
          : o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
        U = M ? void 0 : O,
        V;
      t[16] !== n.id ||
      t[17] !== d ||
      t[18] !== W ||
      t[19] !== q ||
      t[20] !== U ||
      t[21] !== B
        ? ((V = m.jsx(o("WAWebDetailImage.react").DetailImage, {
            id: n.id,
            size: o("WAWebDetailImage.react").DetailImageSize.Refresh,
            loader: !0,
            onLoad: d,
            onClick: B,
            quality: o("WAWebDetailImage.react").DetailImageQuality.High,
            tabIndex: W,
            xstyle: q,
            ariaLabel: U,
          })),
          (t[16] = n.id),
          (t[17] = d),
          (t[18] = W),
          (t[19] = q),
          (t[20] = U),
          (t[21] = B),
          (t[22] = V))
        : (V = t[22]);
      var H = V,
        G;
      t[23] !== a
        ? ((G =
            a &&
            !o(
              "WAWebUserPrefsPhoneNumberHidingThreadPromotionMigration",
            ).hasPhoneNumberHidingThreadPromotionMigrationStarted()),
          (t[23] = a),
          (t[24] = G))
        : (G = t[24]);
      var z = G,
        j;
      t[25] !== H || t[26] !== M
        ? ((j = M
            ? H
            : m.jsx(r("WDSTooltip.react"), { label: O, children: H })),
          (t[25] = H),
          (t[26] = M),
          (t[27] = j))
        : (j = t[27]);
      var K = j,
        Q;
      t[28] === Symbol.for("react.memo_cache_sentinel")
        ? ((Q = (c || (c = r("stylex"))).props(
            _.avatar,
            o("WAWebUISpacing").uiMargin.bottom10,
          )),
          (t[28] = Q))
        : (Q = t[28]);
      var X;
      t[29] !== K || t[30] !== M
        ? ((X = m.jsx(
            "div",
            babelHelpers.extends({}, Q, {
              children: M
                ? m.jsxs("div", {
                    className: "x1n2onr6 x1rg5ohu",
                    children: [
                      K,
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
                : K,
            }),
          )),
          (t[29] = K),
          (t[30] = M),
          (t[31] = X))
        : (X = t[31]);
      var Y;
      t[32] !== A
        ? ((Y = m.jsx(o("WAWebText.react").WAWebTextLargeRefreshed, {
            children: A,
          })),
          (t[32] = A),
          (t[33] = Y))
        : (Y = t[33]);
      var J;
      t[34] !== n.id || t[35] !== I
        ? ((J =
            !n.id.isBot() &&
            I != null &&
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
                        { color: "wdsContentDeemphasized", children: I },
                      ),
                    },
                  ),
                },
              ),
            )),
          (t[34] = n.id),
          (t[35] = I),
          (t[36] = J))
        : (J = t[36]);
      var Z;
      t[37] !== n.id || t[38] !== M
        ? ((Z =
            M &&
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
                      ).getMetaAiTEEBotSecondaryLine(n.id),
                    },
                  ),
                },
              ),
            )),
          (t[37] = n.id),
          (t[38] = M),
          (t[39] = Z))
        : (Z = t[39]);
      var ee;
      t[40] !== n || t[41] !== b
        ? ((ee = m.jsx(
            o("WAWebMemberLabelContactInfo.react").MemberLabelContactInfo,
            { contact: n, chat: b },
          )),
          (t[40] = n),
          (t[41] = b),
          (t[42] = ee))
        : (ee = t[42]);
      var te;
      t[43] !== Y || t[44] !== J || t[45] !== Z || t[46] !== ee
        ? ((te = m.jsxs(o("WAWebFlex.react").FlexColumn, {
            align: "center",
            children: [Y, J, Z, ee],
          })),
          (t[43] = Y),
          (t[44] = J),
          (t[45] = Z),
          (t[46] = ee),
          (t[47] = te))
        : (te = t[47]);
      var ne;
      t[48] !== a
        ? ((ne = a && m.jsx(r("WAWebContactInfoPhoneNumberHidden.react"), {})),
          (t[48] = a),
          (t[49] = ne))
        : (ne = t[49]);
      var re;
      t[50] !== n ||
      t[51] !== z ||
      t[52] !== i ||
      t[53] !== l ||
      t[54] !== f ||
      t[55] !== g ||
      t[56] !== h
        ? ((re =
            !i &&
            !o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(n.id) &&
            m.jsx(y, {
              contact: n,
              displayRequestPnButton: z,
              onContactInfoAction: l,
              onSaveContact: g,
              onSearchMsgs: h,
              onOpenChatTabInCustomerManager: f,
            })),
          (t[50] = n),
          (t[51] = z),
          (t[52] = i),
          (t[53] = l),
          (t[54] = f),
          (t[55] = g),
          (t[56] = h),
          (t[57] = re))
        : (re = t[57]);
      var oe;
      t[58] !== n
        ? ((oe =
            o("WAWebBizGatingUtils").canDisplayLabel() &&
            !(
              o("WAWebCustomerManagerGating").customerManagerEnabled() &&
              o("WAWebCustomerManagerGating").isEligibleForCustomerFields(n)
            ) &&
            m.jsx(r("WAWebLabelsInfoDrawerLabelWell.react"), {
              labels: n.labels,
            })),
          (t[58] = n),
          (t[59] = oe))
        : (oe = t[59]);
      var ae;
      return (
        t[60] !== P ||
        t[61] !== X ||
        t[62] !== te ||
        t[63] !== ne ||
        t[64] !== re ||
        t[65] !== oe
          ? ((ae = m.jsxs(r("WAWebDrawerSection.react"), {
              theme: "refresh-new",
              children: [X, te, ne, re, oe, P],
            })),
            (t[60] = P),
            (t[61] = X),
            (t[62] = te),
            (t[63] = ne),
            (t[64] = re),
            (t[65] = oe),
            (t[66] = ae))
          : (ae = t[66]),
        ae
      );
    }
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
