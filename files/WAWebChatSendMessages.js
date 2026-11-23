__d(
  "WAWebChatSendMessages",
  [
    "fbt",
    "WAFilteredCatch",
    "WALogger",
    "WAWebAck",
    "WAWebActionToast.react",
    "WAWebAddonDeleteAddons",
    "WAWebAddonService",
    "WAWebAllMediaCollection",
    "WAWebAssociatedMessagesRevokeUtils",
    "WAWebAssociationProcessor",
    "WAWebAssociationProcessorConstants",
    "WAWebBackendErrors",
    "WAWebBackendRuntime",
    "WAWebChatSendDeleteMsgsBridge",
    "WAWebChatSendStarMsgsBridge",
    "WAWebChatStoreService",
    "WAWebCmd",
    "WAWebDBStoreRevokeMsgs",
    "WAWebDBUpdateChatTable",
    "WAWebFavoriteStickerAction",
    "WAWebKeepInChatMsgUtils",
    "WAWebMessageDeleteService",
    "WAWebMessageStarService",
    "WAWebMiscGatingUtils",
    "WAWebMsgActionCapability",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebRevokeMsgAction",
    "WAWebSchemaMessage",
    "WAWebStarredMsgCollection",
    "WAWebStateUtils",
    "WAWebToastManager",
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
      var a = new (o("WAWebActionToast.react").ActionType)(s._(/*BTDS*/ "")),
        i = r
          .then(function (e) {
            if (e.status === 200)
              return new (o("WAWebActionToast.react").ActionType)(
                s._(/*BTDS*/ ""),
              );
            if (e.status >= 400)
              return new (o("WAWebActionToast.react").ActionType)(
                s._(/*BTDS*/ ""),
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
              new (o("WAWebActionToast.react").ActionType)(s._(/*BTDS*/ ""), {
                actionText: s._(/*BTDS*/ ""),
                actionHandler: function () {
                  return p(n);
                },
              })
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
              return (
                o("WAWebBackendRuntime").isWebDiBackendEnabled()
                  ? o("WAWebBackendRuntime").runtime(
                      o("WAWebChatStoreService").ChatStoreService,
                    ).updateChatTable
                  : o("WAWebDBUpdateChatTable").updateChatTable
              )(n.id, {
                changeNumberNewJid: void 0,
                changeNumberOldJid: void 0,
              }).then(function () {
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
        : (r.promises.sendStarMsgs = (
            o("WAWebBackendRuntime").isWebDiBackendEnabled()
              ? o("WAWebBackendRuntime").runtime(
                  o("WAWebMessageStarService").MessageStarService,
                ).sendStarMsgs
              : o("WAWebChatSendStarMsgsBridge").sendStarMsgs
          )(r.id, t, n)
            .then(function () {
              if (
                (t.forEach(function (e) {
                  var t = e.associationType;
                  if (t != null) {
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
              var t = g(e);
              return o("WAWebRevokeMsgAction").sendRevoke(
                { type: "addon", data: e },
                t,
                n,
              );
            }))
          : (a = t.list.map(async function (e) {
              var t = g(e);
              try {
                await h(e, t);
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
                    { clearMedia: n, msg: e, type: t },
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
    function g(e) {
      return o("WAWebMsgActionCapability").canSenderRevokeMsg(e) ||
        o("WAWebMsgActionCapability").canBotResponseBeRevokeByInvoker(e)
        ? o("WAWebCmd").Revoke.Sender
        : o("WAWebCmd").Revoke.Admin;
    }
    async function h(e, t) {
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
    async function y(e) {
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
          u = await (
            o("WAWebBackendRuntime").isWebDiBackendEnabled()
              ? o("WAWebBackendRuntime").runtime(
                  o("WAWebAddonService").AddonService,
                ).getHydratedAssociatedChildMessageModelsFromParentMsgs
              : o("WAWebAssociatedMessagesRevokeUtils")
                  .getHydratedAssociatedChildMessageModelsFromParentMsgs
          )(s);
        i.promises.sendDeleteMsgs = (
          o("WAWebBackendRuntime").isWebDiBackendEnabled()
            ? o("WAWebBackendRuntime").runtime(
                o("WAWebMessageDeleteService").MessageDeleteService,
              ).sendDeleteMsgs
            : o("WAWebChatSendDeleteMsgsBridge").sendDeleteMsgs
        )([].concat(s, u), r, i.id)
          .then(function () {
            return (
              [].concat(s, u).forEach(function (e) {
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
          });
      }
      return (t = i.promises.sendDeleteMsgs) != null ? t : Promise.resolve(0);
    }
    ((l.sendDismissChangeNumber = p),
      (l.sendStarMsgs = _),
      (l.sendRevokeMsgs = f),
      (l.sendDeleteMsgs = y));
  },
  226,
);
