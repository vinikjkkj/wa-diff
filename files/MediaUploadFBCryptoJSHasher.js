__d(
  "MediaUploadFBCryptoJSHasher",
  ["CryptoJS", "MediaUploadTime", "Promise", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function t(e, t) {
          var n = t.currentTimeProvider;
          ((this.$2 = e), (this.$1 = n));
        }
        var a = t.prototype;
        return (
          (a.$3 = function () {
            switch (this.$2.hashingAlgorithm) {
              case "sha256":
                return r("CryptoJS").algo.SHA256;
              case "md5":
                return r("CryptoJS").algo.MD5;
              default:
                return null;
            }
          }),
          (a.$4 = function () {
            switch (this.$2.outputEncoding) {
              case "base64":
                return r("CryptoJS").enc.Base64;
              case "hex":
                return r("CryptoJS").enc.Hex;
              default:
                return null;
            }
          }),
          (a.$5 = function (r, o, a) {
            return new (e || (e = n("Promise")))(function (e) {
              var t = new FileReader();
              ((t.onload = function () {
                t.result instanceof ArrayBuffer
                  ? e({ isSuccess: !0, data: t.result })
                  : e({
                      isSuccess: !1,
                      rawErrorCode: "INVALID_TYPE_FILE_READER",
                    });
              }),
                (t.onerror = function () {
                  var n;
                  e({
                    isSuccess: !1,
                    rawErrorCode: (n = t.error) == null ? void 0 : n.name,
                  });
                }),
                t.readAsArrayBuffer(r.slice(o, o + a)));
            });
          }),
          (a.$6 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                for (
                  var n =
                      this.$2.takeFirstBytes == null
                        ? e.size
                        : Math.min(this.$2.takeFirstBytes, e.size),
                    o = 0;
                  o < n;
                ) {
                  var a = Math.min(this.$2.maxChunkSize, n - o),
                    i = yield this.$5(e, o, a);
                  if (i.isSuccess)
                    t.update(r("CryptoJS").lib.WordArray.create(i.data));
                  else return i;
                  o += a;
                }
                return null;
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.hash = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                if (this.$2.maxFileSize != null && e.size > this.$2.maxFileSize)
                  return { outcome: "FILE_TOO_LARGE" };
                var t = this.$3();
                if (t == null)
                  return {
                    outcome: "FAILURE",
                    rawErrorCode: "INVALID_ALGORITHM",
                  };
                var n = this.$4();
                if (n == null)
                  return {
                    outcome: "FAILURE",
                    rawErrorCode: "UNSUPPORTED_OUTPUT_ENCODING",
                  };
                var r = this.$1(),
                  a = t.create();
                try {
                  var i = yield this.$6(e, a);
                  if (i == null || i.isSuccess)
                    return {
                      outcome: "SUCCESS",
                      value: {
                        algorithm: this.$2.hashingAlgorithm,
                        hashValue: a.finalize().toString(n),
                        encoding: this.$2.outputEncoding,
                        calculationTimeCost: o("MediaUploadTime").subtractTime(
                          this.$1(),
                          r,
                        ),
                      },
                    };
                  var l;
                  return {
                    outcome: "FAILURE",
                    rawErrorCode:
                      (l = i == null ? void 0 : i.rawErrorCode) != null
                        ? l
                        : "INTERNAL_ERROR",
                    rawErrorObject: i == null ? void 0 : i.rawErrorObject,
                  };
                } catch (e) {
                  return {
                    outcome: "FAILURE",
                    rawErrorCode: "INTERNAL_ERROR",
                    rawErrorObject: e,
                  };
                }
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          t
        );
      })();
    l.default = s;
  },
  98,
);
