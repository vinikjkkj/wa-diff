__d(
  "WAWebNewsletterReactionModel",
  [
    "WATimeUtils",
    "WAWebBaseModel",
    "WAWebModelUtils",
    "WAWebMsgKey",
    "WAWebReactionsBEUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.id = o("WAWebModelUtils").prop()),
          (t.parentMsgServerId = o("WAWebModelUtils").prop()),
          (t.myReactionMsgKey = o("WAWebModelUtils").prop()),
          (t.reactionCountMap = o("WAWebModelUtils").prop()),
          (t.reactionCountMapTs = o("WAWebModelUtils").prop()),
          (t.myReaction = o("WAWebModelUtils").prop()),
          (t.myReactionTs = o("WAWebModelUtils").prop()),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.initialize = function () {
          var t;
          (e.prototype.initialize.call(this),
            (this.reactionCountMap =
              (t = this.reactionCountMap) != null ? t : new Map()));
        }),
        (n.updateMyReaction = function (t) {
          return t === o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT
            ? this.$NewsletterMessageReactionsImpl$p_1()
            : this.$NewsletterMessageReactionsImpl$p_2(t);
        }),
        (n.$NewsletterMessageReactionsImpl$p_2 = function (t) {
          var e,
            n = this.myReaction;
          this.reactionCountMap =
            (e = this.reactionCountMap) != null ? e : new Map();
          var r = this.reactionCountMap,
            o = r.get(t);
          r.set(t, (o != null ? o : 0) + 1);
          var a = n != null ? r.get(n) : null;
          if (a != null && n != null) {
            var i = a - 1;
            i > 0 ? r.set(n, i) : r.delete(n);
          }
          this.$NewsletterMessageReactionsImpl$p_3(t);
        }),
        (n.$NewsletterMessageReactionsImpl$p_1 = function () {
          var e,
            t = this.myReaction;
          if (t != null) {
            this.reactionCountMap =
              (e = this.reactionCountMap) != null ? e : new Map();
            var n = this.reactionCountMap,
              r = n.get(t);
            r != null &&
              (r > 1 ? n.set(t, r - 1) : n.delete(t),
              this.$NewsletterMessageReactionsImpl$p_3(null));
          }
        }),
        (n.$NewsletterMessageReactionsImpl$p_3 = function (t) {
          ((this.myReactionTs = o("WATimeUtils").unixTime()),
            (this.myReaction = t));
        }),
        t
      );
    })(o("WAWebBaseModel").BaseModel);
    ((e.Proxy = "newsletterReaction"), (e.idClass = r("WAWebMsgKey")));
    var s = o("WAWebBaseModel").defineModel(e);
    l.NewsletterMessageReactions = s;
  },
  98,
);
