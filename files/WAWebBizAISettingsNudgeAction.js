__d(
  "WAWebBizAISettingsNudgeAction",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebBizAISettingsVersionCollection",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdCoreApi",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 1500,
      c = 1,
      d = new Map();
    async function m(e, t, n) {
      var r = o("WAWebSyncdActionUtils").buildPendingMutation({
        collection: o("WAWebSyncdConst").CollectionName.RegularHigh,
        indexArgs: [String(e)],
        value: {
          bizAiSettingsNudgeAction: { category: e, version: t, updatedAtMs: n },
        },
        version: c,
        operation: o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation
          .SET,
        timestamp: n,
        action: o("WAWebSyncdConst").Actions.BizAiSettingsNudge,
      });
      await o("WAWebSyncdCoreApi").lockForSync([], [r], function () {
        return Promise.resolve();
      });
    }
    function p(t) {
      var n = d.get(t);
      n != null && window.clearTimeout(n);
      var r = window.setTimeout(function () {
        d.delete(t);
        var n = o("WATimeUtils").unixTimeMs(),
          r = o(
            "WAWebBizAISettingsVersionCollection",
          ).BizAISettingsVersionCollection.incrementVersion(t, n);
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[BizAI] sending settings nudge: category=",
              " version=",
              "",
            ])),
          String(t),
          r,
        ),
          m(t, r, n).catch(function () {
            o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[BizAI] failed to send settings nudge for category=",
                  "",
                ])),
              String(t),
            );
          }));
      }, u);
      d.set(t, r);
    }
    l.sendSettingsNudge = p;
  },
  98,
);
