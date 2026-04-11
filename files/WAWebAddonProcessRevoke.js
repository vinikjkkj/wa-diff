__d(
  "WAWebAddonProcessRevoke",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m;
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new Map(),
            a = [];
          for (var i of o("WAWebAddonConstants").AddonTableMode.members())
            i !== o("WAWebAddonConstants").AddonTableMode.None &&
              a.push(
                o("WAWebAddonDBTable")
                  .addonInternalDBTable.bulkGetByMsgKey(i, e, !1)
                  .then(function (e) {
                    for (var n of e) n != null && t.set(n.id.toString(), n);
                  })
                  .catch(r("WAWebNoop")),
              );
          return (
            yield (m || (m = n("Promise"))).all(a),
            o("WAWebAddonSelectUtils").createAddonSelector(t)
          );
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          var a = [],
            i = function* () {
              var e = l[0],
                n = l[1];
              a.push(
                o("WAWebAddonUpdateDataUtils")
                  .updateAddonsInTableMode(
                    { processMode: t.mode, tableMode: e },
                    n,
                  )
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
          for (var l of r) yield* i();
          var u = yield (m || (m = n("Promise"))).allSettled(a);
          o("WAWebAddonLogUtils").hasSettledWithError(u) &&
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "revoking addons finished with errors",
                  ])),
              )
              .tags("addons", "messaging")
              .sendLogs("revokeAddonMsgs");
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t, n) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
            yield f(e, i),
            yield o("WAWebAddonRetryRequestUtils").replaceSelfMessageTypeRows(
              a,
            ));
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = {
            mode: o("WAWebAddonConstants").AddonProcessMode.SendRevoke,
          };
          try {
            yield h(
              n,
              [
                o(
                  "WAWebAddonProcessRevokeDataUtils",
                ).protocolRevokeToRevokeMsgData(e),
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
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = { mode: o("WAWebAddonConstants").AddonProcessMode.Revoke },
            n = new Set();
          try {
            var r = e.map(function (e) {
                return e.revokeMsgKey;
              }),
              a = yield p(r),
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
            return (yield h(t, i, a), n);
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
        })),
        S.apply(this, arguments)
      );
    }
    ((l.processSentRevokeMsg = C), (l.processRevokeMsgs = v));
  },
  98,
);
