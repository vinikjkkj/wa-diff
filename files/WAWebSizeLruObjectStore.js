__d(
  "WAWebSizeLruObjectStore",
  [
    "WALogger",
    "WANullthrows",
    "WAPromiseLoop",
    "WAPromiseQueue",
    "WAShiftTimer",
    "WAWebAbstractStore",
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
      m = (function (t) {
        function n(n, a) {
          var i;
          if (
            ((i = t.call(this) || this),
            (i._queueMap = new (o("WAPromiseQueue").PromiseQueueMap)()),
            (i._purge = function () {
              if (i._pendingPurgePromise) return i._pendingPurgePromise;
              var t = i.open().then(function () {
                return o("WAPromiseLoop").promiseLoop(async function (t) {
                  var n = function () {
                      ((i._pendingPurgePromise = null), t());
                    },
                    a = i.getCurrentSize();
                  if (a == null || a <= i._maxSize) {
                    n();
                    return;
                  }
                  var l = await i.queryOneByIndex(i._dateIndex),
                    s = i.getCurrentSize(),
                    u = i._maxSize;
                  if (s == null || s <= u) {
                    n();
                    return;
                  }
                  if (l == null)
                    return (
                      (async function () {
                        var t = await i.count();
                        o("WALogger")
                          .WARN(
                            e ||
                              (e = babelHelpers.taggedTemplateLiteralLoose([
                                "[SizeLruObjectStore] _purge: no row, size=",
                                ">",
                                ", cnt=",
                                "",
                              ])),
                            s,
                            u,
                            t,
                          )
                          .sendLogs("size-lru-store-invalid-empty");
                      })(),
                      Promise.reject(
                        r("err")(
                          "Query returned no result but currentSize > maxSize",
                        ),
                      )
                    );
                  var c = l[i._primaryIndex];
                  return i.del(c);
                });
              });
              return (i._pendingPurgePromise = t);
            }),
            (i._schedulePurge = function () {
              i._purgeTimer.debounce(2e3);
            }),
            (i.doPut = function (e, t) {
              return i._queueMap.enqueue(e, async function () {
                if (t[i._primaryIndex] !== e)
                  throw r("err")("The key you provide does not match.");
                var n = await i._store.get(e),
                  o = n == null ? 0 : i.$SizeLruObjectStore$p_1(n),
                  a = i.$SizeLruObjectStore$p_1(t),
                  l = a - o,
                  s = await i._store.put(e, t);
                return (
                  (i._currentSize = r("WANullthrows")(i.getCurrentSize()) + l),
                  i._schedulePurge(),
                  s
                );
              });
            }),
            (i.doDel = function (e) {
              return i._queueMap.enqueue(e, async function () {
                var t = await i._store.get(e);
                if (t != null) {
                  try {
                    await i._dispose(e, t);
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
                  (await i._store.del(e),
                    (i._currentSize =
                      r("WANullthrows")(i.getCurrentSize()) -
                      i.$SizeLruObjectStore$p_1(t)));
                }
              });
            }),
            (i._store = n),
            (i._primaryIndex = a.primaryIndex),
            (i._dateIndex = a.dateIndex),
            (i._sizeIndex = a.sizeIndex),
            a.maxSize < 0)
          )
            throw r("err")("Cannot set max size to a negative number");
          return (
            (i._maxSize = Math.floor(a.maxSize)),
            (i._dispose = a.dispose),
            (i._purgeTimer = new (o("WAShiftTimer").ShiftTimer)(function () {
              i._purge().catch(function (e) {
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
            i
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.getCurrentSize = function () {
            return this._currentSize;
          }),
          (a.getMaxSize = function () {
            return this._maxSize;
          }),
          (a.setMaxSize = function (t) {
            return t < 0
              ? Promise.reject(r("err")("Cannot set size to a negative number"))
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
          (a.putObject = function (t) {
            var e = t[this._primaryIndex];
            return this.put(e, t);
          }),
          (a.$SizeLruObjectStore$p_1 = function (t) {
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
          (a.doGet = function (t) {
            return this._store.get(t);
          }),
          (a.queryOneByIndex = async function (t) {
            var e = await this._store.queryByIndex(t, { limit: 1 });
            return e.length === 0 ? null : e[0];
          }),
          (a.doQueryByIndex = function (t, n) {
            return this._store.queryByIndex(t, n);
          }),
          (a.doGetAll = function () {
            return this._store.getAll();
          }),
          (a.doClear = async function () {
            (this._purgeTimer.cancel(),
              await this._store.clear(),
              (this._currentSize = 0));
          }),
          (a.doCount = function () {
            return this._store.count();
          }),
          (a.doOpen = async function () {
            var e = this;
            if ((await this._store.open(), this._currentSize == null)) {
              var t = await this._store.doGetAll();
              this._currentSize = r("sumBy")(t, function (t) {
                return e.$SizeLruObjectStore$p_1(t);
              });
            }
          }),
          (a.doClose = function () {
            return ((this._currentSize = null), this._store.close());
          }),
          n
        );
      })(r("WAWebAbstractStore"));
    l.default = m;
  },
  98,
);
