__d(
  "URIBase",
  [
    "ExecutionEnvironment",
    "PHPQuerySerializerNoEncoding",
    "URIAbstractBase",
    "URISchemes",
    "UriNeedRawQuerySVChecker",
    "err",
    "getErrorSafe",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t, n, o) {
      try {
        return r("URIAbstractBase").parse(e, t, n, o);
      } catch (e) {
        var a = r("getErrorSafe")(e);
        throw new Error(r("err")(a.message));
      }
    }
    var c = (function (t) {
      function n(e, n, r, a) {
        var i;
        return (
          r === void 0 &&
            (r = (s || (s = o("URISchemes"))).Options.INCLUDE_DEFAULTS),
          (i = t.call(this, e, n, r, a) || this),
          (i.$URIBase$p_1 = n),
          u(i, e, !0, n),
          i
        );
      }
      (babelHelpers.inheritsLoose(n, t),
        (n.tryParse = function (t, r, a, i) {
          a === void 0 &&
            (a = (s || (s = o("URISchemes"))).Options.INCLUDE_DEFAULTS);
          var e = new n(null, r, a, i);
          return u(e, t, !1, r) ? e : null;
        }),
        (n.isValid = function (t, r, a, i) {
          return (
            a === void 0 &&
              (a = (s || (s = o("URISchemes"))).Options.INCLUDE_DEFAULTS),
            !!n.tryParse(t, r, a, i)
          );
        }));
      var a = n.prototype;
      return (
        (a.setDomain = function (n) {
          try {
            t.prototype.setDomain.call(this, n);
          } catch (t) {
            var e = r("getErrorSafe")(t);
            throw new Error(r("err")(e.message));
          }
          return this;
        }),
        (a.getQualifiedURIBase = function () {
          return new n(this, this.$URIBase$p_1).qualify();
        }),
        (a.qualify = function () {
          if (!this.getDomain()) {
            var t = (
              typeof self != "undefined"
                ? self
                : typeof window != "undefined"
                  ? window
                  : { location: { href: "" } }
            ).location.href;
            (e || (e = r("ExecutionEnvironment"))).isInWorker &&
              t &&
              t.startsWith("blob:") &&
              (t = t.substring(5, t.length));
            var o = new n(t, this.$URIBase$p_1);
            this.setProtocol(o.getProtocol())
              .setDomain(o.getDomain())
              .setPort(o.getPort());
          }
          return this;
        }),
        (a.isSubdomainOfDomain = function (t) {
          var e = this.getDomain();
          return n.isDomainSubdomainOfDomain(e, t, this.$URIBase$p_1);
        }),
        (n.isDomainSubdomainOfDomain = function (t, r, o) {
          if (r === "" || t === "") return !1;
          if (t.endsWith(r)) {
            var e = t.length,
              a = r.length,
              i = e - a - 1;
            if (e === a || t[i] === ".") {
              var l = new n(null, o);
              return (l.setDomain(r), n.isValid(l, o));
            }
          }
          return !1;
        }),
        (a.toString = function () {
          return t.prototype.toString.call(
            this,
            r("UriNeedRawQuerySVChecker").isDomainNeedRawQuery,
            r("PHPQuerySerializerNoEncoding"),
          );
        }),
        (a.toStringRawQuery = function () {
          return t.prototype.toStringRawQuery.call(
            this,
            r("UriNeedRawQuerySVChecker").isDomainNeedRawQuery,
            r("PHPQuerySerializerNoEncoding"),
          );
        }),
        (a.toStringPreserveQuery = function () {
          return t.prototype.toStringPreserveQuery.call(
            this,
            r("UriNeedRawQuerySVChecker").isDomainNeedRawQuery,
            r("PHPQuerySerializerNoEncoding"),
          );
        }),
        (a.toStringStrictQueryEncoding = function () {
          return t.prototype.toStringStrictQueryEncoding.call(
            this,
            r("UriNeedRawQuerySVChecker").isDomainNeedRawQuery,
          );
        }),
        (a.getQueryString = function (n) {
          return (
            n === void 0 && (n = !1),
            t.prototype.getQueryString.call(
              this,
              n,
              r("UriNeedRawQuerySVChecker").isDomainNeedRawQuery,
              r("PHPQuerySerializerNoEncoding"),
            )
          );
        }),
        (a.enforceProtocolRequiresDomain = function () {
          return r("justknobx")._("3414");
        }),
        n
      );
    })(r("URIAbstractBase"));
    l.default = c;
  },
  98,
);
