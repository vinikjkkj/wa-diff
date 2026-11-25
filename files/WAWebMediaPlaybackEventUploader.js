__d(
  "WAWebMediaPlaybackEventUploader",
  [
    "WAExponentialBackoff",
    "WALogger",
    "WAThrottle",
    "WAWebABProps",
    "WAWebACSTokenConfig",
    "WAWebCRUDOperationsMediaPlaybackEvent",
    "WAWebMusicOnChatsAcsProject",
    "WAWebNetworkStatus",
    "WAWebPromiseQueue",
    "WAWebSNAPLUploadMusicConsumptionLogs",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = 100,
      d = 3e3,
      m = new (o("WAWebPromiseQueue").PromiseQueue)(),
      p = o("WAThrottle").throttle(_, d);
    async function _() {
      var t = await m.enqueue(async function () {
          var t = await o(
            "WAWebCRUDOperationsMediaPlaybackEvent",
          ).getRowCount();
          if (t === 0) return { success: !0, leftover: 0 };
          var n = await y(),
            a = n.droppedCount,
            i = n.events,
            l = n.ids,
            s = n.project,
            u = i.length;
          if (u === 0) return { success: !0, leftover: a > 0 ? t - a : 0 };
          try {
            var c = await f(i, s);
            if (!c.ok) throw r("err")("upload failed");
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
            await o("WAWebCRUDOperationsMediaPlaybackEvent").deleteEvents(l),
            t > u
              ? { success: !0, leftover: t - u }
              : { success: !0, leftover: 0 }
          );
        }),
        n = t.leftover,
        a = t.success;
      if (a && n > 0) return p();
    }
    function f(e, t) {
      var n = new AbortController(),
        a = n.signal;
      return o("WAExponentialBackoff").exponentialBackoff(
        { retries: 3, signal: a, minTimeout: 1e3 },
        async function (n, a) {
          await r("WAWebNetworkStatus").waitIfOffline();
          var i = await o(
            "WAWebSNAPLUploadMusicConsumptionLogs",
          ).uploadMusicConsumptionLogs(e, t);
          if (i == null) throw r("err")("upload failed");
          if (i.ok) return i;
          if (g(i))
            return n(r("err")("upload failed with status code: " + i.status));
          throw r("err")("upload failed");
        },
      );
    }
    function g(e) {
      return e.status >= 500;
    }
    function h() {
      return (
        Math.max(
          o("WAWebABProps").getABPropConfigValue("ohai_request_kb_size") - 1,
          1,
        ) * 1e3
      );
    }
    async function y() {
      var e = 0,
        t = await o("WAWebCRUDOperationsMediaPlaybackEvent").getOldestEvents(c),
        n = await b(await C(t)),
        r = n[0] != null && S(n[0].event),
        a = r
          ? o("WAWebMusicOnChatsAcsProject").getMusicOnChatsAcsProject(
              o("WAWebACSTokenConfig").ACS_PROJECTS.WA_ChatsMusicReporting,
            )
          : o("WAWebACSTokenConfig").ACS_PROJECTS.WA_StatusMusicReporting,
        i = n.reduce(
          function (t, n) {
            if (S(n.event) !== r) return t;
            var o = v(n.event);
            return (
              e + o > h() ||
                ((e += o), t.events.push(n.event), t.ids.push(n.id)),
              t
            );
          },
          { events: [], ids: [] },
        ),
        l = i.events,
        s = i.ids;
      return {
        droppedCount: t.length - n.length,
        events: l,
        ids: s,
        project: a,
      };
    }
    async function C(e) {
      var t = e
        .filter(function (e) {
          return e.event == null;
        })
        .map(function (e) {
          return e.id;
        });
      return t.length === 0
        ? e
        : (o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[MediaPlaybackEventUploader] dropping ",
                  " rows without an event",
                ])),
              t.length,
            )
            .sendLogs("media-playback-event-row-without-event"),
          await o("WAWebCRUDOperationsMediaPlaybackEvent").deleteEvents(t),
          e.filter(function (e) {
            return e.event != null;
          }));
    }
    async function b(e) {
      var t = h(),
        n = e
          .filter(function (e) {
            return v(e.event) > t;
          })
          .map(function (e) {
            return e.id;
          });
      return n.length === 0
        ? e
        : (o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[MediaPlaybackEventUploader] dropping ",
                  " rows larger than ",
                  " bytes",
                ])),
              n.length,
              t,
            )
            .sendLogs("media-playback-event-oversized-row-dropped"),
          await o("WAWebCRUDOperationsMediaPlaybackEvent").deleteEvents(n),
          e.filter(function (e) {
            return !n.includes(e.id);
          }));
    }
    function v(e) {
      return new TextEncoder().encode(JSON.stringify(e)).length;
    }
    function S(e) {
      var t;
      return (
        ((t = e.required_metadata) == null
          ? void 0
          : t.current_watching_module) === "whatsapp_chats"
      );
    }
    ((l.MAX_BATCH_SIZE = c),
      (l.UPLOAD_THROTTLE_INTERVAL = d),
      (l.uploadQueue = m),
      (l.requestUpload = p));
  },
  98,
);
