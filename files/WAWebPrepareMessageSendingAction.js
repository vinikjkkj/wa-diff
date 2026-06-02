__d(
  "WAWebPrepareMessageSendingAction",
  [
    "WALogger",
    "WAWebChatGetters",
    "WAWebEagerlyEstablishE2eeSessionChatAction",
    "WAWebPrefetchDevicesAction",
    "WAWebStateUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t) {
      var n = o("WAWebStateUtils").unproxy(t);
      if (
        !o("WAWebChatGetters").getIsUser(n) &&
        !o("WAWebChatGetters").getIsGroup(n) &&
        !n.id.isStatus()
      )
        return Promise.resolve();
      try {
        o("WAWebChatGetters").getIsUser(n)
          ? await Promise.all([
              o(
                "WAWebEagerlyEstablishE2eeSessionChatAction",
              ).eagerlyEstablishE2EESession(n),
              o("WAWebPrefetchDevicesAction").prefetchDevices(n),
            ])
          : await o(
              "WAWebEagerlyEstablishE2eeSessionChatAction",
            ).eagerlyEstablishE2EESession(n);
      } catch (t) {
        o("WALogger").ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "prepareChatForMessageSending: failed with error: ",
              "",
            ])),
          t,
        );
      }
    }
    l.prepareChatForMessageSending = s;
  },
  98,
);
