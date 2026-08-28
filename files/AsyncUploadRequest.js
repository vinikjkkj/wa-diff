__d(
  "AsyncUploadRequest",
  ["AsyncUploadBase", "FBLogger"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
          r[o] = arguments[o];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t._files = null),
          (t._uploads = []),
          (t._fileLessUpload = null),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.setFiles = function (t) {
          return ((this._files = r("AsyncUploadBase").parseFiles(t)), this);
        }),
        (n.setAlwaysReturnResponse = function (t) {
          this._shouldAlwaysReturnResponse = t;
        }),
        (n.abort = function () {
          var e = this;
          this._uploads.forEach(function (t) {
            return e._abort(t);
          });
        }),
        (n.send = function () {
          var e = this;
          if (!this._inFlight) {
            ((this._inFlight = !0), (this._uploads = []));
            for (var t in this._files)
              this._files[t].forEach(function (n) {
                e._uploads.push(e._createFileUpload(t, n));
              });
            ((this._waiting = this._uploads.slice(0)),
              (this._pending = []),
              this._uploads.length
                ? this._processQueue()
                : ((this._fileLessUpload = this._createFileUpload(null, null)),
                  this._processUpload(this._fileLessUpload)));
          }
        }),
        (n._processQueue = function () {
          if (
            (e.prototype._processQueue.call(this),
            !this._pending.length && !this._waiting.length)
          ) {
            var t = this._uploads,
              n = this._shouldAlwaysReturnResponse
                ? this._fileLessUpload != null
                  ? { response: this._fileLessUpload.getResponse(), uploads: t }
                  : { response: t[0].getResponse(), uploads: t }
                : t;
            this.inform("complete", n);
          }
        }),
        (t.isSupported = function () {
          return r("AsyncUploadBase").isSupported();
        }),
        t
      );
    })(r("AsyncUploadBase"));
    l.default = e;
  },
  98,
);
