__d(
  "WAWebDeleteChatAction",
  [
    "fbt",
    "JSResourceForInteraction",
    "WALogger",
    "WAWebActionToast.react",
    "WAWebBackendRuntime",
    "WAWebBizChatAssignmentAction",
    "WAWebBizCoexUtils",
    "WAWebChatDeleteBridge",
    "WAWebChatDeleteService",
    "WAWebChatFlowTypes",
    "WAWebContactCollection",
    "WAWebFrontendChatGetters",
    "WAWebLabelCollection",
    "WAWebMaybeClearChatAiThreads",
    "WAWebMetaAiThreadChatServerDelete",
    "WAWebNoop",
    "WAWebStateUtils",
    "WAWebToastManager",
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
        h(o("WAWebStateUtils").unproxy(e), t).then(r("WAWebNoop"))
      );
    }
    function p(e, t) {
      return (t === void 0 && (t = !0), h(o("WAWebStateUtils").unproxy(e), t));
    }
    var _ = Object.freeze({
      Community: function () {
        return s._(/*BTDS*/ "");
      },
      Group: function () {
        return s._(/*BTDS*/ "");
      },
      Broadcast: function () {
        return s._(/*BTDS*/ "");
      },
      Chat: function () {
        return s._(/*BTDS*/ "");
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
    async function g(e) {
      var t = await r("JSResourceForInteraction")(
          "WAWebBizRemoveDirectConnectionKeysBridge",
        )
          .__setRef("WAWebDeleteChatAction")
          .load(),
        n = t.removeDirectConnectionKeys;
      await n(e);
    }
    function h(t, n) {
      if (
        (o(
          "WAWebBizCoexUtils",
        ).deleteChatFromFallbackHostedAdvSystemMsgOnPlaceholderCache(t.id),
        t.promises.sendDelete)
      )
        return t.promises.sendDelete.then(function (e) {
          return e.status === 200;
        });
      var r = t.getLastMsgKeyForAction(),
        a = r ? t.msgs.get(r) : void 0,
        i = o(
          "WAWebMetaAiThreadChatServerDelete",
        ).getMetaAiThreadServerDeleteBotFbid(t.id),
        l = (t.promises.sendDelete = (
          o("WAWebBackendRuntime").isWebDiBackendEnabled()
            ? o("WAWebBackendRuntime").runtime(
                o("WAWebChatDeleteService").ChatDeleteService,
              ).sendConversationDelete
            : o("WAWebChatDeleteBridge").sendConversationDelete
        )({
          id: t.id,
          tcToken: t.tcToken,
          tcTokenTimestamp: t.tcTokenTimestamp,
        })),
        u = o("WAWebFrontendChatGetters").getKind(t),
        m = l
          .then(async function (e) {
            if (e.status === 200) {
              if (
                (o("WAWebLabelCollection").LabelCollection.removeAllLabelsMD(t),
                u === o("WAWebChatFlowTypes").ChatKindType.Chat &&
                  (await g(t.id)),
                u != null)
              )
                switch (
                  (d.includes(u) &&
                    (await o(
                      "WAWebBizChatAssignmentAction",
                    ).removeChatAssignmentsForChat(t.id)),
                  o("WAWebMaybeClearChatAiThreads").maybeClearAiThreadsForChat(
                    t,
                  ),
                  u)
                ) {
                  case o("WAWebChatFlowTypes").ChatKindType.Community:
                    return new (o("WAWebActionToast.react").ActionType)(
                      s._(/*BTDS*/ ""),
                    );
                  case o("WAWebChatFlowTypes").ChatKindType.Group:
                    return new (o("WAWebActionToast.react").ActionType)(
                      s._(/*BTDS*/ ""),
                    );
                  case o("WAWebChatFlowTypes").ChatKindType.Broadcast:
                    return new (o("WAWebActionToast.react").ActionType)(
                      s._(/*BTDS*/ ""),
                    );
                  case o("WAWebChatFlowTypes").ChatKindType.Chat:
                    return new (o("WAWebActionToast.react").ActionType)(
                      s._(/*BTDS*/ ""),
                    );
                  case o("WAWebChatFlowTypes").ChatKindType.Newsletter:
                    return;
                }
            } else if (e.status >= 400 && u != null)
              switch (u) {
                case o("WAWebChatFlowTypes").ChatKindType.Community:
                  return new (o("WAWebActionToast.react").ActionType)(
                    s._(/*BTDS*/ ""),
                  );
                case o("WAWebChatFlowTypes").ChatKindType.Group:
                  return new (o("WAWebActionToast.react").ActionType)(
                    s._(/*BTDS*/ ""),
                  );
                case o("WAWebChatFlowTypes").ChatKindType.Broadcast:
                  return new (o("WAWebActionToast.react").ActionType)(
                    s._(/*BTDS*/ ""),
                  );
                case o("WAWebChatFlowTypes").ChatKindType.Chat:
                  return new (o("WAWebActionToast.react").ActionType)(
                    s._(/*BTDS*/ ""),
                  );
                case o("WAWebChatFlowTypes").ChatKindType.Newsletter:
                  return;
              }
          })
          .catch(function (r) {
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
                  a = s._(/*BTDS*/ "");
                  break;
                case o("WAWebChatFlowTypes").ChatKindType.Group:
                  a = s._(/*BTDS*/ "");
                  break;
                case o("WAWebChatFlowTypes").ChatKindType.Broadcast:
                  a = s._(/*BTDS*/ "");
                  break;
                case o("WAWebChatFlowTypes").ChatKindType.Chat:
                  a = s._(/*BTDS*/ "");
                  break;
                case o("WAWebChatFlowTypes").ChatKindType.Newsletter:
                  break;
              }
            else a = s._(/*BTDS*/ "");
            return new (o("WAWebActionToast.react").ActionType)(a, {
              actionText: s._(/*BTDS*/ ""),
              actionHandler: function () {
                return h(t, n);
              },
            });
          });
      return (
        n &&
          o("WAWebToastManager").ToastManager.open(
            c.jsx(o("WAWebActionToast.react").ActionToast, {
              initialAction: f(u),
              pendingAction: m,
            }),
          ),
        l
          .then(async function (e) {
            if (e.status !== 200) return !1;
            var n = t.getLastMsgKeyForAction(),
              l = (r && r.equals(n)) || r === n;
            return (
              l ? t.delete() : y(t, a),
              o("WAWebFrontendChatGetters").getKind(t) ===
                o("WAWebChatFlowTypes").ChatKindType.Community &&
                o("WAWebContactCollection").ContactCollection.remove(
                  t.id.toString(),
                ),
              l &&
                i != null &&
                (await o(
                  "WAWebMetaAiThreadChatServerDelete",
                ).completeMetaAiThreadServerDelete(t.id, i)),
              !0
            );
          })
          .finally(function () {
            t.promises.sendDelete = null;
          })
      );
    }
    function y(e, t) {
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
