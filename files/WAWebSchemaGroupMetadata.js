__d(
  "WAWebSchemaGroupMetadata",
  ["$InternalEnum", "WAWebModelStorageUtils", "WAWebModelStorageVersions"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum")({
      ADMIN_ADD: "admin_add",
      ALL_MEMBER_ADD: "all_member_add",
    });
    function s() {
      var e = o("WAWebModelStorageUtils").getStorage();
      e.add_OPTIMIZED_EXPERIMENT("group-metadata", function (e, t) {
        var n,
          r = t.addColumn,
          a = t.addIndex,
          i = t.addUserDefinedPrimaryKey,
          l = t.removeColumn;
        return e
          .version(
            (n = o("WAWebModelStorageVersions")).groupMetadataCreateTable(),
            [
              i("id"),
              r("subject"),
              r("subjectTime"),
              r("creation"),
              r("owner"),
              r("desc"),
              r("descId"),
              r("descTime"),
              r("descOwner"),
              r("restrict"),
              r("announce"),
              r("a_v_id"),
              r("noFrequentlyForwarded"),
              r("ephemeralDuration"),
              r("afterReadDuration"),
              r("membershipApprovalMode"),
              r("size"),
              r("support"),
              r("suspended"),
              r("terminated"),
              r("notAddedByContact"),
              r("addedBy"),
              r("parentGroup"),
              r("subgroups"),
              r("isParentGroup"),
              r("isParentGroupClosed"),
              r("defaultSubgroup"),
              r("generalSubgroup"),
              r("growthLockExpiration"),
              r("growthLockType"),
              r("lastActivityTimestamp"),
              r("lastSeenActivityTimestamp"),
              r("isLidAddressingMode"),
              r("reportToAdminMode"),
              r("lastReportToAdminTimestamp"),
              r("allowNonAdminSubGroupCreation"),
              r("memberAddMode"),
              r("memberLinkMode"),
              r("generalChatAutoAddDisabled"),
              r("unreadMentionMapDB"),
              r("pendingUnreadMentionCountDB"),
              r("disappearingModeTrigger"),
              r("disappearingModeInitiatedByMe"),
              r("hasCapi"),
              r("hiddenSubgroup"),
              r("groupSafetyCheck"),
              r("suspendAppealStatus"),
              r("suspendAppealUpdateTime"),
              r("groupAdder"),
              r("lastCommunityPollTimestamp"),
              r("hasIncompleteParticipantInformation"),
              r("statusMute"),
              r("isOpenBotGroup"),
              r("isTeeBotGroup"),
              r("memberShareGroupHistoryMode"),
              r("showedFirstJoinedViaLinkSystemMessage"),
              r("lastJoinFloodNotificationTimestampSec"),
              r("groupAbPropsHash"),
              r("groupAbPropsRefreshSec"),
              r("groupAbPropsLastFetchTimestampSec"),
            ],
          )
          .version(n.migrateSubgroupsArray(), [
            l("subgroups"),
            r("unjoinedSubgroups"),
          ])
          .version(n.removeUnjoinedSubgroups(), [l("unjoinedSubgroups")])
          .version(n.removeSpamColumnsInGroupMetadata(), [
            l("notAddedByContact"),
            l("addedBy"),
          ])
          .version(n.addCommunityAdminPromotionColumns(), [
            r("displayCadminPromotion"),
          ])
          .version(n.renameCommunityAdminPromotionColumns(), [
            l("displayCadminPromotion"),
            r("acknowledgedCadminPromotion"),
          ])
          .version(n.removeCommunityAdminPromotionColumns(), [
            l("acknowledgedCadminPromotion"),
          ])
          .version(n.addIncognitoGroupMetadataColumn(), [r("incognito")])
          .version(n.groupMetadataAddParentIndex(), [a("parentGroup")])
          .version(n.addUnreadMentionMetadataColumn(), [
            r("unreadMentionMetadata"),
          ])
          .version(n.removeUnreadMentionMetadataColumn(), [
            l("unreadMentionMetadata"),
          ])
          .version(n.addEphemeralityIndexToGroupMetadataTable(), [
            a("ephemeralDuration"),
          ])
          .view(function (e) {
            return e;
          })
          .commit();
      });
    }
    function u() {
      return o("WAWebModelStorageUtils").getStorage().table("group-metadata");
    }
    ((l.MemberAddMode = e), (l.addTable = s), (l.getGroupMetadataTable = u));
  },
  98,
);
