__d(
  "WAWebGroupBridgeApi",
  [
    "WAWebChatCollection",
    "WAWebCommunitySubgroupSuggestionsUtils",
    "WAWebContactCollection",
    "WAWebCreateOrUpdateGroupMetadataAction",
    "WAWebGroupMetadataCollection",
    "WAWebMsgCollection",
    "WAWebRestoreGroupParticipantsAction",
    "WAWebUpdateModelForGroupAction",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
      updateModelForGroupAction: function (t) {
        var e = t.groupAction,
          n = t.groupMeta;
        r("promiseDone")(
          o("WAWebUpdateModelForGroupAction").updateModelForGroupAction(n, e),
        );
      },
      restoreGroupParticipantsForChats: function (t) {
        var e = t.chatIds;
        r("promiseDone")(
          o(
            "WAWebRestoreGroupParticipantsAction",
          ).restoreGroupParticipantsForChats(e),
        );
      },
      expireGroupInviteV4: function (t) {
        var e,
          n = t.inviteMsgId;
        (e = o("WAWebMsgCollection").MsgCollection.get(n)) == null ||
          e.set({ inviteCodeExp: "0" });
      },
      updateGroupSubject: function (t) {
        var e = t.id,
          n = t.subject;
        o("WAWebContactCollection").ContactCollection.add(
          { id: e, name: n },
          { merge: !0 },
        );
      },
      updateGroupAddressingMode: function (t) {
        var e,
          n = t.groupInfoUpdate,
          o = t.id,
          a = t.isLidAddressingMode;
        (e = r("WAWebGroupMetadataCollection").get(o)) == null ||
          e.set(babelHelpers.extends({ isLidAddressingMode: a }, n));
      },
      notAlreadyInGroup: function (t) {
        var e,
          n = t.groupId,
          r = t.participants,
          a =
            (e = o("WAWebChatCollection").ChatCollection.get(n)) == null
              ? void 0
              : e.groupMetadata;
        return a
          ? r.filter(function (e) {
              var t = e.id;
              return !a.participants.get(t);
            })
          : r;
      },
      createOrUpdateGroupMetadataFromQuery: function (t) {
        var e = t.groupInfo;
        o(
          "WAWebCreateOrUpdateGroupMetadataAction",
        ).createOrUpdateGroupMetadataModelFromQuery(e);
      },
      createOrUpdateSubgroupSuggestions: function (t) {
        var e = t.parentGroupId,
          n = t.subgroupSuggestions,
          a = r("WAWebGroupMetadataCollection").gadd(e);
        a.subgroupSuggestions.set(
          n.map(function (e) {
            return babelHelpers.extends({}, e, {
              id: o(
                "WAWebCommunitySubgroupSuggestionsUtils",
              ).getSubgroupSuggestionId(e.id, e.owner),
              groupId: e.id,
            });
          }),
        );
      },
      updateGroupMetadataModelForAiGroupState: function (t) {
        var e,
          n = t.group,
          o = t.isOpenBotGroup;
        (e = r("WAWebGroupMetadataCollection").get(n)) == null ||
          e.set({ isOpenBotGroup: o });
      },
    };
    l.GroupBridgeApi = e;
  },
  98,
);
