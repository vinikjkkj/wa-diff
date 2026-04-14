__d(
  "WAWebNewsletterNotAvailableModal.react",
  [
    "fbt",
    "WALogger",
    "WAWebConfirmPopup.react",
    "WAWebFbtAppName",
    "WAWebModalManager",
    "WAWebNewsletterCommonGatingUtils",
    "WAWebUpdaterUpdateApp",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useCallback;
    function m(t) {
      var n = t.gating,
        r = d(function () {
          (o("WAWebModalManager").ModalManager.close(),
            o("WAWebUpdaterUpdateApp").updateApp());
        }, []),
        a = o("WAWebModalManager").closeModalManager,
        i,
        l,
        u,
        m,
        p;
      switch (n) {
        case o("WAWebNewsletterCommonGatingUtils").NewsletterCompanionGating
          .Disabled: {
          ((m = s._(
            /*BTDS*/ "WhatsApp Channels isn't currently available for you.",
          )),
            (p = null));
          break;
        }
        case o("WAWebNewsletterCommonGatingUtils").NewsletterCompanionGating
          .NeedsUpgrade: {
          ((m = s._(
            /*BTDS*/ "To use Channels, you need to update to the most recent version of {=m1}.",
            [
              s._implicitParam(
                "=m1",
                c.jsx(o("WAWebFbtAppName").WAWebAppShortName, {
                  children: s._(/*BTDS*/ ""),
                }),
              ),
            ],
          )),
            (p = s._(/*BTDS*/ "Update needed")),
            (l = o("WAWebModalManager").closeModalManager),
            (u = s._(/*BTDS*/ "Dismiss")),
            (a = r),
            (i = s._(/*BTDS*/ "Update")));
          break;
        }
        case o("WAWebNewsletterCommonGatingUtils").NewsletterCompanionGating
          .AvailableOnPhone: {
          ((m = s._(
            /*BTDS*/ "To use Channels, open the link on your mobile phone.",
          )),
            (p = s._(/*BTDS*/ "Not yet available on web")));
          break;
        }
        case o("WAWebNewsletterCommonGatingUtils").NewsletterCompanionGating
          .Enabled:
          return (
            o("WALogger").ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[LoadingNewsletterPreviewModal] shown when enabled",
                ])),
            ),
            null
          );
      }
      return c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        title: p,
        onOK: a,
        okText: i,
        onCancel: l,
        cancelText: u,
        children: m,
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
