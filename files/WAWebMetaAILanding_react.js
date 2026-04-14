__d(
  "WAWebMetaAILanding.react",
  [
    "WALogger",
    "WAWebBotFrontendUtils",
    "WAWebBotGating",
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebComposeBox.react",
    "WAWebMetaAICategories.react",
    "WAWebMetaAIGreeting.react",
    "WAWebMetaAIProfileIcon.react",
    "WAWebNoop",
    "WAWebResolveThreadForEntryPoint",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useEffect,
      m = c.useMemo,
      p = c.useState,
      _ = "x1d5rdki-B";
    function f() {
      var t = p(null),
        n = t[0],
        a = t[1];
      d(function () {
        o("WAWebBotFrontendUtils")
          .getMetaAiChat()
          .then(function (e) {
            e != null && a(e);
          });
      }, []);
      var i = m(
          function () {
            if (!(n == null || !o("WAWebBotGating").isAiChatThreadsEnabled())) {
              var e = o(
                "WAWebResolveThreadForEntryPoint",
              ).resolveThreadIdForEntryPoint(n);
              return (
                o("WAWebBotFrontendUtils").ensureThreadModelExists(n, e),
                e
              );
            }
          },
          [n],
        ),
        l = function () {
          o("WAWebBotGating").isAiChatThreadsEnabled() && n != null && i != null
            ? o("WAWebCmd").Cmd.openChatBottom({
                chat: n,
                chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
                  .MetaAIIntroPanel,
                threadId: i,
              })
            : o("WAWebBotFrontendUtils").openMetaBotChat(
                o("WAWebChatEntryPoint").ChatEntryPoint.MetaAIIntroPanel,
              );
        },
        s = function (n) {
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[WAWebMetaAILanding] handleSendQuery query=",
                "",
              ])),
            n,
          ),
            o("WAWebBotFrontendUtils").sendMetaBotQuery(
              n,
              o("WAWebChatEntryPoint").ChatEntryPoint.MetaAIIntroPanel,
            ));
        };
      return u.jsx("section", {
        "data-testid": void 0,
        className:
          "x78zum5 xdt5ytf x6s0dn4 x1nhvcw1 xh8yej3 x5yr21d x1qx29kw x18d9i69 xb0esv5 xyo0t3i x9f619 x1280gxy x67bb7w x1odjw0f",
        children: u.jsxs("div", {
          className: "x78zum5 xdt5ytf x6s0dn4 xrlsmeg xh8yej3",
          children: [
            u.jsxs("div", {
              className:
                "x78zum5 xdt5ytf x6s0dn4 xtl7yxs xegkacw x1lfcbla x1u6ievf x1k0bccz",
              children: [
                u.jsx(r("WAWebMetaAIProfileIcon.react"), {}),
                u.jsx("div", {
                  className: "x1ci5j9l",
                  children: u.jsx(r("WAWebMetaAIGreeting.react"), {}),
                }),
              ],
            }),
            u.jsx("div", {
              className: "x1q9ymp4 xh8yej3",
              children:
                n != null &&
                u.jsx(o("WAWebComposeBox.react").ComposeBox, {
                  chat: n,
                  threadId: i,
                  onSend: l,
                  onPageUpDown: r("WAWebNoop"),
                  onComposeHeightChange: r("WAWebNoop"),
                }),
            }),
            u.jsx("div", {
              className: "x98l61r x78zum5 xdt5ytf x6s0dn4 x1nhvcw1 xh8yej3",
              children: u.jsx(r("WAWebMetaAICategories.react"), {
                onPromptSelect: s,
              }),
            }),
          ],
        }),
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  98,
);
