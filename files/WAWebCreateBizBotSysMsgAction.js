__d(
  "WAWebCreateBizBotSysMsgAction",
  [
    "WAWebBotSystemMsg",
    "WAWebBotTypes",
    "WAWebDBProcessMessage",
    "WAWebMsgModelFromData",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.bizBotSystemMsgType !== o("WAWebBotTypes").BizBotType.BIZ_1P) {
            var t = o("WAWebBotSystemMsg").genBizBot1pDisclosureMessage(e.id);
            (e.msgs.add(o("WAWebMsgModelFromData").msgModelFromMsgData(t)),
              yield o("WAWebDBProcessMessage").storeMessages([t], e.id),
              yield e.updateBizBotSysMsgCreated(
                o("WAWebBotTypes").BizBotType.BIZ_1P,
              ));
          }
        })),
        s.apply(this, arguments)
      );
    }
    l.maybeCreateBizBot1pDisclosureSysMsg = e;
  },
  98,
);
