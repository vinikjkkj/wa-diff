__d(
  "WAWebMetaBotNavBarItem.react",
  [
    "fbt",
    "WALogger",
    "WAWebBotBaseGating",
    "WAWebBotFrontendUtils",
    "WAWebBotGating",
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebDrawerManager",
    "WAWebFlex.react",
    "WAWebInteractionTracePolicy",
    "WAWebMetaAIIcon.react",
    "WAWebNavBarItem.react",
    "WAWebNavBarLogEvents",
    "WAWebNavBarTypes",
    "WAWebOpenMetaAIHomeAction",
    "WAWebThreadJourneyLogger",
    "WAWebWamEnumMetaAiActionEntryPoint",
    "WAWebWamEnumWebcNavbarItemLabel",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebEventTargetValue",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m,
      p,
      _,
      f = _ || (_ = o("react")),
      g = _,
      h = g.useEffect,
      y = g.useRef,
      C = { iconWrapper: { width: "xvy4d1p", height: "xxk0z11", $$css: !0 } };
    function b(t) {
      var a = t.activeNavBarItem,
        i = t.updateActiveNavBarItem,
        l = v(),
        _ = y(a);
      h(
        function () {
          _.current = a;
        },
        [a],
      );
      var g = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (o("WAWebBotBaseGating").isMetaAIHomeEnabled()) {
              if (a === o("WAWebNavBarTypes").NavBarItems.MetaAI) return;
              var t =
                yield o(
                  "WAWebDrawerManager",
                ).DrawerManager.closeDrawerLeftAsync();
              if (!t) return;
              (i(o("WAWebNavBarTypes").NavBarItems.MetaAI),
                o("WAWebBotGating").isAiChatThreadsEnabled()
                  ? o("WAWebBotFrontendUtils")
                      .getMetaAiChat()
                      .then(function (e) {
                        return o("WAWebBotFrontendUtils").runMetaAiThreadsFlow(
                          e,
                          { type: "MetaAiNavigationBar" },
                        );
                      })
                      .catch(function (t) {
                        o("WALogger").LOG(
                          e ||
                            (e = babelHelpers.taggedTemplateLiteralLoose([
                              "[MetaBotNavBarItem] getMetaAiChat failed",
                            ])),
                        );
                      })
                  : o("WAWebOpenMetaAIHomeAction").openMetaAIHome());
              return;
            }
            var n = o("WAWebBotGating").isAiChatThreadsEnabled();
            if (
              (o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[MetaBotNavBarItem] handleMetaBotClick threadsEnabled=",
                    "",
                  ])),
                String(n),
              ),
              n)
            )
              (o("WAWebBotFrontendUtils")
                .getMetaAiChat()
                .then(function (e) {
                  var t = _.current;
                  if (
                    t !== o("WAWebNavBarTypes").NavBarItems.MetaAI &&
                    t !== a
                  ) {
                    o("WALogger").LOG(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "[MetaBotNavBarItem] flow aborted: user navigated to ",
                          "",
                        ])),
                      t,
                    );
                    return;
                  }
                  (o("WALogger").LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[MetaBotNavBarItem] getMetaAiChat -> runMetaAiThreadsFlow",
                      ])),
                  ),
                    o("WAWebBotFrontendUtils").runMetaAiThreadsFlow(e, {
                      type: "MetaAiNavigationBar",
                    }));
                })
                .catch(function (e) {
                  o("WALogger").LOG(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[MetaBotNavBarItem] getMetaAiChat failed",
                      ])),
                  );
                }),
                o(
                  "WAWebThreadJourneyLogger",
                ).ThreadJourneyLogger.logNewChatClick(
                  o("WAWebWamEnumMetaAiActionEntryPoint")
                    .META_AI_ACTION_ENTRY_POINT.NAVIGATION_BAR_BUTTON,
                ));
            else {
              (o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[MetaBotNavBarItem] using legacy openMetaBotChat flow",
                  ])),
              ),
                o("WAWebBotFrontendUtils").openMetaBotChat(
                  o("WAWebChatEntryPoint").ChatEntryPoint.BotChatListShortcut,
                ));
              var r =
                yield o(
                  "WAWebDrawerManager",
                ).DrawerManager.closeDrawerLeftAsync();
              r &&
                (i(o("WAWebNavBarTypes").NavBarItems.Chats),
                o("WAWebNavBarLogEvents").logNavBarEvent(
                  o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL
                    .CHATS,
                ));
            }
          });
          return function () {
            return t.apply(this, arguments);
          };
        })(),
        b = s._(/*BTDS*/ "Meta AI"),
        S = f.jsx(o("WAWebNavBarItem.react").NavBarItem, {
          icon: f.jsx(o("WAWebFlex.react").FlexColumn, {
            grow: 1,
            align: "center",
            justify: "center",
            xstyle: C.iconWrapper,
            children: f.jsx(r("WAWebMetaAIIcon.react"), {}),
          }),
          title: b,
          testid: void 0,
          isActive: a === o("WAWebNavBarTypes").NavBarItems.MetaAI,
          onClick: g,
          tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_METABOT,
        });
      return l && S;
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v() {
      return r("useWAWebEventTargetValue")(
        o("WAWebCmd").Cmd,
        "on_ab_props_update_from_bridge",
        S,
      );
    }
    function S() {
      return o("WAWebBotGating").isBotShortcutEntryPointEnabled();
    }
    l.MetaBotNavBarItem = b;
  },
  226,
);
