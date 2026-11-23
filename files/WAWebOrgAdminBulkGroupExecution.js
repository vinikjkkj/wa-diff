__d(
  "WAWebOrgAdminBulkGroupExecution",
  ["WALogger", "WAWebBoolFunc", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return {
        addedMemberCount: 0,
        completedGroupCount: 0,
        createdGroupCount: 0,
        emailInviteSentCount: 0,
        failedGroupCount: 0,
        failedMemberCount: 0,
        groupResults: [],
        invitedMemberCount: 0,
        totalGroupCount: e,
      };
    }
    async function c(e, t, n, r) {
      r === void 0 && (r = o("WAWebBoolFunc").returnFalse);
      var a = [];
      return (await d(e, 0, t, a, n, r), h(a, e.length));
    }
    async function d(e, t, n, r, o, a) {
      var i = e[t];
      if (i != null) {
        var l = await p(i, n);
        if ((r.push(l), l.status === "association_failed" || a())) {
          (r.push.apply(
            r,
            e.slice(t + 1).map(function (e) {
              return g(e, "not_attempted");
            }),
          ),
            m(o, h(r, e.length)));
          return;
        }
        (m(o, h(r, e.length)), await d(e, t + 1, n, r, o, a));
      }
    }
    function m(t, n) {
      try {
        t(n);
      } catch (t) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Org admin bulk group progress callback failed unexpectedly",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("org-admin-bulk-create-progress-failed");
      }
    }
    async function p(e, t) {
      var n;
      try {
        n = await t({
          full: null,
          members: e.members,
          subject: e.name,
          thumb: null,
        });
      } catch (t) {
        return (
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "Org admin bulk group creation failed unexpectedly",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("org-admin-bulk-create-group-failed"),
          g(e, "unexpected_failure")
        );
      }
      return (function (t) {
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.status === "association_failed"
        )
          return f(e);
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.status === "create_failed"
        )
          return g(e, "create_failed");
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.status === "in_progress"
        )
          return g(e, "operation_busy");
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.status === "success" &&
          "addedMemberCount" in t &&
          "emailInviteNotSentMembers" in t &&
          "emailInviteSentCount" in t &&
          "failedMemberCount" in t &&
          "invitedMemberCount" in t &&
          "runParticipantFollowUp" in t
        ) {
          var n = t.addedMemberCount,
            r = t.emailInviteNotSentMembers,
            o = t.emailInviteSentCount,
            a = t.failedMemberCount,
            i = t.invitedMemberCount,
            l = t.runParticipantFollowUp;
          return _({
            addedMemberCount: n,
            emailInviteNotSentCount: r.length,
            emailInviteSentCount: o,
            failedMemberCount: a,
            group: e,
            invitedMemberCount: i,
            runParticipantFollowUp: l,
          });
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t,
        );
      })(n);
    }
    function _(e) {
      var t = e.addedMemberCount,
        n = e.emailInviteNotSentCount,
        r = e.emailInviteSentCount,
        o = e.failedMemberCount,
        a = e.group,
        i = e.invitedMemberCount,
        l = e.runParticipantFollowUp;
      return {
        addedMemberCount: t,
        emailInviteNotSentCount: n,
        emailInviteSentCount: r,
        failedMemberCount: o,
        invitedMemberCount: i,
        name: a.name,
        runParticipantFollowUp: l,
        status: "success",
      };
    }
    function f(e) {
      return {
        addedMemberCount: 0,
        emailInviteNotSentCount: 0,
        emailInviteSentCount: 0,
        failedMemberCount: e.members.length,
        invitedMemberCount: 0,
        name: e.name,
        runParticipantFollowUp: null,
        status: "association_failed",
      };
    }
    function g(e, t) {
      return {
        addedMemberCount: 0,
        emailInviteNotSentCount: 0,
        emailInviteSentCount: 0,
        failedMemberCount: e.members.length,
        invitedMemberCount: 0,
        name: e.name,
        runParticipantFollowUp: null,
        status: t,
      };
    }
    function h(e, t) {
      return e.reduce(function (e, n) {
        return {
          addedMemberCount: e.addedMemberCount + n.addedMemberCount,
          completedGroupCount:
            e.completedGroupCount + (n.status === "not_attempted" ? 0 : 1),
          createdGroupCount:
            e.createdGroupCount + (n.status === "success" ? 1 : 0),
          emailInviteSentCount: e.emailInviteSentCount + n.emailInviteSentCount,
          failedGroupCount:
            e.failedGroupCount + (n.status === "success" ? 0 : 1),
          failedMemberCount: e.failedMemberCount + n.failedMemberCount,
          groupResults: [].concat(e.groupResults, [n]),
          invitedMemberCount: e.invitedMemberCount + n.invitedMemberCount,
          totalGroupCount: t,
        };
      }, u(t));
    }
    ((l.buildEmptyOrgAdminBulkGroupExecutionProgress = u),
      (l.executeOrgAdminBulkGroupPlan = c));
  },
  98,
);
