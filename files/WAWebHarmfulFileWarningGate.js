__d(
  "WAWebHarmfulFileWarningGate",
  ["WAWebABProps", "WAWebL10N", "WAWebMediaTypes", "WAWebSuspiciousContent"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = (t = e.mediaData) == null ? void 0 : t.mediaStage;
      return n !== o("WAWebMediaTypes").MediaDataStage.RESOLVED &&
        n !== o("WAWebMediaTypes").MediaDataStage.ERROR_UNSUPPORTED
        ? !1
        : s(e);
    }
    function s(e) {
      var t,
        n = (t = e.mediaData) == null ? void 0 : t.suspiciousContent;
      return n !== o("WAWebSuspiciousContent").WAWebSuspiciousContent.YES_KEEP
        ? !1
        : o("WAWebABProps").getABPropConfigValue(
            "updated_harmful_document_dialog",
          ) === !0;
    }
    function u(e) {
      var t;
      (t = e.mediaData) == null ||
        t.set({
          suspiciousContent: o("WAWebSuspiciousContent").WAWebSuspiciousContent
            .YES_IGNORE,
        });
    }
    function c() {
      var e = r("WAWebL10N").getNormalizedLocale();
      return (
        "https://faq.whatsapp.com/cxt/?entrypointid=maybe-harmful-file&platform=web&lang=" +
        e
      );
    }
    ((l.shouldOpenHarmfulFileWarningModal = e),
      (l.shouldShowHarmfulFileWarning = s),
      (l.markUserAcceptedHarmfulFileWarning = u),
      (l.getHarmfulFileLearnMoreUrl = c));
  },
  98,
);
