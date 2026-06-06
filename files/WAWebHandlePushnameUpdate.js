__d(
  "WAWebHandlePushnameUpdate",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebDBBulkPersistContact",
    "WAWebEnvironment",
    "WAWebPromiseQueue",
    "WAWebWidFactory",
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
    function c(t, n, a) {
      a === void 0 && (a = !1);
      var i = o("WAWebWidFactory").asUserWidOrThrow(t);
      return s.enqueue(async function () {
        var t = void 0;
        ((!a || r("WAWebEnvironment").isGuest) && (t = await u(i, n)),
          (t === !0 || t === void 0) &&
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "updatePushName: set pushname for ",
                  "",
                ])),
              i.toLogString(),
            ),
            o("WAWebDBBulkPersistContact").persistContactUpdateBatched(i, {
              pushname: n,
            })));
      });
    }
    l.updatePushname = c;
  },
  98,
);
