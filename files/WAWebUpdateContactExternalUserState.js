__d(
  "WAWebUpdateContactExternalUserState",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebDBBulkPersistContact",
    "WAWebPromiseQueue",
    "WAWebWidFactory",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = new (o("WAWebPromiseQueue").PromiseQueue)();
    function c(t, n) {
      var a = o("WAWebWidFactory").asUserWidOrThrow(t);
      return u.enqueue(async function () {
        var t = await d(a, n);
        t === !0 &&
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "updateContactExternalUserState: set externalUserState for ",
                "",
              ])),
            a.toLogString(),
          ),
          o("WAWebDBBulkPersistContact")
            .persistContactUpdateBatched(a, { externalUserState: n })
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
      });
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
