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
    "asyncToGeneratorRuntime",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f;
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            yield o("WAWebApiUserPrefs").createOrReplaceUserPref(e);
          } catch (t) {
            o("WALogger").WARN(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "userPrefsIdb: insert failed for '",
                  "': ",
                  "",
                ])),
              e.key,
              t,
            );
          }
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            yield o("WAWebApiUserPrefs").removeUserPref(e);
          } catch (t) {
            o("WALogger").WARN(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "userPrefsIdb: remove failed for '",
                  "': ",
                  "",
                ])),
              e,
              t,
            );
          }
        })),
        C.apply(this, arguments)
      );
    }
    function b() {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            yield o("WAWebApiUserPrefs").clearUserPrefs();
          } catch (e) {
            o("WALogger").WARN(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "userPrefsIdb: clear failed: ",
                  "",
                ])),
              e,
            );
          }
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            yield o("WAWebApiUserPrefs").bulkCreateOrReplaceUserPrefs(e);
          } catch (e) {
            o("WALogger").WARN(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "userPrefsIdb: bulk insert failed: ",
                  "",
                ])),
              e,
            );
          }
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      var t = e;
      return (
        Object.values(o("WAWebUserPrefsKeys").HASHED_KEYS).some(function (t) {
          return t === e;
        }) && (t = o("WAWebUserPrefsStorageUtils").hashUserPrefKey(e)),
        t
      );
    }
    var E = (function () {
        function t() {
          ((this.loadedUserPrefs = null),
            (this.myInstanceId = Math.random().toString(36).substr(2, 5)));
        }
        var a = t.prototype;
        return (
          (a.init = function () {
            var e = this;
            return (
              this.$1 == null &&
                (this.$1 = o("WAWebApiUserPrefs")
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
              this.$1
            );
          }),
          (a.set = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t, n) {
                var a = L(t);
                if (a != null) {
                  this.loadedUserPrefs == null &&
                    (o("WALogger")
                      .WARN(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "UserPrefsIndexedDBStorage: set(",
                            ") called before init",
                          ])),
                        t,
                      )
                      .sendLogs("userprefs-idb-set-before-init"),
                    yield this.init());
                  var i = r("WANullthrows")(this.loadedUserPrefs),
                    l = o("WAWebUserPrefsPreProcessors").preProcessUserPref(
                      t,
                      n,
                    );
                  ((i[a] = l), yield g({ key: a, value: l }));
                }
              },
            );
            function a(e, n) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          (a.get = function (t) {
            if (this.loadedUserPrefs == null)
              return (
                o("WALogger").ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "UserPrefsIndexedDBStorage: get(",
                      ") called before init",
                    ])),
                  t,
                ),
                o("WAWebCurrentUser").isEmployee() &&
                  o("WALogger")
                    .ERROR(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "UserPrefsIndexedDBStorage",
                        ])),
                    )
                    .sendLogs("userprefs-idb-get-before-init"),
                null
              );
            var e = this.loadedUserPrefs,
              n = L(t);
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
          (a.remove = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                this.loadedUserPrefs == null &&
                  (o("WALogger")
                    .WARN(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "UserPrefsIndexedDBStorage: remove(",
                          ") called before init.",
                        ])),
                      e,
                    )
                    .sendLogs("userprefs-idb-remove-before-init"),
                  yield this.init());
                var t = r("WANullthrows")(this.loadedUserPrefs),
                  n = L(e);
                n != null && (delete t[n], yield y(n));
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.clear = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              ((this.loadedUserPrefs = {}), yield b());
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.bulkSetItemsToIndexedDB = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = r("compactMap")(e, function (e) {
                  var t = L(e.key);
                  if (t != null)
                    return {
                      key: t,
                      value: o(
                        "WAWebUserPrefsPreProcessors",
                      ).preProcessUserPref(e.key, e.value),
                    };
                });
                (yield S(t),
                  this.loadedUserPrefs == null &&
                    (o("WALogger")
                      .WARN(
                        d ||
                          (d = babelHelpers.taggedTemplateLiteralLoose([
                            "userPrefsIdb: bulkSet called before init",
                          ])),
                      )
                      .sendLogs("userprefs-idb-bulk-set-before-init"),
                    yield this.init()));
                var n = r("WANullthrows")(this.loadedUserPrefs);
                for (var a of t) {
                  var i = a.key,
                    l = a.value;
                  n[i] = l;
                }
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          t
        );
      })(),
      k = new E();
    l.userPrefsIdb = k;
  },
  98,
);
