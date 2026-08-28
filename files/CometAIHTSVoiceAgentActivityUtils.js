__d(
  "CometAIHTSVoiceAgentActivityUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new TextDecoder("utf-8", { fatal: !1 });
    function l(e) {
      return e === "COMPLETED" || e === "FAILED";
    }
    function s(e) {
      try {
        var t = JSON.parse(e);
        return t != null && typeof t == "object" && !Array.isArray(t)
          ? t
          : null;
      } catch (e) {
        return null;
      }
    }
    function u(e, t) {
      for (var n = t, r = 0, o = 0; n < e.length; ) {
        var a = e[n++];
        if (r > 63) return null;
        if (((o += (a % 128) * Math.pow(2, r)), a < 128))
          return { offset: n, value: o };
        r += 7;
      }
      return null;
    }
    function c(t) {
      return e.decode(new Uint8Array(t));
    }
    function d(e) {
      if (typeof e == "string") return e;
      if (e != null && typeof e == "object" && !Array.isArray(e))
        try {
          return JSON.stringify(e);
        } catch (e) {
          return "";
        }
      return String(e != null ? e : "");
    }
    function m(e) {
      for (var t = [], n = 0; n < e.length; n++) {
        var r = e.charCodeAt(n);
        if (r > 255) return null;
        t.push(r);
      }
      if (t.length === 0) return null;
      var o = 0,
        a = t[o++];
      if (a === 0) return null;
      var i = a % 16,
        l = Math.floor(a / 16);
      if (l !== 1 || i !== 8) return null;
      var s = u(t, o);
      return s == null || ((o = s.offset), o + s.value > t.length)
        ? null
        : c(t.slice(o, o + s.value));
    }
    function p(e, t) {
      return e === "" ||
        t === "" ||
        /\s$/.test(e) ||
        /^\s|^[.,!?;:)\]}]/.test(t)
        ? e + t
        : e + " " + t;
    }
    var _ = 0;
    function f(e) {
      var t,
        n,
        r =
          (t = (n = e.responseId) != null ? n : e.requestId) != null
            ? t
            : "fallback_" + String(++_);
      return "voice_agent_activity_" + r.replace(/[^A-Za-z0-9_-]/g, "_");
    }
    function g(e) {
      return e;
    }
    function h(e) {
      var t = e.trim().match(/^```(?:a2ui|json)?[ \t]*\n([\s\S]*?)\n?```$/),
        n = t != null ? t[1].trim() : e,
        r = s(n);
      return r == null || typeof r.type != "string"
        ? null
        : "```a2ui\n" + JSON.stringify(r, null, 2) + "\n```";
    }
    function y(e, t) {
      var n = t.content;
      return e == null ||
        e === "" ||
        n.startsWith(e) ||
        (l(t.status) && t.responseId != null && !/```(?:a2ui|json)/.test(n))
        ? n
        : p(e, n);
    }
    function C(e) {
      try {
        var t,
          n = e.message.trim().startsWith("{") ? e.message : m(e.message);
        if (n == null || n === "") return null;
        var r = JSON.parse(n);
        if (r == null || typeof r != "object") return null;
        var o = r,
          a = [];
        if (Array.isArray(o.standardized_response))
          for (var i of o.standardized_response)
            i != null &&
              typeof i == "object" &&
              !Array.isArray(i) &&
              typeof i.payload == "string" &&
              typeof i.type == "number" &&
              a.push({ payload: i.payload, type: i.type });
        return {
          content: d(o.content),
          requestId: typeof o.request_id == "string" ? o.request_id : null,
          responseId:
            typeof o.response_id == "string"
              ? o.response_id
              : typeof o.activity_id == "string"
                ? o.activity_id
                : null,
          standardizedResponse: a,
          status: typeof o.status == "string" ? o.status : null,
          timestampMs: typeof o.timestamp_ms == "number" ? o.timestamp_ms : 0,
          type: String((t = o.type) != null ? t : "unknown"),
        };
      } catch (e) {
        return null;
      }
    }
    ((i.getAgentActivityMessageID = f),
      (i.getTextWithoutA2UIContent = g),
      (i.getPinnableAgentActivityA2UIOnlyText = h),
      (i.mergeAgentActivityA2UIContent = y),
      (i.parseAgentActivityDataMessage = C));
  },
  66,
);
