__d(
  "WAWebHatchSpaceImageLoader",
  [
    "WALogger",
    "WAPromiseDelays",
    "WAWebBoolFunc",
    "WAWebDownloadManager",
    "WAWebHatchVmConnection",
    "WAWebMediaFileErrors",
    "WAWebMmsMediaTypes",
    "WAWebStartMediaDownloadQpl",
    "WAWebSuspiciousContent",
    "WAWebWamEnumDownloadOriginType",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 3e4,
      u = 202,
      c = 3,
      d = 1e3,
      m = 4 * 1024 * 1024,
      p = "VM response exceeds size limit",
      _ = [137, 80, 78, 71, 13, 10, 26, 10],
      f = [255, 216, 255],
      g = [82, 73, 70, 70],
      h = [87, 69, 66, 80],
      y = new Set([9, 10, 13, 32]),
      C = 123;
    function b(e, t) {
      var n = t === void 0 ? {} : t,
        r = n.maxBytes,
        o = r === void 0 ? m : r,
        a = n.timeoutMs,
        i = a === void 0 ? s : a;
      return R(e, i, function (e, t) {
        return D(e, t, o);
      });
    }
    function v(e, t, n) {
      var r = n.maxBytes,
        o = n.timeoutMs;
      return R(e, o, function (e, n) {
        return x(e, n, t, r);
      });
    }
    function S(e, t, n) {
      var r = n.isHeld,
        o = n.maxBytes,
        a = n.timeoutMs;
      return R(
        e,
        a,
        function (e, n) {
          return $(e, n, t, o);
        },
        r,
      );
    }
    async function R(e, t, n, r) {
      var o = await L(e, t, r);
      return k(o)
        ? F("rendering", !1)
        : (function (e) {
            if (e === null) return F("session", !1);
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.kind === "response" &&
              "body" in e &&
              "statusCode" in e
            ) {
              var t = e.body,
                r = e.statusCode;
              return n(t, r);
            }
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.kind === "failure" &&
              "detail" in e &&
              e.detail === p
            )
              return F("responseTooLarge", !0);
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.kind === "failure"
            )
              return F("transport", !1);
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.kind === "rejected"
            )
              return F("rejected", !0);
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.kind === "unreadable"
            )
              return F("malformedResponse", !0);
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                e,
            );
          })(o);
    }
    async function L(e, t, n) {
      n === void 0 && (n = o("WAWebBoolFunc").returnTrue);
      var r = await o("WAWebHatchVmConnection").connectHatchVmApi();
      return r == null || !n() ? null : E(r, e, t, c);
    }
    async function E(e, t, n, r) {
      var a = await I(e, t, n);
      return r <= 1 || !k(a)
        ? a
        : (await o("WAPromiseDelays").delayMs(d), E(e, t, n, r - 1));
    }
    function k(e) {
      return (e == null ? void 0 : e.kind) === "response" && e.statusCode === u;
    }
    async function I(e, t, n) {
      var r = await T({ api: e, route: t, timeoutMs: n });
      return r.kind === "failure" && r.detail !== p
        ? T({ api: e, route: t, timeoutMs: n })
        : r;
    }
    function T(e) {
      var t = e.api,
        n = e.route,
        r = e.timeoutMs;
      return t.exchange("GET", n, { timeoutMs: r });
    }
    async function D(e, t, n) {
      var r = P(e, t, n);
      if (r != null) return r;
      var a = M(e);
      if (a == null) return F("notAnImage", !0);
      var i = await A(
        e.slice().buffer,
        o("WAWebMmsMediaTypes").MEDIA_TYPES.IMAGE,
        a,
      );
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "clean" &&
          "bytes" in e
        ) {
          var t = e.bytes;
          return { bytes: t, kind: "loaded", mimetype: a };
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "rejected"
        )
          return F("scanRejected", !0);
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "unavailable"
        )
          return F("scanUnavailable", !1);
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(i);
    }
    async function x(e, t, n, r) {
      var a = P(e, t, r);
      if (a != null) return a;
      if (N(e)) return F("notAVideo", !0);
      var i = await A(
        e.slice().buffer,
        o("WAWebMmsMediaTypes").MEDIA_TYPES.VIDEO,
        n,
      );
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "clean" &&
          "bytes" in e
        ) {
          var t = e.bytes;
          return { bytes: t, kind: "loaded", mimetype: n };
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "rejected"
        )
          return F("scanRejected", !0);
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "unavailable"
        )
          return F("scanUnavailable", !1);
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(i);
    }
    async function $(e, t, n, r) {
      var a = P(e, t, r);
      if (a != null) return a;
      if (e.length === 0) return F("emptyFile", !0);
      var i = await A(
        e.slice().buffer,
        o("WAWebMmsMediaTypes").MEDIA_TYPES.DOCUMENT,
        n,
      );
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "clean" &&
          "bytes" in e
        ) {
          var t = e.bytes;
          return { bytes: t, kind: "loaded", mimetype: n };
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "rejected"
        )
          return F("scanRejected", !0);
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "unavailable"
        )
          return F("scanUnavailable", !1);
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(i);
    }
    function P(e, t, n) {
      return t < 200 || t >= 300
        ? F("http." + t, t < 500)
        : e.length > n
          ? F("responseTooLarge", !0)
          : null;
    }
    function N(e) {
      var t = e.find(function (e) {
        return !y.has(e);
      });
      return t == null || t === C;
    }
    function M(e) {
      return w(e, _)
        ? "image/png"
        : w(e, f)
          ? "image/jpeg"
          : w(e, g) && w(e.subarray(8), h)
            ? "image/webp"
            : null;
    }
    function w(e, t) {
      return t.every(function (t, n) {
        return e[n] === t;
      });
    }
    async function A(e, t, n) {
      var a = o("WAWebStartMediaDownloadQpl").startMediaDownloadQpl({
          entryPoint: "DownloadHatchSpaceImage",
        }),
        i = !1;
      try {
        var l = await o("WAWebDownloadManager").screenDecryptedMedia({
          input: e,
          type: t,
          mimetype: n,
          downloadOrigin: o("WAWebWamEnumDownloadOriginType")
            .DOWNLOAD_ORIGIN_TYPE.CHAT_PERSONAL,
          downloadQpl: a,
          onSuspiciousContent: function (t) {
            i = t !== o("WAWebSuspiciousContent").WAWebSuspiciousContent.NO;
          },
        });
        return i
          ? (a.endFailWithError("scan_suspicious"), { kind: "rejected" })
          : (a.endSuccess(), { bytes: l, kind: "clean" });
      } catch (e) {
        return e instanceof o("WAWebMediaFileErrors").InvalidMediaFileType
          ? (a.endFailWithError("scan_rejected", e.message),
            { kind: "rejected" })
          : (a.endFailWithError(
              "scan_unavailable",
              r("getErrorSafe")(e).message,
            ),
            { kind: "unavailable" });
      }
    }
    function F(t, n) {
      var r = o("WALogger").WARN(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "hatch-space-image/load-failed reason=",
            "",
          ])),
        t,
      );
      return (
        n && r.sendLogs("hatch-space-image-load-failed"),
        { kind: "failed", permanent: n, reason: t }
      );
    }
    ((l.loadHatchSpaceImage = b),
      (l.loadHatchSpaceVideo = v),
      (l.loadHatchFile = S));
  },
  98,
);
