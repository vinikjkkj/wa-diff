__d(
  "FileInputUploader",
  ["ArbiterMixin", "DOM", "DTSG", "FileForm", "Form", "mixin"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t(t) {
        var n;
        return (
          (n = e.call(this) || this),
          (n._onFileFormEvent = function (e, t) {
            return (
              (e === "success" || e === "failure") && n._destroyFileForm(),
              n.inform(e, t)
            );
          }),
          (n._inputElem = t),
          (n._data = {}),
          n
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.setInput = function (t) {
          return ((this._inputElem = t), this);
        }),
        (n.setURI = function (t) {
          return ((this._uri = t), this);
        }),
        (n.setData = function (t) {
          return ((this._data = t), this);
        }),
        (n.setPreprocessHandler = function (t) {
          return ((this._preprocessHandler = t), this);
        }),
        (n.setNetworkErrorRetryLimit = function (t) {
          return ((this._retryLimit = t), this);
        }),
        (n.setFiles = function (t) {
          return ((this._files = t), this);
        }),
        (n.setAllowCrossOrigin = function (t) {
          return ((this._allowCrossOrigin = !!t), this);
        }),
        (n.setAllowCrossPageTransition = function (t) {
          return ((this._allowCrossPageTransition = !!t), this);
        }),
        (n.setUploadInParallel = function (t) {
          return ((this._uploadInParallel = !!t), this);
        }),
        (n.setConcurrentLimit = function (t) {
          return ((this._concurrentLimit = t), this);
        }),
        (n.abort = function () {
          this._fileForm && (this._fileForm.abort(), this._destroyFileForm());
        }),
        (n.send = function () {
          this._createForm();
          var e = this._inputElem && !this._inputElem.parentElement;
          if (!e && this._inputElem) {
            var t = this._inputElem.cloneNode(!1);
            r("DOM").replace(this._inputElem, t);
          }
          (this._inputElem &&
            r("DOM").appendContent(this._formElem, this._inputElem),
            r("DOM").appendContent(document.body, this._formElem),
            this._fileForm.submit(),
            !e && this._inputElem && r("DOM").replace(t, this._inputElem),
            this._removeFormEl());
        }),
        (n._createForm = function () {
          var e, t, n;
          (this._destroyFileForm(),
            (this._formElem = r("DOM").create("form", {
              action: this._uri,
              method: "post",
            })),
            (this._fileForm = new (r("FileForm"))(this._formElem, null, {
              allowCrossOrigin: !!this._allowCrossOrigin,
              allowCrossPageTransition: !!this._allowCrossPageTransition,
              uploadInParallel: !!this._uploadInParallel,
              concurrentLimit: (e = this._concurrentLimit) != null ? e : 0,
              preprocessHandler:
                (t = this._preprocessHandler) != null ? t : null,
              networkErrorRetryLimit: (n = this._retryLimit) != null ? n : 0,
            })),
            this._files && this._fileForm.setFiles(this._files),
            this._fileForm.subscribe(
              r("FileForm").EVENTS,
              this._onFileFormEvent,
            ),
            r("Form").createHiddenInputs(
              babelHelpers.extends(
                { fb_dtsg: o("DTSG").getToken() },
                this._data,
              ),
              this._formElem,
            ));
        }),
        (n._removeFormEl = function () {
          (r("DOM").remove(this._formElem), (this._formElem = null));
        }),
        (n._destroyFileForm = function () {
          this._fileForm && (this._fileForm.destroy(), (this._fileForm = null));
        }),
        t
      );
    })(r("mixin")(r("ArbiterMixin")));
    l.default = e;
  },
  98,
);
