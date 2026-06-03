__d(
  "WAWebFollowNewsletter",
  [
    "fbt",
    "Promise",
    "WAWebBackendErrors",
    "WAWebCommonNewsletterIntegrityStrings",
    "WAWebModalManager",
    "WAWebName.react",
    "WAWebNewsletterFollowQPLLogger",
    "WAWebNewsletterPullMessagesFromServerAction",
    "WAWebNewsletterSubscribeAction",
    "WAWebPDFNGatingUtils",
    "WAWebPDFNModal.react",
    "WAWebQplQuickPerformanceLoggerMarkerIds",
    "WAWebToast.react",
    "WAWebToastManager",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    function d(t, a) {
      return o("WAWebPDFNGatingUtils").hasAckedNewsletterNuxOrTos()
        ? t()
        : new (e || (e = n("Promise")))(
            (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  (a.markPDFNShown(),
                    o("WAWebModalManager").ModalManager.open(
                      c.jsx(r("WAWebPDFNModal.react"), {
                        pdfnId: o(
                          "WAWebPDFNGatingUtils",
                        ).getNewsletterNuxOrTos(),
                        verifyTosAccepted: o("WAWebPDFNGatingUtils")
                          .hasAckedNewsletterNuxOrTos,
                        runIfTosAccepted: n(
                          "asyncToGeneratorRuntime",
                        ).asyncToGenerator(function* () {
                          (a.markPDFNDismissed(), yield t(), e());
                        }),
                        onCancel: function () {
                          (a.markPDFNDismissed(), a.end(105), e());
                        },
                      }),
                    ));
                },
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
          );
    }
    function m(e) {
      o("WAWebToastManager").ToastManager.open(
        c.jsx(o("WAWebToast.react").Toast, { msg: e }),
      );
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = new (o(
              "WAWebNewsletterFollowQPLLogger",
            ).WAWebNewsletterFollowQPLLogger)({
              markerId: o("WAWebQplQuickPerformanceLoggerMarkerIds")
                .QuickLogMarkerId.CHANNEL_FOLLOW,
              eventSurface: t.eventSurface,
              discoverySurface: t.discoverySurface,
              eventUnit: t.eventUnit,
            }),
            a = (function () {
              var a = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  try {
                    (yield o(
                      "WAWebNewsletterSubscribeAction",
                    ).subscribeToNewsletterAction(e, t, r),
                      r.end(2),
                      m(
                        s._(/*BTDS*/ "{=m0}", [
                          s._implicitParam(
                            "=m0",
                            c.jsx("div", {
                              children: s._(
                                /*BTDS*/ "Following {channel_name}",
                                [
                                  s._param(
                                    "channel_name",
                                    c.jsx(o("WAWebName.react").Name, {
                                      chat: e,
                                    }),
                                  ),
                                ],
                              ),
                            }),
                          ),
                        ]),
                      ));
                  } catch (e) {
                    yield h(e, r);
                  }
                },
              );
              return function () {
                return a.apply(this, arguments);
              };
            })();
          return d(a, r);
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = new (o(
              "WAWebNewsletterFollowQPLLogger",
            ).WAWebNewsletterFollowQPLLogger)({
              markerId: o("WAWebQplQuickPerformanceLoggerMarkerIds")
                .QuickLogMarkerId.CHANNEL_FOLLOW,
              eventSurface: t.eventSurface,
              discoverySurface: t.discoverySurface,
              eventUnit: t.eventUnit,
            }),
            a = e.newsletterMetadata;
          if ((a == null ? void 0 : a.isPreview) === !0) {
            var i = (function () {
              var a = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  try {
                    (e.msgs.length === 0 &&
                      (yield o(
                        "WAWebNewsletterPullMessagesFromServerAction",
                      ).pullNewsletterMessagesFromServer(e, {
                        messageCount: 1,
                      })),
                      yield o(
                        "WAWebNewsletterSubscribeAction",
                      ).subscribeToNewsletterAction(e, t, r),
                      r.end(2));
                  } catch (e) {
                    throw (yield h(e, r), e);
                  }
                },
              );
              return function () {
                return a.apply(this, arguments);
              };
            })();
            yield d(i, r);
          }
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n;
          if (
            (e instanceof o("WAWebBackendErrors").ServerStatusCodeError &&
              (n = e.status),
            t == null || t.end(3),
            n === 419)
          )
            m(
              s._(
                /*BTDS*/ "This channel has reached the follower limit. Please try again later.",
              ),
            );
          else if (n === 405)
            m(
              s._(
                /*BTDS*/ "This channel is closed to new followers. Try again later.",
              ),
            );
          else if (n === 451) {
            var r = yield o(
              "WAWebCommonNewsletterIntegrityStrings",
            ).getGeosuspendedInYourCountryString();
            m(r);
          } else
            m(
              s._(
                /*BTDS*/ "Couldn't follow this channel. Please try again later.",
              ),
            );
        })),
        y.apply(this, arguments)
      );
    }
    ((l.followNewsletter = p), (l.followDirectoryNewsletter = f));
  },
  226,
);
