__d(
  "WAWebTeeMockClient",
  [
    "Promise",
    "WAWebTeeDebugStore",
    "WAWebTeeEnums",
    "asyncToGeneratorRuntime",
    "err",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 3e5;
    function u(e) {
      return e.summary_request != null
        ? o("WAWebTeeEnums").TeeRequestType.SUMMARY
        : e.wwai_request != null
          ? o("WAWebTeeEnums").TeeRequestType.WRITE_WITH_AI
          : e.chat_participation_request != null || e.tee_chat_request != null
            ? o("WAWebTeeEnums").TeeRequestType.SIDE_CHAT
            : o("WAWebTeeEnums").TeeRequestType.TEST;
    }
    function c(t) {
      return new (e || (e = n("Promise")))(function (e, n) {
        if (t.responses.length > 0) {
          var a = t.responses[t.responses.length - 1];
          if (
            a.common_metadata.status !==
            o("WAWebTeeEnums").TEEResponseStatus.IN_PROGRESS
          ) {
            e(a);
            return;
          }
        }
        var i = !1,
          l = r("setTimeout")(function () {
            i ||
              ((i = !0),
              n(r("err")("TEE mock request timed out after 5 minutes")));
          }, s);
        ((t.rejectResponse = function (e) {
          i || ((i = !0), window.clearTimeout(l), n(e));
        }),
          (t.resolveResponse = function (t) {
            i || ((i = !0), window.clearTimeout(l), e(t));
          }));
      });
    }
    var d = (function () {
        function e() {}
        var t = e.prototype;
        return (
          (t.sendRequest = (function () {
            var e = babelHelpers.wrapAsyncGenerator(function* (e) {
              for (
                var t = u(e),
                  n = o("WAWebTeeDebugStore").addRequest(t, e),
                  r = !1;
                !r;
              ) {
                var a = yield babelHelpers.awaitAsyncGenerator(c(n));
                (yield a,
                  a.common_metadata.status !==
                    o("WAWebTeeEnums").TEEResponseStatus.IN_PROGRESS &&
                    (r = !0));
              }
            });
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (t.preconnect = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* () {},
            );
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (t.disconnect = function () {}),
          e
        );
      })(),
      m = new d(),
      p = m;
    l.default = p;
  },
  98,
);
