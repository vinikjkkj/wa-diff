__d(
  "WAWebOrgAdminBulkGroupExecution",
  ["WALogger", "asyncToGeneratorRuntime", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return {
        addedMemberCount: 0,
        completedGroupCount: 0,
        createdGroupCount: 0,
        failedGroupCount: 0,
        failedMemberCount: 0,
        groupResults: [],
        invitedMemberCount: 0,
        totalGroupCount: e,
      };
    }
    function c(e, t, n) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = [];
          return (yield m(e, 0, t, r, n), b(r, e.length));
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t, n, r, o) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, o) {
            var a = e[t];
            if (a != null) {
              var i = yield f(a, n);
              if ((r.push(i), i.status === "association_failed")) {
                (r.push.apply(
                  r,
                  e.slice(t + 1).map(function (e) {
                    return C(e, "not_attempted");
                  }),
                ),
                  _(o, b(r, e.length)));
                return;
              }
              (_(o, b(r, e.length)), yield m(e, t + 1, n, r, o));
            }
          },
        )),
        p.apply(this, arguments)
      );
    }
    function _(t, n) {
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
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n;
          try {
            n = yield t({
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
              C(e, "unexpected_failure")
            );
          }
          return (function (t) {
            if (
              ((typeof t == "object" && t !== null) ||
                typeof t == "function") &&
              t.status === "association_failed"
            )
              return y(e);
            if (
              ((typeof t == "object" && t !== null) ||
                typeof t == "function") &&
              t.status === "create_failed"
            )
              return C(e, "create_failed");
            if (
              ((typeof t == "object" && t !== null) ||
                typeof t == "function") &&
              t.status === "in_progress"
            )
              return C(e, "operation_busy");
            if (
              ((typeof t == "object" && t !== null) ||
                typeof t == "function") &&
              t.status === "success" &&
              "addedMemberCount" in t &&
              "failedMemberCount" in t &&
              "invitedMemberCount" in t &&
              "runParticipantFollowUp" in t
            ) {
              var n = t.addedMemberCount,
                r = t.failedMemberCount,
                o = t.invitedMemberCount,
                a = t.runParticipantFollowUp;
              return h({
                addedMemberCount: n,
                failedMemberCount: r,
                group: e,
                invitedMemberCount: o,
                runParticipantFollowUp: a,
              });
            }
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                t,
            );
          })(n);
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      var t = e.addedMemberCount,
        n = e.failedMemberCount,
        r = e.group,
        o = e.invitedMemberCount,
        a = e.runParticipantFollowUp;
      return {
        addedMemberCount: t,
        failedMemberCount: n,
        invitedMemberCount: o,
        memberTag: r.memberTag,
        name: r.name,
        runParticipantFollowUp: a,
        status: "success",
      };
    }
    function y(e) {
      return {
        addedMemberCount: 0,
        failedMemberCount: e.members.length,
        invitedMemberCount: 0,
        memberTag: e.memberTag,
        name: e.name,
        runParticipantFollowUp: null,
        status: "association_failed",
      };
    }
    function C(e, t) {
      return {
        addedMemberCount: 0,
        failedMemberCount: e.members.length,
        invitedMemberCount: 0,
        memberTag: e.memberTag,
        name: e.name,
        runParticipantFollowUp: null,
        status: t,
      };
    }
    function b(e, t) {
      return e.reduce(function (e, n) {
        return {
          addedMemberCount: e.addedMemberCount + n.addedMemberCount,
          completedGroupCount:
            e.completedGroupCount + (n.status === "not_attempted" ? 0 : 1),
          createdGroupCount:
            e.createdGroupCount + (n.status === "success" ? 1 : 0),
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
