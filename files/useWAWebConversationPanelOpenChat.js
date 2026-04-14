__d(
  "useWAWebConversationPanelOpenChat",
  [
    "WAJids",
    "WALogger",
    "WAWebABPropsSaga",
    "WAWebAddonHydrationUtils",
    "WAWebBlockContactAction",
    "WAWebChatGetters",
    "WAWebChatGroupUtils",
    "WAWebCmd",
    "WAWebDeleteExpiredPinsAction",
    "WAWebDrawerManager",
    "WAWebGroupAbPropsSyncJob",
    "WAWebGroupGatingUtils",
    "WAWebGroupMetadataCollection",
    "WAWebGroupSafetyCheckModalLoggingUtils",
    "WAWebGroupSafetyCheckUtils",
    "WAWebGroupType",
    "WAWebMembershipApprovalRequestAction",
    "WAWebMiscGatingUtils",
    "WAWebMsgType",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterMembershipUtil",
    "WAWebNux",
    "WAWebPinMsgGatingUtils",
    "WAWebQueryAndUpdateNewslettersMetadataAction",
    "WAWebQuerySubGroupAction",
    "WAWebRestoreSubgroupSuggestionsAction",
    "WAWebSideNavButtonsActivityModel",
    "WAWebSignupGreetingAction",
    "WAWebSupportChatUtils",
    "WAWebSuspendedCommunityUtils",
    "WAWebSuspendedGroupUtils",
    "WAWebSyncNewsletterStatusMetadataAction",
    "WAWebWid",
    "WAWebWidToJid",
    "react",
    "useWAWebGroupParticipantStatus",
    "useWAWebNux",
    "useWAWebSetModelValue",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = (d || (d = o("react"))).useEffect;
    function p(t) {
      var n = o("useWAWebSetModelValue").useSetModelValue(t, "active"),
        a = r("useWAWebGroupParticipantStatus")(t.groupMetadata),
        i = a[0],
        l = a[1],
        d = r("useWAWebNux")(o("WAWebNux").NUX.SUPPORT_AI),
        p = d[0];
      m(function () {
        var a, i;
        (o("WAWebCmd").Cmd.closeContextMenu(),
          r("WAWebWid").isPSA(t.id) &&
            o("WAWebBlockContactAction").updatePSAUserBlockingStatus(t.id),
          n(!0),
          o("WAWebDrawerManager").DrawerManager.closeDrawerMid(),
          o(
            "WAWebSideNavButtonsActivityModel",
          ).setLastSideBarActivityBasedOnChat(t));
        var d = t.groupMetadata;
        if (d != null) {
          var m = d.groupType,
            _ = d.membershipApprovalMode,
            f = d.participants;
          if (
            ((m === o("WAWebGroupType").GroupType.DEFAULT ||
              m === o("WAWebGroupType").GroupType.LINKED_SUBGROUP) &&
              (f.iAmAdmin() || l) &&
              _ &&
              o("WAWebMembershipApprovalRequestAction")
                .readMembershipApprovalRequestsFromDB(t)
                .catch(function (t) {
                  o("WALogger")
                    .ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "useOpenChat: error reading membership approval requests from DB: ",
                          "",
                        ])),
                      t,
                    )
                    .sendLogs(
                      "use-open-chat-read-membership-approval-requests-from-db-error",
                    );
                }),
            m === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP &&
              f.iAmAdmin())
          ) {
            var g = d.getParentGroupChat();
            g &&
              o(
                "WAWebRestoreSubgroupSuggestionsAction",
              ).restoreSubgroupSuggestionsFromDb(g);
          }
          if (m === o("WAWebGroupType").GroupType.LINKED_SUBGROUP) {
            var h = d.parentGroup;
            if (h != null) {
              var y = r("WAWebGroupMetadataCollection").get(h.toString());
              (y == null || y.unjoinedSubgroups.length === 0) &&
                o("WAWebQuerySubGroupAction")
                  .queryAndUpdateSubgroupsMetadata(
                    h,
                    y == null ? void 0 : y.joinedSubgroups,
                  )
                  .catch(function () {
                    o("WALogger")
                      .ERROR(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "useOpenChat: error fetching subgroup metadata for community",
                          ])),
                      )
                      .sendLogs("use-open-chat-fetch-subgroup-metadata-error");
                  });
            }
          }
          (o("WAWebGroupSafetyCheckModalLoggingUtils").logGroupOpenEvent({
            groupJid: t.id.toJid(),
          }),
            o("WAWebGroupAbPropsSyncJob").syncGroupABPropsTask(
              o("WAWebWidToJid").widToGroupJid(t.id),
            ));
        }
        if (
          (t.id.isCAPISupportAccount() &&
            o("WAWebABPropsSaga").getIsSagaV1NuxEnabled() &&
            p &&
            o("WAWebSupportChatUtils").openSupportAINux(),
          o("WAWebChatGetters").getIsNewsletter(t) &&
          !((a = t.newsletterMetadata) != null && a.isPreview)
            ? o(
                "WAWebQueryAndUpdateNewslettersMetadataAction",
              ).queryAndUpdateNewsletterMetadataAction(
                o("WAJids").toNewsletterJid(t.id.toString()),
                {
                  fields: { subscribers: !0, verification: !0 },
                  adminFields: {
                    adminCount: o("WAWebNewsletterMembershipUtil").iAmOwner(
                      t.newsletterMetadata,
                    )
                      ? !0
                      : void 0,
                    capabilities:
                      o("WAWebNewsletterMembershipUtil").iAmAdminOrOwner(
                        t.newsletterMetadata,
                      ) &&
                      o(
                        "WAWebNewsletterGatingUtils",
                      ).shouldFetchAndLogCapabilities()
                        ? !0
                        : void 0,
                  },
                },
              )
            : o("WAWebChatGetters").getIsNewsletter(t) &&
              ((i = t.newsletterMetadata) == null ? void 0 : i.isPreview) ===
                !0 &&
              o(
                "WAWebNewsletterGatingUtils",
              ).isNewsletterStatusReceiverEnabled() &&
              o(
                "WAWebSyncNewsletterStatusMetadataAction",
              ).syncNewsletterStatusMetadata(
                o("WAJids").toNewsletterJid(t.id.toString()),
                t.id,
              ),
          o("WAWebPinMsgGatingUtils").isPinnedMessagesM1ReceiverEnabled() &&
            o("WAWebDeleteExpiredPinsAction")
              .deleteExpiredPins(t.id)
              .catch(function (e) {
                o("WALogger")
                  .ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "useOpenChat: error deleting expired pins from DB: ",
                        "",
                      ])),
                    e,
                  )
                  .sendLogs("use-open-chat-delete-expired-pins-from-db-error");
              })
              .then(function () {
                o("WAWebAddonHydrationUtils").hydrateAddons({
                  ids: [t.id],
                  hydrationType: o("WAWebMsgType").MSG_TYPE.PIN_MESSAGE,
                });
              })
              .catch(function (e) {
                o("WALogger")
                  .ERROR(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "useOpenChat: error reading pins from DB: ",
                        "",
                      ])),
                    e,
                  )
                  .sendLogs("use-open-chat-read-pins-from-db-error");
              }),
          t.attachMediaContents)
        ) {
          var C = t.attachMediaContents.isStickerMaker;
          o("WAWebCmd").Cmd.attachMediaDrawer({
            chat: t,
            animationName: "noop",
            sendAsSticker: C,
          });
        }
        return (
          o(
            "WAWebChatGroupUtils",
          ).isIntegrityDeactivatedCommunityAnnouncementGroup(t)
            ? o("WAWebSuspendedCommunityUtils").openTerminatedCommunityModal()
            : o("WAWebChatGroupUtils").isDeactivatedCommunityAnnouncementGroup(
                t,
              ) ||
              (o("WAWebChatGroupUtils").isSuspendedCommunityAnnouncementGroup(t)
                ? o(
                    "WAWebGroupGatingUtils",
                  ).isGroupSuspensionAppealsRedesignEnabled()
                  ? o(
                      "WAWebSuspendedCommunityUtils",
                    ).openSuspendedCommunityRedesignModal(t)
                  : o(
                      "WAWebSuspendedCommunityUtils",
                    ).openSuspendedCommunityModal(t)
                : o("WAWebChatGroupUtils").isTerminatedGroupOrNotMember(t)
                  ? o("WAWebChatGroupUtils").isSupportGroup(t) ||
                    (o(
                      "WAWebGroupGatingUtils",
                    ).isGroupSuspensionAppealsRedesignEnabled()
                      ? o(
                          "WAWebSuspendedGroupUtils",
                        ).openSuspendedGroupRedesignModal(t)
                      : o("WAWebMiscGatingUtils").isGroupSuspendV2Enabled()
                        ? o(
                            "WAWebSuspendedGroupUtils",
                          ).openSuspendedGroupModalV2(t)
                        : o(
                            "WAWebSuspendedGroupUtils",
                          ).openTerminatedGroupOrNotMemberModal())
                  : o("WAWebChatGroupUtils").isSuspendedGroup(t)
                    ? o(
                        "WAWebGroupGatingUtils",
                      ).isGroupSuspensionAppealsRedesignEnabled()
                      ? o(
                          "WAWebSuspendedGroupUtils",
                        ).openSuspendedGroupRedesignModal(t)
                      : o("WAWebMiscGatingUtils").isGroupSuspendV2Enabled()
                        ? o(
                            "WAWebSuspendedGroupUtils",
                          ).openSuspendedGroupModalV2(t)
                        : o("WAWebSuspendedGroupUtils").openSuspendedGroupModal(
                            o(
                              "WAWebChatGroupUtils",
                            ).shouldIncludeEntityIdInAppealRequest() === !0
                              ? t.id.user.toString()
                              : null,
                          )
                    : o(
                        "WAWebGroupSafetyCheckUtils",
                      ).shouldShowGroupSafetyCheckUI(t) &&
                      o("WAWebGroupSafetyCheckUtils").openGroupSafetyCheckModal(
                        t,
                      )),
          function () {
            (t.urlText && (t.urlText = void 0),
              t.urlNumber && (t.urlNumber = void 0),
              o("WAWebSignupGreetingAction").maybeCleanupSignupAGM(t),
              n(!1));
          }
        );
      }, []);
    }
    l.default = p;
  },
  98,
);
