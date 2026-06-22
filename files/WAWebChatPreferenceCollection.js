__d(
  "WAWebChatPreferenceCollection",
  [
    "WANullthrows",
    "WAWebBaseCachePolicy",
    "WAWebBaseCollection",
    "WAWebChatPreferenceModel",
    "WAWebChatThemeValue",
    "WAWebUserPrefsKeys",
    "WAWebWallpaper",
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
        r = e;
      return babelHelpers.extends({}, e, {
        wallpaperValue:
          (t = r.wallpaperValue) != null
            ? t
            : o("WAWebChatThemeValue").wallpaperValueFromFlat({
                wallpaper: typeof r.wallpaper == "string" ? r.wallpaper : null,
                showDoodle:
                  typeof r.showDoodle == "boolean" ? r.showDoodle : null,
                stockWallpaperImageId:
                  typeof r.stockWallpaperImageId == "string"
                    ? r.stockWallpaperImageId
                    : null,
              }),
        chatThemeValue:
          (n = r.chatThemeValue) != null
            ? n
            : o("WAWebChatThemeValue").chatThemeValueFromFlat({
                chatThemeId:
                  typeof r.chatThemeId == "string" ? r.chatThemeId : null,
                colorSchemeId:
                  typeof r.colorSchemeId == "string" ? r.colorSchemeId : null,
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
          return r("WANullthrows")(
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
