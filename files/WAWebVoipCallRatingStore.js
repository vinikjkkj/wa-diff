__d(
  "WAWebVoipCallRatingStore",
  [
    "WALogger",
    "WAMd5",
    "WAWebCoreActionsODS",
    "WAWebLocalStorage",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = null,
      u = "wa_voip_fieldstats_handoff_dedup_v1";
    function c(t) {
      (o("WAWebCoreActionsODS").logCallFieldstatsDedupMarkerFailed(),
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [Fieldstats] persisted handoff marker unavailable",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("voip-fieldstats-dedup-marker-failed", {
            employeeSampling: 1,
            sampling: 0.01,
            sendLogsType: o("WALogger").SendLogsType.INVESTIGATION,
          }));
    }
    function d(e) {
      try {
        var t,
          n,
          r,
          a = JSON.parse(e),
          i =
            (t =
              (n = a.call_ended_stats) == null ? void 0 : n.call_random_id) !=
            null
              ? t
              : (r = a.joinable_call_stats) == null
                ? void 0
                : r.call_random_id;
        if (typeof i == "string" && i !== "")
          return o("WAMd5").md5("call:" + i);
      } catch (e) {}
      return o("WAMd5").md5("payload:" + e);
    }
    function m(e) {
      var t = { jsonDataStr: e };
      return ((s = t), t);
    }
    function p() {
      return s;
    }
    function _(e) {
      s === e && (s = null);
    }
    function f(e) {
      try {
        if (r("WAWebLocalStorage") == null)
          throw r("err")("localStorage unavailable");
        r("WAWebLocalStorage").setItem(u, d(e));
      } catch (e) {
        c(e);
      }
    }
    function g(e) {
      try {
        if (r("WAWebLocalStorage") == null)
          throw r("err")("localStorage unavailable");
        return r("WAWebLocalStorage").getItem(u) === d(e);
      } catch (e) {
        return (c(e), !1);
      }
    }
    ((l.setPendingFieldstatsJsonStr = m),
      (l.getPendingFieldstats = p),
      (l.clearPendingFieldstats = _),
      (l.markPersistedFieldstatsHandedOff = f),
      (l.werePersistedFieldstatsHandedOff = g));
  },
  98,
);
