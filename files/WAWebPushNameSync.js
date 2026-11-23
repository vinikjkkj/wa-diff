__d(
  "WAWebPushNameSync",
  [
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
      b = (e = n("cr:17638")) != null ? e : {},
      v = b.isWindowsBackgroundRun,
      S = (function (e) {
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
        var n = t.prototype;
        return (
          (n.getVersion = function () {
            return 1;
          }),
          (n.getAction = function () {
            return o("WAWebSyncdConst").Actions.SettingPushName;
          }),
          (n.applyMutations = async function (t) {
            var e = r("WAWebSyncBootstrap").isSyncDCriticalDataSyncInProcess();
            (e &&
              (r("WAWebSyncBootstrap").recordPushNameMutationTrace == null ||
                r("WAWebSyncBootstrap").recordPushNameMutationTrace(
                  0,
                  0,
                  t.length,
                  0,
                  0,
                )),
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "push name sync: start",
                  ])),
              ));
            var n = 0,
              a = 0,
              i = await Promise.all(
                t.map(async function (e) {
                  o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "push name sync: handle mutation",
                      ])),
                  );
                  try {
                    if (e.operation === "set") {
                      var t,
                        i = e.value,
                        l = (t = i.pushNameSetting) == null ? void 0 : t.name;
                      return (
                        (l == null || l === "") &&
                          (n++,
                          await o(
                            "WAWebSyncdCriticalBootstrapProcessingApi",
                          ).logCriticalBootstrapStageIfNecessary(
                            o("WAWebWamEnumBootstrapAppStateDataStageCode")
                              .BOOTSTRAP_APP_STATE_DATA_STAGE_CODE
                              .PUSHNAME_INVALID,
                          ),
                          (l = "")),
                        (v == null ? void 0 : v()) !== !0 &&
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
                          c ||
                            (c = babelHelpers.taggedTemplateLiteralLoose([
                              "push name sync: before check critical sync",
                            ])),
                        ),
                        r(
                          "WAWebSyncBootstrap",
                        ).isSyncDCriticalDataSyncInProcess() &&
                          (o("WALogger").LOG(
                            d ||
                              (d = babelHelpers.taggedTemplateLiteralLoose([
                                "push name sync: set critical sync done",
                              ])),
                          ),
                          await r(
                            "WAWebSyncBootstrap",
                          ).setSyncDCriticalSynced(),
                          o("WALogger").LOG(
                            m ||
                              (m = babelHelpers.taggedTemplateLiteralLoose([
                                "push name sync: after set critical sync done",
                              ])),
                          ),
                          r(
                            "WAWebSyncBootstrap",
                          ).setSyncDCriticalDataSyncCompleted()),
                        o("WALogger").LOG(
                          p ||
                            (p = babelHelpers.taggedTemplateLiteralLoose([
                              "push name sync: after check critical sync",
                            ])),
                        ),
                        Promise.resolve({
                          actionState:
                            o("WAWebSyncdConst").SyncActionState.Success,
                        })
                      );
                    }
                    return (
                      o("WALogger").LOG(
                        _ ||
                          (_ = babelHelpers.taggedTemplateLiteralLoose([
                            "push name sync: unsupported",
                          ])),
                      ),
                      a++,
                      Promise.resolve({
                        actionState:
                          o("WAWebSyncdConst").SyncActionState.Unsupported,
                      })
                    );
                  } catch (e) {
                    return (
                      o("WALogger").LOG(
                        f ||
                          (f = babelHelpers.taggedTemplateLiteralLoose([
                            "push name sync: error",
                          ])),
                      ),
                      o("WAWebSyncdCriticalBootstrapProcessingApi")
                        .logCriticalBootstrapStageIfNecessary(
                          o("WAWebWamEnumBootstrapAppStateDataStageCode")
                            .BOOTSTRAP_APP_STATE_DATA_STAGE_CODE
                            .PUSHNAME_INVALID,
                        )
                        .catch(function () {
                          o("WALogger")
                            .ERROR(
                              g ||
                                (g = babelHelpers.taggedTemplateLiteralLoose([
                                  "push name sync: bootstrap stage log failed",
                                ])),
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
                }),
              );
            (n > 0 &&
              o("WALogger").WARN(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "push name sync: ",
                    " empty pushnames",
                  ])),
                n,
              ),
              a > 0 &&
                o("WALogger").WARN(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "push name sync: ",
                      " operations not supported",
                    ])),
                  a,
                ));
            var l = i.filter(function (e) {
                return (
                  e.actionState === o("WAWebSyncdConst").SyncActionState.Success
                );
              }).length,
              b = i.filter(function (e) {
                return (
                  e.actionState === o("WAWebSyncdConst").SyncActionState.Failed
                );
              }).length;
            return (
              e &&
                (r("WAWebSyncBootstrap").recordPushNameMutationTrace == null ||
                  r("WAWebSyncBootstrap").recordPushNameMutationTrace(
                    0,
                    0,
                    0,
                    l,
                    b,
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
                t.length,
                l,
                b,
                a,
                n,
              ),
              i
            );
          }),
          (n.getPushnameMutation = function (t, n) {
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
      R = new S();
    l.default = R;
  },
  98,
);
