__d(
  "WAWebOpenCommunityParticipantDemoteConfirmation",
  [
    "WALogger",
    "WAWebChatCommunityUtils",
    "WAWebCommunityAdminSelfDemotePopup.react",
    "WAWebCommunityLogEvents",
    "WAWebCommunityPromoteDemotePopups.react",
    "WAWebModalManager",
    "WAWebModifyParticipantsGroupAction",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumCadminDemoteOriginType",
    "WAWebWamEnumCadminDemoteResultType",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = u || (u = o("react"));
    function d(t, n) {
      var a;
      if (!n) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[community-demote] parent chat does not exist",
              ])),
          )
          .sendLogs("community-demote-parent-chat-undefined");
        return;
      }
      var i = (a = n.groupMetadata) == null ? void 0 : a.participants,
        l = o("WAWebChatCommunityUtils").isCommunitySuperAdmin(n),
        u = function (t) {
          o("WAWebCommunityLogEvents").logCadminDemoteEvent(
            o("WAWebWamEnumCadminDemoteOriginType").CADMIN_DEMOTE_ORIGIN_TYPE
              .MEMBER_LIST,
            t,
            (i == null ? void 0 : i.getAdmins().length) === 1 || l,
          );
        },
        d = function (t) {
          (t === void 0 && (t = !1),
            u(
              t
                ? o("WAWebWamEnumCadminDemoteResultType")
                    .CADMIN_DEMOTE_RESULT_TYPE.RETRY_CANCEL
                : o("WAWebWamEnumCadminDemoteResultType")
                    .CADMIN_DEMOTE_RESULT_TYPE.CANCEL,
            ),
            o("WAWebModalManager").ModalManager.close());
        },
        m = function (r) {
          var e;
          if (
            (r === void 0 && (r = !1),
            (i == null || (e = i.get(t.id)) == null ? void 0 : e.isAdmin) ===
              !1)
          ) {
            o("WAWebModalManager").ModalManager.close();
            return;
          }
          (t.contact.pendingAction++,
            o("WAWebModifyParticipantsGroupAction")
              .demoteCommunityParticipants(n, [t])
              .then(function () {
                t.id.equals(o("WAWebUserPrefsMeUser").getMaybeMePnUser()) &&
                  u(
                    r
                      ? o("WAWebWamEnumCadminDemoteResultType")
                          .CADMIN_DEMOTE_RESULT_TYPE.RETRY_SUCCESS
                      : o("WAWebWamEnumCadminDemoteResultType")
                          .CADMIN_DEMOTE_RESULT_TYPE.SUCCESS,
                  );
              })
              .catch(function (e) {
                (o("WALogger")
                  .WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "Error sending demote community participants iq",
                      ])),
                  )
                  .verbose()
                  .sendLogs("community-admin-self-demote-failed"),
                  t.id.equals(o("WAWebUserPrefsMeUser").getMaybeMePnUser()) &&
                    u(
                      r
                        ? o("WAWebWamEnumCadminDemoteResultType")
                            .CADMIN_DEMOTE_RESULT_TYPE.RETRY_FAILURE
                        : o("WAWebWamEnumCadminDemoteResultType")
                            .CADMIN_DEMOTE_RESULT_TYPE.FAILURE,
                    ),
                  o("WAWebModalManager").ModalManager.open(
                    c.jsx(
                      o("WAWebCommunityPromoteDemotePopups.react")
                        .CommunityAdminDemoteErrorPopup,
                      {
                        onParticipantDemote: function () {
                          return m(!0);
                        },
                        onCancel: function () {
                          return d(!0);
                        },
                        isMe: t.id.equals(
                          o("WAWebUserPrefsMeUser").getMaybeMePnUser(),
                        ),
                      },
                    ),
                  ));
              })
              .finally(function () {
                t.contact.pendingAction--;
              }),
            o("WAWebModalManager").ModalManager.close());
        },
        p = function () {
          (u(
            o("WAWebWamEnumCadminDemoteResultType").CADMIN_DEMOTE_RESULT_TYPE
              .FAILURE,
          ),
            o("WAWebModalManager").ModalManager.close());
        };
      o("WAWebUserPrefsMeUser").isMeAccount(t.id)
        ? o("WAWebModalManager").ModalManager.open(
            c.jsx(r("WAWebCommunityAdminSelfDemotePopup.react"), {
              onDemote: m,
              onCancel: d,
              onFailure: p,
              isCommunitySuperAdmin: l,
              parentGroupChat: n,
            }),
          )
        : o("WAWebModalManager").ModalManager.open(
            c.jsx(
              o("WAWebCommunityPromoteDemotePopups.react")
                .CommunityAdminDemotePopup,
              { onParticipantDemote: m },
            ),
          );
    }
    l.openCommunityParticipantDemoteConfirmation = d;
  },
  98,
);
