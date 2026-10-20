__d(
  "WAWebLeadSublistBridgeApi",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebCustomerProfileChangeNotifier",
    "WAWebLeadSublistChangeNotifier",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = {
        syncLeadSublist: function () {
          o("WAWebLeadSublistChangeNotifier").notifyLeadSublistChanged();
        },
        removeLeadSublistFromCollection: function () {
          o("WAWebLeadSublistChangeNotifier").notifyLeadSublistChanged();
        },
        leadRemovedFromChat: function (n) {
          var t = n.chatJid;
          return r("JSResourceForInteraction")("WAWebSyncLeadStageToProfile")
            .__setRef("WAWebLeadSublistBridgeApi")
            .load()
            .then(function (e) {
              var n = e.clearLeadStageOnProfile,
                r = e.getLeadProfileChatJidForChatJid,
                o = r(t);
              o != null && n(o);
            })
            .catch(function (t) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[customer_manager] lead removal: loading the stage writer failed",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("lead-removed-clear-stage-load-failed");
            });
        },
        serverLeadStageApplied: function (t) {
          var e = t.profileChatJid;
          (o("WAWebLeadSublistChangeNotifier").notifyLeadSublistChanged(),
            o(
              "WAWebCustomerProfileChangeNotifier",
            ).notifyCustomerProfileChanged(
              o("WAWebWidToJid").widToChatJid(
                o("WAWebWidFactory").createWid(e),
              ),
            ));
        },
        startServerLeadStageRepull: function () {
          return r("JSResourceForInteraction")("WAWebServerLeadStageRepull")
            .__setRef("WAWebLeadSublistBridgeApi")
            .load()
            .then(function (e) {
              var t = e.startServerLeadStageRepull;
              return t();
            })
            .catch(function (e) {
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[customer_manager] loading the lead stage re-pull failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("lead-stage-repull-load-failed");
            });
        },
        repullServerLeadStages: function () {
          return r("JSResourceForInteraction")("WAWebServerLeadStageRepull")
            .__setRef("WAWebLeadSublistBridgeApi")
            .load()
            .then(function (e) {
              var t = e.repullServerLeadStages;
              return t();
            })
            .catch(function (e) {
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[customer_manager] loading the lead stage bulk re-pull failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("lead-stage-bulk-repull-load-failed");
            });
        },
      };
    l.LeadSublistBridgeApi = c;
  },
  98,
);
