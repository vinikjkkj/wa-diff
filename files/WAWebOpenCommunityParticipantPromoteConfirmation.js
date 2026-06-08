__d(
  "WAWebOpenCommunityParticipantPromoteConfirmation",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebCommunityPromoteDemotePopups.react",
    "WAWebModalManager",
    "WAWebModifyParticipantsGroupAction",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = d || (d = o("react"));
    function p(t) {
      var n,
        r,
        a,
        i = t.announcementGroupParticipants,
        l = t.parentChat,
        c = t.participant;
      if (
        ((n = l.groupMetadata) == null || (n = n.participants.get(c.id)) == null
          ? void 0
          : n.isAdmin) === !0
      ) {
        o("WAWebModalManager").ModalManager.close();
        return;
      }
      var d = o("WAWebABProps").getABPropConfigValue(
          "parent_group_admins_limit",
        ),
        _ =
          (r =
            (a = l.groupMetadata) == null
              ? void 0
              : a.participants.getAdmins().length) != null
            ? r
            : 0;
      if (_ + 1 > d) {
        (o("WAWebModalManager").ModalManager.close(),
          o("WAWebModalManager").ModalManager.open(
            m.jsx(
              o("WAWebCommunityPromoteDemotePopups.react")
                .CommunityAdminLimitPopup,
              { parentGroupAdminsLimit: d },
            ),
          ));
        return;
      } else if (!(i != null && i.get(c.id))) {
        (o("WAWebModalManager").ModalManager.close(),
          o("WAWebModalManager").ModalManager.open(
            m.jsx(
              o("WAWebCommunityPromoteDemotePopups.react")
                .CommunityAdminPromoteInvalidParticipantErrorPopup,
              {},
            ),
          ));
        return;
      }
      (c.contact.pendingAction++,
        o("WAWebModifyParticipantsGroupAction")
          .promoteCommunityParticipants(l, [c])
          .then(function (t) {
            if (t != null && t.participants) {
              var n = t.participants[0];
              (t.participants.length !== 1 &&
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[community-promote] Unexpected participants length: ",
                        "",
                      ])),
                    t.participants.length,
                  )
                  .sendLogs("promote-unexpected-participants-length"),
                n.code === "419"
                  ? o("WAWebModalManager").ModalManager.open(
                      m.jsx(
                        o("WAWebCommunityPromoteDemotePopups.react")
                          .CommunityAdminLimitPopup,
                        { parentGroupAdminsLimit: d },
                      ),
                    )
                  : n.code === "403" &&
                    (o("WALogger").WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[community-promote] promote failed: not CAG member",
                        ])),
                    ),
                    o("WAWebModalManager").ModalManager.open(
                      m.jsx(
                        o("WAWebCommunityPromoteDemotePopups.react")
                          .CommunityAdminPromoteInvalidParticipantErrorPopup,
                        {},
                      ),
                    )));
            }
          })
          .catch(function (e) {
            (o("WALogger").WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[community-promote] promote iq failed: ",
                  "",
                ])),
              e,
            ),
              o("WAWebModalManager").ModalManager.open(
                m.jsx(
                  o("WAWebCommunityPromoteDemotePopups.react")
                    .CommunityAdminPromoteErrorPopup,
                  {
                    onParticipantPromote: function () {
                      return p({
                        announcementGroupParticipants: i,
                        parentChat: l,
                        participant: c,
                      });
                    },
                  },
                ),
              ));
          })
          .finally(function () {
            c.contact.pendingAction--;
          }),
        o("WAWebModalManager").ModalManager.close());
    }
    function _(e, t, n, r) {
      if (!e) {
        (o("WAWebModalManager").ModalManager.close(),
          o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[community-promote] parent chat does not exist",
                ])),
            )
            .sendLogs("community-promote-parent-chat-undefined"));
        return;
      }
      o("WAWebModalManager").ModalManager.open(
        m.jsx(
          o("WAWebCommunityPromoteDemotePopups.react")
            .CommunityAdminPromotePopup,
          {
            onParticipantPromote: function () {
              return p({
                announcementGroupParticipants: n,
                parentChat: e,
                participant: t,
              });
            },
            contact: r,
          },
        ),
      );
    }
    l.openCommunityParticipantPromoteConfirmation = _;
  },
  98,
);
