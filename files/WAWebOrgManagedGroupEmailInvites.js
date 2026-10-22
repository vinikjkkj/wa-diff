__d(
  "WAWebOrgManagedGroupEmailInvites",
  [
    "WALogger",
    "WAWebCopyToClipboard",
    "WAWebMexFetchGroupInviteCodeJob",
    "WAWebOrgAdminGraphQL",
    "WAWebOrgAdminGroupCandidate",
    "WAWebOrgAdminGroupParticipantsAction",
    "WAWebOrgManagedGroupsRepository",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 50,
      d = 1;
    function m(e) {
      return e.filter(function (e) {
        return (
          !o(
            "WAWebOrgAdminGroupParticipantsAction",
          ).canAddOrgGroupCandidateDirectly(e) &&
          o(
            "WAWebOrgAdminGroupCandidate",
          ).getOrgAdminGroupCandidateEmailInviteID(e) != null
        );
      });
    }
    function p(e) {
      return (
        d +
        e.filter(
          o("WAWebOrgAdminGroupParticipantsAction")
            .canAddOrgGroupCandidateDirectly,
        ).length
      );
    }
    function _(e) {
      var t = o(
        "WAWebOrgAdminGroupCandidate",
      ).getOrgAdminGroupCandidateEmailInviteID(e);
      return t == null ? [] : [t];
    }
    function f(e, t, n) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          if (a.length === 0) return [];
          try {
            yield o("WAWebMexFetchGroupInviteCodeJob").fetchMexGroupInviteCode(
              o("WAWebWidFactory").asGroupWidOrThrow(
                o("WAWebWidFactory").createWid(
                  o("WAWebOrgAdminGroupParticipantsAction").getOrgAdminGroupJid(
                    n,
                  ),
                ),
              ),
            );
          } catch (t) {
            return (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[org-admin] group invite link for email invites failed",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("org-admin-create-group-invite-link-failed"),
              a
            );
          }
          return yield v(t, n, a, 0);
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t, n) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = new Set(yield f(e, t, n.flatMap(_)));
          return (
            o(
              "WAWebOrgManagedGroupsRepository",
            ).recordOrgManagedGroupEmailInvites(e, t, n, r),
            n.filter(function (e) {
              return _(e).some(function (e) {
                return r.has(e);
              });
            })
          );
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = yield o(
              "WAWebMexFetchGroupInviteCodeJob",
            ).fetchMexGroupInviteCode(
              o("WAWebWidFactory").asGroupWidOrThrow(
                o("WAWebWidFactory").createWid(
                  o("WAWebOrgAdminGroupParticipantsAction").getOrgAdminGroupJid(
                    e,
                  ),
                ),
              ),
            );
            return yield o("WAWebCopyToClipboard").copyTextToClipboard(
              "https://chat.whatsapp.com/" + t,
            );
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[org-admin] group invite link copy failed",
                    ])),
                )
                .sendLogs("org-admin-group-invite-link-copy-failed"),
              !1
            );
          }
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t, n, r) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            if (r >= n.length) return [];
            var a = n.slice(r, r + c),
              i = a;
            try {
              i = yield o(
                "WAWebOrgAdminGraphQL",
              ).sendOrgManagedGroupEmailInvites(e, t, a);
            } catch (e) {
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[org-admin] group email invites failed",
                    ])),
                )
                .sendLogs("org-admin-create-group-email-invites-failed");
            }
            return i.concat(yield v(e, t, n, r + c));
          },
        )),
        S.apply(this, arguments)
      );
    }
    ((l.getOrgAdminGroupEmailInvitees = m),
      (l.getOrgAdminGroupMemberCountAtEmailInvite = p),
      (l.getEmailInviteRosterEntryIDs = _),
      (l.sendEmailInvites = f),
      (l.resendEmailInvites = h),
      (l.copyOrgManagedGroupInviteLink = C));
  },
  98,
);
