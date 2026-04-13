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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useCallback;
    function m(t) {
      var n = o("react-compiler-runtime").c(14),
        r = t.gating,
        a = p,
        i = o("WAWebModalManager").closeModalManager,
        l,
        u,
        d,
        m,
        _;
      e: switch (r) {
        case o("WAWebNewsletterCommonGatingUtils").NewsletterCompanionGating
          .Disabled: {
          var f;
          (n[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((f = s._(
                /*BTDS*/ "WhatsApp Channels isn't currently available for you.",
              )),
              (n[0] = f))
            : (f = n[0]),
            (m = f),
            (_ = null));
          break e;
        }
        case o("WAWebNewsletterCommonGatingUtils").NewsletterCompanionGating
          .NeedsUpgrade: {
          var g;
          (n[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((g = s._(
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
              (n[1] = g))
            : (g = n[1]),
            (m = g));
          var h;
          (n[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((h = s._(/*BTDS*/ "Update needed")), (n[2] = h))
            : (h = n[2]),
            (_ = h),
            (u = o("WAWebModalManager").closeModalManager));
          var y;
          (n[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((y = s._(/*BTDS*/ "Dismiss")), (n[3] = y))
            : (y = n[3]),
            (d = y),
            (i = a));
          var C;
          (n[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((C = s._(/*BTDS*/ "Update")), (n[4] = C))
            : (C = n[4]),
            (l = C));
          break e;
        }
        case o("WAWebNewsletterCommonGatingUtils").NewsletterCompanionGating
          .AvailableOnPhone: {
          var b;
          (n[5] === Symbol.for("react.memo_cache_sentinel")
            ? ((b = s._(
                /*BTDS*/ "To use Channels, open the link on your mobile phone.",
              )),
              (n[5] = b))
            : (b = n[5]),
            (m = b));
          var v;
          (n[6] === Symbol.for("react.memo_cache_sentinel")
            ? ((v = s._(/*BTDS*/ "Not yet available on web")), (n[6] = v))
            : (v = n[6]),
            (_ = v));
          break e;
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
      var S;
      return (
        n[7] !== d ||
        n[8] !== m ||
        n[9] !== l ||
        n[10] !== u ||
        n[11] !== i ||
        n[12] !== _
          ? ((S = c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              title: _,
              onOK: i,
              okText: l,
              onCancel: u,
              cancelText: d,
              children: m,
            })),
            (n[7] = d),
            (n[8] = m),
            (n[9] = l),
            (n[10] = u),
            (n[11] = i),
            (n[12] = _),
            (n[13] = S))
          : (S = n[13]),
        S
      );
    }
    function p() {
      (o("WAWebModalManager").ModalManager.close(),
        o("WAWebUpdaterUpdateApp").updateApp());
    }
    l.default = m;
  },
  226,
);
