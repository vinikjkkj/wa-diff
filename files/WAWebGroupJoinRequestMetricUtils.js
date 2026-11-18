__d(
  "WAWebGroupJoinRequestMetricUtils",
  [
    "WAWebWaFsGroupJoinRequestActionWamEvent",
    "WAWebWamEnumGroupJoinRequestActionType",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.action,
        n = e.entrypoint,
        r = e.groupId,
        a = e.groupsInCommon,
        i = e.isSuccessful,
        l = e.responseTime,
        s = new (o(
          "WAWebWaFsGroupJoinRequestActionWamEvent",
        ).WaFsGroupJoinRequestActionWamEvent)({
          groupJid: p(r),
          groupJoinRequestAction: t,
          groupJoinRequestGroupsInCommon: a,
          serverResponseTime: Math.round(l),
          isSuccessful: i,
        });
      (n != null && (s.groupJoinRequestEntrypoint = n), s.commit());
    }
    function s(t) {
      e(
        babelHelpers.extends({}, t, {
          action: o("WAWebWamEnumGroupJoinRequestActionType")
            .GROUP_JOIN_REQUEST_ACTION_TYPE.MEMBERSHIP_REQUEST_CREATE,
        }),
      );
    }
    function u(t) {
      e(
        babelHelpers.extends({}, t, {
          action: o("WAWebWamEnumGroupJoinRequestActionType")
            .GROUP_JOIN_REQUEST_ACTION_TYPE.MEMBERSHIP_REQUEST_CANCEL,
        }),
      );
    }
    function c(t, n) {
      e({
        groupId: t,
        action: o("WAWebWamEnumGroupJoinRequestActionType")
          .GROUP_JOIN_REQUEST_ACTION_TYPE.VIEW_PENDING_PARTICIPANTS,
        entrypoint: n,
        responseTime: 0,
        isSuccessful: !0,
      });
    }
    function d(t) {
      e(
        babelHelpers.extends({}, t, {
          action: o("WAWebWamEnumGroupJoinRequestActionType")
            .GROUP_JOIN_REQUEST_ACTION_TYPE.MEMBERSHIP_REQUEST_APPROVE,
        }),
      );
    }
    function m(t) {
      e(
        babelHelpers.extends({}, t, {
          action: o("WAWebWamEnumGroupJoinRequestActionType")
            .GROUP_JOIN_REQUEST_ACTION_TYPE.MEMBERSHIP_REQUEST_REJECT,
        }),
      );
    }
    function p(e) {
      var t,
        n = (t = e == null ? void 0 : e.toJid()) != null ? t : "";
      return n.includes("-") ? "" : n;
    }
    ((l.logMembershipRequestCreate = s),
      (l.logMembershipRequestCancel = u),
      (l.logViewPendingParticipant = c),
      (l.logMembershipRequestApprove = d),
      (l.logMembershipRequestReject = m),
      (l.getSanitizedJid = p));
  },
  98,
);
