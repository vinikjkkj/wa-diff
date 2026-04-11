__d(
  "jsRouteBuilder",
  ["ConstUriUtils", "FBLogger", "routeBuilderUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "#";
    function s(t, n, a, i, l) {
      l === void 0 && (l = !1);
      var s = o("routeBuilderUtils").getPathParts(t);
      function u(u) {
        try {
          var c =
              i != null ? babelHelpers.extends({}, i, u) : u != null ? u : {},
            d = {},
            m = "",
            p = !1;
          ((m = s.reduce(function (e, t) {
            if (t.isToken) {
              var r,
                o = t.optional,
                a = t.prefix,
                i = t.suffix,
                l = t.token;
              if (o && p) return e;
              var s = (r = c[l]) != null ? r : n[l];
              if (s == null && o) return ((p = !0), e);
              if (s == null)
                throw new Error("Missing required template parameter: " + l);
              if (s === "")
                throw new Error(
                  "Required template parameter is an empty string: " + l,
                );
              return ((d[l] = !0), e + "/" + a + s + i);
            } else return ((p = !1), e + "/" + t.part);
          }, "")),
            t.slice(-1) === "/" && (m += "/"),
            m === "" && (m = "/"));
          var _ = o("ConstUriUtils").getUri(m);
          for (var f in c) {
            var g = c[f];
            !d[f] &&
              g != null &&
              _ != null &&
              (a != null && a.has(f)
                ? g !== !1 && (_ = _.addQueryParam(f, null))
                : (_ = _.addQueryParam(f, g)));
          }
          return [_, m];
        } catch (n) {
          var h = n == null ? void 0 : n.message,
            y = r("FBLogger")("JSRouteBuilder")
              .blameToPreviousFrame()
              .blameToPreviousFrame();
          return (
            l && (y = y.blameToPreviousFrame()),
            y.mustfix(
              "Failed building URI for base path: %s message: %s",
              t,
              h,
            ),
            [null, e]
          );
        }
      }
      return {
        buildUri: function (n) {
          var t,
            r = (t = u(n)[0]) != null ? t : o("ConstUriUtils").getUri(e);
          if (r == null)
            throw new Error("Not even the fallback URL parsed validly!");
          return r;
        },
        buildUriNullable: function (t) {
          return u(t)[0];
        },
        buildURL: function (t) {
          var e,
            n = u(t),
            r = n[0],
            o = n[1];
          return (e = r == null ? void 0 : r.toString()) != null ? e : o;
        },
        buildURLStringDEPRECATED: function (t) {
          var e,
            n = u(t),
            r = n[0],
            o = n[1];
          return (e = r == null ? void 0 : r.toString()) != null ? e : o;
        },
        getPath: function () {
          return t;
        },
      };
    }
    l.default = s;
  },
  98,
);
