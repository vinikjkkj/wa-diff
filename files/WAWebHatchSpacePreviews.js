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
      p = { cards: m, thumbnails: m },
      _ = "VM response exceeds size limit",
      f = p,
      g = 0,
      h = !1,
      y = null,
      C = 0,
      b = new Set();
    function v() {
      if (self.performance.now() < g)
        return (s || (s = n("Promise"))).resolve(f.thumbnails);
      if (y == null) {
        var e = I(C).finally(function () {
          y === e && (y = null);
        });
        y = e;
      }
      return y;
    }
    function S() {
      return f.thumbnails;
    }
    function R() {
      return f.cards;
    }
    function L() {
      return h;
    }
    function E(e) {
      var t = { listener: e };
      return (
        b.add(t),
        function () {
          b.delete(t);
        }
      );
    }
    function k() {
      ((h = !1), C++, (y = null), (g = 0), B(p));
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield D();
          return C !== e
            ? m
            : (t != null && ((g = self.performance.now() + d), (h = !0), B(t)),
              f.thumbnails);
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
          var e = yield $();
          return (function (e) {
            if (e === null) return O("session", !1);
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.kind === "response" &&
              "body" in e &&
              "statusCode" in e
            ) {
              var t = e.body,
                n = e.statusCode;
              return M(t, n);
            }
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.kind === "failure" &&
              "detail" in e &&
              e.detail === _
            )
              return O("responseTooLarge", !0);
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.kind === "failure"
            )
              return O("transport", !1);
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.kind === "rejected"
            )
              return O("rejected", !0);
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.kind === "unreadable"
            )
              return O("malformedResponse", !0);
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                e,
            );
          })(e);
        })),
        x.apply(this, arguments)
      );
    }
    function $() {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebHatchVmConnection").connectHatchVmApi();
          if (e == null) return null;
          var t = yield N(e);
          return t.kind === "failure" && t.detail !== _ ? N(e) : t;
        })),
        P.apply(this, arguments)
      );
    }
    function N(e) {
      return e.exchange(
        "GET",
        o("WAWebHatchVmTransport").JarvisPaths.SPACES_CATALOG,
        { timeoutMs: u },
      );
    }
    function M(e, t) {
      if (t < 200 || t >= 300) return O("http." + t, t < 500);
      if (e.length > c) return O("responseTooLarge", !0);
      var n = w(e);
      return n == null
        ? O("malformedResponse", !0)
        : {
            cards: A(n, "preview_card_url"),
            thumbnails: A(n, "thumbnail_url"),
          };
    }
    function w(e) {
      try {
        return o("WAWebHatchJsonReaders").readArray(
          JSON.parse(new TextDecoder().decode(e)),
          "spaces",
        );
      } catch (e) {
        return null;
      }
    }
    function A(e, t) {
      var n = new Map();
      for (var r of e) {
        var a = o("WAWebHatchJsonReaders").readString(r, "slug"),
          i = F(r, t);
        a != null && a !== "" && i != null && !n.has(a) && n.set(a, i);
      }
      return n;
    }
    function F(e, t) {
      var n = o("WAWebHatchJsonReaders").readString(
        o("WAWebHatchJsonReaders").readObject(e, "preview_image"),
        t,
      );
      return n == null ||
        o("WAWebHatchJsonReaders").readBool(e, "is_shared") === !0
        ? null
        : o("WAWebHatchVmTransport").JarvisPaths.SPACE_IMAGE(n);
    }
    function O(t, n) {
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
    function B(e) {
      if (f !== e) {
        f = e;
        for (var t of Array.from(b)) t.listener();
      }
    }
    ((l.requestHatchSpacePreviewRoutes = v),
      (l.getHatchSpacePreviewRoutes = S),
      (l.getHatchSpaceCardPreviewRoutes = R),
      (l.hasHatchSpacePreviewRoutesLoaded = L),
      (l.subscribeToHatchSpacePreviewRoutes = E),
      (l.clearHatchSpacePreviewRoutes = k));
  },
  98,
);
