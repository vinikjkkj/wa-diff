__d(
  "MWGetOriginalEntrypoint",
  ["I64", "InteractionTracingMetrics", "MWChatInteraction"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var n,
        a,
        i,
        l,
        s = o("MWChatInteraction").get((e || (e = o("I64"))).to_string(t)),
        u = s != null ? r("InteractionTracingMetrics").get(s) : null,
        c =
          (n =
            u == null || (a = u.annotations.string) == null
              ? void 0
              : a.inboxEntrypoint) != null
            ? n
            : u == null || (i = u.annotations.string) == null
              ? void 0
              : i.entrypoint;
      if (c != null && c !== "unknown") return c;
      var d = o("MWChatInteraction").get("inbox_init");
      if (
        d != null &&
        (e || (e = o("I64"))).equal(t, (e || (e = o("I64"))).of_string(d))
      )
        return "initInbox";
      var m = o("MWChatInteraction").get(
          o("MWChatInteraction").MW_AUTO_CHAT_TAB_OPEN,
        ),
        p =
          m != null
            ? (l = r("InteractionTracingMetrics").get(m)) == null ||
              (l = l.annotations.string) == null
              ? void 0
              : l.thread_id
            : null;
      return p === (e || (e = o("I64"))).to_string(t) ? "auto_open" : "unknown";
    }
    l.default = s;
  },
  98,
);
