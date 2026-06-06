__d(
  "WAWebMediaPlaybackEventUploader",
  [
    "WAExponentialBackoff",
    "WALogger",
    "WAThrottle",
    "WAWebABProps",
    "WAWebCRUDOperationsMediaPlaybackEvent",
    "WAWebNetworkStatus",
    "WAWebPromiseQueue",
    "WAWebSNAPLUploadMusicConsumptionLogs",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 100,
      u = 3e3,
      c = new (o("WAWebPromiseQueue").PromiseQueue)(),
      d = o("WAThrottle").throttle(m, u);
    async function m() {
      var t = await c.enqueue(async function () {
          var t = await o(
            "WAWebCRUDOperationsMediaPlaybackEvent",
          ).getRowCount();
          if (t === 0) return { success: !0, leftover: 0 };
          var n = await g(),
            a = n.events,
            i = n.ids,
            l = a.length;
          if (l === 0) return { success: !0, leftover: 0 };
          try {
            var s = await p(a);
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
            await o("WAWebCRUDOperationsMediaPlaybackEvent").deleteEvents(i),
            t > l
              ? { success: !0, leftover: t - l }
              : { success: !0, leftover: 0 }
          );
        }),
        n = t.leftover,
        a = t.success;
      if (a && n > 0) return d();
    }
    function p(e) {
      var t = new AbortController(),
        n = t.signal;
      return o("WAExponentialBackoff").exponentialBackoff(
        { retries: 3, signal: n, minTimeout: 1e3 },
        async function (t, n) {
          await r("WAWebNetworkStatus").waitIfOffline();
          var a = await o(
            "WAWebSNAPLUploadMusicConsumptionLogs",
          ).uploadMusicConsumptionLogs(e);
          if (a == null) throw r("err")("upload failed");
          if (a.ok) return a;
          if (_(a))
            return t(r("err")("upload failed with status code: " + a.status));
          throw r("err")("upload failed");
        },
      );
    }
    function _(e) {
      return e.status >= 500;
    }
    function f() {
      return (
        Math.max(
          o("WAWebABProps").getABPropConfigValue("ohai_request_kb_size") - 1,
          1,
        ) * 1e3
      );
    }
    async function g() {
      var e = 0,
        t = await o("WAWebCRUDOperationsMediaPlaybackEvent").getOldestEvents(s),
        n = new TextEncoder();
      return t.reduce(
        function (t, r) {
          var o = n.encode(JSON.stringify(r.event)).length;
          return (
            e + o > f() || ((e += o), t.events.push(r.event), t.ids.push(r.id)),
            t
          );
        },
        { events: [], ids: [] },
      );
    }
    ((l.MAX_BATCH_SIZE = s),
      (l.UPLOAD_THROTTLE_INTERVAL = u),
      (l.uploadQueue = c),
      (l.requestUpload = d));
  },
  98,
);
