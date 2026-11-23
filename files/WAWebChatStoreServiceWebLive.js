__d(
  "WAWebChatStoreServiceWebLive",
  [
    "JSResourceForInteraction",
    "Promise",
    "WAWebChatStoreService",
    "WebDi.Async",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (s = r("JSResourceForInteraction"))("WAWebChatDeleteBridge").__setRef(
        "WAWebChatStoreServiceWebLive",
      ),
      c = s("WAWebDBUpdateChatTable").__setRef("WAWebChatStoreServiceWebLive"),
      d = s("WAWebFindChat").__setRef("WAWebChatStoreServiceWebLive"),
      m = s("WAWebUpdateDraftMessageChatJob").__setRef(
        "WAWebChatStoreServiceWebLive",
      ),
      p = o("WAWebChatStoreService").ChatStoreService.make(function* () {
        var t = yield* o("WebDi.Async").fromPromise(function () {
            return (e || (e = n("Promise"))).all([
              u.load(),
              c.load(),
              d.load(),
              m.load(),
            ]);
          }),
          r = t[0].deleteFromStorage,
          a = t[1].updateChatTable,
          i = t[2],
          l = i.findExistingChat,
          s = i.findOrCreateLatestChat,
          p = t[3].updateDraftMessageChat,
          _ = {
            updateChatTable: function (t, n) {
              return o("WebDi.Async").fromPromise(function () {
                return a(t, n);
              });
            },
            deleteFromStorage: function (t) {
              return o("WebDi.Async").fromPromise(function () {
                return r(t);
              });
            },
            findExistingChat: function (t, n, r) {
              return o("WebDi.Async").fromPromise(function () {
                return l(t, n, r);
              });
            },
            findOrCreateLatestChat: function (t, n, r) {
              return o("WebDi.Async").fromPromise(function () {
                return s(t, n, r);
              });
            },
            updateDraftMessageChat: function (t) {
              return o("WebDi.Async").fromPromise(function () {
                return p(t);
              });
            },
          };
        return _;
      });
    l.ChatStoreServiceWebLive = p;
  },
  98,
);
