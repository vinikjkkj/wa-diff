__d(
  "WAWebHeader.react",
  [
    "fbt",
    "WAJids",
    "WAWebABProps",
    "WAWebActions",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebBizGatingUtils",
    "WAWebBlockContactUtils",
    "WAWebBlockContants",
    "WAWebBotFrontendGating",
    "WAWebBotGating",
    "WAWebBotUtils",
    "WAWebBroadcastMenuDropdown.react",
    "WAWebBroadcastSubtitle.react",
    "WAWebBusinessProfileCollection",
    "WAWebCallButtonsSurface",
    "WAWebChatAssignmentNux.react",
    "WAWebChatAssignmentUtils",
    "WAWebChatGetters",
    "WAWebChatGroupUtils",
    "WAWebChatHeaderTextStatusBubble.react",
    "WAWebChatSearchDrawer.react",
    "WAWebCmd",
    "WAWebCommerceButton.react",
    "WAWebConnModel",
    "WAWebContactGetters",
    "WAWebContactMenuDropdown.react",
    "WAWebConversationMenus",
    "WAWebConversationPanelStyleUtils",
    "WAWebCustomerManagerGating",
    "WAWebDetailImage.react",
    "WAWebDrawerManager",
    "WAWebDrawerManagerContext",
    "WAWebDrawerManagerGlobalContext",
    "WAWebDropdown.react",
    "WAWebEnvironment",
    "WAWebErrorBoundary.react",
    "WAWebFrontendChatGetters",
    "WAWebFrontendContactGetters",
    "WAWebGroupChatImage.react",
    "WAWebGroupMenuDropdown.react",
    "WAWebGroupSubtitle.react",
    "WAWebGroupType",
    "WAWebIcLabelFilledIcon.react",
    "WAWebInfoFlowLoadable",
    "WAWebKeyboardTabUtils",
    "WAWebL10N",
    "WAWebLabelChatHeaderButton.react",
    "WAWebLabelCollection",
    "WAWebLabelGetters",
    "WAWebLabelOutlineIcon.react",
    "WAWebLabelStackIcon.react",
    "WAWebLabels.react",
    "WAWebLabelsDropdown.react",
    "WAWebLeadStageChatHeaderButton.react",
    "WAWebListIcon.react",
    "WAWebListIconStacked.react",
    "WAWebListPeopleIcon.react",
    "WAWebListsGatingUtils",
    "WAWebMenuBar.react",
    "WAWebMessageLogQplEvents",
    "WAWebMmSignalSharingGatingUtils",
    "WAWebMmSignalSharingTos",
    "WAWebMmSignalSharingUserDisclosedInCollectionWindow",
    "WAWebMobilePlatforms",
    "WAWebName.react",
    "WAWebNewBroadcastHeaderButton.react",
    "WAWebNewsletterChatHeaderSubtitle.react",
    "WAWebNewsletterChatMenuDropdown.react",
    "WAWebNewsletterCommonGatingUtils",
    "WAWebNewsletterConversationPanelHeader.react",
    "WAWebNewsletterGatingUtils",
    "WAWebOpenStatusQuotedFlow",
    "WAWebPrivacyBlurWrapper.react",
    "WAWebShouldShowCallButtons",
    "WAWebSingleChevronInCircleIcon.react",
    "WAWebStackedCirclesImage.react",
    "WAWebStateUtils",
    "WAWebStatusCollection",
    "WAWebStatusImageRing.react",
    "WAWebStylesEnv",
    "WAWebSubgroupSwitcherButton.react",
    "WAWebTabOrder",
    "WAWebThemeContext",
    "WAWebTos",
    "WAWebUISpacing",
    "WAWebUseBusinessProfile.react",
    "WAWebUserSubtitle.react",
    "WAWebVoipCallButtonsLoadable",
    "WAWebWamEnumCallFromUi",
    "WAWebWamEnumLobbyEntryPointType",
    "WAWebWamEnumProfileEntryPoint",
    "WAWebWamEnumStatusRowSection",
    "WDSFocusStateStyles",
    "WDSIconIcMoreVert.react",
    "WDSIconIcSearch.react",
    "WDSMenuBarItem.react",
    "WDSTooltip.react",
    "asyncToGeneratorRuntime",
    "justknobx",
    "nullthrows",
    "react",
    "stylex",
    "useWAWebChatValues",
    "useWAWebContactValues",
    "useWAWebForceUpdate",
    "useWAWebIsKeyboardUser",
    "useWAWebListener",
    "useWAWebModelValues",
    "useWAWebStaticButtonA11y",
    "useWAWebUIM",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useEffect,
      p = d.useRef,
      _ = d.useState,
      f = {
        buttonMargin: { marginInlineStart: "x150mmf0", $$css: !0 },
        chatHeader: {
          position: "x1n2onr6",
          boxSizing: "x9f619",
          display: "x78zum5",
          alignItems: "x6s0dn4",
          width: "xh8yej3",
          height: "x7j6532",
          backgroundColor: "x1h3rtpe",
          "::after_position": "x1j6awrg",
          "::after_bottom": "x1te75w5",
          "::after_insetInlineStart": "x1iygr5g",
          "::after_width": "x4eaejv",
          "::after_height": "xcock1l",
          "::after_content": "x1s928wv",
          "::after_backgroundColor": "xl9llhp",
          "::after_borderBottomWidth": "x1qj619r",
          "::after_borderBottomStyle": "x1r9ni5o",
          "::after_borderBottomColor": "xb1pvdl",
          $$css: !0,
        },
        chatHeaderDarkOverride: {
          boxShadow: "xu306ak",
          "::after_display": "x1h1zc6f",
          $$css: !0,
        },
        chatHeaderStylesOverride: {
          backgroundColor: "x1280gxy",
          borderInlineStartStyle: "xstzfhl",
          $$css: !0,
        },
        chatHeaderMaterial: {
          "::after_content": "x1s928wv",
          "::after_display": "x1h1zc6f",
          $$css: !0,
        },
        chatBody: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          flexGrow: "x1iyjqo2",
          justifyContent: "xl56j7k",
          minWidth: "xeuugli",
          $$css: !0,
        },
        chevronInCircleIcon: {
          position: "x10l6tqk",
          insetInlineEnd: "xo2ifbc",
          left: null,
          right: null,
          bottom: "x1o583il",
          backgroundColor: "x1280gxy",
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          cursor: "x1ypdohk",
          $$css: !0,
        },
        singleLabelIcon: { width: "xvy4d1p", height: "xxk0z11", $$css: !0 },
        labelStackIcon: {
          position: "x10l6tqk",
          top: "xnfr1j",
          insetInlineStart: "x1o0tod",
          left: null,
          right: null,
          $$css: !0,
        },
      };
    function g(e, t) {
      return {
        menu: c.jsx(r("WAWebLabelsDropdown.react"), {
          chat: e,
          onRequestReopen: t,
        }),
        type: o("WAWebDropdown.react").MenuType.DropdownMenu,
        dirX: r("WAWebL10N").isRTL()
          ? o("WAWebDropdown.react").DirX.RIGHT
          : o("WAWebDropdown.react").DirX.LEFT,
        dirY: o("WAWebDropdown.react").DirY.BOTTOM,
        offsetY: 5,
        offsetX: 0,
      };
    }
    function h(e) {
      var t,
        n,
        r,
        a,
        i,
        l =
          e != null &&
          (t = e.groupMetadata) != null &&
          t.participants.iAmAdmin() &&
          (n = e.groupMetadata) != null &&
          n.announce
            ? s._(/*BTDS*/ "Only admins can send messages")
            : s._(/*BTDS*/ "click here for group info"),
        u;
      if (
        ((r = e.groupMetadata) == null ? void 0 : r.groupType) ===
        o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
      ) {
        var c;
        e != null && (c = e.groupMetadata) != null && c.participants.iAmAdmin()
          ? (u = s._(/*BTDS*/ "Only admins can send messages"))
          : (u = s._(/*BTDS*/ "Announcements"));
      } else if (
        ((a = e.groupMetadata) == null ? void 0 : a.groupType) ===
          o("WAWebGroupType").GroupType.LINKED_SUBGROUP &&
        (i = e.groupMetadata) != null &&
        i.participants.iAmMember()
      ) {
        var d,
          m = (d = e.groupMetadata) == null ? void 0 : d.getParentGroupChat(),
          p = m == null ? void 0 : m.contact,
          _ =
            p != null
              ? o("WAWebFrontendContactGetters").getFormattedName(p)
              : null;
        _ != null &&
          (u = s._(/*BTDS*/ "{community}", [s._param("community", _)]));
      }
      return u != null ? u : l;
    }
    function y(e) {
      var t,
        n = (t = e.groupMetadata) == null ? void 0 : t.groupType;
      return (
        n === o("WAWebGroupType").GroupType.COMMUNITY ||
        n === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP ||
        n === o("WAWebGroupType").GroupType.LINKED_SUBGROUP ||
        n === o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP
      );
    }
    function C(e, t, n, r) {
      var a,
        i,
        l =
          (a =
            (i = o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager(
              "mid",
            )) == null
              ? void 0
              : i.existsDrawer()) != null
            ? a
            : !1;
      l ||
        (e.contact.isBusiness &&
          o("WAWebMessageLogQplEvents").qplStartProfileView("Header"),
        (o("WAWebChatGetters").getIsUser(e) ||
          o("WAWebChatGetters").getIsBroadcast(e) ||
          o("WAWebChatGetters").getIsGroup(e) ||
          o("WAWebChatGetters").getIsNewsletter(e)) &&
          o("WAWebDrawerManager").DrawerManager.openDrawerRight(
            o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
              ? {
                  descriptorType: "info_flow",
                  chat: o("WAWebStateUtils").unproxy(e),
                  profileEntryPoint: n,
                  sourceGroupChatOrNewsletter: o("WAWebChatGetters").getIsGroup(
                    e,
                  )
                    ? e
                    : void 0,
                  threadId: r,
                }
              : c.jsx(
                  o("WAWebInfoFlowLoadable").InfoFlowLoadable,
                  {
                    chat: o("WAWebStateUtils").unproxy(e),
                    profileEntryPoint: n,
                    sourceGroupChatOrNewsletter: o(
                      "WAWebChatGetters",
                    ).getIsGroup(e)
                      ? e
                      : void 0,
                    threadId: r,
                  },
                  "info-" + e.id.toString(),
                ),
            {
              transition: "slide-left",
              uim: t,
              focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
            },
          ));
    }
    function b() {
      var e,
        t,
        n =
          (e =
            (t = o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager(
              "right",
            )) == null
              ? void 0
              : t.existsDrawer()) != null
            ? e
            : !1;
      n && o("WAWebDrawerManager").DrawerManager.closeDrawerRight();
    }
    function v(e) {
      var t = e.contact;
      return !o("WAWebCustomerManagerGating").customerManagerEnabled() ||
        !o("WAWebMobilePlatforms").isSMB() ||
        r("WAWebEnvironment").isGuest ||
        !e.canSend ||
        o("WAWebChatGetters").getIsBroadcast(e) ||
        t == null ||
        !o("WAWebCustomerManagerGating").isEligibleForCustomerFields(t)
        ? null
        : c.jsx(r("WAWebLeadStageChatHeaderButton.react"), { chat: e });
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S(e) {
      if (
        !o("WAWebMobilePlatforms").isSMB() ||
        !o("WAWebBizGatingUtils").isCTWASMBLabelChatHeaderEnabledWeb() ||
        r("WAWebEnvironment").isGuest ||
        !e.canSend ||
        o("WAWebChatGetters").getIsBroadcast(e) ||
        (r("WAWebEnvironment").isWindows && y(e))
      )
        return null;
      var t = o("WAWebListsGatingUtils").isListsEnabled(),
        n =
          r("WAWebEnvironment").isWindows || y(e)
            ? c.jsx(o("WAWebMenuBar.react").MenuBarItem, {
                tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
                testid: void 0,
                icon: (function () {
                  var n = e == null ? void 0 : e.labels;
                  if (!n || n.length === 0)
                    return t
                      ? c.jsx(o("WAWebListPeopleIcon.react").ListPeopleIcon, {})
                      : c.jsx(
                          o("WAWebLabelOutlineIcon.react").LabelOutlineIcon,
                          {},
                        );
                  if (n.length === 1) {
                    if (t) {
                      var a = o("WAWebLabelCollection").LabelCollection.get(
                          n[0],
                        ),
                        i =
                          a != null
                            ? o("WAWebLabelGetters").getHexColor(a)
                            : void 0;
                      return c.jsx("div", {
                        className: "x6s0dn4 x78zum5 xxk0z11 xl56j7k xvy4d1p",
                        children: c.jsx(r("WAWebListIcon.react"), {
                          color: i,
                          size: 16,
                        }),
                      });
                    }
                    return c.jsx(o("WAWebLabels.react").Labels, {
                      iconXstyle: f.singleLabelIcon,
                      labels: [n[0]],
                      showName: !1,
                    });
                  }
                  var l = o(
                      "WAWebLabelChatHeaderButton.react",
                    ).getLabelStackInfo(n),
                    s = l.primaryLabel,
                    u = l.secondaryLabel;
                  return t
                    ? c.jsx("div", {
                        className: "x6s0dn4 x78zum5 xxk0z11 xl56j7k xvy4d1p",
                        children: c.jsx(r("WAWebListIconStacked.react"), {
                          colors: [
                            s == null ? void 0 : s.color,
                            u == null ? void 0 : u.color,
                          ].filter(Boolean),
                          size: 16,
                        }),
                      })
                    : c.jsxs("div", {
                        className: "xxk0z11 x1n2onr6 xvy4d1p",
                        children: [
                          c.jsx(
                            o("WAWebIcLabelFilledIcon.react").IcLabelFilledIcon,
                            {
                              width: 24,
                              height: 24,
                              style: {
                                color:
                                  (s == null ? void 0 : s.color) != null
                                    ? s.color
                                    : void 0,
                              },
                              xstyle: f.labelStackIcon,
                            },
                          ),
                          c.jsx(o("WAWebLabelStackIcon.react").LabelStackIcon, {
                            width: 24,
                            height: 24,
                            style: {
                              color:
                                (u == null ? void 0 : u.color) != null
                                  ? u.color
                                  : void 0,
                            },
                            xstyle: f.labelStackIcon,
                          }),
                        ],
                      });
                })(),
                title: s._(/*BTDS*/ "Labels"),
                dropdownMenu: g(e),
              })
            : c.jsx(
                o("WAWebLabelChatHeaderButton.react").LabelChatHeaderButton,
                { chat: e },
              );
      return c.jsx(r("WDSTooltip.react"), {
        label: s._(/*BTDS*/ "Label chat"),
        shortcut: o("WAWebActions").Action.LABEL_CHAT,
        children: n,
      });
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R(t) {
      "use no forget";
      var a,
        i,
        l,
        u = t.chat,
        d = t.onSelectMessages,
        g = t.threadId,
        y = r("useWAWebUIM")(),
        R = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(),
        L = p(null),
        E = p(null),
        k = p(null),
        I = u.contact,
        T = _(function () {
          return o(
            "WAWebMmSignalSharingTos",
          ).isMmSignalSharingDisclosureTosAccepted();
        }),
        D = T[0],
        x = T[1];
      o("useWAWebListener").useListener(
        o("WAWebTos").TosManager,
        "change",
        function () {
          if (
            o(
              "WAWebMmSignalSharingGatingUtils",
            ).isMmSignalSharingDisclosureEnabled()
          ) {
            var e = o(
              "WAWebMmSignalSharingTos",
            ).isMmSignalSharingDisclosureTosAccepted();
            D !== e && x(e);
          }
        },
      );
      var $ = o("useWAWebChatValues").useChatValues(u.id, [
          (i = o("WAWebChatGetters")).getId,
          (l = o("WAWebFrontendChatGetters")).getFormattedTitle,
          l.getPresence,
          i.getIsUser,
          i.getIsNewsletter,
          i.getIsGroup,
          i.getIsBroadcast,
          l.getGroupMetadata,
          i.getIsPSA,
          l.getContact,
          i.getName,
          l.getAssignedAgent,
          l.getIsAssignedToMe,
          l.getNewsletterMetadata,
          l.getMmSignalSharingExpirationWindow,
          i.getCapiThreadControl,
          l.getAttachMediaContents,
        ]),
        P = $[0],
        N = $[1],
        M = $[2],
        w = $[3],
        A = $[4],
        F = $[5],
        O = $[6],
        B = $[7],
        W = $[8],
        q = $[9],
        U = $[10],
        V = $[11],
        H = $[12],
        G = $[13],
        z = $[14],
        j = $[15],
        K = $[16],
        Q =
          A &&
          o("WAWebNewsletterGatingUtils").isNewsletterStatusReceiverEnabled(),
        X = _(function () {
          var e;
          return (e = Q
            ? o("WAWebStatusCollection").StatusCollection.get(u.id)
            : null) != null
            ? e
            : null;
        }),
        Y = X[0],
        J = X[1],
        Z = _(u.id),
        ee = Z[0],
        te = Z[1];
      if (u.id !== ee) {
        var ne;
        (te(u.id),
          J(
            (ne = Q
              ? o("WAWebStatusCollection").StatusCollection.get(u.id)
              : null) != null
              ? ne
              : null,
          ));
      }
      o("useWAWebListener").useListener(
        Q ? o("WAWebStatusCollection").StatusCollection : null,
        ["add", "remove", "change:msgsChanged"],
        function () {
          var e;
          return J(
            (e = o("WAWebStatusCollection").StatusCollection.get(u.id)) != null
              ? e
              : null,
          );
        },
      );
      var re = r("useWAWebIsKeyboardUser")(),
        oe = re.isKeyboardUser,
        ae = o("WAWebThemeContext").useIsDarkTheme(),
        ie = o("useWAWebModelValues").useModelValues(M.chatstate, ["type"]),
        le = o("useWAWebContactValues").useContactValues(I.id, [
          o("WAWebContactGetters").getIsMe,
          o("WAWebContactGetters").getShowBusinessCheckmarkAsPrimary,
          o("WAWebContactGetters").getShowBusinessCheckmarkAsSecondary,
          o("WAWebContactGetters").getShouldForceBusinessUpdate,
          o("WAWebFrontendContactGetters")
            .getShowBiz3pBotVerifiedNameAsSecondary,
          o("WAWebFrontendContactGetters").getIsContactBlocked,
        ]),
        se = le[0],
        ue = le[1],
        ce = le[2],
        de = le[3],
        me = le[4],
        pe = le[5],
        _e =
          (a = o("WAWebUseBusinessProfile.react").useBusinessProfile(
            o("WAWebBotGating").isBizBot3pAvailable() ? I.id : null,
            ["isBizBot3p"],
          )) != null
            ? a
            : {},
        fe = _e.isBizBot3p,
        ge = me && fe === !0,
        he = o("useWAWebModelValues").useOptionalModelValues(G, [
          "membershipType",
          "suspended",
          "terminated",
          "isSuspendedOrTerminated",
        ]),
        ye = p(null);
      m(function () {
        function e() {
          return t.apply(this, arguments);
        }
        function t() {
          return (
            (t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              (yield o(
                "WAWebBusinessProfileCollection",
              ).BusinessProfileCollection.find(I.id),
                R());
            })),
            t.apply(this, arguments)
          );
        }
        de && e();
      }, []);
      var Ce = _(!0),
        be = Ce[0],
        ve = Ce[1],
        Se = o("WAWebDrawerManagerContext").useDrawerManagerContext("mid"),
        Re = function (t) {
          var e = Se.existsDrawer();
          e && (t == null || t.preventDefault());
        },
        Le = function (t) {
          t == null || t.preventDefault();
          var e = Se.existsDrawer();
          e ||
            o("WAWebDrawerManager").DrawerManager.openDrawerRight(
              o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
                ? {
                    descriptorType: "chat_search",
                    chat: o("WAWebStateUtils").unproxy(u),
                    threadId: g,
                  }
                : c.jsx(
                    r("WAWebChatSearchDrawer.react"),
                    { chat: o("WAWebStateUtils").unproxy(u), threadId: g },
                    "chat-search-" + P.toString(),
                  ),
              {
                transition: "slide-left",
                uim: y,
                focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
              },
            );
        },
        Ee = function (t) {
          var e;
          t((e = L.current) == null ? void 0 : e.getBoundingClientRect());
        },
        ke = function () {
          C(
            u,
            y,
            o("WAWebWamEnumProfileEntryPoint").PROFILE_ENTRY_POINT.CHAT_HEADER,
            g,
          );
        },
        Ie = r("useWAWebStaticButtonA11y")(ke),
        Te = Ie[0],
        De = Ie[1];
      (o("useWAWebListener").useListener(
        I.businessProfile,
        ["change:profileOptions", "change:catalogStatus"],
        function () {
          (!o("WAWebABProps").getABPropConfigValue(
            "wa_web_reduce_cascading_updates_chat_open",
          ) ||
            r("justknobx")._("2452")) &&
            R();
        },
      ),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "get_conversation_header_offset",
          Ee,
        ),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "update_chatlist_selection",
          function () {
            return b();
          },
        ),
        o("useWAWebListener").useListener(u, "change:labels", R),
        o("useWAWebListener").useListener(
          o("WAWebLabelCollection").LabelCollection,
          "all",
          R,
        ),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "open_current_chat_info",
          function () {
            C(
              u,
              y,
              o("WAWebWamEnumProfileEntryPoint").PROFILE_ENTRY_POINT
                .CHAT_HEADER,
              g,
            );
          },
        ),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "block_current_chat",
          function () {
            o("WAWebBlockContactUtils").handleBlock(
              u,
              o("WAWebBlockContants").BlockEntryPoint.OverflowMenuBlock,
            );
          },
        ),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "clear_current_chat_conversation_history",
          function () {
            o("WAWebCmd").Cmd.clearChat(u);
          },
        ),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "exit_current_group",
          function () {
            F && o("WAWebConversationMenus").handleDeleteOrExitChat(u);
          },
        ));
      var xe = !!K,
        $e = o("useWAWebModelValues").useModelValues(o("WAWebConnModel").Conn, [
          "pushname",
        ]),
        Pe = $e.pushname,
        Ne = _(null),
        Me = Ne[0],
        we = Ne[1];
      m(
        function () {
          if (o("WAWebChatAssignmentUtils").canAssignChat(u) && V != null) {
            var e = H
              ? s._(/*BTDS*/ "Assigned to you")
              : s._(/*BTDS*/ "Assigned to {agentName}", [
                  s._param("agentName", V.name),
                ]);
            we(e);
          }
        },
        [Pe, u, V, H],
      );
      var Ae, Fe;
      if (w)
        ((Ae = c.jsx(r("WAWebContactMenuDropdown.react"), {
          chat: u,
          onSearchChat: Le,
          onSelectMessages: d,
          toContextMenuManager: !0,
          enableChatThreadLogging: !0,
          threadId: g,
        })),
          (Fe = c.jsx(r("WAWebUserSubtitle.react"), {
            contact: I,
            presence: M,
            chatstate: M.chatstate,
            location: "title",
            showBusinessCheckmark: ce,
            showVerifiedName: ge,
            assignmentSubtitle: Me,
            chatId: P,
            threadId: g,
          })));
      else if (O)
        ((Ae = c.jsx(r("WAWebBroadcastMenuDropdown.react"), {
          chat: o("WAWebStateUtils").unproxy(u),
          toContextMenuManager: !0,
        })),
          (Fe = c.jsx(r("WAWebBroadcastSubtitle.react"), { chat: u })));
      else if (F) {
        var Oe = r("nullthrows")(B);
        ((Ae = c.jsx(r("WAWebGroupMenuDropdown.react"), {
          chat: o("WAWebStateUtils").unproxy(u),
          onSearchChat: Le,
          onSelectMessages: d,
          toContextMenuManager: !0,
        })),
          Oe.isSuspendedOrTerminated()
            ? (Fe = null)
            : !Oe.isUnnamed || ie.type === "typing"
              ? (Fe = c.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
                  name: "group-subtitle",
                  children: c.jsx(r("WAWebGroupSubtitle.react"), {
                    chatstate: M.chatstate,
                    groupMetadata: Oe,
                    presence: M,
                    placeholder: h(u),
                    location: "title",
                    assignmentSubtitle: Me,
                    chatId: P,
                  }),
                }))
              : (Fe = null));
      } else
        A &&
          ((Ae = c.jsx(r("WAWebNewsletterChatMenuDropdown.react"), {
            chat: u,
            onSelectMessages: d,
          })),
          (Fe =
            (he == null ? void 0 : he.suspended) === !0
              ? null
              : c.jsx(r("WAWebNewsletterChatHeaderSubtitle.react"), {
                  newsletterMetadata: he,
                })));
      var Be = null,
        We = o("WAWebShouldShowCallButtons").getCallButtonsState(u),
        qe = We.shouldDisableStartCall,
        Ue = We.shouldShow;
      Ue &&
        (Be = c.jsx(
          o("WAWebVoipCallButtonsLoadable").WAWebCallButtonsLoadable,
          {
            callFromUI: F
              ? o("WAWebWamEnumCallFromUi").CALL_FROM_UI.GROUP_CHAT_DIRECT
              : o("WAWebWamEnumCallFromUi").CALL_FROM_UI.CONVERSATION,
            lobbyEntryPoint: o("WAWebWamEnumLobbyEntryPointType")
              .LOBBY_ENTRY_POINT_TYPE.NOT_OPENED,
            surface: o("WAWebCallButtonsSurface").WAWebCallButtonsSurface
              .ChatHeader,
            chat: u,
            isStartCallDisabled: qe,
          },
        ));
      var Ve =
          (B == null ? void 0 : B.parentGroup) != null &&
          B.participants.iAmMember(),
        He = Ve
          ? c.jsx(r("WAWebSubgroupSwitcherButton.react"), { chat: u })
          : null,
        Ge;
      (A === !1 &&
        o("WAWebChatGroupUtils").isSuspendedGroup(u) === !1 &&
        (Ge = c.jsx(r("WDSMenuBarItem.react"), {
          tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
          testid: void 0,
          icon: r("WDSIconIcSearch.react"),
          title: s._(/*BTDS*/ "Search"),
          onClick: Le,
          marginInlineXstyle: f.buttonMargin,
          disabled: xe,
        })),
        W &&
          (Fe = c.jsx(r("WAWebUserSubtitle.react"), {
            contact: I,
            presence: M,
            chatstate: M.chatstate,
            location: "title",
            showBusinessCheckmark: ce,
            chatId: P,
          })));
      var ze;
      be &&
        (ze = c.jsx(r("WAWebChatAssignmentNux.react"), {
          targetRef: k,
          chat: u,
        }));
      var je = c.jsx(r("WDSMenuBarItem.react"), {
        ref: k,
        tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
        icon: r("WDSIconIcMoreVert.react"),
        title: s._(/*BTDS*/ "Menu"),
        onClick: function (t) {
          (ve(!1), Re(t));
        },
        testid: void 0,
        wdsMenuToRender: Ae,
        menuAlign: "end",
        disabled: xe,
      });
      return c.jsxs(
        "header",
        babelHelpers.extends(
          { ref: L },
          (e || (e = r("stylex"))).props(
            f.chatHeader,
            r("WAWebConversationPanelStyleUtils").sharedLayer,
            o("WAWebUISpacing").uiPadding.vert10,
            o("WAWebUISpacing").uiPadding.horiz16,
            ae && f.chatHeaderDarkOverride,
            f.chatHeaderMaterial,
            f.chatHeaderStylesOverride,
            r("WAWebConversationPanelStyleUtils").sharedShadow,
          ),
          {
            "data-testid": void 0,
            children: [
              c.jsx(r("WAWebPrivacyBlurWrapper.react"), {
                containerRef: E,
                children: c.jsxs("div", {
                  ref: E,
                  className: "x78zum5 x6s0dn4 x1iyjqo2 xeuugli",
                  children: [
                    c.jsx("div", {
                      className:
                        "x1n2onr6 x1c4vz4f x2lah0s xdl72j9 x1cbfl22 x1y332i5",
                      onClick: function () {
                        if (Y != null) {
                          o(
                            "WAWebOpenStatusQuotedFlow",
                          ).fetchAndOpenNewsletterStatus({
                            newsletterJid: o("WAJids").toNewsletterJid(
                              u.id.toString(),
                            ),
                            statusModelId: u.id,
                            rowSection: o("WAWebWamEnumStatusRowSection")
                              .STATUS_ROW_SECTION.CHANNEL_THREAD_PAGE,
                            rowIndex: 0,
                          });
                          return;
                        }
                        C(
                          u,
                          y,
                          o("WAWebWamEnumProfileEntryPoint").PROFILE_ENTRY_POINT
                            .CHAT_HEADER,
                          g,
                        );
                      },
                      title: s._(/*BTDS*/ "Profile details"),
                      role: W ? null : "button",
                      children: c.jsx(r("WAWebGroupChatImage.react"), {
                        chat: u,
                        theme: o("WAWebStackedCirclesImage.react")
                          .SubgroupImageTheme.CHAT_HEADER,
                        regularChatImage: c.jsxs(c.Fragment, {
                          children: [
                            Y != null &&
                              c.jsx(
                                o("WAWebStatusImageRing.react").StatusImageRing,
                                {
                                  id: u.id,
                                  size: 48,
                                  stroke: 4,
                                  theme: o("WAWebStatusImageRing.react")
                                    .RingTheme.StatusPanel,
                                  respectAppTheme: !0,
                                  breakRing: !1,
                                  hideWhenNoUnreadStatuses: !1,
                                },
                              ),
                            c.jsx(o("WAWebDetailImage.react").DetailImage, {
                              id: P,
                              size: 40,
                              ephemeralIcon: "conversation-header",
                              hiddenSubgroupIcon: "conversation-header",
                              aiGroupIcon: "conversation-header",
                              enableAdsDataSharingIcon: !0,
                              enableBizAiDataSharingIcon: !0,
                            }),
                            (!o(
                              "WAWebMmSignalSharingGatingUtils",
                            ).isCCIComplianceEnabled() ||
                              !pe) &&
                              o(
                                "WAWebMmSignalSharingUserDisclosedInCollectionWindow",
                              ).isMmSignalSharingUserDisclosedInCollectionWindow(
                                z,
                              ) &&
                              c.jsx(
                                o("WAWebSingleChevronInCircleIcon.react")
                                  .SingleChevronInCircleIcon,
                                { iconXstyle: f.chevronInCircleIcon },
                              ),
                          ],
                        }),
                        showCommunityInfo: !0,
                      }),
                    }),
                    c.jsxs(
                      "div",
                      babelHelpers.extends(
                        {},
                        e.props(
                          f.chatBody,
                          o("WDSFocusStateStyles").WDSFocusStateStyles
                            .genericFocus,
                        ),
                        De,
                        {
                          ref: Te,
                          "data-testid": void 0,
                          "data-tab":
                            o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
                          children: [
                            c.jsx("div", {
                              className:
                                "x78zum5 x1cy8zhl x1y332i5 xggjnk3 x1yc453h",
                              children: c.jsx(
                                "div",
                                babelHelpers.extends(
                                  {},
                                  {
                                    0: {
                                      className:
                                        "x78zum5 x1q0g3np x1iyjqo2 x6ikm8r x10wlt62 x1jchvi3 x1fcty0u xdod15v x14ug900 x1yc453h xlyipyv xuxw1ft xh8yej3",
                                    },
                                    2: {
                                      className:
                                        "x78zum5 x1q0g3np x1iyjqo2 x6ikm8r x10wlt62 x1jchvi3 xdod15v x14ug900 x1yc453h xlyipyv xuxw1ft xh8yej3 x1s688f",
                                    },
                                    1: {
                                      className:
                                        "x78zum5 x1q0g3np x6ikm8r x10wlt62 x1jchvi3 x1fcty0u xdod15v x14ug900 x1yc453h xlyipyv xuxw1ft xh8yej3 x1c4vz4f x2lah0s xdl72j9",
                                    },
                                    3: {
                                      className:
                                        "x78zum5 x1q0g3np x6ikm8r x10wlt62 x1jchvi3 xdod15v x14ug900 x1yc453h xlyipyv xuxw1ft xh8yej3 x1s688f x1c4vz4f x2lah0s xdl72j9",
                                    },
                                  }[
                                    (!!ae << 1) |
                                      (!!o("WAWebStylesEnv").hasEmoji << 0)
                                  ],
                                  {
                                    children: c.jsx(o("WAWebName.react").Name, {
                                      chat: u,
                                      ellipsify: !0,
                                      showBusinessCheckmark: ue,
                                      testid: void 0,
                                      showMessageYourselfName: se,
                                      truncateName: !0,
                                    }),
                                  },
                                ),
                              ),
                            }),
                            Fe,
                          ],
                        },
                      ),
                    ),
                  ],
                }),
              }),
              c.jsx("div", {
                className: "x1c4vz4f x2lah0s xdl72j9 xlese2p",
                children: c.jsxs(
                  o("WAWebMenuBar.react").MenuBar,
                  {
                    children: [
                      He,
                      !o("WAWebMobilePlatforms").isSMB() && Be,
                      c.jsx(r("WAWebCommerceButton.react"), {
                        chat: u,
                        disabled: xe,
                      }),
                      o(
                        "WAWebNewsletterCommonGatingUtils",
                      ).isNewsletterEnabled() &&
                        c.jsx(
                          r("WAWebNewsletterConversationPanelHeader.react"),
                          { chat: u },
                        ),
                      v(u),
                      S(u),
                      O &&
                        c.jsx(r("WAWebNewBroadcastHeaderButton.react"), {
                          chat: u,
                        }),
                      o("WAWebMobilePlatforms").isSMB() && Be,
                      Ge,
                      Ae != null &&
                        c.jsx("div", {
                          className: "x1n2onr6 x150mmf0",
                          ref: ye,
                          children: je,
                        }),
                    ],
                  },
                  "conversation-header",
                ),
              }),
              ze,
              ((w && !se) ||
                (o("WAWebBotUtils").isHatchBot(P) &&
                  o("WAWebBotFrontendGating").isHatchIntegrationEnabled())) &&
                c.jsx(r("WAWebChatHeaderTextStatusBubble.react"), {
                  chat: u,
                  contactId: P,
                }),
            ],
          },
        ),
      );
    }
    ((R.displayName = R.name + " [from " + i.id + "]"),
      (l.createLabelsDropdownMenu = g),
      (l.isCommunityRelatedChat = y),
      (l.openInfoPanel = C),
      (l.ConversationHeader = R));
  },
  226,
);
