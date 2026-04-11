__d(
  "WAWebCommentModel",
  ["WAWebAck", "WAWebAddOnModel", "WAWebBaseModel", "WAWebUserPrefsMeUser"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.parentMsgKey = o("WAWebBaseModel").prop()),
          (t.t = o("WAWebBaseModel").prop()),
          (t.author = o("WAWebBaseModel").prop()),
          (t.read = o("WAWebBaseModel").prop()),
          (t.ack = o("WAWebBaseModel").prop()),
          (t.body = o("WAWebBaseModel").prop()),
          (t.id = o("WAWebBaseModel").prop()),
          (t.isSendFailure = o("WAWebBaseModel").prop()),
          (t.isFailed = o("WAWebBaseModel").derived(
            function () {
              var e =
                o("WAWebUserPrefsMeUser").isMeAccount(this.author) &&
                this.ack != null &&
                this.ack < o("WAWebAck").ACK.CLOCK;
              return e || !!this.isSendFailure;
            },
            ["ack", "isSendFailure"],
          )),
          (t.subtype = o("WAWebBaseModel").prop()),
          (t.protocolMessageKey = o("WAWebBaseModel").prop()),
          (t.revokeTimestamp = o("WAWebBaseModel").prop()),
          (t.isOverwrittenByRevoke = o("WAWebBaseModel").prop()),
          (t.revokeSender = o("WAWebBaseModel").session()),
          (t.startOfDaySkew = o("WAWebBaseModel").session()),
          (t.startOfDay = o("WAWebBaseModel").session()),
          (t.links = o("WAWebBaseModel").session(function () {
            return [];
          })),
          (t.linksIndexParsed = o("WAWebBaseModel").session(0)),
          (t.phoneNumbers = o("WAWebBaseModel").session(function () {
            return [];
          })),
          (t.phoneNumbersIndexParsed = o("WAWebBaseModel").session(0)),
          (t.type = o("WAWebBaseModel").prop()),
          (t.messageSecret = o("WAWebBaseModel").prop()),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(o("WAWebAddOnModel").AddOnBaseModel);
    e.Proxy = "comment";
    var s = o("WAWebBaseModel").defineModel(e);
    l.Comment = s;
  },
  98,
);
