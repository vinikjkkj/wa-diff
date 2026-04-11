__d(
  "WAWebNewsletterQuestionResponseModel",
  ["WAWebAck", "WAWebAddOnModel", "WAWebBaseModel"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.parentMsgKey = o("WAWebBaseModel").prop()),
          (t.t = o("WAWebBaseModel").prop()),
          (t.body = o("WAWebBaseModel").prop()),
          (t.id = o("WAWebBaseModel").prop()),
          (t.responseServerId = o("WAWebBaseModel").prop()),
          (t.questionServerId = o("WAWebBaseModel").prop()),
          (t.senderNotifyName = o("WAWebBaseModel").prop()),
          (t.replied = o("WAWebBaseModel").prop(!1)),
          (t.senderPictureDirectPath = o("WAWebBaseModel").prop()),
          (t.isSentByMe = o("WAWebBaseModel").prop(!1)),
          (t.senderId = o("WAWebBaseModel").prop()),
          (t.isSendFailure = o("WAWebBaseModel").prop()),
          (t.isFailed = o("WAWebBaseModel").derived(
            function () {
              var e =
                this.isSentByMe &&
                this.ack != null &&
                this.ack < o("WAWebAck").ACK.CLOCK;
              return e || !!this.isSendFailure;
            },
            ["ack", "isSendFailure"],
          )),
          (t.links = o("WAWebBaseModel").session(function () {
            return [];
          })),
          (t.linksIndexParsed = o("WAWebBaseModel").session(0)),
          (t.phoneNumbers = o("WAWebBaseModel").session(function () {
            return [];
          })),
          (t.phoneNumbersIndexParsed = o("WAWebBaseModel").session(0)),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(o("WAWebAddOnModel").AddOnBaseModel);
    e.Proxy = "newsletterQuestionResponse";
    var s = o("WAWebBaseModel").defineModel(e);
    l.NewsletterQuestionResponse = s;
  },
  98,
);
