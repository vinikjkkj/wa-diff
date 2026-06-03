__d(
  "WAWebPrepareMessageSendingAction",
  [
    "Promise",
    "WALogger",
    "WAWebChatGetters",
    "WAWebEagerlyEstablishE2eeSessionChatAction",
    "WAWebPrefetchDevicesAction",
    "WAWebStateUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = o("WAWebStateUtils").unproxy(t);
          if (
            !o("WAWebChatGetters").getIsUser(r) &&
            !o("WAWebChatGetters").getIsGroup(r) &&
            !r.id.isStatus()
          )
            return (s || (s = n("Promise"))).resolve();
          try {
            o("WAWebChatGetters").getIsUser(r)
              ? yield (s || (s = n("Promise"))).all([
                  o(
                    "WAWebEagerlyEstablishE2eeSessionChatAction",
                  ).eagerlyEstablishE2EESession(r),
                  o("WAWebPrefetchDevicesAction").prefetchDevices(r),
                ])
              : yield o(
                  "WAWebEagerlyEstablishE2eeSessionChatAction",
                ).eagerlyEstablishE2EESession(r);
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
        })),
        c.apply(this, arguments)
      );
    }
    l.prepareChatForMessageSending = u;
  },
  98,
);
