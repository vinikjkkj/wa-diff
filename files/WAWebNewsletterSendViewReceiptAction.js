__d(
  "WAWebNewsletterSendViewReceiptAction",
  [
    "WALogger",
    "WAMemoizeConcurrent",
    "WAWebFrontendMsgGetters",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebNewsletterBridgeApi",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterSendViewReceiptJob",
    "WAWebNewsletterValidationUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = r("WAMemoizeConcurrent")(
        function (e) {
          var t = e.id;
          return t.toString();
        },
        function (e) {
          return u(e.id);
        },
      );
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (
            o("WAWebNewsletterGatingUtils").isNewsletterViewCountSendEnabled()
          ) {
            var n = o("WAWebMsgCollection").MsgCollection.get(t);
            if (
              n != null &&
              o("WAWebMsgGetters").getIsNewsletterMsg(n) &&
              !n.viewed
            ) {
              var r = n.serverId;
              if (r != null) {
                var a = o("WAWebFrontendMsgGetters").getChat(n);
                try {
                  var i = o(
                    "WAWebNewsletterValidationUtils",
                  ).toNewsletterJidOrThrow(a.id.toString());
                  (yield o(
                    "WAWebNewsletterSendViewReceiptJob",
                  ).sendViewReceiptJob(i, {
                    itemServerId: r,
                    itemId: t.toString(),
                  }),
                    yield o(
                      "WAWebNewsletterBridgeApi",
                    ).NewsletterBridgeApi.updateMsgsViewed({ ids: [t] }));
                } catch (t) {
                  o("WALogger")
                    .ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[sendViewReceipt] Error sending view receipt",
                        ])),
                    )
                    .tags("newsletter");
                }
              }
            }
          }
        })),
        c.apply(this, arguments)
      );
    }
    l.sendViewReceipt = s;
  },
  98,
);
