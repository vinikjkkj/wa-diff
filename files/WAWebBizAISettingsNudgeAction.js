__d(
  "WAWebBizAISettingsNudgeAction",
  [
    "WALogger",
    "WASyncdConst",
    "WATimeUtils",
    "WAWebBizAISettingsVersionCollection",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdActionUtils",
    "WAWebSyncdCoreApi",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 1500,
      c = 1,
      d = new Map();
    async function m(e, t) {
      var n = o("WATimeUtils").unixTimeMs(),
        r = o("WAWebSyncdActionUtils").buildPendingMutation({
          collection: o("WASyncdConst").CollectionName.RegularHigh,
          indexArgs: [String(e)],
          value: {
            bizAiSettingsNudgeAction: {
              category: e,
              version: t,
              updatedAtMs: n,
            },
          },
          version: c,
          operation: o("WAWebProtobufsServerSync.pb")
            .SyncdMutation$SyncdOperation.SET,
          timestamp: n,
          action: o("WASyncdConst").Actions.BizAiSettingsNudge,
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
        var n = o(
          "WAWebBizAISettingsVersionCollection",
        ).BizAISettingsVersionCollection.incrementVersion(t);
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[BizAI] sending settings nudge: category=",
              " version=",
              "",
            ])),
          String(t),
          n,
        ),
          m(t, n).catch(function () {
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
