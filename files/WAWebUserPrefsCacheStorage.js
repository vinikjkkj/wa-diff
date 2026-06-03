__d(
  "WAWebUserPrefsCacheStorage",
  [
    "WAWebKeyValueCacheStore",
    "WAWebUserPrefsPostProcessors",
    "WAWebUserPrefsPreProcessors",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = new Response(JSON.stringify(e), {
        headers: { "content-type": "application/json" },
      });
      return t;
    }
    function s(e) {
      return e.json();
    }
    function u(e, t) {
      var n = encodeURIComponent(e),
        r = encodeURIComponent(t);
      return "https://_user_prefs_key_store_.whatsapp.com/" + r + "_" + n;
    }
    var c = { ignoreSearch: !0, ignoreMethod: !0, ignoreVary: !0 },
      d = "wa_web_user_prefs_cache_store",
      m = new (r("WAWebKeyValueCacheStore"))(d, e, s, {
        encodeKey: u,
        matchOptions: c,
      }),
      p = (function () {
        function e() {
          this.$1 = {};
        }
        var t = e.prototype;
        return (
          (t.setItemToCacheStorage = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = o("WAWebUserPrefsPreProcessors").preProcessUserPref(
                  e,
                  t,
                );
                ((this.$1[e] = n), yield m.doPut(e, n));
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (t.getItemFromCacheStorage = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this.$1[e];
                if (t == null)
                  try {
                    ((t = yield m.doGet(e)), (this.$1[e] = t));
                  } catch (e) {}
                if (t == null)
                  return (this.removeItemFromCacheStorage(e), null);
                var n = o("WAWebUserPrefsPostProcessors").postProcessUserPref(
                  e,
                  t,
                );
                return n;
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (t.removeItemFromCacheStorage = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                (delete this.$1[e], yield m.doDel(e));
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (t.clearCacheStorage = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              ((this.$1 = {}), yield m.doClear());
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          e
        );
      })(),
      _ = new p();
    l.userPrefsCacheStorage = _;
  },
  98,
);
