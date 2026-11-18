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
        r = n.channelWid,
        a = n.onClose,
        i = n.onConfirm;
      if (
        e ===
        o("WAWebNewsletterAiContentInfoModalTypes").AiContentModalVariant
          .ADMIN_CONFIRMATION
      ) {
        (i != null || s(0, 162897),
          o("WAWebModalManager").ModalManager.open(
            u.jsx(
              o("WAWebNewsletterAiContentInfoModalLoadable")
                .NewsletterAiContentInfoModalLoadable,
              {
                variant: e,
                onConfirm: function () {
                  (i(),
                    a == null || a(),
                    o("WAWebModalManager").closeModalManager());
                },
                onCancel: function () {
                  (a == null || a(),
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
            channelWid: r,
            variant: e,
            onClose: function () {
              (a == null || a(), o("WAWebModalManager").closeModalManager());
            },
          },
        ),
      );
    }
    l.openAiContentInfoModal = c;
  },
  98,
);
