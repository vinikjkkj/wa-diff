__d(
  "WAWebGroupsV4InviteModal.react",
  [
    "fbt",
    "$InternalEnum",
    "WAFilteredCatch",
    "WALogger",
    "WAWebBackendErrors",
    "WAWebChatCollection",
    "WAWebCmd",
    "WAWebComposeBoxActions",
    "WAWebConfirmPopup.react",
    "WAWebContactCollection",
    "WAWebEmojiText.react",
    "WAWebEmptyState.react",
    "WAWebFindChatAction",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebGroupJoinModalBase.react",
    "WAWebGroupJoinModalUtils",
    "WAWebGroupMetadataCollection",
    "WAWebGroupMetadataModel",
    "WAWebGroupType",
    "WAWebInviteProfilePicAction",
    "WAWebInviteV4QueryGroupAction",
    "WAWebMiscErrors",
    "WAWebModalManager",
    "WAWebMsgGetters",
    "WAWebNoop",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWidFactory",
    "react",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["phashMatch", "status"],
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useEffect,
      _ = m.useState,
      f = n("$InternalEnum").Mirrored(["Loading", "Success", "Error"]);
    function g(t) {
      var n,
        a,
        i = t.msg,
        l = t.source,
        c = _(f.Loading),
        m = c[0],
        g = c[1],
        h = _(void 0),
        y = h[0],
        C = h[1],
        b = _(void 0),
        v = b[0],
        S = b[1],
        R = _(void 0),
        L = R[0],
        E = R[1],
        k = _(void 0),
        I = k[0],
        T = k[1],
        D = o("useWAWebMsgValues").useMsgValues(i.id, [
          (a = o("WAWebMsgGetters")).getId,
          a.getTo,
          a.getInviteCode,
          a.getInviteCodeExp,
          a.getInviteGrp,
          a.getIsGroupsV4InviteExpired,
          a.getFrom,
          a.getIsSentByMe,
        ]),
        x = D[0],
        $ = D[1],
        P = D[2],
        N = D[3],
        M = D[4],
        w = D[5],
        A = D[6],
        F = D[7],
        O = o("WAWebFrontendMsgGetters").getChat(i.unsafe());
      p(function () {
        if (o("WAWebGroupJoinModalUtils").shouldSendInviteRequest()) {
          if (
            (o("WAWebInviteProfilePicAction")
              .queryGroupInviteMessageProfilePicURL(
                o("WAWebWidFactory").createWid(M),
                P,
                N.toString(),
                A,
              )
              .then(function (e) {
                T(e);
              })
              .catch(
                o("WAFilteredCatch").filteredCatch(
                  o("WAWebBackendErrors").ServerStatusCodeError,
                  function (e) {
                    e.status !== 404 &&
                      o("WALogger").WARN(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "group_invite_modal: fetch group profile pic with error ",
                            "",
                          ])),
                        e.status,
                      );
                  },
                ),
              ),
            F)
          ) {
            var t = o("WAWebChatCollection").ChatCollection.assertGet(
              o("WAWebWidFactory").createWid(M),
            );
            t.groupMetadata &&
              r("WAWebGroupMetadataCollection")
                .find(t.id)
                .finally(function () {
                  (S(t.groupMetadata),
                    E(t.formattedTitle || t.name),
                    g(f.Success));
                });
            return;
          }
          o("WAWebInviteV4QueryGroupAction")
            .queryGroupInviteV4Info(P, N.toString(), M, A)
            .then(function (t) {
              var n = t.phashMatch,
                a = t.status,
                i = babelHelpers.objectWithoutPropertiesLoose(t, e);
              if (a != null && a >= 400)
                (g(f.Error),
                  C(
                    o("WAWebGroupJoinModalUtils").getGroupInviteAcceptErrorStr(
                      new (o("WAWebBackendErrors").ServerStatusCodeError)(a),
                    ),
                  ));
              else if (t.id || n === !0) {
                var l =
                  n === !0
                    ? r("WAWebGroupMetadataCollection").assertGet(M)
                    : new (r("WAWebGroupMetadataModel"))(
                        babelHelpers.extends({}, i),
                      );
                (S(l), E(t.subject), g(f.Success));
              } else
                (g(f.Error),
                  C(
                    o("WAWebGroupJoinModalUtils").getGroupInviteAcceptErrorStr(
                      null,
                    ),
                  ));
            })
            .catch(
              o("WAFilteredCatch").filteredCatch(
                o("WAWebMiscErrors").Unmount,
                r("WAWebNoop"),
              ),
            );
        }
      }, []);
      var B = function (t) {
          var e = t;
          (t ? (e = t) : v && (e = v.id),
            e &&
              o("WAWebCmd").Cmd.openChatFromUnread({
                chat: o("WAWebChatCollection").ChatCollection.assertGet(e),
              }),
            o("WAWebModalManager").ModalManager.close());
        },
        W = function () {
          var e = o("WAWebChatCollection").ChatCollection.assertGet(
              o("WAWebWidFactory").createWid(M),
            ).groupMetadata,
            t = function () {
              (o("WAWebModalManager").ModalManager.close(),
                e == null ||
                  e.revokeGroupsV4AddInvite([$]).then(function (e) {
                    o("WAWebToastManager").ToastManager.open(
                      d.jsx(o("WAWebToast.react").Toast, {
                        msg:
                          e != null && e >= 400
                            ? o(
                                "WAWebGroupJoinModalUtils",
                              ).getGroupInviteRevokeErrorStr(e)
                            : s._(/*BTDS*/ "Invite reset"),
                      }),
                    );
                  }));
            };
          o("WAWebModalManager").ModalManager.open(
            d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: {
                surface: "unknown",
                viewName: "group-invite-reset",
              },
              onOK: t,
              okText: s._(/*BTDS*/ "Reset link"),
              onCancel: function () {
                return o("WAWebModalManager").ModalManager.close();
              },
              cancelText: s._(/*BTDS*/ "Cancel"),
              children: d.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: s._(
                  /*BTDS*/ "Reset invite for {participant}? If you reset the invite, {participant} won't be able to use it to join this group.",
                  [
                    s._param(
                      "participant",
                      o("WAWebFrontendContactGetters").getFormattedName(
                        O.contact,
                      ),
                    ),
                  ],
                ),
              }),
            }),
          );
        },
        q = function () {
          (g(f.Loading),
            o("WAWebInviteV4QueryGroupAction")
              .joinGroupViaInviteV4(P, N.toString(), M, A)
              .then(function (e) {
                if (e.status === 200)
                  return o("WAWebFindChatAction").findOrCreateLatestChat(
                    o("WAWebWidFactory").createWid(M),
                    "newGroupsV4InviteModal",
                    { isGroupJoin: !0 },
                  );
                throw e.status;
              })
              .then(function (e) {
                var t = e.chat;
                (o("WAWebCmd")
                  .Cmd.openChatFromUnread({ chat: t })
                  .then(function (e) {
                    e &&
                      (g(f.Success),
                      o("WAWebComposeBoxActions").ComposeBoxActions.focus(t));
                  }),
                  o("WAWebModalManager").ModalManager.close());
              })
              .catch(
                o("WAFilteredCatch").filteredCatch(
                  o("WAWebMiscErrors").Unmount,
                  r("WAWebNoop"),
                ),
              )
              .catch(function (e) {
                (g(f.Error),
                  C(
                    o("WAWebGroupJoinModalUtils").getGroupInviteAcceptErrorStr(
                      new (o("WAWebBackendErrors").ServerStatusCodeError)(e),
                      v == null ? void 0 : v.groupType,
                    ),
                  ));
              }));
        },
        U = function () {
          o("WAWebModalManager").ModalManager.close();
        },
        V = s._(/*BTDS*/ "Cancel");
      if (!v) {
        var H;
        return (
          m === f.Loading
            ? (H = d.jsx(o("WAWebEmptyState.react").Loading, {}))
            : (H = y),
          d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
            tsNavigationData: {
              surface: "unknown",
              viewName: "group-invite-error",
            },
            onCancel: U,
            children: H,
          })
        );
      }
      var G = v.groupType,
        z = v.id,
        j = o("WAWebGroupJoinModalUtils").getGroupInviteSubtitle({
          groupMetadata: v,
        }),
        K = I || "",
        Q = G === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP,
        X = { src: K, groupId: z },
        Y;
      Q ||
        (Y = v.participants.filter(function (e) {
          var t = o("WAWebContactCollection").ContactCollection.get(e.id);
          return (
            t != null && o("WAWebFrontendContactGetters").getIsMyContact(t)
          );
        }));
      var J = v.hasJoined(),
        Z;
      F ? (Z = W) : J ? (Z = B) : w || (Z = q);
      var ee = w
          ? ""
          : o("WAWebGroupJoinModalUtils").getGroupInviteActionText({
              inGroup: J,
              groupType: G,
              isSentByMe: F,
            }),
        te = v.displayedDesc;
      return d.jsx(r("WAWebGroupJoinModalBase.react"), {
        image: X,
        title: L,
        subtitle: j,
        contacts: Y,
        description: te,
        actionText: ee,
        onAction: Z,
        onCancel: U,
        cancelText: V,
        finePrint: {
          text:
            y != null
              ? y
              : o("WAWebGroupJoinModalUtils").getFinePrint({ groupType: G }),
          isError: y != null,
        },
        participantsCount: (n = v.size) != null ? n : v.participants.length,
        inviteCodeExpiration: w ? void 0 : N,
        groupType: v.groupType,
        loading: m === f.Loading,
        isSentByMe: F,
        source: l,
      });
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  226,
);
