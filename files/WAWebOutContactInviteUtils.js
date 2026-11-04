__d(
  "WAWebOutContactInviteUtils",
  [
    "fbt",
    "WALogger",
    "WAWebGroupServerSentInviteEligibility",
    "WAWebMexGroupStoreInviteSmsJob",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = "https://www.whatsapp.com/dl";
    function c() {
      return String(
        s._(
          /*BTDS*/ "Chat with me on WhatsApp! It lets us message privately on iPhone, Android, and more. This invite expires soon. {download_url}",
          [s._param("download_url", u)],
        ),
      );
    }
    function d(e) {
      return e != null && e !== "" ? u + "/code=" + e : u;
    }
    function m(e) {
      var t = d(e);
      return String(
        s._(
          /*BTDS*/ "Chat with me on WhatsApp! It lets us message privately on iPhone, Android, and more. This invite expires soon. {invite_url}",
          [s._param("invite_url", t)],
        ),
      );
    }
    function p() {
      return String(
        s._(
          /*BTDS*/ "You're invited to join a group chat on WhatsApp! It's the world's most popular messaging app. This invite expires in 3 days. {download_url}",
          [s._param("download_url", u)],
        ),
      );
    }
    function _(e) {
      return s._(
        /*BTDS*/ '_j{"*":"Couldn\'t add users to the group.","_1":"Couldn\'t add user to the group."}',
        [s._plural(e)],
      );
    }
    function f() {
      return s._(
        /*BTDS*/ "You can invite up to {max_invitees} people who aren't on WhatsApp at a time",
        [
          s._param(
            "max_invitees",
            o("WAWebGroupServerSentInviteEligibility").GROUP_SSI_MAX_INVITEES,
          ),
        ],
      );
    }
    function g(e, t, n) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r) {
          try {
            var a = n.map(function (e) {
              return {
                user_jid: o("WAWebWidToJid")
                  .widToUserJid(o("WAWebWidFactory").createUserWidOrThrow(e))
                  .toString(),
              };
            });
            return yield o(
              "WAWebMexGroupStoreInviteSmsJob",
            ).mexGroupStoreInviteSms(t, a, r.toString());
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
        })),
        h.apply(this, arguments)
      );
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
