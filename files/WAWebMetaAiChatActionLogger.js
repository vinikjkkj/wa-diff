__d(
  "WAWebMetaAiChatActionLogger",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebBotUtils",
    "WAWebMetaAiThreadChat",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumChatActionEntryPoint",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = r("JSResourceForInteraction")("WAWebMetaAiChatActionEvents").__setRef(
        "WAWebMetaAiChatActionLogger",
      );
    function c(e) {
      return e.isUser()
        ? o("WAWebBotUtils").isMetaAiBot(e)
          ? "META_AI"
          : o("WAWebMetaAiThreadChat").isMetaAiThreadChat(e)
            ? "META_AI_THREAD"
            : null
        : null;
    }
    function d(e, t) {
      return e != null && !e.isEmptyQuery()
        ? {
            entryPoint: o("WAWebWamEnumChatActionEntryPoint")
              .CHAT_ACTION_ENTRY_POINT.SEARCH_LIST,
            threadInboxPosition: null,
          }
        : t == null
          ? null
          : {
              entryPoint: o("WAWebWamEnumChatActionEntryPoint")
                .CHAT_ACTION_ENTRY_POINT.CONVERSATION_LIST,
              threadInboxPosition: t,
            };
    }
    function m(e, t, n) {
      var r;
      if (n == null) return null;
      var a = c(e),
        i =
          (r = o("WAWebUserPrefsMeUser").getMaybeMeLidUser()) == null
            ? void 0
            : r.toString();
      if (a == null || i == null) return null;
      var l = p();
      return {
        commit: function () {
          return l.then(function (r) {
            return r == null
              ? void 0
              : r.commitMetaAiChatListAction(
                  { chatWid: e, chatType: a, originLid: i },
                  t,
                  n,
                );
          });
        },
      };
    }
    function p() {
      return u.load().catch(function () {
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[meta-ai-chat-action] load-failed",
                ])),
            )
            .sendLogs("meta-ai-chat-action-load-failed"),
          null
        );
      });
    }
    function _(e) {
      var t,
        n =
          (t = o("WAWebUserPrefsMeUser").getMaybeMeLidUser()) == null
            ? void 0
            : t.toString(),
        r = c(e),
        a =
          r == null
            ? Promise.resolve({})
            : p().then(function (t) {
                var n;
                return (n =
                  t == null ? void 0 : t.readMetaAiChatActionFields(e, r)) !=
                  null
                  ? n
                  : {};
              });
      return {
        resolve: async function () {
          var e,
            t = await a;
          return ((e = o("WAWebUserPrefsMeUser").getMaybeMeLidUser()) == null
            ? void 0
            : e.toString()) !== n
            ? (o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[meta-ai-chat-action] account-changed",
                  ])),
              ),
              null)
            : t;
        },
      };
    }
    ((l.resolveMetaAiChatActionChatType = c),
      (l.getMetaAiChatListRow = d),
      (l.startMetaAiChatListAction = m),
      (l.captureMetaAiChatActionFields = _));
  },
  98,
);
