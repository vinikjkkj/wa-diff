__d(
  "WAWebChatThreadLoggingLocalstorageMetadataHandler",
  [
    "Promise",
    "WABase64",
    "WAWebUserPrefsMultiDevice",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function () {
        function t() {}
        var r = t.prototype;
        return (
          (r.setOffset = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                return (
                  yield o(
                    "WAWebUserPrefsMultiDevice",
                  ).setChatThreadLoggingOffset(e),
                  !0
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.getOffset = function () {
            return (e || (e = n("Promise"))).resolve(
              o("WAWebUserPrefsMultiDevice").getChatThreadLoggingOffset(),
            );
          }),
          (r.setSecret = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                return (
                  yield o(
                    "WAWebUserPrefsMultiDevice",
                  ).setChatThreadLoggingSecretB64(o("WABase64").encodeB64(e)),
                  !0
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.getSecret = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = yield o(
                "WAWebUserPrefsMultiDevice",
              ).getChatThreadLoggingSecretB64();
              return e == null ? null : o("WABase64").decodeB64(e);
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.setLastUploadedStartTs = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                return (
                  yield o(
                    "WAWebUserPrefsMultiDevice",
                  ).setChatThreadLoggingLastUploadedStartTs(e),
                  !0
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.getLastUploadedStartTs = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = yield o(
                "WAWebUserPrefsMultiDevice",
              ).getChatThreadLoggingLastUploadedStartTs();
              return e != null ? e : 0;
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          t
        );
      })();
    l.ChatThreadLoggingMetadataLocalStorage = s;
  },
  98,
);
