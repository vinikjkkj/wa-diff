__d(
  "WAWebGroupJoinRequestMetricUtils",
  [
    "WAWebWaFsGroupJoinRequestActionWamEvent",
    "WAWebWamEnumGroupJoinRequestActionType",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.action,
        n = e.groupId,
        r = e.groupsInCommon,
        a = e.isSuccessful,
        i = e.responseTime;
      new (o(
        "WAWebWaFsGroupJoinRequestActionWamEvent",
      ).WaFsGroupJoinRequestActionWamEvent)({
        groupJid: p(n),
        groupJoinRequestAction: t,
        groupJoinRequestGroupsInCommon: r,
        serverResponseTime: Math.round(i),
        isSuccessful: a,
      }).commit();
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
    function c(t) {
      e({
        groupId: t,
        action: o("WAWebWamEnumGroupJoinRequestActionType")
          .GROUP_JOIN_REQUEST_ACTION_TYPE.VIEW_PENDING_PARTICIPANTS,
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
