__d(
  "WAWebMexRelayEnvironment",
  [
    "WABinary",
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WAWap",
    "WAWebMexLogging",
    "getErrorSafe",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      n === void 0 && (n = !1);
      var a;
      t != null && (a = { query_id: o("WAWap").CUSTOM_STRING(t) });
      var i = o("WAWap").wap(
          "iq",
          {
            id: o("WAWap").generateId(),
            to: o("WAWap").S_WHATSAPP_NET,
            type: "get",
            xmlns: "w:mex",
          },
          new (o("WAWap").WapNode)(
            "query",
            a,
            o("WABinary").Binary.build(JSON.stringify(e)).readByteArrayView(),
          ),
        ),
        l = new (r("WADeprecatedWapParser"))("mexParser", function (e) {
          return new TextDecoder("utf-8").decode(
            e.child("result").contentBytes(),
          );
        });
      return s(i, l, n);
    }
    function s(e, t, n) {
      return n
        ? o("WADeprecatedSendIq").deprecatedSendIqWithoutRetry(e, t)
        : o("WADeprecatedSendIq").deprecatedSendIq(e, t);
    }
    var u = (function (e) {
        function t(t, n) {
          var r;
          return (
            (r = e.call(this) || this),
            (r.name = "MexIqError"),
            (r.code = t),
            (r.message = n),
            r
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error)),
      c = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this) || this),
            (n.name = "MexPayloadParsingError"),
            (n.error = t),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error)),
      d = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this) || this),
            (n.name = "MexFatalExtensionError"),
            (n.error = t),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error));
    async function m(e, t, n) {
      var a,
        i,
        l = (a = n.metadata) == null ? void 0 : a.mexPerfTracker,
        s = l instanceof o("WAWebMexLogging").MexPerfTracker ? l : null;
      s != null && (s.setQueryId(e.id), s.setOperationName(e.name));
      var m = { variables: t },
        f = await _(
          m,
          r("nullthrows")(e.id),
          s,
          ((i = n.metadata) == null ? void 0 : i.withoutRetry) === !0,
        );
      if (!f.success)
        throw (
          s != null &&
            (s.setHasData(!1),
            s.setErrors([
              o("WAWebMexLogging").createLoggingTransportError(
                f.errorCode,
                f.errorText,
              ),
            ])),
          new u(f.errorCode, f.errorText)
        );
      var g = {};
      try {
        g = JSON.parse(f.result);
      } catch (e) {
        var h = r("getErrorSafe")(e);
        throw (
          s != null &&
            (s.setHasData(!1),
            s.setErrors([
              o("WAWebMexLogging").createLoggingClientError(472, h.message),
            ])),
          new c(h)
        );
      }
      var y = g;
      s != null &&
        (s.setHasData(y.data != null), s.setExtensionErrors(y.errors));
      var C = p(y.errors);
      if (C != null) throw new d(C);
      return g;
    }
    function p(e) {
      var t;
      if (e == null || e.length === 0) return null;
      var n =
        (t = e.find(function (e) {
          var t;
          return ((t = e.extensions) == null ? void 0 : t.is_summary) === !0;
        })) != null
          ? t
          : e.find(function (e) {
              var t;
              return (
                ((t = e.extensions) == null ? void 0 : t.error_code) != null
              );
            });
      if (n == null) {
        var r = e[0];
        return ((r.extensions.error_code = 500), r);
      }
      return n;
    }
    async function _(t, n, a, i) {
      try {
        return await e(t, n, i);
      } catch (e) {
        var l = r("getErrorSafe")(e);
        throw (
          a != null &&
            (a.setHasData(!1),
            a.setErrors([
              o("WAWebMexLogging").createLoggingClientError(471, l.message),
            ])),
          new u(500, l.message)
        );
      }
    }
    ((l.sendMexIq = e),
      (l.MexIqError = u),
      (l.MexPayloadParsingError = c),
      (l.MexFatalExtensionError = d),
      (l.fetchFunc = m),
      (l.parseFatalExtensionError = p));
  },
  98,
);
