__d(
  "WAWebDeleteChatAction",
  [
    "fbt",
    "JSResourceForInteraction",
    "WALogger",
    "WAWebActionToast.react",
    "WAWebBizChatAssignmentAction",
    "WAWebBizCoexUtils",
    "WAWebChatDeleteBridge",
    "WAWebChatFlowTypes",
    "WAWebContactCollection",
    "WAWebFrontendChatGetters",
    "WAWebLabelCollection",
    "WAWebMaybeClearChatAiThreads",
    "WAWebMetaAiThreadChatServerDelete",
    "WAWebNoop",
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
      return (
        t === void 0 && (t = !0),
        y(o("WAWebStateUtils").unproxy(e), t).then(r("WAWebNoop"))
      );
    }
    function p(e, t) {
      return (t === void 0 && (t = !0), y(o("WAWebStateUtils").unproxy(e), t));
    }
    var _ = Object.freeze({
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
    function f(e) {
      var t = "";
      if (e != null)
        switch (e) {
          case o("WAWebChatFlowTypes").ChatKindType.Community:
            t = _.Community();
            break;
          case o("WAWebChatFlowTypes").ChatKindType.Group:
            t = _.Group();
            break;
          case o("WAWebChatFlowTypes").ChatKindType.Broadcast:
            t = _.Broadcast();
            break;
          case o("WAWebChatFlowTypes").ChatKindType.Chat:
            t = _.Chat();
            break;
          case o("WAWebChatFlowTypes").ChatKindType.Newsletter:
            break;
        }
      else t = _.Chat();
      return new (o("WAWebActionToast.react").ActionType)(t);
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield r("JSResourceForInteraction")(
              "WAWebBizRemoveDirectConnectionKeysBridge",
            )
              .__setRef("WAWebDeleteChatAction")
              .load(),
            n = t.removeDirectConnectionKeys;
          yield n(e);
        })),
        h.apply(this, arguments)
      );
    }
    function y(t, r) {
      if (
        (o(
          "WAWebBizCoexUtils",
        ).deleteChatFromFallbackHostedAdvSystemMsgOnPlaceholderCache(t.id),
        t.promises.sendDelete)
      )
        return t.promises.sendDelete.then(function (e) {
          return e.status === 200;
        });
      var a = t.getLastMsgKeyForAction(),
        i = a ? t.msgs.get(a) : void 0,
        l = o("WAWebMetaAiThreadChatServerDelete").getMetaAiThreadServerDelete(
          t.id,
        ),
        u = (t.promises.sendDelete = o(
          "WAWebChatDeleteBridge",
        ).sendConversationDelete({
          id: t.id,
          tcToken: t.tcToken,
          tcTokenTimestamp: t.tcTokenTimestamp,
        })),
        m = o("WAWebFrontendChatGetters").getKind(t),
        p = u
          .then(
            (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  if (e.status === 200) {
                    if (
                      (o(
                        "WAWebLabelCollection",
                      ).LabelCollection.removeAllLabelsMD(t),
                      m === o("WAWebChatFlowTypes").ChatKindType.Chat &&
                        (yield g(t.id)),
                      m != null)
                    )
                      switch (
                        (d.includes(m) &&
                          (yield o(
                            "WAWebBizChatAssignmentAction",
                          ).removeChatAssignmentsForChat(t.id)),
                        o(
                          "WAWebMaybeClearChatAiThreads",
                        ).maybeClearAiThreadsForChat(t),
                        m)
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
                  } else if (e.status >= 400 && m != null)
                    switch (m) {
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
            if (m != null)
              switch (m) {
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
                return y(t, r);
              },
            });
          });
      return (
        r &&
          o("WAWebToastManager").ToastManager.open(
            c.jsx(o("WAWebActionToast.react").ActionToast, {
              initialAction: f(m),
              pendingAction: p,
            }),
          ),
        u
          .then(
            (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  if (e.status !== 200) return !1;
                  var n = t.getLastMsgKeyForAction(),
                    r = (a && a.equals(n)) || a === n;
                  return (
                    r ? t.delete() : C(t, i),
                    o("WAWebFrontendChatGetters").getKind(t) ===
                      o("WAWebChatFlowTypes").ChatKindType.Community &&
                      o("WAWebContactCollection").ContactCollection.remove(
                        t.id.toString(),
                      ),
                    r &&
                      l != null &&
                      (yield o(
                        "WAWebMetaAiThreadChatServerDelete",
                      ).completeMetaAiThreadServerDelete(t.id, l)),
                    !0
                  );
                },
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
          )
          .finally(function () {
            t.promises.sendDelete = null;
          })
      );
    }
    function C(e, t) {
      var n;
      if (!t) n = e.msgs.length;
      else if (e.msgs.get(t.id)) n = e.msgs.indexOf(t);
      else return;
      var r = function (r, o, a) {
        return r.getMsgChunk() === e.msgs && o > n;
      };
      e.deleteMsgsPartial(r, !0);
    }
    ((l.sendDelete = m),
      (l.sendDeleteWithStatus = p),
      (l.deleteActionFbtMap = _),
      (l.getDeleteChatAction = f));
  },
  226,
);
