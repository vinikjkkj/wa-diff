__d(
  "WAWebCreateOrUpdateGroupMetadataAction",
  ["WAWebGroupMetadataCollection", "WAWebGroupQueryBridge"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t, n, a, i, l, s, u, c, d, m, p;
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
              suspendAppealStatus:
                (a = e.suspendAppealStatus) != null ? a : null,
              suspendAppealUpdateTime:
                (i = e.suspendAppealUpdateTime) != null ? i : null,
              terminated: (l = e.terminated) != null ? l : !1,
              isParentGroup: (s = e.isParentGroup) != null ? s : !1,
              isParentGroupClosed: (u = e.isParentGroupClosed) != null ? u : !1,
              parentGroup: e.parentGroup,
              defaultSubgroup: (c = e.defaultSubgroup) != null ? c : !1,
              generalSubgroup: (d = e.generalSubgroup) != null ? d : !1,
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
              hiddenSubgroup: (m = e.hiddenSubgroup) != null ? m : !1,
              groupSafetyCheck: (p = e.groupSafetyCheck) != null ? p : !1,
              isOpenBotGroup: e.isOpenBotGroup,
              isTeeBotGroup: e.isTeeBotGroup,
            },
          ),
        ),
        e.isInternal != null)
      ) {
        var _;
        (_ = r("WAWebGroupMetadataCollection").get(e.id)) == null ||
          _.set({ isInternal: e.isInternal });
      }
    }
    l.createOrUpdateGroupMetadataModelFromQuery = e;
  },
  98,
);
