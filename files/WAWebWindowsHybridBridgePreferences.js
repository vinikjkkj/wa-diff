__d(
  "WAWebWindowsHybridBridgePreferences",
  [
    "WAWebODS",
    "WAWebUserPrefsBase",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsLocalStorage",
    "WAWebUserPrefsMultiDevice",
    "WAWebUserPrefsStore",
    "WAWebWindowsHybridBridgeTrace",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "WANativePreferencesRevision",
      s = (function () {
        function t(e) {
          var t = this;
          ((this.$2 = !1),
            (this.$3 = null),
            (this.$4 = new Set()),
            (this.initialize = function () {
              var e, n;
              t.$2 ||
                (t.$4.add(
                  String(
                    o("WAWebUserPrefsKeys").UserPrefs
                      .WindowsIsSystemTrayEnabled,
                  ),
                ),
                t.$4.add(
                  String(o("WAWebUserPrefsKeys").KEYS.SYSTEM_THEME_MODE),
                ),
                t.$4.add(String(o("WAWebUserPrefsKeys").KEYS.THEME)),
                t.$4.add(String(o("WAWebUserPrefsKeys").KEYS.ME_DISPLAY_NAME)),
                t.$4.add(String(o("WAWebUserPrefsKeys").KEYS.LAST_PUSHNAME)),
                t.$4.add(String(o("WAWebUserPrefsKeys").KEYS.LID)),
                t.$4.add(String(o("WAWebUserPrefsKeys").KEYS.LAST_WID_MD)),
                t.$4.add(String(o("WAWebUserPrefsKeys").KEYS.LANG_FROM_PHONE)),
                t.$4.add(
                  String(o("WAWebUserPrefsKeys").UserPrefs.AbpropsWebRefreshId),
                ),
                t.$4.add(
                  String(o("WAWebUserPrefsKeys").KEYS.ABPROPS_REFRESH_ID),
                ),
                t.$4.add(String(o("WAWebUserPrefsKeys").KEYS.ABPROPS)),
                t.$4.add(String(o("WAWebUserPrefsKeys").KEYS.LANG_FROM_USER)),
                t.$4.add(
                  String(
                    o("WAWebUserPrefsKeys").KEYS.GLOBAL_MUTE_CALL_RINGTONE,
                  ),
                ),
                t.$4.add(
                  String(
                    o("WAWebUserPrefsKeys").KEYS.GLOBAL_MUTE_CALL_NOTIFICATIONS,
                  ),
                ),
                t.$4.add(
                  String(
                    o("WAWebUserPrefsKeys").UserPrefs
                      .WindowsNotificationBannerSetting,
                  ),
                ),
                t.$4.add(
                  String(
                    o("WAWebUserPrefsKeys").UserPrefs
                      .WindowsTaskbarNotificationSetting,
                  ),
                ),
                (e = t.$1) == null ||
                  e.addEventListener("everythingRequested", function () {
                    var e = t.$5();
                    t.$3 !== e && ((t.$3 = e), t.$6());
                  }),
                (n = t.$1) == null || n.subscribe(null),
                (t.$2 = !0));
            }),
            (this.$1 = e));
        }
        var n = t.prototype;
        return (
          (n.$5 = function () {
            var t = r("WAWebUserPrefsStore").getUser(e),
              n = 0;
            return (
              typeof t == "number"
                ? (n = t)
                : typeof t == "string" && (n = Number(t) || 0),
              n
            );
          }),
          (n.$7 = function (n) {
            r("WAWebUserPrefsStore").setUser(e, n);
          }),
          (n.handleSettingChange = function (t, n) {
            var e = this;
            if (this.$4.has(t)) {
              var a = this.$5();
              (r("WAWebODS").incr(
                "web.hybrid.bridge.preferences.send.update_local_setting",
              ),
                o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                  {
                    bridge: "preferences",
                    method: "updateLocalSetting",
                    type: "sync",
                  },
                  function () {
                    var r;
                    return (r = e.$1) == null
                      ? void 0
                      : r.updateLocalSetting(t, JSON.stringify(n), ++a);
                  },
                ),
                this.$7(a));
            }
          }),
          (n.$6 = function () {
            var e = this,
              t = this.$5(),
              n = [],
              a = [];
            for (var i of this.$4) {
              var l = r("WAWebUserPrefsStore").getUser(i);
              if (l != null) {
                (n.push(i), a.push(JSON.stringify(l)));
                continue;
              }
              var s = o("WAWebUserPrefsBase").userPreferencesStoreBase.get(i);
              s != null && (n.push(i), a.push(JSON.stringify(s)));
              var u = r("WAWebUserPrefsLocalStorage").getItemFromLocalStorage(
                i,
              );
              u != null && (n.push(i), a.push(JSON.stringify(u)));
            }
            var c = o("WAWebUserPrefsGeneral").getLastMobilePlatform(),
              d = c != null && (c === "smba" || c === "smbi");
            (n.push(String(o("WAWebUserPrefsKeys").UserPrefs.IsSmb)),
              a.push(JSON.stringify(d)));
            var m = o(
              "WAWebUserPrefsMultiDevice",
            ).getIsHostedMeAccountFromLocalStorage();
            (n.push(
              String(o("WAWebUserPrefsKeys").UserPrefs.IsHostedMeAccount),
            ),
              a.push(JSON.stringify(m)),
              r("WAWebODS").incr(
                "web.hybrid.bridge.preferences.send.update_all_local_settings",
              ),
              o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                {
                  bridge: "preferences",
                  method: "updateAllLocalSettings",
                  type: "sync",
                },
                function () {
                  var r;
                  return (r = e.$1) == null
                    ? void 0
                    : r.updateAllLocalSettings(n, a, t);
                },
              ));
          }),
          (n.clean = function () {
            var e = this;
            (r("WAWebODS").incr("web.hybrid.bridge.preferences.send.clean"),
              o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                { bridge: "preferences", method: "clean", type: "sync" },
                function () {
                  var t;
                  return (t = e.$1) == null ? void 0 : t.clean();
                },
              ));
          }),
          t
        );
      })();
    l.WindowsHybridBridgePreferences = s;
  },
  98,
);
