__d(
  "WAWebBizAiBookingCustomerChat",
  [
    "WAWebChatCollection",
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebDrawerManager",
    "WAWebFindChatAction",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e) {
      var t = o("WAWebChatCollection").ChatCollection.getLatestChatForWid(e),
        n =
          t != null
            ? t
            : (
                await o("WAWebFindChatAction").findOrCreateLatestChat(
                  e,
                  "createChat",
                )
              ).chat;
      (o("WAWebDrawerManager").DrawerManager.closeDrawerLeft(),
        await o("WAWebCmd").Cmd.openChatBottom({
          chat: n,
          chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.Deeplink,
        }));
    }
    l.openBookingCustomerChat = e;
  },
  98,
);
