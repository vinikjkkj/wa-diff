__d(
  "WAWebMexRelayEnvironment",
  [
    "WABinary",
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WANullthrows",
    "WAWap",
    "WAWebMexLogging",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n;
      return (
        t != null && (n = { query_id: o("WAWap").CUSTOM_STRING(t) }),
        o("WADeprecatedSendIq").deprecatedSendIq(
          o("WAWap").wap(
            "iq",
            {
              id: o("WAWap").generateId(),
              to: o("WAWap").S_WHATSAPP_NET,
              type: "get",
              xmlns: "w:mex",
            },
            new (o("WAWap").WapNode)(
              "query",
              n,
              o("WABinary").Binary.build(JSON.stringify(e)).readByteArrayView(),
            ),
          ),
          new (r("WADeprecatedWapParser"))("mexParser", function (e) {
            return new TextDecoder("utf-8").decode(
              e.child("result").contentBytes(),
            );
          }),
        )
      );
    }
    var s = (function (e) {
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
      u = (function (e) {
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
      c = (function (e) {
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
    function d(e, t, n) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a,
            i = (a = n.metadata) == null ? void 0 : a.mexPerfTracker,
            l = i instanceof o("WAWebMexLogging").MexPerfTracker ? i : null;
          l != null && (l.setQueryId(e.id), l.setOperationName(e.name));
          var d = { variables: t },
            m = yield _(d, r("WANullthrows")(e.id), l);
          if (!m.success)
            throw (
              l != null &&
                (l.setHasData(!1),
                l.setErrors([
                  o("WAWebMexLogging").createLoggingTransportError(
                    m.errorCode,
                    m.errorText,
                  ),
                ])),
              new s(m.errorCode, m.errorText)
            );
          var f = {};
          try {
            f = JSON.parse(m.result);
          } catch (e) {
            var g = r("getErrorSafe")(e);
            throw (
              l != null &&
                (l.setHasData(!1),
                l.setErrors([
                  o("WAWebMexLogging").createLoggingClientError(472, g.message),
                ])),
              new u(g)
            );
          }
          var h = f;
          l != null &&
            (l.setHasData(h.data != null), l.setExtensionErrors(h.errors));
          var y = p(h.errors);
          if (y != null) throw new c(y);
          return f;
        })),
        m.apply(this, arguments)
      );
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
    function _(e, t, n) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          try {
            return yield e(t, n);
          } catch (e) {
            var i = r("getErrorSafe")(e);
            throw (
              a != null &&
                (a.setHasData(!1),
                a.setErrors([
                  o("WAWebMexLogging").createLoggingClientError(471, i.message),
                ])),
              new s(500, i.message)
            );
          }
        })),
        f.apply(this, arguments)
      );
    }
    ((l.sendMexIq = e),
      (l.MexIqError = s),
      (l.MexPayloadParsingError = u),
      (l.MexFatalExtensionError = c),
      (l.fetchFunc = d),
      (l.parseFatalExtensionError = p));
  },
  98,
);
