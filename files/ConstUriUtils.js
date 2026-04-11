__d(
  "ConstUriUtils",
  [
    "CometLruCache",
    "ExecutionEnvironment",
    "FBLogger",
    "PHPQuerySerializer",
    "PHPQuerySerializerNoEncoding",
    "URIRFC3986",
    "URISchemes",
    "UriNeedRawQuerySVConfig",
    "isSameOrigin",
    "nullthrows",
    "structuredClone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = o("CometLruCache").create(5e3),
      m = new RegExp("(^|\\.)facebook\\.com$", "i"),
      p = new RegExp("(^|\\.)messenger\\.com$", "i"),
      _ = new RegExp("(^|\\.)instagram\\.com$", "i"),
      f = new RegExp("(^|\\\\.)meta\\\\.(com|ai)$", "i"),
      g = new RegExp("(^|\\.)threads\\.com$", "i"),
      h = new RegExp("^(?:[^/]*:|[\\x00-\\x1f]*/[\\x00-\\x1f]*/)"),
      y = new RegExp(
        "[\\x00-\\x2c\\x2f\\x3b-\\x40\\x5c\\x5e\\x60\\x7b-\\x7f\\uFDD0-\\uFDEF\\uFFF0-\\uFFFF\\u2047\\u2048\\uFE56\\uFE5F\\uFF03\\uFF0F\\uFF1F]",
      ),
      C = r("UriNeedRawQuerySVConfig").uris.map(function (e) {
        return { domain: e, valid: k(e) };
      }),
      b = [],
      v = [];
    function S(e, t) {
      var n = {};
      if (e != null) for (var o of e.entries()) n[o[0]] = o[1];
      else
        r("FBLogger")("ConstUriUtils").warn(
          "Passed a null query map in, this means poor client side flow coverage or client/server boundary type issue.",
        );
      return t.serialize(n);
    }
    function R(e, t, n) {
      var o = c || (c = r("PHPQuerySerializer"));
      if (["http", "https"].includes(t) && L(e)) {
        if (e.includes("doubleclick.net") && n != null && !n.startsWith("http"))
          return o;
        o = r("PHPQuerySerializerNoEncoding");
      }
      return o;
    }
    function L(e) {
      return (
        e != null &&
        C.some(function (t) {
          return t.valid && E(e, t.domain);
        })
      );
    }
    function E(e, t) {
      if (t === "" || e === "") return !1;
      if (e.endsWith(t)) {
        var n = e.length - t.length - 1;
        if (n === -1 || e[n] === ".") return !0;
      }
      return !1;
    }
    function k(e) {
      return !y.test(e);
    }
    function I(e, t) {
      var n =
          t.protocol != null && t.protocol !== ""
            ? t.protocol
            : e.getProtocol(),
        r = t.domain != null ? R(t.domain, n) : e.getSerializer(),
        o = {
          domain: e.getDomain(),
          fragment: e.getFragment(),
          fragmentSeparator: e.hasFragmentSeparator(),
          isGeneric: e.isGeneric(),
          originalRawQuery: e.getOriginalRawQuery(),
          path: e.getPath(),
          port: e.getPort(),
          protocol: e.getProtocol(),
          queryParams: e.getQueryParams(),
          serializer: r,
          subdomain: e.getSubdomain(),
        },
        a = babelHelpers.extends({}, o, t),
        i = t.queryParams != null && t.queryParams.size !== 0;
      return P.getUribyObject(a, i);
    }
    function T(e, t, n, r) {
      n === void 0 && (n = !1);
      var o =
          e.protocol !== "" ? e.protocol + ":" + (e.isGeneric ? "" : "//") : "",
        a = e.domain !== "" ? e.domain : "",
        i = e.port !== "" ? ":" + e.port : "",
        l =
          e.path !== ""
            ? e.path
            : (o !== "" && o !== "mailto:") || a !== "" || i !== ""
              ? "/"
              : "",
        s = D(
          a,
          e.originalRawQuery,
          e.queryParams,
          t,
          n,
          r != null ? r : e.serializer,
        ),
        u = s.length > 0 ? "?" : "",
        c = e.fragment !== "" ? "#" + e.fragment : "",
        d = e.fragment === "" && e.fragmentSeparator ? "#" : "";
      return "" + o + a + i + l + u + s + d + c;
    }
    function D(e, t, n, r, o, a) {
      return (
        o === void 0 && (o = !1),
        !r && (o || L(e)) ? (t != null ? t : "") : S(n, a)
      );
    }
    function x(t) {
      var n,
        r = t.trim(),
        a = (e || (e = o("URIRFC3986"))).parse(r) || {
          fragment: null,
          host: null,
          isGenericURI: !1,
          query: null,
          scheme: null,
          userinfo: null,
        },
        i = a.host || "",
        l = i.split("."),
        s = l.length >= 3 ? l[0] : "",
        u = R(i, a.scheme || "", a.query),
        c = u.deserialize(a.query || "") || {},
        d = new Map(Object.entries(c)),
        m = $(
          {
            domain: i,
            fragment: a.fragment || "",
            fragmentSeparator: a.fragment === "",
            isGeneric: a.isGenericURI,
            originalRawQuery: a.query,
            path: a.path || "",
            port: a.port != null ? String(a.port) : "",
            protocol: (a.scheme || "").toLowerCase(),
            queryParams: d,
            serializer: u,
            subdomain: s,
            userInfo: (n = a == null ? void 0 : a.userinfo) != null ? n : "",
          },
          t,
        );
      return m;
    }
    function $(e, t, n, a) {
      n === void 0 &&
        (n = (u || (u = o("URISchemes"))).Options.INCLUDE_DEFAULTS);
      var i = { components: babelHelpers.extends({}, e), error: "", valid: !0 },
        l = i.components;
      if (!(u || (u = o("URISchemes"))).isAllowed(e.protocol, n, a))
        return (
          (i.valid = !1),
          (i.error =
            'The URI protocol "' + String(e.protocol) + '" is not allowed.'),
          i
        );
      if (!k(e.domain || ""))
        return (
          (i.valid = !1),
          (i.error = "This is an unsafe domain " + String(e.domain)),
          i
        );
      if (((l.port = (e.port != null && String(e.port)) || ""), e.userInfo))
        return (
          (i.valid = !1),
          (i.error =
            "Invalid URI: (userinfo is not allowed in a URI " +
            String(e.userInfo) +
            ")"),
          i
        );
      var s = t != null && t !== "" ? t : T(l, !1);
      return l.domain === "" && l.path.indexOf("\\") !== -1
        ? ((i.valid = !1),
          (i.error =
            "Invalid URI: (no domain but multiple back-slashes " + s + ")"),
          i)
        : !l.protocol && h.test(s)
          ? ((i.valid = !1),
            (i.error = "Invalid URI: (unsafe protocol-relative URI " + s + ")"),
            i)
          : l.domain !== "" && l.path !== "" && !l.path.startsWith("/")
            ? ((i.valid = !1),
              (i.error =
                "Invalid URI: (domain and pathwhere path lacks leading slash " +
                s +
                ")"),
              i)
            : (l.protocol !== "" &&
                l.protocol !== "file" &&
                !l.isGeneric &&
                !l.domain &&
                l.path !== "" &&
                r("FBLogger")("ConstUriUtils").warn(
                  'invalid URI (protocol "' + l.protocol + '" with no domain)',
                ),
              i);
    }
    var P = (function () {
      function e(e) {
        ((this.queryParams = new Map()),
          (this.domain = e.domain),
          (this.fragment = e.fragment),
          (this.fragmentSeparator = !!e.fragmentSeparator),
          (this.isGenericProtocol = !!e.isGeneric),
          (this.path = e.path),
          (this.originalRawQuery = e.originalRawQuery),
          (this.port = e.port),
          (this.protocol = e.protocol),
          (this.queryParams = e.queryParams),
          (this.serializer = e.serializer),
          (this.subdomain = e.subdomain));
      }
      var t = e.prototype;
      return (
        (t.addQueryParam = function (t, n) {
          if (t) {
            var e = this.getQueryParams();
            return (e.set(t, n), I(this, { queryParams: e }));
          }
          return this;
        }),
        (t.addQueryParams = function (t) {
          if (t.size > 0) {
            var e = this.getQueryParams();
            return (
              t.forEach(function (t, n) {
                e.set(n, t);
              }),
              I(this, { queryParams: e })
            );
          }
          return this;
        }),
        (t.addQueryParamString = function (t) {
          if (t) {
            var e = t.startsWith("?") ? t.slice(1) : t,
              n = this.getQueryParams();
            return (
              e.split("&").map(function (e) {
                var t = e.split("="),
                  r = t[0],
                  o = t[1];
                n.set(r, o);
              }),
              I(this, { queryParams: n })
            );
          }
          return this;
        }),
        (t.addTrailingSlash = function () {
          var e = this.getPath();
          return e.length > 0 && e[e.length - 1] !== "/"
            ? this.setPath(e + "/")
            : this;
        }),
        (t.getDomain = function () {
          return this.domain;
        }),
        (t.getFragment = function () {
          return this.fragment;
        }),
        (t.getOrigin = function () {
          var e = this.getPort();
          return (
            this.getProtocol() + "://" + this.getDomain() + (e ? ":" + e : "")
          );
        }),
        (t.getOriginalRawQuery = function () {
          return this.originalRawQuery;
        }),
        (t.getPath = function () {
          return this.path;
        }),
        (t.getPort = function () {
          return this.port;
        }),
        (t.getProtocol = function () {
          return this.protocol.toLowerCase();
        }),
        (t.getQualifiedUri = function () {
          if (!this.getDomain()) {
            var t,
              n =
                (t = typeof window != "undefined" ? window : self) == null ||
                (t = t.location) == null
                  ? void 0
                  : t.href;
            if (n == null)
              return (
                r("FBLogger")("ConstUriUtils")
                  .blameToPreviousFile()
                  .warn(
                    "Cannot get qualified URI for current URI as there is no current location",
                  ),
                null
              );
            (s || (s = r("ExecutionEnvironment"))).isInWorker &&
              n.startsWith("blob:") &&
              (n = n.substring(5, n.length));
            var o = n.slice(0, n.indexOf("/", n.indexOf(":") + 3));
            return e.getUri(o + this.toString());
          }
          return this;
        }),
        (t.getQueryParam = function (t) {
          var e = this.queryParams.get(t);
          if (typeof e == "string") return e;
          var n = JSON.stringify(e);
          return n == null ? n : JSON.parse(n);
        }),
        (t.getQueryData = function () {
          return Object.fromEntries(this.getQueryParams());
        }),
        (t.getQueryParams = function () {
          if (r("structuredClone") != null)
            return r("structuredClone")(this.queryParams);
          var e = JSON.stringify(Array.from(this.queryParams), function (e, t) {
              return Array.isArray(t)
                ? { __CUUArr: !0, value: babelHelpers.extends({}, t) }
                : t;
            }),
            t = JSON.parse(e, function (e, t) {
              return t != null && typeof t == "object" && t.__CUUArr
                ? Object.keys(t.value).reduce(function (e, n) {
                    return ((e[n] = t.value[n]), e);
                  }, [])
                : t;
            });
          return new Map(t);
        }),
        (t.getQueryString = function (t) {
          return (
            t === void 0 && (t = !1),
            D(
              this.domain,
              this.originalRawQuery,
              this.queryParams,
              !1,
              t,
              this.serializer,
            )
          );
        }),
        (t.getRegisteredDomain = function () {
          if (!this.getDomain()) return "";
          if (!this.isFacebookUri()) return null;
          var e = this.getDomain().split("."),
            t = e.indexOf("facebook");
          return (
            t === -1 && (t = e.indexOf("workplace")),
            e.slice(t).join(".")
          );
        }),
        (t.getSerializer = function () {
          return this.serializer;
        }),
        (t.getSubdomain = function () {
          return this.subdomain;
        }),
        (t.getUnqualifiedUri = function () {
          if (this.getDomain()) {
            var t = this.toString();
            return e.getUri(t.slice(t.indexOf("/", t.indexOf(":") + 3)));
          }
          return this;
        }),
        (e.getUri = function (n) {
          var t = n.trim(),
            o = d.get(t);
          if (o == null) {
            var a = x(t);
            if (a.valid) ((o = new e(a.components)), d.set(t, o));
            else
              return (
                r("FBLogger")("ConstUriUtils")
                  .blameToPreviousFrame()
                  .warn(a.error),
                null
              );
          }
          return o;
        }),
        (e.getUriOrThrow = function (n) {
          return r("nullthrows")(e.getUri(n));
        }),
        (e.getUribyObject = function (n, o) {
          var t = T(n, o),
            a = d.get(t);
          if (a == null) {
            o && (n.originalRawQuery = S(n.queryParams, n.serializer));
            var i = $(n);
            if (i.valid) ((a = new e(i.components)), d.set(t, a));
            else return (r("FBLogger")("ConstUri").mustfix(i.error), null);
          }
          return a;
        }),
        (t.hasFragmentSeparator = function () {
          return this.fragmentSeparator;
        }),
        (t.isEmpty = function () {
          return !(
            this.getPath() ||
            this.getProtocol() ||
            this.getDomain() ||
            this.getPort() ||
            this.queryParams.size > 0 ||
            this.getFragment()
          );
        }),
        (t.isFacebookUri = function () {
          var e = this.toString();
          return e === ""
            ? !1
            : !this.getDomain() && !this.getProtocol()
              ? !0
              : (["https", "http"].indexOf(this.getProtocol()) !== -1 &&
                  (m.test(this.getDomain()) ||
                    p.test(this.getDomain()) ||
                    _.test(this.getDomain()) ||
                    f.test(this.getDomain()))) ||
                g.test(this.getDomain());
        }),
        (t.isGeneric = function () {
          return this.isGenericProtocol;
        }),
        (t.isSameOrigin = function (t) {
          return r("isSameOrigin")(this, t);
        }),
        (t.isSubdomainOfDomain = function (n) {
          var t = e.getUri(n);
          return t != null && E(this.domain, n);
        }),
        (t.isSecure = function () {
          return this.getProtocol() === "https";
        }),
        (t.removeQueryParams = function (t) {
          if (Array.isArray(t) && t.length > 0) {
            var e = this.getQueryParams();
            return (
              t.map(function (t) {
                return e.delete(t);
              }),
              I(this, { queryParams: e })
            );
          }
          return this;
        }),
        (t.removeQueryParam = function (t) {
          if (t) {
            var e = this.getQueryParams();
            return (e.delete(t), I(this, { queryParams: e }));
          }
          return this;
        }),
        (t.removeSubdomain = function () {
          var e = this.getQualifiedUri();
          if (e == null) return null;
          var t = e.getDomain(),
            n = t.split(".");
          return (
            n.length >= 3 && (n = n.slice(-2)),
            I(e, { domain: n.join("."), subdomain: "" })
          );
        }),
        (t.replaceQueryParam = function (t, n) {
          if (t) {
            var e = this.getQueryParams();
            return (e.set(t, n), I(this, { queryParams: e }));
          }
          return this;
        }),
        (t.replaceQueryParams = function (t) {
          return I(this, { queryParams: t });
        }),
        (t.replaceQueryParamString = function (t) {
          if (t != null) {
            var e = t.startsWith("?") ? t.slice(1) : t,
              n = this.getQueryParams();
            return (
              e.split("&").map(function (e) {
                var t = e.split("="),
                  r = t[0],
                  o = t[1];
                n.set(r, o);
              }),
              I(this, { queryParams: n })
            );
          }
          return this;
        }),
        (t.setDomain = function (t) {
          if (t) {
            var e = t.split("."),
              n = e.length >= 3 ? e[0] : "";
            return I(this, { domain: t, subdomain: n });
          }
          return this;
        }),
        (t.setFragment = function (t) {
          return t === "#"
            ? I(this, { fragment: "", fragmentSeparator: !0 })
            : I(this, { fragment: t, fragmentSeparator: t !== "" });
        }),
        (t.setPath = function (t) {
          return t != null ? I(this, { path: t }) : this;
        }),
        (t.setPort = function (t) {
          return t ? I(this, { port: t }) : this;
        }),
        (t.setProtocol = function (t) {
          return t ? I(this, { protocol: t }) : this;
        }),
        (t.setSecure = function (t) {
          return this.setProtocol(t ? "https" : "http");
        }),
        (t.setSubDomain = function (t) {
          if (t) {
            var e = this.getQualifiedUri();
            if (e == null) return null;
            var n = e.getDomain(),
              r = n.split(".");
            return (
              r.length >= 3 ? (r[0] = t) : r.unshift(t),
              I(e, { domain: r.join("."), subdomain: t })
            );
          }
          return this;
        }),
        (t.stripTrailingSlash = function () {
          return this.setPath(this.getPath().replace(/\/$/, ""));
        }),
        (t.qualifyDomain = function (t) {
          if (!this.getDomain()) {
            var e = t;
            return (
              e == null && (e = this.getQualifiedUri()),
              e == null
                ? this
                : I(this, { domain: e.getDomain(), protocol: e.getProtocol() })
            );
          }
          return this;
        }),
        (e.$1 = function (t) {
          var e = t;
          for (var n of b) e = n(e);
          return e;
        }),
        (e.$2 = function (t, n) {
          var e = n;
          for (var r of v) e = r(t, e);
          return e;
        }),
        (t.$3 = function (n, r) {
          return (
            r === void 0 && (r = !1),
            T(
              {
                domain: e.$1(this.domain),
                fragment: this.fragment,
                fragmentSeparator: this.fragmentSeparator,
                isGeneric: this.isGenericProtocol,
                originalRawQuery: this.originalRawQuery,
                path: this.path,
                port: this.port,
                protocol: this.protocol,
                queryParams: e.$2(this.domain, this.queryParams),
                serializer: n,
                subdomain: this.subdomain,
                userInfo: "",
              },
              !1,
              r,
            )
          );
        }),
        (t.toStringRawQuery = function () {
          return (
            this.rawStringValue == null &&
              (this.rawStringValue = this.$3(
                r("PHPQuerySerializerNoEncoding"),
              )),
            this.rawStringValue
          );
        }),
        (t.toString = function () {
          return (
            this.stringValue == null &&
              (this.stringValue = this.$3(this.serializer)),
            this.stringValue
          );
        }),
        (t.toStringPreserveQuery = function () {
          return this.$3(this.serializer, !0);
        }),
        (e.isValidUri = function (n) {
          var t = d.get(n);
          if (t != null) return !0;
          var r = x(n);
          return r.valid ? (d.set(n, new e(r.components)), !0) : !1;
        }),
        e
      );
    })();
    function N(e) {
      return e instanceof P ? e : null;
    }
    function M(e) {
      b.push(e);
    }
    function w(e) {
      v.push(e);
    }
    var A = P.getUri,
      F = P.getUriOrThrow,
      O = P.isValidUri;
    ((l.isSubdomainOfDomain = E),
      (l.isConstUri = N),
      (l.registerDomainFilter = M),
      (l.registerQueryParamsFilter = w),
      (l.getUri = A),
      (l.getUriOrThrow = F),
      (l.isValidUri = O));
  },
  98,
);
