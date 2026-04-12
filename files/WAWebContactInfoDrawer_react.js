__d(
  "WAWebContactInfoDrawer.react",
  [
    "fbt",
    "WAFilteredCatch",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebABPropsSaga",
    "WAWebAIHatchIdentitySync",
    "WAWebAuraGating",
    "WAWebBackendErrors",
    "WAWebBizBot3pInfoAboutSection.react",
    "WAWebBizBotCommandsSection.react",
    "WAWebBizCoexGatingUtils",
    "WAWebBizGatingUtils",
    "WAWebBotBaseGating",
    "WAWebBotFrontendGating",
    "WAWebBotGating",
    "WAWebBotUtils",
    "WAWebBusinessAboutSection.react",
    "WAWebBusinessAccountBanner.react",
    "WAWebBusinessContactDisclosureSection.react",
    "WAWebBusinessInfo.react",
    "WAWebBusinessLogEvents",
    "WAWebBusinessProfileUtils",
    "WAWebBusinessTopCard.react",
    "WAWebCTWADataSharingModel",
    "WAWebCatalogCollection",
    "WAWebChatCollection",
    "WAWebChatEphemerality",
    "WAWebChatInfoChatThemeRow.react",
    "WAWebChatInfoClearChatSection.react",
    "WAWebChatInfoDrawerRow.react",
    "WAWebChatInfoDrawerSection.react",
    "WAWebChatInfoFavoritesSection.react",
    "WAWebChatInfoListsSection.react",
    "WAWebChatInfoMediaSection.react",
    "WAWebChatInfoPhoneNumberVisibilityIndicator.react",
    "WAWebChatInfoWallpaperRow.react",
    "WAWebChatThemeGatingUtils",
    "WAWebChatThreadLogging",
    "WAWebCmd",
    "WAWebCommonCTWAConsumerTransparency",
    "WAWebContactGetters",
    "WAWebContactInfoAboutSection",
    "WAWebContactInfoBizBot1pSection.react",
    "WAWebContactInfoBizBot3pSection.react",
    "WAWebContactInfoChatTabFull.react",
    "WAWebContactInfoCommonGroupsSection.react",
    "WAWebContactInfoCustomerDataSection.react",
    "WAWebContactInfoDisclosuresSectionRow.react",
    "WAWebContactInfoEncryptionSection",
    "WAWebContactInfoHatchDisconnectButton.react",
    "WAWebContactInfoIntegritySection.react",
    "WAWebContactInfoLinkedSocialAccounts.react",
    "WAWebContactInfoMessagesSection.react",
    "WAWebContactInfoPhoneNumberSection.react",
    "WAWebContactInfoSagaSection.react",
    "WAWebContactInfoTopCard.react",
    "WAWebContactInfoWaChatSecuritySection",
    "WAWebContactManagementGating",
    "WAWebContactUtils",
    "WAWebCustomerManagerGating",
    "WAWebDeleteIcon.react",
    "WAWebDeleteRefreshedIcon.react",
    "WAWebDrawer.react",
    "WAWebDrawerBlock.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerButton.react",
    "WAWebDrawerButtonRefreshed.react",
    "WAWebDrawerContext",
    "WAWebDrawerHeader.react",
    "WAWebDrawerManagerGlobalContext",
    "WAWebDrawerSection.react",
    "WAWebEnvironment",
    "WAWebEphemeralSettingRow.react",
    "WAWebErrorBoundary.react",
    "WAWebFindChatAction",
    "WAWebFlatListController",
    "WAWebFrontendContactGetters",
    "WAWebGroupInfoSeparator.react",
    "WAWebHasAcceptedBizBotTos",
    "WAWebInboxFiltersGatingUtils",
    "WAWebLabelsInfoDrawerLabelWell.react",
    "WAWebLimitSharingSettingRow.react",
    "WAWebLimitSharingUIUtils",
    "WAWebListsGatingUtils",
    "WAWebManageE2ESessionsJob",
    "WAWebMessageLogQplEvents",
    "WAWebMmSignalSharingDisclosureRow.react",
    "WAWebMmSignalSharingGatingUtils",
    "WAWebMmSignalSharingUserDisclosedInCollectionWindow",
    "WAWebModalManager",
    "WAWebMuteRow.react",
    "WAWebNoop",
    "WAWebNotificationsSettingsRow.react",
    "WAWebPencilRefreshedIcon.react",
    "WAWebPerCustomerDataSharingRow.react",
    "WAWebPerCustomerDataSharingUtils",
    "WAWebPhotoViewerModal.react",
    "WAWebProductCatalogCatalogDrawerSection.react",
    "WAWebProductCatalogContext",
    "WAWebProductCatalogSession",
    "WAWebProductCatalogShopsCatalogDrawerSection.react",
    "WAWebProfilePicThumbCollection",
    "WAWebPsaVerifiedBlueIcon.react",
    "WAWebSendMsgDatabaseJob",
    "WAWebSessionScope",
    "WAWebStateUtils",
    "WAWebStopMessagesRow.react",
    "WAWebText.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUISpacing",
    "WAWebUseBusinessProfile.react",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsPhoneNumberHidingThreadPromotionMigration",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameTypes",
    "WAWebUsernameWorkerCompatibleGatingUtils",
    "WAWebUtilsLogQplEvents",
    "WAWebVoipGatingUtils",
    "WAWebWamEnumActionEntryPoint",
    "WAWebWamEnumCatalogEntryPoint",
    "WAWebWamEnumLandingSurface",
    "WAWebWamEnumUnlockEntryPoint",
    "WAWebWid",
    "WAWebWidFactory",
    "WDSIconIcBookmark.react",
    "WDSMenuBarItem.react",
    "WDSText.react",
    "cr:6008",
    "gkx",
    "react",
    "useLazyRef",
    "useWAWebChatLockRestriction",
    "useWAWebContactValues",
    "useWAWebListener",
    "useWAWebOnUnmount",
    "useWAWebUIM",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = ["ref"],
      d,
      m = d || (d = o("react")),
      p = d,
      _ = p.useContext,
      f = p.useEffect,
      g = p.useRef,
      h = p.useState,
      y = "profile",
      C = "chat",
      b = {
        businessAccount: {
          borderTopWidth: "x178xt8z",
          borderTopStyle: "x13fuv20",
          borderTopColor: "xx42vgk",
          fontSize: "x1f6kntn",
          $$css: !0,
        },
        lastSectionRow: { marginBottom: "xefnzgg", $$css: !0 },
      },
      v = { surface: "contact-info-drawer" };
    function S(e) {
      var t = e.catalogContext,
        n = e.contact,
        a = e.onProductCatalog,
        i = e.onProductDetail,
        l = o("WAWebCatalogCollection").CatalogCollection.get(n.id);
      if (!l) return null;
      var u = s._(/*BTDS*/ "See all"),
        c = !0,
        d = t.session;
      return d.isAccidental()
        ? null
        : o("WAWebBusinessProfileUtils").hasShop(n.businessProfile)
          ? o("WAWebBizGatingUtils").bannedShopsEnabled() &&
            o("WAWebBusinessProfileUtils").isShopBanned(n.businessProfile)
            ? null
            : m.jsx(r("WAWebProductCatalogShopsCatalogDrawerSection.react"), {
                businessProfile: n.businessProfile,
                catalog: l,
                subtitle: u,
                hideIncompleteRows: c,
              })
          : m.jsx(r("WAWebProductCatalogCatalogDrawerSection.react"), {
              onProductDetail: i,
              onProductCatalog: a,
              catalog: l,
              subtitle: u,
              hideIncompleteRows: c,
              shouldLog: !0,
            });
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R(t) {
      var a,
        i,
        l,
        d,
        p,
        R,
        k = t.ref,
        I = babelHelpers.objectWithoutPropertiesLoose(t, c),
        T = I.contact,
        D = I.onBack,
        x = I.onChatThemeClick,
        $ = I.onClose,
        P = I.onProductCatalog,
        N = I.onProductDetail,
        M = I.onSaveContact,
        w = I.onVerification,
        A = I.onWallpaperClick,
        F = r("useWAWebUIM")(),
        O = _(o("WAWebDrawerContext").DrawerContext),
        B = o("useWAWebContactValues").useContactValues(I.contact.id, [
          (p = o("WAWebContactGetters")).getId,
          (R = o("WAWebFrontendContactGetters")).getFormattedName,
          R.getFormattedUser,
          R.getFormattedShortName,
          p.getIsBusiness,
          p.getIsEnterprise,
          R.getIsMyContact,
          R.getCommonGroups,
          p.getShowBusinessCheckmarkAsPrimary,
          p.getShowBusinessCheckmarkAsSecondary,
          p.getVerifiedName,
          p.getVerifiedLevel,
          p.getName,
          p.getNotifyName,
          p.getLabels,
          R.getPhoneNumber,
          R.getIsContactBlocked,
        ]),
        W = B[0],
        q = B[1],
        U = B[2],
        V = B[3],
        H = B[4],
        G = B[5],
        z = B[6],
        j = B[7],
        K = B[8],
        Q = B[9],
        X = B[10],
        Y = B[11],
        J = B[12],
        Z = B[13],
        ee = B[14],
        te = B[15],
        ne = B[16],
        re = o("useWAWebContactValues").useContactValues(I.contact.id, [
          R.getBusinessCatalog,
          p.getIsMe,
          p.getStatusMute,
          R.getDisplayName,
          R.getShareOwnPn,
          p.getRequestedPnTimestamp,
          p.getCanRequestPhoneNumber,
          p.getIsIAS,
          p.getIsCAPISupportAccount,
        ]),
        oe = re[0],
        ae = re[1],
        ie = re[2],
        le = re[3],
        se = re[4],
        ue = re[5],
        ce = re[6],
        de = re[7],
        me = re[8],
        pe = r("useLazyRef")(function () {
          return new (r("WAWebFlatListController"))();
        }),
        _e = g(!1),
        fe = h(100),
        ge = fe[0],
        he = fe[1],
        ye = I.showChatTabInContactInfoDrawer === !0,
        Ce = (a = I.initialContactInfoTab) != null ? a : y,
        be = h(Ce),
        ve = be[0],
        Se = be[1],
        Re = h(Ce === C),
        Le = Re[0],
        Ee = Re[1],
        ke = o("WAWebChatCollection").ChatCollection.get(W),
        Ie = o("WAWebUseBusinessProfile.react").useBusinessProfile(W, [
          "isBizBot1p",
          "isBizBot3p",
          "isAuthorizedAgent",
          "obaPhoneNumber",
          "parentCompanyLogoUrl",
          "parentCompanyName",
          "stale",
          "isProfileLinked",
          "coverPhoto",
          "isCatalogDisabledDueToMetaLinking",
        ]),
        Te =
          o("WAWebBotBaseGating").isBizBot3pEnabled() &&
          (Ie == null ? void 0 : Ie.isBizBot3p) === !0,
        De =
          o("WAWebBotBaseGating").isBizBot1pEnabled() &&
          (Ie == null ? void 0 : Ie.isBizBot1p) === !0,
        xe = o("WAWebHasAcceptedBizBotTos").useHasAcceptedBizBotTos(),
        $e = ae,
        Pe = o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(W);
      (f(function () {
        (Ie &&
          !Ie.stale &&
          oe &&
          o("WAWebCatalogCollection")
            .CatalogCollection.findCarouselCatalog(W)
            .catch(
              o("WAFilteredCatch").filteredCatch(
                o("WAWebBackendErrors").ServerStatusCodeError,
                function (t) {
                  o("WALogger").WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[contact drawer] catalog fetch failed",
                      ])),
                  );
                },
              ),
            )
            .catch(
              o("WAFilteredCatch").filteredCatch(
                o("WAWebBackendErrors").CatalogUnknownError,
                function (e) {
                  o("WALogger").WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[contact drawer] catalog fetch failed",
                      ])),
                  );
                },
              ),
            ),
          o("WAWebSendMsgDatabaseJob")
            .getFanOutListJob([
              W,
              o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE(),
            ])
            .then(function (e) {
              o("WAWebManageE2ESessionsJob").ensureE2ESessions(
                e,
                !1,
                o("WAWebSessionScope").SessionScope.DEFAULT,
              );
            }));
        var t = o("WAWebProductCatalogContext").getProductCatalogContext(O),
          n = t.session;
        if (n.isAccidental()) {
          var r;
          (r = o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager(
            "right",
          )) == null ||
            r.updateContext(
              o("WAWebProductCatalogContext").buildProductCatalogContext(
                new (o("WAWebProductCatalogSession").ProductCatalogSession)(),
                o("WAWebContactUtils").getMaybeBizPlatformForLogging(
                  W.toString(),
                ),
                o("WAWebWamEnumCatalogEntryPoint").CATALOG_ENTRY_POINT
                  .CATALOG_ENTRY_POINT_PROFILE,
              ),
            );
        } else if (H) {
          var a = o("WAWebUserPrefsMeUser").isMePnUser(W),
            i = I.profileEntryPoint;
          !a &&
            i &&
            o("WAWebBusinessLogEvents").logProfileImpression(
              o("WAWebProductCatalogContext").getProductCatalogSessionId(O),
              i,
              !!(Ie != null && Ie.isProfileLinked),
              !!(Ie != null && Ie.coverPhoto),
            );
        }
        Ie && o("WAWebMessageLogQplEvents").qplEndProfileView(2);
      }, []),
        f(function () {
          var e = o("WAWebUserPrefsMeUser").isMePnUser(W),
            t = o("WAWebProductCatalogContext").getProductCatalogContext(O),
            n = t.session;
          !n.isAccidental() &&
            !e &&
            ke != null &&
            ke.id &&
            o("WAWebChatThreadLogging").handleActivitiesForChatThreadLogging([
              {
                activityType: "profileViews",
                ts: o("WATimeUtils").unixTime(),
                chatId: ke.id,
              },
            ]);
        }, []),
        r("useWAWebOnUnmount")(function () {
          var e = o("WAWebProductCatalogContext").getProductCatalogContext(O),
            t = e.session;
          t.isAccidental() ||
            (H &&
              o("WAWebBusinessLogEvents").logProfileExit(
                o("WAWebProductCatalogContext").getProductCatalogSessionId(O),
                ge,
                Ie == null ? void 0 : Ie.isProfileLinked,
                !!(Ie != null && Ie.coverPhoto),
              ));
        }));
      var Ne = function () {
          $();
        },
        Me = function () {
          D && D();
        },
        we = o("useWAWebChatLockRestriction").useChatLockRestriction({
          id:
            "locked-chat-info-" +
            ((i = ke == null ? void 0 : ke.id.toString()) != null
              ? i
              : "unknown"),
          condition: ke != null ? ke : "bypass",
          onPromptFailure: D ? Me : Ne,
          entryPoint: o("WAWebWamEnumActionEntryPoint").ACTION_ENTRY_POINT
            .CHAT_INFO,
          landingSurface: o("WAWebWamEnumLandingSurface").LANDING_SURFACE
            .CHAT_INFO,
          unlockEntryPoint: o("WAWebWamEnumUnlockEntryPoint").UNLOCK_ENTRY_POINT
            .CHAT_INFO,
        });
      if (!we) return null;
      var Ae = function () {
          w(o("WAWebStateUtils").unproxy(T));
        },
        Fe = function () {
          var e = o("WAWebChatCollection").ChatCollection.assertGet(W);
          o("WAWebCmd").Cmd.deleteOrExitChatFromEntryPoint(e, 12);
        },
        Oe = function (t) {
          if (o("WAWebBotUtils").isManusBot(W)) {
            var e = o("WAWebBotGating").getManusBotProfileThumb();
            e !== "" &&
              o("WAWebProfilePicThumbCollection")
                .ProfilePicThumbCollection.gadd(W)
                .set({
                  eurl: e,
                  previewEurl: e,
                  tag: "man",
                  stale: !1,
                  timestamp: Date.now(),
                });
          } else
            o("WAWebBotUtils").isHatchBot(W)
              ? o("WAWebAIHatchIdentitySync").syncHatchContactIdentity(T, W, !0)
              : o(
                  "WAWebProfilePicThumbCollection",
                ).ProfilePicThumbCollection.resyncPicturesByWid([W]);
          var n = T.getProfilePicThumb();
          if (
            (!_e.current && !r("WAWebWid").isPSA(W)) ||
            n.imgFull === void 0
          ) {
            o("WAWebToastManager").ToastManager.open(
              m.jsx(o("WAWebToast.react").Toast, {
                msg: s._(/*BTDS*/ "No profile picture"),
              }),
            );
            return;
          }
          var a = t.target,
            i = function (t) {
              t(a);
            };
          o("WAWebModalManager").ModalManager.openMedia(
            m.jsx(r("WAWebPhotoViewerModal.react"), {
              contact: T,
              profilePicThumb: n,
              animateBorderRadius: !0,
              getZoomNode: i,
            }),
            { transition: "profile-viewer", uim: F },
          );
        },
        Be = function () {
          _e.current = !0;
        },
        We = function (t) {
          (o("WAWebUtilsLogQplEvents").qplStartProductView("ContactInfo"),
            N(t));
        },
        qe = function () {
          return !(
            !T ||
            !H ||
            !Ie ||
            !oe ||
            Ie.isCatalogDisabledDueToMetaLinking
          );
        },
        Ue = function (t) {
          var e = Math.floor(
            100 *
              (1 + t.currentTarget.scrollTop / t.currentTarget.offsetHeight),
          );
          e > ge && he(e);
        },
        Ve = G
          ? null
          : m.jsxs(m.Fragment, {
              children: [
                m.jsx(r("WAWebContactInfoCommonGroupsSection.react"), {
                  contact: T,
                  onClose: Ne,
                  flatListController: pe.current,
                }),
                m.jsx(r("WAWebGroupInfoSeparator.react"), {}),
              ],
            }),
        He = null;
      I.onMediaGallery &&
        ke &&
        !Pe &&
        (He = m.jsx(r("WAWebChatInfoMediaSection.react"), {
          chat: ke,
          onMediaGallery: I.onMediaGallery,
          threadId: I.threadId,
        }));
      var Ge;
      !r("gkx")("26258") &&
        n("cr:6008") &&
        (Ge = m.jsx(n("cr:6008"), { chat: ke, contact: T, isRefresh: !0 }));
      var ze = null;
      qe() &&
        (ze = m.jsx(S, {
          contact: T,
          catalogContext: o(
            "WAWebProductCatalogContext",
          ).getProductCatalogContext(O),
          onProductDetail: We,
          onProductCatalog: P,
        }));
      var je =
          ke && ke.mute.canMute() && !Pe
            ? m.jsx(r("WAWebMuteRow.react"), { chat: ke, mute: ke.mute })
            : null,
        Ke =
          (l =
            ke == null || (d = ke.accountLid) == null
              ? void 0
              : d.toString()) != null
            ? l
            : "",
        Qe = o(
          "WAWebPerCustomerDataSharingUtils",
        ).isPerCustomerDataSharingFeatureEnabled(
          Ke,
          o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue(),
        )
          ? m.jsx(r("WAWebPerCustomerDataSharingRow.react"), {
              accountLid: Ke,
              chat: ke,
            })
          : null,
        Xe =
          r("WAWebEnvironment").isWindows ||
          (o("WAWebVoipGatingUtils").isCallingEnabled() &&
            r("WAWebAuraGating").isRingtonesBenefitActive()),
        Ye =
          ke && I.onNotificationSettings && Xe
            ? m.jsx(r("WAWebNotificationsSettingsRow.react"), {
                onClick: I.onNotificationSettings,
                chat: ke,
                testid: void 0,
              })
            : null,
        Je =
          H && ke && ke.mute.canMute()
            ? m.jsx(r("WAWebStopMessagesRow.react"), {
                contact: o("WAWebStateUtils").unproxy(T),
                chat: o("WAWebStateUtils").unproxy(ke),
                isRefresh: !0,
              })
            : null,
        Ze = o("WAWebABProps").getABPropConfigValue("use_per_chat_wallpaper")
          ? m.jsx(r("WAWebChatInfoWallpaperRow.react"), { onWallpaperClick: A })
          : null,
        et = o("WAWebChatThemeGatingUtils").isChatThemesEnabled()
          ? m.jsx(r("WAWebChatInfoChatThemeRow.react"), { onClick: x })
          : null,
        tt =
          me && o("WAWebABPropsSaga").getIsSagaV1Enabled()
            ? m.jsx(r("WAWebContactInfoSagaSection.react"), {})
            : null,
        nt;
      I.onStarred &&
        !Pe &&
        (nt = m.jsx(r("WAWebContactInfoMessagesSection.react"), {
          onStarred: I.onStarred,
        }));
      var rt;
      if (
        ke &&
        (ke.hasKeptMsgs() ||
          o("WAWebChatEphemerality").isEphemeralSettingOn(ke))
      ) {
        var ot = m.jsx(o("WAWebText.react").WAWebTextTitle, {
            as: "span",
            children: s._(/*BTDS*/ "Kept messages"),
          }),
          at = m.jsx(r("WDSIconIcBookmark.react"), {}),
          it = {
            testid: "block-kept-messages",
            onClick: I.onKept,
            icon: at,
            title: ot,
          };
        rt = m.jsx(
          o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection,
          {
            titleTestId: "section-kept-messages",
            xstyle: o("WAWebUISpacing").uiPadding.horiz0,
            children: m.jsx(
              o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed,
              babelHelpers.extends({}, it),
            ),
          },
        );
      }
      var lt =
          ke && o("WAWebChatEphemerality").shouldShowEphemeralSetting(ke)
            ? m.jsx(o("WAWebEphemeralSettingRow.react").EphemeralSettingRow, {
                onClick: I.onEphemeral,
                chat: ke,
                testid: void 0,
              })
            : null,
        st =
          ke && o("WAWebLimitSharingUIUtils").isLimitSharingSettingVisible(ke)
            ? m.jsx(r("WAWebLimitSharingSettingRow.react"), {
                onClick: function () {
                  return I.onLimitSharing == null
                    ? void 0
                    : I.onLimitSharing(ke);
                },
                chat: ke,
                testid: void 0,
              })
            : null,
        ut = null;
      W.isRegularUser() && !Te
        ? (ut = m.jsx(r("WAWebContactInfoEncryptionSection"), {
            contactId: W,
            onVerificationClick: Ae,
          }))
        : r("WAWebWid").isPSA(W) &&
          (ut = m.jsx(r("WAWebContactInfoWaChatSecuritySection"), {}));
      var ct =
          W.isLid() &&
          te == null &&
          !o("WAWebUsernameGatingUtils").usernameDisplayedEnabled(),
        dt = T.isUsernameContact,
        mt = o("WAWebFrontendContactGetters").getIsMyContact(T) && !dt,
        pt =
          o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() &&
          !W.isBot() &&
          (H || mt),
        _t =
          W.isLid() &&
          (ke == null ? void 0 : ke.lidOriginType) !==
            o("WAWebUsernameTypes").LidOriginType.GENERAL &&
          !o(
            "WAWebUserPrefsPhoneNumberHidingThreadPromotionMigration",
          ).hasPhoneNumberHidingThreadPromotionMigrationStarted() &&
          !o("WAWebUsernameGatingUtils").usernameDisplayedEnabled(),
        ft =
          ke && _t
            ? m.jsx(
                o("WAWebChatInfoPhoneNumberVisibilityIndicator.react")
                  .PhoneNumberVisibilityIndicator1On1,
                { chat: ke },
              )
            : null,
        gt =
          H &&
          ke &&
          (!o("WAWebMmSignalSharingGatingUtils").isCCIComplianceEnabled() ||
            !ne) &&
          o(
            "WAWebMmSignalSharingUserDisclosedInCollectionWindow",
          ).isMmSignalSharingUserDisclosedInCollectionWindow(
            ke.mmSignalSharingExpirationWindow,
          )
            ? m.jsx(r("WAWebMmSignalSharingDisclosureRow.react"), {
                chat: ke,
                isRefresh: !0,
              })
            : null,
        ht;
      De
        ? (ht = xe
            ? m.jsx(r("WAWebContactInfoBizBot1pSection.react"), {})
            : null)
        : Te && (ht = m.jsx(r("WAWebContactInfoBizBot3pSection.react"), {}));
      var yt = m.jsxs(
          o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection,
          {
            xstyle: [
              o(
                "WAWebCommonCTWAConsumerTransparency",
              ).shouldShowROWConsumerDisclosure() && b.lastSectionRow,
              [
                o("WAWebUISpacing").uiPadding.horiz0,
                o("WAWebUISpacing").uiMargin.bottom0,
              ],
            ],
            children: [Ye || je, Qe, Je, tt, lt, st, Ze, et, ft, gt],
          },
        ),
        Ct =
          ke != null &&
          o(
            "WAWebCommonCTWAConsumerTransparency",
          ).shouldShowConsumerTransparencyDisclosure(ke) &&
          o(
            "WAWebCommonCTWAConsumerTransparency",
          ).shouldShowROWConsumerDisclosure(),
        bt = m.jsxs(
          o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection,
          {
            xstyle: [
              b.lastSectionRow,
              [
                o("WAWebUISpacing").uiPadding.horiz0,
                o("WAWebUISpacing").uiMargin.bottom0,
              ],
            ],
            children: [
              ut,
              Ct
                ? m.jsx(r("WAWebContactInfoDisclosuresSectionRow.react"), {})
                : null,
              ht,
            ],
          },
        ),
        vt = !H,
        St =
          vt || de || me || W.isBot() || Te
            ? null
            : m.jsx(r("WAWebBusinessAboutSection.react"), {
                contact: o("WAWebStateUtils").unproxy(T),
              }),
        Rt = null;
      W.isBot()
        ? (Rt = null)
        : vt &&
          (Rt = m.jsx(r("WAWebContactInfoAboutSection"), {
            contact: o("WAWebStateUtils").unproxy(T),
          }));
      var Lt = null;
      Te &&
        Ie &&
        (Lt = m.jsx(r("WAWebBizBot3pInfoAboutSection.react"), {
          businessProfile: o("WAWebStateUtils").unproxy(Ie),
        }));
      var Et = null;
      o("WAWebBotBaseGating").isBizBot3pEnabled() &&
        Ie &&
        (Et = m.jsx(r("WAWebBizBotCommandsSection.react"), {
          businessProfile: o("WAWebStateUtils").unproxy(Ie),
        }));
      var kt = function () {
          (I.onContactInfoAction == null ||
            I.onContactInfoAction("edit_contact"),
            M == null || M(T));
        },
        It =
          H && Ie && !W.isBot()
            ? m.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
                name: "contact-info-drawer-business-top-card",
                children: m.jsx(r("WAWebBusinessTopCard.react"), {
                  contact: T,
                  onProfilePicLoad: Be,
                  onProfilePicClick: Oe,
                  businessProfile: o("WAWebStateUtils").unproxy(Ie),
                  onProductCatalog: P,
                  displayRequestPhoneNumber: ct,
                  onSaveContact: kt,
                  sourceChat: I.sourceGroupChatOrNewsletter,
                  onOpenChatTabInCustomerManager: ye
                    ? function () {
                        (Se(C), Ee(!0));
                      }
                    : void 0,
                }),
              })
            : m.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
                name: "contact-info-drawer-top-card",
                children: m.jsx(r("WAWebContactInfoTopCard.react"), {
                  contact: T,
                  onDetailImageLoad: Be,
                  onDetailImageClick: Oe,
                  isMessageYourselfChat: $e,
                  displayRequestPhoneNumber: ct,
                  onSearchMsgs: I.onSearchMsgs,
                  onContactInfoAction: I.onContactInfoAction,
                  onSaveContact: kt,
                  sourceChat: I.sourceGroupChatOrNewsletter,
                  onOpenChatTabInCustomerManager: ye
                    ? function () {
                        (Se(C), Ee(!0));
                      }
                    : void 0,
                }),
              }),
        Tt,
        Dt,
        xt,
        $t = null,
        Pt = void 0;
      if (H && Ie) {
        var Nt;
        $t = W.isBot()
          ? null
          : m.jsx(r("WAWebBusinessInfo.react"), {
              businessProfile: o("WAWebStateUtils").unproxy(Ie),
              showDescription: !Te,
            });
        var Mt = Ie.isAuthorizedAgent,
          wt = Ie.obaPhoneNumber,
          At = Ie.parentCompanyLogoUrl,
          Ft = Ie.parentCompanyName;
        if (
          ((Tt =
            !de && !me && !o("WAWebBotUtils").isBotChannelFBID(W) && Mt !== !0
              ? m.jsx(r("WAWebBusinessAccountBanner.react"), { contact: T })
              : null),
          o("WAWebBizCoexGatingUtils").authorizedAgentsEnabled() &&
            Mt === !0 &&
            Ft != null &&
            Ft !== "")
        ) {
          var Ot =
              wt != null
                ? function () {
                    try {
                      var e = o("WAWebWidFactory").createUserWidOrThrow(wt);
                      o("WAWebFindChatAction")
                        .findOrCreateLatestChat(e, "agentAffiliationRow")
                        .then(function (e) {
                          var t = e.chat;
                          o("WAWebCmd").Cmd.chatInfoDrawer(t);
                        })
                        .catch(r("WAWebNoop"));
                    } catch (e) {}
                  }
                : null,
            Bt = m.jsxs("div", {
              className: "x78zum5 x6s0dn4 x1trrmfo",
              children: [
                At != null &&
                  m.jsx("img", {
                    className:
                      "x1kky2od xlup9mm x1c9tyrk xeusxvb x1pahc9y x1ertn4p xl1xv1r",
                    src: At,
                    alt: "",
                  }),
                s._(/*BTDS*/ "Representative at {parentCompanyName}", [
                  s._param("parentCompanyName", Ft),
                ]),
                m.jsx(o("WAWebPsaVerifiedBlueIcon.react").PsaVerifiedBlueIcon, {
                  width: 14,
                  height: 14,
                }),
              ],
            });
          Dt = m.jsx(r("WAWebDrawerSection.react"), {
            xstyle: b.businessAccount,
            children: m.jsx(r("WAWebDrawerBlock.react"), {
              testid: void 0,
              onClick: Ot != null ? Ot : void 0,
              children: Bt,
            }),
          });
        }
        (((Nt = ee == null ? void 0 : ee.length) != null ? Nt : 0) > 0 &&
          o("WAWebBizGatingUtils").canDisplayLabel() &&
          !(
            o("WAWebCustomerManagerGating").customerManagerEnabled() &&
            o("WAWebCustomerManagerGating").isEligibleForCustomerFields(T)
          ) &&
          (xt = m.jsx(r("WAWebDrawerSection.react"), {
            theme: "padding",
            children: m.jsx(r("WAWebLabelsInfoDrawerLabelWell.react"), {
              labels: ee,
              theme: "standalone",
            }),
          })),
          (Pt = Ue));
      }
      var Wt = {
          title: s._(/*BTDS*/ "Contact info"),
          type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
          rtlFixIfOnDarwin: !0,
          focusBackOrCancel: !0,
        },
        qt;
      D
        ? (qt = babelHelpers.extends({ onBack: Me }, Wt))
        : (qt = babelHelpers.extends({ onCancel: Ne }, Wt));
      var Ut;
      Ie &&
        Ie.isProfileLinked === !0 &&
        o("WAWebBizGatingUtils").bizLinkedAccountsEnabled() &&
        o("WAWebBizGatingUtils").canViewBizLinkedAccounts() &&
        (Ut = m.jsx(r("WAWebContactInfoLinkedSocialAccounts.react"), {
          businessProfile: o("WAWebStateUtils").unproxy(Ie),
          rowTheme: "linked-account-consumer",
        }));
      var Vt;
      if (
        o("WAWebContactUtils").canSaveAsMyContact(T.id) &&
        (mt ||
          (dt &&
            o(
              "WAWebUsernameWorkerCompatibleGatingUtils",
            ).usernameContactUIEnabled())) &&
        o("WAWebContactManagementGating").contactManagementEnabled()
      ) {
        var Ht = s._(/*BTDS*/ "Edit contact");
        Vt = m.jsx(r("WDSMenuBarItem.react"), {
          onClick: kt,
          title: Ht,
          testid: void 0,
          icon: o("WAWebPencilRefreshedIcon.react").PencilRefreshedIcon,
        });
      }
      return m.jsxs(
        r("WAWebDrawer.react"),
        {
          ref: k,
          theme: "striped",
          testid: void 0,
          tsNavigationData: v,
          children: [
            m.jsx(
              o("WAWebDrawerHeader.react").DrawerHeader,
              babelHelpers.extends({}, qt, { testid: void 0, children: Vt }),
            ),
            ye &&
              m.jsxs("div", {
                className: "x78zum5 x1q0g3np xso031l x1q0q8m5 x120ee7l",
                role: "tablist",
                "data-testid": void 0,
                children: [
                  m.jsx(
                    "button",
                    babelHelpers.extends(
                      {},
                      {
                        0: {
                          className:
                            "x1iyjqo2 xs83m0k x1r8uery x78zum5 xl56j7k x6s0dn4 x16ovd2e x12xbjc7 x1ypdohk xlxy82 x1q0q8m5 x16stqrj xjbqb8w x14e42zd x10w94by x972fbf",
                        },
                        1: {
                          className:
                            "x1iyjqo2 xs83m0k x1r8uery x78zum5 xl56j7k x6s0dn4 x16ovd2e x12xbjc7 x1ypdohk xlxy82 x1q0q8m5 xjbqb8w x14e42zd x10w94by x972fbf x1fftf1g",
                        },
                      }[(ve === y) << 0],
                      {
                        role: "tab",
                        "aria-selected": ve === y,
                        onClick: function () {
                          return Se(y);
                        },
                        "data-testid": void 0,
                        children: m.jsx(r("WDSText.react"), {
                          type: ve === y ? "Body2Emphasized" : "Body2",
                          colorName:
                            ve === y ? "contentDefault" : "contentDeemphasized",
                          children: s._(/*BTDS*/ "Profile"),
                        }),
                      },
                    ),
                  ),
                  m.jsx(
                    "button",
                    babelHelpers.extends(
                      {},
                      {
                        0: {
                          className:
                            "x1iyjqo2 xs83m0k x1r8uery x78zum5 xl56j7k x6s0dn4 x16ovd2e x12xbjc7 x1ypdohk xlxy82 x1q0q8m5 x16stqrj xjbqb8w x14e42zd x10w94by x972fbf",
                        },
                        1: {
                          className:
                            "x1iyjqo2 xs83m0k x1r8uery x78zum5 xl56j7k x6s0dn4 x16ovd2e x12xbjc7 x1ypdohk xlxy82 x1q0q8m5 xjbqb8w x14e42zd x10w94by x972fbf x1fftf1g",
                        },
                      }[(ve === C) << 0],
                      {
                        role: "tab",
                        "aria-selected": ve === C,
                        onClick: function () {
                          (Se(C), Ee(!0));
                        },
                        "data-testid": void 0,
                        children: m.jsx(r("WDSText.react"), {
                          type: ve === C ? "Body2Emphasized" : "Body2",
                          colorName:
                            ve === C ? "contentDefault" : "contentDeemphasized",
                          children: s._(/*BTDS*/ "Chat"),
                        }),
                      },
                    ),
                  ),
                ],
              }),
            m.jsx(
              "div",
              babelHelpers.extends(
                {},
                {
                  0: {
                    className:
                      "x78zum5 xdt5ytf x1iyjqo2 xs83m0k x1r8uery x6ikm8r x10wlt62",
                  },
                  1: {
                    className:
                      "xdt5ytf x1iyjqo2 xs83m0k x1r8uery x6ikm8r x10wlt62 x1s85apg",
                  },
                }[!!(ye && ve !== y) << 0],
                {
                  children: m.jsx(r("WAWebDrawerBody.react"), {
                    flatListControllers: [pe.current],
                    onScroll: Pt,
                    children: m.jsxs("section", {
                      className: "x1c4vz4f x2lah0s xdl72j9 x1w3bhph",
                      children: [
                        It,
                        Tt,
                        Dt,
                        ke
                          ? m.jsx(
                              r("WAWebBusinessContactDisclosureSection.react"),
                              { chat: ke },
                            )
                          : null,
                        Lt,
                        Et,
                        xt,
                        ze,
                        $t,
                        Ut,
                        m.jsx(r("WAWebContactInfoCustomerDataSection.react"), {
                          contact: T,
                        }),
                        pt &&
                          !(
                            o(
                              "WAWebCustomerManagerGating",
                            ).customerManagerEnabled() &&
                            o(
                              "WAWebCustomerManagerGating",
                            ).isEligibleForCustomerFields(T)
                          ) &&
                          m.jsx(r("WAWebContactInfoPhoneNumberSection.react"), {
                            contact: T,
                          }),
                        Rt,
                        He && m.jsx(r("WAWebGroupInfoSeparator.react"), {}),
                        He,
                        !Pe && m.jsx(r("WAWebGroupInfoSeparator.react"), {}),
                        nt,
                        rt,
                        yt,
                        bt,
                        m.jsx(r("WAWebGroupInfoSeparator.react"), {}),
                        St,
                        Ge,
                        !$e && Ve,
                        ke &&
                          !Pe &&
                          ke.canToggleFavorite() &&
                          o(
                            "WAWebInboxFiltersGatingUtils",
                          ).inboxFavoritesEnabled() &&
                          m.jsx(r("WAWebChatInfoFavoritesSection.react"), {
                            chat: ke,
                          }),
                        ke &&
                          !Pe &&
                          o("WAWebListsGatingUtils").isListsEnabled() &&
                          m.jsx(r("WAWebChatInfoListsSection.react"), {
                            chat: ke,
                          }),
                        ke &&
                          !Pe &&
                          m.jsx(r("WAWebChatInfoClearChatSection.react"), {
                            chat: ke,
                          }),
                        o("WAWebBotUtils").isHatchBot(T.id) &&
                          o(
                            "WAWebBotFrontendGating",
                          ).isHatchIntegrationEnabled() &&
                          m.jsx(
                            r("WAWebContactInfoHatchDisconnectButton.react"),
                            { contact: T },
                          ),
                        !$e &&
                          m.jsx(r("WAWebContactInfoIntegritySection.react"), {
                            contact: T,
                          }),
                        !Pe &&
                          m.jsx(E, {
                            chatId: W,
                            handleClick: Fe,
                            isRefresh: !0,
                          }),
                      ],
                    }),
                  }),
                },
              ),
            ),
            ye &&
              Le &&
              m.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  {
                    0: {
                      className:
                        "x78zum5 xdt5ytf x1iyjqo2 xs83m0k x1r8uery x6ikm8r x10wlt62",
                    },
                    1: {
                      className:
                        "xdt5ytf x1iyjqo2 xs83m0k x1r8uery x6ikm8r x10wlt62 x1s85apg",
                    },
                  }[(ve !== C) << 0],
                  { children: m.jsx(L, { chat: ke }) },
                ),
              ),
          ],
        },
        "contact-info-modal",
      );
    }
    R.displayName = R.name + " [from " + i.id + "]";
    function L(e) {
      var t = e.chat;
      return t != null
        ? m.jsx(r("WAWebContactInfoChatTabFull.react"), { chat: t })
        : m.jsx(r("WAWebDrawerBody.react"), {
            children: m.jsx("div", {
              className: "x78zum5 xl56j7k x6s0dn4 x1sk1jro x1ci70gm",
              "data-testid": void 0,
              children: m.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDeemphasized",
                children: s._(/*BTDS*/ "No chat available"),
              }),
            }),
          });
    }
    L.displayName = L.name + " [from " + i.id + "]";
    function E(e) {
      var t = e.chatId,
        n = e.handleClick,
        a = e.isRefresh,
        i = h(function () {
          return o("WAWebChatCollection").ChatCollection.get(t) != null;
        }),
        l = i[0],
        u = i[1];
      if (
        (o("useWAWebListener").useListener(
          o("WAWebChatCollection").ChatCollection,
          "remove",
          function (e) {
            e.id.equals(t) && u(!1);
          },
        ),
        !l)
      )
        return null;
      var c = "li-delete-chat",
        d = s._(/*BTDS*/ "Delete chat");
      return a === !0
        ? m.jsx(
            o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerButtonsSection,
            {
              children: m.jsx("div", {
                className: "x1280gxy",
                children: m.jsx(r("WAWebDrawerButtonRefreshed.react"), {
                  testid: void 0,
                  icon: m.jsx(
                    o("WAWebDeleteRefreshedIcon.react").DeleteRefreshedIcon,
                    {},
                  ),
                  danger: !0,
                  onClick: n,
                  children: d,
                }),
              }),
            },
          )
        : m.jsx(
            o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerButtonsSection,
            {
              children: m.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
                testid: void 0,
                icon: m.jsx(o("WAWebDeleteIcon.react").DeleteIcon, {}),
                color: "danger",
                onClick: n,
                theme: "chat-info",
                children: d,
              }),
            },
          );
    }
    ((E.displayName = E.name + " [from " + i.id + "]"), (l.default = R));
  },
  226,
);
