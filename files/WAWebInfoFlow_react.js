__d(
  "WAWebInfoFlow.react",
  [
    "fbt",
    "WAAbortError",
    "WAJids",
    "WALogger",
    "WANullthrows",
    "WAPromiseRaceAbort",
    "WAWebABProps",
    "WAWebBizBroadcastCreationQPLLogger",
    "WAWebBizBroadcastNewBroadcastFlowLoadable",
    "WAWebBizBroadcastsUpsertAudienceScreenLoadable",
    "WAWebBizShowCartAction",
    "WAWebBroadcastInfoDrawer.react",
    "WAWebChatGetters",
    "WAWebChatGroupUtils",
    "WAWebChatNotificationSettingsDrawer.react",
    "WAWebChatSearchDrawer.react",
    "WAWebChatThemeDrawer.react",
    "WAWebCmd",
    "WAWebCommunityFlow.react",
    "WAWebCommunityFlowLoadable",
    "WAWebCommunityHomeWrapper.react",
    "WAWebCommunityTabbedInfoDrawer.react",
    "WAWebConfirmPopup.react",
    "WAWebContactEditDrawer.react",
    "WAWebContactInfoDrawer.react",
    "WAWebContactLogging",
    "WAWebContactUtils",
    "WAWebDefaultEphemeralityDrawer.react",
    "WAWebDrawerContext",
    "WAWebDrawerManager",
    "WAWebDrawerManagerGlobalContext",
    "WAWebEnvironment",
    "WAWebEphemeralDrawer.react",
    "WAWebEphemeralKicNux.react",
    "WAWebEventInfoFlowLoadable",
    "WAWebEventsInChatDrawer.react",
    "WAWebExistingGroupPermissionsDrawer.react",
    "WAWebFbtCommon",
    "WAWebFrontendChatGetters",
    "WAWebGroupInfoDrawer.react",
    "WAWebGroupInviteLinkDrawerLoadable",
    "WAWebGroupInviteUtils.react",
    "WAWebGroupMemberUpdatesLogger",
    "WAWebGroupMemberUpdatesPanel.react",
    "WAWebGroupMembershipApprovalRequestsFlow.react",
    "WAWebGroupQueryJob",
    "WAWebInfoFlowStep",
    "WAWebKeptDrawer.react",
    "WAWebLimitSharingDrawer.react",
    "WAWebMediaGalleryDrawer.react",
    "WAWebModalManager",
    "WAWebNameGroupModal.react",
    "WAWebNativeContactsNuxPopup.react",
    "WAWebNewsletterAdminFunnelLogging",
    "WAWebNewsletterAdminNotificationsDrawerLoadable",
    "WAWebNewsletterCommonGatingUtils",
    "WAWebNewsletterDeleteDrawer.react",
    "WAWebNewsletterEnforcementAlertFlowLoadable",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterInfoDrawer.react",
    "WAWebNewsletterInsightsDrawerLoadable",
    "WAWebNewsletterLinkDrawer.react",
    "WAWebNewsletterMembershipUtil",
    "WAWebNewsletterProducerInsightsLogger",
    "WAWebNewsletterSettingsDrawer.react",
    "WAWebNewsletterTransferOwnershipDrawer.react",
    "WAWebNewsletterTransferOwnershipSelectionDrawer.react",
    "WAWebNoop",
    "WAWebNotifyForDrawerLoadable",
    "WAWebNux",
    "WAWebProductCatalogCatalogLinkDrawer.react",
    "WAWebProductCatalogContext",
    "WAWebProductCatalogLogEvents",
    "WAWebProductCatalogProductDetailsDrawer.react",
    "WAWebProductCatalogProductLinkDrawer.react",
    "WAWebProductCatalogProductListDrawer.react",
    "WAWebProductCatalogProductMoreInformationDrawer.react",
    "WAWebProductCatalogSession",
    "WAWebProductCollectionCatalogViewDrawer.react",
    "WAWebProductCollectionCollectionContentDrawer.react",
    "WAWebQueryAndUpdateNewslettersMetadataAction",
    "WAWebSentForAdminReviewFlow.react",
    "WAWebSetSubjectGroupAction",
    "WAWebStarredDrawerLoadable",
    "WAWebStateUtils",
    "WAWebUim",
    "WAWebUserPrefsNuxPreferences",
    "WAWebUtilsLogQplEvents",
    "WAWebVerificationDrawerLoadable",
    "WAWebWallpaperDrawer.react",
    "WAWebWamEnumAdminFlowType",
    "WAWebWamEnumCatalogEntryPoint",
    "WAWebWamEnumChannelLinkShareEntryPoint",
    "WAWebWamEnumDisappearingModeEntryPointType",
    "WAWebWamEnumEntryPoint",
    "WAWebWamEnumEphemeralSettingEntryPointType",
    "WAWebWamEnumGroupMemberUpdatesActionName",
    "asyncToGeneratorRuntime",
    "err",
    "react",
    "useWAWebChatValues",
    "useWAWebFlow",
    "useWAWebStableCallback",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = ["ref"],
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useContext,
      _ = m.useEffect,
      f = m.useMemo,
      g = m.useRef,
      h = m.useState,
      y = function (t) {
        var e;
        if (o("WAWebChatGetters").getIsGroup(t))
          return o("WAWebInfoFlowStep").InfoFlowStep.GroupInfo;
        if (o("WAWebChatGetters").getIsBroadcast(t))
          return o("WAWebInfoFlowStep").InfoFlowStep.BroadcastInfo;
        if (o("WAWebChatGetters").getIsUser(t))
          return o("WAWebInfoFlowStep").InfoFlowStep.ContactInfo;
        if (o("WAWebChatGetters").getIsNewsletter(t))
          return o("WAWebInfoFlowStep").InfoFlowStep.NewsletterInfo;
        var n =
          (e = o("WAWebFrontendChatGetters").getKind(t)) != null
            ? e
            : "undefined";
        throw r("err")("Invalid chat provided of kind " + n);
      };
    function C(t) {
      var a,
        i,
        l,
        c,
        m = t.ref,
        C = babelHelpers.objectWithoutPropertiesLoose(t, u),
        b = C.chat,
        v = C.initialStep,
        S = v === void 0 ? y(b) : v,
        R = C.showFullGroupDescription,
        L = C.scrollToParticipantList,
        E = C.profileEntryPoint,
        k = C.onBack,
        I = C.onEnd,
        T = C.displayName,
        D = C.sourceGroupChatOrNewsletter,
        x = C.focusNewsletterDescriptionOnMount,
        $ = C.focusGroupSubjectOnMount,
        P = C.focusGroupDescriptionOnMount,
        N = C.newsletterLinkShareScreenEntryPoint,
        M = C.threadId,
        w = C.contactProp,
        A = C.showChatTabInContactInfoDrawer,
        F = C.initialContactInfoTab,
        O = g(0),
        B = r("useWAWebStableCallback")(function (e) {
          O.current = e;
        }),
        W = g(void 0),
        q = p(o("WAWebDrawerContext").DrawerContext),
        U = f(
          function () {
            return new (o(
              "WAWebNewsletterProducerInsightsLogger",
            ).NewsletterProducerInsightsLogger)({ wid: b.id });
          },
          [b.id],
        ),
        V = o("useWAWebFlow").useFlow(S, {
          transitions: o("useWAWebFlow").FlowTransitions.DrawerRight,
          onEnd: I,
        }),
        H = V[0],
        G = V[1],
        z = f(function () {
          return new (o(
            "WAWebNewsletterAdminFunnelLogging",
          ).NewsletterAdminFunnelLogger)(
            o("WAWebWamEnumAdminFlowType").ADMIN_FLOW_TYPE.EDIT,
          );
        }, []),
        j = g(N),
        K = g("reach"),
        Q = g(null),
        X = g(null),
        Y = h(null),
        J = Y[0],
        Z = Y[1],
        ee = h(void 0),
        te = ee[0],
        ne = ee[1],
        re = h(null),
        oe = re[0],
        ae = re[1],
        ie = h(null),
        le = ie[0],
        se = ie[1],
        ue = h(w != null ? w : null),
        ce = ue[0],
        de = ue[1],
        me = h(null),
        pe = me[0],
        _e = me[1],
        fe = h(null),
        ge = fe[0],
        he = fe[1],
        ye = h(null),
        Ce = ye[0],
        be = ye[1],
        ve = h(null),
        Se = ve[0],
        Re = ve[1],
        Le = h(null),
        Ee = Le[0],
        ke = Le[1],
        Ie = g(),
        Te = h(!1),
        De = Te[0],
        xe = Te[1],
        $e = o("useWAWebChatValues").useChatValues(b.id, [
          o("WAWebChatGetters").getIsUser,
        ]),
        Pe = $e[0];
      _(function () {
        var e;
        if (
          o("WAWebChatGetters").getIsGroup(b) &&
          (e = b.groupMetadata) != null &&
          e.hasJoined()
        )
          o("WAWebGroupQueryJob").queryAndUpdateGroupMetadataById({
            id: b.id,
            request: "enter_group_info",
          });
        else if (Pe) {
          if (b.contact.isBusiness) {
            var t;
            (t = o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager(
              "right",
            )) == null ||
              t.updateContext(
                o("WAWebProductCatalogContext").buildProductCatalogContext(
                  new (o("WAWebProductCatalogSession").ProductCatalogSession)(),
                  o("WAWebContactUtils").getMaybeBizPlatformForLogging(
                    b.contact.id.toString(),
                  ),
                  o("WAWebWamEnumCatalogEntryPoint").CATALOG_ENTRY_POINT
                    .CATALOG_ENTRY_POINT_PROFILE,
                ),
              );
          }
        } else if (o("WAWebChatGetters").getIsNewsletter(b)) {
          var n;
          o(
            "WAWebQueryAndUpdateNewslettersMetadataAction",
          ).queryAndUpdateNewsletterMetadataAction(
            o("WAJids").toNewsletterJid(b.id.toString()),
            {
              fields: babelHelpers.extends(
                {
                  name: !0,
                  picture: !0,
                  description: !0,
                  inviteLink: !0,
                  handle: !0,
                  subscribers: !0,
                  privacy: !0,
                  verification: !0,
                  state: !0,
                },
                !((n = b.newsletterMetadata) != null && n.isPreview) && {
                  muted: !0,
                  membership: !0,
                },
              ),
            },
          );
        }
      }, []);
      var Ne = function (t, n) {
          (Z(t),
            ne(n),
            G.push(o("WAWebInfoFlowStep").InfoFlowStep.ProductDetail));
        },
        Me = function (t) {
          (ae(t),
            G.push(o("WAWebInfoFlowStep").InfoFlowStep.ProductCollection));
        },
        we = function (t) {
          (Z(t), G.push(o("WAWebInfoFlowStep").InfoFlowStep.ProductLink));
        },
        Ae = function (t) {
          (Z(t), G.push(o("WAWebInfoFlowStep").InfoFlowStep.ProductInfo));
        },
        Fe = function (t, n) {
          (se(t),
            de(n),
            G.push(o("WAWebInfoFlowStep").InfoFlowStep.CatalogLink));
        },
        Oe = function (t) {
          var e = o("WAWebProductCatalogContext").getProductCatalogContext(q),
            n = r("WAWebBizShowCartAction")(t, b, e);
          n && (_e(t), G.push(o("WAWebInfoFlowStep").InfoFlowStep.Cart));
        },
        Be = function (t, n) {
          var e,
            r = (e = ce == null ? void 0 : ce.id) != null ? e : b.id;
          (o("WAWebUtilsLogQplEvents").qplStartCatalogCollectionsView(n),
            o("WAWebProductCatalogLogEvents").logCarouselViewMoreClick({
              catalogOwnerWid: r,
              catalogContext: t,
            }),
            G.push(o("WAWebInfoFlowStep").InfoFlowStep.Catalog));
        },
        We = function () {
          o("WAWebModalManager").ModalManager.open(
            d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: { surface: "unknown", viewName: "info-flow" },
              onOK: o("WAWebModalManager").closeModalManager,
              okText: r("WAWebFbtCommon")("OK"),
              children: s._(/*BTDS*/ "Only admins can edit this group's info"),
            }),
          );
        },
        qe = r("useWAWebUnmountSignal")(),
        Ue = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (t, n) {
              var a = t;
              (yield r("WAPromiseRaceAbort")(
                o("WAWebSetSubjectGroupAction").setGroupSubject(C.chat, a),
                qe,
              )
                .catch(o("WAAbortError").catchAbort(r("WAWebNoop")))
                .catch(function (t) {
                  o("WALogger").WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "name_group_modal:onSetSubject failed",
                      ])),
                  );
                }),
                o("WAWebModalManager").ModalManager.close(),
                G.push(o("WAWebInfoFlowStep").InfoFlowStep.GroupInviteLink));
            },
          );
          return function (n, r) {
            return t.apply(this, arguments);
          };
        })(),
        Ve = function () {
          var e;
          if (o("WAWebChatGroupUtils").isInviteGrowthLockedGroup(b)) {
            var t,
              n,
              a = !!(
                (t = b.groupMetadata) != null && t.participants.iAmAdmin()
              ),
              i = (n = b.groupMetadata) == null ? void 0 : n.memberLinkMode;
            o("WAWebGroupInviteUtils.react").openGrowthLockedModal(a, !0, i);
            return;
          }
          if ((e = b.groupMetadata) != null && e.isUnnamed) {
            var l,
              u,
              c = s._(
                /*BTDS*/ "This group was created without a name. Give it a name to share the group link.",
              );
            o("WAWebModalManager").ModalManager.open(
              d.jsx(r("WAWebNameGroupModal.react"), {
                chat: b,
                subtext: c,
                onCancel: o("WAWebModalManager").closeModalManager,
                onOK: Ue,
                editable:
                  (l = b.groupMetadata) == null ? void 0 : l.canSetSubject(),
                editRestrictionInfo:
                  (u = b.groupMetadata) != null && u.restrict ? We : void 0,
              }),
            );
          } else G.push(o("WAWebInfoFlowStep").InfoFlowStep.GroupInviteLink);
        },
        He = function (t) {
          var e = t || b.contact;
          e.id.isRegularUser() &&
            (de(e), G.push(o("WAWebInfoFlowStep").InfoFlowStep.Verification));
        },
        Ge = function (t) {
          (xe(!1),
            de(t),
            G.push(o("WAWebInfoFlowStep").InfoFlowStep.ContactInfo));
        },
        ze = function (t) {
          (o(
            "WAWebGroupMemberUpdatesLogger",
          ).GroupMemberUpdatesLogger.logOnContactInfoScreen(
            o("WAWebWamEnumGroupMemberUpdatesActionName")
              .GROUP_MEMBER_UPDATES_ACTION_NAME.CLICK_INFO_OPTION,
          ),
            xe(!0),
            de(t),
            G.push(o("WAWebInfoFlowStep").InfoFlowStep.ContactInfo));
        },
        je = function (t) {
          (de(t),
            G.push(o("WAWebInfoFlowStep").InfoFlowStep.NewsletterContactInfo));
        },
        Ke = function (t, n) {
          (be(n),
            he(t),
            G.push(o("WAWebInfoFlowStep").InfoFlowStep.DefaultEphemerality));
        },
        Qe = function () {
          o("WAWebUserPrefsNuxPreferences").shouldShowNUX(
            o("WAWebNux").NUX.EPHEMERAL,
          )
            ? o("WAWebModalManager").ModalManager.open(
                d.jsx(r("WAWebEphemeralKicNux.react"), {
                  chat: b,
                  fromMe: !0,
                  onOk: function () {
                    return G.push(
                      o("WAWebInfoFlowStep").InfoFlowStep.Ephemeral,
                    );
                  },
                }),
              )
            : G.push(o("WAWebInfoFlowStep").InfoFlowStep.Ephemeral);
        },
        Xe = function (t) {
          (ke(t), G.push(o("WAWebInfoFlowStep").InfoFlowStep.LimitSharing));
        },
        Ye = function () {
          G.push(o("WAWebInfoFlowStep").InfoFlowStep.Notifications);
        },
        Je = function () {
          var e,
            t = (e = b.groupMetadata) == null ? void 0 : e.parentGroup;
          t && o("WAWebCmd").Cmd.openCommunityHome(t, !0);
        },
        Ze = function (t) {
          (Re(t), G.push(o("WAWebInfoFlowStep").InfoFlowStep.EventInfo));
        },
        et = function () {
          G.push(o("WAWebInfoFlowStep").InfoFlowStep.AllEvents);
        },
        tt = function () {
          G.push(o("WAWebInfoFlowStep").InfoFlowStep.Search);
        },
        nt = function () {
          G.end(o("WAWebUim").DismissReason.LIFECYCLE);
        },
        rt = function () {
          ((W.current = void 0),
            (O.current = 0),
            G.push(o("WAWebInfoFlowStep").InfoFlowStep.MediaGallery));
        },
        ot = function () {
          ((W.current = o(
            "WAWebMediaGalleryDrawer.react",
          ).GalleryDrawerTabs.PRODUCTS),
            G.pop());
        },
        at = function (t) {
          (de(t),
            G.push(
              o("WAWebInfoFlowStep").InfoFlowStep.NewsletterTransferOwnership,
            ));
        },
        it = r("useWAWebStableCallback")(function (e) {
          if (o("WAWebContactUtils").shouldShowNativeContactsNux()) {
            var t = !!ce;
            o("WAWebModalManager").ModalManager.open(
              d.jsx(r("WAWebNativeContactsNuxPopup.react"), {
                source: t
                  ? o("WAWebContactLogging").ContactSourceType.GroupMemberInfo
                  : o("WAWebContactLogging").ContactSourceType.ContactInfo,
              }),
            );
            return;
          }
          ((X.current =
            o("WAWebContactUtils").getContactDataFromContactModel(e)),
            G.push(o("WAWebInfoFlowStep").InfoFlowStep.SaveContactFlow));
        }),
        lt = r("useWAWebStableCallback")(function (e) {
          if (o("WAWebContactUtils").shouldShowNativeContactsNux()) {
            o("WAWebModalManager").ModalManager.open(
              d.jsx(r("WAWebNativeContactsNuxPopup.react"), {
                source: o("WAWebContactLogging").ContactSourceType.VCard,
              }),
            );
            return;
          }
          ((X.current = e),
            G.push(o("WAWebInfoFlowStep").InfoFlowStep.SaveContactFlow));
        }),
        st = function () {
          if (G.step === o("WAWebInfoFlowStep").InfoFlowStep.SaveContactFlow) {
            var e;
            (e = Ie.current) == null || e.handleDismiss();
          }
          G.pop();
        };
      if (!G.step) return null;
      var ut = D != null ? D : b,
        ct;
      switch (G.step) {
        case o("WAWebInfoFlowStep").InfoFlowStep.GroupInfo:
          if (
            o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(ut) &&
            !o("WAWebChatGroupUtils").isDeactivatedCommunityAnnouncementGroup(
              ut,
            ) &&
            (a = ut.groupMetadata) != null &&
            a.participants.iAmMember()
          ) {
            var dt,
              mt = (dt = ut.groupMetadata) == null ? void 0 : dt.parentGroup;
            ct = d.jsx(o("WAWebCommunityFlowLoadable").CommunityFlowLoadable, {
              homeTheme: o("WAWebCommunityHomeWrapper.react").CommunityHomeTheme
                .TabbedInfo,
              initialStep: o("WAWebCommunityFlow.react").CommunityFlowStep
                .CommunityHome,
              initialTab:
                L || R
                  ? o("WAWebCommunityTabbedInfoDrawer.react").CommunityInfoTabs
                      .Community
                  : o("WAWebCommunityTabbedInfoDrawer.react").CommunityInfoTabs
                      .Announcements,
              jid: mt,
              onBack: function () {
                return G.pop();
              },
              scrollToMemberList: L,
            });
          } else
            ct = d.jsx(r("WAWebGroupInfoDrawer.react"), {
              chat: ut,
              focusGroupSubjectOnMount: $,
              showFullGroupDescription: R,
              focusGroupDescriptionOnMount: P,
              scrollToParticipantList: L,
              groupMetadata: ut.groupMetadata,
              contact: ut.contact,
              profilePicThumb: ut.contact.getProfilePicThumb(),
              onVerification: He,
              onContactInfo: Ge,
              onStarred: function () {
                return G.push(o("WAWebInfoFlowStep").InfoFlowStep.Starred);
              },
              onKept: function () {
                return G.push(o("WAWebInfoFlowStep").InfoFlowStep.Kept);
              },
              onWallpaperClick: function () {
                return G.push(o("WAWebInfoFlowStep").InfoFlowStep.Wallpaper);
              },
              onChatThemeClick: function () {
                return G.push(o("WAWebInfoFlowStep").InfoFlowStep.ChatTheme);
              },
              onSentForAdminReview: function () {
                return G.push(
                  o("WAWebInfoFlowStep").InfoFlowStep.SentForAdminReview,
                );
              },
              onNotificationSettings: Ye,
              onMediaGallery: rt,
              onAdminSetting: function () {
                return G.push(
                  o("WAWebInfoFlowStep").InfoFlowStep.GroupSettings,
                );
              },
              onGroupInviteLink: Ve,
              onPendingParticipants: function () {
                return G.push(
                  o("WAWebInfoFlowStep").InfoFlowStep.PendingParticipants,
                );
              },
              onMemberUpdates: function () {
                return G.push(
                  o("WAWebInfoFlowStep").InfoFlowStep.MemberUpdates,
                );
              },
              onEphemeral: Qe,
              onLimitSharing: Xe,
              onCommunityClick: Je,
              onEventInfo: Ze,
              onAllEvents: et,
              onSearchMsgs: tt,
              onClose: function () {
                D ? G.end() : G.pop();
              },
            });
          break;
        case o("WAWebInfoFlowStep").InfoFlowStep.SentForAdminReview:
          ct = d.jsx(r("WAWebSentForAdminReviewFlow.react"), {
            chat: b,
            ref: m,
            onClose: function () {
              return G.pop();
            },
          });
          break;
        case o("WAWebInfoFlowStep").InfoFlowStep.BroadcastInfo:
          ct = d.jsx(r("WAWebBroadcastInfoDrawer.react"), {
            chat: b,
            contact: b.contact,
            entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD,
            onStarred: function () {
              return G.push(o("WAWebInfoFlowStep").InfoFlowStep.Starred);
            },
            onMediaGallery: rt,
            onClose: function () {
              return G.pop();
            },
            onEditAudience: function () {
              (o("WAWebDrawerManager").DrawerManager.closeDrawerRight(),
                o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(
                  d.jsx(
                    o("WAWebBizBroadcastsUpsertAudienceScreenLoadable")
                      .WAWebBizBroadcastsUpsertAudienceScreenLoadable,
                    {
                      chat: b,
                      entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT
                        .BB_THREAD,
                      onBack: function () {
                        return o(
                          "WAWebDrawerManager",
                        ).DrawerManager.closeDrawerFullscreen();
                      },
                      onNewAudienceSuccess: function () {
                        o(
                          "WAWebDrawerManager",
                        ).DrawerManager.closeDrawerFullscreen();
                      },
                      onSendBroadcast: function () {
                        o(
                          "WAWebDrawerManager",
                        ).DrawerManager.closeDrawerFullscreen();
                      },
                      onUpdateAudienceSuccess: function () {
                        o(
                          "WAWebDrawerManager",
                        ).DrawerManager.closeDrawerFullscreen();
                      },
                      suggestedAudienceData: null,
                    },
                  ),
                ));
            },
            onNewBroadcast: function () {
              (o("WAWebBizBroadcastCreationQPLLogger").qplCreateStart({
                string: {
                  entry_point: "bb_thread_info_drawer",
                  platform: "web",
                },
                bool: { has_pre_selected_audience: !0 },
              }),
                o("WAWebDrawerManager").DrawerManager.closeDrawerRight(),
                o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(
                  d.jsx(
                    o("WAWebBizBroadcastNewBroadcastFlowLoadable")
                      .WAWebBizBroadcastNewBroadcastFlowLoadable,
                    {
                      chat: b,
                      entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT
                        .BB_THREAD,
                      onBack: function () {
                        return o(
                          "WAWebDrawerManager",
                        ).DrawerManager.closeDrawerFullscreen();
                      },
                    },
                  ),
                ));
            },
          });
          break;
        case o("WAWebInfoFlowStep").InfoFlowStep.ContactInfo: {
          var pt = De
            ? function (e) {
                var t,
                  n = {
                    message: (t = o("WAWebWamEnumGroupMemberUpdatesActionName"))
                      .GROUP_MEMBER_UPDATES_ACTION_NAME.CLICK_MESSAGE_OPTION,
                    audio_call:
                      t.GROUP_MEMBER_UPDATES_ACTION_NAME.CLICK_AUDIO_OPTION,
                    video_call:
                      t.GROUP_MEMBER_UPDATES_ACTION_NAME.CLICK_VIDEO_OPTION,
                    edit_contact:
                      t.GROUP_MEMBER_UPDATES_ACTION_NAME
                        .CLICK_EDIT_CONTACT_INFO,
                  };
                o(
                  "WAWebGroupMemberUpdatesLogger",
                ).GroupMemberUpdatesLogger.logOnContactInfoScreen(n[e]);
              }
            : void 0;
          ct = d.jsx(r("WAWebContactInfoDrawer.react"), {
            contact: ce || b.contact,
            onVerification: He,
            onStarred: function () {
              return G.push(o("WAWebInfoFlowStep").InfoFlowStep.Starred);
            },
            onKept: function () {
              return G.push(o("WAWebInfoFlowStep").InfoFlowStep.Kept);
            },
            onWallpaperClick: function () {
              return G.push(o("WAWebInfoFlowStep").InfoFlowStep.Wallpaper);
            },
            onChatThemeClick: function () {
              return G.push(o("WAWebInfoFlowStep").InfoFlowStep.ChatTheme);
            },
            onMediaGallery: rt,
            onProductCatalog: Be,
            onProductDetail: Ne,
            onEphemeral: Qe,
            onLimitSharing: Xe,
            onSaveContact: it,
            onSearchMsgs: tt,
            onClose: function () {
              return G.pop();
            },
            profileEntryPoint: E,
            onNotificationSettings: Ye,
            onContactInfoAction: pt,
            onBack: D
              ? function () {
                  o("WAWebChatGetters").getIsNewsletter(D)
                    ? G.push(o("WAWebInfoFlowStep").InfoFlowStep.NewsletterInfo)
                    : G.push(o("WAWebInfoFlowStep").InfoFlowStep.GroupInfo);
                }
              : k,
            sourceGroupChatOrNewsletter: D,
            threadId: M,
            showChatTabInContactInfoDrawer: A,
            initialContactInfoTab: F,
          });
          break;
        }
        case o("WAWebInfoFlowStep").InfoFlowStep.NewsletterInfo:
          o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled() &&
            (ct = d.jsx(r("WAWebNewsletterInfoDrawer.react"), {
              chat: ut,
              newsletterMetadata: ut.newsletterMetadata,
              profilePicThumb: ut.contact.getProfilePicThumb(),
              adminFunnelLogger: z,
              onClose: function () {
                G.end();
              },
              onTransferNewsletterOwnership: function () {
                return G.push(
                  o("WAWebInfoFlowStep").InfoFlowStep
                    .NewsletterTransferOwnershipSelection,
                );
              },
              onTransferOwnershipSelection: at,
              onDeleteNewsletter: function () {
                return G.push(
                  o("WAWebInfoFlowStep").InfoFlowStep.DeleteNewsletter,
                );
              },
              onAdminCenter: function () {
                return G.push(
                  o("WAWebInfoFlowStep").InfoFlowStep.NewsletterAdminCenter,
                );
              },
              onSettings: function () {
                return G.push(
                  o("WAWebInfoFlowStep").InfoFlowStep.NewsletterSettings,
                );
              },
              onNotificationSettings: Ye,
              onShareLink: function () {
                ((j.current = o(
                  "WAWebWamEnumChannelLinkShareEntryPoint",
                ).CHANNEL_LINK_SHARE_ENTRY_POINT.CHANNEL_INFO_PAGE),
                  G.push(o("WAWebInfoFlowStep").InfoFlowStep.NewsletterLink));
              },
              onContactInfo: je,
              onVerification: He,
              onViewInsights: function (t, n) {
                ((K.current = t),
                  (Q.current = n),
                  G.push(
                    o("WAWebInfoFlowStep").InfoFlowStep.NewsletterInsights,
                  ));
              },
              focusDescriptionOnMount: x,
            }));
          break;
        case o("WAWebInfoFlowStep").InfoFlowStep.NewsletterContactInfo:
          ct = d.jsx(r("WAWebContactInfoDrawer.react"), {
            contact: ce || b.contact,
            onVerification: He,
            onStarred: function () {
              return G.push(o("WAWebInfoFlowStep").InfoFlowStep.Starred);
            },
            onKept: function () {
              return G.push(o("WAWebInfoFlowStep").InfoFlowStep.Kept);
            },
            onWallpaperClick: function () {
              return G.push(o("WAWebInfoFlowStep").InfoFlowStep.Wallpaper);
            },
            onChatThemeClick: function () {
              return G.push(o("WAWebInfoFlowStep").InfoFlowStep.ChatTheme);
            },
            onMediaGallery: rt,
            onProductCatalog: Be,
            onProductDetail: Ne,
            onEphemeral: Qe,
            onLimitSharing: Xe,
            onSaveContact: it,
            onSearchMsgs: tt,
            onClose: function () {
              return G.pop();
            },
            profileEntryPoint: E,
            onNotificationSettings: Ye,
            onBack: function () {
              return G.push(o("WAWebInfoFlowStep").InfoFlowStep.NewsletterInfo);
            },
            sourceGroupChatOrNewsletter: ut,
          });
          break;
        case o("WAWebInfoFlowStep").InfoFlowStep.NewsletterSettings:
          o(
            "WAWebNewsletterGatingUtils",
          ).isNewsletterReactionSettingsEnabled() &&
            (ct = d.jsx(r("WAWebNewsletterSettingsDrawer.react"), {
              isFirstLevel:
                S === o("WAWebInfoFlowStep").InfoFlowStep.NewsletterSettings,
              onBack: function () {
                return G.pop();
              },
              newsletter: ut,
              adminFunnelLogger: z,
            }));
          break;
        case o("WAWebInfoFlowStep").InfoFlowStep.NewsletterLink:
          o("WAWebNewsletterMembershipUtil").iAmAdminOrOwner(
            b.newsletterMetadata,
          ) &&
            (ct = d.jsx(r("WAWebNewsletterLinkDrawer.react"), {
              entryPoint: j.current,
              onClose: function () {
                G.end();
              },
              onBack:
                G.previousStep ===
                o("WAWebInfoFlowStep").InfoFlowStep.NewsletterInfo
                  ? function () {
                      return G.pop();
                    }
                  : null,
              newsletter: b,
            }));
          break;
        case o("WAWebInfoFlowStep").InfoFlowStep
          .NewsletterTransferOwnershipSelection:
          ct = d.jsx(
            r("WAWebNewsletterTransferOwnershipSelectionDrawer.react"),
            {
              chat: ut,
              onBack: function () {
                return G.pop();
              },
              onTransferOwnershipSelection: at,
            },
          );
          break;
        case o("WAWebInfoFlowStep").InfoFlowStep.NewsletterTransferOwnership:
          ct = d.jsx(r("WAWebNewsletterTransferOwnershipDrawer.react"), {
            contact: ce,
            chat: ut,
            onBack: function () {
              return G.pop();
            },
            onTransferCompletion: function () {
              G.push(o("WAWebInfoFlowStep").InfoFlowStep.NewsletterInfo);
            },
          });
          break;
        case o("WAWebInfoFlowStep").InfoFlowStep.DeleteNewsletter:
          ct = d.jsx(r("WAWebNewsletterDeleteDrawer.react"), {
            chat: ut,
            onBack: function () {
              return G.pop();
            },
            onCancel: function () {
              return G.pop();
            },
          });
          break;
        case o("WAWebInfoFlowStep").InfoFlowStep.NewsletterAdminCenter:
          ct = d.jsx(
            o("WAWebNewsletterEnforcementAlertFlowLoadable")
              .WAWebNewsletterEnforcementAlertFlowLoadable,
            {
              chat: ut,
              onClose: function () {
                return G.pop();
              },
              onBack: function () {
                return G.pop();
              },
            },
          );
          break;
        case o("WAWebInfoFlowStep").InfoFlowStep.NewsletterInsights:
          ct = d.jsx(
            o("WAWebNewsletterInsightsDrawerLoadable")
              .NewsletterInsightsDrawerLoadable,
            {
              entryPoint: Q.current,
              onBack: function () {
                return G.pop();
              },
              chat: b,
              selectedTab: K.current,
            },
          );
          break;
        case o("WAWebInfoFlowStep").InfoFlowStep.ProductDetail:
          ct = d.jsx(r("WAWebProductCatalogProductDetailsDrawer.react"), {
            chat: b,
            collectionId: te,
            product: r("WANullthrows")(J),
            onEnd: nt,
            onBack: ot,
            refreshCarousel: !1,
            onProductLinkClick: we,
            onProductMoreInformation: Ae,
            onCartClick: Oe,
          });
          break;
        case o("WAWebInfoFlowStep").InfoFlowStep.ProductCollection: {
          var _t;
          ct = d.jsx(r("WAWebProductCollectionCollectionContentDrawer.react"), {
            contact: ce != null ? ce : b.contact,
            onProductDetail: Ne,
            catalogId: (_t = ce == null ? void 0 : ce.id) != null ? _t : b.id,
            onBack: function () {
              return G.pop();
            },
            onCatalogLinkClick: Fe,
            onCartClick: Oe,
            collection: oe != null ? oe : void 0,
          });
          break;
        }
        case o("WAWebInfoFlowStep").InfoFlowStep.ProductLink:
          ct = d.jsx(r("WAWebProductCatalogProductLinkDrawer.react"), {
            product: r("WANullthrows")(J),
            onBack: function () {
              return G.pop();
            },
          });
          break;
        case o("WAWebInfoFlowStep").InfoFlowStep.ProductInfo:
          ct = d.jsx(
            r("WAWebProductCatalogProductMoreInformationDrawer.react"),
            { product: r("WANullthrows")(J), onBack: ot },
          );
          break;
        case o("WAWebInfoFlowStep").InfoFlowStep.CatalogLink:
          ct = d.jsx(r("WAWebProductCatalogCatalogLinkDrawer.react"), {
            catalog: r("WANullthrows")(le),
            contact: r("WANullthrows")(ce),
            onBack: function () {
              return G.pop();
            },
          });
          break;
        case o("WAWebInfoFlowStep").InfoFlowStep.Cart: {
          var ft = o("WAWebProductCatalogContext").getProductCatalogContext(q),
            gt = r("WAWebBizShowCartAction")(r("WANullthrows")(pe), b, ft);
          ct = r("WANullthrows")(gt);
          break;
        }
        case o("WAWebInfoFlowStep").InfoFlowStep.Catalog:
          ct = d.jsx(r("WAWebProductCollectionCatalogViewDrawer.react"), {
            contact: ce != null ? ce : b.contact,
            onProductDetail: Ne,
            catalogId: (i = ce == null ? void 0 : ce.id) != null ? i : b.id,
            onBack: function () {
              return G.pop();
            },
            businessProfile: b.contact.businessProfile,
            onCatalogLinkClick: Fe,
            onCartClick: Oe,
            onCollectionSeeAll: Me,
          });
          break;
        case o("WAWebInfoFlowStep").InfoFlowStep.ProductList:
          ct = d.jsx(r("WAWebProductCatalogProductListDrawer.react"), {
            contact: ce != null ? ce : b.contact,
            onProductDetail: Ne,
            catalogId: (l = ce == null ? void 0 : ce.id) != null ? l : b.id,
            onBack: function () {
              return G.pop();
            },
            businessProfile:
              (c = ce == null ? void 0 : ce.businessProfile) != null
                ? c
                : b.contact.businessProfile,
            onCatalogLinkClick: Fe,
            onCartClick: Oe,
          });
          break;
        case o("WAWebInfoFlowStep").InfoFlowStep.Starred:
          ct = d.jsx(o("WAWebStarredDrawerLoadable").StarredDrawerLoadable, {
            chat: b,
            starredMsgs: b.getStarredMsgs(),
            onClose: function () {
              return G.pop();
            },
            onSaveContact: lt,
            threadId: M,
          });
          break;
        case o("WAWebInfoFlowStep").InfoFlowStep.Wallpaper:
          ct = d.jsx(r("WAWebWallpaperDrawer.react"), {
            chat: b,
            onClose: function () {
              return G.pop();
            },
          });
          break;
        case o("WAWebInfoFlowStep").InfoFlowStep.ChatTheme:
          ct = d.jsx(r("WAWebChatThemeDrawer.react"), {
            chat: b,
            onClose: function () {
              return G.pop();
            },
          });
          break;
        case o("WAWebInfoFlowStep").InfoFlowStep.Kept:
          ct = d.jsx(r("WAWebKeptDrawer.react"), {
            chat: b,
            keptMsgs: b.getKeptMsgs(),
            onClose: function () {
              return G.pop();
            },
          });
          break;
        case o("WAWebInfoFlowStep").InfoFlowStep.GroupSettings:
          ct = d.jsx(r("WAWebExistingGroupPermissionsDrawer.react"), {
            chat: b,
            groupMetadata: b.groupMetadata,
            onClose: function () {
              return G.pop();
            },
          });
          break;
        case o("WAWebInfoFlowStep").InfoFlowStep.MediaGallery:
          ct = d.jsx(o("WAWebMediaGalleryDrawer.react").MediaGalleryDrawer, {
            chat: b,
            onBack: function () {
              return G.pop();
            },
            onProductDetail: Ne,
            setProductsScrollOffset: B,
            initialTab: W.current,
            productsScrollOffset: O.current,
            threadId: M,
          });
          break;
        case o("WAWebInfoFlowStep").InfoFlowStep.GroupInviteLink:
          ct = d.jsx(
            o("WAWebGroupInviteLinkDrawerLoadable")
              .GroupInviteLinkDrawerLoadable,
            {
              chat: b,
              groupMetadata: r("WANullthrows")(b.groupMetadata),
              onBack: function () {
                return G.pop();
              },
              onGroupSettings: function () {
                return G.push(
                  o("WAWebInfoFlowStep").InfoFlowStep.GroupSettings,
                );
              },
            },
          );
          break;
        case o("WAWebInfoFlowStep").InfoFlowStep.PendingParticipants:
          ct = d.jsx(r("WAWebGroupMembershipApprovalRequestsFlow.react"), {
            chat: b,
            onBack: function () {
              return G.pop();
            },
          });
          break;
        case o("WAWebInfoFlowStep").InfoFlowStep.Verification: {
          var ht = r("WANullthrows")(ce),
            yt = ht.id,
            Ct = yt.isLid() ? yt : b.accountLid;
          ct = d.jsx(
            r("WAWebVerificationDrawerLoadable").VerificationDrawerLoadable,
            {
              lid: Ct,
              contact: r("WANullthrows")(ce),
              onClose: function () {
                return G.pop();
              },
              isFirstLevel: !1,
            },
          );
          break;
        }
        case o("WAWebInfoFlowStep").InfoFlowStep.DefaultEphemerality:
          ct = d.jsx(r("WAWebDefaultEphemeralityDrawer.react"), {
            onClose: function () {
              return G.pop();
            },
            entryPoint: r("WANullthrows")(ge),
          });
          break;
        case o("WAWebInfoFlowStep").InfoFlowStep.Ephemeral: {
          var bt = o("WAWebChatGetters").getIsGroup(b)
            ? o("WAWebWamEnumDisappearingModeEntryPointType")
                .DISAPPEARING_MODE_ENTRY_POINT_TYPE
                .GROUP_CHAT_DISAPPEARING_MESSAGES_SETTING
            : o("WAWebWamEnumDisappearingModeEntryPointType")
                .DISAPPEARING_MODE_ENTRY_POINT_TYPE
                .INDIVIDUAL_CHAT_DISAPPEARING_MESSAGES_SETTING;
          ct = d.jsx(r("WAWebEphemeralDrawer.react"), {
            chat: b,
            showNux: o("WAWebUserPrefsNuxPreferences").shouldShowNUX(
              o("WAWebNux").NUX.EPHEMERAL,
            ),
            entryPoint: o("WAWebWamEnumEphemeralSettingEntryPointType")
              .EPHEMERAL_SETTING_ENTRY_POINT_TYPE.CHAT_INFO,
            onClose: function () {
              (be(null), G.pop());
            },
            onCloseNux: function () {
              return G.push(o("WAWebInfoFlowStep").InfoFlowStep.Ephemeral);
            },
            onDDMSettingsClick: function (t) {
              return Ke(bt, t);
            },
            pendingDuration: Ce,
          });
          break;
        }
        case o("WAWebInfoFlowStep").InfoFlowStep.SaveContactFlow: {
          var vt,
            St = !!ce,
            Rt =
              (vt = X.current) != null
                ? vt
                : o("WAWebContactUtils").getContactDataFromContactModel(
                    b.contact,
                  ),
            Lt = function () {
              ((X.current = null), G.pop());
            };
          ct = d.jsx(r("WAWebContactEditDrawer.react"), {
            ref: Ie,
            origin: St
              ? o("WAWebContactLogging").ContactSourceType.GroupMemberInfo
              : o("WAWebContactLogging").ContactSourceType.ContactInfo,
            contactData: Rt,
            onSave: Lt,
            onBack: Lt,
          });
          break;
        }
        case o("WAWebInfoFlowStep").InfoFlowStep.EventInfo: {
          Se &&
            (ct = d.jsx(
              o("WAWebEventInfoFlowLoadable").EventInfoFlowLoadable,
              {
                chat: b,
                msg: Se,
                onBack: function () {
                  return G.pop();
                },
              },
              "event-info-drawer-" + Se.id.toString(),
            ));
          break;
        }
        case o("WAWebInfoFlowStep").InfoFlowStep.AllEvents: {
          ct = d.jsx(
            r("WAWebEventsInChatDrawer.react"),
            {
              chat: b,
              onEventClick: Ze,
              onBack: function () {
                return G.pop();
              },
            },
            "all-events-drawer-" + b.id.toString(),
          );
          break;
        }
        case o("WAWebInfoFlowStep").InfoFlowStep.LimitSharing: {
          ct = d.jsx(r("WAWebLimitSharingDrawer.react"), {
            chat: Ee != null ? Ee : b,
            onClose: function () {
              (ke(null), G.pop());
            },
          });
          break;
        }
        case o("WAWebInfoFlowStep").InfoFlowStep.Notifications: {
          var Et = o("WAWebChatGetters").getIsNewsletter(b),
            kt =
              !Et &&
              (r("WAWebEnvironment").isWindows ||
                o("WAWebABProps").getABPropConfigValue(
                  "wa_web_group_info_notification_row",
                ) ||
                o("WAWebABProps").getABPropConfigValue(
                  "enable_mention_everyone_receiver_web",
                ));
          kt
            ? (ct = d.jsx(r("WAWebChatNotificationSettingsDrawer.react"), {
                chat: b,
                onClose: function () {
                  return G.pop();
                },
                onNotifyForClick: function () {
                  return G.push(o("WAWebInfoFlowStep").InfoFlowStep.NotifyFor);
                },
              }))
            : Et &&
              (ct = d.jsx(
                o("WAWebNewsletterAdminNotificationsDrawerLoadable")
                  .NewsletterAdminNotificationsDrawerLoadable,
                {
                  onBack: function () {
                    return G.pop();
                  },
                  chat: b,
                },
              ));
          break;
        }
        case o("WAWebInfoFlowStep").InfoFlowStep.NotifyFor: {
          ct = d.jsx(
            o("WAWebNotifyForDrawerLoadable").NotifyForDrawerLoadable,
            {
              chat: b,
              onClose: function () {
                return G.pop();
              },
            },
          );
          break;
        }
        case o("WAWebInfoFlowStep").InfoFlowStep.Search: {
          ct = d.jsx(
            r("WAWebChatSearchDrawer.react"),
            { chat: o("WAWebStateUtils").unproxy(b), isInFlow: !0 },
            "chat-search-" + b.id.toString(),
          );
          break;
        }
        case o("WAWebInfoFlowStep").InfoFlowStep.MemberUpdates:
          ct = d.jsx(r("WAWebGroupMemberUpdatesPanel.react"), {
            chat: b,
            onBack: function () {
              return G.pop();
            },
            onContactInfo: ze,
          });
          break;
      }
      return d.jsx(
        o("WAWebNewsletterProducerInsightsLogger")
          .NewsletterProducerInsightsLoggerContext.Provider,
        {
          value: U,
          children: d.jsx(H, {
            ref: m,
            flow: G,
            displayName: T,
            requestDismiss: st,
            children: ct,
          }),
        },
      );
    }
    ((C.displayName = C.name + " [from " + i.id + "]"), (l.InfoFlow = C));
  },
  226,
);
