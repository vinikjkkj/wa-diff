__d(
  "WAWebSchemaChat",
  ["WAWebModelStorageUtils", "WAWebModelStorageVersions", "WAWebStorageSchema"],
  function (t, n, r, o, a, i, l) {
    function e() {
      o("WAWebModelStorageUtils")
        .getStorage()
        .add_OPTIMIZED_EXPERIMENT("chat", function (e, t) {
          var n,
            r = t.addColumn,
            a = t.addEncryptedColumn,
            i = t.addIndex,
            l = t.addUniqueIndex,
            s = t.addUserDefinedPrimaryKey;
          return e
            .version((n = o("WAWebModelStorageVersions")).chatCreateTable(), [
              s("id"),
              r("t"),
              r("unreadCount"),
              r("unreadDividerOffset"),
              r("archive"),
              r("isReadOnly"),
              r("isLocked"),
              r("isAnnounceGrpRestrict"),
              r("modifyTag"),
              r("muteExpiration"),
              r("isAutoMuted"),
              r("mentionAllMuteExpiration"),
              r("name"),
              r("notSpam"),
              r("pin"),
              r("changeNumberOldJid"),
              r("changeNumberNewJid"),
              r("ephemeralDuration"),
              r("ephemeralSettingTimestamp"),
              r("afterReadDuration"),
              r("unreadMsgAnchorId"),
              r("endOfHistoryTransferType"),
              r("lastReactionPreview"),
              r("chatlistPreview"),
              r("unreadEditTimestampMs"),
              a(
                "chatRowOpaqueData",
                o("WAWebStorageSchema").EncryptedValueType.ARRAY_BUFFER,
              ),
              r("ephemeralDisplayedExemptions"),
              r("disappearingModeTrigger"),
              r("disappearingModeInitiatedByMe"),
              r("hasOpened"),
              r("lastChatEntryTimestamp"),
              r("hasCreatedBotInvokeSystemMsg"),
              r("bizBotSystemMsgType"),
              r("lidOriginType"),
              r("hasRequestedWelcomeMsg"),
              r("wallpaper"),
              r("showDoodle"),
              r("capiThreadControl"),
              r("capiCallingPermissionType"),
              r("createdLocally"),
              r("limitSharing"),
              r("mmSignalSharingExpirationWindow"),
              r("toneId"),
              r("originalLid"),
              r("historyChatId"),
              r("hasCtwaConsumerDataSharingDisclosureSystemMsg"),
              r("isUsernameThreadAtCreation"),
              r("isSenderNewAccount"),
              r("isSenderSuspicious"),
            ])
            .version(n.chatAddDisappearingModeInitiator(), [
              r("disappearingModeInitiator"),
            ])
            .version(n.addUnreadMentionToChatTable(), [r("unreadMentionsOfMe")])
            .version(n.addUnreadMentionCountToChatTable(), [
              r("unreadMentionCount"),
            ])
            .version(n.addTcTokenToChatTable(), [
              a(
                "tcToken",
                o("WAWebStorageSchema").EncryptedValueType.ARRAY_BUFFER,
              ),
            ])
            .version(n.addTcTokenTimestampToChatTable(), [
              r("tcTokenTimestamp"),
              i("tcTokenTimestamp"),
            ])
            .version(n.addArchiveAtMentionViewedInDrawer(), [
              r("archiveAtMentionViewedInDrawer"),
            ])
            .version(n.addTcTokenSenderTimestampToChatTable(), [
              r("tcTokenSenderTimestamp"),
            ])
            .version(n.addEphemeralityIndexToChatTable(), [
              i("ephemeralDuration"),
            ])
            .version(n.chatAddAccountLidIndex(), [
              r("accountLid"),
              l("accountLid"),
            ])
            .version(n.chatAddHistoryChatIdIndex(), [l("historyChatId")])
            .view(function (e) {
              return e;
            })
            .commit();
        });
    }
    function s() {
      return o("WAWebModelStorageUtils").getStorage().table("chat");
    }
    ((l.addTable = e), (l.getChatTable = s));
  },
  98,
);
