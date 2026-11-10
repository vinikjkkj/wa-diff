__d(
  "AsyncResponse",
  ["invariant", "Bootloader", "FBLogger", "HTML", "WebDriverConfig", "err"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = (function () {
      function e(e, t) {
        ((this.error = 0),
          (this.errorSummary = null),
          (this.errorDescription = null),
          (this.errorMid = null),
          (this.onload = null),
          (this.replay = !1),
          (this.payload = t),
          (this.request = e),
          (this.silentError = !1),
          (this.transientError = !1),
          (this.blockedAction = !1),
          (this.is_last = !0),
          (this.responseHeaders = null));
      }
      var t = e.prototype;
      return (
        (t.getRequest = function () {
          return this.request;
        }),
        (t.getPayload = function () {
          return this.payload;
        }),
        (t.toError = function () {
          this.error !== 0 || s(0, 5599);
          var e = this.errorSummary || "",
            t = this.getErrorDescriptionString() || "",
            n = r("err")(e.toString() + ": " + t);
          return (
            (n.code = this.error),
            (n.description = this.errorDescription || ""),
            (n.descriptionString = t),
            (n.response = this),
            (n.summary = e),
            (n.isSilent = this.silentError),
            (n.isTransient = this.transientError),
            (n.mid = this.errorMid),
            n
          );
        }),
        (t.getError = function () {
          return this.error;
        }),
        (t.getErrorSummary = function () {
          return this.errorSummary;
        }),
        (t.setErrorSummary = function (t) {
          var e = t === void 0 ? null : t;
          return ((this.errorSummary = e), this);
        }),
        (t.getErrorDescription = function () {
          return this.errorDescription;
        }),
        (t.getErrorDescriptionString = function () {
          var e = this.getErrorDescription();
          if (e == null) return null;
          if (r("HTML").isHTML(e)) {
            var t = new (r("HTML"))(e);
            return t.getRootNode().textContent;
          }
          return e.toString();
        }),
        (t.getErrorIsWarning = function () {
          return !!this.errorIsWarning;
        }),
        (t.isSilent = function () {
          return !!this.silentError;
        }),
        (t.isTransient = function () {
          return !!this.transientError;
        }),
        (t.isBlockedAction = function () {
          return !!this.blockedAction;
        }),
        (t.getResponseHeader = function (t) {
          var e = this.responseHeaders;
          if (!e) return null;
          e = e.replace(/^\n/, "");
          for (
            var n = t.toLowerCase(), r = e.split("\r\n"), o = 0;
            o < r.length;
            ++o
          ) {
            var a = r[o],
              i = a.indexOf(": ");
            if (!(i <= 0)) {
              var l = a.substring(0, i).toLowerCase();
              if (l === n) return a.substring(i + 2);
            }
          }
          return null;
        }),
        (e.defaultErrorHandler = function (n) {
          try {
            n.silentError
              ? r("FBLogger")("async_response")
                  .catching(n.toError())
                  .warn("default error handler called")
              : e.verboseErrorHandler(n);
          } catch (e) {
            alert(n);
          }
        }),
        (e.verboseErrorHandler = function (t, n) {
          r("Bootloader").loadModules(
            ["ExceptionDialog"],
            function (e) {
              return e.showAsyncError(t, n);
            },
            "AsyncResponse",
          );
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
