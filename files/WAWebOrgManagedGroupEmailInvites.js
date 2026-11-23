__d(
  "WAWebOrgManagedGroupEmailInvites",
  [
    "WALogger",
    "WAWebBackendRuntime",
    "WAWebCopyToClipboard",
    "WAWebGroupInviteService",
    "WAWebMexFetchGroupInviteCodeJob",
    "WAWebOrgAdminGraphQL",
    "WAWebOrgAdminGroupCandidate",
    "WAWebOrgAdminGroupParticipantsAction",
    "WAWebOrgManagedGroupsRepository",
    "WAWebWidFactory",
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
    async function f(t, n, a) {
      if (a.length === 0) return [];
      try {
        await (
          o("WAWebBackendRuntime").isWebDiBackendEnabled()
            ? o("WAWebBackendRuntime").runtime(
                o("WAWebGroupInviteService").GroupInviteService,
              ).fetchMexGroupInviteCode
            : o("WAWebMexFetchGroupInviteCodeJob").fetchMexGroupInviteCode
        )(
          o("WAWebWidFactory").asGroupWidOrThrow(
            o("WAWebWidFactory").createWid(
              o("WAWebOrgAdminGroupParticipantsAction").getOrgAdminGroupJid(n),
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
      return await y(t, n, a, 0);
    }
    async function g(e, t, n) {
      var r = new Set(await f(e, t, n.flatMap(_)));
      return (
        o("WAWebOrgManagedGroupsRepository").recordOrgManagedGroupEmailInvites(
          e,
          t,
          n,
          r,
        ),
        n.filter(function (e) {
          return _(e).some(function (e) {
            return r.has(e);
          });
        })
      );
    }
    async function h(e) {
      try {
        var t = await (
          o("WAWebBackendRuntime").isWebDiBackendEnabled()
            ? o("WAWebBackendRuntime").runtime(
                o("WAWebGroupInviteService").GroupInviteService,
              ).fetchMexGroupInviteCode
            : o("WAWebMexFetchGroupInviteCodeJob").fetchMexGroupInviteCode
        )(
          o("WAWebWidFactory").asGroupWidOrThrow(
            o("WAWebWidFactory").createWid(
              o("WAWebOrgAdminGroupParticipantsAction").getOrgAdminGroupJid(e),
            ),
          ),
        );
        return await o("WAWebCopyToClipboard").copyTextToClipboard(
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
    }
    async function y(e, t, n, r) {
      if (r >= n.length) return [];
      var a = n.slice(r, r + c),
        i = a;
      try {
        i = await o("WAWebOrgAdminGraphQL").sendOrgManagedGroupEmailInvites(
          e,
          t,
          a,
        );
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
      return i.concat(await y(e, t, n, r + c));
    }
    ((l.getOrgAdminGroupEmailInvitees = m),
      (l.getOrgAdminGroupMemberCountAtEmailInvite = p),
      (l.getEmailInviteRosterEntryIDs = _),
      (l.sendEmailInvites = f),
      (l.resendEmailInvites = g),
      (l.copyOrgManagedGroupInviteLink = h));
  },
  98,
);
