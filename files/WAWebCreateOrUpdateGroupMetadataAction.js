__d(
  "WAWebCreateOrUpdateGroupMetadataAction",
  ["WAWebGroupMetadataCollection", "WAWebGroupQueryBridge"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t, n, a, i, l, s, u, c, d;
      if (
        (o("WAWebGroupQueryBridge").updateSubject(e.id, e.subject),
        r("WAWebGroupMetadataCollection").gadd(
          babelHelpers.extends(
            {
              id: e.id,
              owner: e.owner,
              subject: e.subject,
              creation: e.creation,
              desc: e.desc,
              descId: e.descId,
              descOwner: e.descOwner,
              descTime: e.descTime,
              restrict: e.restrict || !1,
              announce: e.announce || !1,
              noFrequentlyForwarded: e.noFrequentlyForwarded || !1,
              ephemeralDuration: e.ephemeralDuration || 0,
              growthLockExpiration: e.growthLockExpiration,
              growthLockType: e.growthLockType,
              membershipApprovalMode: e.membershipApprovalMode,
              memberAddMode: e.memberAddMode,
              memberLinkMode: e.memberLinkMode,
              memberShareGroupHistoryMode: e.memberShareGroupHistoryMode,
              participants: e.participants,
              pastParticipants: e.pastParticipants,
              support: (t = e.support) != null ? t : !1,
              suspended: (n = e.suspended) != null ? n : !1,
              terminated: (a = e.terminated) != null ? a : !1,
              isParentGroup: (i = e.isParentGroup) != null ? i : !1,
              isParentGroupClosed: (l = e.isParentGroupClosed) != null ? l : !1,
              parentGroup: e.parentGroup,
              defaultSubgroup: (s = e.defaultSubgroup) != null ? s : !1,
              generalSubgroup: (u = e.generalSubgroup) != null ? u : !1,
              deviceStale: !0,
              size: e.size,
              isLidAddressingMode: e.isLidAddressingMode,
              reportToAdminMode: e.reportToAdminMode,
            },
            e.reportToAdminMode === !1 && { lastReportToAdminTimestamp: null },
            {
              allowNonAdminSubGroupCreation: e.allowNonAdminSubGroupCreation,
              generalChatAutoAddDisabled: e.generalChatAutoAddDisabled,
              hasCapi: e.hasCapi,
              hiddenSubgroup: (c = e.hiddenSubgroup) != null ? c : !1,
              groupSafetyCheck: (d = e.groupSafetyCheck) != null ? d : !1,
              isOpenBotGroup: e.isOpenBotGroup,
              isTeeBotGroup: e.isTeeBotGroup,
            },
          ),
        ),
        e.isInternal != null)
      ) {
        var m;
        (m = r("WAWebGroupMetadataCollection").get(e.id)) == null ||
          m.set({ isInternal: e.isInternal });
      }
    }
    l.createOrUpdateGroupMetadataModelFromQuery = e;
  },
  98,
);
