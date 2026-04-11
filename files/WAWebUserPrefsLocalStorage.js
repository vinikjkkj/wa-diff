__d(
  "WAWebUserPrefsLocalStorage",
  [
    "WALogger",
    "WAWebLocalStorage",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsPostProcessors",
    "WAWebUserPrefsPreProcessors",
    "WAWebUserPrefsStorageUtils",
    "cr:34987",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (e = n("cr:34987")) != null ? e : {},
      c = u.notifySettingChangeHandler;
    function d(e) {
      var t = e;
      return (
        Object.values(o("WAWebUserPrefsKeys").HASHED_KEYS).some(function (t) {
          return t === e;
        }) && (t = o("WAWebUserPrefsStorageUtils").hashUserPrefKey(e)),
        t
      );
    }
    var m = (function () {
        function e() {
          this.$1 = {};
        }
        var t = e.prototype;
        return (
          (t.setItemToLocalStorage = function (t, n) {
            if (r("WAWebLocalStorage") != null) {
              var e = d(t);
              if (e != null) {
                var a = JSON.stringify(
                  o("WAWebUserPrefsPreProcessors").preProcessUserPref(t, n),
                );
                if (a != null) {
                  this.$1[e] = a;
                  try {
                    r("WAWebLocalStorage").setItem(e, a);
                  } catch (e) {
                    throw e;
                  }
                  c == null || c(t, a);
                }
              }
            }
          }),
          (t.getItemFromLocalStorage = function (t) {
            var e = d(t);
            if (e != null) {
              var n = this.$1[e];
              if (
                (n == null &&
                  r("WAWebLocalStorage") != null &&
                  (n = r("WAWebLocalStorage").getItem(e)),
                n == null)
              )
                return null;
              this.$1[e] = n;
              var a;
              try {
                a = JSON.parse(n);
              } catch (e) {
                return (
                  o("WALogger")
                    .WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "getItemFromLocalStorage: parse error",
                        ])),
                    )
                    .sendLogs("get-local-storage-item-parse-error"),
                  this.removeItemFromLocalStorage(t),
                  null
                );
              }
              var i = o("WAWebUserPrefsPostProcessors").postProcessUserPref(
                t,
                a,
              );
              return i;
            }
          }),
          (t.removeItemFromLocalStorage = function (t) {
            var e = d(t);
            e != null &&
              (delete this.$1[e],
              r("WAWebLocalStorage") != null &&
                r("WAWebLocalStorage").removeItem(e));
          }),
          (t.clearLocalStorage = function () {
            ((this.$1 = {}),
              r("WAWebLocalStorage") != null && r("WAWebLocalStorage").clear());
          }),
          e
        );
      })(),
      p = new m();
    l.default = p;
  },
  98,
);
