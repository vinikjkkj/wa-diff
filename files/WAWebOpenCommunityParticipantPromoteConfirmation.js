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
    function p(t, n, r) {
      var a, i, l;
      if (
        ((a = t.groupMetadata) == null || (a = a.participants.get(n.id)) == null
          ? void 0
          : a.isAdmin) === !0
      ) {
        o("WAWebModalManager").ModalManager.close();
        return;
      }
      var c = o("WAWebABProps").getABPropConfigValue(
          "parent_group_admins_limit",
        ),
        d =
          (i =
            (l = t.groupMetadata) == null
              ? void 0
              : l.participants.getAdmins().length) != null
            ? i
            : 0;
      if (d + 1 > c) {
        (o("WAWebModalManager").ModalManager.close(),
          o("WAWebModalManager").ModalManager.open(
            m.jsx(
              o("WAWebCommunityPromoteDemotePopups.react")
                .CommunityAdminLimitPopup,
              { parentGroupAdminsLimit: c },
            ),
          ));
        return;
      } else if (!(r != null && r.get(n.id))) {
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
      (n.contact.pendingAction++,
        o("WAWebModifyParticipantsGroupAction")
          .promoteCommunityParticipants(t, [n])
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
                        { parentGroupAdminsLimit: c },
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
                      return p(t, n, r);
                    },
                  },
                ),
              ));
          })
          .finally(function () {
            n.contact.pendingAction--;
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
              return p(e, t, n);
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
