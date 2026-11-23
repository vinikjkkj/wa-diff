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
            l = n.project,
            s = a.length;
          if (s === 0) return { success: !0, leftover: 0 };
          try {
            var u = await p(a, l);
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
            await o("WAWebCRUDOperationsMediaPlaybackEvent").deleteEvents(i),
            t > s
              ? { success: !0, leftover: t - s }
              : { success: !0, leftover: 0 }
          );
        }),
        n = t.leftover,
        a = t.success;
      if (a && n > 0) return d();
    }
    function p(e, t) {
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
          if (_(i))
            return n(r("err")("upload failed with status code: " + i.status));
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
        n = new TextEncoder(),
        r = t[0] != null && h(t[0].event),
        a = r
          ? o("WAWebMusicOnChatsAcsProject").getMusicOnChatsAcsProject(
              o("WAWebACSTokenConfig").ACS_PROJECTS.WA_ChatsMusicReporting,
            )
          : o("WAWebACSTokenConfig").ACS_PROJECTS.WA_StatusMusicReporting,
        i = t.reduce(
          function (t, o) {
            if (h(o.event) !== r) return t;
            var a = n.encode(JSON.stringify(o.event)).length;
            return (
              e + a > f() ||
                ((e += a), t.events.push(o.event), t.ids.push(o.id)),
              t
            );
          },
          { events: [], ids: [] },
        ),
        l = i.events,
        u = i.ids;
      return { events: l, ids: u, project: a };
    }
    function h(e) {
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
