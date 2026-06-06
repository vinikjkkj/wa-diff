__d(
  "WAWebBootstrapNewsletter",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebNewsletterCommonGatingUtils",
    "WAWebNewsletterExtendedGatingUtils",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterGetMyAddOnsJob",
    "WAWebNewsletterLoadingStageManager",
    "WAWebNoop",
    "WAWebPrimaryFeaturesModel",
    "WAWebQplFlowWrapper",
    "WAWebQueryAndUpdateNewslettersMetadataAction",
    "WAWebSyncdOrphan",
    "WAWebUserPrefsMultiDevice",
    "asyncToGeneratorRuntime",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = 5e3,
      _ = r("qpl")._(891434294, "3266"),
      f = null;
    function g() {
      if (o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled()) {
        if (f != null)
          return (
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[newsletter-bootstrap] Bootstrap already ongoing, returning",
                ])),
            ),
            f
          );
        if (!o("WAWebUserPrefsMultiDevice").getNewsletterWasBootstrapped()) {
          if (
            o(
              "WAWebNewsletterExtendedGatingUtils",
            ).isNewsletterEnabledOnPrimary()
          )
            return ((f = h()), f);
          o("WAWebPrimaryFeaturesModel").PrimaryFeatures.on(
            "change:newsletter",
            function () {
              if (
                o(
                  "WAWebNewsletterExtendedGatingUtils",
                ).isNewsletterEnabledOnPrimary()
              )
                return ((f = h()), f);
            },
          );
        }
      }
    }
    function h() {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[newsletter-bootstrap] Bootstrap started",
              ])),
          );
          var e = o("WAWebQplFlowWrapper").QPL.markerStart(_),
            t = function () {
              return e.end(2);
            },
            n = function () {
              return e.end(3);
            },
            a = {
              instanceKey: e.instanceKey,
              addPoint: function (n, r) {
                return e.addPoint(n, r);
              },
              annotate: function (n) {
                return e.annotate(n);
              },
              end: r("WAWebNoop"),
              drop: function () {
                return e.drop();
              },
            };
          o(
            "WAWebNewsletterLoadingStageManager",
          ).NewsletterLoadingStageManager.start();
          try {
            var i = yield o(
              "WAWebQueryAndUpdateNewslettersMetadataAction",
            ).queryAndUpdateAllNewsletterMetadataAction(
              o("WAWebQueryAndUpdateNewslettersMetadataAction")
                .NewsletterMetadataUpdateEntryPoint.Bootstrap,
              { messageCount: 1, addSystemMsgs: !0, qplEvent: a },
            );
            (o(
              "WAWebNewsletterExtendedGatingUtils",
            ).isNewsletterReactionEnabled() &&
              (yield o("WAWebNewsletterGetMyAddOnsJob")
                .getMyNewsletterAddOnsJob({ count: p })
                .catch(function (e) {
                  o("WALogger")
                    .ERROR(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "[newsletter] Failed to retrieve my reactions on bootstrap",
                        ])),
                    )
                    .tags("newsletter")
                    .sendLogs("newsletter-bootstrap-my-reactions-failed");
                })),
              o("WAWebUserPrefsMultiDevice").setNewsletterWasBootstrapped(),
              i.success
                ? (yield o("WAWebSyncdOrphan").checkOrphanChats(
                    i.chats.map(function (e) {
                      return e.id.toString();
                    }),
                  ),
                  o(
                    "WAWebNewsletterLoadingStageManager",
                  ).NewsletterLoadingStageManager.end(),
                  t(),
                  o("WALogger").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[newsletter-bootstrap] Bootstrap completed",
                      ])),
                  ),
                  o(
                    "WAWebNewsletterGatingUtils",
                  ).isNewsletterStatusReceiverEnabled() &&
                    o("WAWebBackendApi").frontendFireAndForget(
                      "fillSubscribedStatusGaps",
                      {},
                    ))
                : (n(),
                  o(
                    "WAWebNewsletterLoadingStageManager",
                  ).NewsletterLoadingStageManager.fail(),
                  o("WALogger")
                    .ERROR(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "[newsletter-bootstrap] Bootstrap failed",
                        ])),
                    )
                    .tags("newsletter")
                    .sendLogs("newsletter-bootstrap-failed")));
          } catch (e) {
            (n(),
              o(
                "WAWebNewsletterLoadingStageManager",
              ).NewsletterLoadingStageManager.fail(),
              o("WALogger")
                .ERROR(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "[newsletter-bootstrap] Bootstrap failed",
                    ])),
                )
                .tags("newsletter")
                .sendLogs("newsletter-bootstrap-failed"));
          } finally {
            f = null;
          }
        })),
        y.apply(this, arguments)
      );
    }
    l.bootstrapNewsletterBackend = g;
  },
  98,
);
