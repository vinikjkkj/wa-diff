__d(
  "WAWebNewsletterCreateAction",
  [
    "WALogger",
    "WAWebNewsletterBridgeApi",
    "WAWebNewsletterCreateJob",
    "WAWebNewsletterModelUtils",
    "WAWebNewsletterQueues",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
      return m(e, !1);
    }
    function d(e) {
      return m(e, !0);
    }
    function m(t, a) {
      return o("WAWebNewsletterQueues").newsletterCreationQueue.enqueue(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var n = a
            ? yield o("WAWebNewsletterCreateJob").createNewsletter(t, {
                preserveServerResultOnLocalHydrationFailure: !0,
              })
            : yield o("WAWebNewsletterCreateJob").createNewsletter(t);
          if (n == null)
            return (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[newsletter] createNewsletterAction failed",
                    ])),
                )
                .tags("newsletter"),
              null
            );
          var i = n.msgs,
            l = n.newsletter;
          if (!a) {
            var c = o("WAWebNewsletterModelUtils").mapNewsletterToModels(l),
              d = c.chat,
              m = c.metadata,
              p = c.pic;
            return (
              yield o(
                "WAWebNewsletterBridgeApi",
              ).NewsletterBridgeApi.joinNewsletter({
                newsletter: d,
                metadata: m,
                pic: p,
                msgs: i,
              }),
              o("WAWebWidFactory").asNewsletterWidOrThrow(
                o("WAWebWidFactory").createWid(d.id.toString()),
              )
            );
          }
          var _;
          try {
            _ = o("WAWebWidFactory").asNewsletterWidOrThrow(
              o("WAWebWidFactory").createWid(l.idJid.toString()),
            );
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[newsletter] invalid wid returned after creation",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .tags("newsletter")
                .sendLogs("newsletter-create-server-wid-invalid"),
              null
            );
          }
          try {
            var f = o("WAWebNewsletterModelUtils").mapNewsletterToModels(l),
              g = f.chat,
              h = f.metadata,
              y = f.pic;
            if (g.id.toString() !== _.toString())
              throw r("err")(
                "Hydrated newsletter Wid does not match server result",
              );
            yield o(
              "WAWebNewsletterBridgeApi",
            ).NewsletterBridgeApi.joinNewsletter({
              newsletter: g,
              metadata: h,
              pic: y,
              msgs: i,
            });
          } catch (e) {
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter] local hydration after creation failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .tags("newsletter")
              .sendLogs("newsletter-create-local-hydration-fail");
          }
          return _;
        }),
      );
    }
    ((l.createNewsletterAction = c),
      (l.createNewsletterPreservingServerWidAction = d));
  },
  98,
);
