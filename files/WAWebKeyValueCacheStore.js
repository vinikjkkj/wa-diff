__d(
  "WAWebKeyValueCacheStore",
  [
    "WALogger",
    "WAWebAbstractStore",
    "WAWebIdentityFunction",
    "WAWebStorageCmd",
    "WAWebStorageErrorHandlingUtils",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = (function (t) {
        function n(e, n, r, a) {
          var i, l, s;
          return (
            (s = t.call(this) || this),
            (s.$KeyValueCacheStore$p_1 = e),
            (s.$KeyValueCacheStore$p_3 = n),
            (s.$KeyValueCacheStore$p_4 = r),
            (s.$KeyValueCacheStore$p_5 =
              (i = a == null ? void 0 : a.encodeKey) != null
                ? i
                : o("WAWebIdentityFunction").identityFunction),
            (s.$KeyValueCacheStore$p_6 =
              (l = a == null ? void 0 : a.matchOptions) != null ? l : {}),
            s
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.doGet = async function (n) {
            await this.doOpen();
            var t = this.$KeyValueCacheStore$p_5(
              n,
              this.$KeyValueCacheStore$p_1,
            );
            if (
              ((this.$KeyValueCacheStore$p_6.ignoreSearch = !1),
              !this.$KeyValueCacheStore$p_2)
            )
              throw (
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Unable to get: abstract doGet called",
                    ])),
                ),
                r("err")("Unable to get")
              );
            var a = await this.$KeyValueCacheStore$p_2.match(
              t,
              this.$KeyValueCacheStore$p_6,
            );
            return a == null ? null : this.$KeyValueCacheStore$p_4(a);
          }),
          (a.doPut = async function (t, n) {
            await this.doOpen();
            try {
              var e = this.$KeyValueCacheStore$p_5(
                t,
                this.$KeyValueCacheStore$p_1,
              );
              if (!this.$KeyValueCacheStore$p_2)
                throw (
                  o("WALogger").WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "Unable to put: abstract doPut called",
                      ])),
                  ),
                  r("err")("Unable to put in cache")
                );
              return (
                await this.$KeyValueCacheStore$p_2.put(
                  e,
                  this.$KeyValueCacheStore$p_3(n),
                ),
                n
              );
            } catch (e) {
              throw (await f(), e);
            }
          }),
          (a.doDel = async function (t) {
            await this.doOpen();
            var e = this.$KeyValueCacheStore$p_5(
              t,
              this.$KeyValueCacheStore$p_1,
            );
            if (
              ((this.$KeyValueCacheStore$p_6.ignoreSearch = !1),
              !this.$KeyValueCacheStore$p_2)
            )
              return (
                o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "Unable to delete: abstract doDel called",
                    ])),
                ),
                Promise.reject(r("err")("Unable to delete"))
              );
            await this.$KeyValueCacheStore$p_2.delete(
              e,
              this.$KeyValueCacheStore$p_6,
            );
          }),
          (a.doClear = async function () {
            var e = await caches.delete(this.$KeyValueCacheStore$p_1);
            (e ||
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "Tried to delete a non-existent cache: ",
                    "",
                  ])),
                this.$KeyValueCacheStore$p_1,
              ),
              (this.$KeyValueCacheStore$p_2 = null));
          }),
          (a.doOpen = async function () {
            if (this.$KeyValueCacheStore$p_2 == null)
              try {
                this.$KeyValueCacheStore$p_2 = await caches.open(
                  this.$KeyValueCacheStore$p_1,
                );
              } catch (e) {
                throw (
                  (this.$KeyValueCacheStore$p_2 = null),
                  o("WALogger").WARN(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "Unable to open cache: ",
                        ", error: ",
                        "",
                      ])),
                    this.$KeyValueCacheStore$p_1,
                    e,
                  ),
                  await f(),
                  o("WAWebStorageCmd").StorageCmd.trigger(
                    "cache_storage_open_failed",
                  ),
                  e
                );
              }
          }),
          (a.doClose = function () {
            return ((this.$KeyValueCacheStore$p_2 = null), Promise.resolve());
          }),
          n
        );
      })(r("WAWebAbstractStore"));
    async function f() {
      return o("WAWebStorageErrorHandlingUtils")
        .estimateStorageLogFormatted()
        .then(function (e) {
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "[cache-operation-failed] Storage Estimate: ",
                "",
              ])),
            JSON.stringify(e),
          );
        })
        .catch(function () {
          o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "[cache-operation-failed] Failed to get storage estimate",
              ])),
          );
        });
    }
    l.default = _;
  },
  98,
);
