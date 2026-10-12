__d(
  "WAWebHatchSpaceImageLoader",
  [
    "WALogger",
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
      u = 4 * 1024 * 1024,
      c = "VM response exceeds size limit",
      d = [137, 80, 78, 71, 13, 10, 26, 10],
      m = [255, 216, 255],
      p = [82, 73, 70, 70],
      _ = [87, 69, 66, 80];
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield h(e);
          return (function (e) {
            if (e === null) return k("session", !1);
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.kind === "response" &&
              "body" in e &&
              "statusCode" in e
            ) {
              var t = e.body,
                n = e.statusCode;
              return b(t, n);
            }
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.kind === "failure" &&
              "detail" in e &&
              e.detail === c
            )
              return k("responseTooLarge", !0);
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.kind === "failure"
            )
              return k("transport", !1);
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.kind === "rejected"
            )
              return k("rejected", !0);
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.kind === "unreadable"
            )
              return k("malformedResponse", !0);
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                e,
            );
          })(t);
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebHatchVmConnection").connectHatchVmApi();
          if (t == null) return null;
          var n = yield C(t, e);
          return n.kind === "failure" && n.detail !== c ? C(t, e) : n;
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t) {
      return e.exchange("GET", t, { timeoutMs: s });
    }
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (t < 200 || t >= 300) return k("http." + t, t < 500);
          if (e.length > u) return k("responseTooLarge", !0);
          var n = S(e);
          if (n == null) return k("notAnImage", !0);
          var r = yield L(e.slice().buffer, n);
          return (function (e) {
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.kind === "clean" &&
              "bytes" in e
            ) {
              var t = e.bytes;
              return { bytes: t, kind: "loaded", mimetype: n };
            }
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.kind === "rejected"
            )
              return k("scanRejected", !0);
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.kind === "unavailable"
            )
              return k("scanUnavailable", !1);
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                e,
            );
          })(r);
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return R(e, d)
        ? "image/png"
        : R(e, m)
          ? "image/jpeg"
          : R(e, p) && R(e.subarray(8), _)
            ? "image/webp"
            : null;
    }
    function R(e, t) {
      return t.every(function (t, n) {
        return e[n] === t;
      });
    }
    function L(e, t) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        E.apply(this, arguments)
      );
    }
    function k(t, n) {
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
    l.loadHatchSpaceImage = f;
  },
  98,
);
