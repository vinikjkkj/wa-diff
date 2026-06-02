__d(
  "WAWebPruneExpiredMessagesWithAddOns",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebDBEphemeralMessage",
    "WAWebMsgKey",
    "WAWebPageLoadLogging",
    "WAWebPersistedJobDefinitions",
    "WAWebPersistedJobManagerWorkerCompatible",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s() {
      o("WAWebPageLoadLogging").startPageLoadQplMeasure(
        "pruneExpiredMessagesWithAddOns",
      );
      var t = await o("WAWebDBEphemeralMessage").pruneExpiredMessages(),
        n = t.length;
      if (n > 0) {
        var a = [],
          i = new Set();
        t.forEach(function (e) {
          var t = e.id.toString();
          (i.add(r("WAWebMsgKey").fromString(t).remote.toString()), a.push(t));
        });
        var l = Array.from(i.values()).join(",").toString();
        (o("WAWebBackendApi").frontendFireAndForget(
          "deleteModelsForLastAddOnPreview",
          { messagesIds: a },
        ),
          await o("WAWebPersistedJobManagerWorkerCompatible")
            .getJobManager()
            .waitUntilPersisted(
              o("WAWebPersistedJobDefinitions").jobSerializers.deleteAddOns(
                l,
                a,
              ),
            ),
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[offline-resume] pruneExpiredMessagesWithAddOns ",
                " msgs",
              ])),
            n,
          ));
      }
      o("WAWebPageLoadLogging").endPageLoadQplMeasure(
        "pruneExpiredMessagesWithAddOns",
      );
    }
    l.pruneExpiredMessagesWithAddOns = s;
  },
  98,
);
