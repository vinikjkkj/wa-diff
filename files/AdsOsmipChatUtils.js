__d(
  "AdsOsmipChatUtils",
  [
    "AdsAIConsts",
    "FBLogger",
    "MAIBAObservabilityUtils",
    "QPLEvent",
    "QPLUserFlow",
    "QuickPerformanceLogger",
    "Random",
    "getErrorSafe",
    "performanceAbsoluteNow",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = r("qpl")._(146867930, "2069"),
      d = r("qpl")._(146878553, "2660");
    function m(e, t) {
      return t != null && t.length > 1
        ? t
        : e != null
          ? [{ source: e }]
          : t != null && t.length === 1
            ? t
            : null;
    }
    function p(e, t, n, o, a) {
      if ((a === void 0 && (a = !1), !!t)) {
        var i = !1;
        if (!a) {
          var l = (s || (s = r("QuickPerformanceLogger"))).activeMarkers.get(
            146867930,
          );
          l != null &&
            (i =
              Array.from(l).filter(function (e) {
                var t,
                  n,
                  a = e[0],
                  i = e[1];
                return (
                  ((t = (n = i.annotations) == null ? void 0 : n.string) != null
                    ? t
                    : {}
                  ).thread_id === o &&
                  i.timestamp - (u || (u = r("performanceAbsoluteNow")))() < 6e4
                );
              }).length !== 0);
        }
        return _(e, i, n, a);
      }
    }
    function _(e, t, n, a) {
      (a === void 0 && (a = !1), crypto.randomUUID());
      var i = Math.floor(r("Random").random() * 1e6);
      return (
        r("QPLUserFlow").start(c, {
          instanceKey: i,
          timeoutInMs: o("AdsAIConsts").TIMEOUT_ADS_AI_CONVERSATION,
          annotations: {
            string: { message_type: e },
            bool: {
              passLightSpeedGKCheck: !1,
              sentOptimisitcally: a,
              passClientContextLatencyImprovementGK: !0,
              sentConcurrently: t,
              passMaibaEntObserverGK: !1,
            },
          },
        }),
        r("QPLUserFlow").start(d, {
          instanceKey: i,
          timeoutInMs: o("AdsAIConsts").TIMEOUT_ADS_AI_TIME_TO_FIRST_TOKEN,
          annotations: {
            string: {
              message_type: e,
              message_source: n ? "out_of_chat" : "chat",
            },
            bool: {
              granularAssetsOptimization: !0,
              sentOptimisitcally: a,
              passClientContextLatencyImprovementGK: !0,
              sentConcurrently: t,
              passMaibaEntObserverGK: !1,
            },
          },
        }),
        i
      );
    }
    function f(e) {
      if (e != null) return parseInt(e.slice(-16), 10);
    }
    function g(t) {
      var n,
        a = [
          c,
          d,
          (n = r("qpl"))._(146869781, "2105"),
          n._(146882303, "1946"),
          n._(146868606, "2092"),
          n._(146881675, "2073"),
        ];
      try {
        a.forEach(function (t) {
          var n,
            a = (e || (e = o("QPLEvent"))).getMarkerId(t),
            i = (s || (s = r("QuickPerformanceLogger"))).activeMarkers.get(a);
          i != null &&
            ((n = Array.from(i)) == null ||
              n.forEach(function (e) {
                var n = e[0],
                  o = e[1];
                return r("QPLUserFlow").endCancel(t, { instanceKey: n });
              }));
        });
      } catch (e) {
        var i = r("getErrorSafe")(e);
        r("FBLogger")("ht_advertiser_ai").mustfix(
          "Error cancelling active markers for thread (thread_id: %s)",
          t,
          i.toString(),
        );
      }
    }
    function h(t) {
      var n = [
        r("qpl")._(146879377, "2222"),
        r("qpl")._(146869224, "330"),
        r("qpl")._(146881465, "2263"),
      ];
      try {
        n.forEach(function (n) {
          var a,
            i = (e || (e = o("QPLEvent"))).getMarkerId(n),
            l = (s || (s = r("QuickPerformanceLogger"))).activeMarkers.get(i);
          l != null &&
            ((a = Array.from(l)) == null ||
              a.forEach(function (e) {
                var o = e[0],
                  a = e[1];
                o === t && r("QPLUserFlow").endCancel(n, { instanceKey: o });
              }));
        });
      } catch (e) {
        var a = r("getErrorSafe")(e);
        r("FBLogger")("ht_advertiser_ai").mustfix(
          "Error cancelling chat button events for thread (threadGenerationID: %d)",
          t,
          a.toString(),
        );
      }
    }
    function y() {
      var e = b();
      if (e == null) return null;
      var t = Array.from(
        e.entries().map(function (e) {
          var t = e[0],
            n = e[1];
          return t;
        }),
      );
      return (t == null ? void 0 : t.length) === 1 ? t[0] : null;
    }
    function C() {
      var e = b();
      if (e == null) return null;
      var t = Array.from(e)
        .filter(function (e) {
          var t,
            n = e[0],
            r = e[1];
          return (
            ((t = r.annotations) == null || (t = t.string) == null
              ? void 0
              : t.interaction_id) != null
          );
        })
        .map(function (e) {
          var t,
            n = e[0],
            r = e[1];
          return (t = r.annotations) == null || (t = t.string) == null
            ? void 0
            : t.interaction_id;
        });
      return (t == null ? void 0 : t.length) === 1 ? t[0] : null;
    }
    function b() {
      var e = (s || (s = r("QuickPerformanceLogger"))).activeMarkers,
        t = o("MAIBAObservabilityUtils").getMAIBASendMessageQPLMarkerId(),
        n = e.get(t);
      return n;
    }
    ((l.getThreadViewImages = m),
      (l.trackMAIBAResponse = p),
      (l.generateInstanceIDFromI64 = f),
      (l.cancelAllActiveMessageEvents = g),
      (l.cancelAllActiveChatLoadEvents = h),
      (l.getActiveHeroTracingMessageResponseEventInstanceKey = y),
      (l.getActiveHeroTracingMessageResponseEventInteractionID = C));
  },
  98,
);
