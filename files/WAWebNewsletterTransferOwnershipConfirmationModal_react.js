__d(
  "WAWebNewsletterTransferOwnershipConfirmationModal.react",
  [
    "fbt",
    "WAWebChangeNewsletterOwnerAction",
    "WAWebContactCollection",
    "WAWebDemoteNewsletterAdminAction",
    "WAWebModalManager",
    "WAWebName.react",
    "WAWebUserConfirmationModal.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = function () {
        return s._(
          /*BTDS*/ "To confirm the transfer, enter your country code and phone number.",
        );
      },
      d = function () {
        return s._(/*BTDS*/ "To confirm the transfer, enter your email.");
      },
      m = function () {
        return s._(/*BTDS*/ "Transfer");
      };
    function p(e) {
      var t = e.chat,
        n = e.contact,
        a = e.onTransferCompletion,
        i = e.shouldDismissSelfAsAdmin,
        l = [
          {
            action: function () {
              return o(
                "WAWebChangeNewsletterOwnerAction",
              ).changeNewsletterOwnerAction(t, n);
            },
            onSuccess: function () {
              a();
            },
            errorMessage: s._(
              /*BTDS*/ "Couldn't transfer ownership. Please try again.",
            ),
          },
        ];
      if (i) {
        var p = o("WAWebContactCollection").ContactCollection.getMeContact();
        p != null &&
          l.push({
            action: function () {
              return o(
                "WAWebDemoteNewsletterAdminAction",
              ).demoteNewsletterAdminAction(t, p);
            },
            errorMessage: s._(
              /*BTDS*/ "Ownership transferred but couldn't dismiss yourself as admin.",
            ),
          });
      }
      var _ = i
        ? s._(
            /*BTDS*/ 'Ownership transferred to "{new-channel-owner}". You are no longer an admin.',
            [
              s._param(
                "new-channel-owner",
                u.jsx(o("WAWebName.react").ContactName, { contact: n }),
              ),
            ],
          )
        : s._(/*BTDS*/ 'Ownership transferred to "{new-channel-owner}"', [
            s._param(
              "new-channel-owner",
              u.jsx(o("WAWebName.react").ContactName, { contact: n }),
            ),
          ]);
      return u.jsx(r("WAWebUserConfirmationModal.react"), {
        actions: l,
        actionType: "primary",
        actionText: m(),
        emailContentText: d(),
        phoneContentText: c(),
        successText: _,
        onCompletion: o("WAWebModalManager").closeModalManager,
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
