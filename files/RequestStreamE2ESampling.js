__d(
  "RequestStreamE2ESampling",
  ["invariant", "uuidv4"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      return e == null
        ? !1
        : e.requestId != null &&
            typeof e.requestId == "string" &&
            e.forceLogContext != null &&
            typeof e.forceLogContext == "string";
    }
    function u(e, t, n) {
      var r = e.sampleRate;
      if (r > 1 && t != null) {
        var o = e.methodToSamplingMultiplier[t];
        o == 0 ? (r = 0) : o != null && (r /= o);
      }
      return r == 1 ? 1 : r / n;
    }
    function c(e, t, n, o) {
      var a = r("uuidv4")();
      ((t.requestId == null ||
        t.requestId === "" ||
        typeof t.requestId != "string") &&
        (e.requestId != null && typeof e.requestId == "string"
          ? (t.requestId = e.requestId)
          : (t.requestId = a)),
        (t.requestId += "/_" + a.substring(0, 4)),
        (t.resumeId = "0"),
        n != null ? (t.sampleRate = n) : (t.sampleRate = void 0));
      var i = "";
      (o != null && o.length > 0 && (i = o),
        i.length > 0 &&
          (t.requestLogContext != null && t.requestLogContext.length > 0
            ? (t.requestLogContext += ":")
            : (t.requestLogContext = ""),
          (t.requestLogContext += i)),
        (e == null ? void 0 : e.method) === "Falco" &&
          (t.clientLoggingDisabled = "Falco"));
      var l = {};
      for (var s of Object.keys(t).sort()) l[s] = t[s];
      return JSON.stringify(l);
    }
    function d(t, n, r, o, a) {
      r &&
        ((!r.requestId.includes("/") && !r.requestId.includes("#")) ||
          s(0, 41721));
      var i = u(t, n.method, a != null ? a : 1);
      return i !== 0 && Math.random() * i < 1
        ? c(n, r || { requestId: "" }, i, o)
        : e(r)
          ? c(n, r || { requestId: "" }, null, o)
          : "";
    }
    ((l.isForceLogged = e),
      (l.getSampleRateForLogging = u),
      (l.normalizeInstrumentationData = c),
      (l.validateInstrumentationData = d));
  },
  98,
);
