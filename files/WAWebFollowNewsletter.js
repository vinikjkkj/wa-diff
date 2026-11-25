__d(
  "WAWebFollowNewsletter",
  [
    "fbt",
    "WAErrors",
    "WAWebBackendErrors",
    "WAWebCommonNewsletterIntegrityStrings",
    "WAWebModalManager",
    "WAWebName.react",
    "WAWebNewsletterFollowQPLLogger",
    "WAWebNewsletterMembershipOffline",
    "WAWebNewsletterMetadataGetters",
    "WAWebNewsletterPullMessagesFromServerAction",
    "WAWebNewsletterSubscribeAction",
    "WAWebPDFNGatingUtils",
    "WAWebPDFNModal.react",
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
        markerId: 1026960759,
        eventSurface: t.eventSurface,
        discoverySurface: t.discoverySurface,
        eventUnit: t.eventUnit,
      });
      if (
        o(
          "WAWebNewsletterMembershipOffline",
        ).failNewsletterMembershipChangeIfOffline(n)
      ) {
        o("WAWebNewsletterMembershipOffline").showNoConnectionToast();
        return;
      }
      var r = async function () {
        try {
          (await o(
            "WAWebNewsletterSubscribeAction",
          ).subscribeToNewsletterAction(e, t, n),
            n.end(2),
            d(
              s._(/*BTDS*/ "", [
                s._implicitParam(
                  "=m0",
                  u.jsx("div", {
                    children: s._(/*BTDS*/ "", [
                      s._param(
                        "channel_name",
                        u.jsx(o("WAWebName.react").ChatName, { chatId: e.id }),
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
          markerId: 1026960759,
          eventSurface: t.eventSurface,
          discoverySurface: t.discoverySurface,
          eventUnit: t.eventUnit,
        }),
        r = e.newsletterMetadata;
      if (r != null && o("WAWebNewsletterMetadataGetters").getIsPreview(r)) {
        if (
          o(
            "WAWebNewsletterMembershipOffline",
          ).failNewsletterMembershipChangeIfOffline(n)
        )
          throw (
            o("WAWebNewsletterMembershipOffline").showNoConnectionToast(),
            new (o("WAErrors").Offline)()
          );
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
        d(s._(/*BTDS*/ ""));
      else if (n === 405) d(s._(/*BTDS*/ ""));
      else if (n === 451) {
        var r = await o(
          "WAWebCommonNewsletterIntegrityStrings",
        ).getGeosuspendedInYourCountryString();
        d(r);
      } else d(s._(/*BTDS*/ ""));
    }
    ((l.followNewsletter = m), (l.followDirectoryNewsletter = p));
  },
  226,
);
