__d(
  "URIAbstractBase",
  [
    "invariant",
    "FBLogger",
    "PHPStrictQuerySerializer",
    "URIRFC3986",
    "URISchemes",
    "isSameOrigin",
    "setHostSubdomain",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = {
        deserialize: o("PHPStrictQuerySerializer").deserialize,
        serialize: o("PHPStrictQuerySerializer").serialize,
      },
      d = new RegExp(
        "[\\x00-\\x2c\\x2f\\x3b-\\x40\\x5c\\x5e\\x60\\x7b-\\x7f\\uFDD0-\\uFDEF\\uFFF0-\\uFFFF\\u2047\\u2048\\uFE56\\uFE5F\\uFF03\\uFF0F\\uFF1F]",
      ),
      m = new RegExp("^(?:[^/]*:|[\\x00-\\x1f]*/[\\x00-\\x1f]*/)"),
      p = [],
      _ = (function () {
        function t(n, r, a, i) {
          (a === void 0 &&
            (a = (e || (e = o("URISchemes"))).Options.INCLUDE_DEFAULTS),
            r || s(0, 2966),
            (this.$9 = r),
            (this.$7 = ""),
            (this.$1 = ""),
            (this.$6 = ""),
            (this.$5 = ""),
            (this.$3 = ""),
            (this.$4 = !1),
            (this.$8 = {}),
            (this.$2 = !1),
            (this.$12 = a),
            (this.$13 = i),
            t.parse(this, n, !0, r),
            (this.$11 = !1));
        }
        ((t.parse = function (a, i, l, s) {
          if (i == null || i === "") return !0;
          if (i instanceof t)
            return (
              a.setProtocol(i.getProtocol()),
              a.setDomain(i.getDomain()),
              a.setPort(i.getPort()),
              a.setPath(i.getPath()),
              a.setQueryData(s.deserialize(s.serialize(i.getQueryData()))),
              a.setFragment(i.getFragment()),
              a.setIsGeneric(i.getIsGeneric()),
              a.setForceFragmentSeparator(i.getForceFragmentSeparator()),
              a.setOriginalRawQuery(i.getOriginalRawQuery()),
              a.setQueryParamModified(!1),
              !0
            );
          var n = i.toString().trim(),
            c = (u || (u = o("URIRFC3986"))).parse(n) || {
              fragment: null,
              scheme: null,
              query: null,
            };
          if (
            (!l &&
              !(e || (e = o("URISchemes"))).isAllowed(
                c.scheme,
                a.$12,
                a.$13,
              )) ||
            (a.setProtocol(c.scheme || ""), !l && d.test(c.host || ""))
          )
            return !1;
          if (
            (a.setDomain(c.host || ""),
            a.setPort(c.port || ""),
            a.setPath(c.path || ""),
            l)
          )
            a.setQueryData(s.deserialize(c.query || "") || {});
          else
            try {
              a.setQueryData(s.deserialize(c.query || "") || {});
            } catch (e) {
              return !1;
            }
          if (
            (a.setFragment(c.fragment || ""),
            c.fragment === "" && a.setForceFragmentSeparator(!0),
            a.setIsGeneric(c.isGenericURI || !1),
            a.setOriginalRawQuery(c.query),
            a.setQueryParamModified(!1),
            c.userinfo !== null)
          ) {
            if (l)
              throw new Error(
                "URI.parse: invalid URI (userinfo is not allowed in a URI): " +
                  n,
              );
            return !1;
          }
          if (!a.getDomain() && a.getPath().indexOf("\\") !== -1) {
            if (l)
              throw new Error(
                "URI.parse: invalid URI (no domain but multiple back-slashes): " +
                  n,
              );
            return !1;
          }
          if (!n.startsWith("#") && !a.getProtocol() && m.test(n)) {
            if (l)
              throw new Error(
                "URI.parse: invalid URI (unsafe protocol-relative URLs): " +
                  n +
                  "'",
              );
            return !1;
          }
          if (a.getDomain() && a.getPath() && !a.getPath().startsWith("/")) {
            if (l)
              throw new Error(
                "URI.parse: invalid URI (domain and path where path lacks leading slash): " +
                  n,
              );
            return !1;
          }
          if (
            a.getProtocol() &&
            a.getProtocol() !== "file" &&
            !a.getIsGeneric() &&
            !a.getDomain() &&
            a.getPath() !== "" &&
            (r("FBLogger")("uri").warn(
              'URI.parse: invalid URI (protocol "' +
                a.getProtocol() +
                '" with no domain)',
            ),
            a.enforceProtocolRequiresDomain())
          ) {
            if (l)
              throw new Error(
                "URI.parse: invalid URI (protocol and path but no domain): " +
                  n,
              );
            return !1;
          }
          return !0;
        }),
          (t.tryParse = function (n, r, o, a) {
            var e = new t(null, r, o, a);
            return t.parse(e, n, !1, r) ? e : null;
          }),
          (t.isValid = function (n, r, o, a) {
            return !!t.tryParse(n, r, o, a);
          }));
        var n = t.prototype;
        return (
          (n.setProtocol = function (n) {
            return (
              (e || (e = o("URISchemes"))).isAllowed(n, this.$12, this.$13) ||
                s(0, 11793, n),
              (this.$7 = n),
              this
            );
          }),
          (n.getProtocol = function () {
            return (this.$7 || "").toLowerCase();
          }),
          (n.setSecure = function (t) {
            return this.setProtocol(t ? "https" : "http");
          }),
          (n.isSecure = function () {
            return this.getProtocol() === "https";
          }),
          (n.setDomain = function (t) {
            if (d.test(t))
              throw new Error(
                "URI.setDomain: unsafe domain specified: " +
                  t +
                  " for url " +
                  this.toString(),
              );
            return ((this.$1 = t), this);
          }),
          (n.getDomain = function () {
            return this.$1;
          }),
          (n.setPort = function (t) {
            return ((this.$6 = t), this);
          }),
          (n.getPort = function () {
            return this.$6;
          }),
          (n.setPath = function (t) {
            return ((this.$5 = t), this);
          }),
          (n.getPath = function () {
            return this.$5;
          }),
          (n.addQueryData = function (t, n) {
            return (
              Object.prototype.toString.call(t) === "[object Object]"
                ? Object.assign(this.$8, t)
                : (this.$8[t] = n),
              (this.$11 = !0),
              this
            );
          }),
          (n.setQueryData = function (t) {
            return ((this.$8 = t), (this.$11 = !0), this);
          }),
          (n.getQueryData = function () {
            return this.$8;
          }),
          (n.setQueryString = function (t) {
            return this.setQueryData(this.$9.deserialize(t));
          }),
          (n.getQueryString = function (t, n, r) {
            return (
              t === void 0 && (t = !1),
              n === void 0 &&
                (n = function () {
                  return !1;
                }),
              r === void 0 && (r = null),
              this.$14(!1, t, n, r)
            );
          }),
          (n.$14 = function (t, n, r, o) {
            if (
              (t === void 0 && (t = !1),
              n === void 0 && (n = !1),
              r === void 0 &&
                (r = function () {
                  return !1;
                }),
              o === void 0 && (o = null),
              !this.$11 && (n || r(this.getDomain())))
            ) {
              var e;
              return (e = this.$10) != null ? e : "";
            }
            return (t && o ? o : this.$9).serialize(this.getQueryData());
          }),
          (n.removeQueryData = function (t) {
            Array.isArray(t) || (t = [t]);
            for (var e = 0, n = t.length; e < n; ++e) delete this.$8[t[e]];
            return ((this.$11 = !0), this);
          }),
          (n.setFragment = function (t) {
            return ((this.$3 = t), this.setForceFragmentSeparator(!1), this);
          }),
          (n.getFragment = function () {
            return this.$3;
          }),
          (n.setForceFragmentSeparator = function (t) {
            return ((this.$2 = t), this);
          }),
          (n.getForceFragmentSeparator = function () {
            return this.$2;
          }),
          (n.setIsGeneric = function (t) {
            return ((this.$4 = t), this);
          }),
          (n.getIsGeneric = function () {
            return this.$4;
          }),
          (n.getOriginalRawQuery = function () {
            return this.$10;
          }),
          (n.setOriginalRawQuery = function (t) {
            return ((this.$10 = t), this);
          }),
          (n.setQueryParamModified = function (t) {
            return ((this.$11 = t), this);
          }),
          (n.isEmpty = function () {
            return !(
              this.getPath() ||
              this.getProtocol() ||
              this.getDomain() ||
              this.getPort() ||
              Object.keys(this.getQueryData()).length > 0 ||
              this.getFragment()
            );
          }),
          (n.toString = function (t, n) {
            return (
              t === void 0 &&
                (t = function () {
                  return !1;
                }),
              n === void 0 && (n = null),
              this.$15(!1, !1, t, n)
            );
          }),
          (n.toStringRawQuery = function (t, n) {
            return (
              t === void 0 &&
                (t = function () {
                  return !1;
                }),
              n === void 0 && (n = null),
              this.$15(!0, !1, t, n)
            );
          }),
          (n.toStringPreserveQuery = function (t, n) {
            return (
              t === void 0 &&
                (t = function () {
                  return !1;
                }),
              n === void 0 && (n = null),
              this.$15(!1, !0, t, n)
            );
          }),
          (n.toStringStrictQueryEncoding = function (t) {
            return (
              t === void 0 &&
                (t = function () {
                  return !1;
                }),
              this.$15(!0, !1, t, c)
            );
          }),
          (n.$15 = function (t, n, r, o) {
            (t === void 0 && (t = !1),
              n === void 0 && (n = !1),
              r === void 0 &&
                (r = function () {
                  return !1;
                }),
              o === void 0 && (o = null));
            for (var e = this, a = 0; a < p.length; a++) e = p[a](e);
            return e.$16(t, n, r, o);
          }),
          (n.$16 = function (t, n, r, o) {
            (t === void 0 && (t = !1),
              n === void 0 && (n = !1),
              r === void 0 &&
                (r = function () {
                  return !1;
                }),
              o === void 0 && (o = null));
            var e = "",
              a = this.getProtocol();
            a && (e += a + ":" + (this.getIsGeneric() ? "" : "//"));
            var i = this.getDomain();
            i && (e += i);
            var l = this.getPort();
            l && (e += ":" + l);
            var s = this.getPath();
            s ? (e += s) : e && (e += "/");
            var u = this.$14(t, n, r, o);
            u && (e += "?" + u);
            var c = this.getFragment();
            return (
              c
                ? (e += "#" + c)
                : this.getForceFragmentSeparator() && (e += "#"),
              e
            );
          }),
          (t.registerFilter = function (t) {
            p.push(t);
          }),
          (n.getOrigin = function () {
            var e = this.getPort();
            return (
              this.getProtocol() + "://" + this.getDomain() + (e ? ":" + e : "")
            );
          }),
          (n.isSameOrigin = function (t) {
            return r("isSameOrigin")(this, t);
          }),
          (n.getQualifiedURIBase = function () {
            return new t(this, this.$9).qualify();
          }),
          (n.qualify = function () {
            if (!this.getDomain()) {
              var e = new t(window.location.href, this.$9);
              this.setProtocol(e.getProtocol())
                .setDomain(e.getDomain())
                .setPort(e.getPort());
            }
            return this;
          }),
          (n.setSubdomain = function (t) {
            var e = this.qualify(),
              n = e.getDomain();
            return this.setDomain(r("setHostSubdomain")(n, t));
          }),
          (n.getSubdomain = function () {
            if (!this.getDomain()) return "";
            var e = this.getDomain().split(".");
            return e.length <= 2 ? "" : e[0];
          }),
          (n.isSubdomainOfDomain = function (n) {
            var e = this.getDomain();
            return t.isDomainSubdomainOfDomain(e, n, this.$9);
          }),
          (t.isDomainSubdomainOfDomain = function (n, r, o) {
            if (r === "" || n === "") return !1;
            if (n.endsWith(r)) {
              var e = n.length,
                a = r.length,
                i = e - a - 1;
              if (e === a || n[i] === ".") {
                var l = new t(null, o);
                return (l.setDomain(r), t.isValid(l, o));
              }
            }
            return !1;
          }),
          (n.enforceProtocolRequiresDomain = function () {
            return !0;
          }),
          t
        );
      })();
    l.default = _;
  },
  98,
);
