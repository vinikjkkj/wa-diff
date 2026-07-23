__d(
  "MWChatInteraction",
  ["FBLogger", "InteractionTracing.xplat", "InteractionTracingMetrics"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {},
      s = "mw_auto_chat_tab_open",
      u = "mw_chatheads_load";
    function c(t, n) {
      var o, a;
      (o = p(t)) == null ||
        o.addMarkerPoint(
          "MWChatInteraction_associating_key_with_value",
          "AppTiming",
        );
      var i = p(t);
      (i != null &&
        i.getTraceId() !== n &&
        (r("FBLogger")("messenger_web").warn(
          "Existing key %s unexpectedly changing value from %s to %s",
          t,
          i.getTraceId(),
          n,
        ),
        i.addMarkerPoint(
          "MWChatInteraction_value_changed_for_the_existing_key",
          "AppTiming",
        )),
        (e[t] = n),
        (a = p(t)) == null ||
          a.addMarkerPoint(
            "MWChatInteraction_associated_key_with_value",
            "AppTiming",
          ));
    }
    function d(t) {
      var n = e[t];
      if (n != null) {
        var r;
        (r = p(t)) == null ||
          r.addMarkerPoint("MWChatInteraction_got_value_by_key", "AppTiming");
      }
      return n;
    }
    function m(t) {
      delete e[t];
    }
    function p(t) {
      if (t == null) return null;
      var n = e[t];
      if (n == null) return null;
      var o = Array.from(
        r("InteractionTracing.xplat").getPendingInteractions().values(),
      );
      return o.find(function (e) {
        return e.getTraceId() === n;
      });
    }
    var _ = function (t) {
        return t + "-s2s";
      },
      f = function (t, n) {
        t != null &&
          r("InteractionTracingMetrics").addMarkerPoint(t, n, "AppTiming");
      },
      g = function (t) {
        var e = d(s);
        f(e, t);
      };
    ((l.interactions = e),
      (l.MW_AUTO_CHAT_TAB_OPEN = s),
      (l.MW_CHATHEADS_LOAD = u),
      (l.set = c),
      (l.get = d),
      (l.remove = m),
      (l.getInteractionTraceForThreadKey = p),
      (l.s2sKey = _),
      (l.addMarkerPoint = f),
      (l.addAutoChatTabMarkerPoint = g));
  },
  98,
);
