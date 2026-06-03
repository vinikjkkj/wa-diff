__d(
  "WAWebHandleBizBotWelcomeMsgProtocolModeAction",
  [
    "WAWebApiBusinessProfile",
    "WAWebBotGating",
    "WAWebBotTypes",
    "WAWebBotWelcomeRequestSync",
    "WAWebChatCollection",
    "WAWebSyncdCoreApi",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if (o("WAWebBotGating").isBizBot3pAvailable()) {
            var r = o("WAWebChatCollection").ChatCollection.get(e);
            if (r) {
              var a = t;
              if (!a) {
                var i,
                  l = yield o(
                    "WAWebApiBusinessProfile",
                  ).getBusinessProfileRowLidAware(e.toString());
                a =
                  (i = o("WAWebBotTypes").BotWelcomeMsgProtocolModeType.cast(
                    l == null ? void 0 : l.welcomeMsgProtocolMode,
                  )) != null
                    ? i
                    : o("WAWebBotTypes").BotWelcomeMsgProtocolModeType.NONE;
              }
              var s =
                n != null
                  ? n
                  : o("WAWebBotTypes").BotWelcomeMsgProtocolModeType.NONE;
              a !== s &&
                s === o("WAWebBotTypes").BotWelcomeMsgProtocolModeType.NONE &&
                (yield u(r));
            }
          }
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.hasRequestedWelcomeMsg) {
            e.hasRequestedWelcomeMsg = !1;
            var t = yield r(
              "WAWebBotWelcomeRequestSync",
            ).getBotWelcomeRequestSetMutation(e.id, !1);
            yield o("WAWebSyncdCoreApi").lockForSync(
              ["chat"],
              [t],
              (function () {
                var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (t) {
                    var n = t[0];
                    return n.merge(e.id.toString(), {
                      hasRequestedWelcomeMsg: !1,
                    });
                  },
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
            );
          }
        })),
        c.apply(this, arguments)
      );
    }
    l.handleBizBotWelcomeMsgProtocolModeTransition = e;
  },
  98,
);
