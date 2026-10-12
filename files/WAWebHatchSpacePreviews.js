__d(
  "WAWebHatchSpacePreviews",
  [
    "Promise",
    "WALogger",
    "WAWebHatchJsonReaders",
    "WAWebHatchVmConnection",
    "WAWebHatchVmTransport",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 3e4,
      c = 4 * 1024 * 1024,
      d = 300 * 1e3,
      m = new Map(),
      p = "VM response exceeds size limit",
      _ = m,
      f = 0,
      g = !1,
      h = null,
      y = 0,
      C = new Set();
    function b() {
      if (self.performance.now() < f)
        return (s || (s = n("Promise"))).resolve(_);
      if (h == null) {
        var e = E(y).finally(function () {
          h === e && (h = null);
        });
        h = e;
      }
      return h;
    }
    function v() {
      return _;
    }
    function S() {
      return g;
    }
    function R(e) {
      var t = { listener: e };
      return (
        C.add(t),
        function () {
          C.delete(t);
        }
      );
    }
    function L() {
      ((g = !1), y++, (h = null), (f = 0), F(m));
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield I();
          return y !== e
            ? m
            : (t != null && ((f = self.performance.now() + d), (g = !0), F(t)),
              _);
        })),
        k.apply(this, arguments)
      );
    }
    function I() {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield D();
          return (function (e) {
            if (e === null) return A("session", !1);
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.kind === "response" &&
              "body" in e &&
              "statusCode" in e
            ) {
              var t = e.body,
                n = e.statusCode;
              return P(t, n);
            }
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.kind === "failure" &&
              "detail" in e &&
              e.detail === p
            )
              return A("responseTooLarge", !0);
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.kind === "failure"
            )
              return A("transport", !1);
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.kind === "rejected"
            )
              return A("rejected", !0);
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.kind === "unreadable"
            )
              return A("malformedResponse", !0);
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                e,
            );
          })(e);
        })),
        T.apply(this, arguments)
      );
    }
    function D() {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebHatchVmConnection").connectHatchVmApi();
          if (e == null) return null;
          var t = yield $(e);
          return t.kind === "failure" && t.detail !== p ? $(e) : t;
        })),
        x.apply(this, arguments)
      );
    }
    function $(e) {
      return e.exchange(
        "GET",
        o("WAWebHatchVmTransport").JarvisPaths.SPACES_CATALOG,
        { timeoutMs: u },
      );
    }
    function P(e, t) {
      if (t < 200 || t >= 300) return A("http." + t, t < 500);
      if (e.length > c) return A("responseTooLarge", !0);
      var n = N(e);
      return n == null ? A("malformedResponse", !0) : M(n);
    }
    function N(e) {
      try {
        return o("WAWebHatchJsonReaders").readArray(
          JSON.parse(new TextDecoder().decode(e)),
          "spaces",
        );
      } catch (e) {
        return null;
      }
    }
    function M(e) {
      var t = new Map();
      for (var n of e) {
        var r = o("WAWebHatchJsonReaders").readString(n, "slug"),
          a = w(n);
        r != null && r !== "" && a != null && !t.has(r) && t.set(r, a);
      }
      return t;
    }
    function w(e) {
      var t = o("WAWebHatchJsonReaders").readString(
        o("WAWebHatchJsonReaders").readObject(e, "preview_image"),
        "thumbnail_url",
      );
      return t == null ||
        o("WAWebHatchJsonReaders").readBool(e, "is_shared") === !0
        ? null
        : o("WAWebHatchVmTransport").JarvisPaths.SPACE_IMAGE(t);
    }
    function A(t, n) {
      var r = o("WALogger").WARN(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "hatch-space-previews/load-failed reason=",
            "",
          ])),
        t,
      );
      return (n && r.sendLogs("hatch-space-previews-load-failed"), null);
    }
    function F(e) {
      if (_ !== e) {
        _ = e;
        for (var t of Array.from(C)) t.listener();
      }
    }
    ((l.requestHatchSpacePreviewRoutes = b),
      (l.getHatchSpacePreviewRoutes = v),
      (l.hasHatchSpacePreviewRoutesLoaded = S),
      (l.subscribeToHatchSpacePreviewRoutes = R),
      (l.clearHatchSpacePreviewRoutes = L));
  },
  98,
);
