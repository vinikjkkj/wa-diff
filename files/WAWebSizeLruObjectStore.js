__d(
  "WAWebSizeLruObjectStore",
  [
    "Promise",
    "WALogger",
    "WAPromiseLoop",
    "WAPromiseQueue",
    "WAShiftTimer",
    "WAWebAbstractStore",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
    "nullthrows",
    "sumBy",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = (function (t) {
        function a(a, i) {
          var l;
          if (
            ((l = t.call(this) || this),
            (l.$SizeLruObjectStore$p_10 = new (o(
              "WAPromiseQueue",
            ).PromiseQueueMap)()),
            (l.$SizeLruObjectStore$p_11 = function () {
              if (l.$SizeLruObjectStore$p_9) return l.$SizeLruObjectStore$p_9;
              var t = l.open().then(function () {
                return o("WAPromiseLoop").promiseLoop(
                  (function () {
                    var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (t) {
                        var a = function () {
                            ((l.$SizeLruObjectStore$p_9 = null), t());
                          },
                          i = l.getCurrentSize();
                        if (i == null || i <= l.$SizeLruObjectStore$p_5) {
                          a();
                          return;
                        }
                        var s = yield l.queryOneByIndex(
                            l.$SizeLruObjectStore$p_3,
                          ),
                          u = l.getCurrentSize(),
                          c = l.$SizeLruObjectStore$p_5;
                        if (u == null || u <= c) {
                          a();
                          return;
                        }
                        if (s == null)
                          return (
                            n("asyncToGeneratorRuntime").asyncToGenerator(
                              function* () {
                                var t = yield l.count();
                                o("WALogger")
                                  .WARN(
                                    e ||
                                      (e =
                                        babelHelpers.taggedTemplateLiteralLoose(
                                          [
                                            "[SizeLruObjectStore] _purge: no row, size=",
                                            ">",
                                            ", cnt=",
                                            "",
                                          ],
                                        )),
                                    u,
                                    c,
                                    t,
                                  )
                                  .sendLogs("size-lru-store-invalid-empty");
                              },
                            )(),
                            (m || (m = n("Promise"))).reject(
                              r("err")(
                                "Query returned no result but currentSize > maxSize",
                              ),
                            )
                          );
                        var d = s[l.$SizeLruObjectStore$p_2];
                        return l.del(d);
                      },
                    );
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })(),
                );
              });
              return (l.$SizeLruObjectStore$p_9 = t);
            }),
            (l.$SizeLruObjectStore$p_12 = function () {
              l.$SizeLruObjectStore$p_8.debounce(2e3);
            }),
            (l.doPut = function (e, t) {
              return l.$SizeLruObjectStore$p_10.enqueue(
                e,
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  if (t[l.$SizeLruObjectStore$p_2] !== e)
                    throw r("err")("The key you provide does not match.");
                  var n = yield l.$SizeLruObjectStore$p_1.get(e),
                    o = n == null ? 0 : l.$SizeLruObjectStore$p_13(n),
                    a = l.$SizeLruObjectStore$p_13(t),
                    i = a - o,
                    s = yield l.$SizeLruObjectStore$p_1.put(e, t);
                  return (
                    (l.$SizeLruObjectStore$p_6 =
                      r("nullthrows")(l.getCurrentSize()) + i),
                    l.$SizeLruObjectStore$p_12(),
                    s
                  );
                }),
              );
            }),
            (l.doDel = function (e) {
              return l.$SizeLruObjectStore$p_10.enqueue(
                e,
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  var t = yield l.$SizeLruObjectStore$p_1.get(e);
                  if (t != null) {
                    try {
                      yield l.$SizeLruObjectStore$p_7(e, t);
                    } catch (e) {
                      var n = r("getErrorSafe")(e);
                      throw (
                        o("WALogger")
                          .WARN(
                            s ||
                              (s = babelHelpers.taggedTemplateLiteralLoose([
                                "SizeLRUObjectStore: _dispose error: ",
                                "",
                              ])),
                            n.message,
                          )
                          .sendLogs("size-lru-store-dispose-error"),
                        n
                      );
                    }
                    (yield l.$SizeLruObjectStore$p_1.del(e),
                      (l.$SizeLruObjectStore$p_6 =
                        r("nullthrows")(l.getCurrentSize()) -
                        l.$SizeLruObjectStore$p_13(t)));
                  }
                }),
              );
            }),
            (l.$SizeLruObjectStore$p_1 = a),
            (l.$SizeLruObjectStore$p_2 = i.primaryIndex),
            (l.$SizeLruObjectStore$p_3 = i.dateIndex),
            (l.$SizeLruObjectStore$p_4 = i.sizeIndex),
            i.maxSize < 0)
          )
            throw r("err")("Cannot set max size to a negative number");
          return (
            (l.$SizeLruObjectStore$p_5 = Math.floor(i.maxSize)),
            (l.$SizeLruObjectStore$p_7 = i.dispose),
            (l.$SizeLruObjectStore$p_8 = new (o("WAShiftTimer").ShiftTimer)(
              function () {
                l.$SizeLruObjectStore$p_11().catch(function (e) {
                  o("WALogger").WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "Error while purging: ",
                        "",
                      ])),
                    e.message,
                  );
                });
              },
            )),
            l
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.getCurrentSize = function () {
            return this.$SizeLruObjectStore$p_6;
          }),
          (i.getMaxSize = function () {
            return this.$SizeLruObjectStore$p_5;
          }),
          (i.setMaxSize = function (t) {
            return t < 0
              ? (m || (m = n("Promise"))).reject(
                  r("err")("Cannot set size to a negative number"),
                )
              : ((this.$SizeLruObjectStore$p_5 = Math.floor(t)),
                this.$SizeLruObjectStore$p_8.cancel(),
                this.$SizeLruObjectStore$p_11().catch(function (e) {
                  o("WALogger").WARN(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "Error while purging during setMaxSize: ",
                        "",
                      ])),
                    e.message,
                  );
                }));
          }),
          (i.putObject = function (t) {
            var e = t[this.$SizeLruObjectStore$p_2];
            return this.put(e, t);
          }),
          (i.$SizeLruObjectStore$p_13 = function (t) {
            var e = t[this.$SizeLruObjectStore$p_4];
            return typeof e != "number" || e < 0
              ? (o("WALogger").WARN(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "Invalid size in index ",
                      ": ",
                      "",
                    ])),
                  this.$SizeLruObjectStore$p_4,
                  e,
                ),
                0)
              : e;
          }),
          (i.doGet = function (t) {
            return this.$SizeLruObjectStore$p_1.get(t);
          }),
          (i.queryOneByIndex = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = yield this.$SizeLruObjectStore$p_1.queryByIndex(e, {
                  limit: 1,
                });
                return t.length === 0 ? null : t[0];
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.doQueryByIndex = function (t, n) {
            return this.$SizeLruObjectStore$p_1.queryByIndex(t, n);
          }),
          (i.doGetAll = function () {
            return this.$SizeLruObjectStore$p_1.getAll();
          }),
          (i.doClear = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              (this.$SizeLruObjectStore$p_8.cancel(),
                yield this.$SizeLruObjectStore$p_1.clear(),
                (this.$SizeLruObjectStore$p_6 = 0));
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.doCount = function () {
            return this.$SizeLruObjectStore$p_1.count();
          }),
          (i.doOpen = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = this;
              if (
                (yield this.$SizeLruObjectStore$p_1.open(),
                this.$SizeLruObjectStore$p_6 == null)
              ) {
                var t = yield this.$SizeLruObjectStore$p_1.doGetAll();
                this.$SizeLruObjectStore$p_6 = r("sumBy")(t, function (t) {
                  return e.$SizeLruObjectStore$p_13(t);
                });
              }
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.doClose = function () {
            return (
              (this.$SizeLruObjectStore$p_6 = null),
              this.$SizeLruObjectStore$p_1.close()
            );
          }),
          a
        );
      })(r("WAWebAbstractStore"));
    l.default = p;
  },
  98,
);
