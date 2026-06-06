__d(
  "WAWebSettingsSync",
  [
    "Promise",
    "WALogger",
    "WASyncdConst",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebEnvironment",
    "WAWebPrimaryFeatures",
    "WAWebProtobufSyncAction.pb",
    "WAWebProtobufsServerSync.pb",
    "WAWebSettingsSyncConst",
    "WAWebSettingsSyncHelpers",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdCoreApi",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g;
    function h() {
      return (
        o("WAWebPrimaryFeatures").primaryFeatureEnabled(
          "settings_sync_enabled",
        ) === !0 &&
        o("WAWebABProps").getABPropConfigValue("settings_sync_enabled") === !0
      );
    }
    var y = (function (t) {
        function a() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName = o("WASyncdConst").CollectionName.RegularLow),
            (e.chatJidIndex = 3),
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
            return o("WASyncdConst").Actions.SettingsSync;
          }),
          (i.applyMutations = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this;
                if (!h())
                  return e.map(function () {
                    return {
                      actionState:
                        o("WASyncdConst").SyncActionState.Unsupported,
                    };
                  });
                var r = [],
                  a = new Map();
                for (var i of e) {
                  var l = JSON.stringify(i.indexParts);
                  if (i.operation === "set") {
                    var s,
                      u = a.get(l),
                      c =
                        (s = u == null ? void 0 : u.timestamp) != null ? s : 0;
                    (u == null || i.timestamp > c) && a.set(l, i);
                  }
                }
                var d = e.map(function (e) {
                    var n = a.get(JSON.stringify(e.indexParts));
                    return n == null
                      ? {
                          actionState:
                            o("WASyncdConst").SyncActionState.Malformed,
                        }
                      : n !== e
                        ? {
                            actionState:
                              o("WASyncdConst").SyncActionState.Skipped,
                          }
                        : t.$SettingsSync$p_1(e);
                  }),
                  m = yield (g || (g = n("Promise"))).all(d);
                return (r.push.apply(r, m), r);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.$SettingsSync$p_1 = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var n = t.indexParts,
                  a = t.value;
                if (!n || n.length !== 4)
                  return (
                    o("WALogger").WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[settings-sync] Invalid index structure: ",
                          "",
                        ])),
                      JSON.stringify(n),
                    ),
                    { actionState: o("WASyncdConst").SyncActionState.Malformed }
                  );
                var i = n[0],
                  l = n[1],
                  p = n[2],
                  _ = n[3],
                  f = o(
                    "WAWebProtobufSyncAction.pb",
                  ).SyncActionValue$SettingsSyncAction$SettingPlatform.cast(
                    Number(l),
                  ),
                  g =
                    f ===
                      o("WAWebProtobufSyncAction.pb")
                        .SyncActionValue$SettingsSyncAction$SettingPlatform
                        .WEB ||
                    (r("WAWebEnvironment").isWindows &&
                      f ===
                        o("WAWebProtobufSyncAction.pb")
                          .SyncActionValue$SettingsSyncAction$SettingPlatform
                          .HYBRID);
                if (!g)
                  return {
                    actionState: o("WASyncdConst").SyncActionState.Skipped,
                  };
                var h = o(
                  "WAWebProtobufSyncAction.pb",
                ).SyncActionValue$SettingsSyncAction$SettingKey.cast(Number(p));
                if (h == null)
                  return (
                    o("WALogger").WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[settings-sync] Invalid setting key: ",
                          "",
                        ])),
                      p,
                    ),
                    { actionState: o("WASyncdConst").SyncActionState.Malformed }
                  );
                var y = o("WAWebSettingsSyncConst").SETTING_KEY_TO_FIELD[h];
                if (!y)
                  return (
                    o("WALogger").WARN(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "[settings-sync] Unknown setting key: ",
                          "",
                        ])),
                      h,
                    ),
                    { actionState: o("WASyncdConst").SyncActionState.Malformed }
                  );
                var C = a == null ? void 0 : a.settingsSyncAction;
                if (!C)
                  return (
                    o("WALogger").WARN(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "[settings-sync] Missing settingsSyncAction in value",
                        ])),
                    ),
                    { actionState: o("WASyncdConst").SyncActionState.Malformed }
                  );
                var b = C[y];
                if (b === void 0)
                  return (
                    o("WALogger").WARN(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "[settings-sync] Field ",
                          " not found in settingsSyncAction",
                        ])),
                      y,
                    ),
                    { actionState: o("WASyncdConst").SyncActionState.Malformed }
                  );
                try {
                  yield o("WAWebSettingsSyncHelpers").applySettingUpdate(
                    y,
                    b,
                    _,
                  );
                } catch (e) {
                  return (
                    o("WALogger")
                      .ERROR(
                        m ||
                          (m = babelHelpers.taggedTemplateLiteralLoose([
                            "[settings-sync] Failed to apply mutation",
                          ])),
                      )
                      .catching(r("getErrorSafe")(e)),
                    { actionState: o("WASyncdConst").SyncActionState.Failed }
                  );
                }
                return {
                  actionState: o("WASyncdConst").SyncActionState.Success,
                };
              },
            );
            function a(e) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          (i.getMutation = function (t, n, a, i) {
            var e;
            i === void 0 && (i = "app");
            var l = o("WAWebSettingsSyncConst").SETTING_NAME_TO_KEY[n],
              s = o("WAWebSettingsSyncConst").SETTING_NAME_TO_FIELD[n],
              u = this.$SettingsSync$p_2();
            if (!l || !s)
              throw r("err")("[settings-sync] Unknown setting: " + n);
            return o("WAWebSyncdActionUtils").buildPendingMutation({
              collection: o("WASyncdConst").CollectionName.RegularLow,
              indexArgs: [String(u), String(l), i],
              value: { settingsSyncAction: ((e = {}), (e[s] = a), e) },
              version: this.getVersion(),
              operation: o("WAWebProtobufsServerSync.pb")
                .SyncdMutation$SyncdOperation.SET,
              timestamp: t,
              action: this.getAction(),
            });
          }),
          (i.sendMutation = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, a) {
                if ((a === void 0 && (a = "app"), !!h()))
                  try {
                    o("WALogger").LOG(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "[settings-sync] Sending mutation for ",
                          "",
                        ])),
                      e,
                    );
                    var i = this.getMutation(
                      o("WATimeUtils").unixTimeMs(),
                      e,
                      t,
                      a,
                    );
                    (yield o("WAWebSyncdCoreApi").lockForSync(
                      [],
                      [i],
                      function () {
                        return (g || (g = n("Promise"))).resolve();
                      },
                    ),
                      o("WALogger").LOG(
                        _ ||
                          (_ = babelHelpers.taggedTemplateLiteralLoose([
                            "[settings-sync] Successfully sent mutation for ",
                            "",
                          ])),
                        e,
                      ));
                  } catch (e) {
                    throw (
                      o("WALogger")
                        .ERROR(
                          f ||
                            (f = babelHelpers.taggedTemplateLiteralLoose([
                              "[settings-sync] Failed to send mutation",
                            ])),
                        )
                        .catching(r("getErrorSafe")(e))
                        .tags("settings-sync"),
                      e
                    );
                  }
              },
            );
            function t(t, n, r) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.$SettingsSync$p_2 = function () {
            return r("WAWebEnvironment").isWindows
              ? o("WAWebProtobufSyncAction.pb")
                  .SyncActionValue$SettingsSyncAction$SettingPlatform.HYBRID
              : o("WAWebProtobufSyncAction.pb")
                  .SyncActionValue$SettingsSyncAction$SettingPlatform.WEB;
          }),
          a
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      C = new y();
    l.default = C;
  },
  98,
);
