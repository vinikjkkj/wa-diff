__d(
  "WAWebHandleBizBotMsgs",
  [
    "WALogger",
    "WAWebBotSystemMsg",
    "WAWebBotTypes",
    "WAWebModelStorageUtils",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebSchemaChat",
    "WAWebWidFactory",
    "WAWebWorkerSafeBackendApi",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t, n) {
      var r = new Map(),
        a = t.toJid();
      n.forEach(function (e) {
        a != null && !r.has(a) && e.bizBotType && r.set(a, e.bizBotType);
      });
      var i = Array.from(r.keys()),
        l = await u(i),
        s = [],
        c = [];
      for (var d of r.entries()) {
        var m,
          p = d[0],
          _ = d[1],
          f = (m = l.get(p)) == null ? void 0 : m.bizBotSystemMsgType;
        _ === o("WAWebBotTypes").BizBotType.BIZ_1P &&
        f !== o("WAWebBotTypes").BizBotType.BIZ_1P
          ? (s.push(
              o("WAWebBotSystemMsg").genBizBot1pDisclosureMessage(
                o("WAWebWidFactory").createWid(p),
              ),
            ),
            c.push({
              id: p,
              bizBotSystemMsgType: o("WAWebBotTypes").BizBotType.BIZ_1P,
            }))
          : _ === o("WAWebBotTypes").BizBotType.BIZ_3P &&
            f !== o("WAWebBotTypes").BizBotType.BIZ_3P &&
            (s.push(
              o("WAWebBotSystemMsg").genBizBot3pDisclosureMessage(
                o("WAWebWidFactory").createWid(p),
              ),
            ),
            c.push({
              id: p,
              bizBotSystemMsgType: o("WAWebBotTypes").BizBotType.BIZ_3P,
            }));
      }
      return s.length
        ? (o("WALogger")
            .LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "handleBizBotMsgs: bulkCreateOrMerge",
                ])),
            )
            .tags("missing-lid"),
          await o("WAWebModelStorageUtils")
            .getStorage()
            .lock(["chat"], async function (e) {
              var t = e[0];
              await Promise.all([t.bulkMergeOnly(c)]);
            }),
          s)
        : [];
    }
    async function u(e) {
      if (!o("WAWebRuntimeEnvironmentUtils").isWorker())
        return o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
          "getBizBotData",
          { chatIds: e.map(o("WAWebWidFactory").createWid) },
        );
      var t = new Map(),
        n = await o("WAWebSchemaChat").getChatTable().bulkGet(e);
      return (
        n.map(function (e) {
          e && t.set(e.id, { bizBotSystemMsgType: e.bizBotSystemMsgType });
        }),
        t
      );
    }
    l.handleBizBotMsgs = s;
  },
  98,
);
