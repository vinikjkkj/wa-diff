__d(
  "WAWebGroupQueryBridge",
  [
    "WALogger",
    "WATypeUtils",
    "WAWebBackendApi",
    "WAWebBackendErrors",
    "WAWebGroupQueryGroupJob",
    "WAWebGroupQueryJob",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          o("WALogger")
            .LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "querying server for groupMetadata of group id ",
                  "",
                ])),
              t.toLogString(),
            )
            .tags("groups");
          var n = o("WAWebGroupQueryGroupJob").queryGroupJob(
            t,
            "out_of_sync_update",
          );
          try {
            var r = yield n;
            if (r.status === "success") {
              var a,
                i,
                l,
                u,
                c,
                d,
                _,
                f,
                g,
                h,
                y,
                C,
                b,
                v,
                S,
                R = r.groupInfo;
              return (
                m(t, R.subject),
                p(t, (a = R.isLidAddressingMode) != null ? a : !1),
                {
                  id: R.id,
                  owner: R.owner,
                  creation: R.creation,
                  subject: R.subject,
                  desc: R.desc,
                  descId: R.descId,
                  descOwner: R.descOwner,
                  descTime: R.descTime,
                  restrict: (i = R.restrict) != null ? i : !1,
                  announce: (l = R.announce) != null ? l : !1,
                  noFrequentlyForwarded:
                    (u = R.noFrequentlyForwarded) != null ? u : !1,
                  ephemeralDuration: (c = R.ephemeralDuration) != null ? c : 0,
                  membershipApprovalMode: R.membershipApprovalMode,
                  participants: R.participants,
                  support: (d = R.support) != null ? d : !1,
                  suspended: (_ = R.suspended) != null ? _ : !1,
                  terminated: (f = R.terminated) != null ? f : !1,
                  parentGroup: R.parentGroup,
                  isParentGroup: (g = R.isParentGroup) != null ? g : !1,
                  isParentGroupClosed:
                    (h = R.isParentGroupClosed) != null ? h : !1,
                  defaultSubgroup: (y = R.defaultSubgroup) != null ? y : !1,
                  generalSubgroup: (C = R.generalSubgroup) != null ? C : !1,
                  isLidAddressingMode:
                    (b = R.isLidAddressingMode) != null ? b : !1,
                  allowNonAdminSubGroupCreation:
                    R.allowNonAdminSubGroupCreation,
                  generalChatAutoAddDisabled: R.generalChatAutoAddDisabled,
                  hiddenSubgroup: (v = R.hiddenSubgroup) != null ? v : !1,
                  groupSafetyCheck: (S = R.groupSafetyCheck) != null ? S : !1,
                }
              );
            } else if (
              r.status === "terminated_local" ||
              r.status === "terminated" ||
              r.status === "not_member"
            )
              return { id: t, stale: !1 };
            o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "Store:GroupMetadata Unexpected server response",
                ])),
            );
          } catch (e) {
            if (
              e instanceof o("WAWebBackendErrors").ServerStatusCodeError &&
              e.status >= 400
            )
              return { id: t, stale: !1 };
            throw e;
          }
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return o("WAWebGroupQueryJob")
        .queryGroupInvite(e)
        .then(function (e) {
          return { status: 200, groupInfo: e };
        });
    }
    function m(e, t) {
      o("WATypeUtils").isString(t) &&
        o("WAWebBackendApi").frontendFireAndForget("updateGroupSubject", {
          id: e,
          subject: t,
        });
    }
    function p(e, t) {
      o("WAWebBackendApi").frontendFireAndForget("updateGroupAddressingMode", {
        id: e,
        isLidAddressingMode: t,
      });
    }
    ((l.sendQueryGroup = u),
      (l.sendQueryGroupInvite = d),
      (l.updateSubject = m));
  },
  98,
);
