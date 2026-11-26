__d(
  "WAWebMediaPlaybackEventUploader",
  [
    "WAExponentialBackoff",
    "WALogger",
    "WAPromiseLoop",
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
      await m.enqueue(function () {
        var e = new Set();
        return o("WAPromiseLoop").promiseLoop(
          async function (t) {
            var n =
              (await o("WAWebCRUDOperationsMediaPlaybackEvent").getRowCount()) >
              0;
            (!n || !(await f(e))) && t();
          },
          void 0,
        );
      });
    }
    async function f(t) {
      var n = await b(),
        a = n.droppedIds,
        i = n.events,
        l = n.ids,
        s = n.project;
      if (
        [].concat(a, l).some(function (e) {
          return t.has(e);
        })
      )
        return !1;
      if ((g(t, a), i.length === 0)) return a.length > 0;
      try {
        var u = await h(i, s);
        if (!u.ok) throw r("err")("upload failed");
      } catch (t) {
        return (
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[MediaPlaybackEventUploader] failed to upload events",
              ])),
          ),
          !1
        );
      }
      return (
        await o("WAWebCRUDOperationsMediaPlaybackEvent").deleteEvents(l),
        g(t, l),
        !0
      );
    }
    function g(e, t) {
      for (var n of t) e.add(n);
    }
    function h(e, t) {
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
          if (y(i))
            return n(r("err")("upload failed with status code: " + i.status));
          throw r("err")("upload failed");
        },
      );
    }
    function y(e) {
      return e.status >= 500;
    }
    function C() {
      return (
        Math.max(
          o("WAWebABProps").getABPropConfigValue("ohai_request_kb_size") - 1,
          1,
        ) * 1e3
      );
    }
    async function b() {
      var e = 0,
        t = await o("WAWebCRUDOperationsMediaPlaybackEvent").getOldestEvents(c),
        n = await S(await v(t)),
        r = n[0] != null && L(n[0].event),
        a = r
          ? o("WAWebMusicOnChatsAcsProject").getMusicOnChatsAcsProject(
              o("WAWebACSTokenConfig").ACS_PROJECTS.WA_ChatsMusicReporting,
            )
          : o("WAWebACSTokenConfig").ACS_PROJECTS.WA_StatusMusicReporting,
        i = n.reduce(
          function (t, n) {
            if (L(n.event) !== r) return t;
            var o = R(n.event);
            return (
              e + o > C() ||
                ((e += o), t.events.push(n.event), t.ids.push(n.id)),
              t
            );
          },
          { events: [], ids: [] },
        ),
        l = i.events,
        s = i.ids;
      return {
        droppedIds: t
          .filter(function (e) {
            return !n.includes(e);
          })
          .map(function (e) {
            return e.id;
          }),
        events: l,
        ids: s,
        project: a,
      };
    }
    async function v(e) {
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
    async function S(e) {
      var t = C(),
        n = e
          .filter(function (e) {
            return R(e.event) > t;
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
    function R(e) {
      return new TextEncoder().encode(JSON.stringify(e)).length;
    }
    function L(e) {
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
