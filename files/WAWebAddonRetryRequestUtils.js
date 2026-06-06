__d(
  "WAWebAddonRetryRequestUtils",
  [
    "WALogger",
    "WANullthrows",
    "WAWebAck",
    "WAWebAddonConstants",
    "WAWebAddonCrossWindowUtils",
    "WAWebAddonDBTable",
    "WAWebAddonPluginProcessor",
    "WAWebAddonProcessMsgsUtils",
    "WAWebAddonSelectUtils",
    "WAWebAddonSortUtils",
    "WAWebModelStorageUtils",
    "WAWebSchemaSelfAddonMessageTypeTable",
    "asyncToGeneratorRuntime",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return (yield o("WAWebSchemaSelfAddonMessageTypeTable")
            .getSelfAddonMessageTypeTable()
            .equals(["msgId"], e.id))[0];
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
          if ((yield u(e.id)) == null) {
            var t = {
              msgId: e.id.id,
              msgType: o("WAWebAddonCrossWindowUtils").getAddonProcessorType(e),
            };
            yield o("WAWebSchemaSelfAddonMessageTypeTable")
              .getSelfAddonMessageTypeTable()
              .createOrReplace(t);
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.length !== 0)
            return o("WAWebModelStorageUtils")
              .getStorage()
              .lock(
                ["self-addon-message-type"],
                (function () {
                  var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (t) {
                      var n = t[0],
                        o = yield n.anyOf(
                          ["msgId"],
                          e.map(function (e) {
                            var t = e[0];
                            return t.id.id;
                          }),
                        ),
                        a = e.map(function (e) {
                          var t = e[0],
                            n = e[1];
                          return { msgId: n.id.id, msgType: t.type };
                        });
                      (yield n.bulkRemove(
                        r("compactMap")(o, function (e) {
                          return e.rowId;
                        }),
                      ),
                        yield n.bulkCreateOrReplace(a));
                    },
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              );
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = yield u(t);
          if (n != null) {
            var a = o("WAWebAddonSelectUtils").getTableModeByMsgType(n.msgType),
              i = yield o("WAWebAddonDBTable").addonInternalDBTable.getByMsgKey(
                a,
                t,
              );
            if (i == null) {
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "msg-retry: can not find addon ",
                    ".",
                  ])),
                t.toString(),
              );
              return;
            }
            if (!o("WAWebAddonCrossWindowUtils").isRealAddonType(i))
              return { msgData: i, selfMsgRow: n };
            var l = i.ack;
            if (l == null || l < o("WAWebAck").ACK.SENT) {
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "msg-retry: can not find addon ",
                      ".",
                    ])),
                  t.toString(),
                )
                .sendLogs("msg-retry");
              return;
            }
            var c = o("WAWebAddonPluginProcessor").getAddonProcessor(i).convert
              .toDualEncryptedMsgData;
            if (c != null) {
              var d = yield o(
                  "WAWebAddonProcessMsgsUtils",
                ).queryAddonParentMsgs(
                  [i],
                  o("WAWebAddonConstants").AddonProcessMode.Send,
                ),
                m = d[0],
                p = d[1],
                _ = o("WAWebAddonSortUtils").collectValidAndOrphanAddons(p, m),
                f = _.validAddons,
                g = f[0],
                h = r("WANullthrows")(
                  m.get(
                    o("WAWebAddonProcessMsgsUtils")
                      .getParentMsgKey(g)
                      .toString(),
                  ),
                );
              return { msgData: yield c(g, h), selfMsgRow: n };
            }
            return { msgData: i, selfMsgRow: n };
          }
        })),
        g.apply(this, arguments)
      );
    }
    ((l.hasSentAddonMsg = u),
      (l.storeSelfMessageTypeRow = d),
      (l.replaceSelfMessageTypeRows = p),
      (l.getSentAddonMsgRecord = f));
  },
  98,
);
