__d(
  "MWLogSendToSentFailedError",
  ["FBLogger", "QuickPerformanceLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n, o, a, i) {
      var l,
        s,
        u,
        c,
        d,
        m,
        p,
        _,
        f,
        g = t.qplEventType,
        h = t.qplInstanceKey,
        y = (e || (e = r("QuickPerformanceLogger"))).getMarker(g, h),
        C =
          y == null || (l = y.annotations) == null || (l = l.bool) == null
            ? void 0
            : l.is_secure;
      r("FBLogger")("messenger_web_messaging", "send_to_sent_failed")
        .blameToPreviousFrame()
        .blameToPreviousFrame()
        .warn(
          "send_to_sent failed with reason: %s. Caught error message: %s. Additional description: %s. Secure? %s. Error Code: %s. Application Error: %s. Error Name: %s.",
          n,
          (s = o == null ? void 0 : o.message) != null ? s : "",
          (u =
            (c =
              y == null || (d = y.annotations) == null || (d = d.string) == null
                ? void 0
                : d.error_description) != null
              ? c
              : y == null ||
                  (m = y.annotations) == null ||
                  (m = m.string) == null
                ? void 0
                : m.errorType) != null
            ? u
            : "",
          C === !0 ? "secure" : C === !1 ? "open" : "unknown",
          (p = a == null ? void 0 : a.toString()) != null ? p : "",
          (_ = i == null ? void 0 : i.toString()) != null ? _ : "",
          (f = o == null ? void 0 : o.name) != null ? f : "",
        );
    }
    l.default = s;
  },
  98,
);
