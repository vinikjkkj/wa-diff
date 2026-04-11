__d(
  "WAWebDeleteChatAction",
  [
    "fbt",
    "JSResourceForInteraction",
    "WALogger",
    "WAWebActionToast.react",
    "WAWebBizChatAssignmentAction",
    "WAWebBizCoexGatingUtils",
    "WAWebBizCoexUtils",
    "WAWebChatDeleteBridge",
    "WAWebChatFlowTypes",
    "WAWebContactCollection",
    "WAWebFrontendChatGetters",
    "WAWebLabelCollection",
    "WAWebMaybeClearChatAiThreads",
    "WAWebStateUtils",
    "WAWebToastManager",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = [
        o("WAWebChatFlowTypes").ChatKindType.Chat,
        o("WAWebChatFlowTypes").ChatKindType.Group,
        o("WAWebChatFlowTypes").ChatKindType.Community,
      ];
    function m(e, t) {
      return (t === void 0 && (t = !0), h(o("WAWebStateUtils").unproxy(e), t));
    }
    var p = Object.freeze({
      Community: function () {
        return s._(/*BTDS*/ "Deleting community");
      },
      Group: function () {
        return s._(/*BTDS*/ "Deleting group");
      },
      Broadcast: function () {
        return s._(/*BTDS*/ "Deleting broadcast list");
      },
      Chat: function () {
        return s._(/*BTDS*/ "Deleting chat");
      },
    });
    function _(e) {
      var t = "";
      if (e != null)
        switch (e) {
          case o("WAWebChatFlowTypes").ChatKindType.Community:
            t = p.Community();
            break;
          case o("WAWebChatFlowTypes").ChatKindType.Group:
            t = p.Group();
            break;
          case o("WAWebChatFlowTypes").ChatKindType.Broadcast:
            t = p.Broadcast();
            break;
          case o("WAWebChatFlowTypes").ChatKindType.Chat:
            t = p.Chat();
            break;
          case o("WAWebChatFlowTypes").ChatKindType.Newsletter:
            break;
        }
      else t = p.Chat();
      return new (o("WAWebActionToast.react").ActionType)(t);
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield r("JSResourceForInteraction")(
              "WAWebBizRemoveDirectConnectionKeysBridge",
            )
              .__setRef("WAWebDeleteChatAction")
              .load(),
            n = t.removeDirectConnectionKeys;
          yield n(e);
        })),
        g.apply(this, arguments)
      );
    }
    function h(t, r) {
      if (
        (o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
          o(
            "WAWebBizCoexUtils",
          ).deleteChatFromFallbackHostedAdvSystemMsgOnPlaceholderCache(t.id),
        t.promises.sendDelete)
      )
        return t.promises.sendDelete;
      var a = t.getLastMsgKeyForAction(),
        i = a ? t.msgs.get(a) : void 0,
        l = (t.promises.sendDelete = o(
          "WAWebChatDeleteBridge",
        ).sendConversationDelete(t.id, t.tcToken, t.tcTokenTimestamp)),
        u = o("WAWebFrontendChatGetters").getKind(t),
        m = l
          .then(
            (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  if (e.status === 200) {
                    if (
                      (o(
                        "WAWebLabelCollection",
                      ).LabelCollection.removeAllLabelsMD(t),
                      u === o("WAWebChatFlowTypes").ChatKindType.Chat &&
                        (yield f(t.id)),
                      u != null)
                    )
                      switch (
                        (d.includes(u) &&
                          (yield o(
                            "WAWebBizChatAssignmentAction",
                          ).removeChatAssignmentsForChat(t.id)),
                        o(
                          "WAWebMaybeClearChatAiThreads",
                        ).maybeClearAiThreadsForChat(t),
                        u)
                      ) {
                        case o("WAWebChatFlowTypes").ChatKindType.Community:
                          return new (o("WAWebActionToast.react").ActionType)(
                            s._(/*BTDS*/ "Community deleted"),
                          );
                        case o("WAWebChatFlowTypes").ChatKindType.Group:
                          return new (o("WAWebActionToast.react").ActionType)(
                            s._(/*BTDS*/ "Group deleted"),
                          );
                        case o("WAWebChatFlowTypes").ChatKindType.Broadcast:
                          return new (o("WAWebActionToast.react").ActionType)(
                            s._(/*BTDS*/ "Broadcast audience deleted"),
                          );
                        case o("WAWebChatFlowTypes").ChatKindType.Chat:
                          return new (o("WAWebActionToast.react").ActionType)(
                            s._(/*BTDS*/ "Chat deleted"),
                          );
                        case o("WAWebChatFlowTypes").ChatKindType.Newsletter:
                          return;
                      }
                  } else if (e.status >= 400 && u != null)
                    switch (u) {
                      case o("WAWebChatFlowTypes").ChatKindType.Community:
                        return new (o("WAWebActionToast.react").ActionType)(
                          s._(/*BTDS*/ "Couldn't delete community."),
                        );
                      case o("WAWebChatFlowTypes").ChatKindType.Group:
                        return new (o("WAWebActionToast.react").ActionType)(
                          s._(/*BTDS*/ "Couldn't delete group."),
                        );
                      case o("WAWebChatFlowTypes").ChatKindType.Broadcast:
                        return new (o("WAWebActionToast.react").ActionType)(
                          s._(/*BTDS*/ "Couldn't delete broadcast list."),
                        );
                      case o("WAWebChatFlowTypes").ChatKindType.Chat:
                        return new (o("WAWebActionToast.react").ActionType)(
                          s._(/*BTDS*/ "Couldn't delete chat."),
                        );
                      case o("WAWebChatFlowTypes").ChatKindType.Newsletter:
                        return;
                    }
                },
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
          )
          .catch(function (n) {
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "models:chat:sendDelete dropped",
                ])),
            );
            var a = "";
            if (u != null)
              switch (u) {
                case o("WAWebChatFlowTypes").ChatKindType.Community:
                  a = s._(/*BTDS*/ "Couldn't delete community.");
                  break;
                case o("WAWebChatFlowTypes").ChatKindType.Group:
                  a = s._(/*BTDS*/ "Couldn't delete group.");
                  break;
                case o("WAWebChatFlowTypes").ChatKindType.Broadcast:
                  a = s._(/*BTDS*/ "Couldn't delete broadcast list.");
                  break;
                case o("WAWebChatFlowTypes").ChatKindType.Chat:
                  a = s._(/*BTDS*/ "Couldn't delete chat.");
                  break;
                case o("WAWebChatFlowTypes").ChatKindType.Newsletter:
                  break;
              }
            else a = s._(/*BTDS*/ "Couldn't delete chat.");
            return new (o("WAWebActionToast.react").ActionType)(a, {
              actionText: s._(/*BTDS*/ "Try again."),
              actionHandler: function () {
                return h(t, r);
              },
            });
          });
      return (
        r &&
          o("WAWebToastManager").ToastManager.open(
            c.jsx(o("WAWebActionToast.react").ActionToast, {
              initialAction: _(u),
              pendingAction: m,
            }),
          ),
        l
          .then(function (e) {
            if (e.status === 200) {
              var n = t.getLastMsgKeyForAction();
              ((a && a.equals(n)) || a === n
                ? t.delete()
                : t.deleteMsgsBeforeMsgInclusive(i),
                o("WAWebFrontendChatGetters").getKind(t) ===
                  o("WAWebChatFlowTypes").ChatKindType.Community &&
                  o("WAWebContactCollection").ContactCollection.remove(
                    t.id.toString(),
                  ));
            }
          })
          .finally(function () {
            t.promises.sendDelete = null;
          })
      );
    }
    ((l.sendDelete = m),
      (l.deleteActionFbtMap = p),
      (l.getDeleteChatAction = _));
  },
  226,
);
