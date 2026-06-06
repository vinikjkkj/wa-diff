__d(
  "WAWebHandlePushnameUpdate",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebDBBulkPersistContact",
    "WAWebEnvironment",
    "WAWebPromiseQueue",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new (o("WAWebPromiseQueue").PromiseQueue)();
    function u(e, t) {
      return o("WAWebBackendApi").frontendSendAndReceive("updatePushname", {
        contactId: e,
        pushname: t,
      });
    }
    function c(t, a, i) {
      i === void 0 && (i = !1);
      var l = o("WAWebWidFactory").asUserWidOrThrow(t);
      return s.enqueue(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = void 0;
          ((!i || r("WAWebEnvironment").isGuest) && (t = yield u(l, a)),
            (t === !0 || t === void 0) &&
              (o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "updatePushName: set pushname for ",
                    "",
                  ])),
                l.toLogString(),
              ),
              o("WAWebDBBulkPersistContact").persistContactUpdateBatched(l, {
                pushname: a,
              })));
        }),
      );
    }
    l.updatePushname = c;
  },
  98,
);
