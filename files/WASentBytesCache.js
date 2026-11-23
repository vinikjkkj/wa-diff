__d(
  "WASentBytesCache",
  [
    "WAGlobals",
    "WAJids",
    "WAMsg",
    "WASentBytesCacheApi",
    "WATagsLogger",
    "WATimeUtils",
    "WAWaitForUserUnblocked",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = o("WATagsLogger").TAGS(["SentBytesCache"]),
      c = 720 * 60 * 60,
      d = (function () {
        function t() {
          var t = this;
          o("WAWaitForUserUnblocked")
            .waitForUserUnblocked()
            .then(function () {
              t.$1().catch(function (t) {
                u.ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Failed to prune sent bytes: ",
                      "",
                    ])),
                  t,
                );
              });
            });
        }
        var n = t.prototype;
        return (
          (n.loadSentBytes = function (t) {
            return o("WASentBytesCacheApi").loadSentBytes(t);
          }),
          (n.getMsgsForRetry = async function (t) {
            var e = Array.from(
                new Set(
                  t.map(function (e) {
                    var t = e.deviceJid;
                    return o("WAJids").extractUserJid(t);
                  }),
                ),
              ),
              n = new Map();
            try {
              n = await o("WAGlobals")
                .getWaOneQueue()
                .enqueue(
                  function (t) {
                    var n = t.cryptoManager;
                    return n.storage.bulkLoadIdentities(e);
                  },
                  {
                    operationType: "retries_load_identities",
                    flush: !1,
                    afterInit: !0,
                  },
                );
            } catch (e) {
              var a = r("getErrorSafe")(e);
              u.ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "It fails to bulkLoadIdentities: ",
                    "",
                  ])),
                a.toString(),
              );
            }
            var i = await this.loadSentBytes(
              t.map(function (e) {
                var t = e.protocolMsgId;
                return o("WAMsg").craftWAMsgIdString({
                  author: t.author,
                  chat: t.chat,
                  externalId: t.externalId,
                });
              }),
            );
            return t.map(function (e) {
              var t,
                r = e.deviceJid,
                a = e.protocolMsgId,
                l = o("WAMsg").craftWAMsgIdString({
                  author: a.author,
                  chat: a.chat,
                  externalId: a.externalId,
                }),
                s =
                  (t = n.get(o("WAJids").extractUserJid(r))) == null
                    ? void 0
                    : t.get(r);
              if (s == null) return { type: "unauthorized" };
              var u = i.find(function (e) {
                return e.waMsgId === l;
              });
              return u == null
                ? { type: "missing" }
                : o("WATimeUtils").happenedWithin(u.ts, c)
                  ? {
                      frankingKey: u.frankingKey,
                      frankingVersion: u.frankingVersion,
                      messageBytes: u.messageBytes,
                      backupDirective: u.backupDirective,
                      messageType: u.messageType,
                      protocolMsgId: u.protocolMsgId,
                      retryCount: e.retryCount + 1,
                      type: "unacked",
                      serverTs: u.ts,
                    }
                  : { type: "unauthorized" };
            });
          }),
          (n.saveSentBytes = function (t) {
            return o("WASentBytesCacheApi").saveSentBytes(t);
          }),
          (n.$1 = function () {
            return o("WASentBytesCacheApi")
              .loadExpired(o("WATimeUtils").pastUnixTime(c))
              .then(function (e) {
                return o("WASentBytesCacheApi").deleteSentBytesAndReceipts(e);
              });
          }),
          t
        );
      })(),
      m = new d();
    function p() {
      return m;
    }
    l.sentBytesCache = p;
  },
  98,
);
