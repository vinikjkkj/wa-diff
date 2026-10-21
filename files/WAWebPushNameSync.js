__d(
  "WAWebPushNameSync",
  [
    "Promise",
    "WALogger",
    "WASendPresenceStatusProtocol",
    "WAWebProtobufsServerSync.pb",
    "WAWebSetPushnameLocallyAction",
    "WAWebSyncBootstrap",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
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
      h,
      y,
      C,
      b = (function (t) {
        function a() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName =
              o("WAWebSyncdConst").CollectionName.CriticalBlock),
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
            return o("WAWebSyncdConst").Actions.SettingPushName;
          }),
          (i.applyMutations = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var a =
                  r("WAWebSyncBootstrap").isSyncDCriticalDataSyncInProcess();
                (a &&
                  (r("WAWebSyncBootstrap").recordPushNameMutationTrace ==
                    null ||
                    r("WAWebSyncBootstrap").recordPushNameMutationTrace(
                      0,
                      0,
                      t.length,
                      0,
                      0,
                    )),
                  o("WALogger").LOG(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "push name sync: start",
                      ])),
                  ));
                var i = 0,
                  l = 0,
                  b = yield (C || (C = n("Promise"))).all(
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
                                  a = e.value,
                                  g =
                                    (t = a.pushNameSetting) == null
                                      ? void 0
                                      : t.name;
                                return (
                                  (g == null || g === "") &&
                                    (i++,
                                    yield o(
                                      "WAWebSyncdCriticalBootstrapProcessingApi",
                                    ).logCriticalBootstrapStageIfNecessary(
                                      o(
                                        "WAWebWamEnumBootstrapAppStateDataStageCode",
                                      ).BOOTSTRAP_APP_STATE_DATA_STAGE_CODE
                                        .PUSHNAME_INVALID,
                                    ),
                                    (g = "")),
                                  o(
                                    "WASendPresenceStatusProtocol",
                                  ).sendPresenceStatusProtocol({ name: g }),
                                  o(
                                    "WAWebSetPushnameLocallyAction",
                                  ).setPushnameLocally(g),
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
                                    o("WALogger").LOG(
                                      d ||
                                        (d =
                                          babelHelpers.taggedTemplateLiteralLoose(
                                            [
                                              "push name sync: after set critical sync done",
                                            ],
                                          )),
                                    ),
                                    r(
                                      "WAWebSyncBootstrap",
                                    ).setSyncDCriticalDataSyncCompleted()),
                                  o("WALogger").LOG(
                                    m ||
                                      (m =
                                        babelHelpers.taggedTemplateLiteralLoose(
                                          [
                                            "push name sync: after check critical sync",
                                          ],
                                        )),
                                  ),
                                  (C || (C = n("Promise"))).resolve({
                                    actionState:
                                      o("WAWebSyncdConst").SyncActionState
                                        .Success,
                                  })
                                );
                              }
                              return (
                                o("WALogger").LOG(
                                  p ||
                                    (p =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "push name sync: unsupported",
                                      ])),
                                ),
                                l++,
                                (C || (C = n("Promise"))).resolve({
                                  actionState:
                                    o("WAWebSyncdConst").SyncActionState
                                      .Unsupported,
                                })
                              );
                            } catch (e) {
                              return (
                                o("WALogger").LOG(
                                  _ ||
                                    (_ =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "push name sync: error",
                                      ])),
                                ),
                                o("WAWebSyncdCriticalBootstrapProcessingApi")
                                  .logCriticalBootstrapStageIfNecessary(
                                    o(
                                      "WAWebWamEnumBootstrapAppStateDataStageCode",
                                    ).BOOTSTRAP_APP_STATE_DATA_STAGE_CODE
                                      .PUSHNAME_INVALID,
                                  )
                                  .catch(function () {
                                    o("WALogger")
                                      .ERROR(
                                        f ||
                                          (f =
                                            babelHelpers.taggedTemplateLiteralLoose(
                                              [
                                                "push name sync: bootstrap stage log failed",
                                              ],
                                            )),
                                      )
                                      .sendLogs(
                                        "push-name-sync-bootstrap-stage-log-failed",
                                      );
                                  }),
                                {
                                  actionState:
                                    o("WAWebSyncdConst").SyncActionState.Failed,
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
                (i > 0 &&
                  o("WALogger").WARN(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "push name sync: ",
                        " empty pushnames",
                      ])),
                    i,
                  ),
                  l > 0 &&
                    o("WALogger").WARN(
                      h ||
                        (h = babelHelpers.taggedTemplateLiteralLoose([
                          "push name sync: ",
                          " operations not supported",
                        ])),
                      l,
                    ));
                var v = b.filter(function (e) {
                    return (
                      e.actionState ===
                      o("WAWebSyncdConst").SyncActionState.Success
                    );
                  }).length,
                  S = b.filter(function (e) {
                    return (
                      e.actionState ===
                      o("WAWebSyncdConst").SyncActionState.Failed
                    );
                  }).length;
                return (
                  a &&
                    (r("WAWebSyncBootstrap").recordPushNameMutationTrace ==
                      null ||
                      r("WAWebSyncBootstrap").recordPushNameMutationTrace(
                        0,
                        0,
                        0,
                        v,
                        S,
                      )),
                  o("WALogger").LOG(
                    y ||
                      (y = babelHelpers.taggedTemplateLiteralLoose([
                        "push name sync: handler completed: mutations=",
                        ", success=",
                        ", failed=",
                        ", unsupported=",
                        ", emptyPushnames=",
                        "",
                      ])),
                    t.length,
                    v,
                    S,
                    l,
                    i,
                  ),
                  b
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
      v = new b();
    l.default = v;
  },
  98,
);
