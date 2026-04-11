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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(8),
        n = e.contact,
        a = e.lastMessage,
        i = e.selectable,
        l = e.theme,
        u = d(r("WAWebWrapperDisplayTypeContext")),
        p;
      t[0] !== n
        ? ((p = function () {
            var e,
              t,
              r =
                (e = o(
                  "WAWebSimpleSignalPNToFBIDMigration",
                ).getDeprecatedPnChatForFbidInvoke(n.id)) != null
                  ? e
                  : n.id,
              a =
                (t = o(
                  "WAWebBotProfileCollection",
                ).BotProfileCollection.getDefaultBot()) == null
                  ? void 0
                  : t.id;
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
          }),
          (t[0] = n),
          (t[1] = p))
        : (p = t[1]);
      var _ = p,
        f;
      u !== o("WAWebDisplayType").DISPLAY_TYPE.EDITING && (f = _);
      var g;
      return (
        t[2] !== n || t[3] !== a || t[4] !== f || t[5] !== i || t[6] !== l
          ? ((g = c.jsx(r("WAWebTextMentionMutatorComponent.react"), {
              contact: n,
              theme: l,
              selectable: i,
              onClick: f,
              lastMessage: a,
            })),
            (t[2] = n),
            (t[3] = a),
            (t[4] = f),
            (t[5] = i),
            (t[6] = l),
            (t[7] = g))
          : (g = t[7]),
        g
      );
    }
    l.default = _;
  },
  226,
);
