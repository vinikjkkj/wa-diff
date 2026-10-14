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
        return N(e, t, o);
      });
    }
    function v(e, t, n) {
      var r = n.maxBytes,
        o = n.timeoutMs;
      return R(e, o, function (e, n) {
        return w(e, n, t, r);
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
          return F(e, n, t, o);
        },
        r,
      );
    }
    function R(e, t, n, r) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var o = yield E(e, t, r);
            return D(o)
              ? G("rendering", !1)
              : (function (e) {
                  if (e === null) return G("session", !1);
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
                    return G("responseTooLarge", !0);
                  if (
                    ((typeof e == "object" && e !== null) ||
                      typeof e == "function") &&
                    e.kind === "failure"
                  )
                    return G("transport", !1);
                  if (
                    ((typeof e == "object" && e !== null) ||
                      typeof e == "function") &&
                    e.kind === "rejected"
                  )
                    return G("rejected", !0);
                  if (
                    ((typeof e == "object" && e !== null) ||
                      typeof e == "function") &&
                    e.kind === "unreadable"
                  )
                    return G("malformedResponse", !0);
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })(o);
          },
        )),
        L.apply(this, arguments)
      );
    }
    function E(e, t, n) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          n === void 0 && (n = o("WAWebBoolFunc").returnTrue);
          var r = yield o("WAWebHatchVmConnection").connectHatchVmApi();
          return r == null || !n() ? null : I(r, e, t, c);
        })),
        k.apply(this, arguments)
      );
    }
    function I(e, t, n, r) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = yield x(e, t, n);
            return r <= 1 || !D(a)
              ? a
              : (yield o("WAPromiseDelays").delayMs(d), I(e, t, n, r - 1));
          },
        )),
        T.apply(this, arguments)
      );
    }
    function D(e) {
      return (e == null ? void 0 : e.kind) === "response" && e.statusCode === u;
    }
    function x(e, t, n) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield P(e, t, n);
          return r.kind === "failure" && r.detail !== p ? P(e, t, n) : r;
        })),
        $.apply(this, arguments)
      );
    }
    function P(e, t, n) {
      return e.exchange("GET", t, { timeoutMs: n });
    }
    function N(e, t, n) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = B(e, t, n);
          if (r != null) return r;
          var a = q(e);
          if (a == null) return G("notAnImage", !0);
          var i = yield V(
            e.slice().buffer,
            o("WAWebMmsMediaTypes").MEDIA_TYPES.IMAGE,
            a,
          );
          return (function (e) {
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.kind === "clean" &&
              "bytes" in e
            ) {
              var t = e.bytes;
              return { bytes: t, kind: "loaded", mimetype: a };
            }
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.kind === "rejected"
            )
              return G("scanRejected", !0);
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.kind === "unavailable"
            )
              return G("scanUnavailable", !1);
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                e,
            );
          })(i);
        })),
        M.apply(this, arguments)
      );
    }
    function w(e, t, n, r) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = B(e, t, r);
            if (a != null) return a;
            if (W(e)) return G("notAVideo", !0);
            var i = yield V(
              e.slice().buffer,
              o("WAWebMmsMediaTypes").MEDIA_TYPES.VIDEO,
              n,
            );
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
                return G("scanRejected", !0);
              if (
                ((typeof e == "object" && e !== null) ||
                  typeof e == "function") &&
                e.kind === "unavailable"
              )
                return G("scanUnavailable", !1);
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  e,
              );
            })(i);
          },
        )),
        A.apply(this, arguments)
      );
    }
    function F(e, t, n, r) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = B(e, t, r);
            if (a != null) return a;
            if (e.length === 0) return G("emptyFile", !0);
            var i = yield V(
              e.slice().buffer,
              o("WAWebMmsMediaTypes").MEDIA_TYPES.DOCUMENT,
              n,
            );
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
                return G("scanRejected", !0);
              if (
                ((typeof e == "object" && e !== null) ||
                  typeof e == "function") &&
                e.kind === "unavailable"
              )
                return G("scanUnavailable", !1);
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  e,
              );
            })(i);
          },
        )),
        O.apply(this, arguments)
      );
    }
    function B(e, t, n) {
      return t < 200 || t >= 300
        ? G("http." + t, t < 500)
        : e.length > n
          ? G("responseTooLarge", !0)
          : null;
    }
    function W(e) {
      var t = e.find(function (e) {
        return !y.has(e);
      });
      return t == null || t === C;
    }
    function q(e) {
      return U(e, _)
        ? "image/png"
        : U(e, f)
          ? "image/jpeg"
          : U(e, g) && U(e.subarray(8), h)
            ? "image/webp"
            : null;
    }
    function U(e, t) {
      return t.every(function (t, n) {
        return e[n] === t;
      });
    }
    function V(e, t, n) {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a = o("WAWebStartMediaDownloadQpl").startMediaDownloadQpl({
              entryPoint: "DownloadHatchSpaceImage",
            }),
            i = !1;
          try {
            var l = yield o("WAWebDownloadManager").screenDecryptedMedia({
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
        })),
        H.apply(this, arguments)
      );
    }
    function G(t, n) {
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
