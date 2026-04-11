__d(
  "WAWebChatSendMessages",
  [
    "fbt",
    "Promise",
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
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m,
      p = m || (m = o("react"));
    function _(t) {
      var r = o("WAWebStateUtils").unproxy(t);
      if (r.promises.sendDismissChangeNumber)
        return r.promises.sendDismissChangeNumber;
      var a = (d || (d = n("Promise"))).resolve({ status: 200 });
      r.promises.sendDismissChangeNumber = a;
      var i = new (o("WAWebActionToast.react").ActionType)(
          s._(/*BTDS*/ "Dismissing change number notification."),
        ),
        l = a
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
                    return _(r);
                  },
                },
              )
            );
          });
      return (
        o("WAWebToastManager").ToastManager.open(
          p.jsx(o("WAWebActionToast.react").ActionToast, {
            initialAction: i,
            pendingAction: l,
          }),
        ),
        a
          .then(function (e) {
            if (e.status === 200)
              return o("WAWebDBUpdateChatTable")
                .updateChatTable(r.id, {
                  changeNumberNewJid: void 0,
                  changeNumberOldJid: void 0,
                })
                .then(function () {
                  r.changeNumberOldJid = r.changeNumberNewJid = void 0;
                });
          })
          .finally(function () {
            r.promises.sendDismissChangeNumber = null;
          })
      );
    }
    function f(e, t, n) {
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
    function g(e, t, r) {
      var a = o("WAWebStateUtils").unproxy(e);
      if (a.promises.sendRevokeMsgs) return a.promises.sendRevokeMsgs;
      var i,
        l = [];
      return (
        t.type === "addon"
          ? (i = t.list.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var t =
                      o("WAWebMsgActionCapability").canSenderRevokeMsg(e) ||
                      o(
                        "WAWebMsgActionCapability",
                      ).canBotResponseBeRevokeByInvoker(e)
                        ? o("WAWebCmd").Revoke.Sender
                        : o("WAWebCmd").Revoke.Admin;
                    return o("WAWebRevokeMsgAction").sendRevoke(
                      { type: "addon", data: e },
                      t,
                      r,
                    );
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            ))
          : (i = t.list.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var t =
                      o("WAWebMsgActionCapability").canSenderRevokeMsg(e) ||
                      o(
                        "WAWebMsgActionCapability",
                      ).canBotResponseBeRevokeByInvoker(e)
                        ? o("WAWebCmd").Revoke.Sender
                        : o("WAWebCmd").Revoke.Admin;
                    try {
                      yield h(e, t);
                    } catch (e) {
                      o("WALogger").ERROR(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "[sendRevokeMsgs] bot plugin revoke failed",
                          ])),
                      );
                    }
                    return (
                      (l = yield o(
                        "WAWebAssociatedMessagesRevokeUtils",
                      ).getAssociatedChildMessageRevokePromises(
                        e,
                        function (e) {
                          return o(
                            "WAWebRevokeMsgAction",
                          ).sendAssociatedChildMsgRevoke(e, t, r);
                        },
                      )),
                      o("WAWebRevokeMsgAction").sendRevoke(
                        { type: "message", data: e },
                        t,
                        r,
                      )
                    );
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            )),
        (a.promises.sendRevokeMsgs = (d || (d = n("Promise")))
          .all([].concat(i, l))
          .finally(function () {
            a.promises.sendRevokeMsgs = null;
          }))
      );
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var a,
            i =
              o("WAWebMsgGetters").getBotPluginSearchUrl(e) != null ||
              o("WAWebMsgGetters").getBotPluginMaybeParent(e);
          if (i) {
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[bot revoke] handling sendAssociatedBotPluginRevoke",
                ])),
            );
            var l = yield o("WAWebSchemaMessage")
              .getMessageTable()
              .get(e.id.toString());
            if (
              !(
                l == null ||
                l.internalId == null ||
                l.botResponseTargetId == null
              )
            ) {
              var s = yield o(
                "WAWebDBStoreRevokeMsgs",
              ).findAssociatedPluginMsgs({
                internalId: l.internalId,
                targetId: l.botResponseTargetId,
              });
              s == null ||
                (a = s.pluginLinkMsgIds) == null ||
                a.forEach(
                  (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        var n = o("WAWebMsgCollection").MsgCollection.get(
                          r("WAWebMsgKey").fromString(e),
                        );
                        if (n != null) {
                          var a;
                          n =
                            (a = yield o(
                              "WAWebMsgCollection",
                            ).MsgCollection.getMessagesById([e])) == null ||
                            (a = a.messages) == null
                              ? void 0
                              : a[0];
                        }
                        n != null &&
                          o(
                            "WAWebRevokeMsgAction",
                          ).sendAssociatedBotPluginRevoke(n, t);
                      },
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                );
            }
          }
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t, n) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          var a,
            i = o("WAWebStateUtils").unproxy(e);
          if (i.promises.sendDeleteMsgs) return i.promises.sendDeleteMsgs;
          if (t.type === "addon") {
            var l = t.list;
            i.promises.sendDeleteMsgs = o("WAWebAddonDeleteAddons")
              .sendDeleteAddonsForMe(l, r)
              .then(
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  return l.length;
                }),
              )
              .finally(function () {
                i.promises.sendDeleteMsgs = null;
              });
          }
          if (t.type === "message") {
            var s = t.list,
              u = [];
            (o(
              "WAWebMessageAssociationGatingUtils",
            ).isMessageAssociationInfraEnabled() &&
              (u = yield o(
                "WAWebAssociatedMessagesRevokeUtils",
              ).getHydratedAssociatedChildMessageModelsFromParentMsgs(s)),
              (i.promises.sendDeleteMsgs = o("WAWebChatSendDeleteMsgsBridge")
                .sendDeleteMsgs([].concat(s, u), r, i.id)
                .then(function () {
                  return (
                    s.forEach(function (e) {
                      (e.delete(),
                        o("WAWebAllMediaCollection").AllMediaCollection.remove(
                          e,
                        ));
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
          return (a = i.promises.sendDeleteMsgs) != null
            ? a
            : (d || (d = n("Promise"))).resolve(0);
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t, n, r, o, a, i) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i, l, s) {
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
                id: yield r("WAWebMsgKey").newId(),
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
                o("WAWebGetEphemeralFieldsMsgActionsUtils").getEphemeralFields(
                  c,
                ),
              );
            return o("WAWebSendMsgChatAction").addAndSendMsgToChat(c, f)[1];
          },
        )),
        S.apply(this, arguments)
      );
    }
    ((l.sendDismissChangeNumber = _),
      (l.sendStarMsgs = f),
      (l.sendRevokeMsgs = g),
      (l.sendDeleteMsgs = C),
      (l.sendGroupInviteMessage = v));
  },
  226,
);
