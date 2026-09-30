__d(
  "WAWebLeadSublistBridgeApi",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebLeadSublistChangeNotifier",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {
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
      };
    l.LeadSublistBridgeApi = s;
  },
  98,
);
