__d(
  "WAWebHarmfulFileWarningGate",
  [
    "JSResourceForInteraction",
    "WAAbortError",
    "WAWebActiveIntegrityHoldout",
    "WAWebL10N",
    "WAWebMediaTypes",
    "WAWebSuspiciousContent",
    "asyncToGeneratorRuntime",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            !(
              !r("justknobx")._("8497") ||
              !c(e) ||
              o(
                "WAWebActiveIntegrityHoldout",
              ).isSuppressedByActiveIntegrityHoldout()
            )
          ) {
            var t = yield r("JSResourceForInteraction")(
                "WAWebOpenHarmfulFileWarning",
              )
                .__setRef("WAWebHarmfulFileWarningGate")
                .load(),
              n = t.openHarmfulFileWarning;
            if (!(yield n())) throw new (o("WAAbortError").AbortError)();
            d(e);
          }
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      var t,
        n = (t = e.mediaData) == null ? void 0 : t.mediaStage;
      return n !== o("WAWebMediaTypes").MediaDataStage.RESOLVED &&
        n !== o("WAWebMediaTypes").MediaDataStage.ERROR_UNSUPPORTED
        ? !1
        : c(e);
    }
    function c(e) {
      var t;
      return (
        ((t = e.mediaData) == null ? void 0 : t.suspiciousContent) ===
        o("WAWebSuspiciousContent").WAWebSuspiciousContent.YES_KEEP
      );
    }
    function d(e) {
      var t;
      (t = e.mediaData) == null ||
        t.set({
          suspiciousContent: o("WAWebSuspiciousContent").WAWebSuspiciousContent
            .YES_IGNORE,
        });
    }
    function m() {
      var e = r("WAWebL10N").getNormalizedLocale();
      return (
        "https://faq.whatsapp.com/cxt/?entrypointid=maybe-harmful-file&platform=web&lang=" +
        e
      );
    }
    ((l.confirmHarmfulFileIfNeeded = e),
      (l.shouldOpenHarmfulFileWarningModal = u),
      (l.shouldShowHarmfulFileWarning = c),
      (l.markUserAcceptedHarmfulFileWarning = d),
      (l.getHarmfulFileLearnMoreUrl = m));
  },
  98,
);
