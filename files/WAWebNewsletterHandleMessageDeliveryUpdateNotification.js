__d(
  "WAWebNewsletterHandleMessageDeliveryUpdateNotification",
  [
    "WAJobOrchestratorTypes",
    "WAWebBackendApi",
    "WAWebJidToWid",
    "WAWebNewsletterMessageDeliveryUpdateToModelUtils",
    "WAWebNewsletterMetadataJob",
    "WAWebNux",
    "WAWebUserPrefsNuxPreferences",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = o("WAWebJidToWid").newsletterJidToWid(e),
        r = t.reduce(
          function (e, t) {
            if (t.issueCode === 0) e.updatesToRemove.push(t.serverId);
            else {
              var n = { id: t.serverId, code: t.issueCode };
              e.updatesToAdd.push(n);
            }
            return e;
          },
          { updatesToAdd: [], updatesToRemove: [] },
        ),
        a = r.updatesToAdd,
        i = r.updatesToRemove;
      o("WAWebNewsletterMetadataJob").updateNewsletterMessageDeliveryUpdates(
        e,
        a,
        i,
        o("WAJobOrchestratorTypes").JOB_PRIORITY.HIGH,
      );
      var l = await o(
          "WAWebNewsletterMessageDeliveryUpdateToModelUtils",
        ).getMessageDeliveryUpdatesModelToUpdate(e, a, i),
        s = l.modelUpdatesToAdd,
        u = l.modelUpdatesToRemove;
      await o("WAWebBackendApi").frontendSendAndReceive(
        "updateNewsletterMessageDeliveryUpdate",
        { id: n, modelUpdatesToAdd: s, modelUpdatesToRemove: u },
      );
      var c = o("WAWebNux").getNewsletterAlertsBannerNuxKey(e);
      o("WAWebUserPrefsNuxPreferences").resetNux(c);
    }
    l.handleNewsletterMessageDeliveryUpdateNotificationImpl = e;
  },
  98,
);
