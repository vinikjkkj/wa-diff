__d(
  "CometImpressionLoggingUtil",
  [
    "AuditImpressionChannelSessionFalcoEvent",
    "CometMetricsViewableImpressionFalcoEvent",
    "WebSession",
    "gkx",
    "randomInt",
    "setTimeout",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "TWO_M_SECOND_CHANNEL",
      s = "TWO_M_FIRST_CHANNEL";
    function u(e, t, n, o, a) {
      var i = Date.now(),
        l = i + "_" + (r("randomInt")(0, 4294967295) + 1),
        s = {
          aidv2: e,
          brs: a != null ? a : null,
          csp: t.toString(),
          cts: Math.floor(i / 1e3).toString(),
          etid: l,
          event_trace_id: r("uuidv4")(),
          gap_to_prev_ad: o == null ? void 0 : o.toString(),
          isv: "1",
          xt: n,
        };
      r("CometMetricsViewableImpressionFalcoEvent").logImmediately(function () {
        return s;
      });
    }
    function c(e, t, n, a, i, l) {
      var s, u, c, m, p, _, f, g, h, y, C, b, v, S, R, L, E, k;
      l === void 0 && (l = "comet_feed");
      var I = r("gkx")("15955");
      if (!(!I && l === "comet_feed")) {
        var T = r("gkx")("20817");
        if (!(!T && l === "comet_reels") && !(!a || e == null)) {
          var D = t != null ? t : "",
            x = {
              sessionKey: o("WebSession").getId(),
              time: Date.now(),
              tracking: D,
              view_rect: {
                view_bottom:
                  ((s = (u = n.boundingClientRect) == null ? void 0 : u.y) !=
                  null
                    ? s
                    : 0) +
                  ((c =
                    (m = n.boundingClientRect) == null ? void 0 : m.height) !=
                  null
                    ? c
                    : 0),
                view_top:
                  (p = (_ = n.rootBounds) == null ? void 0 : _.y) != null
                    ? p
                    : 0,
              },
              viewport_rect: {
                view_bottom:
                  ((f = (g = n.rootBounds) == null ? void 0 : g.y) != null
                    ? f
                    : 0) +
                  ((h = (y = n.rootBounds) == null ? void 0 : y.height) != null
                    ? h
                    : 0),
                view_top:
                  (C = (b = n.rootBounds) == null ? void 0 : b.y) != null
                    ? C
                    : 0,
              },
              window_rect: {
                view_bottom:
                  ((v = (S = n.intersectionRect) == null ? void 0 : S.y) != null
                    ? v
                    : 0) +
                  ((R = (L = n.intersectionRect) == null ? void 0 : L.height) !=
                  null
                    ? R
                    : 0),
                view_top:
                  (E = (k = n.intersectionRect) == null ? void 0 : k.y) != null
                    ? E
                    : 0,
              },
            };
          (a[e] || (a[e] = {}),
            i === "TWO_M_FIRST_CHANNEL"
              ? (a[e].firstChannel = x)
              : (a[e].secondChannel = x),
            r("setTimeout")(function () {
              d(e, a, D, l);
            }, 1e3));
        }
      }
    }
    function d(e, t, n, a) {
      if (
        (a === void 0 && (a = "comet_feed"),
        !(e == null || !t || !t[e]) &&
          !(t[e].lastSent != null && t[e].lastSent > Date.now() - 6e4))
      ) {
        var i = p(t[e].firstChannel),
          l = p(t[e].secondChannel),
          s = {
            old_impression_source: a,
            on_unit_enter_view_stamp: l,
            on_unit_exit_view_stamp: {
              scroll_velocity: "0",
              time: "1234567890",
              view_rect: { view_bottom: "0", view_top: "0" },
              viewport_rect: { view_bottom: "0", view_top: "0" },
              window_rect: { view_bottom: "0", view_top: "0" },
            },
            on_unit_impression_view_stamp: i,
            primary_impression_channel: "intersection_observer",
            secondary_impression_channel: "scroll_based",
            session_end_time: "0",
            session_key: o("WebSession").getId(),
            session_start_time: Math.min(
              parseInt(i.time, 10),
              parseInt(l.time, 10),
            ).toString(),
            surface_module: "COMET",
            tracking: n,
          };
        (r("AuditImpressionChannelSessionFalcoEvent").logImmediately(
          function () {
            return s;
          },
        ),
          (t[e].lastSent = Date.now()));
      }
    }
    function m(e, t, n, r) {
      if (r != null) {
        var o = r(),
          a = {
            boundingClientRect: e.boundingClientRect,
            impressedAt: Date.now(),
            intersectionRect: e.intersectionRect,
            invisibleReason: null,
            rootBounds: e.rootBounds,
            status: "ENTER",
            target: e.target,
            visible: !0,
            visiblePercentage: e.intersectionRatio,
          };
        c(t, n, a, o, s, "comet_reels");
      }
    }
    function p(e) {
      return e
        ? {
            scroll_velocity: "0",
            time: e.time.toString(),
            view_rect: {
              view_bottom: Math.round(e.view_rect.view_bottom).toString(),
              view_top: Math.round(e.view_rect.view_top).toString(),
            },
            viewport_rect: {
              view_bottom: Math.round(e.viewport_rect.view_bottom).toString(),
              view_top: Math.round(e.viewport_rect.view_top).toString(),
            },
            window_rect: {
              view_bottom: Math.round(e.window_rect.view_bottom).toString(),
              view_top: Math.round(e.window_rect.view_top).toString(),
            },
          }
        : {
            scroll_velocity: "0",
            time: "0",
            view_rect: { view_bottom: "0", view_top: "0" },
            viewport_rect: { view_bottom: "0", view_top: "0" },
            window_rect: { view_bottom: "0", view_top: "0" },
          };
    }
    ((l.TwoMSecondChannel = e),
      (l.TwoMFirstChannel = s),
      (l.logPostImpressionForReel = u),
      (l.logChannelData = c),
      (l.logReelsFirstChannelImpressionData = m));
  },
  98,
);
