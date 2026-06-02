__d(
  "WAWebUserPrefsCacheStorage",
  [
    "WAWebKeyValueCacheStore",
    "WAWebUserPrefsPostProcessors",
    "WAWebUserPrefsPreProcessors",
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
          (t.setItemToCacheStorage = async function (t, n) {
            var e = o("WAWebUserPrefsPreProcessors").preProcessUserPref(t, n);
            ((this.$1[t] = e), await m.doPut(t, e));
          }),
          (t.getItemFromCacheStorage = async function (t) {
            var e = this.$1[t];
            if (e == null)
              try {
                ((e = await m.doGet(t)), (this.$1[t] = e));
              } catch (e) {}
            if (e == null) return (this.removeItemFromCacheStorage(t), null);
            var n = o("WAWebUserPrefsPostProcessors").postProcessUserPref(t, e);
            return n;
          }),
          (t.removeItemFromCacheStorage = async function (t) {
            (delete this.$1[t], await m.doDel(t));
          }),
          (t.clearCacheStorage = async function () {
            ((this.$1 = {}), await m.doClear());
          }),
          e
        );
      })(),
      _ = new p();
    l.userPrefsCacheStorage = _;
  },
  98,
);
