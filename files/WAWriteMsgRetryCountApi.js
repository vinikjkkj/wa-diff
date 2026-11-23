__d(
  "WAWriteMsgRetryCountApi",
  ["WAMsg", "WASignalDB"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = async function (t, n, r) {
      var e = o("WAMsg").craftWAMsgIdString({
        author: t.author,
        chat: t.chat,
        externalId: t.externalId,
      });
      await o("WASignalDB")
        .getDb()
        .runInTransaction(
          ["receipts"],
          "readwrite",
          async function (t) {
            var o = await t.stores.receipts.getByIndex("waMsgId+deviceJid", [
              e,
              n,
            ]);
            o != null &&
              (await t.stores.receipts.bulkPut([
                babelHelpers.extends({}, o, { retryCount: r }),
              ]));
          },
          "writeMsgRetryCountInSignalDb",
        );
    };
    l.writeMsgRetryCount = e;
  },
  98,
);
