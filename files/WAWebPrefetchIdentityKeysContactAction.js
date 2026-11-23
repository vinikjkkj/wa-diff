__d(
  "WAWebPrefetchIdentityKeysContactAction",
  [
    "WALogger",
    "WAWebManageE2ESessionsJob",
    "WAWebPQGatingUtils",
    "WAWebSendMsgDatabaseJob",
    "WAWebSessionScope",
    "WAWebUserUtils",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t) {
      try {
        var n = o("WAWebUserUtils").getMeDeviceLidOrThrow(),
          a = await o("WAWebSendMsgDatabaseJob").getFanOutListJob(
            t != null ? [t, n] : [n],
          );
        await o("WAWebManageE2ESessionsJob").ensureE2ESessions({
          identityChanged: !1,
          sessionScope:
            (t == null ? void 0 : t.isUser()) === !0
              ? o("WAWebPQGatingUtils").getOneToOneChatSessionScope()
              : o("WAWebSessionScope").SessionScope.DEFAULT,
          wids: a,
        });
      } catch (t) {
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[security-code] identity key prefetch failed",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("security-code-identity-key-prefetch-failed");
      }
    }
    l.prefetchIdentityKeysForSecurityCode = s;
  },
  98,
);
