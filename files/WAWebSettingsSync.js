__d(
  "WAWebSettingsSync",
  [
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
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f;
    function g() {
      return (
        o("WAWebPrimaryFeatures").primaryFeatureEnabled(
          "settings_sync_enabled",
        ) === !0 &&
        o("WAWebABProps").getABPropConfigValue("settings_sync_enabled") === !0
      );
    }
    var h = (function (t) {
        function n() {
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
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.getVersion = function () {
            return 1;
          }),
          (a.getAction = function () {
            return o("WASyncdConst").Actions.SettingsSync;
          }),
          (a.applyMutations = async function (t) {
            var e = this;
            if (!g())
              return t.map(function () {
                return {
                  actionState: o("WASyncdConst").SyncActionState.Unsupported,
                };
              });
            var n = [],
              r = new Map();
            for (var a of t) {
              var i = JSON.stringify(a.indexParts);
              if (a.operation === "set") {
                var l,
                  s = r.get(i),
                  u = (l = s == null ? void 0 : s.timestamp) != null ? l : 0;
                (s == null || a.timestamp > u) && r.set(i, a);
              }
            }
            var c = t.map(function (t) {
                var n = r.get(JSON.stringify(t.indexParts));
                return n == null
                  ? { actionState: o("WASyncdConst").SyncActionState.Malformed }
                  : n !== t
                    ? { actionState: o("WASyncdConst").SyncActionState.Skipped }
                    : e.$SettingsSync$p_1(t);
              }),
              d = await Promise.all(c);
            return (n.push.apply(n, d), n);
          }),
          (a.$SettingsSync$p_1 = async function (n) {
            var t = n.indexParts,
              a = n.value;
            if (!t || t.length !== 4)
              return (
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[settings-sync] Invalid index structure: ",
                      "",
                    ])),
                  JSON.stringify(t),
                ),
                { actionState: o("WASyncdConst").SyncActionState.Malformed }
              );
            var i = t[0],
              l = t[1],
              p = t[2],
              _ = t[3],
              f = o(
                "WAWebProtobufSyncAction.pb",
              ).SyncActionValue$SettingsSyncAction$SettingPlatform.cast(
                Number(l),
              ),
              g =
                f ===
                  o("WAWebProtobufSyncAction.pb")
                    .SyncActionValue$SettingsSyncAction$SettingPlatform.WEB ||
                (r("WAWebEnvironment").isWindows &&
                  f ===
                    o("WAWebProtobufSyncAction.pb")
                      .SyncActionValue$SettingsSyncAction$SettingPlatform
                      .HYBRID);
            if (!g)
              return { actionState: o("WASyncdConst").SyncActionState.Skipped };
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
              await o("WAWebSettingsSyncHelpers").applySettingUpdate(y, b, _);
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
            return { actionState: o("WASyncdConst").SyncActionState.Success };
          }),
          (a.getMutation = function (t, n, a, i) {
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
          (a.sendMutation = async function (t, n, a) {
            if ((a === void 0 && (a = "app"), !!g()))
              try {
                o("WALogger").LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "[settings-sync] Sending mutation for ",
                      "",
                    ])),
                  t,
                );
                var e = this.getMutation(
                  o("WATimeUtils").unixTimeMs(),
                  t,
                  n,
                  a,
                );
                (await o("WAWebSyncdCoreApi").lockForSync([], [e], function () {
                  return Promise.resolve();
                }),
                  o("WALogger").LOG(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "[settings-sync] Successfully sent mutation for ",
                        "",
                      ])),
                    t,
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
          }),
          (a.$SettingsSync$p_2 = function () {
            return r("WAWebEnvironment").isWindows
              ? o("WAWebProtobufSyncAction.pb")
                  .SyncActionValue$SettingsSyncAction$SettingPlatform.HYBRID
              : o("WAWebProtobufSyncAction.pb")
                  .SyncActionValue$SettingsSyncAction$SettingPlatform.WEB;
          }),
          n
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      y = new h();
    l.default = y;
  },
  98,
);
