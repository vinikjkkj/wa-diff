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
    "cr:17638",
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
      b,
      v = (e = n("cr:17638")) != null ? e : {},
      S = v.isWindowsBackgroundRun,
      R = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.collectionName =
              o("WAWebSyncdConst").CollectionName.CriticalBlock),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var a = t.prototype;
        return (
          (a.getVersion = function () {
            return 1;
          }),
          (a.getAction = function () {
            return o("WAWebSyncdConst").Actions.SettingPushName;
          }),
          (a.applyMutations = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t =
                  r("WAWebSyncBootstrap").isSyncDCriticalDataSyncInProcess();
                (t &&
                  (r("WAWebSyncBootstrap").recordPushNameMutationTrace ==
                    null ||
                    r("WAWebSyncBootstrap").recordPushNameMutationTrace(
                      0,
                      0,
                      e.length,
                      0,
                      0,
                    )),
                  o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "push name sync: start",
                      ])),
                  ));
                var a = 0,
                  i = 0,
                  l = yield (b || (b = n("Promise"))).all(
                    e.map(
                      (function () {
                        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* (e) {
                            o("WALogger").LOG(
                              u ||
                                (u = babelHelpers.taggedTemplateLiteralLoose([
                                  "push name sync: handle mutation",
                                ])),
                            );
                            try {
                              if (e.operation === "set") {
                                var t,
                                  l = e.value,
                                  s =
                                    (t = l.pushNameSetting) == null
                                      ? void 0
                                      : t.name;
                                return (
                                  (s == null || s === "") &&
                                    (a++,
                                    yield o(
                                      "WAWebSyncdCriticalBootstrapProcessingApi",
                                    ).logCriticalBootstrapStageIfNecessary(
                                      o(
                                        "WAWebWamEnumBootstrapAppStateDataStageCode",
                                      ).BOOTSTRAP_APP_STATE_DATA_STAGE_CODE
                                        .PUSHNAME_INVALID,
                                    ),
                                    (s = "")),
                                  (S == null ? void 0 : S()) !== !0 &&
                                    o(
                                      "WASendPresenceStatusProtocol",
                                    ).sendPresenceStatusProtocol({ name: s }),
                                  o(
                                    "WAWebSetPushnameLocallyAction",
                                  ).setPushnameLocally(s),
                                  yield o(
                                    "WAWebSyncdCriticalBootstrapProcessingApi",
                                  ).logCriticalBootstrapStageIfNecessary(
                                    o(
                                      "WAWebWamEnumBootstrapAppStateDataStageCode",
                                    ).BOOTSTRAP_APP_STATE_DATA_STAGE_CODE
                                      .PUSHNAME_APPLIED,
                                  ),
                                  o("WALogger").LOG(
                                    c ||
                                      (c =
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
                                      d ||
                                        (d =
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
                                      m ||
                                        (m =
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
                                    p ||
                                      (p =
                                        babelHelpers.taggedTemplateLiteralLoose(
                                          [
                                            "push name sync: after check critical sync",
                                          ],
                                        )),
                                  ),
                                  (b || (b = n("Promise"))).resolve({
                                    actionState:
                                      o("WAWebSyncdConst").SyncActionState
                                        .Success,
                                  })
                                );
                              }
                              return (
                                o("WALogger").LOG(
                                  _ ||
                                    (_ =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "push name sync: unsupported",
                                      ])),
                                ),
                                i++,
                                (b || (b = n("Promise"))).resolve({
                                  actionState:
                                    o("WAWebSyncdConst").SyncActionState
                                      .Unsupported,
                                })
                              );
                            } catch (e) {
                              return (
                                o("WALogger").LOG(
                                  f ||
                                    (f =
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
                                        g ||
                                          (g =
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
                (a > 0 &&
                  o("WALogger").WARN(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "push name sync: ",
                        " empty pushnames",
                      ])),
                    a,
                  ),
                  i > 0 &&
                    o("WALogger").WARN(
                      y ||
                        (y = babelHelpers.taggedTemplateLiteralLoose([
                          "push name sync: ",
                          " operations not supported",
                        ])),
                      i,
                    ));
                var v = l.filter(function (e) {
                    return (
                      e.actionState ===
                      o("WAWebSyncdConst").SyncActionState.Success
                    );
                  }).length,
                  R = l.filter(function (e) {
                    return (
                      e.actionState ===
                      o("WAWebSyncdConst").SyncActionState.Failed
                    );
                  }).length;
                return (
                  t &&
                    (r("WAWebSyncBootstrap").recordPushNameMutationTrace ==
                      null ||
                      r("WAWebSyncBootstrap").recordPushNameMutationTrace(
                        0,
                        0,
                        0,
                        v,
                        R,
                      )),
                  o("WALogger").LOG(
                    C ||
                      (C = babelHelpers.taggedTemplateLiteralLoose([
                        "push name sync: handler completed: mutations=",
                        ", success=",
                        ", failed=",
                        ", unsupported=",
                        ", emptyPushnames=",
                        "",
                      ])),
                    e.length,
                    v,
                    R,
                    i,
                    a,
                  ),
                  l
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
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
          t
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      L = new R();
    l.default = L;
  },
  98,
);
