__d(
  "applyMAIBAFormStateToClientContext",
  [
    "FBLogger",
    "JSResourceForInteraction",
    "LWIMAIBACopilotGating",
    "LWIMAIBAFormPresence",
    "MAIBASendMessageV3Enabled",
    "MAIBASendMessageV4Enabled",
    "getErrorSafe",
    "gkx",
    "isMAIBALWIFormDirectApplyEnabled",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("JSResourceForInteraction")("LWIFormSyncState").__setRef(
      "applyMAIBAFormStateToClientContext",
    );
    function s(e) {
      return (
        e.conversationID != null &&
        e.conversationID !== "" &&
        !e.isPregeneration &&
        !e.isShadow &&
        !e.isSilent &&
        e.postbackPayload !== "lwi_form_sync" &&
        !(
          e.transport === "legacy" &&
          (o("MAIBASendMessageV4Enabled").MAIBASendMessageV4Enabled() ||
            o("MAIBASendMessageV3Enabled").MAIBASendMessageV3Enabled())
        ) &&
        !(e.transport === "platform" && r("gkx")("11626"))
      );
    }
    function u(t, n) {
      try {
        var a = n.conversationID,
          i = n.typedMessage,
          l = o("LWIMAIBAFormPresence").isLWIMAIBAFormPresent() && s(n),
          u = o("LWIMAIBACopilotGating").isCopilotEntryEnabled()
            ? e.getModuleIfRequireable()
            : null;
        if (
          (u != null &&
            a != null &&
            !n.isPregeneration &&
            !n.isShadow &&
            !n.isSilent &&
            n.postbackPayload !== "lwi_form_sync" &&
            u.clearLWITypedAmounts(a),
          u == null || a == null || !l)
        )
          return t;
        var c = u.getLWIFormStateJSONForSend(
            a,
            new Date().toISOString(),
            n.transport,
          ),
          d = babelHelpers.extends({}, t.context, { form_state_json: c });
        return (
          c != null &&
            i != null &&
            r("isMAIBALWIFormDirectApplyEnabled")() &&
            u.recordLWITypedAmounts(a, i.text, i.replyOTID, Date.now()),
          c == null ? t : babelHelpers.extends({}, t, { context: d })
        );
      } catch (e) {
        return (
          r("FBLogger")("maiba_lwi_form_sync").mustfix(
            "Reading the form state threw %s",
            r("getErrorSafe")(e).name,
          ),
          t
        );
      }
    }
    l.default = u;
  },
  98,
);
