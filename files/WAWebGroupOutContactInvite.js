__d(
  "WAWebGroupOutContactInvite",
  [
    "WALogger",
    "WAWebGroupServerSentInviteEligibility",
    "WAWebJidToWid",
    "WAWebModalManager",
    "WAWebOutContactInviteAction",
    "WAWebOutContactInviteGating",
    "WAWebOutContactServerSentInviteEligibility",
    "WAWebOutContactSmsInviteConfirmModal.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = c || (c = o("react")),
      m = "200",
      p = "403";
    function _(t) {
      var n = t.entryPoint,
        a = t.groupJid,
        i = t.groupName,
        l = t.invitedOutContacts,
        c = t.outContacts,
        p = h(l),
        _ = c.filter(function (e) {
          var t = p(e);
          return t != null && t !== m;
        }),
        y = f(t);
      if (y != null) {
        var C = _.filter(function (e) {
          return !y.includes(e);
        });
        return (
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[out-contact-invite][group-ssi] offering server-sent invites: serverSent=",
                " others=",
                "",
              ])),
            String(y.length),
            String(C.length),
          ),
          o("WAWebModalManager").closeModalManager(),
          o("WAWebOutContactInviteAction").confirmAndSendServerSentGroupInvites(
            y.map(g),
            a,
            i,
            n,
            C.map(g),
          ),
          { offeredInvite: !0, uninvitedCount: 0 }
        );
      }
      return _.length === 0 ||
        !o("WAWebOutContactInviteGating").isOutContactInviteEnabled()
        ? (_.length > 0 &&
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[out-contact-invite][group-ssi] no invite offered: notAdded=",
                  " standalone=",
                  "",
                ])),
              String(_.length),
              String(t.isStandaloneGroup),
            ),
          { offeredInvite: !1, uninvitedCount: _.length })
        : (o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[out-contact-invite][group-ssi] offering native SMS invites: notAdded=",
                "",
              ])),
            String(_.length),
          ),
          o("WAWebModalManager").ModalManager.open(
            d.jsx(r("WAWebOutContactSmsInviteConfirmModal.react"), {
              names: _.map(function (e) {
                return e.getName();
              }),
              onConfirm: function () {
                (o("WAWebOutContactInviteAction").sendMultiGroupInvite(
                  _.map(function (e) {
                    return e.phoneNumber;
                  }),
                  a,
                  n,
                ),
                  o("WAWebModalManager").closeModalManager());
              },
              onCancel: o("WAWebModalManager").closeModalManager,
            }),
          ),
          { offeredInvite: !0, uninvitedCount: 0 });
    }
    function f(e) {
      var t = e.invitedOutContacts,
        n = e.isStandaloneGroup,
        r = e.outContacts;
      if (!n) return null;
      var a = h(t),
        i = r.filter(function (e) {
          return (
            a(e) === p &&
            o(
              "WAWebOutContactServerSentInviteEligibility",
            ).isServerSentInviteReceiverEligible(e.phoneNumber)
          );
        });
      return i.length > 0 &&
        o(
          "WAWebGroupServerSentInviteEligibility",
        ).isGroupServerSentInviteEligible(
          i.map(function (e) {
            return e.phoneNumber;
          }),
        )
        ? i
        : null;
    }
    function g(e) {
      return { name: e.getName(), phoneNumber: e.phoneNumber };
    }
    function h(e) {
      var t = new Map(
        e.map(function (e) {
          var t = e.code,
            n = e.phoneNumberWid;
          return [n.toString(), t];
        }),
      );
      return function (e) {
        return t.get(o("WAWebJidToWid").userJidToUserWid(e.id).toString());
      };
    }
    ((l.inviteGroupOutContacts = _), (l.getServerSentInviteOutContacts = f));
  },
  98,
);
