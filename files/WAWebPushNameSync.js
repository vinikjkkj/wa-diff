__d(
  "WAWebPushNameSync",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
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
      g,
      h = (function (t) {
        function a() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName = o("WASyncdConst").CollectionName.CriticalBlock),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.getVersion = function () {
            return 1;
          }),
          (i.getAction = function () {
            return o("WASyncdConst").Actions.SettingPushName;
          }),
          (i.applyMutations = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "push name sync: start",
                    ])),
                );
                var a = 0,
                  i = 0,
                  l = yield (g || (g = n("Promise"))).all(
                    t.map(
                      (function () {
                        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* (e) {
                            o("WALogger").LOG(
                              s ||
                                (s = babelHelpers.taggedTemplateLiteralLoose([
                                  "push name sync: handle mutation",
                                ])),
                            );
                            try {
                              if (e.operation === "set") {
                                var t,
                                  l = e.value,
                                  _ =
                                    (t = l.pushNameSetting) == null
                                      ? void 0
                                      : t.name;
                                return (
                                  _ ||
                                    (a++,
                                    o(
                                      "WAWebSyncdCriticalBootstrapProcessingApi",
                                    ).logCriticalBootstrapStageIfNecessary(
                                      o(
                                        "WAWebWamEnumBootstrapAppStateDataStageCode",
                                      ).BOOTSTRAP_APP_STATE_DATA_STAGE_CODE
                                        .PUSHNAME_INVALID,
                                    ),
                                    (_ = "")),
                                  o(
                                    "WASendPresenceStatusProtocol",
                                  ).sendPresenceStatusProtocol({ name: _ }),
                                  o(
                                    "WAWebSetPushnameLocallyAction",
                                  ).setPushnameLocally(_),
                                  yield o(
                                    "WAWebSyncdCriticalBootstrapProcessingApi",
                                  ).logCriticalBootstrapStageIfNecessary(
                                    o(
                                      "WAWebWamEnumBootstrapAppStateDataStageCode",
                                    ).BOOTSTRAP_APP_STATE_DATA_STAGE_CODE
                                      .PUSHNAME_APPLIED,
                                  ),
                                  o("WALogger").LOG(
                                    u ||
                                      (u =
                                        babelHelpers.taggedTemplateLiteralLoose(
                                          [
                                            "push name sync: before check critical sync",
                                          ],
                                        )),
                                  ),
                                  r(
                                    "WAWebSyncBootstrap",
                                  ).isSyncDCriticalDataSyncInProcess() &&
                                    (o("WALogger").LOG(
                                      c ||
                                        (c =
                                          babelHelpers.taggedTemplateLiteralLoose(
                                            [
                                              "push name sync: set critical sync done",
                                            ],
                                          )),
                                    ),
                                    yield r(
                                      "WAWebSyncBootstrap",
                                    ).setSyncDCriticalSynced(),
                                    yield r(
                                      "WAWebSyncBootstrap",
                                    ).setSyncDCriticalDataSyncCompleted()),
                                  o("WALogger").LOG(
                                    d ||
                                      (d =
                                        babelHelpers.taggedTemplateLiteralLoose(
                                          [
                                            "push name sync: after check critical sync",
                                          ],
                                        )),
                                  ),
                                  (g || (g = n("Promise"))).resolve({
                                    actionState:
                                      o("WASyncdConst").SyncActionState.Success,
                                  })
                                );
                              }
                              return (
                                o("WALogger").LOG(
                                  m ||
                                    (m =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "push name sync: unsupported",
                                      ])),
                                ),
                                i++,
                                (g || (g = n("Promise"))).resolve({
                                  actionState:
                                    o("WASyncdConst").SyncActionState
                                      .Unsupported,
                                })
                              );
                            } catch (e) {
                              return (
                                o("WALogger").LOG(
                                  p ||
                                    (p =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "push name sync: error",
                                      ])),
                                ),
                                o(
                                  "WAWebSyncdCriticalBootstrapProcessingApi",
                                ).logCriticalBootstrapStageIfNecessary(
                                  o(
                                    "WAWebWamEnumBootstrapAppStateDataStageCode",
                                  ).BOOTSTRAP_APP_STATE_DATA_STAGE_CODE
                                    .PUSHNAME_INVALID,
                                ),
                                {
                                  actionState:
                                    o("WASyncdConst").SyncActionState.Failed,
                                }
                              );
                            }
                          },
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })(),
                    ),
                  );
                return (
                  a > 0 &&
                    o("WALogger").WARN(
                      _ ||
                        (_ = babelHelpers.taggedTemplateLiteralLoose([
                          "push name sync: ",
                          " empty pushnames",
                        ])),
                      a,
                    ),
                  i > 0 &&
                    o("WALogger").WARN(
                      f ||
                        (f = babelHelpers.taggedTemplateLiteralLoose([
                          "push name sync: ",
                          " operations not supported",
                        ])),
                      i,
                    ),
                  l
                );
              },
            );
            function a(e) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          (i.getPushnameMutation = function (t, n) {
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
          a
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      y = new h();
    l.default = y;
  },
  98,
);
