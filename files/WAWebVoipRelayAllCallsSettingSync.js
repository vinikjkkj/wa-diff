__d(
  "WAWebVoipRelayAllCallsSettingSync",
  [
    "Promise",
    "WALogger",
    "WASyncdConst",
    "WATimeUtils",
    "WAWebBackendApi",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdCoreApi",
    "WAWebSyncdIndexUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = (function (t) {
        function r() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName = o("WASyncdConst").CollectionName.Regular),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(r, t);
        var a = r.prototype;
        return (
          (a.getVersion = function () {
            return 1;
          }),
          (a.getAction = function () {
            return o("WASyncdConst").Actions.VoipRelayAllCalls;
          }),
          (a.applyMutations = function (r) {
            var t = this,
              a = 0,
              i = 0,
              l = 0,
              d = (c || (c = n("Promise"))).all(
                r.map(
                  (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        try {
                          if (e.operation === "set") {
                            var n = e.value,
                              r = n.privacySettingRelayAllCalls;
                            if (!r)
                              return (
                                a++,
                                o("WAWebSyncdIndexUtils").malformedActionValue(
                                  t.collectionName,
                                )
                              );
                            var s = r.isEnabled;
                            return (
                              s == null
                                ? i++
                                : yield o(
                                    "WAWebBackendApi",
                                  ).frontendSendAndReceive(
                                    "setRelayAllCallsToUserPrefs",
                                    { disallowAllP2p: s },
                                  ),
                              {
                                actionState:
                                  o("WASyncdConst").SyncActionState.Success,
                              }
                            );
                          }
                          return (
                            l++,
                            {
                              actionState:
                                o("WASyncdConst").SyncActionState.Unsupported,
                            }
                          );
                        } catch (e) {
                          return {
                            actionState:
                              o("WASyncdConst").SyncActionState.Failed,
                          };
                        }
                      },
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                ),
              );
            return d.then(function (t) {
              return (
                a > 0 &&
                  o("WALogger").WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "voip relay-all-calls setting sync: ",
                        " malformed mutations",
                      ])),
                    a,
                  ),
                i > 0 &&
                  o("WALogger").WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "voip relay-all-calls setting sync: ",
                        " mutations have null value",
                      ])),
                    i,
                  ),
                l > 0 &&
                  o("WALogger").WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "voip relay-all-calls setting sync: ",
                        " operations not supported",
                      ])),
                    l,
                  ),
                t
              );
            });
          }),
          (a.getMutation = function (t, n) {
            return o("WAWebSyncdActionUtils").buildPendingMutation({
              collection: this.collectionName,
              indexArgs: [],
              value: { privacySettingRelayAllCalls: { isEnabled: n } },
              version: this.getVersion(),
              operation: o("WAWebProtobufsServerSync.pb")
                .SyncdMutation$SyncdOperation.SET,
              timestamp: t,
              action: this.getAction(),
            });
          }),
          (a.sendMutation = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                yield o("WAWebSyncdCoreApi").lockForSync(
                  [],
                  [this.getMutation(o("WATimeUtils").unixTimeMs(), e)],
                  function () {
                    return (c || (c = n("Promise"))).resolve();
                  },
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          r
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      m = new d();
    l.default = m;
  },
  98,
);
