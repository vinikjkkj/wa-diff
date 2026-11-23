__d(
  "WAWebOutContactInviteUtils",
  [
    "fbt",
    "WALogger",
    "WAWebGroupServerSentInviteEligibility",
    "WAWebMexGroupStoreInviteSmsJob",
    "WAWebWidFactory",
    "WAWebWidToJid",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = "https://www.whatsapp.com/dl";
    function c() {
      return String(s._(/*BTDS*/ "", [s._param("download_url", u)]));
    }
    function d(e) {
      return e != null && e !== "" ? u + "/code=" + e : u;
    }
    function m(e) {
      var t = d(e);
      return String(s._(/*BTDS*/ "", [s._param("invite_url", t)]));
    }
    function p() {
      return String(s._(/*BTDS*/ "", [s._param("download_url", u)]));
    }
    function _(e) {
      return s._(/*BTDS*/ "", [s._plural(e)]);
    }
    function f() {
      return s._(/*BTDS*/ "", [
        s._param(
          "max_invitees",
          o("WAWebGroupServerSentInviteEligibility").GROUP_SSI_MAX_INVITEES,
        ),
      ]);
    }
    async function g(t, n, r) {
      try {
        var a = n.map(function (e) {
          return {
            user_jid: o("WAWebWidToJid")
              .widToUserJid(o("WAWebWidFactory").createUserWidOrThrow(e))
              .toString(),
          };
        });
        return await o("WAWebMexGroupStoreInviteSmsJob").mexGroupStoreInviteSms(
          t,
          a,
          r.toString(),
        );
      } catch (t) {
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[out-contact-invite] bulk invite sms store err: ",
                  "",
                ])),
              t,
            )
            .tags("GQL", "MEX")
            .sendLogs("out-contact-invite-store-group-sms-failed"),
          []
        );
      }
    }
    ((l.getInviteMessageText = c),
      (l.getInviteUrl = d),
      (l.getInviteMessageTextWithCode = m),
      (l.getMultiGroupInviteMessageText = p),
      (l.getGroupInviteAddFailedToastText = _),
      (l.getGroupInviteLimitToastText = f),
      (l.storeMultiGroupInviteSms = g));
  },
  226,
);
