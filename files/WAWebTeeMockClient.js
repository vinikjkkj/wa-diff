__d(
  "WAWebTeeMockClient",
  ["WAWebTeeDebugStore", "WAWebTeeEnums", "err", "setTimeout"],
  function (t, n, r, o, a, i, l) {
    var e = 3e5;
    function s(e) {
      return e.summary_request != null
        ? o("WAWebTeeEnums").TeeRequestType.SUMMARY
        : e.wwai_request != null
          ? o("WAWebTeeEnums").TeeRequestType.WRITE_WITH_AI
          : e.chat_participation_request != null || e.tee_chat_request != null
            ? o("WAWebTeeEnums").TeeRequestType.SIDE_CHAT
            : o("WAWebTeeEnums").TeeRequestType.TEST;
    }
    function u(t) {
      return new Promise(function (n, a) {
        if (t.responses.length > 0) {
          var i = t.responses[t.responses.length - 1];
          if (
            i.common_metadata.status !==
            o("WAWebTeeEnums").TEEResponseStatus.IN_PROGRESS
          ) {
            n(i);
            return;
          }
        }
        var l = !1,
          s = r("setTimeout")(function () {
            l ||
              ((l = !0),
              a(r("err")("TEE mock request timed out after 5 minutes")));
          }, e);
        ((t.rejectResponse = function (e) {
          l || ((l = !0), window.clearTimeout(s), a(e));
        }),
          (t.resolveResponse = function (e) {
            l || ((l = !0), window.clearTimeout(s), n(e));
          }));
      });
    }
    var c = (function () {
        function e() {}
        var t = e.prototype;
        return (
          (t.sendRequest = (function () {
            var e = babelHelpers.wrapAsyncGenerator(function* (e) {
              for (
                var t = s(e),
                  n = o("WAWebTeeDebugStore").addRequest(t, e),
                  r = !1;
                !r;
              ) {
                var a = yield babelHelpers.awaitAsyncGenerator(u(n));
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
          (t.preconnect = async function () {}),
          (t.disconnect = function () {}),
          e
        );
      })(),
      d = new c(),
      m = d;
    l.default = m;
  },
  98,
);
