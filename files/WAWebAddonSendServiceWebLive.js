__d(
  "WAWebAddonSendServiceWebLive",
  ["WAWebAddonSendService", "WAWebSendAddonMsgChatAction", "WebDi.Async"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebAddonSendService").AddonSendService.make(function* () {
      var e = {
        addAndSendAddon: function (t) {
          return o("WebDi.Async").fromPromise(function () {
            return o("WAWebSendAddonMsgChatAction").addAndSendAddonToChat(t);
          });
        },
      };
      return e;
    });
    l.AddonSendServiceWebLive = e;
  },
  98,
);
