__d(
  "WAWebStatusBridgeApi",
  [
    "JSResourceForInteraction",
    "WAJids",
    "WAWebCmd",
    "WAWebDeleteStatusAction",
    "WAWebNewsletterSyntheticStatusUtils",
    "WAWebSettingsModel",
    "WAWebStatusCollection",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
      clearStatusForRemovedContact: function () {
        return o("WAWebStatusCollection")
          .StatusCollection.sync()
          .then(o("WAWebDeleteStatusAction").clearStatusForRemovedContact)
          .then(
            o("WAWebNewsletterSyntheticStatusUtils")
              .createSyntheticsForNewsletters,
          );
      },
      fillGapFromIncomingStanza: function (t) {
        var e = t.incomingServerId,
          n = t.newsletterJid,
          a = t.sentTime;
        return r("JSResourceForInteraction")(
          "WAWebNewsletterStatusGapFillAction",
        )
          .__setRef("WAWebStatusBridgeApi")
          .load()
          .then(function (t) {
            return t.fillGapFromIncomingStanza(
              o("WAJids").toNewsletterJid(n),
              e,
              a,
            );
          });
      },
      fillSubscribedStatusGaps: function () {
        return r("JSResourceForInteraction")(
          "WAWebNewsletterStatusGapFillAction",
        )
          .__setRef("WAWebStatusBridgeApi")
          .load()
          .then(function (e) {
            return e.fillSubscribedStatusGaps();
          });
      },
      handleStatusUpdate: function (t) {
        var e = t.isMsgUpdate,
          n = t.rawMsg;
        return o("WAWebStatusCollection").StatusCollection.handleUpdate(n, e);
      },
      handleReadStatus: function (t) {
        var e = t.msgKeys;
        for (var n of e) {
          var r = n.participant,
            a = r && o("WAWebStatusCollection").StatusCollection.get(r);
          a && a.handleReadStatus(n);
        }
      },
      triggerUpdateCrosspostAutoShareSettingsFromBridge: function (t) {
        var e = t.shareToFB,
          n = t.shareToIG;
        (e != null && (r("WAWebSettingsModel").shareToFB = e),
          n != null && (r("WAWebSettingsModel").shareToIG = n),
          o("WAWebCmd").Cmd.updateCrosspostAutoShareSettingsFromBridge(t));
      },
      triggerUpdateStatusPrivacySettingsFromBridge: function (t) {
        o("WAWebCmd").Cmd.updateStatusPrivacySettingsFromBridge(t);
      },
    };
    l.StatusBridgeApi = e;
  },
  98,
);
