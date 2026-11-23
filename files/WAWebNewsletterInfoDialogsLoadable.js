__d(
  "WAWebNewsletterInfoDialogsLoadable",
  ["JSResourceForInteraction", "WAWebModalLoadable"],
  function (t, n, r, o, a, i, l) {
    var e = function () {
        return r("JSResourceForInteraction")("WAWebNewsletterInfoDialogs.react")
          .__setRef("WAWebNewsletterInfoDialogsLoadable")
          .load();
      },
      s = r("WAWebModalLoadable")(async function () {
        return (await e()).NewsletterMessageNotFoundPopup;
      }, "NewsletterMessageNotFoundPopup"),
      u = r("WAWebModalLoadable")(async function () {
        return (await e()).NewsletterMessageDeletedPopup;
      }, "NewsletterMessageDeletedPopup"),
      c = r("WAWebModalLoadable")(async function () {
        return (await e()).NewsletterPinTooOldPopup;
      }, "NewsletterPinTooOldPopup");
    ((l.NewsletterMessageNotFoundPopupLoadable = s),
      (l.NewsletterMessageDeletedPopupLoadable = u),
      (l.NewsletterPinTooOldPopupLoadable = c));
  },
  98,
);
