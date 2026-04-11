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
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      return o("WAWebNewsletterQueues").newsletterCreationQueue.enqueue(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var n = yield o("WAWebNewsletterCreateJob").createNewsletter(t);
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
          var r = n.msgs,
            a = n.newsletter,
            i = o("WAWebNewsletterModelUtils").mapNewsletterToModels(a),
            l = i.chat,
            s = i.metadata,
            u = i.pic;
          return (
            yield o(
              "WAWebNewsletterBridgeApi",
            ).NewsletterBridgeApi.joinNewsletter({
              newsletter: l,
              metadata: s,
              pic: u,
              msgs: r,
            }),
            o("WAWebWidFactory").asNewsletterWidOrThrow(
              o("WAWebWidFactory").createWid(l.id.toString()),
            )
          );
        }),
      );
    }
    l.createNewsletterAction = s;
  },
  98,
);
