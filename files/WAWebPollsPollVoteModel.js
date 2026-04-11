__d(
  "WAWebPollsPollVoteModel",
  [
    "WAWebAddOnModel",
    "WAWebBaseModel",
    "WAWebFrontendPollVoteGetters",
    "WAWebPollVoteGetters",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.id = o("WAWebBaseModel").prop()),
          (t.msgKey = o("WAWebBaseModel").prop()),
          (t.parentMsgKey = o("WAWebBaseModel").prop()),
          (t.selectedOptionLocalIds = o("WAWebBaseModel").prop()),
          (t.senderTimestampMs = o("WAWebBaseModel").prop()),
          (t.t = o("WAWebBaseModel").prop()),
          (t.sender = o("WAWebBaseModel").prop()),
          (t.read = o("WAWebBaseModel").prop()),
          (t.lastSuccessfulSelectedOptionLocalIds = o("WAWebBaseModel").prop()),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.delete = function () {
          (e.prototype.delete.call(this),
            o("WAWebPollVoteGetters").clearPollVoteGetterCacheFor(this),
            o(
              "WAWebFrontendPollVoteGetters",
            ).clearFrontendPollVoteGetterCacheFor(this));
        }),
        (n.getData = function () {
          return {
            msgKey: this.msgKey,
            parentMsgKey: this.parentMsgKey,
            selectedOptionLocalIds: this.selectedOptionLocalIds,
            senderTimestampMs: this.senderTimestampMs,
            t: this.t,
            sender: this.sender,
            ack: this.ack,
            read: this.read,
            lastSuccessfulSelectedOptionLocalIds:
              this.lastSuccessfulSelectedOptionLocalIds,
          };
        }),
        t
      );
    })(o("WAWebAddOnModel").AddOnBaseModel);
    e.Proxy = "poll_vote";
    var s = o("WAWebBaseModel").defineModel(e);
    l.PollVote = s;
  },
  98,
);
