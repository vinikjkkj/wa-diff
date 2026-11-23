__d(
  "WAWebAbstractStore",
  ["err"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e() {}
      var t = e.prototype;
      return (
        (t.open = function () {
          var e = this;
          return this.$2
            ? this.$2
            : this.$1
              ? ((this.$2 = this.$1
                  .catch(function (t) {
                    throw ((e.$2 = null), t);
                  })
                  .then(function () {
                    return ((e.$2 = null), e.open());
                  })),
                this.$2)
              : ((this.$2 = this.doOpen()
                  .catch(function (t) {
                    throw ((e.$2 = null), t);
                  })
                  .then(function () {
                    e.$2 = null;
                  })),
                this.$2);
        }),
        (t.close = function () {
          var e = this;
          return this.$1
            ? this.$1
            : this.$2
              ? ((this.$1 = this.$2
                  .catch(function (t) {
                    throw ((e.$1 = null), t);
                  })
                  .then(function () {
                    return ((e.$1 = null), e.close());
                  })),
                this.$1)
              : ((this.$1 = this.doClose()
                  .catch(function (t) {
                    throw ((e.$1 = null), t);
                  })
                  .then(function () {
                    e.$1 = null;
                  })),
                this.$1);
        }),
        (t.get = async function (t) {
          return (await this.open(), this.doGet(t));
        }),
        (t.queryByIndex = async function (t, n) {
          return (await this.open(), this.doQueryByIndex(t, n));
        }),
        (t.getAll = async function () {
          return (await this.open(), this.doGetAll());
        }),
        (t.put = async function (t, n) {
          return (await this.open(), this.doPut(t, n));
        }),
        (t.del = async function (t) {
          return (await this.open(), this.doDel(t));
        }),
        (t.count = async function () {
          return (await this.open(), this.doCount());
        }),
        (t.clear = async function () {
          return (await this.open(), this.doClear());
        }),
        (t.doGet = function (t) {
          throw r("err")("Not implemented");
        }),
        (t.doQueryByIndex = function (t, n) {
          throw r("err")("Not implemented");
        }),
        (t.doGetAll = function () {
          throw r("err")("Not implemented");
        }),
        (t.doPut = function (t, n) {
          throw r("err")("Not implemented");
        }),
        (t.doDel = function (t) {
          throw r("err")("Not implemented");
        }),
        (t.doCount = function () {
          throw r("err")("Not implemented");
        }),
        (t.doClear = function () {
          throw r("err")("Not implemented");
        }),
        (t.doOpen = function () {
          throw r("err")("Not implemented");
        }),
        (t.doClose = function () {
          throw r("err")("Not implemented");
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
