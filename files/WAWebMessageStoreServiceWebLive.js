__d(
  "WAWebMessageStoreServiceWebLive",
  [
    "JSResourceForInteraction",
    "Promise",
    "WAWebMessageStoreService",
    "WebDi.Async",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (s = r("JSResourceForInteraction"))(
        "WAWebDBEphemeralMessage",
      ).__setRef("WAWebMessageStoreServiceWebLive"),
      c = s("WAWebDBMessageDelete").__setRef("WAWebMessageStoreServiceWebLive"),
      d = s("WAWebDBMsgUtils").__setRef("WAWebMessageStoreServiceWebLive"),
      m = s("WAWebDBProcessMessage").__setRef(
        "WAWebMessageStoreServiceWebLive",
      ),
      p = s("WAWebDBProcessRevokeMsgs").__setRef(
        "WAWebMessageStoreServiceWebLive",
      ),
      _ = s("WAWebDBThreadMetadataBulkHelper").__setRef(
        "WAWebMessageStoreServiceWebLive",
      ),
      f = s("WAWebDBUpdateMessageTable").__setRef(
        "WAWebMessageStoreServiceWebLive",
      ),
      g = s("WAWebRequestDeleteAddOns").__setRef(
        "WAWebMessageStoreServiceWebLive",
      ),
      h = o("WAWebMessageStoreService").MessageStoreService.make(function* () {
        var t = yield* o("WebDi.Async").fromPromise(function () {
            return (e || (e = n("Promise"))).all([
              u.load(),
              c.load(),
              d.load(),
              m.load(),
              p.load(),
              _.load(),
              f.load(),
              g.load(),
            ]);
          }),
          r = t[0].removeExpiredMessagesFromHistory,
          a = t[1].removeStatusMessage,
          i = t[2].getMsgsByMsgKey,
          l = t[3].storeMessages,
          s = t[4].processRevokeMsgsAndGetCleanupEligibleKeys,
          h = t[5].persistNewMessagesThreadMetadataInBulk,
          y = t[6].updateMessageTable,
          C = t[7].requestDeleteAddOns,
          b = {
            storeMessages: function (t, n, r) {
              return o("WebDi.Async").fromPromise(function () {
                return l(t, n, r);
              });
            },
            persistThreadMetadata: function (t) {
              return o("WebDi.Async").fromPromise(function () {
                return h(t);
              });
            },
            processRevokes: function (t) {
              return o("WebDi.Async").fromPromise(function () {
                return s(t);
              });
            },
            deleteAddOns: function (t, n) {
              return o("WebDi.Async").fromPromise(function () {
                return C(t, n);
              });
            },
            updateMessageTable: function (t, n) {
              return o("WebDi.Async").fromPromise(function () {
                return y(t, n);
              });
            },
            getMsgsByMsgKey: function (t, n) {
              return o("WebDi.Async").fromPromise(function () {
                return i(t, n);
              });
            },
            removeStatusMessage: function (t) {
              return o("WebDi.Async").fromPromise(function () {
                return a(t);
              });
            },
            removeExpiredMessagesFromHistory: function (t) {
              return o("WebDi.Async").fromPromise(function () {
                return r(t);
              });
            },
          };
        return b;
      });
    l.MessageStoreServiceWebLive = h;
  },
  98,
);
