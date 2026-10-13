__d(
  "WAWebPremiumMessageModel",
  [
    "WAWebBaseModel",
    "WAWebMsgCollection",
    "WAWebPremiumMessageHydrateMessageAction",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.id = o("WAWebBaseModel").prop()),
          (t.name = o("WAWebBaseModel").prop()),
          (t.type = o("WAWebBaseModel").prop()),
          (t.message = o("WAWebBaseModel").prop()),
          (t.isDeleted = o("WAWebBaseModel").prop()),
          (t.sentMessageIds = o("WAWebBaseModel").prop()),
          (t.mediaId = o("WAWebBaseModel").prop()),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.initialize = function () {
          var t = this;
          e.prototype.initialize.call(this);
          var n = function () {
            return t.hydrateMessages();
          };
          (this.listenTo(this, "change:message", n),
            this.listenTo(this, "change:sentMessageIds", n),
            this.listenTo(this, "change:type", n));
        }),
        (n.hydrateMessages = function () {
          var e = this;
          o("WAWebMsgCollection")
            .MsgCollection.getModelsArray()
            .filter(function (t) {
              return t.smbClientCampaignId === e.id;
            })
            .forEach(function (t) {
              o(
                "WAWebPremiumMessageHydrateMessageAction",
              ).hydratePremiumMessage(t, e);
            });
        }),
        t
      );
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "premium_message";
    var s = o("WAWebBaseModel").defineModel(e);
    l.PremiumMessage = s;
  },
  98,
);
