__d(
  "WAWebHarmfulFileWarningGate",
  [
    "JSResourceForInteraction",
    "WAAbortError",
    "WAWebActiveIntegrityHoldout",
    "WAWebL10N",
    "WAWebMediaTypes",
    "WAWebSuspiciousContent",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      if (
        !(
          !r("justknobx")._("8497") ||
          !u(e) ||
          o(
            "WAWebActiveIntegrityHoldout",
          ).isSuppressedByActiveIntegrityHoldout()
        )
      ) {
        var t = await r("JSResourceForInteraction")(
            "WAWebOpenHarmfulFileWarning",
          )
            .__setRef("WAWebHarmfulFileWarningGate")
            .load(),
          n = t.openHarmfulFileWarning;
        if (!(await n())) throw new (o("WAAbortError").AbortError)();
        c(e);
      }
    }
    function s(e) {
      var t,
        n = (t = e.mediaData) == null ? void 0 : t.mediaStage;
      return n !== o("WAWebMediaTypes").MediaDataStage.RESOLVED &&
        n !== o("WAWebMediaTypes").MediaDataStage.ERROR_UNSUPPORTED
        ? !1
        : u(e);
    }
    function u(e) {
      var t;
      return (
        ((t = e.mediaData) == null ? void 0 : t.suspiciousContent) ===
        o("WAWebSuspiciousContent").WAWebSuspiciousContent.YES_KEEP
      );
    }
    function c(e) {
      var t;
      (t = e.mediaData) == null ||
        t.set({
          suspiciousContent: o("WAWebSuspiciousContent").WAWebSuspiciousContent
            .YES_IGNORE,
        });
    }
    function d() {
      var e = r("WAWebL10N").getNormalizedLocale();
      return (
        "https://faq.whatsapp.com/cxt/?entrypointid=maybe-harmful-file&platform=web&lang=" +
        e
      );
    }
    ((l.confirmHarmfulFileIfNeeded = e),
      (l.shouldOpenHarmfulFileWarningModal = s),
      (l.shouldShowHarmfulFileWarning = u),
      (l.markUserAcceptedHarmfulFileWarning = c),
      (l.getHarmfulFileLearnMoreUrl = d));
  },
  98,
);
