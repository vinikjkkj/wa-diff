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
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(e) {
      return (
        await o("WAWebSchemaSelfAddonMessageTypeTable")
          .getSelfAddonMessageTypeTable()
          .equals(["msgId"], e.id)
      )[0];
    }
    async function c(e) {
      if ((await u(e.id)) == null) {
        var t = {
          msgId: e.id.id,
          msgType: o("WAWebAddonCrossWindowUtils").getAddonProcessorType(e),
        };
        await o("WAWebSchemaSelfAddonMessageTypeTable")
          .getSelfAddonMessageTypeTable()
          .createOrReplace(t);
      }
    }
    async function d(e) {
      if (e.length !== 0)
        return o("WAWebModelStorageUtils")
          .getStorage()
          .lock(["self-addon-message-type"], async function (t) {
            var n = t[0],
              o = await n.anyOf(
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
            (await n.bulkRemove(
              r("compactMap")(o, function (e) {
                return e.rowId;
              }),
            ),
              await n.bulkCreateOrReplace(a));
          });
    }
    async function m(t) {
      var n = await u(t);
      if (n != null) {
        var a = o("WAWebAddonSelectUtils").getTableModeByMsgType(n.msgType),
          i = await o("WAWebAddonDBTable").addonInternalDBTable.getByMsgKey(
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
          var d = await o("WAWebAddonProcessMsgsUtils").queryAddonParentMsgs(
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
                o("WAWebAddonProcessMsgsUtils").getParentMsgKey(g).toString(),
              ),
            );
          return { msgData: await c(g, h), selfMsgRow: n };
        }
        return { msgData: i, selfMsgRow: n };
      }
    }
    ((l.hasSentAddonMsg = u),
      (l.storeSelfMessageTypeRow = c),
      (l.replaceSelfMessageTypeRows = d),
      (l.getSentAddonMsgRecord = m));
  },
  98,
);
