__d(
  "URI",
  [
    "Env",
    "FBLogger",
    "PHPQuerySerializer",
    "PHPQuerySerializerNoEncoding",
    "ReloadPage",
    "URIBase",
    "UriNeedRawQuerySVChecker",
    "cr:1078",
    "cr:1080",
    "ifRequired",
    "isFacebookURI",
    "memoize",
    "memoizeStringOnly",
    "unqualifyURI",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = r("memoize")(function () {
        return new m(window.location.href);
      });
    function d() {
      return r("ifRequired")("PageTransitions", function (e) {
        if (e.isInitialized()) return e;
      });
    }
    var m = (function (a) {
      function i(t, n, i) {
        var l = o("UriNeedRawQuerySVChecker").isUriNeedRawQuery(t)
          ? r("PHPQuerySerializerNoEncoding")
          : e || (e = r("PHPQuerySerializer"));
        return a.call(this, t, l, n, i) || this;
      }
      babelHelpers.inheritsLoose(i, a);
      var l = i.prototype;
      return (
        (l.setPath = function (t) {
          return ((this.path = t), a.prototype.setPath.call(this, t));
        }),
        (l.getPath = function () {
          var e = a.prototype.getPath.call(this);
          return e && e.replace(/^\/+/, "/");
        }),
        (l.setProtocol = function (t) {
          return ((this.protocol = t), a.prototype.setProtocol.call(this, t));
        }),
        (l.setDomain = function (t) {
          return ((this.domain = t), a.prototype.setDomain.call(this, t));
        }),
        (l.setPort = function (t) {
          return ((this.port = t), a.prototype.setPort.call(this, t));
        }),
        (l.setFragment = function (t) {
          return ((this.fragment = t), a.prototype.setFragment.call(this, t));
        }),
        (l.stripTrailingSlash = function () {
          return (this.setPath(this.getPath().replace(/\/$/, "")), this);
        }),
        (l.addTrailingSlash = function () {
          var e = this.getPath();
          return (
            e.length > 0 && e[e.length - 1] !== "/" && this.setPath(e + "/"),
            this
          );
        }),
        (l.valueOf = function () {
          return this.toString();
        }),
        (l.getRegisteredDomain = function () {
          if (!this.getDomain()) return "";
          if (!r("isFacebookURI")(this)) return null;
          var e = this.getDomain().split("."),
            t = e.indexOf("facebook");
          return (
            t === -1 && (t = e.indexOf("workplace")),
            e.slice(t).join(".")
          );
        }),
        (l.getUnqualifiedURI = function () {
          return r("unqualifyURI")(new i(this));
        }),
        (l.getQualifiedURI = function () {
          return new i(this).qualify();
        }),
        (l.isSameOrigin = function (t) {
          var e = t;
          return (
            e == null ? (e = c()) : e instanceof i || (e = new i(e.toString())),
            a.prototype.isSameOrigin.call(this, e)
          );
        }),
        (i.goURIOnNewWindow = function (t) {
          i.goURIOnWindow(t, window.open("", "_blank"), !0);
        }),
        (i.goURIOnWindow = function (t, n, r, o) {
          (r === void 0 && (r = !1),
            o === void 0 && (o = !1),
            i.goURIOnWindowWithReference(t, n, r, o));
        }),
        (i.goURIOnWindowWithReference = function (n, a, l, u) {
          (l === void 0 && (l = !1), u === void 0 && (u = !1));
          var e = new i(n),
            c = l,
            d = !a || a === window;
          if ((s || (s = r("Env"))).isCQuick && r("isFacebookURI")(e) && d) {
            var m = {
              cquick: (s || (s = r("Env"))).iframeKey,
              ctarget: s.iframeTarget,
              cquick_token: s.iframeToken,
            };
            (e.addQueryData(m), (c = !1));
          }
          var p = e.toString(),
            _ = a || window,
            f = window.location.href === p && _ === window;
          return (
            !c && t.PageTransitions
              ? t.PageTransitions.go(p, u)
              : f
                ? o("ReloadPage").now()
                : u
                  ? _.location.replace(p)
                  : (_.location.href = p),
            _
          );
        }),
        (l.go = function (t, r) {
          if (n("cr:1078")) {
            n("cr:1078")(this, t, r);
            return;
          }
          (n("cr:1080") && n("cr:1080")("uri.go"), i.go(this, t, r));
        }),
        (i.tryParseURI = function (n) {
          var t = (u || (u = r("URIBase"))).tryParse(
            n,
            e || (e = r("PHPQuerySerializer")),
          );
          return t ? new i(t) : null;
        }),
        (i.isValidURI = function (n) {
          return (u || (u = r("URIBase"))).isValid(
            n,
            e || (e = r("PHPQuerySerializer")),
          );
        }),
        (i.getRequestURI = function (t, n) {
          if ((t === void 0 && (t = !0), n === void 0 && (n = !1), t)) {
            var e = d();
            if (e) return e.getCurrentURI(!!n).getQualifiedURI();
          }
          return new i(window.location.href);
        }),
        (i.getMostRecentURI = function () {
          var e = d();
          return e
            ? e.getMostRecentURI().getQualifiedURI()
            : new i(window.location.href);
        }),
        (i.getNextURI = function () {
          var e = d();
          return e
            ? e.getNextURI().getQualifiedURI()
            : new i(window.location.href);
        }),
        (i.encodeComponent = function (t) {
          return encodeURIComponent(t)
            .replace(/%5D/g, "]")
            .replace(/%5B/g, "[");
        }),
        (i.decodeComponent = function (t) {
          return decodeURIComponent(t.replace(/\+/g, " "));
        }),
        (i.normalize = function (t) {
          return t != null && typeof t == "string"
            ? this.normalizeString(t)
            : new i(t).toString();
        }),
        i
      );
    })(u || (u = r("URIBase")));
    ((m.go = function (e, t, r) {
      (n("cr:1080") && n("cr:1080")("URI.go"),
        m.goURIOnWindow(e, window, t, r));
    }),
      (m.normalizeString = r("memoizeStringOnly")(function (e) {
        return new m(e).toString();
      })),
      (m.expression =
        /(((\w+):\/\/)([^\/:]*)(:(\d+))?)?([^#?]*)(\?([^#]*))?(#(.*))?/),
      (m.arrayQueryExpression = /^(\w+)((?:\[\w*\])+)=?(.*)/),
      (l.default = m));
  },
  98,
);
