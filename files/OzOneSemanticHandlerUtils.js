__d(
  "OzOneSemanticHandlerUtils",
  ["ConstUriUtils", "FBLogger", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      (t != null && t.indexOf("+RE") >= 0 && e.retry(), n != null && n());
    }
    function s(t, n) {
      var o = n.error,
        a = o.getExtra(),
        i = a.code,
        l = a.headers,
        s = null;
      if (
        (i == null &&
          r("FBLogger")("comet_video_player").mustfix(
            "A ONE Semantic error response must have an error code.",
          ),
        l == null &&
          r("FBLogger")("comet_video_player").mustfix(
            "A ONE Semantic error response must contain response Headers.",
          ),
        l != null)
      ) {
        var u = l.get("x-fb-one-variant");
        s = u != null ? u : null;
      }
      var c = JSON.parse(t.getString("network_retry_intervals_json", "{}")),
        d = c[i];
      switch (i) {
        case "410":
          n.endStream();
          break;
        case "404":
          e(n, s, function () {
            n.retry({ behavior: "recover_failed_request" });
          });
          break;
        case "429":
          n.retry(d);
          break;
        case "403":
        default:
      }
    }
    function u(e) {
      if (e != null) {
        var t = parseInt(e, 10);
        return !isNaN(t) && t > 0 && t <= 3;
      }
      return !1;
    }
    function c(e, t) {
      if (e != null && t != null) {
        var n = parseInt(e, 10),
          r = parseInt(t, 10);
        return !isNaN(n) && !isNaN(r) && n > 0 && n <= r;
      }
      return !1;
    }
    function d(e) {
      if (e != null) {
        var t = o("ConstUriUtils").getUri(e);
        if (t) {
          var n = t.getQueryParam("os_param");
          return n ? String(n).toString() : null;
        }
      }
      return null;
    }
    function m(e, t) {
      var n = e != null;
      return u(t) || ((n || !!r("qex")._("1636")) && c(t, e));
    }
    function p(e) {
      var t = e.getExtra(),
        n = t.headers,
        o = _(n),
        a = e.getExtra(),
        i = a.code,
        l = a.url;
      if (o != null && i == null)
        return (
          r("FBLogger")("comet_video_player").mustfix(
            "A ONE Semantic error response must have an error code.",
          ),
          !1
        );
      var s = d(l);
      return m(s, o);
    }
    function _(e) {
      if (e) {
        var t = e.get("x-fb-one");
        if (t != null) return parseInt(t, 10) > 0 ? t : null;
      }
      return null;
    }
    function f(e, t, n) {
      var r = null,
        o = null;
      t != null && ((r = d(t)), r != null && e.setOneReqWave(parseInt(r, 10)));
      var a = n == null ? void 0 : n.headers;
      (a && ((o = _(a)), o != null && e.setOneResWave(parseInt(o, 10))),
        e.setOneObserved(m(r, o)));
    }
    ((l.maybeRetryForVariant = e),
      (l.evaluateOneSemanticsResponse = s),
      (l.isOneSemanticsForcedForResponseWave = u),
      (l.isOneSemanticsEnabledForWave = c),
      (l.getOneSemanticRequestWave = d),
      (l.shouldRespondWithOneSemantics = p),
      (l.getOneSemanticResponseWave = _),
      (l.setOneSemanticFetchStreamLoggingAttributes = f));
  },
  98,
);
