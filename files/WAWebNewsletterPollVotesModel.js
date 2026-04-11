__d(
  "WAWebNewsletterPollVotesModel",
  [
    "WATimeUtils",
    "WAWebAddOnModel",
    "WAWebBaseModel",
    "WAWebFrontendNewsletterPollVotesGetters",
    "WAWebModelUtils",
    "WAWebMsgKey",
    "WAWebNewsletterPollVotesGetters",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.id = o("WAWebModelUtils").prop()),
          (t.pollVotesCountMap = o("WAWebModelUtils").prop(function () {
            return new Map();
          })),
          (t.pollVotesCountMapTs = o("WAWebModelUtils").prop()),
          (t.myVote = o("WAWebModelUtils").prop(function () {
            return new Set();
          })),
          (t.myVoteTs = o("WAWebModelUtils").prop()),
          (t.isUnvote = o("WAWebModelUtils").prop(!1)),
          (t.msgKey = o("WAWebModelUtils").prop()),
          (t.pollVotersMap = o("WAWebModelUtils").prop(function () {
            return new Map();
          })),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.delete = function () {
          (e.prototype.delete.call(this),
            o(
              "WAWebNewsletterPollVotesGetters",
            ).clearNewsletterPollVotesGetterCacheFor(this),
            o(
              "WAWebFrontendNewsletterPollVotesGetters",
            ).clearFrontendNewsletterPollVotesGetterCacheFor(this));
        }),
        (n.updateMyVote = function (t, n, r) {
          var e, a, i;
          if (!(n < ((e = this.myVoteTs) != null ? e : 0))) {
            var l = (a = this.myVote) != null ? a : new Set(),
              s = (i = this.pollVotesCountMap) != null ? i : new Map();
            (l.forEach(function (e) {
              var t,
                n = (t = s.get(e)) != null ? t : 0;
              s.set(e, Math.max(n - 1, 0));
            }),
              t.forEach(function (e) {
                var t,
                  n = (t = s.get(e)) != null ? t : 0;
                s.set(e, n + 1);
              }),
              (this.msgKey = r),
              (this.pollVotesCountMap = s),
              (this.myVote = t),
              (this.myVoteTs = o("WATimeUtils").castToMillisTime(n)));
          }
        }),
        (n.updatePollVotersMap = function (t, n) {
          if (n == null) {
            this.pollVotersMap = t;
            return;
          }
          var e = t.get(n);
          if (e != null) {
            var r = new Map(this.pollVotersMap);
            (r.set(n, e), (this.pollVotersMap = r));
          }
        }),
        t
      );
    })(o("WAWebAddOnModel").AddOnBaseModel);
    ((e.Proxy = "newsletterPollVote"), (e.idClass = r("WAWebMsgKey")));
    var s = o("WAWebBaseModel").defineModel(e);
    l.NewsletterPollVotes = s;
  },
  98,
);
