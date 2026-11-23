__d(
  "AdsLeadGenUtils",
  [
    "AdsLeadGenLinkDecorator",
    "AdsLeadGenPreviewConstants",
    "ContentState",
    "EditorState",
    "adsLeadGenFromApiCustomDisclaimerBody",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.get("custom_disclaimer_editor_state");
      t &&
        !(t instanceof r("EditorState")) &&
        (t = r("adsLeadGenFromApiCustomDisclaimerBody")(t));
      var n = t && t.getCurrentContent(),
        a = n && r("ContentState").createFromBlockArray(n.getBlocksAsArray()),
        i =
          a &&
          r("EditorState").createWithContent(a, r("AdsLeadGenLinkDecorator")),
        l = e.get("custom_disclaimer_consents"),
        s = null;
      return (
        l &&
          (s = l.toList().map(function (e) {
            return {
              consent: e.get("content"),
              is_required: e.get("is_required"),
            };
          })),
        {
          isNewDisclaimer: !0,
          itemType: o("AdsLeadGenPreviewConstants").DISCLAIMER,
          itemName: "Disclaimer",
          disclaimerConsents: s,
          disclaimerTitle: e.get("custom_disclaimer_title"),
          linkText: e.get("privacy_policy_link_text"),
          options: [i],
        }
      );
    }
    l.getNewCustomDisclaimerContents = e;
  },
  98,
);
