__d(
  "WAWebTextMentionWrapperMutatorComponent.react",
  [
    "fbt",
    "WALogger",
    "WAWebBotFrontendUtils",
    "WAWebBotGating",
    "WAWebBotProfileCollection",
    "WAWebBotUtils",
    "WAWebChatCollection",
    "WAWebChatEntryPoint",
    "WAWebChatGroupUtils",
    "WAWebCmd",
    "WAWebConfirmPopup.react",
    "WAWebDisplayType",
    "WAWebFbtAppName",
    "WAWebFindChatAction",
    "WAWebModalManager",
    "WAWebSimpleSignalPNToFBIDMigration",
    "WAWebTextMentionMutatorComponent.react",
    "WAWebWrapperDisplayTypeContext",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useContext;
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            var n = yield o("WAWebFindChatAction").findOrCreateLatestChat(
                t,
                "textMentionWrapper",
              ),
              r = n.chat;
            o("WAWebBotUtils").isMetaAiBot(t) &&
            o("WAWebBotGating").isAiChatThreadsEnabled()
              ? o("WAWebBotFrontendUtils").runMetaAiThreadsFlow(r, {
                  type: "MetaAiMention",
                })
              : o("WAWebCmd").Cmd.openChatBottom({
                  chat: r,
                  chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
                    .Mention,
                });
          } catch (t) {
            t instanceof Error &&
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Failed to open chat from mention",
                    ])),
                )
                .catching(t)
                .sendLogs("text-mention-open-chat-fail");
          }
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      var t = e.contact,
        n = e.lastMessage,
        a = e.selectable,
        i = e.theme,
        l = d(r("WAWebWrapperDisplayTypeContext")),
        u = function () {
          var e,
            n,
            r =
              (e = o(
                "WAWebSimpleSignalPNToFBIDMigration",
              ).getDeprecatedPnChatForFbidInvoke(t.id)) != null
                ? e
                : t.id,
            a =
              (n = o(
                "WAWebBotProfileCollection",
              ).BotProfileCollection.getDefaultBot()) == null
                ? void 0
                : n.id;
          if (
            r.isBot() &&
            !r.equals(a) &&
            !o("WAWebChatCollection").ChatCollection.get(r)
          ) {
            o("WAWebModalManager").ModalManager.open(
              c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                onOK: o("WAWebModalManager").closeModalManager,
                children: s._(
                  /*BTDS*/ "Starting a new chat with a bot is currently not supported on {=m1}.",
                  [
                    s._implicitParam(
                      "=m1",
                      c.jsx(o("WAWebFbtAppName").WAWebAppShortName, {
                        children: s._(/*BTDS*/ ""),
                      }),
                    ),
                  ],
                ),
              }),
            );
            return;
          }
          var i = o("WAWebChatGroupUtils").getOneToOneContactFromGroupContact(
            r,
            "text_mention",
          );
          i != null && m(i);
        },
        p;
      return (
        l !== o("WAWebDisplayType").DISPLAY_TYPE.EDITING && (p = u),
        c.jsx(r("WAWebTextMentionMutatorComponent.react"), {
          contact: t,
          theme: i,
          selectable: a,
          onClick: p,
          lastMessage: n,
        })
      );
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);
