__d(
  "WAWebDetectedOutcomeNotificationSignalAction",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebChatCollection",
    "WAWebSmb3pdConversionSignalAction",
    "WAWebWidFactory",
    "WAWebWidValidator",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 3e5,
      u = 32,
      c = 64,
      d = 64,
      m = 4 * 1024,
      p = 8 * 1024,
      _ = 256,
      f = 0.01,
      g = /^[A-Za-z0-9][A-Za-z0-9_.-]{0,63}$/,
      h =
        /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    function y(e, t) {
      var n = C(t);
      if (!n.ok) {
        S(n.reason);
        return;
      }
      var r = n.payload;
      if (r.detectedAtMs - o("WATimeUtils").unixTimeMs() > s) {
        S("future_timestamp");
        return;
      }
      if (!o("WAWebWidValidator").validateWid(e)) {
        S("invalid_payload");
        return;
      }
      if (e.endsWith("@lid")) {
        var a = o("WAWebWidFactory").createWid(e);
        if (a.isLid()) {
          var i = o("WAWebChatCollection").ChatCollection.getChatByAccountLid(
            a,
          );
          if (
            i != null &&
            o("WAWebABProps").getABPropConfigValue("ctwa_ae_signal_3pd_enabled")
          ) {
            var l = v(r.detectedOutcomeType);
            if (!l.ok) {
              S(l.reason);
              return;
            }
            var u = l.allowedFields,
              c = C(t, u);
            if (!c.ok) {
              S(c.reason);
              return;
            }
            var d = c.payload;
            o("WAWebSmb3pdConversionSignalAction").log3pdConversionSignal(
              {
                chat: i,
                paidData: {},
                schemaVersion: 3,
                signalMetadata: JSON.stringify({
                  eventId: d.eventId,
                  detectedAtMs: d.detectedAtMs,
                  attributes: d.attributes,
                }),
                subType: d.detectedOutcomeType,
                surface: "ae_signal",
                type: "detected_outcome",
              },
              !0,
            );
          }
        }
      }
    }
    function C(e, t) {
      if (!I(e, m)) return { ok: !1, reason: "invalid_payload" };
      var n;
      try {
        n = JSON.parse(e);
      } catch (e) {
        return { ok: !1, reason: "invalid_payload" };
      }
      if (!R(n)) return { ok: !1, reason: "invalid_payload" };
      var r = n,
        o = r.attributes,
        a = r.detectedAtMs,
        i = r.detectedOutcomeType,
        l = r.eventId;
      if (
        !R(o) ||
        typeof a != "number" ||
        !Number.isSafeInteger(a) ||
        a <= 0 ||
        !k(i) ||
        typeof l != "string" ||
        !h.test(l)
      )
        return { ok: !1, reason: "invalid_payload" };
      var s = Object.keys(o);
      if (s.length > u) return { ok: !1, reason: "invalid_payload" };
      var c = b(o, t);
      return c == null
        ? { ok: !1, reason: "invalid_payload" }
        : {
            ok: !0,
            payload: {
              attributes: c,
              detectedAtMs: a,
              detectedOutcomeType: i,
              eventId: l,
            },
          };
    }
    function b(e, t) {
      var n = {};
      for (var r of Object.keys(e))
        if (!(t != null && !t.has(r))) {
          var o = e[r];
          if (!E(r) || !L(o)) {
            if (t == null) continue;
            return null;
          }
          n[r] = o;
        }
      return n;
    }
    function v(e) {
      var t = o("WAWebABProps").getABPropConfigValue(
        "ctwa_ae_signal_3pd_field_policy",
      );
      if (!I(t, p)) return { ok: !1, reason: "invalid_field_policy" };
      var n;
      try {
        n = JSON.parse(t);
      } catch (e) {
        return { ok: !1, reason: "invalid_field_policy" };
      }
      if (!R(n)) return { ok: !1, reason: "invalid_field_policy" };
      var r = n[e];
      if (!R(r) || r.enabled !== !0)
        return { ok: !1, reason: "invalid_field_policy" };
      var a = r.allowedFields;
      if (!Array.isArray(a) || a.length > u)
        return { ok: !1, reason: "invalid_field_policy" };
      var i = new Set();
      for (var l of a) {
        if (typeof l != "string" || !E(l))
          return { ok: !1, reason: "invalid_field_policy" };
        i.add(l);
      }
      return { ok: !0, allowedFields: i };
    }
    function S(t) {
      o("WALogger")
        .WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[ctwa] detected-outcome notification rejected: ",
              "",
            ])),
          t,
        )
        .tags("non-sad")
        .sendLogs("ctwa-ae-signal-rejected", { sampling: f });
    }
    function R(e) {
      return e != null && typeof e == "object" && !Array.isArray(e);
    }
    function L(e) {
      return typeof e == "boolean"
        ? !0
        : typeof e == "number"
          ? Number.isFinite(e)
          : typeof e == "string" &&
            !e.includes("\0") &&
            new TextEncoder().encode(e).byteLength <= _;
    }
    function E(e) {
      return e.length <= d && g.test(e);
    }
    function k(e) {
      return typeof e == "string" && e.trim().length > 0 && I(e, c);
    }
    function I(e, t) {
      return (
        e.length > 0 &&
        !e.includes("\0") &&
        new TextEncoder().encode(e).byteLength <= t
      );
    }
    l.emitDetectedOutcomeNotificationSignal = y;
  },
  98,
);
