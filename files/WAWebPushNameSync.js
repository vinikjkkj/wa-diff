__d(
  "WAWebPushNameSync",
  [
    "WALogger",
    "WASendPresenceStatusProtocol",
    "WASyncdConst",
    "WAWebProtobufsServerSync.pb",
    "WAWebSetPushnameLocallyAction",
    "WAWebSyncBootstrap",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdCriticalBootstrapProcessingApi",
    "WAWebWamEnumBootstrapAppStateDataStageCode",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName = o("WASyncdConst").CollectionName.CriticalBlock),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.getVersion = function () {
            return 1;
          }),
          (a.getAction = function () {
            return o("WASyncdConst").Actions.SettingPushName;
          }),
          (a.applyMutations = async function (n) {
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "push name sync: start",
                ])),
            );
            var t = 0,
              a = 0,
              i = await Promise.all(
                n.map(async function (e) {
                  o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "push name sync: handle mutation",
                      ])),
                  );
                  try {
                    if (e.operation === "set") {
                      var n,
                        i = e.value,
                        l = (n = i.pushNameSetting) == null ? void 0 : n.name;
                      return (
                        l ||
                          (t++,
                          o(
                            "WAWebSyncdCriticalBootstrapProcessingApi",
                          ).logCriticalBootstrapStageIfNecessary(
                            o("WAWebWamEnumBootstrapAppStateDataStageCode")
                              .BOOTSTRAP_APP_STATE_DATA_STAGE_CODE
                              .PUSHNAME_INVALID,
                          ),
                          (l = "")),
                        o(
                          "WASendPresenceStatusProtocol",
                        ).sendPresenceStatusProtocol({ name: l }),
                        o("WAWebSetPushnameLocallyAction").setPushnameLocally(
                          l,
                        ),
                        await o(
                          "WAWebSyncdCriticalBootstrapProcessingApi",
                        ).logCriticalBootstrapStageIfNecessary(
                          o("WAWebWamEnumBootstrapAppStateDataStageCode")
                            .BOOTSTRAP_APP_STATE_DATA_STAGE_CODE
                            .PUSHNAME_APPLIED,
                        ),
                        o("WALogger").LOG(
                          u ||
                            (u = babelHelpers.taggedTemplateLiteralLoose([
                              "push name sync: before check critical sync",
                            ])),
                        ),
                        r(
                          "WAWebSyncBootstrap",
                        ).isSyncDCriticalDataSyncInProcess() &&
                          (o("WALogger").LOG(
                            c ||
                              (c = babelHelpers.taggedTemplateLiteralLoose([
                                "push name sync: set critical sync done",
                              ])),
                          ),
                          await r(
                            "WAWebSyncBootstrap",
                          ).setSyncDCriticalSynced(),
                          await r(
                            "WAWebSyncBootstrap",
                          ).setSyncDCriticalDataSyncCompleted()),
                        o("WALogger").LOG(
                          d ||
                            (d = babelHelpers.taggedTemplateLiteralLoose([
                              "push name sync: after check critical sync",
                            ])),
                        ),
                        Promise.resolve({
                          actionState:
                            o("WASyncdConst").SyncActionState.Success,
                        })
                      );
                    }
                    return (
                      o("WALogger").LOG(
                        m ||
                          (m = babelHelpers.taggedTemplateLiteralLoose([
                            "push name sync: unsupported",
                          ])),
                      ),
                      a++,
                      Promise.resolve({
                        actionState:
                          o("WASyncdConst").SyncActionState.Unsupported,
                      })
                    );
                  } catch (e) {
                    return (
                      o("WALogger").LOG(
                        p ||
                          (p = babelHelpers.taggedTemplateLiteralLoose([
                            "push name sync: error",
                          ])),
                      ),
                      o(
                        "WAWebSyncdCriticalBootstrapProcessingApi",
                      ).logCriticalBootstrapStageIfNecessary(
                        o("WAWebWamEnumBootstrapAppStateDataStageCode")
                          .BOOTSTRAP_APP_STATE_DATA_STAGE_CODE.PUSHNAME_INVALID,
                      ),
                      { actionState: o("WASyncdConst").SyncActionState.Failed }
                    );
                  }
                }),
              );
            return (
              t > 0 &&
                o("WALogger").WARN(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "push name sync: ",
                      " empty pushnames",
                    ])),
                  t,
                ),
              a > 0 &&
                o("WALogger").WARN(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "push name sync: ",
                      " operations not supported",
                    ])),
                  a,
                ),
              i
            );
          }),
          (a.getPushnameMutation = function (t, n) {
            var e = { pushNameSetting: { name: n } };
            return o("WAWebSyncdActionUtils").buildPendingMutation({
              collection: this.collectionName,
              indexArgs: [],
              value: e,
              version: this.getVersion(),
              operation: o("WAWebProtobufsServerSync.pb")
                .SyncdMutation$SyncdOperation.SET,
              timestamp: t,
              action: this.getAction(),
            });
          }),
          n
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      h = new g();
    l.default = h;
  },
  98,
);
