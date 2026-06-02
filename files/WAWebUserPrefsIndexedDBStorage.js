__d(
  "WAWebUserPrefsIndexedDBStorage",
  [
    "WALogger",
    "WANullthrows",
    "WAWebApiUserPrefs",
    "WAWebCurrentUser",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsPostProcessors",
    "WAWebUserPrefsPreProcessors",
    "WAWebUserPrefsStorageUtils",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f;
    async function g(t) {
      try {
        await o("WAWebApiUserPrefs").createOrReplaceUserPref(t);
      } catch (n) {
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "userPrefsIdb: insert failed for '",
              "': ",
              "",
            ])),
          t.key,
          n,
        );
      }
    }
    async function h(e) {
      try {
        await o("WAWebApiUserPrefs").removeUserPref(e);
      } catch (t) {
        o("WALogger").WARN(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "userPrefsIdb: remove failed for '",
              "': ",
              "",
            ])),
          e,
          t,
        );
      }
    }
    async function y() {
      try {
        await o("WAWebApiUserPrefs").clearUserPrefs();
      } catch (e) {
        o("WALogger").WARN(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "userPrefsIdb: clear failed: ",
              "",
            ])),
          e,
        );
      }
    }
    async function C(e) {
      try {
        await o("WAWebApiUserPrefs").bulkCreateOrReplaceUserPrefs(e);
      } catch (e) {
        o("WALogger").WARN(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "userPrefsIdb: bulk insert failed: ",
              "",
            ])),
          e,
        );
      }
    }
    function b(e) {
      var t = e;
      return (
        Object.values(o("WAWebUserPrefsKeys").HASHED_KEYS).some(function (t) {
          return t === e;
        }) && (t = o("WAWebUserPrefsStorageUtils").hashUserPrefKey(e)),
        t
      );
    }
    var v = (function () {
        function e() {
          ((this.loadedUserPrefs = null),
            (this.myInstanceId = Math.random().toString(36).substr(2, 5)),
            (this.$1 = null));
        }
        var t = e.prototype;
        return (
          (t.setSyncCallback = function (t) {
            this.$1 = t;
          }),
          (t.applySyncSet = function (t, n) {
            this.loadedUserPrefs != null && (this.loadedUserPrefs[t] = n);
          }),
          (t.applySyncRemove = function (t) {
            this.loadedUserPrefs != null && delete this.loadedUserPrefs[t];
          }),
          (t.applySyncClear = function () {
            this.loadedUserPrefs != null && (this.loadedUserPrefs = {});
          }),
          (t.init = function () {
            var e = this;
            return (
              this.$2 == null &&
                (this.$2 = o("WAWebApiUserPrefs")
                  .allUserPrefsIdb()
                  .then(function (t) {
                    var n = Object.fromEntries(
                      t.map(function (e) {
                        var t = e.key,
                          n = e.value;
                        return [t, n];
                      }),
                    );
                    e.loadedUserPrefs = n;
                  })),
              this.$2
            );
          }),
          (t.set = async function (t, n) {
            var e,
              a = b(t);
            if (a != null) {
              this.loadedUserPrefs == null &&
                (o("WALogger")
                  .WARN(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "UserPrefsIndexedDBStorage: set(",
                        ") called before init",
                      ])),
                    t,
                  )
                  .sendLogs("userprefs-idb-set-before-init"),
                await this.init());
              var i = r("WANullthrows")(this.loadedUserPrefs),
                l = o("WAWebUserPrefsPreProcessors").preProcessUserPref(t, n);
              ((i[a] = l),
                (e = this.$1) == null ||
                  e.call(this, { action: "set", key: a, value: l }),
                await g({ key: a, value: l }));
            }
          }),
          (t.get = function (t) {
            if (this.loadedUserPrefs == null)
              return (
                o("WALogger").ERROR(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "UserPrefsIndexedDBStorage: get(",
                      ") called before init",
                    ])),
                  t,
                ),
                o("WAWebCurrentUser").isEmployee() &&
                  o("WALogger")
                    .ERROR(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "UserPrefsIndexedDBStorage",
                        ])),
                    )
                    .sendLogs("userprefs-idb-get-before-init"),
                null
              );
            var e = this.loadedUserPrefs,
              n = b(t);
            if (n != null) {
              var r,
                a = n in e;
              if ((a && (r = e[n]), r == null)) return null;
              var i = o("WAWebUserPrefsPostProcessors").postProcessUserPref(
                t,
                r,
              );
              return i;
            }
          }),
          (t.remove = async function (t) {
            var e;
            this.loadedUserPrefs == null &&
              (o("WALogger")
                .WARN(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "UserPrefsIndexedDBStorage: remove(",
                      ") called before init.",
                    ])),
                  t,
                )
                .sendLogs("userprefs-idb-remove-before-init"),
              await this.init());
            var n = r("WANullthrows")(this.loadedUserPrefs),
              a = b(t);
            a != null &&
              (delete n[a],
              (e = this.$1) == null ||
                e.call(this, { action: "remove", key: a }),
              await h(a));
          }),
          (t.clear = async function () {
            var e;
            ((this.loadedUserPrefs = {}),
              (e = this.$1) == null || e.call(this, { action: "clear" }),
              await y());
          }),
          (t.bulkSetItemsToIndexedDB = async function (t) {
            var e,
              n = r("compactMap")(t, function (e) {
                var t = b(e.key);
                if (t != null)
                  return {
                    key: t,
                    value: o("WAWebUserPrefsPreProcessors").preProcessUserPref(
                      e.key,
                      e.value,
                    ),
                  };
              });
            (await C(n),
              this.loadedUserPrefs == null &&
                (o("WALogger")
                  .WARN(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "userPrefsIdb: bulkSet called before init",
                      ])),
                  )
                  .sendLogs("userprefs-idb-bulk-set-before-init"),
                await this.init()));
            var a = r("WANullthrows")(this.loadedUserPrefs);
            for (var i of n) {
              var l = i.key,
                s = i.value;
              a[l] = s;
            }
            (e = this.$1) == null ||
              e.call(this, { action: "bulkSet", entries: n });
          }),
          e
        );
      })(),
      S = new v();
    l.userPrefsIdb = S;
  },
  98,
);
