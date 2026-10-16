__d(
  "WAWebMediaPlaybackEventUploader",
  [
    "WAExponentialBackoff",
    "WALogger",
    "WAThrottle",
    "WAWebABProps",
    "WAWebACSTokenConfig",
    "WAWebCRUDOperationsMediaPlaybackEvent",
    "WAWebNetworkStatus",
    "WAWebPromiseQueue",
    "WAWebSNAPLUploadMusicConsumptionLogs",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 100,
      u = 3e3,
      c = new (o("WAWebPromiseQueue").PromiseQueue)(),
      d = o("WAThrottle").throttle(m, u);
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
                  l = n.project,
                  s = a.length;
                if (s === 0) return { success: !0, leftover: 0 };
                try {
                  var u = yield _(a, l);
                  if (!u.ok) throw r("err")("upload failed");
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
                  t > s
                    ? { success: !0, leftover: t - s }
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
    function _(e, t) {
      var a = new AbortController(),
        i = a.signal;
      return o("WAExponentialBackoff").exponentialBackoff(
        { retries: 3, signal: i, minTimeout: 1e3 },
        (function () {
          var a = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (n, a) {
              yield r("WAWebNetworkStatus").waitIfOffline();
              var i = yield o(
                "WAWebSNAPLUploadMusicConsumptionLogs",
              ).uploadMusicConsumptionLogs(e, t);
              if (i == null) throw r("err")("upload failed");
              if (i.ok) return i;
              if (f(i))
                return n(
                  r("err")("upload failed with status code: " + i.status),
                );
              throw r("err")("upload failed");
            },
          );
          return function (e, t) {
            return a.apply(this, arguments);
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
            n = new TextEncoder(),
            r = t[0] != null && C(t[0].event),
            a = r
              ? o("WAWebACSTokenConfig").ACS_PROJECTS.WA_ChatsMusicReporting
              : o("WAWebACSTokenConfig").ACS_PROJECTS.WA_StatusMusicReporting,
            i = t.reduce(
              function (t, o) {
                if (C(o.event) !== r) return t;
                var a = n.encode(JSON.stringify(o.event)).length;
                return (
                  e + a > g() ||
                    ((e += a), t.events.push(o.event), t.ids.push(o.id)),
                  t
                );
              },
              { events: [], ids: [] },
            ),
            l = i.events,
            u = i.ids;
          return { events: l, ids: u, project: a };
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      var t;
      return (
        ((t = e.required_metadata) == null
          ? void 0
          : t.current_watching_module) === "whatsapp_chats"
      );
    }
    ((l.MAX_BATCH_SIZE = s),
      (l.UPLOAD_THROTTLE_INTERVAL = u),
      (l.uploadQueue = c),
      (l.requestUpload = d));
  },
  98,
);
