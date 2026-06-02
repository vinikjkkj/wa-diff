__d(
  "WAWebFollowNewsletter",
  [
    "fbt",
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
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e, t) {
      return o("WAWebPDFNGatingUtils").hasAckedNewsletterNuxOrTos()
        ? e()
        : new Promise(async function (n) {
            (t.markPDFNShown(),
              o("WAWebModalManager").ModalManager.open(
                u.jsx(r("WAWebPDFNModal.react"), {
                  pdfnId: o("WAWebPDFNGatingUtils").getNewsletterNuxOrTos(),
                  verifyTosAccepted: o("WAWebPDFNGatingUtils")
                    .hasAckedNewsletterNuxOrTos,
                  runIfTosAccepted: async function () {
                    (t.markPDFNDismissed(), await e(), n());
                  },
                  onCancel: function () {
                    (t.markPDFNDismissed(), t.end(105), n());
                  },
                }),
              ));
          });
    }
    function d(e) {
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, { msg: e }),
      );
    }
    async function m(e, t) {
      var n = new (o(
          "WAWebNewsletterFollowQPLLogger",
        ).WAWebNewsletterFollowQPLLogger)({
          markerId: o("WAWebQplQuickPerformanceLoggerMarkerIds")
            .QuickLogMarkerId.CHANNEL_FOLLOW,
          eventSurface: t.eventSurface,
          discoverySurface: t.discoverySurface,
          eventUnit: t.eventUnit,
        }),
        r = async function () {
          try {
            (await o(
              "WAWebNewsletterSubscribeAction",
            ).subscribeToNewsletterAction(e, t, n),
              n.end(2),
              d(
                s._(/*BTDS*/ "{=m0}", [
                  s._implicitParam(
                    "=m0",
                    u.jsx("div", {
                      children: s._(/*BTDS*/ "Following {channel_name}", [
                        s._param(
                          "channel_name",
                          u.jsx(o("WAWebName.react").Name, { chat: e }),
                        ),
                      ]),
                    }),
                  ),
                ]),
              ));
          } catch (e) {
            await _(e, n);
          }
        };
      return c(r, n);
    }
    async function p(e, t) {
      var n = new (o(
          "WAWebNewsletterFollowQPLLogger",
        ).WAWebNewsletterFollowQPLLogger)({
          markerId: o("WAWebQplQuickPerformanceLoggerMarkerIds")
            .QuickLogMarkerId.CHANNEL_FOLLOW,
          eventSurface: t.eventSurface,
          discoverySurface: t.discoverySurface,
          eventUnit: t.eventUnit,
        }),
        r = e.newsletterMetadata;
      if ((r == null ? void 0 : r.isPreview) === !0) {
        var a = async function () {
          try {
            (e.msgs.length === 0 &&
              (await o(
                "WAWebNewsletterPullMessagesFromServerAction",
              ).pullNewsletterMessagesFromServer(e, { messageCount: 1 })),
              await o(
                "WAWebNewsletterSubscribeAction",
              ).subscribeToNewsletterAction(e, t, n),
              n.end(2));
          } catch (e) {
            throw (await _(e, n), e);
          }
        };
        await c(a, n);
      }
    }
    async function _(e, t) {
      var n;
      if (
        (e instanceof o("WAWebBackendErrors").ServerStatusCodeError &&
          (n = e.status),
        t == null || t.end(3),
        n === 419)
      )
        d(
          s._(
            /*BTDS*/ "This channel has reached the follower limit. Please try again later.",
          ),
        );
      else if (n === 405)
        d(
          s._(
            /*BTDS*/ "This channel is closed to new followers. Try again later.",
          ),
        );
      else if (n === 451) {
        var r = await o(
          "WAWebCommonNewsletterIntegrityStrings",
        ).getGeosuspendedInYourCountryString();
        d(r);
      } else
        d(
          s._(/*BTDS*/ "Couldn't follow this channel. Please try again later."),
        );
    }
    ((l.followNewsletter = m), (l.followDirectoryNewsletter = p));
  },
  226,
);
