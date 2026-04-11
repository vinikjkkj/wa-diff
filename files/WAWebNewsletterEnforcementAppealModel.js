__d(
  "WAWebNewsletterEnforcementAppealModel",
  ["WAWebBaseModel"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.id = o("WAWebBaseModel").prop()),
          (t.chatId = o("WAWebBaseModel").prop()),
          (t.enforcementViolationCategory = o("WAWebBaseModel").prop()),
          (t.enforcementType = o("WAWebBaseModel").prop()),
          (t.enforcementId = o("WAWebBaseModel").prop()),
          (t.enforcementSource = o("WAWebBaseModel").prop()),
          (t.countryCode = o("WAWebBaseModel").prop()),
          (t.enforcementExtraData = o("WAWebBaseModel").prop()),
          (t.enforcementPolicyInformation = o("WAWebBaseModel").prop()),
          (t.appealState = o("WAWebBaseModel").prop()),
          (t.appealCreationTime = o("WAWebBaseModel").prop()),
          (t.appealReason = o("WAWebBaseModel").prop()),
          (t.lastUpdated = o("WAWebBaseModel").prop()),
          (t.msgData = o("WAWebBaseModel").prop()),
          (t.violatingContentData = o("WAWebBaseModel").prop()),
          (t.additionalAppealReason = o("WAWebBaseModel").prop()),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.setAppealState = function (t) {
          this.appealState = t;
        }),
        (n.setAppealCreationTime = function (t) {
          this.appealCreationTime = t;
        }),
        (n.setAppealReason = function (t) {
          this.appealReason = t;
        }),
        (n.setAdditionalAppealReason = function (t) {
          this.additionalAppealReason = t;
        }),
        t
      );
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "newsletter_enforcement_appeal";
    var s = o("WAWebBaseModel").defineModel(e);
    l.NewsletterEnforcementAppeal = s;
  },
  98,
);
