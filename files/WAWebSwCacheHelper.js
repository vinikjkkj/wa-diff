__d(
  "WAWebSwCacheHelper",
  ["WALogger", "WAWebSwUtils", "gkx"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = self.caches.keys(),
      f = [
        "wa-pp",
        "wa-assets",
        "wa-stickers",
        "wa_web_user_prefs_cache_store",
      ],
      g = (function () {
        function t(e) {
          ((this.cacheName = e),
            (this.openCachePromise = self.caches.open(this.cacheName)));
        }
        var n = t.prototype;
        return (
          (n.cleanup = async function () {
            var t = this,
              n = await _;
            return Promise.all(
              n.map(function (n) {
                if (n !== t.cacheName && !f.includes(n))
                  return self.caches.delete(n).catch(function (r) {
                    o("WALogger").WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "Unable to delete cache: ",
                          ", current cache: ",
                          ", error: ",
                          "",
                        ])),
                      n,
                      t.cacheName,
                      r,
                    );
                  });
              }),
            );
          }),
          (n.matchOrFetch = async function (t, n, r) {
            var e = n != null ? n : h(t),
              o = await this.match(e);
            return o || this.fetchAndPut(t, e, r);
          }),
          (n.fetchAndPut = async function (t, n, r) {
            var e = o("WAWebSwUtils").manuallyCloneRequest(t, void 0, {
              redirect: "manual",
              mode: "cors",
            });
            try {
              var a = await self.fetch(e, r);
              if (a.ok) {
                var i = n || h(t);
                this.put(i, a.clone());
              } else
                a.type !== "opaqueredirect" &&
                  o("WALogger").WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "Received invalid response, url: ",
                        ", status: ",
                        ", type: ",
                        "",
                      ])),
                    a.url,
                    a.status,
                    a.type,
                  );
              return a;
            } catch (e) {
              throw (
                o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "Unable to fetch request: ",
                      ", error: ",
                      "",
                    ])),
                  h(t),
                  e,
                ),
                e
              );
            }
          }),
          (n.reset = function () {
            var e = this;
            return (this.openCachePromise = self.caches
              .delete(this.cacheName)
              .then(function () {
                return self.caches.open(e.cacheName);
              }));
          }),
          (n.match = async function (t, n) {
            try {
              var e = await this.openCachePromise;
              return await e.match(t, n);
            } catch (e) {
              o("WALogger").WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "Unable to match request: ",
                    ", in cache: ",
                    ", error: ",
                    "",
                  ])),
                h(t),
                this.cacheName,
                e,
              );
            }
          }),
          (n.put = async function (t, n) {
            try {
              var e = await this.openCachePromise;
              return await e.put(t, n);
            } catch (e) {
              o("WALogger").WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "cache put failed: ",
                    ", req: ",
                    ", status: ",
                    ", err: ",
                    "",
                  ])),
                this.cacheName,
                h(t),
                n.status,
                e,
              );
            }
          }),
          (n.delete = async function (t, n) {
            try {
              var e = await this.openCachePromise;
              return await e.delete(t, n);
            } catch (e) {
              o("WALogger").WARN(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "Unable to delete request: ",
                    ", in cache: ",
                    ", error: ",
                    "",
                  ])),
                h(t),
                this.cacheName,
                e,
              );
            }
          }),
          (n.keys = async function (t, n) {
            try {
              var e = await this.openCachePromise;
              return await e.keys(t, n);
            } catch (e) {
              o("WALogger").WARN(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "Unable to match request: ",
                    ", in cache: ",
                    ", error: ",
                    "",
                  ])),
                h(t),
                this.cacheName,
                e,
              );
            }
          }),
          t
        );
      })();
    function h(e) {
      return e instanceof Request ? e.url : e;
    }
    (r("gkx")("26258") || (self.CacheHelper = g), (l.CacheHelper = g));
  },
  98,
);
