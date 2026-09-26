__d(
  "dispatchOpenChatTabTraceLogging",
  ["FBLogger", "I64", "LSIntEnum", "MWChatInteraction", "isOfflineThreadingId"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(t, n, r) {
      return (
        ((e || (e = o("I64"))).equal(
          n,
          (s || (s = o("LSIntEnum"))).ofNumber(15),
        ) ||
          (e || (e = o("I64"))).equal(
            n,
            (s || (s = o("LSIntEnum"))).ofNumber(16),
          )) &&
        r != null &&
        (e || (e = o("I64"))).equal(t, r)
      );
    }
    function c(t, n, a) {
      if (t != null) {
        var i = (e || (e = o("I64"))).to_string(n.threadKey);
        (t.addMarkerPoint("dispatch_open_chat_tab", "AppTiming"),
          t.addAnnotation("dispatch_entrypoint", a),
          t.addAnnotation("thread_key_descriptor", i),
          r("isOfflineThreadingId")((e || (e = o("I64"))).of_string(i)) &&
            !u(n.threadKey, n.threadType, n.clientThreadKey) &&
            t.addAnnotationBoolean(
              "is_thread_key_descriptor_authoritative_otid",
              r("isOfflineThreadingId")((e || (e = o("I64"))).of_string(i)),
            ),
          o("MWChatInteraction").getInteractionTraceForThreadKey(i) == null &&
            (t.addAnnotationBoolean("is_trace_mapping_missing", !0),
            r("FBLogger")("messenger_cto_trace").warn(
              "Trace mapping is missing",
            )));
      }
    }
    l.default = c;
  },
  98,
);
