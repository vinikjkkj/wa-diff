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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          o("WAWebPageLoadLogging").startPageLoadQplMeasure(
            "pruneExpiredMessagesWithAddOns",
          );
          var t = yield o("WAWebDBEphemeralMessage").pruneExpiredMessages(),
            n = t.length;
          if (n > 0) {
            var a = [],
              i = new Set();
            t.forEach(function (e) {
              var t = e.id.toString();
              (i.add(r("WAWebMsgKey").fromString(t).remote.toString()),
                a.push(t));
            });
            var l = Array.from(i.values()).join(",").toString();
            (o("WAWebBackendApi").frontendFireAndForget(
              "deleteModelsForLastAddOnPreview",
              { messagesIds: a },
            ),
              yield o("WAWebPersistedJobManagerWorkerCompatible")
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
        })),
        u.apply(this, arguments)
      );
    }
    l.pruneExpiredMessagesWithAddOns = s;
  },
  98,
);
