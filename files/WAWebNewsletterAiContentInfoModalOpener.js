__d(
  "WAWebNewsletterAiContentInfoModalOpener",
  [
    "invariant",
    "WAWebModalManager",
    "WAWebNewsletterAiContentInfoModalLoadable",
    "WAWebNewsletterAiContentInfoModalTypes",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e, t) {
      t === void 0 && (t = {});
      var n = t,
        r = n.onClose,
        a = n.onConfirm;
      if (
        e ===
        o("WAWebNewsletterAiContentInfoModalTypes").AiContentModalVariant
          .ADMIN_CONFIRMATION
      ) {
        (a != null || s(0, 162897),
          o("WAWebModalManager").ModalManager.open(
            u.jsx(
              o("WAWebNewsletterAiContentInfoModalLoadable")
                .NewsletterAiContentInfoModalLoadable,
              {
                variant: e,
                onConfirm: function () {
                  (a(),
                    r == null || r(),
                    o("WAWebModalManager").closeModalManager());
                },
                onCancel: function () {
                  (r == null || r(),
                    o("WAWebModalManager").closeModalManager());
                },
              },
            ),
          ));
        return;
      }
      o("WAWebModalManager").ModalManager.open(
        u.jsx(
          o("WAWebNewsletterAiContentInfoModalLoadable")
            .NewsletterAiContentInfoModalLoadable,
          {
            variant: e,
            onClose: function () {
              (r == null || r(), o("WAWebModalManager").closeModalManager());
            },
          },
        ),
      );
    }
    l.openAiContentInfoModal = c;
  },
  98,
);
