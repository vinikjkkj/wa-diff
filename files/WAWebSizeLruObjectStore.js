__d(
  "WAWebSizeLruObjectStore",
  [
    "Promise",
    "WALogger",
    "WANullthrows",
    "WAPromiseLoop",
    "WAPromiseQueue",
    "WAShiftTimer",
    "WAWebAbstractStore",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
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
            (l._queueMap = new (o("WAPromiseQueue").PromiseQueueMap)()),
            (l._purge = function () {
              if (l._pendingPurgePromise) return l._pendingPurgePromise;
              var t = l.open().then(function () {
                return o("WAPromiseLoop").promiseLoop(
                  (function () {
                    var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (t) {
                        var a = function () {
                            ((l._pendingPurgePromise = null), t());
                          },
                          i = l.getCurrentSize();
                        if (i == null || i <= l._maxSize) {
                          a();
                          return;
                        }
                        var s = yield l.queryOneByIndex(l._dateIndex),
                          u = l.getCurrentSize(),
                          c = l._maxSize;
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
                        var d = s[l._primaryIndex];
                        return l.del(d);
                      },
                    );
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })(),
                );
              });
              return (l._pendingPurgePromise = t);
            }),
            (l._schedulePurge = function () {
              l._purgeTimer.debounce(2e3);
            }),
            (l.doPut = function (e, t) {
              return l._queueMap.enqueue(
                e,
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  if (t[l._primaryIndex] !== e)
                    throw r("err")("The key you provide does not match.");
                  var n = yield l._store.get(e),
                    o = n == null ? 0 : l.$SizeLruObjectStore$p_1(n),
                    a = l.$SizeLruObjectStore$p_1(t),
                    i = a - o,
                    s = yield l._store.put(e, t);
                  return (
                    (l._currentSize =
                      r("WANullthrows")(l.getCurrentSize()) + i),
                    l._schedulePurge(),
                    s
                  );
                }),
              );
            }),
            (l.doDel = function (e) {
              return l._queueMap.enqueue(
                e,
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  var t = yield l._store.get(e);
                  if (t != null) {
                    try {
                      yield l._dispose(e, t);
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
                    (yield l._store.del(e),
                      (l._currentSize =
                        r("WANullthrows")(l.getCurrentSize()) -
                        l.$SizeLruObjectStore$p_1(t)));
                  }
                }),
              );
            }),
            (l._store = a),
            (l._primaryIndex = i.primaryIndex),
            (l._dateIndex = i.dateIndex),
            (l._sizeIndex = i.sizeIndex),
            i.maxSize < 0)
          )
            throw r("err")("Cannot set max size to a negative number");
          return (
            (l._maxSize = Math.floor(i.maxSize)),
            (l._dispose = i.dispose),
            (l._purgeTimer = new (o("WAShiftTimer").ShiftTimer)(function () {
              l._purge().catch(function (e) {
                o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "Error while purging: ",
                      "",
                    ])),
                  e.message,
                );
              });
            })),
            l
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.getCurrentSize = function () {
            return this._currentSize;
          }),
          (i.getMaxSize = function () {
            return this._maxSize;
          }),
          (i.setMaxSize = function (t) {
            return t < 0
              ? (m || (m = n("Promise"))).reject(
                  r("err")("Cannot set size to a negative number"),
                )
              : ((this._maxSize = Math.floor(t)),
                this._purgeTimer.cancel(),
                this._purge().catch(function (e) {
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
            var e = t[this._primaryIndex];
            return this.put(e, t);
          }),
          (i.$SizeLruObjectStore$p_1 = function (t) {
            var e = t[this._sizeIndex];
            return typeof e != "number" || e < 0
              ? (o("WALogger").WARN(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "Invalid size in index ",
                      ": ",
                      "",
                    ])),
                  this._sizeIndex,
                  e,
                ),
                0)
              : e;
          }),
          (i.doGet = function (t) {
            return this._store.get(t);
          }),
          (i.queryOneByIndex = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = yield this._store.queryByIndex(e, { limit: 1 });
                return t.length === 0 ? null : t[0];
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.doQueryByIndex = function (t, n) {
            return this._store.queryByIndex(t, n);
          }),
          (i.doGetAll = function () {
            return this._store.getAll();
          }),
          (i.doClear = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              (this._purgeTimer.cancel(),
                yield this._store.clear(),
                (this._currentSize = 0));
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.doCount = function () {
            return this._store.count();
          }),
          (i.doOpen = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = this;
              if ((yield this._store.open(), this._currentSize == null)) {
                var t = yield this._store.doGetAll();
                this._currentSize = r("sumBy")(t, function (t) {
                  return e.$SizeLruObjectStore$p_1(t);
                });
              }
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.doClose = function () {
            return ((this._currentSize = null), this._store.close());
          }),
          a
        );
      })(r("WAWebAbstractStore"));
    l.default = p;
  },
  98,
);
