__d(
  "WAWebAddonProcessRevoke",
  [
    "WALogger",
    "WANullthrows",
    "WAWebAddonConstants",
    "WAWebAddonDBTable",
    "WAWebAddonGatingUtils",
    "WAWebAddonLogUtils",
    "WAWebAddonProcessRevokeDataUtils",
    "WAWebAddonRetryRequestUtils",
    "WAWebAddonSelectUtils",
    "WAWebAddonUpdateDataUtils",
    "WAWebMsgGetters",
    "WAWebNoop",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    async function m(e) {
      var t = new Map(),
        n = [];
      for (var a of o("WAWebAddonConstants").AddonTableMode.members())
        a !== o("WAWebAddonConstants").AddonTableMode.None &&
          n.push(
            o("WAWebAddonDBTable")
              .addonInternalDBTable.bulkGetByMsgKey(a, e, !1)
              .then(function (e) {
                for (var n of e) n != null && t.set(n.id.toString(), n);
              })
              .catch(r("WAWebNoop")),
          );
      return (
        await Promise.all(n),
        o("WAWebAddonSelectUtils").createAddonSelector(t)
      );
    }
    async function p(t, n) {
      var r = [],
        a = async function () {
          var e = i[0],
            n = i[1];
          r.push(
            o("WAWebAddonUpdateDataUtils")
              .updateAddonsInTableMode({ processMode: t.mode, tableMode: e }, n)
              .catch(function (t) {
                throw (
                  o("WALogger").WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "storeRevokesForTableMode for ",
                        ": ",
                        "",
                      ])),
                    e,
                    t,
                  ),
                  t
                );
              }),
          );
        };
      for (var i of n) await a();
      var l = await Promise.allSettled(r);
      o("WAWebAddonLogUtils").hasSettledWithError(l) &&
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "revoking addons finished with errors",
              ])),
          )
          .tags("addons", "messaging")
          .sendLogs("revokeAddonMsgs");
    }
    async function _(e, t, n) {
      var a = [],
        i = new Map();
      for (var l of t) {
        var s = n.get(r("WANullthrows")(l.protocolMessageKey));
        if (o("WAWebAddonGatingUtils").isUnifiedInfraEnabled(s)) {
          var c = o("WAWebAddonSelectUtils").getTableModeByMsgType(s.type);
          i.has(c) || i.set(c, { add: [], remove: [] });
          var d = r("WANullthrows")(i.get(c));
          (l.id.equals(s.id) || d.remove.push(s),
            d.add.push(l),
            o("WAWebUserPrefsMeUser").isMeAccount(
              o("WAWebMsgGetters").getFrom(s),
            ) && a.push([s, l]));
        }
      }
      (o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "[addon-infra]: processRevokeMsgs ",
            " addon(s)",
          ])),
        i.size,
      ),
        await p(e, i),
        await o("WAWebAddonRetryRequestUtils").replaceSelfMessageTypeRows(a));
    }
    async function f(e, t) {
      var n = { mode: o("WAWebAddonConstants").AddonProcessMode.SendRevoke };
      try {
        await _(
          n,
          [
            o("WAWebAddonProcessRevokeDataUtils").protocolRevokeToRevokeMsgData(
              e,
            ),
          ],
          o("WAWebAddonSelectUtils").createAddonSelector(
            new Map([[t.id.toString(), t]]),
          ),
        );
      } catch (n) {
        throw (
          o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "process addon revoke ",
                  ", ",
                  ": ",
                  "",
                ])),
              e.id,
              t.id,
              n,
            )
            .tags("addons", "messaging")
            .sendLogs("processSentRevokeMsg"),
          n
        );
      }
    }
    async function g(e) {
      var t = { mode: o("WAWebAddonConstants").AddonProcessMode.Revoke },
        n = new Set();
      try {
        var r = e.map(function (e) {
            return e.revokeMsgKey;
          }),
          a = await m(r),
          i = [];
        for (var l of e) {
          var s = l.revokeMsgKey;
          if (!a.has(s)) {
            n.add(s);
            continue;
          }
          var u = a.get(s),
            c = o(
              "WAWebAddonProcessRevokeDataUtils",
            ).revokeMsgInfoToRevokeMsgData(l, u);
          i.push(c);
        }
        return (await _(t, i, a), n);
      } catch (e) {
        throw (
          o("WALogger")
            .ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "process addon revokes: ",
                  "",
                ])),
              e,
            )
            .tags("addons", "messaging")
            .sendLogs("processAddonRevokes"),
          e
        );
      }
    }
    ((l.processSentRevokeMsg = f), (l.processRevokeMsgs = g));
  },
  98,
);
