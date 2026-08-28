__d(
  "FileForm",
  [
    "ArbiterMixin",
    "AsyncRequest",
    "AsyncResponse",
    "AsyncUploadRequest",
    "BehaviorsMixin",
    "DOMQuery",
    "DataStore",
    "Event",
    "FBLogger",
    "Form",
    "Parent",
    "isElementNode",
    "mixin",
    "setTimeout",
    "shield",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = {},
        n = o("DOMQuery").scry(e, 'input[type="file"]');
      return (
        n.forEach(function (e) {
          t[e.name] = e.files;
        }),
        t
      );
    }
    function s(e) {
      var t = o("DOMQuery").scry(e, 'input[type="file"]');
      t.forEach(function (e) {
        e.files = null;
      });
    }
    var u = (function (t) {
      function n(e, n, a) {
        var i;
        if (
          ((i = t.call(this) || this),
          (i._allowCrossOrigin = !1),
          (i._allowCrossPageTransition = !1),
          (i._uploadInParallel = !1),
          (i._handleSubmit = function (e) {
            if (!(e.isDefaultPrevented() || e.getTarget() !== i._form)) {
              if (i.inform("submit") === !1) {
                e.prevent();
                return;
              }
              i.submit(e);
            }
          }),
          (i._click = function (e) {
            for (var t = e.getTarget(); r("isElementNode")(t); ) {
              if (t.type === "submit") {
                ((i._clickTarget = t), r("setTimeout")(i._unclick, 0));
                break;
              }
              t = t.parentNode;
            }
          }),
          (i._unclick = function () {
            i._clickTarget = null;
          }),
          (i.initial = function (e) {
            return i.inform("initial", { upload: e });
          }),
          e.getAttribute("rel") === "async")
        )
          throw r("FBLogger")("FileForm", "primer-only").mustfixThrow(
            "FileForm cannot be used with Primer forms.",
          );
        if ((e.getAttribute("method") || "").toUpperCase() !== "POST")
          throw r("FBLogger")("FileForm", "post-only").mustfixThrow(
            "FileForm must be used with POST forms.",
          );
        return (
          (i._form = e),
          (i._previousEncoding = i._form.enctype),
          (i._form.enctype = i._form.encoding = "multipart/form-data"),
          (i._files = null),
          (i._customHeader = {}),
          n && i.enableBehaviors(n),
          (i._options = a || {}),
          i.setAllowCrossOrigin(i._options.allowCrossOrigin),
          i.setAllowCrossPageTransition(i._options.allowCrossPageTransition),
          i.setUploadInParallel(i._options.uploadInParallel),
          i.setConcurrentLimit(i._options.concurrentLimit),
          i.setPreprocessHandler(i._options.preprocessHandler),
          i.setNetworkErrorRetryLimit(i._options.networkErrorRetryLimit),
          (i._listeners = [
            r("Event").listen(
              document.documentElement,
              "submit",
              i._handleSubmit,
            ),
            r("Event").listen(i._form, "click", i._click),
          ]),
          o("DataStore").set(i._form, "FileForm", i),
          i
        );
      }
      babelHelpers.inheritsLoose(n, t);
      var a = n.prototype;
      return (
        (a.getRoot = function () {
          return this._form;
        }),
        (a.setAllowCrossOrigin = function (t) {
          return ((this._allowCrossOrigin = !!t), this);
        }),
        (a.setAllowCrossPageTransition = function (t) {
          return ((this._allowCrossPageTransition = !!t), this);
        }),
        (a.setUploadInParallel = function (t) {
          return ((this._uploadInParallel = !!t), this);
        }),
        (a.setConcurrentLimit = function (t) {
          return ((this._concurrentLimit = t), this);
        }),
        (a.setCustomHttpHeader = function (t, n) {
          return ((this._customHeader[t] = n), this);
        }),
        (a.setPreprocessHandler = function (t) {
          return ((this._preprocessHandler = t), this);
        }),
        (a.setNetworkErrorRetryLimit = function (t) {
          return ((this._retryLimit = t), this);
        }),
        (a.setFiles = function (t) {
          return ((this._files = t), this);
        }),
        (a.submit = function (n) {
          var t = this,
            a;
          if (this._uploadInParallel && r("AsyncUploadRequest").isSupported()) {
            a = new (r("AsyncUploadRequest"))()
              .setPreprocessHandler(this._preprocessHandler)
              .setData(o("Form").serialize(this._form, this._clickTarget))
              .setNetworkErrorRetryLimit(this._retryLimit);
            for (var i in this._customHeader)
              a.setCustomHttpHeader(i, this._customHeader[i]);
            (this._concurrentLimit && a.setLimit(this._concurrentLimit),
              this._files
                ? a.setFiles(this._files)
                : a.setFiles(e(this._form)));
            var l = [
              a.subscribe("progress", function (e, n) {
                t.progress(n, n.getProgressEvent());
              }),
              a.subscribe("initial", function (e, n) {
                t.initial(n);
              }),
              a.subscribe("success", function (e, n) {
                t.success(n, n.getResponse());
              }),
              a.subscribe("start", function (e, n) {
                t.inform("start", { upload: n });
              }),
              a.subscribe("failure", function (e, n) {
                return (t.failure(n, n.getResponse()), !1);
              }),
              a.subscribe("complete", function () {
                for (; l.length; ) l.pop().unsubscribe();
              }),
            ];
          } else {
            var s,
              u = this._files;
            if (u) {
              s = o("Form").createFormData(
                o("Form").serialize(this._form, this._clickTarget),
              );
              var c = r("AsyncUploadRequest").parseFiles(u),
                d = function (t) {
                  var e = c[t];
                  e.length === 1
                    ? s.append(t, e[0])
                    : ((t += "[]"),
                      e.forEach(function (e) {
                        s.append(t, e);
                      }));
                };
              for (var m in c) d(m);
            } else s = o("Form").createFormData(this._form, this._clickTarget);
            ((a = new (r("AsyncRequest"))()
              .setRawData(s)
              .setHandler(function (e) {
                return t.success(null, e);
              })
              .setErrorHandler(function (e) {
                return t.failure(null, e);
              })
              .setUploadProgressHandler(function (e) {
                return t.progress(null, e);
              })
              .setInitialHandler(r("shield")(this.initial, this, null))),
              this.inform("start", { upload: null }));
          }
          (a
            .setAllowCrossOrigin(this._allowCrossOrigin)
            .setAllowCrossPageTransition(this._allowCrossPageTransition)
            .setRelativeTo(this._form)
            .setStatusElement(this._getStatusElement())
            .setURI(this._form.action)
            .send(),
            (this._request = a),
            n && n.prevent());
        }),
        (a.success = function (t, n) {
          var e = { response: n, upload: t };
          (this.inform("success", e) !== !1 &&
            r("Event").fire(this._form, "success", e),
            this._cleanup());
        }),
        (a.failure = function (t, n) {
          var e = { response: n, upload: t };
          (this.inform("failure", e) !== !1 &&
            r("Event").fire(this._form, "error", e) !== !1 &&
            r("AsyncResponse").defaultErrorHandler(n),
            this._cleanup());
        }),
        (a.progress = function (t, n) {
          this.inform("progress", { event: n, upload: t });
        }),
        (a.abort = function () {
          this._request && (this._request.abort(), this._cleanup());
        }),
        (a.clear = function () {
          s(this._form);
        }),
        (a.destroy = function () {
          for (this._cleanup(); this._listeners && this._listeners.length; )
            this._listeners.pop().remove();
          ((this._listeners = null),
            (this._form.enctype = this._form.encoding = this._previousEncoding),
            o("DataStore").remove(this._form, "FileForm"));
        }),
        (a._cleanup = function () {
          this._request = null;
        }),
        (a._getStatusElement = function () {
          return o("Parent").byClass(this._form, "stat_elem") || this._form;
        }),
        (n.getInstance = function (t) {
          return o("DataStore").get(t, "FileForm");
        }),
        n
      );
    })(r("mixin")(r("ArbiterMixin"), r("BehaviorsMixin")));
    (Object.assign(u, {
      EVENTS: ["start", "submit", "initial", "progress", "success", "failure"],
    }),
      (l.default = u));
  },
  98,
);
