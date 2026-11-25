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
      u = 100,
      c = 3e3,
      d = new (o("WAWebPromiseQueue").PromiseQueue)(),
      m = o("WAThrottle").throttle(p, c);
    async function p() {
      var t = await d.enqueue(async function () {
          var t = await o(
            "WAWebCRUDOperationsMediaPlaybackEvent",
          ).getRowCount();
          if (t === 0) return { success: !0, leftover: 0 };
          var n = await h(),
            a = n.droppedCount,
            i = n.events,
            l = n.ids,
            s = n.project,
            u = i.length;
          if (u === 0) return { success: !0, leftover: a > 0 ? t - a : 0 };
          try {
            var c = await _(i, s);
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
      if (a && n > 0) return m();
    }
    function _(e, t) {
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
          if (f(i))
            return n(r("err")("upload failed with status code: " + i.status));
          throw r("err")("upload failed");
        },
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
    async function h() {
      var e = 0,
        t = await o("WAWebCRUDOperationsMediaPlaybackEvent").getOldestEvents(u),
        n = await y(t),
        r = new TextEncoder(),
        a = n[0] != null && C(n[0].event),
        i = a
          ? o("WAWebMusicOnChatsAcsProject").getMusicOnChatsAcsProject(
              o("WAWebACSTokenConfig").ACS_PROJECTS.WA_ChatsMusicReporting,
            )
          : o("WAWebACSTokenConfig").ACS_PROJECTS.WA_StatusMusicReporting,
        l = n.reduce(
          function (t, n) {
            if (C(n.event) !== a) return t;
            var o = r.encode(JSON.stringify(n.event)).length;
            return (
              e + o > g() ||
                ((e += o), t.events.push(n.event), t.ids.push(n.id)),
              t
            );
          },
          { events: [], ids: [] },
        ),
        s = l.events,
        c = l.ids;
      return {
        droppedCount: t.length - n.length,
        events: s,
        ids: c,
        project: i,
      };
    }
    async function y(e) {
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
    function C(e) {
      var t;
      return (
        ((t = e.required_metadata) == null
          ? void 0
          : t.current_watching_module) === "whatsapp_chats"
      );
    }
    ((l.MAX_BATCH_SIZE = u),
      (l.UPLOAD_THROTTLE_INTERVAL = c),
      (l.uploadQueue = d),
      (l.requestUpload = m));
  },
  98,
);
