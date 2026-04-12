__d(
  "useWAWebBizBroadcastDraftMessage",
  [
    "WATimeUtils",
    "WAWebChatGetters",
    "react",
    "useWAWebChatValues",
    "useWAWebDebouncedCallback",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useState;
    function d(e, t) {
      var n,
        r = e == null ? void 0 : e.getComposeContents();
      (r == null && t.trim() === "") ||
        ((r == null || (n = r.text) == null ? void 0 : n.trim()) !== t.trim() &&
          (e == null ||
            e.setComposeContents({
              text: t,
              timestamp: o("WATimeUtils").unixTime(),
            })));
    }
    function m(e) {
      var t,
        n,
        a = e.values().next().value,
        i =
          (t = o("useWAWebChatValues").useOptionalChatValues(
            a == null ? void 0 : a.id,
            [o("WAWebChatGetters").getDraftMessage],
          )) != null
            ? t
            : [],
        l = i[0],
        s = c((n = l == null ? void 0 : l.text) != null ? n : ""),
        m = s[0],
        p = s[1],
        _ = r("useWAWebDebouncedCallback")(d, 200),
        f = u(
          function (t) {
            (p(t), e.size === 1 && _(a, t));
          },
          [e.size, _, a],
        ),
        g = u(
          function () {
            a == null ||
              a.setComposeContents({
                text: "",
                timestamp: o("WATimeUtils").unixTime(),
              });
          },
          [a],
        );
      return { clearDraftMessage: g, message: m, onMessageChange: f };
    }
    l.default = m;
  },
  98,
);
