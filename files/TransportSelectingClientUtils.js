__d(
  "TransportSelectingClientUtils",
  [
    "BladeRunnerInstrumentedStreamHandler",
    "DGWEnvUtil",
    "MQTTRequestStreamUtils",
    "TransportSelectingClientCCResolver",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = o("MQTTRequestStreamUtils").convertToBRHandler(e);
      return t.startsWith("FBGQLS") || t.startsWith("SKY")
        ? new (r("BladeRunnerInstrumentedStreamHandler"))(n, t)
        : n;
    }
    function s(e) {
      var t = !1;
      switch (e) {
        case "group1":
          t = r("gkx")("20921");
          break;
        case "group2":
          t = r("gkx")("20922");
          break;
        case "group3":
          t = r("gkx")("20923");
          break;
        case "group4":
          t = r("gkx")("20924");
          break;
        case "group5":
          t = r("gkx")("20925");
          break;
        case "group6":
          t = r("gkx")("20926");
          break;
      }
      return t;
    }
    function u(e) {
      var t = !1;
      switch (e) {
        case "skywalker":
          t = !0;
          break;
        case "skywalker_experiment1":
          t = !0;
          break;
        case "skywalker_experiment2":
          t = !0;
          break;
        case "skywalker_bulletin":
          t = !0;
          break;
      }
      return t;
    }
    function c(e) {
      if (e != null) {
        var t = e.lastIndexOf("/"),
          n = t > 0 ? e.substr(0, t) : e;
        return n;
      }
    }
    async function d(e) {
      var t = c(e);
      if (t != null) {
        var n = await r("TransportSelectingClientCCResolver").getCCGroupName(t);
        return u(n) && r("DGWEnvUtil").isDGWEnvCompatible();
      }
      return !1;
    }
    function m(e, t) {
      var n = c(t);
      return e != null && e === "SKY" && n != null
        ? n
        : e != null
          ? e
          : "unknown";
    }
    ((l.BRHandlerConverter = e),
      (l.isDGWStream = s),
      (l.isDGWAllowedSKYTopic = u),
      (l.getTopicPrefix = c),
      (l.isDGWSupportedSKYTopic = d),
      (l.getMethodContextForCC = m));
  },
  98,
);
