__d(
  "MLCHealthInstrumentationPlugin__INTERNAL.react",
  [
    "Lexical",
    "LexicalComposerContext",
    "LexicalUtils",
    "MLCInstrumentationCommands",
    "MlcHealthBizappEventFalcoEvent",
    "MlcHealthFacebookAndWorkplaceEventFalcoEvent",
    "MlcHealthFacebookEventFalcoEvent",
    "MlcHealthInstagramEventFalcoEvent",
    "MlcHealthInternalToolsEventFalcoEvent",
    "MlcHealthMessagingLightswitchEventFalcoEvent",
    "MlcHealthWorkplaceEventFalcoEvent",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useLayoutEffect,
      u = new Set();
    function c(e) {
      switch (e) {
        case "facebook":
          return r("MlcHealthFacebookEventFalcoEvent");
        case "workplace":
          return r("MlcHealthWorkplaceEventFalcoEvent");
        case "facebook_and_workplace":
          return r("MlcHealthFacebookAndWorkplaceEventFalcoEvent");
        case "internal_tools":
          return r("MlcHealthInternalToolsEventFalcoEvent");
        case "messaging_lightswitch":
          return r("MlcHealthMessagingLightswitchEventFalcoEvent");
        case "bizapp":
          return r("MlcHealthBizappEventFalcoEvent");
        case "instagram":
          return r("MlcHealthInstagramEventFalcoEvent");
        default:
          return null;
      }
    }
    function d(e, t, n) {
      var r;
      (r = c(e)) == null ||
        r.log(function () {
          return { event: n, surface: t };
        });
    }
    function m(e) {
      var t = e.policyProduct,
        n = e.surface,
        r = o("LexicalComposerContext").useLexicalComposerContext(),
        a = r[0];
      return (
        s(
          function () {
            var e = function () {};
            return (
              u.has(n) ||
                (e = a.registerUpdateListener(function (r) {
                  var o = r.dirtyLeaves,
                    i = r.tags;
                  if (u.has(n)) {
                    e();
                    return;
                  }
                  o.size === 0 ||
                    i.has("history-merge") ||
                    !a.isEditable() ||
                    (u.add(n), d(t, n, "daily_interaction_with_surface"), e());
                })),
              o("LexicalUtils").mergeRegister(
                e,
                a.registerCommand(
                  o("MLCInstrumentationCommands").COMMIT_COMMAND,
                  function (e) {
                    return (
                      e === "create"
                        ? d(t, n, "commit_create")
                        : d(t, n, "commit_edit"),
                      !1
                    );
                  },
                  o("Lexical").COMMAND_PRIORITY_CRITICAL,
                ),
              )
            );
          },
          [a, t, n],
        ),
        null
      );
    }
    l.default = m;
  },
  98,
);
