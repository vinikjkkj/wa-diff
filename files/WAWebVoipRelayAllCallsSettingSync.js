__d(
  "WAWebVoipRelayAllCallsSettingSync",
  [
    "WALogger",
    "WASyncdConst",
    "WATimeUtils",
    "WAWebBackendApi",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdCoreApi",
    "WAWebSyncdIndexUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName = o("WASyncdConst").CollectionName.Regular),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.getVersion = function () {
            return 1;
          }),
          (r.getAction = function () {
            return o("WASyncdConst").Actions.VoipRelayAllCalls;
          }),
          (r.applyMutations = function (n) {
            var t = this,
              r = 0,
              a = 0,
              i = 0,
              l = Promise.all(
                n.map(async function (e) {
                  try {
                    if (e.operation === "set") {
                      var n = e.value,
                        l = n.privacySettingRelayAllCalls;
                      if (!l)
                        return (
                          r++,
                          o("WAWebSyncdIndexUtils").malformedActionValue(
                            t.collectionName,
                          )
                        );
                      var s = l.isEnabled;
                      return (
                        s == null
                          ? a++
                          : await o("WAWebBackendApi").frontendSendAndReceive(
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
                      i++,
                      {
                        actionState:
                          o("WASyncdConst").SyncActionState.Unsupported,
                      }
                    );
                  } catch (e) {
                    return {
                      actionState: o("WASyncdConst").SyncActionState.Failed,
                    };
                  }
                }),
              );
            return l.then(function (t) {
              return (
                r > 0 &&
                  o("WALogger").WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "voip relay-all-calls setting sync: ",
                        " malformed mutations",
                      ])),
                    r,
                  ),
                a > 0 &&
                  o("WALogger").WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "voip relay-all-calls setting sync: ",
                        " mutations have null value",
                      ])),
                    a,
                  ),
                i > 0 &&
                  o("WALogger").WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "voip relay-all-calls setting sync: ",
                        " operations not supported",
                      ])),
                    i,
                  ),
                t
              );
            });
          }),
          (r.getMutation = function (t, n) {
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
          (r.sendMutation = async function (t) {
            await o("WAWebSyncdCoreApi").lockForSync(
              [],
              [this.getMutation(o("WATimeUtils").unixTimeMs(), t)],
              function () {
                return Promise.resolve();
              },
            );
          }),
          n
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      d = new c();
    l.default = d;
  },
  98,
);
