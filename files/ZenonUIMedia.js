__d(
  "ZenonUIMedia",
  [
    "ZenonMediaActionLogger",
    "assignMediaStream",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "ZenonUIMedia",
      s = "setSinkId" in window.HTMLMediaElement.prototype;
    /\{\s+\[native code\]/.test(
      Function.prototype.toString.call(window.HTMLMediaElement.prototype.play),
    ) ||
      r("ZenonMediaActionLogger").logErrorToFbLogger(
        "ZenonUIMedia warning: play() is non-native",
        e,
        null,
        "warn",
      );
    var u = {
        attachAudioSink: (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (t, n, o) {
              if ((o === void 0 && (o = s), !!o)) {
                var a = t instanceof HTMLAudioElement ? "audio" : "video";
                try {
                  yield t.setSinkId(n);
                } catch (t) {
                  var i = r("getErrorSafe")(t);
                  r("ZenonMediaActionLogger").logErrorToFbLogger(
                    "Encountered error while calling attachAudioSink on " +
                      a +
                      " element",
                    e,
                    i,
                    "warn",
                  );
                }
              }
            },
          );
          function o(e, n, r) {
            return t.apply(this, arguments);
          }
          return o;
        })(),
        attachMediaStream: (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (t, n) {
              var o = t instanceof HTMLAudioElement ? "audio" : "video";
              try {
                r("assignMediaStream")(t, n);
                try {
                  yield t.play();
                } catch (t) {
                  var a = r("getErrorSafe")(t);
                  switch (a.name) {
                    case "AbortError":
                      r("ZenonMediaActionLogger").logErrorToFbLogger(
                        "Calling play() on " + o + " element failed",
                        e,
                        a,
                        "info",
                      );
                      break;
                    case "NotAllowedError":
                      r("ZenonMediaActionLogger").logErrorToFbLogger(
                        "Browser blocked calling play() on " + o + " element",
                        e,
                        a,
                        "warn",
                      );
                      break;
                    default:
                      r("ZenonMediaActionLogger").logErrorToFbLogger(
                        "Encountered an unknown or critical error calling play() on " +
                          o +
                          " element",
                        e,
                        a,
                        "mustfix",
                      );
                  }
                }
              } catch (t) {
                var i = r("getErrorSafe")(t);
                throw (
                  r("ZenonMediaActionLogger").logErrorToFbLogger(
                    "Encountered error while calling attachMediaStream on " +
                      o +
                      " element",
                    e,
                    i,
                    "warn",
                  ),
                  i
                );
              }
            },
          );
          function o(e, n) {
            return t.apply(this, arguments);
          }
          return o;
        })(),
        detachMediaStream: function (n) {
          var t = n instanceof HTMLAudioElement ? "audio" : "video";
          try {
            r("assignMediaStream")(n, null);
          } catch (n) {
            var o = r("getErrorSafe")(n);
            throw (
              r("ZenonMediaActionLogger").logErrorToFbLogger(
                "Encountered error while calling detachMediaStream on " +
                  t +
                  " element",
                e,
                o,
                "warn",
              ),
              o
            );
          }
        },
        supportsSetSink: s,
      },
      c = u;
    l.default = c;
  },
  98,
);
