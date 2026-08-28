__d(
  "AsyncUploadBase",
  [
    "ArbiterMixin",
    "AsyncRequest",
    "AsyncResponse",
    "BrowserSupport",
    "Form",
    "forEachObject",
    "mixin",
    "removeFromArray",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this) || this),
            (n._allowCrossOrigin = !1),
            (n._allowCrossPageTransition = !1),
            (n._customHeader = {}),
            (n._inFlight = !1),
            (n._limit = 10),
            (n._option = {}),
            (n._preventDefaultErrorHandler = !1),
            (n._suspended = !1),
            (n._shouldRetryOnFailure = void 0),
            t && n.setURI(t),
            n.setNetworkErrorRetryLimit(0),
            n
          );
        }
        (babelHelpers.inheritsLoose(t, e),
          (t.parseFiles = function (t) {
            var e = {};
            return (
              r("forEachObject")(t, function (t, n) {
                if (Array.isArray(t)) e[n] = t;
                else if (((e[n] = []), t instanceof window.FileList))
                  for (var r = 0; r < t.length; r++) e[n].push(t.item(r));
                else
                  (t instanceof window.File || t instanceof window.Blob) &&
                    e[n].push(t);
              }),
              e
            );
          }));
        var n = t.prototype;
        return (
          (n.setAllowCrossOrigin = function (t) {
            return ((this._allowCrossOrigin = !!t), this);
          }),
          (n.setAllowCrossPageTransition = function (t) {
            return ((this._allowCrossPageTransition = !!t), this);
          }),
          (n.setCustomHttpHeader = function (t, n) {
            return ((this._customHeader[t] = n), this);
          }),
          (n.setData = function (t) {
            return ((this._data = t), this);
          }),
          (n.setOption = function (t, n) {
            return ((this._option[t] = n), this);
          }),
          (n.setPreventDefaultErrorHandler = function (t) {
            return ((this._preventDefaultErrorHandler = t), this);
          }),
          (n.setLimit = function (t) {
            return ((this._limit = t), this);
          }),
          (n.setNetworkErrorRetryLimit = function (t) {
            return ((this._retryLimit = t), this);
          }),
          (n.setPreprocessHandler = function (t) {
            return ((this._preprocessHandler = t), this);
          }),
          (n.setRelativeTo = function (t) {
            return ((this._relativeTo = t), this);
          }),
          (n.setStatusElement = function (t) {
            return ((this._statusElement = t), this);
          }),
          (n.setURI = function (t) {
            return ((this._uri = t), this);
          }),
          (n.setShouldRetryOnFailure = function (t) {
            return ((this._shouldRetryOnFailure = t), this);
          }),
          (n.suspend = function () {
            return ((this._suspended = !0), this);
          }),
          (n.resume = function () {
            return ((this._suspended = !1), this._processQueue(), this);
          }),
          (n.isUploading = function () {
            return this._inFlight;
          }),
          (n._createFileUpload = function (t, n, r) {
            return new s(t, n, r);
          }),
          (n._processQueue = function () {
            var e = this;
            if (!this._suspended)
              for (
                ;
                this._pending.length < this._limit && this._waiting.length;
              ) {
                var t = this._waiting.shift(),
                  n = this._preprocessHandler;
                (n
                  ? n(t, function (t) {
                      return e._processUpload(t);
                    })
                  : this._processUpload(t),
                  this._pending.push(t));
              }
          }),
          (n._processUpload = function (t) {
            var e = this,
              n = o("Form").createFormData(t.getData() || this._data);
            if (t.getFile()) {
              n.append(t.getName(), t.getFile());
              var a = t.getFile().uploadID;
              (a && n.append("upload_id", a),
                t.getAdditionalData().forEach(function (e, t) {
                  return n.append(t, e);
                }));
            }
            var i = new (r("AsyncRequest"))()
              .setAllowCrossOrigin(this._allowCrossOrigin)
              .setAllowCrossPageTransition(this._allowCrossPageTransition)
              .setURI(this._uri)
              .setRawData(n)
              .setStatusElement(this._statusElement)
              .setHandler(function (n) {
                return e._success(t, n);
              })
              .setErrorHandler(function (n) {
                return e._failure(t, n);
              })
              .setUploadProgressHandler(function (n) {
                return e._progress(t, n);
              })
              .setInitialHandler(function () {
                return e._initial(t);
              });
            for (var l in this._option) i.setOption(l, this._option[l]);
            for (var s in this._customHeader)
              i.setRequestHeader(s, this._customHeader[s]);
            (this._relativeTo && i.setRelativeTo(this._relativeTo),
              i.send(),
              t.setAsyncRequest(i),
              (this._inFlight = !0),
              t.getRetryCount() || this.inform("start", t));
          }),
          (n._abort = function (t) {
            (this._pending.indexOf(t) !== -1 &&
              (r("removeFromArray")(this._pending, t), this._processQueue()),
              r("removeFromArray")(this._waiting, t),
              t.abort());
          }),
          (n._initial = function (t) {
            t.isAborted() || this.inform("initial", t);
          }),
          (n._success = function (t, n) {
            if (t.isAborted()) {
              this.inform("success_after_abort", n);
              return;
            }
            (this._complete(t),
              this.inform("success", t.handleSuccess(n)),
              this._processQueue());
          }),
          (n._retryUpload = function (t) {
            (t.increaseRetryCount(), this._processUpload(t));
          }),
          (n._failure = function (t, n) {
            var e;
            if (!t.isAborted()) {
              if (
                (n.error === 1004 ||
                  ((e = this._shouldRetryOnFailure) != null &&
                    e.call(this, n))) &&
                t.getRetryCount() < (this._retryLimit || 0)
              )
                return this._retryUpload(t);
              (this._complete(t),
                this.inform("failure", t.handleFailure(n)) !== !1 &&
                  (this._preventDefaultErrorHandler ||
                    r("AsyncResponse").defaultErrorHandler(n)),
                this._processQueue());
            }
          }),
          (n._progress = function (t, n) {
            t.isAborted() || this.inform("progress", t.handleProgress(n));
          }),
          (n._complete = function (t) {
            (r("removeFromArray")(this._pending, t),
              this._pending.length || (this._inFlight = !1));
          }),
          (t.isSupported = function () {
            return o("BrowserSupport").hasFileAPI();
          }),
          t
        );
      })(r("mixin")(r("ArbiterMixin"))),
      s = (function () {
        function e(e, t, n) {
          ((this._additionalData = new Map()),
            (this._success = null),
            (this._response = null),
            (this._progressEvent = null),
            (this._request = null),
            (this._numRetries = 0),
            (this._aborted = !1),
            (this._name = e),
            (this._file = t),
            (this._data = n));
        }
        var t = e.prototype;
        return (
          (t.getName = function () {
            return this._name;
          }),
          (t.getFile = function () {
            return this._file;
          }),
          (t.setFile = function (t) {
            this._file = t;
          }),
          (t.getData = function () {
            return this._data;
          }),
          (t.getAdditionalData = function () {
            return this._additionalData;
          }),
          (t.isComplete = function () {
            return this._success !== null;
          }),
          (t.isSuccess = function () {
            return this._success === !0;
          }),
          (t.getResponse = function () {
            return this._response;
          }),
          (t.getProgressEvent = function () {
            return this._progressEvent;
          }),
          (t.setAsyncRequest = function (t) {
            return ((this._request = t), this);
          }),
          (t.increaseRetryCount = function () {
            return (this._numRetries++, this);
          }),
          (t.getRetryCount = function () {
            return this._numRetries;
          }),
          (t.isWaiting = function () {
            return !this._request;
          }),
          (t.isAborted = function () {
            return this._aborted;
          }),
          (t.abort = function () {
            ((this._request = null), (this._aborted = !0));
          }),
          (t.handleSuccess = function (t) {
            return (
              (this._success = !0),
              (this._response = t),
              (this._progressEvent = null),
              this
            );
          }),
          (t.handleFailure = function (t) {
            return (
              (this._success = !1),
              (this._response = t),
              (this._progressEvent = null),
              this
            );
          }),
          (t.handleProgress = function (t) {
            return ((this._progressEvent = t), this);
          }),
          e
        );
      })();
    l.default = e;
  },
  98,
);
