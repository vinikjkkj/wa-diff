__d(
  "MAWDeleteThread",
  [
    "MAWDeleteThreadApi",
    "MAWGetThreadInfoForDeletionApi",
    "MWFBLogger",
    "MawMessageSendService",
    "QPLFlow",
    "WADeleteReceiptsApi",
    "WATimeUtils",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = o("MWFBLogger").MWLogger().tags(["backend", "deleteThread"]);
    async function d(t) {
      c.DEBUG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "Starting Delete Secure thread Job: ",
            "",
          ])),
        t,
      );
      var n = o("QPLFlow").startQPLFlow(r("qpl")._(1056845732, "691")),
        a = await o("MAWGetThreadInfoForDeletionApi").getThreadInfoForDeletion(
          t,
        ),
        i =
          a.newestMsgTs != null
            ? o("WATimeUtils").futureUnixTime(1, a.newestMsgTs)
            : void 0;
      try {
        (await o("MAWDeleteThreadApi").deleteThread(a.chatJid),
          await o("WADeleteReceiptsApi").deleteReceipts(a.deletedMessages),
          await o("MawMessageSendService").sendDeleteThread({
            chatJid: a.chatJid,
            lastMessageTimestamp: i,
          }),
          c.DEBUG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "Delete Secure thread Job Successful",
              ])),
          ),
          n.endSuccess());
      } catch (e) {
        (c.MUSTFIX(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "Delete Secure thread Job failed ",
              "",
            ])),
          JSON.stringify(e),
        ),
          n.endFail("delete_thread_failed"));
      }
    }
    l.deleteThreadImpl = d;
  },
  98,
);
