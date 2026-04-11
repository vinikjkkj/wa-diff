__d(
  "WAWebUserPrefsStore",
  [
    "WALogger",
    "WAMd5",
    "WAWebPermanentStorage",
    "WAWebTemporaryStorage",
    "WAWebUserPrefsBase",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsTypes",
    "cr:34987",
    "lodash",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (e = n("cr:34987")) != null ? e : {},
      c = u.notifyUserSettingChangeHandler,
      d = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getMaybeMeDevicePn = function () {
            return o("WAWebUserPrefsMeUser").getMaybeMePnUser();
          }),
          (n.getKeys = function (t, n, r) {
            r === void 0 && (r = !1);
            var e = {};
            return (
              n.forEach(function (n) {
                e[n] = t.getItem(n, r);
              }),
              e
            );
          }),
          (n.updatePreservedUserKeys = function () {
            var t = this,
              n = this.getMaybeMeDevicePn();
            if (n != null) {
              var a = n.toString(),
                i = e.prototype.get.call(
                  this,
                  o("WAWebUserPrefsKeys").KEYS.PRESERVED_USER_KEYS,
                  { storage: r("WAWebPermanentStorage") },
                ),
                l = i instanceof Array ? i : [],
                s = o("WAWebUserPrefsTypes").LS_PRESERVE_USER_KEYS.map(
                  function (e) {
                    return o("WAMd5").md5(t.$UserPreferencesStore$p_1(a, e));
                  },
                );
              e.prototype.set.call(
                this,
                o("WAWebUserPrefsKeys").KEYS.PRESERVED_USER_KEYS,
                r("lodash").union(l, s),
                { storage: r("WAWebPermanentStorage") },
              );
            }
          }),
          (n.getPSIgnoringCache = function (n) {
            return e.prototype.get.call(this, n, {
              storage: r("WAWebPermanentStorage"),
              ignoreCache: !0,
            });
          }),
          (n.getTS = function (n) {
            return e.prototype.get.call(this, n, {
              storage: r("WAWebTemporaryStorage"),
            });
          }),
          (n.setTS = function (n, o) {
            e.prototype.set.call(this, n, o, {
              storage: r("WAWebTemporaryStorage"),
            });
          }),
          (n.getCollection = function (t) {
            return this.getUser(t);
          }),
          (n.setCollection = function (t, n, r) {
            (r === void 0 && (r = !1),
              this.getMaybeMeDevicePn() != null && !r && this.setUser(t, n));
          }),
          (n.getUser = function (n) {
            var t = this.$UserPreferencesStore$p_2(n);
            return t != null ? e.prototype.get.call(this, t) : null;
          }),
          (n.setUser = function (n, r, o) {
            var t = this.$UserPreferencesStore$p_2(n);
            t != null &&
              (e.prototype.set.call(this, t, r, o), c == null || c(n, r));
          }),
          (n.$UserPreferencesStore$p_2 = function (t) {
            var e = this.getMaybeMeDevicePn();
            if (!e)
              return (
                o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "userPrefs: Me has not loaded yet.",
                    ])),
                ),
                null
              );
            var n = o("WAMd5").md5(
              this.$UserPreferencesStore$p_1(e.toString(), t),
            );
            return n;
          }),
          (n.$UserPreferencesStore$p_1 = function (t, n) {
            return [t, n].join(":");
          }),
          t
        );
      })(o("WAWebUserPrefsBase").UserPreferencesStoreBase),
      m = new d(),
      p = m;
    l.default = p;
  },
  98,
);
