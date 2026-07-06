__d(
  "WAWebCreateOrUpdateGroupMetadataAction",
  [
    "WAWebGroupHistoryParticipantStateHydration",
    "WAWebGroupMetadataCollection",
    "WAWebGroupQueryBridge",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t, n, a, i, l, s, u, c, d, m, p, _;
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
              afterReadDuration: (t = e.afterReadDuration) != null ? t : null,
              growthLockExpiration: e.growthLockExpiration,
              growthLockType: e.growthLockType,
              membershipApprovalMode: e.membershipApprovalMode,
              memberAddMode: e.memberAddMode,
              memberLinkMode: e.memberLinkMode,
              memberShareGroupHistoryMode: e.memberShareGroupHistoryMode,
              participants: o(
                "WAWebGroupHistoryParticipantStateHydration",
              ).guardGroupHistorySentStateDowngrade(e.id, e.participants),
              pastParticipants: e.pastParticipants,
              support: (n = e.support) != null ? n : !1,
              suspended: (a = e.suspended) != null ? a : !1,
              suspendAppealStatus:
                (i = e.suspendAppealStatus) != null ? i : null,
              suspendAppealUpdateTime:
                (l = e.suspendAppealUpdateTime) != null ? l : null,
              terminated: (s = e.terminated) != null ? s : !1,
              isParentGroup: (u = e.isParentGroup) != null ? u : !1,
              isParentGroupClosed: (c = e.isParentGroupClosed) != null ? c : !1,
              parentGroup: e.parentGroup,
              defaultSubgroup: (d = e.defaultSubgroup) != null ? d : !1,
              generalSubgroup: (m = e.generalSubgroup) != null ? m : !1,
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
              hiddenSubgroup: (p = e.hiddenSubgroup) != null ? p : !1,
              groupSafetyCheck: (_ = e.groupSafetyCheck) != null ? _ : !1,
              isOpenBotGroup: e.isOpenBotGroup,
              isTeeBotGroup: e.isTeeBotGroup,
            },
          ),
        ),
        e.isInternal != null)
      ) {
        var f;
        (f = r("WAWebGroupMetadataCollection").get(e.id)) == null ||
          f.set({ isInternal: e.isInternal });
      }
    }
    l.createOrUpdateGroupMetadataModelFromQuery = e;
  },
  98,
);
