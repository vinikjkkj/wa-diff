__d(
  "WAWebNewsletterInfoDialogsLoadable",
  ["JSResourceForInteraction", "WAWebModalLoadable", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e = function () {
        return r("JSResourceForInteraction")("WAWebNewsletterInfoDialogs.react")
          .__setRef("WAWebNewsletterInfoDialogsLoadable")
          .load();
      },
      s = r("WAWebModalLoadable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return (yield e()).NewsletterMessageNotFoundPopup;
        }),
        "NewsletterMessageNotFoundPopup",
      ),
      u = r("WAWebModalLoadable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return (yield e()).NewsletterMessageDeletedPopup;
        }),
        "NewsletterMessageDeletedPopup",
      ),
      c = r("WAWebModalLoadable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return (yield e()).NewsletterPinTooOldPopup;
        }),
        "NewsletterPinTooOldPopup",
      );
    ((l.NewsletterMessageNotFoundPopupLoadable = s),
      (l.NewsletterMessageDeletedPopupLoadable = u),
      (l.NewsletterPinTooOldPopupLoadable = c));
  },
  98,
);
