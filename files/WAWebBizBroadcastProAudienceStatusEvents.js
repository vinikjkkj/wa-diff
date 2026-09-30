__d(
  "WAWebBizBroadcastProAudienceStatusEvents",
  ["WALogger", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Map(),
      u = new Set();
    function c(t) {
      var n = s.get(t.audienceId);
      if (n == null || n.size === 0) {
        u.add(t.audienceId);
        return;
      }
      for (var a of Array.from(n))
        try {
          a();
        } catch (t) {
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "BB Pro audience status edit listener failed",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("bb-pro-audience-status-edit-listener-failed");
        }
    }
    function d(e, t) {
      var n = s.get(e);
      n == null && ((n = new Set()), s.set(e, n));
      var r = n;
      return (
        r.add(t),
        u.delete(e) && t(),
        function () {
          s.get(e) === r && (r.delete(t), r.size === 0 && s.delete(e));
        }
      );
    }
    ((l.notifyProAudienceRecipientEdited = c),
      (l.subscribeProAudienceRecipientEdits = d));
  },
  98,
);
