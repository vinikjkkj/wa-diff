__d(
  "WAWebUpdateContactExternalUserState",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebDBBulkPersistContact",
    "WAWebPromiseQueue",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = new (o("WAWebPromiseQueue").PromiseQueue)();
    function c(t, a) {
      var i = o("WAWebWidFactory").asUserWidOrThrow(t);
      return u.enqueue(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = yield d(i, a);
          t === !0 &&
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "updateContactExternalUserState: set externalUserState for ",
                  "",
                ])),
              i.toLogString(),
            ),
            o("WAWebDBBulkPersistContact")
              .persistContactUpdateBatched(i, { externalUserState: a })
              .catch(function (e) {
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "updateContactExternalUserState: persist failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("updateContactExternalUserState");
              }));
        }),
      );
    }
    function d(e, t) {
      return o("WAWebBackendApi").frontendSendAndReceive(
        "updateContactExternalUserState",
        { contactId: e, externalUserState: t },
      );
    }
    l.updateContactExternalUserState = c;
  },
  98,
);
