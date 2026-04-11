__d(
  "CometAsyncFetchError",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      if (e == null) return "";
      if (typeof e == "string") return e;
      try {
        return String.fromCharCode.apply(null, new Uint16Array(e));
      } catch (e) {
        return "<error parsing ArrayBuffer>";
      }
    }
    var l = (function (t) {
      function n(e, n, r, o, a) {
        var i;
        return (
          (i = t.call(this, e) || this),
          (i.errorMsg = e),
          (i.errorCode = n),
          (i.errorRawResponseHeaders = r),
          (i.errorRawTransport = o),
          (i.errorType = a),
          i
        );
      }
      babelHelpers.inheritsLoose(n, t);
      var r = n.prototype;
      return (
        (r.toString = function () {
          var t,
            n,
            r,
            o,
            a,
            i =
              ((t = this.errorCode) != null ? t : "") +
              "." +
              e(this.errorMsg) +
              "." +
              ((n = this.errorRawResponseHeaders) != null ? n : "") +
              "." +
              ((r = this.errorRawTransport) != null ? r : "") +
              "." +
              ((o = this.errorType) != null ? o : "") +
              "." +
              ((a = this.errorRawTransportStatus) != null ? a : "");
          return "CometAyncFetchError: " + i;
        }),
        n
      );
    })(babelHelpers.wrapNativeSuper(Error));
    i.default = l;
  },
  66,
);
