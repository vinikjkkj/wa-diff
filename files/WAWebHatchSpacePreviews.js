__d(
  "WAWebHatchSpacePreviews",
  [
    "WALogger",
    "WAWebHatchJsonReaders",
    "WAWebHatchVmConnection",
    "WAWebHatchVmTransport",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 3e4,
      u = 4 * 1024 * 1024,
      c = 300 * 1e3,
      d = new Map(),
      m = { cards: d, thumbnails: d },
      p = "VM response exceeds size limit",
      _ = m,
      f = 0,
      g = !1,
      h = null,
      y = 0,
      C = new Set();
    function b() {
      if (self.performance.now() < f) return Promise.resolve(_.thumbnails);
      if (h == null) {
        var e = k(y).finally(function () {
          h === e && (h = null);
        });
        h = e;
      }
      return h;
    }
    function v() {
      return _.thumbnails;
    }
    function S() {
      return _.cards;
    }
    function R() {
      return g;
    }
    function L(e) {
      var t = { listener: e };
      return (
        C.add(t),
        function () {
          C.delete(t);
        }
      );
    }
    function E() {
      ((g = !1), y++, (h = null), (f = 0), w(m));
    }
    async function k(e) {
      var t = await I();
      return y !== e
        ? d
        : (t != null && ((f = self.performance.now() + c), (g = !0), w(t)),
          _.thumbnails);
    }
    async function I() {
      var e = await T();
      return (function (e) {
        if (e === null) return M("session", !1);
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "response" &&
          "body" in e &&
          "statusCode" in e
        ) {
          var t = e.body,
            n = e.statusCode;
          return x(t, n);
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "failure" &&
          "detail" in e &&
          e.detail === p
        )
          return M("responseTooLarge", !0);
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "failure"
        )
          return M("transport", !1);
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "rejected"
        )
          return M("rejected", !0);
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "unreadable"
        )
          return M("malformedResponse", !0);
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(e);
    }
    async function T() {
      var e = await o("WAWebHatchVmConnection").connectHatchVmApi();
      if (e == null) return null;
      var t = await D(e);
      return t.kind === "failure" && t.detail !== p ? D(e) : t;
    }
    function D(e) {
      return e.exchange(
        "GET",
        o("WAWebHatchVmTransport").JarvisPaths.SPACES_CATALOG,
        { timeoutMs: s },
      );
    }
    function x(e, t) {
      if (t < 200 || t >= 300) return M("http." + t, t < 500);
      if (e.length > u) return M("responseTooLarge", !0);
      var n = $(e);
      return n == null
        ? M("malformedResponse", !0)
        : {
            cards: P(n, "preview_card_url"),
            thumbnails: P(n, "thumbnail_url"),
          };
    }
    function $(e) {
      try {
        return o("WAWebHatchJsonReaders").readArray(
          JSON.parse(new TextDecoder().decode(e)),
          "spaces",
        );
      } catch (e) {
        return null;
      }
    }
    function P(e, t) {
      var n = new Map();
      for (var r of e) {
        var a = o("WAWebHatchJsonReaders").readString(r, "slug"),
          i = N(r, t);
        a != null && a !== "" && i != null && !n.has(a) && n.set(a, i);
      }
      return n;
    }
    function N(e, t) {
      var n = o("WAWebHatchJsonReaders").readString(
        o("WAWebHatchJsonReaders").readObject(e, "preview_image"),
        t,
      );
      return n == null ||
        o("WAWebHatchJsonReaders").readBool(e, "is_shared") === !0
        ? null
        : o("WAWebHatchVmTransport").JarvisPaths.SPACE_IMAGE(n);
    }
    function M(t, n) {
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
    function w(e) {
      if (_ !== e) {
        _ = e;
        for (var t of Array.from(C)) t.listener();
      }
    }
    ((l.requestHatchSpacePreviewRoutes = b),
      (l.getHatchSpacePreviewRoutes = v),
      (l.getHatchSpaceCardPreviewRoutes = S),
      (l.hasHatchSpacePreviewRoutesLoaded = R),
      (l.subscribeToHatchSpacePreviewRoutes = L),
      (l.clearHatchSpacePreviewRoutes = E));
  },
  98,
);
