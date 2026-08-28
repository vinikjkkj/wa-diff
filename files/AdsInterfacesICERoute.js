__d(
  "AdsInterfacesICERoute",
  [
    "AdsInterfacesRouteConstants",
    "URI",
    "immutable",
    "react-relay-deprecated/classic/route/RelayRoute",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = function () {
        return null;
      };
    function u(e, t, n) {
      var r = {};
      return (
        Object.keys(e).forEach(function (o) {
          if (Object.prototype.hasOwnProperty.call(t, o)) {
            if (!n && t[o] == e[o].defaultValue) return;
            r[o] = t[o];
          }
        }),
        r
      );
    }
    var c = (function (t) {
      function n(n, a) {
        var i;
        i = t.call(this, n, a) || this;
        var l = a;
        return (
          Object.defineProperty(i, "givenName", {
            enumerable: !0,
            value: i.constructor.givenName,
          }),
          Object.defineProperty(i, "fragment", {
            enumerable: !0,
            get: function () {
              var e = this.params,
                t = o("AdsInterfacesRouteConstants").FRAGMENT_IN_PARAMS;
              return Object.prototype.hasOwnProperty.call(e, t) ? e[t] : null;
            },
          }),
          Object.defineProperty(i, "semanticParams", {
            enumerable: !0,
            get: function () {
              return this.constructor.semanticParams(
                this.constructor,
                this.params,
              );
            },
          }),
          Object.defineProperty(i, "queryParams", {
            enumerable: !0,
            get: function () {
              return this.constructor.queryParams(
                this.constructor,
                this.params,
              );
            },
          }),
          Object.defineProperty(i, "activeState", {
            enumerable: !0,
            get: function () {
              return babelHelpers.extends({}, this.constructor.activeState);
            },
          }),
          Object.defineProperty(i, "url", {
            enumerable: !0,
            get: function () {
              return (
                !l &&
                  this.constructor.path &&
                  (l = s(this.constructor, this.params)),
                typeof l == "string" ? new (e || (e = r("URI")))(l) : l
              );
            },
          }),
          Object.defineProperty(i, "title", {
            enumerable: !0,
            get: function () {
              for (var e = !1, t = [], n = this.constructor; !e && n; ) {
                var r = void 0;
                (n.handler &&
                  n.handler.getTitle &&
                  (r = n.handler.getTitle(n, this)),
                  !r && n.title && (r = n.title),
                  r && (n.absoluteTitle ? ((t = [r]), (e = !0)) : t.unshift(r)),
                  (n = n.parentRoute));
              }
              return t.length === 0 ? null : t.join(" - ");
            },
          }),
          i
        );
      }
      babelHelpers.inheritsLoose(n, t);
      var a = n.prototype;
      return (
        (a.$AdsInterfacesICERoute$p_1 = function (t) {
          var e = [];
          if (t != null)
            for (var n = t.constructor; n; ) (e.push(n), (n = n.parentRoute));
          return r("immutable").List(e);
        }),
        (a.isForceLoad = function (t) {
          var e = this.$AdsInterfacesICERoute$p_1(t),
            n = !1,
            r = this.constructor;
          if (!e.contains(this.constructor))
            for (; r; ) {
              var o = null;
              (r.handler &&
                r.handler.isForceLoad &&
                (o = r.handler.isForceLoad(r, e, this)),
                o == null && r.forceLoad != null && (o = r.forceLoad),
                o != null && n != null && (n = n || o),
                (r = r.parentRoute),
                r && e.contains(r) && (r = null));
            }
          return n;
        }),
        (n.semanticParams = function (t, n) {
          return u(t.paramDefinitions || {}, n, !0);
        }),
        (n.queryParams = function (t, n) {
          return u(t.queryParamDefinitions || {}, n, !0);
        }),
        (n.queryParamsWithoutDefaults = function (t, n) {
          return u(t.queryParamDefinitions || {}, n, !1);
        }),
        (n.getDecodedQueryParams = function (t, n) {
          return t.$AdsInterfacesICERoute$p_2(
            t,
            t.queryParamDefinitions,
            n,
            !0,
          );
        }),
        (n.getEncodedQueryParams = function (t, n) {
          return t.$AdsInterfacesICERoute$p_2(
            t,
            t.queryParamDefinitions,
            n,
            !1,
          );
        }),
        (n.getDecodedSemanticParams = function (t, n) {
          return t.$AdsInterfacesICERoute$p_2(t, t.paramDefinitions, n, !0);
        }),
        (n.getEncodedSemanticParams = function (t, n) {
          return t.$AdsInterfacesICERoute$p_2(t, t.paramDefinitions, n, !1);
        }),
        (n.$AdsInterfacesICERoute$p_2 = function (t, n, r, o) {
          var e = {};
          if (!n) return r;
          for (var a in r) {
            var i = r[a],
              l = n[a];
            if (l && l.customType) {
              for (var s = l.customType, u = null, c = t; u === null && c; ) {
                if (c.handler) {
                  var d = c.handler,
                    m = {
                      required: !!l.required,
                      defaultValue: l.defaultValue,
                      enums: l.enums,
                    };
                  o && d.decodeParameter
                    ? (u = d.decodeParameter(c, a, s, i, m))
                    : !o &&
                      d.encodeParameter &&
                      (u = d.encodeParameter(c, a, s, i, m));
                }
                c = c.parentRoute;
              }
              e[a] = u;
            } else e[a] = i;
          }
          return e;
        }),
        (n.injectURICreator = function (t) {
          s = t;
        }),
        (n.toShortNavigatable = function () {
          return [this.configName, Array.from(this.configPath)];
        }),
        (n.buildURI = function (n) {
          var t = s(this, n);
          return (
            typeof t == "string" && (t = new (e || (e = r("URI")))(t)),
            t != null ? t : new (e || (e = r("URI")))("#")
          );
        }),
        n
      );
    })(r("react-relay-deprecated/classic/route/RelayRoute"));
    l.default = c;
  },
  98,
);
