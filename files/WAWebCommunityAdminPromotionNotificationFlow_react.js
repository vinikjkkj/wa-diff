__d(
  "WAWebCommunityAdminPromotionNotificationFlow.react",
  [
    "$InternalEnum",
    "WALogger",
    "WAWebChatCollection",
    "WAWebChatCommunityUtils",
    "WAWebCommunityAdminPromotionNotificationPopup.react",
    "WAWebCommunityAdminSelfDemotePopup.react",
    "WAWebCommunityLogEvents",
    "WAWebCommunityPromoteDemotePopups.react",
    "WAWebModalManager",
    "WAWebModifyParticipantsGroupAction",
    "WAWebNux",
    "WAWebWamEnumCadminDemoteOriginType",
    "WAWebWamEnumCadminDemoteResultType",
    "react",
    "useWAWebFlow",
    "useWAWebNux",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = n("$InternalEnum").Mirrored(["PromotionNotification", "Demote"]);
    function d(t) {
      var n = t.communityMetadata,
        a = o("WAWebNux").getCommunityAdminPromotionNuxKey(n.id.toString()),
        i = r("useWAWebNux")(a),
        l = i[2],
        s = o("useWAWebFlow").useFlow(c.PromotionNotification),
        d = s[0],
        m = s[1];
      if (m.step == null) return null;
      var p;
      switch (m.step) {
        case c.PromotionNotification: {
          var _ = function () {
              m.push(c.Demote);
            },
            f = function () {
              (l(), m.end());
            };
          p = u.jsx(r("WAWebCommunityAdminPromotionNotificationPopup.react"), {
            onDemote: _,
            onContinue: f,
          });
          break;
        }
        case c.Demote: {
          var g = o("WAWebChatCommunityUtils").isCommunitySuperAdmin(
              o("WAWebChatCollection").ChatCollection.get(n.id),
            ),
            h = function (t) {
              o("WAWebCommunityLogEvents").logCadminDemoteEvent(
                o("WAWebWamEnumCadminDemoteOriginType")
                  .CADMIN_DEMOTE_ORIGIN_TYPE.PROMOTION_NOTIFICATION,
                t,
                n.participants.getAdmins().length === 1 || g,
              );
            },
            y = function (t) {
              (t === void 0 && (t = !1),
                h(
                  t
                    ? o("WAWebWamEnumCadminDemoteResultType")
                        .CADMIN_DEMOTE_RESULT_TYPE.RETRY_CANCEL
                    : o("WAWebWamEnumCadminDemoteResultType")
                        .CADMIN_DEMOTE_RESULT_TYPE.CANCEL,
                ),
                o("WAWebModalManager").ModalManager.close());
            },
            C = function (r) {
              (r === void 0 && (r = !1), l());
              var t = n.participants.getMeParticipant(),
                a = o("WAWebChatCollection").ChatCollection.get(n.id);
              (t &&
                a &&
                (t.contact.pendingAction++,
                o("WAWebModifyParticipantsGroupAction")
                  .demoteCommunityParticipants(a, [t])
                  .then(function () {
                    h(
                      r
                        ? o("WAWebWamEnumCadminDemoteResultType")
                            .CADMIN_DEMOTE_RESULT_TYPE.RETRY_SUCCESS
                        : o("WAWebWamEnumCadminDemoteResultType")
                            .CADMIN_DEMOTE_RESULT_TYPE.SUCCESS,
                    );
                  })
                  .catch(function (t) {
                    (o("WALogger")
                      .WARN(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "Error sending demote community participants iq",
                          ])),
                      )
                      .verbose()
                      .sendLogs("community-admin-self-demote-failed"),
                      h(
                        r
                          ? o("WAWebWamEnumCadminDemoteResultType")
                              .CADMIN_DEMOTE_RESULT_TYPE.RETRY_FAILURE
                          : o("WAWebWamEnumCadminDemoteResultType")
                              .CADMIN_DEMOTE_RESULT_TYPE.FAILURE,
                      ),
                      o("WAWebModalManager").ModalManager.open(
                        u.jsx(
                          o("WAWebCommunityPromoteDemotePopups.react")
                            .CommunityAdminDemoteErrorPopup,
                          {
                            onParticipantDemote: function () {
                              return C(!0);
                            },
                            onCancel: function () {
                              return y(!0);
                            },
                            isMe: !0,
                          },
                        ),
                      ));
                  })
                  .finally(function () {
                    t.contact.pendingAction--;
                  })),
                r ? o("WAWebModalManager").ModalManager.close() : m.end());
            },
            b = function () {
              (h(
                o("WAWebWamEnumCadminDemoteResultType")
                  .CADMIN_DEMOTE_RESULT_TYPE.FAILURE,
              ),
                m.pop());
            };
          p = u.jsx(r("WAWebCommunityAdminSelfDemotePopup.react"), {
            onDemote: C,
            onCancel: y,
            onFailure: b,
            isCommunitySuperAdmin: g,
            parentGroupChat: o("WAWebChatCollection").ChatCollection.get(n.id),
          });
          break;
        }
      }
      return u.jsx(d, { flow: m, children: p });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
