__d(
  "WAWebAddonSendServiceWebLive",
  ["JSResourceForInteraction", "WAWebAddonSendService", "WebDi.Async"],
  function (t, n, r, o, a, i, l) {
    var e = r("JSResourceForInteraction")(
        "WAWebSendAddonMsgChatAction",
      ).__setRef("WAWebAddonSendServiceWebLive"),
      s = o("WAWebAddonSendService").AddonSendService.make(function* () {
        var t = yield* o("WebDi.Async").fromPromise(function () {
            return e.load();
          }),
          n = t.addAndSendAddonToChat,
          r = {
            addAndSendAddon: function (t) {
              return o("WebDi.Async").fromPromise(function () {
                return n(t);
              });
            },
          };
        return r;
      });
    l.AddonSendServiceWebLive = s;
  },
  98,
);
