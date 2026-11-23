__d(
  "WAWebSizeLruObjectStore",
  [
    "WALogger",
    "WAPromiseLoop",
    "WAPromiseQueue",
    "WAShiftTimer",
    "WAWebAbstractStore",
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
      m = (function (t) {
        function n(n, a) {
          var i;
          if (
            ((i = t.call(this) || this),
            (i.$SizeLruObjectStore$p_10 = new (o(
              "WAPromiseQueue",
            ).PromiseQueueMap)()),
            (i.$SizeLruObjectStore$p_11 = function () {
              if (i.$SizeLruObjectStore$p_9) return i.$SizeLruObjectStore$p_9;
              var t = i.open().then(function () {
                return o("WAPromiseLoop").promiseLoop(async function (t) {
                  var n = function () {
                      ((i.$SizeLruObjectStore$p_9 = null), t());
                    },
                    a = i.getCurrentSize();
                  if (a == null || a <= i.$SizeLruObjectStore$p_5) {
                    n();
                    return;
                  }
                  var l = await i.queryOneByIndex(i.$SizeLruObjectStore$p_3),
                    s = i.getCurrentSize(),
                    u = i.$SizeLruObjectStore$p_5;
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
                  var c = l[i.$SizeLruObjectStore$p_2];
                  return i.del(c);
                });
              });
              return (i.$SizeLruObjectStore$p_9 = t);
            }),
            (i.$SizeLruObjectStore$p_12 = function () {
              i.$SizeLruObjectStore$p_8.debounce(2e3);
            }),
            (i.doPut = function (e, t) {
              return i.$SizeLruObjectStore$p_10.enqueue(e, async function () {
                if (t[i.$SizeLruObjectStore$p_2] !== e)
                  throw r("err")("The key you provide does not match.");
                var n = await i.$SizeLruObjectStore$p_1.get(e),
                  o = n == null ? 0 : i.$SizeLruObjectStore$p_13(n),
                  a = i.$SizeLruObjectStore$p_13(t),
                  l = a - o,
                  s = await i.$SizeLruObjectStore$p_1.put(e, t);
                return (
                  (i.$SizeLruObjectStore$p_6 =
                    r("nullthrows")(i.getCurrentSize()) + l),
                  i.$SizeLruObjectStore$p_12(),
                  s
                );
              });
            }),
            (i.doDel = function (e) {
              return i.$SizeLruObjectStore$p_10.enqueue(e, async function () {
                var t = await i.$SizeLruObjectStore$p_1.get(e);
                if (t != null) {
                  try {
                    await i.$SizeLruObjectStore$p_7(e, t);
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
                  (await i.$SizeLruObjectStore$p_1.del(e),
                    (i.$SizeLruObjectStore$p_6 =
                      r("nullthrows")(i.getCurrentSize()) -
                      i.$SizeLruObjectStore$p_13(t)));
                }
              });
            }),
            (i.$SizeLruObjectStore$p_1 = n),
            (i.$SizeLruObjectStore$p_2 = a.primaryIndex),
            (i.$SizeLruObjectStore$p_3 = a.dateIndex),
            (i.$SizeLruObjectStore$p_4 = a.sizeIndex),
            a.maxSize < 0)
          )
            throw r("err")("Cannot set max size to a negative number");
          return (
            (i.$SizeLruObjectStore$p_5 = Math.floor(a.maxSize)),
            (i.$SizeLruObjectStore$p_7 = a.dispose),
            (i.$SizeLruObjectStore$p_8 = new (o("WAShiftTimer").ShiftTimer)(
              function () {
                i.$SizeLruObjectStore$p_11().catch(function (e) {
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
            i
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.getCurrentSize = function () {
            return this.$SizeLruObjectStore$p_6;
          }),
          (a.getMaxSize = function () {
            return this.$SizeLruObjectStore$p_5;
          }),
          (a.setMaxSize = function (t) {
            return t < 0
              ? Promise.reject(r("err")("Cannot set size to a negative number"))
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
          (a.putObject = function (t) {
            var e = t[this.$SizeLruObjectStore$p_2];
            return this.put(e, t);
          }),
          (a.$SizeLruObjectStore$p_13 = function (t) {
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
          (a.doGet = function (t) {
            return this.$SizeLruObjectStore$p_1.get(t);
          }),
          (a.queryOneByIndex = async function (t) {
            var e = await this.$SizeLruObjectStore$p_1.queryByIndex(t, {
              limit: 1,
            });
            return e.length === 0 ? null : e[0];
          }),
          (a.doQueryByIndex = function (t, n) {
            return this.$SizeLruObjectStore$p_1.queryByIndex(t, n);
          }),
          (a.doGetAll = function () {
            return this.$SizeLruObjectStore$p_1.getAll();
          }),
          (a.doClear = async function () {
            (this.$SizeLruObjectStore$p_8.cancel(),
              await this.$SizeLruObjectStore$p_1.clear(),
              (this.$SizeLruObjectStore$p_6 = 0));
          }),
          (a.doCount = function () {
            return this.$SizeLruObjectStore$p_1.count();
          }),
          (a.doOpen = async function () {
            var e = this;
            if (
              (await this.$SizeLruObjectStore$p_1.open(),
              this.$SizeLruObjectStore$p_6 == null)
            ) {
              var t = await this.$SizeLruObjectStore$p_1.doGetAll();
              this.$SizeLruObjectStore$p_6 = r("sumBy")(t, function (t) {
                return e.$SizeLruObjectStore$p_13(t);
              });
            }
          }),
          (a.doClose = function () {
            return (
              (this.$SizeLruObjectStore$p_6 = null),
              this.$SizeLruObjectStore$p_1.close()
            );
          }),
          n
        );
      })(r("WAWebAbstractStore"));
    l.default = m;
  },
  98,
);
