__d(
  "WAWebChatPreferenceCollection",
  [
    "WAWebBaseCachePolicy",
    "WAWebBaseCollection",
    "WAWebChatPreferenceModel",
    "WAWebChatThemeValue",
    "WAWebUserPrefsKeys",
    "WAWebWallpaper",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
      id: o("WAWebChatPreferenceModel").DEFAULT_PREFERENCE,
      wallpaper: o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER,
      saveToCameraRoll: !0,
      showDoodle: !0,
      spellcheck: !0,
      transformTextEmoji: !0,
      enterIsSend: !0,
      autoplayAnimatedImages: !0,
      hdMediaEnabled: !1,
      wallpaperValue: { type: "default", isDoodleEnabled: !0 },
      chatThemeValue: { chatThemeId: null, colorSchemeId: null },
    };
    function s(e) {
      var t,
        n,
        r,
        a = e;
      return babelHelpers.extends({}, e, {
        wallpaperValue:
          (t =
            (n = o("WAWebChatThemeValue").migrateStoredSolidWallpaper(
              a.wallpaperValue,
            )) != null
              ? n
              : a.wallpaperValue) != null
            ? t
            : o("WAWebChatThemeValue").wallpaperValueFromFlat({
                wallpaper: typeof a.wallpaper == "string" ? a.wallpaper : null,
                showDoodle:
                  typeof a.showDoodle == "boolean" ? a.showDoodle : null,
                stockWallpaperImageId:
                  typeof a.stockWallpaperImageId == "string"
                    ? a.stockWallpaperImageId
                    : null,
              }),
        chatThemeValue:
          (r = a.chatThemeValue) != null
            ? r
            : o("WAWebChatThemeValue").chatThemeValueFromFlat({
                chatThemeId:
                  typeof a.chatThemeId == "string" ? a.chatThemeId : null,
                colorSchemeId:
                  typeof a.colorSchemeId == "string" ? a.colorSchemeId : null,
              }),
      });
    }
    var u = (function (t) {
      function n() {
        return t.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(n, t);
      var a = n.prototype;
      return (
        (a.initializeFromCache = function (n) {
          var t = (n || []).map(s);
          this.add([e].concat(t), { merge: !0 });
        }),
        (a.get = function (n) {
          return (
            t.prototype.get.call(this, n) ||
            t.prototype.get.call(
              this,
              o("WAWebChatPreferenceModel").DEFAULT_PREFERENCE,
            )
          );
        }),
        (a.getDefault = function () {
          return r("nullthrows")(
            t.prototype.get.call(
              this,
              o("WAWebChatPreferenceModel").DEFAULT_PREFERENCE,
            ),
          );
        }),
        (a.delete = function () {
          (t.prototype.delete.call(this), this.add(e));
        }),
        n
      );
    })(o("WAWebBaseCollection").BaseCollection);
    ((u.model = o("WAWebChatPreferenceModel").ChatPreference),
      (u.cachePolicy = {
        id: o("WAWebUserPrefsKeys").COLLECTIONS_KEYS.CHAT_PREFERENCE_COLLECTION,
        policy: o("WAWebBaseCachePolicy").CACHE_POLICY.LOAD,
        delay: 1e3,
      }));
    var c = new u();
    l.default = c;
  },
  98,
);
