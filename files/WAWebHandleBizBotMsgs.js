__d(
  "WAWebHandleBizBotMsgs",
  [
    "Promise",
    "WALogger",
    "WAWebBotSystemMsg",
    "WAWebBotTypes",
    "WAWebModelStorageUtils",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebSchemaChat",
    "WAWebWidFactory",
    "WAWebWorkerSafeBackendApi",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          var a = new Map(),
            i = t.toJid();
          r.forEach(function (e) {
            i != null && !a.has(i) && e.bizBotType && a.set(i, e.bizBotType);
          });
          var l = Array.from(a.keys()),
            u = yield d(l),
            c = [],
            m = [];
          for (var p of a.entries()) {
            var _,
              f = p[0],
              g = p[1],
              h = (_ = u.get(f)) == null ? void 0 : _.bizBotSystemMsgType;
            g === o("WAWebBotTypes").BizBotType.BIZ_1P &&
            h !== o("WAWebBotTypes").BizBotType.BIZ_1P
              ? (c.push(
                  o("WAWebBotSystemMsg").genBizBot1pDisclosureMessage(
                    o("WAWebWidFactory").createWid(f),
                  ),
                ),
                m.push({
                  id: f,
                  bizBotSystemMsgType: o("WAWebBotTypes").BizBotType.BIZ_1P,
                }))
              : g === o("WAWebBotTypes").BizBotType.BIZ_3P &&
                h !== o("WAWebBotTypes").BizBotType.BIZ_3P &&
                (c.push(
                  o("WAWebBotSystemMsg").genBizBot3pDisclosureMessage(
                    o("WAWebWidFactory").createWid(f),
                  ),
                ),
                m.push({
                  id: f,
                  bizBotSystemMsgType: o("WAWebBotTypes").BizBotType.BIZ_3P,
                }));
          }
          return c.length
            ? (o("WALogger")
                .LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "handleBizBotMsgs: bulkCreateOrMerge",
                    ])),
                )
                .tags("missing-lid"),
              yield o("WAWebModelStorageUtils")
                .getStorage()
                .lock(
                  ["chat"],
                  (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        var t = e[0];
                        yield (s || (s = n("Promise"))).all([
                          t.bulkMergeOnly(m),
                        ]);
                      },
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                ),
              c)
            : [];
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!o("WAWebRuntimeEnvironmentUtils").isWorker())
            return o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
              "getBizBotData",
              { chatIds: e.map(o("WAWebWidFactory").createWid) },
            );
          var t = new Map(),
            n = yield o("WAWebSchemaChat").getChatTable().bulkGet(e);
          return (
            n.map(function (e) {
              e && t.set(e.id, { bizBotSystemMsgType: e.bizBotSystemMsgType });
            }),
            t
          );
        })),
        m.apply(this, arguments)
      );
    }
    l.handleBizBotMsgs = u;
  },
  98,
);
