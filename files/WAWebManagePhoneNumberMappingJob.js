__d(
  "WAWebManagePhoneNumberMappingJob",
  [
    "WALogger",
    "WAWebApiContact",
    "WAWebWidFactory",
    "WAWebWorkerSafeBackendApi",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    async function c(t) {
      var n = new Set();
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "ensurePhoneNumberToLidMapping: ",
            "",
          ])),
        t.length,
      ),
        t.forEach(function (e) {
          if (
            e.isUser() &&
            !(e.isBot() || e.isHosted() || e.isLid() || e.isPSA())
          ) {
            var t = o("WAWebApiContact").getCurrentLid(
              o("WAWebWidFactory").asUserWidOrThrow(e),
            );
            t == null && n.add(e.user);
          }
        }));
      var r = Array.from(n).map(function (e) {
        return o("WAWebWidFactory").createUserWidOrThrow(e);
      });
      if (
        (o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "ensurePhoneNumberToLidMapping: ",
              " wids: ",
              "",
            ])),
          r.length,
          r
            .map(function (e) {
              return e.toString();
            })
            .join(),
        ),
        r.length !== 0)
      ) {
        var a = !1;
        await o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
          "syncContactListJob",
          { contactIds: r, shouldSyncDevice: a, mode: "query" },
        );
      }
    }
    l.ensurePhoneNumberToLidMapping = c;
  },
  98,
);
