__d(
  "WAWebBizAISettingsNudgeAction",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebBizAISettingsVersionCollection",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdCoreApi",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = 1500,
      d = 1,
      m = new Map();
    function p(e, t, n) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          var a = o("WAWebSyncdActionUtils").buildPendingMutation({
            collection: o("WAWebSyncdConst").CollectionName.RegularHigh,
            indexArgs: [String(e)],
            value: {
              bizAiSettingsNudgeAction: {
                category: e,
                version: t,
                updatedAtMs: r,
              },
            },
            version: d,
            operation: o("WAWebProtobufsServerSync.pb")
              .SyncdMutation$SyncdOperation.SET,
            timestamp: r,
            action: o("WAWebSyncdConst").Actions.BizAiSettingsNudge,
          });
          yield o("WAWebSyncdCoreApi").lockForSync([], [a], function () {
            return (u || (u = n("Promise"))).resolve();
          });
        })),
        _.apply(this, arguments)
      );
    }
    function f(t) {
      var n = m.get(t);
      n != null && window.clearTimeout(n);
      var r = window.setTimeout(function () {
        m.delete(t);
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
          p(t, r, n).catch(function () {
            o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[BizAI] failed to send settings nudge for category=",
                  "",
                ])),
              String(t),
            );
          }));
      }, c);
      m.set(t, r);
    }
    l.sendSettingsNudge = f;
  },
  98,
);
