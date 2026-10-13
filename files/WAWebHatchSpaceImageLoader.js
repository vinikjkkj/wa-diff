__d(
  "WAWebHatchSpaceImageLoader",
  [
    "WALogger",
    "WAPromiseDelays",
    "WAWebDownloadManager",
    "WAWebHatchVmConnection",
    "WAWebMediaFileErrors",
    "WAWebMmsMediaTypes",
    "WAWebStartMediaDownloadQpl",
    "WAWebSuspiciousContent",
    "WAWebWamEnumDownloadOriginType",
    "asyncToGeneratorRuntime",
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
      h = [87, 69, 66, 80];
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t === void 0 ? {} : t,
            r = n.maxBytes,
            o = r === void 0 ? m : r,
            a = n.timeoutMs,
            i = a === void 0 ? s : a,
            l = yield b(e, i);
          return L(l)
            ? M("rendering", !1)
            : (function (e) {
                if (e === null) return M("session", !1);
                if (
                  ((typeof e == "object" && e !== null) ||
                    typeof e == "function") &&
                  e.kind === "response" &&
                  "body" in e &&
                  "statusCode" in e
                ) {
                  var t = e.body,
                    n = e.statusCode;
                  return T(t, n, o);
                }
                if (
                  ((typeof e == "object" && e !== null) ||
                    typeof e == "function") &&
                  e.kind === "failure" &&
                  "detail" in e &&
                  e.detail === p
                )
                  return M("responseTooLarge", !0);
                if (
                  ((typeof e == "object" && e !== null) ||
                    typeof e == "function") &&
                  e.kind === "failure"
                )
                  return M("transport", !1);
                if (
                  ((typeof e == "object" && e !== null) ||
                    typeof e == "function") &&
                  e.kind === "rejected"
                )
                  return M("rejected", !0);
                if (
                  ((typeof e == "object" && e !== null) ||
                    typeof e == "function") &&
                  e.kind === "unreadable"
                )
                  return M("malformedResponse", !0);
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })(l);
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebHatchVmConnection").connectHatchVmApi();
          return n == null ? null : S(n, e, t, c);
        })),
        v.apply(this, arguments)
      );
    }
    function S(e, t, n, r) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = yield E(e, t, n);
            return r <= 1 || !L(a)
              ? a
              : (yield o("WAPromiseDelays").delayMs(d), S(e, t, n, r - 1));
          },
        )),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      return (e == null ? void 0 : e.kind) === "response" && e.statusCode === u;
    }
    function E(e, t, n) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield I(e, t, n);
          return r.kind === "failure" && r.detail !== p ? I(e, t, n) : r;
        })),
        k.apply(this, arguments)
      );
    }
    function I(e, t, n) {
      return e.exchange("GET", t, { timeoutMs: n });
    }
    function T(e, t, n) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if (t < 200 || t >= 300) return M("http." + t, t < 500);
          if (e.length > n) return M("responseTooLarge", !0);
          var r = x(e);
          if (r == null) return M("notAnImage", !0);
          var o = yield P(e.slice().buffer, r);
          return (function (e) {
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.kind === "clean" &&
              "bytes" in e
            ) {
              var t = e.bytes;
              return { bytes: t, kind: "loaded", mimetype: r };
            }
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.kind === "rejected"
            )
              return M("scanRejected", !0);
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.kind === "unavailable"
            )
              return M("scanUnavailable", !1);
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                e,
            );
          })(o);
        })),
        D.apply(this, arguments)
      );
    }
    function x(e) {
      return $(e, _)
        ? "image/png"
        : $(e, f)
          ? "image/jpeg"
          : $(e, g) && $(e.subarray(8), h)
            ? "image/webp"
            : null;
    }
    function $(e, t) {
      return t.every(function (t, n) {
        return e[n] === t;
      });
    }
    function P(e, t) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WAWebStartMediaDownloadQpl").startMediaDownloadQpl({
              entryPoint: "DownloadHatchSpaceImage",
            }),
            a = !1;
          try {
            var i = yield o("WAWebDownloadManager").screenDecryptedMedia({
              input: e,
              type: o("WAWebMmsMediaTypes").MEDIA_TYPES.IMAGE,
              mimetype: t,
              downloadOrigin: o("WAWebWamEnumDownloadOriginType")
                .DOWNLOAD_ORIGIN_TYPE.CHAT_PERSONAL,
              downloadQpl: n,
              onSuspiciousContent: function (t) {
                a = t !== o("WAWebSuspiciousContent").WAWebSuspiciousContent.NO;
              },
            });
            return a
              ? (n.endFailWithError("scan_suspicious"), { kind: "rejected" })
              : (n.endSuccess(), { bytes: i, kind: "clean" });
          } catch (e) {
            return e instanceof o("WAWebMediaFileErrors").InvalidMediaFileType
              ? (n.endFailWithError("scan_rejected", e.message),
                { kind: "rejected" })
              : (n.endFailWithError(
                  "scan_unavailable",
                  r("getErrorSafe")(e).message,
                ),
                { kind: "unavailable" });
          }
        })),
        N.apply(this, arguments)
      );
    }
    function M(t, n) {
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
    l.loadHatchSpaceImage = y;
  },
  98,
);
