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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
          o(
            "WAWebNewsletterMetadataJob",
          ).updateNewsletterMessageDeliveryUpdates(
            e,
            a,
            i,
            o("WAJobOrchestratorTypes").JOB_PRIORITY.HIGH,
          );
          var l = yield o(
              "WAWebNewsletterMessageDeliveryUpdateToModelUtils",
            ).getMessageDeliveryUpdatesModelToUpdate(e, a, i),
            s = l.modelUpdatesToAdd,
            u = l.modelUpdatesToRemove;
          yield o("WAWebBackendApi").frontendSendAndReceive(
            "updateNewsletterMessageDeliveryUpdate",
            { id: n, modelUpdatesToAdd: s, modelUpdatesToRemove: u },
          );
          var c = o("WAWebNux").getNewsletterAlertsBannerNuxKey(e);
          o("WAWebUserPrefsNuxPreferences").resetNux(c);
        })),
        s.apply(this, arguments)
      );
    }
    l.handleNewsletterMessageDeliveryUpdateNotificationImpl = e;
  },
  98,
);
