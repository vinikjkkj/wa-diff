__d(
  "WAWebCallButtons.react",
  [
    "fbt",
    "$InternalEnum",
    "WALogger",
    "WANullthrows",
    "WAWebActionMenuItem.react",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebAddUserIcon.react",
    "WAWebCallButtonsSurface",
    "WAWebCallCollection",
    "WAWebCallLogUtils",
    "WAWebChatGetters",
    "WAWebChatsOutlineIcon.react",
    "WAWebDesktopUpsellCallingUnavailablePopover.react",
    "WAWebDesktopUpsellUtils",
    "WAWebDrawerManager",
    "WAWebDropdownV2.react",
    "WAWebEnvironment",
    "WAWebFrontendContactGetters",
    "WAWebGroupCallDropdownContent.react",
    "WAWebGroupCallParticipantSelector.react",
    "WAWebGroupMetadataCollection",
    "WAWebLidMigrationUtils",
    "WAWebMenuBarStyles",
    "WAWebMobilePlatforms",
    "WAWebModalManager",
    "WAWebMsgGetters",
    "WAWebNoop",
    "WAWebNux",
    "WAWebPopoverContext.react",
    "WAWebPreCallUserJourneyLogger",
    "WAWebScreenWidthThresholds",
    "WAWebSettingsConst",
    "WAWebSettingsFlowLoadable",
    "WAWebSingleCallDropdownContent.react",
    "WAWebSingleCallLegacyDropdownContent.react",
    "WAWebTabOrder",
    "WAWebUnstyledButton.react",
    "WAWebUserPrefsMeUser",
    "WAWebVoipActionRequestOpenChat",
    "WAWebVoipBetaCallingUpsellPopover.react",
    "WAWebVoipCallingNux.react",
    "WAWebVoipCoexCallingPermissionDisabledModal.react",
    "WAWebVoipEventConstants",
    "WAWebVoipGatingUtils",
    "WAWebVoipOngoingCallCollection",
    "WAWebVoipStackInterface",
    "WAWebVoipStartCall",
    "WAWebVoipUiDocPipPortalContainer.react",
    "WAWebVoipUiManager",
    "WAWebVoipUiPopoutWindowPortalContainer.react",
    "WAWebWamEnumLobbyEntryPointType",
    "WAWebWamEnumSubSurface",
    "WDSButton.react",
    "WDSIconIcArrowDropDown.react",
    "WDSIconIcCall.react",
    "WDSIconIcCallFilled.react",
    "WDSIconIcVideocam.react",
    "WDSIconIcVideocamFilled.react",
    "WDSMenuBarItem.react",
    "WDSText.react",
    "WDSTooltip.react",
    "asyncToGeneratorRuntime",
    "fbs",
    "getErrorSafe",
    "isStringNullOrEmpty",
    "nullthrows",
    "react",
    "stylex",
    "useWAWebABPropConfigValue",
    "useWAWebEventTargetValue",
    "useWAWebExternalBetaOptIn",
    "useWAWebIsWinHybridJoinableCallsEnabled",
    "useWAWebMsgValues",
    "useWAWebVoipCanStartCall",
    "useWAWebVoipIsCallingEnabledAndInited",
    "useWAWebWindowSize",
    "useWDSMenu",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S = v || (v = o("react")),
      R = v,
      L = R.useCallback,
      E = R.useEffect,
      k = R.useMemo,
      I = R.useRef,
      T = R.useState,
      D = n("$InternalEnum").Mirrored(["NONE", "BETA", "DESKTOP"]),
      x = {
        callDropdownShadow: { boxShadow: "xs2e80n", $$css: !0 },
        callButtonIcon: {
          color: "x14ug900",
          height: "x1qx5ct2",
          width: "xw4jnvo",
          $$css: !0,
        },
        customCallButton: {
          alignItems: "x6s0dn4",
          backgroundColor: "x1280gxy x1ubxc9n",
          borderTopColor: "xnj1f2r",
          borderInlineEndColor: "x2uibgs",
          borderBottomColor: "xkveyfu",
          borderInlineStartColor: "x12llq9",
          borderStartStartRadius: "xt8t1vi",
          borderStartEndRadius: "x1xc408v",
          borderEndEndRadius: "x129tdwq",
          borderEndStartRadius: "x15urzxu",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          columnGap: "x1s70e7g",
          cursor: "x1ypdohk x1s07b3s",
          display: "x78zum5",
          minHeight: "x1ba4aug",
          opacity: "x1hc1fzr x1lfpgzf",
          paddingTop: "x16ovd2e",
          paddingBottom: "x12xbjc7",
          paddingInlineStart: "xdx6fka",
          paddingInlineEnd: "xvtqlqk",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        buttonMargin: { marginInlineStart: "x150mmf0", $$css: !0 },
        unifiedButtonMargin: {
          marginInlineStart: "x150mmf0",
          marginInlineEnd: "xqf2s3x",
          $$css: !0,
        },
      };
    function $(t) {
      var a,
        i,
        l = t.callFromUI,
        v = l === void 0 ? 0 : l,
        R = t.callLinkCode,
        $ = R === void 0 ? "" : R,
        P = t.chat,
        N = t.isCallLinkVideo,
        M = N === void 0 ? !1 : N,
        w = t.isStartCallDisabled,
        A = w === void 0 ? !1 : w,
        F = t.lobbyEntryPoint,
        O = F === void 0 ? 0 : F,
        B = t.participants,
        W = t.surface,
        q = o(
          "useWAWebVoipIsCallingEnabledAndInited",
        ).useWAWebVoipIsCallingEnabledAndInited(),
        U = q.enabled,
        V = q.inited,
        H = q.initErrored,
        G = o(
          "useWAWebIsWinHybridJoinableCallsEnabled",
        ).useIsWinHybridJoinableCallsEnabled(),
        z =
          o("useWAWebABPropConfigValue").useABPropConfigValue(
            "add_to_call_in_chat_thread",
          ) > 0,
        j = r("useWAWebEventTargetValue")(
          o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection,
          "all",
          function () {
            return o(
              "WAWebVoipOngoingCallCollection",
            ).WAWebVoipOngoingCallCollection.getByChat(P);
          },
        ),
        K = o("useWAWebMsgValues").useOptionalMsgValues(
          (a = j == null ? void 0 : j.id) != null ? a : null,
          [o("WAWebMsgGetters").getSelfOtherDeviceConnected],
        ),
        Q = (i = K == null ? void 0 : K[0]) != null ? i : !1,
        X = o("WAWebChatGetters").getIsGroup(P),
        Y = o("WAWebVoipGatingUtils").isUnsupportedBrowserForWebCalling(),
        J =
          !o("useWAWebVoipCanStartCall").useWAWebVoipCanStartCall(P) || A || Y,
        Z = o(
          "useWAWebVoipCanStartCall",
        ).useWAWebVoipIsCapiCallingPermissionAllowed(P),
        ee = I(null),
        te = I(null),
        ne = I(null),
        re = I(null),
        oe = L(function (e) {
          ((ne.current = e), (re.current = e));
        }, []),
        ae = o("WAWebPopoverContext.react").useWAWebPopoverControllerRef(),
        ie = o("WAWebPopoverContext.react").useWAWebPopoverControllerRef(),
        le = o("WAWebPopoverContext.react").useWAWebPopoverControllerRef(),
        se = I(!1),
        ue = I(r("WAWebNoop")),
        ce = I(r("WAWebNoop")),
        de = T(!1),
        me = de[0],
        pe = de[1],
        _e = k(function () {
          return new (o(
            "WAWebPreCallUserJourneyLogger",
          ).PreCallUserJourneyLogger)();
        }, []),
        fe = o("WAWebVoipGatingUtils").isGroupCallingEnabled(),
        ge = function (n) {
          if (
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: header: start call, isVideo: ",
                  ", groupType: ",
                  "",
                ])),
              n,
              P.groupType,
            ),
            !Z)
          ) {
            o("WAWebModalManager").ModalManager.open(
              S.jsx(r("WAWebVoipCoexCallingPermissionDisabledModal.react"), {}),
            );
            return;
          }
          B != null && B.length > 1
            ? (o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: header: starting ad hoc group call",
                  ])),
              ),
              o("WAWebVoipStartCall").startWAWebVoipGroupCallFromWids(
                B,
                n,
                v,
                O,
              ))
            : P.groupType === void 0
              ? (o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: header: starting 1:1 call",
                    ])),
                ),
                o("WAWebVoipStartCall").startWAWebVoipCall(
                  P.contact.id,
                  n,
                  v,
                  O,
                ))
              : (o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: header: starting group call",
                    ])),
                ),
                o("WAWebVoipStartCall").startWAWebVoipGroupCallFromChat(
                  P,
                  n,
                  v,
                  O,
                ));
        },
        he = r("useWDSMenu")({
          targetRef: re,
          menu: S.jsx(r("WAWebSingleCallDropdownContent.react"), {
            chat: P,
            enableWebGroupCalling: fe,
            handleCall: ge,
            isCallingDisabled: J,
            logger: _e,
            onActionTaken: function () {
              se.current = !0;
            },
            onClose: function () {
              return ue.current();
            },
          }),
          align: "start",
          onClose: function () {
            (se.current ||
              _e.dismissChatThread(
                o("WAWebWamEnumSubSurface").SUB_SURFACE.CALL_DROPDOWN_MENU,
              ),
              (se.current = !1));
          },
        }),
        ye = he.closeMenu,
        Ce = he.isMenuOpen,
        be = he.menuPortal,
        ve = he.openMenu;
      E(
        function () {
          ue.current = ye;
        },
        [ye],
      );
      var Se = L(
          function () {
            Ce ? ye() : ve();
          },
          [Ce, ye, ve],
        ),
        Re = I(null),
        Le = L(function (e) {
          ((ee.current = e), (Re.current = e));
        }, []),
        Ee = r("useWDSMenu")({
          targetRef: Re,
          enableUIM: !1,
          menu: S.jsx(r("WAWebGroupCallDropdownContent.react"), {
            chat: P,
            isCallingDisabled: J,
            logger: _e,
            onActionTaken: function () {
              se.current = !0;
            },
            onClose: function () {
              return ce.current();
            },
          }),
          align: "start",
          onClose: function () {
            (se.current ||
              _e.dismissChatThread(
                o("WAWebWamEnumSubSurface").SUB_SURFACE.CALL_DROPDOWN_MENU,
              ),
              (se.current = !1));
          },
        }),
        ke = Ee.closeMenu,
        Ie = Ee.isMenuOpen,
        Te = Ee.menuPortal,
        De = Ee.openMenu;
      E(
        function () {
          ce.current = ke;
        },
        [ke],
      );
      var xe = L(
          function () {
            Ie ? ke() : De();
          },
          [Ie, ke, De],
        ),
        $e = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "enable_wds_calling_dropdown",
        ),
        Pe =
          o("useWAWebABPropConfigValue").useABPropConfigValue(
            "enable_web_calling_nux",
          ) && !r("WAWebEnvironment").isWindows,
        Ne = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "enable_web_calling_beta_upsell",
        ),
        Me = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "group_call_max_participants",
        ),
        we = r("useWAWebWindowSize")(),
        Ae = we.width < o("WAWebScreenWidthThresholds").NARROW_SCREEN_THRESHOLD,
        Fe =
          o("useWAWebABPropConfigValue").useABPropConfigValue(
            "enable_unified_call_buttons_in_chat",
          ) &&
          W !==
            o("WAWebCallButtonsSurface").WAWebCallButtonsSurface
              .CallLogDetails &&
          W !== o("WAWebCallButtonsSurface").WAWebCallButtonsSurface.IconOnly,
        Oe = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "unified_calling_entry_point_desktop_type",
        ),
        Be = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection"),
          o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallCollectionEvents.ACTIVE_CALL,
          ),
          function () {
            return r("WAWebCallCollection").activeCall;
          },
        ),
        We = r("useWAWebEventTargetValue")(
          o("WAWebVoipUiPopoutWindowPortalContainer.react")
            .WAWebVoipUiPopoutWindowEventEmitter,
          "setPopoutWindowProps",
          function () {
            return o(
              "WAWebVoipUiPopoutWindowPortalContainer.react",
            ).getIsCallActiveInPopoutWindow();
          },
        ),
        qe = r("useWAWebEventTargetValue")(
          o("WAWebVoipUiDocPipPortalContainer.react")
            .WAWebVoipUiDocPipEventEmitter,
          "docPipOpenStateChanged",
          function () {
            return o(
              "WAWebVoipUiDocPipPortalContainer.react",
            ).getIsDocPipWindowOpen();
          },
        ),
        Ue = We || qe,
        Ve = !r("WAWebEnvironment").isWindows,
        He = function () {
          if (j == null || Be == null) return !1;
          var e = Be.id,
            t = o("WAWebMsgGetters").getCallId(j);
          return e === t;
        },
        Ge = function () {
          return j == null || He() ? !1 : Q != null ? Q : !1;
        },
        ze = function () {
          var e = o("WAWebCallLogUtils").getJoinButtonTextType(
            He(),
            Ge(),
            o("WAWebVoipGatingUtils").isDeviceSwitchingEnabled(),
          );
          return e === "return"
            ? r("fbs")._(/*BTDS*/ "Return")
            : e === "join_here"
              ? r("fbs")._(/*BTDS*/ "Join here")
              : e === "join"
                ? r("fbs")._(/*BTDS*/ "Join")
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        e,
                    );
                  })();
        },
        je = o("useWAWebExternalBetaOptIn").useExternalBetaOptIn(),
        Ke = je[0],
        Qe = o("WAWebDesktopUpsellUtils").getUserDesktopOs(),
        Xe = D.NONE;
      if (r("WAWebEnvironment").isWeb) {
        if (U && !V && !H && !Y) return null;
        if (X) {
          var Ye,
            Je,
            Ze,
            et = r("WAWebGroupMetadataCollection").get(P.id.toString()),
            tt =
              (Ye =
                (Je = et == null ? void 0 : et.size) != null
                  ? Je
                  : et == null || (Ze = et.participants) == null
                    ? void 0
                    : Ze.length) != null
                ? Ye
                : 0;
          if (tt > Me) return null;
          if (!o("WAWebVoipGatingUtils").isGroupCallingEnabled() && !Y)
            if (Qe != null) Xe = D.DESKTOP;
            else return null;
        } else if (!o("WAWebVoipGatingUtils").isCallingEnabled() && !Y)
          if (!Ke && Ne) Xe = D.BETA;
          else if (Qe != null) Xe = D.DESKTOP;
          else return null;
      }
      var nt = Xe !== D.NONE,
        rt = s._(
          /*BTDS*/ "Your browser doesn't support calling. Please update your browser or try another browser.",
        ),
        ot,
        at;
      Y
        ? ((ot = rt), (at = rt))
        : X
          ? ((ot = s._(/*BTDS*/ "Group voice call")),
            (at = s._(/*BTDS*/ "Group video call")))
          : ((ot = s._(/*BTDS*/ "Voice call")),
            (at = s._(/*BTDS*/ "Video call")));
      var it = function (t) {
          return Y
            ? S.jsx(r("WDSTooltip.react"), { label: rt, children: t })
            : t;
        },
        lt = function (t) {
          var e,
            n = t ? ae : ie;
          (e = n.current) == null || e.hidePopover();
        };
      if (
        G &&
        j != null &&
        !o("WAWebMsgGetters").getIsCallLink(j) &&
        P.id.isGroup()
      )
        return S.jsx(
          "div",
          babelHelpers.extends(
            {},
            (b || (b = r("stylex"))).props(
              r("WAWebMenuBarStyles").itemButton,
              x.buttonMargin,
            ),
            {
              children: S.jsx(r("WDSButton.react"), {
                label: ze(),
                Icon: j.isVideoCall
                  ? r("WDSIconIcVideocamFilled.react")
                  : r("WDSIconIcCallFilled.react"),
                variant: "filled",
                disabled: Ve && He() && !Ue,
                onPress: function () {
                  Ve && He()
                    ? (window.focus(),
                      o("WAWebVoipUiManager").closeVoipUiPopoutWindow({
                        callEnded: !1,
                      }))
                    : o("WAWebVoipStartCall").joinOngoingWAWebVoipGroupCallPN(
                        r("nullthrows")(o("WAWebMsgGetters").getCallId(j)),
                        P,
                        o("WAWebMsgGetters").getIsVideoCall(j),
                        W ===
                          o("WAWebCallButtonsSurface").WAWebCallButtonsSurface
                            .CallLogDetails
                          ? o("WAWebWamEnumLobbyEntryPointType")
                              .LOBBY_ENTRY_POINT_TYPE.CALL_LOG
                          : o("WAWebWamEnumLobbyEntryPointType")
                              .LOBBY_ENTRY_POINT_TYPE.CHAT_HEADER,
                        o("WAWebVoipGatingUtils").isDeviceSwitchingEnabled() &&
                          Ge(),
                      );
                },
              }),
            },
          ),
        );
      if (
        W ===
          o("WAWebCallButtonsSurface").WAWebCallButtonsSurface.CallLogDetails &&
        !r("isStringNullOrEmpty")($)
      )
        return S.jsx(
          "div",
          babelHelpers.extends(
            {},
            (b || (b = r("stylex"))).props(
              r("WAWebMenuBarStyles").itemButton,
              x.buttonMargin,
            ),
            {
              children: S.jsx(r("WDSButton.react"), {
                label: r("fbs")._(/*BTDS*/ "Join"),
                Icon: r(
                  M
                    ? "WDSIconIcVideocamFilled.react"
                    : "WDSIconIcCallFilled.react",
                ),
                variant: "filled",
                onPress: function () {
                  n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                    o("WALogger").LOG(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: preview call link: CallLinkCode=",
                          ", isVideo=",
                          "",
                        ])),
                      $,
                      M,
                    );
                    try {
                      var e = yield o(
                        "WAWebVoipStackInterface",
                      ).getVoipStackInterface();
                      if ($) {
                        var t = o(
                          "WAWebFrontendContactGetters",
                        ).getMyUsername();
                        (yield e == null
                          ? void 0
                          : e.previewCallLink(
                              $,
                              M != null ? M : !1,
                              o("WAWebWamEnumLobbyEntryPointType")
                                .LOBBY_ENTRY_POINT_TYPE.CALL_LINK_CALL_LOG,
                              t,
                            ),
                          o("WALogger").LOG(
                            p ||
                              (p = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: preview call link initiated successfully",
                              ])),
                          ));
                      } else
                        o("WALogger").ERROR(
                          _ ||
                            (_ = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: preview call link failed - CallLinkCode is empty",
                            ])),
                        );
                    } catch (e) {
                      o("WALogger")
                        .ERROR(
                          f ||
                            (f = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: preview call link failed",
                            ])),
                        )
                        .catching(r("getErrorSafe")(e));
                    }
                  })();
                },
              }),
            },
          ),
        );
      var st = function (t) {
          var e = t
              ? S.jsx(r("WDSIconIcVideocam.react"), {})
              : S.jsx(r("WDSIconIcCall.react"), {}),
            n = t ? at : ot,
            a = t ? ee : te,
            i = t ? ae : ie;
          return S.jsxs(S.Fragment, {
            children: [
              it(
                S.jsx(r("WDSMenuBarItem.react"), {
                  ref: a,
                  tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
                  testid: void 0,
                  title: n,
                  icon: r(
                    t ? "WDSIconIcVideocam.react" : "WDSIconIcCall.react",
                  ),
                  disabled: J,
                  marginInlineXstyle: x.buttonMargin,
                }),
              ),
              S.jsx(o("WAWebDropdownV2.react").DropdownV2Menu, {
                xstyle: x.callDropdownShadow,
                controllerRef: i,
                position: o("WAWebDropdownV2.react").PopoverPosition.Bottom,
                alignment: o("WAWebDropdownV2.react").PopoverAlignment.End,
                target: a,
                maxHeight: 488,
                onClose: function () {
                  (se.current ||
                    _e.dismissChatThread(
                      o("WAWebWamEnumSubSurface").SUB_SURFACE
                        .ADD_PARTICIPANT_PICKER,
                    ),
                    (se.current = !1));
                },
                children: S.jsx(
                  r("WAWebGroupCallParticipantSelector.react"),
                  {
                    chat: P,
                    icon: e,
                    isCallingDisabled: J,
                    isVideo: t,
                    logger: _e,
                    onActionTaken: function () {
                      se.current = !0;
                    },
                    onCallStart: lt,
                    useUnifiedUI: !1,
                  },
                  P.id.toString(),
                ),
              }),
            ],
          });
        },
        ut = function () {
          return (o("WAWebVoipGatingUtils").isCallingEnabled() &&
            o("WAWebVoipGatingUtils").isUnsupportedBrowserForWebCalling()) ||
            H
            ? null
            : Xe === D.BETA
              ? S.jsx(r("WAWebVoipBetaCallingUpsellPopover.react"), {
                  onClick: function () {
                    var e, t, n;
                    ((e = ae.current) == null || e.hidePopover(),
                      (t = ie.current) == null || t.hidePopover(),
                      (n = le.current) == null || n.hidePopover(),
                      o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
                        o(
                          "WAWebAdaptiveLayoutGatingUtils",
                        ).shouldUseDrawerDescriptor()
                          ? {
                              descriptorType: "settings",
                              initialStep:
                                o("WAWebSettingsConst").SettingsSteps.Help,
                            }
                          : S.jsx(
                              o("WAWebSettingsFlowLoadable")
                                .SettingsFlowLoadable,
                              {
                                onEnd: o("WAWebDrawerManager").closeDrawerLeft,
                                initialStep:
                                  o("WAWebSettingsConst").SettingsSteps.Help,
                              },
                            ),
                      ));
                  },
                })
              : Xe === D.DESKTOP
                ? S.jsx(
                    r("WAWebDesktopUpsellCallingUnavailablePopover.react"),
                    { userDesktopOs: r("WANullthrows")(Qe), isGroupCall: X },
                  )
                : null;
        },
        ct = function () {
          if (nt) {
            var e = ut();
            return S.jsxs(S.Fragment, {
              children: [
                S.jsxs(r("WAWebUnstyledButton.react"), {
                  ref: ee,
                  xstyle: [x.customCallButton, x.unifiedButtonMargin],
                  dataTab: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
                  "aria-label": at,
                  "aria-haspopup": "menu",
                  "aria-expanded": me,
                  children: [
                    S.jsx(r("WDSIconIcVideocam.react"), {
                      iconXstyle: x.callButtonIcon,
                    }),
                    S.jsx(r("WDSText.react"), {
                      type: "Body2Emphasized",
                      textAlign: "center",
                      selectable: !1,
                      colorName: "contentDefault",
                      children: s._(/*BTDS*/ "Call"),
                    }),
                    S.jsx(r("WDSIconIcArrowDropDown.react"), {
                      iconXstyle: x.callButtonIcon,
                    }),
                  ],
                }),
                S.jsx(o("WAWebDropdownV2.react").DropdownV2Menu, {
                  xstyle: x.callDropdownShadow,
                  controllerRef: ae,
                  position: o("WAWebDropdownV2.react").PopoverPosition.Bottom,
                  alignment: o("WAWebDropdownV2.react").PopoverAlignment.End,
                  target: ee,
                  maxHeight: 488,
                  onOpen: function () {
                    pe(!0);
                  },
                  onClose: function () {
                    pe(!1);
                  },
                  children: e,
                }),
              ],
            });
          }
          return Oe === 0
            ? S.jsxs(S.Fragment, {
                children: [
                  it(
                    S.jsxs(r("WAWebUnstyledButton.react"), {
                      testid: void 0,
                      ref: $e ? Le : ee,
                      xstyle: [x.customCallButton, x.unifiedButtonMargin],
                      disabled: J,
                      dataTab: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
                      "aria-label": at,
                      "aria-haspopup": "menu",
                      "aria-expanded": $e ? Ie : me,
                      role: "button",
                      onClick: $e ? xe : void 0,
                      children: [
                        S.jsx(r("WDSIconIcVideocam.react"), {
                          iconXstyle: x.callButtonIcon,
                        }),
                        S.jsx(r("WDSText.react"), {
                          type: "Body2Emphasized",
                          textAlign: "center",
                          selectable: !1,
                          colorName: "contentDefault",
                          children: s._(/*BTDS*/ "Call"),
                        }),
                        S.jsx(r("WDSIconIcArrowDropDown.react"), {
                          iconXstyle: x.callButtonIcon,
                        }),
                      ],
                    }),
                  ),
                  $e
                    ? Te
                    : S.jsx(o("WAWebDropdownV2.react").DropdownV2Menu, {
                        xstyle: x.callDropdownShadow,
                        controllerRef: ae,
                        position: o("WAWebDropdownV2.react").PopoverPosition
                          .Bottom,
                        alignment: o("WAWebDropdownV2.react").PopoverAlignment
                          .End,
                        target: ee,
                        maxHeight: 488,
                        onOpen: function () {
                          pe(!0);
                        },
                        onClose: function () {
                          (pe(!1),
                            se.current ||
                              _e.dismissChatThread(
                                o("WAWebWamEnumSubSurface").SUB_SURFACE
                                  .ADD_PARTICIPANT_PICKER,
                              ),
                            (se.current = !1));
                        },
                        children: S.jsx(
                          r("WAWebGroupCallParticipantSelector.react"),
                          {
                            chat: P,
                            icon: S.jsx(r("WDSIconIcVideocam.react"), {}),
                            isCallingDisabled: J,
                            isVideo: !0,
                            logger: _e,
                            onActionTaken: function () {
                              se.current = !0;
                            },
                            onCallStart: lt,
                            useUnifiedUI: !0,
                          },
                          P.id.toString(),
                        ),
                      }),
                ],
              })
            : S.jsxs(S.Fragment, {
                children: [
                  it(
                    S.jsx(r("WDSButton.react"), {
                      testid: void 0,
                      variant: "borderless",
                      size: "medium",
                      type: "default",
                      ref: $e ? Le : ee,
                      Icon: r("WDSIconIcVideocam.react"),
                      showEndDropdownIcon: !0,
                      disabled: J,
                      onPress: $e
                        ? xe
                        : function () {
                            var e;
                            (_e.clickCallDropdown(
                              o("WAWebWamEnumSubSurface").SUB_SURFACE
                                .CHAT_HEADER,
                            ),
                              (e = ae.current) == null || e.showPopover());
                          },
                      "aria-label": at,
                    }),
                  ),
                  $e
                    ? Te
                    : S.jsx(o("WAWebDropdownV2.react").DropdownV2Menu, {
                        xstyle: x.callDropdownShadow,
                        controllerRef: ae,
                        position: o("WAWebDropdownV2.react").PopoverPosition
                          .Bottom,
                        alignment: o("WAWebDropdownV2.react").PopoverAlignment
                          .End,
                        target: ee,
                        maxHeight: 488,
                        onOpen: function () {
                          pe(!0);
                        },
                        onClose: function () {
                          (pe(!1),
                            se.current ||
                              _e.dismissChatThread(
                                o("WAWebWamEnumSubSurface").SUB_SURFACE
                                  .ADD_PARTICIPANT_PICKER,
                              ),
                            (se.current = !1));
                        },
                        children: S.jsx(
                          r("WAWebGroupCallParticipantSelector.react"),
                          {
                            chat: P,
                            icon: S.jsx(r("WDSIconIcVideocam.react"), {}),
                            isCallingDisabled: J,
                            isVideo: !0,
                            logger: _e,
                            onActionTaken: function () {
                              se.current = !0;
                            },
                            onCallStart: lt,
                            useUnifiedUI: !0,
                          },
                          P.id.toString(),
                        ),
                      }),
                ],
              });
        },
        dt = function () {
          if (Be == null) return !1;
          if (X && Be.isGroup) {
            var e, t;
            return (e = (t = Be.groupJid) == null ? void 0 : t.equals(P.id)) !=
              null
              ? e
              : !1;
          }
          if (!X && Be.groupCallParticipants != null)
            return Be.groupCallParticipants.some(function (e) {
              var t,
                n = o("WAWebLidMigrationUtils").toCommonAddressingMode(e, P.id),
                r = n[0],
                a = n[1];
              return (t = r == null ? void 0 : r.equals(a)) != null ? t : !1;
            });
          if (!X && !Be.isGroup) {
            var n,
              r = o("WAWebLidMigrationUtils").toCommonAddressingMode(
                Be.peerJid,
                P.id,
              ),
              a = r[0],
              i = r[1];
            return (n = a == null ? void 0 : a.equals(i)) != null ? n : !1;
          }
          return !1;
        },
        mt = Ae || o("WAWebMobilePlatforms").isSMB(),
        pt = function () {
          if (nt) {
            var e = ut();
            return S.jsxs(S.Fragment, {
              children: [
                S.jsxs(r("WAWebUnstyledButton.react"), {
                  testid: void 0,
                  ref: ne,
                  xstyle: [x.customCallButton, x.unifiedButtonMargin],
                  dataTab: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
                  "aria-label": at,
                  role: "button",
                  children: [
                    S.jsx(r("WDSIconIcVideocam.react"), {
                      iconXstyle: x.callButtonIcon,
                    }),
                    !mt &&
                      S.jsx(r("WDSText.react"), {
                        type: "Body2Emphasized",
                        textAlign: "center",
                        selectable: !1,
                        colorName: "contentDefault",
                        children: s._(/*BTDS*/ "Call"),
                      }),
                    S.jsx(r("WDSIconIcArrowDropDown.react"), {
                      iconXstyle: x.callButtonIcon,
                    }),
                  ],
                }),
                S.jsx(o("WAWebDropdownV2.react").DropdownV2Menu, {
                  xstyle: x.callDropdownShadow,
                  controllerRef: le,
                  position: o("WAWebDropdownV2.react").PopoverPosition.Bottom,
                  alignment: o("WAWebDropdownV2.react").PopoverAlignment.End,
                  target: ne,
                  maxHeight: 488,
                  children: e,
                }),
              ],
            });
          }
          return S.jsxs(S.Fragment, {
            children: [
              it(
                S.jsxs(r("WAWebUnstyledButton.react"), {
                  testid: void 0,
                  ref: $e ? oe : ne,
                  xstyle: [x.customCallButton, x.unifiedButtonMargin],
                  disabled: J,
                  dataTab: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
                  "aria-label": at,
                  "aria-haspopup": "menu",
                  "aria-expanded": Ce,
                  role: "button",
                  onClick: $e ? Se : void 0,
                  children: [
                    S.jsx(r("WDSIconIcVideocam.react"), {
                      iconXstyle: x.callButtonIcon,
                    }),
                    !mt &&
                      S.jsx(r("WDSText.react"), {
                        type: "Body2Emphasized",
                        textAlign: "center",
                        selectable: !1,
                        colorName: "contentDefault",
                        children: s._(/*BTDS*/ "Call"),
                      }),
                    S.jsx(r("WDSIconIcArrowDropDown.react"), {
                      iconXstyle: x.callButtonIcon,
                    }),
                  ],
                }),
              ),
              $e
                ? be
                : S.jsx(o("WAWebDropdownV2.react").DropdownV2Menu, {
                    xstyle: x.callDropdownShadow,
                    controllerRef: le,
                    position: o("WAWebDropdownV2.react").PopoverPosition.Bottom,
                    alignment: o("WAWebDropdownV2.react").PopoverAlignment.End,
                    target: ne,
                    maxHeight: 488,
                    onClose: function () {
                      (se.current ||
                        _e.dismissChatThread(
                          o("WAWebWamEnumSubSurface").SUB_SURFACE
                            .CALL_DROPDOWN_MENU,
                        ),
                        (se.current = !1));
                    },
                    children: S.jsx(
                      r("WAWebSingleCallLegacyDropdownContent.react"),
                      {
                        chat: P,
                        enableWebGroupCalling: fe,
                        handleCall: ge,
                        isCallingDisabled: J,
                        logger: _e,
                        onActionTaken: function () {
                          se.current = !0;
                        },
                        onClose: function () {
                          var e;
                          return (e = le.current) == null
                            ? void 0
                            : e.hidePopover();
                        },
                      },
                    ),
                  }),
            ],
          });
        },
        _t = function (t) {
          if (
            !z ||
            W ===
              o("WAWebCallButtonsSurface").WAWebCallButtonsSurface.IconOnly ||
            Be == null
          )
            return !1;
          var e = dt();
          return e
            ? !1
            : Be.isGroup && Be.groupJid == null
              ? !0
              : Be.isGroup
                ? !1
                : (t && Be.isVideo) || (!t && !Be.isVideo);
        },
        ft = function (t) {
          if (
            (t
              ? _e.clickVideoCall(
                  o("WAWebWamEnumSubSurface").SUB_SURFACE.CHAT_HEADER,
                )
              : _e.clickAudioCall(
                  o("WAWebWamEnumSubSurface").SUB_SURFACE.CHAT_HEADER,
                ),
            _t(t))
          ) {
            var e,
              n = t ? ae : ie;
            (e = n.current) == null || e.showPopover();
          } else ge(t);
        },
        gt = function () {
          if (Fe && Oe === 0) return pt();
          var e = J,
            t = J;
          if (
            z &&
            W !==
              o("WAWebCallButtonsSurface").WAWebCallButtonsSurface.IconOnly &&
            !Y
          ) {
            var a = dt();
            a
              ? ((e = !0), (t = !0))
              : Be != null &&
                (Be.isGroup && Be.groupJid != null
                  ? ((e = !0), (t = !0))
                  : ((e = !Be.isVideo), (t = Be.isVideo)));
          }
          var i = it(
              S.jsx(r("WDSMenuBarItem.react"), {
                ref: ee,
                tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
                testid: void 0,
                icon: r("WDSIconIcVideocam.react"),
                onClick: function () {
                  return ft(!0);
                },
                disabled: e,
                title: at,
                marginInlineXstyle: x.buttonMargin,
              }),
            ),
            l = it(
              S.jsx(r("WDSMenuBarItem.react"), {
                ref: te,
                tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
                testid: void 0,
                icon: r("WDSIconIcCall.react"),
                onClick: function () {
                  return ft(!1);
                },
                disabled: t,
                title: ot,
                marginInlineXstyle: x.buttonMargin,
              }),
            ),
            u = _t(!0)
              ? S.jsx(o("WAWebDropdownV2.react").DropdownV2Menu, {
                  xstyle: x.callDropdownShadow,
                  controllerRef: ae,
                  position: o("WAWebDropdownV2.react").PopoverPosition.Bottom,
                  alignment: o("WAWebDropdownV2.react").PopoverAlignment.End,
                  target: ee,
                  maxHeight: 488,
                  children: S.jsx(
                    o("WAWebActionMenuItem.react").ActionMenuItem,
                    {
                      optionId: "add-to-call-video",
                      detailLeft: S.jsx(
                        o("WAWebAddUserIcon.react").AddUserIcon,
                        {},
                      ),
                      primary: s._(/*BTDS*/ "Add to call"),
                      onSelect: n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* () {
                          var e;
                          o("WALogger").LOG(
                            g ||
                              (g = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: add to call clicked for video call with chat: ",
                                "",
                              ])),
                            P.id.toString(),
                          );
                          try {
                            yield o("WAWebVoipStartCall").inviteToCall(P.id);
                          } catch (e) {
                            o("WALogger")
                              .ERROR(
                                h ||
                                  (h = babelHelpers.taggedTemplateLiteralLoose([
                                    "voip: add to call failed for ",
                                    "",
                                  ])),
                                P.id.toString(),
                              )
                              .catching(r("getErrorSafe")(e));
                          }
                          (e = ae.current) == null || e.hidePopover();
                        },
                      ),
                    },
                  ),
                })
              : null,
            c = _t(!1)
              ? S.jsx(o("WAWebDropdownV2.react").DropdownV2Menu, {
                  xstyle: x.callDropdownShadow,
                  controllerRef: ie,
                  position: o("WAWebDropdownV2.react").PopoverPosition.Bottom,
                  alignment: o("WAWebDropdownV2.react").PopoverAlignment.End,
                  target: te,
                  maxHeight: 488,
                  children: S.jsx(
                    o("WAWebActionMenuItem.react").ActionMenuItem,
                    {
                      optionId: "add-to-call-voice",
                      detailLeft: S.jsx(
                        o("WAWebAddUserIcon.react").AddUserIcon,
                        {},
                      ),
                      primary: s._(/*BTDS*/ "Add to call"),
                      onSelect: n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* () {
                          var e;
                          o("WALogger").LOG(
                            y ||
                              (y = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: add to call clicked for voice call with chat: ",
                                "",
                              ])),
                            P.id.toString(),
                          );
                          try {
                            yield o("WAWebVoipStartCall").inviteToCall(P.id);
                          } catch (e) {
                            o("WALogger")
                              .ERROR(
                                C ||
                                  (C = babelHelpers.taggedTemplateLiteralLoose([
                                    "voip: add to call failed for ",
                                    "",
                                  ])),
                                P.id.toString(),
                              )
                              .catching(r("getErrorSafe")(e));
                          }
                          (e = ie.current) == null || e.hidePopover();
                        },
                      ),
                    },
                  ),
                })
              : null;
          return S.jsxs(S.Fragment, { children: [i, u, l, c] });
        },
        ht = function () {
          if (P.id.isGroup()) return !0;
          if (B == null) return !1;
          var e = B.filter(function (e) {
            return !o("WAWebUserPrefsMeUser").isMeAccount(e);
          });
          return e.length <= 1;
        },
        yt = gt();
      return S.jsxs(S.Fragment, {
        children: [
          W ===
            o("WAWebCallButtonsSurface").WAWebCallButtonsSurface
              .CallLogDetails &&
            ht() &&
            S.jsx(r("WDSMenuBarItem.react"), {
              tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
              testid: void 0,
              icon: o("WAWebChatsOutlineIcon.react").ChatsOutlineIcon,
              onClick: function () {
                return o("WAWebVoipActionRequestOpenChat").requestOpenChat(
                  P.id,
                );
              },
              title: r("fbs")._(/*BTDS*/ "Messages"),
              marginInlineXstyle: x.buttonMargin,
            }),
          X && Fe && ct(),
          X &&
            Fe &&
            Oe === 1 &&
            S.jsx("div", { className: "xamitd3 x3x0x6p xxk0z11 x1i1rx1s" }),
          X && !Fe && S.jsxs(S.Fragment, { children: [st(!0), st(!1)] }),
          !X && yt,
          !X &&
            Pe &&
            o("WAWebVoipGatingUtils").isCallingEnabled() &&
            !o("WAWebVoipGatingUtils").isUnsupportedBrowserForWebCalling() &&
            !H &&
            S.jsx(r("WAWebVoipCallingNux.react"), {
              targetRef: ne,
              nuxKey: o("WAWebNux").NUX.WEB_CALLING_1_1_NUX,
            }),
          X &&
            Fe &&
            Pe &&
            o("WAWebVoipGatingUtils").isGroupCallingEnabled() &&
            !o("WAWebVoipGatingUtils").isUnsupportedBrowserForWebCalling() &&
            !H &&
            S.jsx(r("WAWebVoipCallingNux.react"), {
              targetRef: ee,
              nuxKey: o("WAWebNux").NUX.WEB_CALLING_GROUP_NUX,
            }),
        ],
      });
    }
    (($.displayName = $.name + " [from " + i.id + "]"),
      (l.WAWebCallButtons = $));
  },
  226,
);
