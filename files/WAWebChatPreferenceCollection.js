__d(
  "WAWebChatPreferenceCollection",
  [
    "WANullthrows",
    "WAWebBaseCachePolicy",
    "WAWebBaseCollection",
    "WAWebChatPreferenceModel",
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
        showExpandedComposer: !1,
        autoplayAnimatedImages: !0,
        hdMediaEnabled: !1,
      },
      s = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.initializeFromCache = function (n) {
            var t = n || [];
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
    ((s.model = o("WAWebChatPreferenceModel").ChatPreference),
      (s.cachePolicy = {
        id: o("WAWebUserPrefsKeys").COLLECTIONS_KEYS.CHAT_PREFERENCE_COLLECTION,
        policy: o("WAWebBaseCachePolicy").CACHE_POLICY.LOAD,
        delay: 1e3,
      }));
    var u = new s();
    l.default = u;
  },
  98,
);
