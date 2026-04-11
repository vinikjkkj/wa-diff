__d(
  "WAWebKeyValueCacheStore",
  [
    "Promise",
    "WALogger",
    "WAWebAbstractStore",
    "WAWebStorageCmd",
    "WAWebStorageErrorHandlingUtils",
    "asyncToGeneratorRuntime",
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
      _,
      f = (function (t) {
        function a(e, n, r, o) {
          var a, i, l;
          return (
            (l = t.call(this) || this),
            (l.$KeyValueCacheStore$p_1 = e),
            (l.$KeyValueCacheStore$p_3 = n),
            (l.$KeyValueCacheStore$p_4 = r),
            (l.$KeyValueCacheStore$p_5 =
              (a = o == null ? void 0 : o.encodeKey) != null
                ? a
                : function (e) {
                    return e;
                  }),
            (l.$KeyValueCacheStore$p_6 =
              (i = o == null ? void 0 : o.matchOptions) != null ? i : {}),
            l
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.doGet = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                yield this.doOpen();
                var n = this.$KeyValueCacheStore$p_5(
                  t,
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
                var a = yield this.$KeyValueCacheStore$p_2.match(
                  n,
                  this.$KeyValueCacheStore$p_6,
                );
                return a == null ? null : this.$KeyValueCacheStore$p_4(a);
              },
            );
            function a(e) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          (i.doPut = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                yield this.doOpen();
                try {
                  var n = this.$KeyValueCacheStore$p_5(
                    e,
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
                    yield this.$KeyValueCacheStore$p_2.put(
                      n,
                      this.$KeyValueCacheStore$p_3(t),
                    ),
                    t
                  );
                } catch (e) {
                  throw (yield g(), e);
                }
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.doDel = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                yield this.doOpen();
                var t = this.$KeyValueCacheStore$p_5(
                  e,
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
                    (_ || (_ = n("Promise"))).reject(
                      r("err")("Unable to delete"),
                    )
                  );
                yield this.$KeyValueCacheStore$p_2.delete(
                  t,
                  this.$KeyValueCacheStore$p_6,
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.doClear = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = yield caches.delete(this.$KeyValueCacheStore$p_1);
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
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.doOpen = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (this.$KeyValueCacheStore$p_2 == null)
                try {
                  this.$KeyValueCacheStore$p_2 = yield caches.open(
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
                    yield g(),
                    o("WAWebStorageCmd").StorageCmd.trigger(
                      "cache_storage_open_failed",
                    ),
                    e
                  );
                }
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.doClose = function () {
            return (
              (this.$KeyValueCacheStore$p_2 = null),
              (_ || (_ = n("Promise"))).resolve()
            );
          }),
          a
        );
      })(r("WAWebAbstractStore"));
    function g() {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
        })),
        h.apply(this, arguments)
      );
    }
    l.default = f;
  },
  98,
);
