__d(
  "WAWebChatSendMessages",
  [
    "fbt",
    "WAFilteredCatch",
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebActionToast.react",
    "WAWebAddonDeleteAddons",
    "WAWebAllMediaCollection",
    "WAWebAssociatedMessagesRevokeUtils",
    "WAWebAssociationProcessor",
    "WAWebAssociationProcessorConstants",
    "WAWebBackendErrors",
    "WAWebChatSendDeleteMsgsBridge",
    "WAWebChatSendStarMsgsBridge",
    "WAWebCmd",
    "WAWebDBStoreRevokeMsgs",
    "WAWebDBUpdateChatTable",
    "WAWebFavoriteStickerAction",
    "WAWebGetEphemeralFieldsMsgActionsUtils",
    "WAWebGroupMetadataCollection",
    "WAWebKeepInChatMsgUtils",
    "WAWebMessageAssociationGatingUtils",
    "WAWebMiscGatingUtils",
    "WAWebMsgActionCapability",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebRevokeMsgAction",
    "WAWebSchemaMessage",
    "WAWebSendMsgChatAction",
    "WAWebStarredMsgCollection",
    "WAWebStateUtils",
    "WAWebToastManager",
    "WAWebUserPrefsMeUser",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m = d || (d = o("react"));
    function p(t) {
      var n = o("WAWebStateUtils").unproxy(t);
      if (n.promises.sendDismissChangeNumber)
        return n.promises.sendDismissChangeNumber;
      var r = Promise.resolve({ status: 200 });
      n.promises.sendDismissChangeNumber = r;
      var a = new (o("WAWebActionToast.react").ActionType)(
          s._(/*BTDS*/ "Dismissing change number notification."),
        ),
        i = r
          .then(function (e) {
            if (e.status === 200)
              return new (o("WAWebActionToast.react").ActionType)(
                s._(/*BTDS*/ "Change number notification dismissed."),
              );
            if (e.status >= 400)
              return new (o("WAWebActionToast.react").ActionType)(
                s._(/*BTDS*/ "Couldn't dismiss change number notification."),
              );
          })
          .catch(function (t) {
            return (
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "models:chat:sendDismissChangeNumber dropped",
                  ])),
              ),
              new (o("WAWebActionToast.react").ActionType)(
                s._(/*BTDS*/ "Couldn't dismiss change number notification."),
                {
                  actionText: s._(/*BTDS*/ "Try again."),
                  actionHandler: function () {
                    return p(n);
                  },
                },
              )
            );
          });
      return (
        o("WAWebToastManager").ToastManager.open(
          m.jsx(o("WAWebActionToast.react").ActionToast, {
            initialAction: a,
            pendingAction: i,
          }),
        ),
        r
          .then(function (e) {
            if (e.status === 200)
              return o("WAWebDBUpdateChatTable")
                .updateChatTable(n.id, {
                  changeNumberNewJid: void 0,
                  changeNumberOldJid: void 0,
                })
                .then(function () {
                  n.changeNumberOldJid = n.changeNumberNewJid = void 0;
                });
          })
          .finally(function () {
            n.promises.sendDismissChangeNumber = null;
          })
      );
    }
    function _(e, t, n) {
      var r = o("WAWebStateUtils").unproxy(e);
      return r.promises.sendStarMsgs
        ? r.promises.sendStarMsgs
        : (r.promises.sendStarMsgs = o("WAWebChatSendStarMsgsBridge")
            .sendStarMsgs(r.id, t, n)
            .then(function () {
              if (
                (t.forEach(function (e) {
                  var t = e.associationType;
                  if (
                    t != null &&
                    o(
                      "WAWebMessageAssociationGatingUtils",
                    ).isMessageAssociationInfraEnabled()
                  ) {
                    var r = o(
                      "WAWebAssociationProcessor",
                    ).getAssociationProcessorByAssociationType(t);
                    r &&
                      r.processorType ===
                        o("WAWebAssociationProcessorConstants")
                          .AssociationProcessorType.WithDetachedMessages &&
                      e.detachAssociatedMsg();
                  }
                  e.set("star", n);
                }),
                n)
              ) {
                if (
                  (o("WAWebStarredMsgCollection").addStarredMsgs(t),
                  o("WAWebMiscGatingUtils").isFavoriteStickersEnabled())
                ) {
                  var e = t.filter(function (e) {
                    return e.type === o("WAWebMsgType").MSG_TYPE.STICKER;
                  });
                  o("WAWebFavoriteStickerAction").addStickerMsgsToFavorites(e);
                }
              } else o("WAWebStarredMsgCollection").removeStarredMsgs(t);
            })
            .finally(function () {
              r.promises.sendStarMsgs = null;
            }));
    }
    function f(e, t, n) {
      var r = o("WAWebStateUtils").unproxy(e);
      if (r.promises.sendRevokeMsgs) return r.promises.sendRevokeMsgs;
      var a,
        i = [];
      return (
        t.type === "addon"
          ? (a = t.list.map(async function (e) {
              var t =
                o("WAWebMsgActionCapability").canSenderRevokeMsg(e) ||
                o("WAWebMsgActionCapability").canBotResponseBeRevokeByInvoker(e)
                  ? o("WAWebCmd").Revoke.Sender
                  : o("WAWebCmd").Revoke.Admin;
              return o("WAWebRevokeMsgAction").sendRevoke(
                { type: "addon", data: e },
                t,
                n,
              );
            }))
          : (a = t.list.map(async function (e) {
              var t =
                o("WAWebMsgActionCapability").canSenderRevokeMsg(e) ||
                o("WAWebMsgActionCapability").canBotResponseBeRevokeByInvoker(e)
                  ? o("WAWebCmd").Revoke.Sender
                  : o("WAWebCmd").Revoke.Admin;
              try {
                await g(e, t);
              } catch (e) {
                o("WALogger").ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[sendRevokeMsgs] bot plugin revoke failed",
                    ])),
                );
              }
              return (
                (i = await o(
                  "WAWebAssociatedMessagesRevokeUtils",
                ).getAssociatedChildMessageRevokePromises(e, function (e) {
                  return o("WAWebRevokeMsgAction").sendAssociatedChildMsgRevoke(
                    e,
                    t,
                    n,
                  );
                })),
                o("WAWebRevokeMsgAction").sendRevoke(
                  { type: "message", data: e },
                  t,
                  n,
                )
              );
            })),
        (r.promises.sendRevokeMsgs = Promise.all([].concat(a, i)).finally(
          function () {
            r.promises.sendRevokeMsgs = null;
          },
        ))
      );
    }
    async function g(e, t) {
      var n,
        a =
          o("WAWebMsgGetters").getBotPluginSearchUrl(e) != null ||
          o("WAWebMsgGetters").getBotPluginMaybeParent(e);
      if (a) {
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "[bot revoke] handling sendAssociatedBotPluginRevoke",
            ])),
        );
        var i = await o("WAWebSchemaMessage")
          .getMessageTable()
          .get(e.id.toString());
        if (
          !(i == null || i.internalId == null || i.botResponseTargetId == null)
        ) {
          var l = await o("WAWebDBStoreRevokeMsgs").findAssociatedPluginMsgs({
            internalId: i.internalId,
            targetId: i.botResponseTargetId,
          });
          l == null ||
            (n = l.pluginLinkMsgIds) == null ||
            n.forEach(async function (e) {
              var n = o("WAWebMsgCollection").MsgCollection.get(
                r("WAWebMsgKey").fromString(e),
              );
              if (n != null) {
                var a;
                n =
                  (a = await o(
                    "WAWebMsgCollection",
                  ).MsgCollection.getMessagesById([e])) == null ||
                  (a = a.messages) == null
                    ? void 0
                    : a[0];
              }
              n != null &&
                o("WAWebRevokeMsgAction").sendAssociatedBotPluginRevoke(n, t);
            });
        }
      }
    }
    async function h(e) {
      var t,
        n = e.chat_,
        r = e.clearMedia,
        a = e.record,
        i = o("WAWebStateUtils").unproxy(n);
      if (i.promises.sendDeleteMsgs) return i.promises.sendDeleteMsgs;
      if (a.type === "addon") {
        var l = a.list;
        i.promises.sendDeleteMsgs = o("WAWebAddonDeleteAddons")
          .sendDeleteAddonsForMe(l, r)
          .then(async function () {
            return l.length;
          })
          .finally(function () {
            i.promises.sendDeleteMsgs = null;
          });
      }
      if (a.type === "message") {
        var s = a.list,
          u = [];
        (o(
          "WAWebMessageAssociationGatingUtils",
        ).isMessageAssociationInfraEnabled() &&
          (u = await o(
            "WAWebAssociatedMessagesRevokeUtils",
          ).getHydratedAssociatedChildMessageModelsFromParentMsgs(s)),
          (i.promises.sendDeleteMsgs = o("WAWebChatSendDeleteMsgsBridge")
            .sendDeleteMsgs([].concat(s, u), r, i.id)
            .then(function () {
              return (
                s.forEach(function (e) {
                  (e.delete(),
                    o("WAWebAllMediaCollection").AllMediaCollection.remove(e));
                }),
                s.length
              );
            })
            .catch(
              o("WAFilteredCatch").filteredCatch(
                o("WAWebBackendErrors").ServerStatusCodeError,
                function () {
                  var e = 0;
                  return (
                    s.forEach(function (t) {
                      (t.ack === o("WAWebAck").ACK.FAILED ||
                        o("WAWebKeepInChatMsgUtils").isExpired(t)) &&
                        (t.delete(), e++);
                    }),
                    u.forEach(function (e) {
                      (e.ack === o("WAWebAck").ACK.FAILED ||
                        o("WAWebKeepInChatMsgUtils").isExpired(e)) &&
                        e.delete();
                    }),
                    e
                  );
                },
              ),
            )
            .finally(function () {
              i.promises.sendDeleteMsgs = null;
            })));
      }
      return (t = i.promises.sendDeleteMsgs) != null ? t : Promise.resolve(0);
    }
    async function y(e, t, n, a, i, l, s) {
      var u,
        c = o("WAWebStateUtils").unproxy(e),
        d =
          ((u = r("WAWebGroupMetadataCollection").get(t)) == null
            ? void 0
            : u.isLidAddressingMode) === !0,
        m = d
          ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow()
          : o("WAWebUserPrefsMeUser").getMeUser(),
        p = c.id,
        _ = new (r("WAWebMsgKey"))({
          id: await r("WAWebMsgKey").newId(),
          from: m,
          to: p,
          participant: void 0,
          selfDir: "out",
        }),
        f = babelHelpers.extends(
          {
            id: _,
            from: m,
            to: p,
            ack: o("WAWebAck").ACK.CLOCK,
            local: !0,
            t: o("WATimeUtils").unixTime(),
            type: "groups_v4_invite",
            isNewMsg: !0,
            inviteGrpJpegThum: s,
            inviteCode: a,
            inviteCodeExp: i,
            inviteGrp: t,
            inviteGrpName: n,
            comment: l,
          },
          o("WAWebGetEphemeralFieldsMsgActionsUtils").getEphemeralFields(c),
        );
      return o("WAWebSendMsgChatAction").addAndSendMsgToChat(c, f)[1];
    }
    ((l.sendDismissChangeNumber = p),
      (l.sendStarMsgs = _),
      (l.sendRevokeMsgs = f),
      (l.sendDeleteMsgs = h),
      (l.sendGroupInviteMessage = y));
  },
  226,
);
