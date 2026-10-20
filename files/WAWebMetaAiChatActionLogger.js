__d(
  "WAWebMetaAiChatActionLogger",
  [
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
    "WAWebABProps",
    "WAWebBotUtils",
    "WAWebMetaAiThreadChat",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumChatActionEntryPoint",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = r("JSResourceForInteraction")("WAWebMetaAiChatActionEvents").__setRef(
        "WAWebMetaAiChatActionLogger",
      );
    function d(e) {
      return e.isUser()
        ? o("WAWebBotUtils").isMetaAiBot(e)
          ? "META_AI"
          : o("WAWebMetaAiThreadChat").isMetaAiThreadChat(e)
            ? "META_AI_THREAD"
            : null
        : null;
    }
    function m(e, t) {
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
    function p(e, t, n) {
      var r;
      if (n == null) return null;
      var a = d(e),
        i =
          (r = o("WAWebUserPrefsMeUser").getMaybeMeLidUser()) == null
            ? void 0
            : r.toString();
      if (
        a == null ||
        i == null ||
        !o("WAWebABProps").getABPropConfigValue(
          "ai_chat_action_logging_addition_enabled",
        )
      )
        return null;
      var l = _();
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
    function _() {
      return c.load().catch(function () {
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
    function f(e) {
      var t,
        r =
          (t = o("WAWebUserPrefsMeUser").getMaybeMeLidUser()) == null
            ? void 0
            : t.toString(),
        a = d(e),
        i =
          a == null ||
          !o("WAWebABProps").getABPropConfigValue(
            "ai_chat_action_logging_addition_enabled",
          )
            ? (u || (u = n("Promise"))).resolve({})
            : _().then(function (t) {
                var n;
                return (n =
                  t == null ? void 0 : t.readMetaAiChatActionFields(e, a)) !=
                  null
                  ? n
                  : {};
              });
      return {
        resolve: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e,
              t = yield i;
            return ((e = o("WAWebUserPrefsMeUser").getMaybeMeLidUser()) == null
              ? void 0
              : e.toString()) !== r
              ? (o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[meta-ai-chat-action] account-changed",
                    ])),
                ),
                null)
              : t;
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      };
    }
    ((l.resolveMetaAiChatActionChatType = d),
      (l.getMetaAiChatListRow = m),
      (l.startMetaAiChatListAction = p),
      (l.captureMetaAiChatActionFields = f));
  },
  98,
);
