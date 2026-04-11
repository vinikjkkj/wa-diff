__d(
  "WAWebMediaPlaybackEventUploader",
  [
    "WAExponentialBackoff",
    "WALogger",
    "WAWebABProps",
    "WAWebCRUDOperationsMediaPlaybackEvent",
    "WAWebNetworkStatus",
    "WAWebPromiseQueue",
    "WAWebSNAPLUploadMusicConsumptionLogs",
    "asyncToGeneratorRuntime",
    "err",
    "lodash",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 100,
      u = 3e3,
      c = new (o("WAWebPromiseQueue").PromiseQueue)(),
      d = r("lodash").throttle(m, u);
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = yield c.enqueue(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var t = yield o(
                  "WAWebCRUDOperationsMediaPlaybackEvent",
                ).getRowCount();
                if (t === 0) return { success: !0, leftover: 0 };
                var n = yield h(),
                  a = n.events,
                  i = n.ids,
                  l = a.length;
                if (l === 0) return { success: !0, leftover: 0 };
                try {
                  var s = yield _(a);
                  if (!s.ok) throw r("err")("upload failed");
                } catch (n) {
                  return (
                    o("WALogger").ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[MediaPlaybackEventUploader] failed to upload events",
                        ])),
                    ),
                    { success: !1, leftover: t }
                  );
                }
                return (
                  yield o("WAWebCRUDOperationsMediaPlaybackEvent").deleteEvents(
                    i,
                  ),
                  t > l
                    ? { success: !0, leftover: t - l }
                    : { success: !0, leftover: 0 }
                );
              }),
            ),
            a = t.leftover,
            i = t.success;
          if (i && a > 0) return d();
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      var t = new AbortController(),
        a = t.signal;
      return o("WAExponentialBackoff").exponentialBackoff(
        { retries: 3, signal: a, minTimeout: 1e3 },
        (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (t, n) {
              yield r("WAWebNetworkStatus").waitIfOffline();
              var a = yield o(
                "WAWebSNAPLUploadMusicConsumptionLogs",
              ).uploadMusicConsumptionLogs(e);
              if (a == null) throw r("err")("upload failed");
              if (a.ok) return a;
              if (f(a))
                return t(
                  r("err")("upload failed with status code: " + a.status),
                );
              throw r("err")("upload failed");
            },
          );
          return function (e, n) {
            return t.apply(this, arguments);
          };
        })(),
      );
    }
    function f(e) {
      return e.status >= 500;
    }
    function g() {
      return (
        Math.max(
          o("WAWebABProps").getABPropConfigValue("ohai_request_kb_size") - 1,
          1,
        ) * 1e3
      );
    }
    function h() {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = 0,
            t = yield o(
              "WAWebCRUDOperationsMediaPlaybackEvent",
            ).getOldestEvents(s),
            n = new TextEncoder();
          return t.reduce(
            function (t, r) {
              var o = n.encode(JSON.stringify(r.event)).length;
              return (
                e + o > g() ||
                  ((e += o), t.events.push(r.event), t.ids.push(r.id)),
                t
              );
            },
            { events: [], ids: [] },
          );
        })),
        y.apply(this, arguments)
      );
    }
    ((l.MAX_BATCH_SIZE = s),
      (l.UPLOAD_THROTTLE_INTERVAL = u),
      (l.uploadQueue = c),
      (l.requestUpload = d));
  },
  98,
);
