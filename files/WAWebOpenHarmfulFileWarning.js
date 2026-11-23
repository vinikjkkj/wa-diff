__d(
  "WAWebOpenHarmfulFileWarning",
  [
    "WAResolvable",
    "WAWebFbtCommon",
    "WAWebHarmfulFileWarningGate",
    "WAWebHarmfulFileWarningModal.react",
    "WAWebModalManager",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = null;
    async function c() {
      var e = new (o("WAResolvable").Resolvable)(),
        t = function () {
          return e.resolve(!1);
        },
        n = function (n) {
          n === "modal" && e.resolve(!1);
        };
      (o("WAWebModalManager").ModalManager.on("close_modal", t),
        o("WAWebModalManager").ModalManager.on("slot_unmounted", n),
        (u = e),
        o("WAWebModalManager").ModalManager.setForceRequestFocusMedia(
          !1,
          "media",
        ));
      try {
        return (
          o("WAWebModalManager").ModalManager.open(
            s.jsx(r("WAWebHarmfulFileWarningModal.react"), {
              confirmText: r("WAWebFbtCommon")("Continue"),
              learnMoreUrl: o(
                "WAWebHarmfulFileWarningGate",
              ).getHarmfulFileLearnMoreUrl(),
              onCancel: o("WAWebModalManager").closeModalManager,
              onUnmount: t,
              onOpen: function () {
                (e.resolve(!0), o("WAWebModalManager").closeModalManager());
              },
            }),
          ),
          await e.promise
        );
      } finally {
        (o("WAWebModalManager").ModalManager.off("close_modal", t),
          o("WAWebModalManager").ModalManager.off("slot_unmounted", n),
          u === e &&
            ((u = null),
            o("WAWebModalManager").ModalManager.setForceRequestFocusMedia(
              null,
              "media",
            )));
      }
    }
    l.openHarmfulFileWarning = c;
  },
  98,
);
