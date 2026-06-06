__d(
  "WAWebCreateBizBotSysMsgAction",
  [
    "WAWebBotSystemMsg",
    "WAWebBotTypes",
    "WAWebDBProcessMessage",
    "WAWebMsgModelFromData",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      if (e.bizBotSystemMsgType !== o("WAWebBotTypes").BizBotType.BIZ_1P) {
        var t = o("WAWebBotSystemMsg").genBizBot1pDisclosureMessage(e.id);
        (e.msgs.add(o("WAWebMsgModelFromData").msgModelFromMsgData(t)),
          (e.bizBotSystemMsgType = o("WAWebBotTypes").BizBotType.BIZ_1P),
          await o("WAWebDBProcessMessage").storeMessages([t], e.id),
          await e.updateBizBotSysMsgCreated(
            o("WAWebBotTypes").BizBotType.BIZ_1P,
          ));
      }
    }
    l.maybeCreateBizBot1pDisclosureSysMsg = e;
  },
  98,
);
