__d(
  "WAWebBizAiBookingCustomerChat",
  [
    "WAWebChatCollection",
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebDrawerManager",
    "WAWebFindChatAction",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebChatCollection").ChatCollection.getLatestChatForWid(
              e,
            ),
            n =
              t != null
                ? t
                : (yield o("WAWebFindChatAction").findOrCreateLatestChat(
                    e,
                    "createChat",
                  )).chat;
          (o("WAWebDrawerManager").DrawerManager.closeDrawerLeft(),
            yield o("WAWebCmd").Cmd.openChatBottom({
              chat: n,
              chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.Deeplink,
            }));
        })),
        s.apply(this, arguments)
      );
    }
    l.openBookingCustomerChat = e;
  },
  98,
);
