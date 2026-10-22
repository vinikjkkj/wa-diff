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
      c = 50;
    function d(e) {
      var t = o(
        "WAWebOrgAdminGroupCandidate",
      ).getOrgAdminGroupCandidateEmailInviteID(e);
      return t == null ? [] : [t];
    }
    function m(e, t, n) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
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
          return yield y(t, n, a, 0);
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t, n) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = new Set(yield m(e, t, n.flatMap(d)));
          return (
            o(
              "WAWebOrgManagedGroupsRepository",
            ).recordOrgManagedGroupEmailInvites(e, t, n, r),
            n.filter(function (e) {
              return d(e).some(function (e) {
                return r.has(e);
              });
            })
          );
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        h.apply(this, arguments)
      );
    }
    function y(e, t, n, r) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(
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
            return i.concat(yield y(e, t, n, r + c));
          },
        )),
        C.apply(this, arguments)
      );
    }
    ((l.getEmailInviteRosterEntryIDs = d),
      (l.sendEmailInvites = m),
      (l.resendEmailInvites = _),
      (l.copyOrgManagedGroupInviteLink = g));
  },
  98,
);
