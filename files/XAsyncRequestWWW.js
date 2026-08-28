__d(
  "XAsyncRequestWWW",
  ["AsyncRequest"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e) {
        var t = this;
        ((this.setAllowCrossPageTransition = function (e) {
          return (t.$1.setAllowCrossPageTransition(e), t);
        }),
          (this.$1 = new (r("AsyncRequest"))(e)));
      }
      var t = e.prototype;
      return (
        (t.setURI = function (t) {
          return (this.$1.setURI(t), this);
        }),
        (t.setTimeoutHandler = function (t, n) {
          return (this.$1.setTimeoutHandler(t, n), this);
        }),
        (t.setOption = function (t, n) {
          return (this.$1.setOption(t, n), this);
        }),
        (t.setMethod = function (t) {
          return (this.$1.setMethod(t), this);
        }),
        (t.setAutoProcess = function (t) {
          return (this.$1.setOption("suppressEvaluation", t), this);
        }),
        (t.setData = function (t) {
          return (this.$1.setData(t), this);
        }),
        (t.setHandler = function (t) {
          return (this.$1.setHandler(t), this);
        }),
        (t.setPayloadHandler = function (t) {
          return (
            this.setHandler(function (e) {
              return t(e.payload);
            }),
            this
          );
        }),
        (t.setErrorHandler = function (t) {
          return (this.$1.setErrorHandler(t), this);
        }),
        (t.send = function () {
          return (this.$1.send(), this);
        }),
        (t.abort = function () {
          this.$1.abort();
        }),
        (t.setReadOnly = function (t) {
          return (this.$1.setReadOnly(t), this);
        }),
        (t.setAllowCrossOrigin = function (t) {
          return (this.$1.setAllowCrossOrigin(t), this);
        }),
        (t.setAllowCredentials = function (t) {
          return (this.$1.setAllowCredentials(t), this);
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
