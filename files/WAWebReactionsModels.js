__d(
  "WAWebReactionsModels",
  [
    "WAWebAck",
    "WAWebAddOnModel",
    "WAWebBaseModel",
    "WAWebCollection",
    "WAWebContactCollection",
    "WAWebMsgCollection",
    "WAWebMsgKey",
    "WAWebReactionsCollection",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "WAWebWidFactory",
    "lodash",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.id = o("WAWebBaseModel").prop()),
            (t.msgKey = o("WAWebBaseModel").prop()),
            (t.parentMsgKey = o("WAWebBaseModel").prop()),
            (t.reactionText = o("WAWebBaseModel").prop()),
            (t.timestamp = o("WAWebBaseModel").prop()),
            (t.senderUserJid = o("WAWebBaseModel").prop()),
            (t.read = o("WAWebBaseModel").prop()),
            (t.orphan = o("WAWebBaseModel").prop()),
            (t.isFailed = o("WAWebBaseModel").derived(
              function () {
                if (this.id.remote.isNewsletter()) return !1;
                var e =
                  o("WAWebUserPrefsMeUser").isSerializedWidMe(
                    this.senderUserJid,
                  ) &&
                  this.ack != null &&
                  this.ack < o("WAWebAck").ACK.CLOCK;
                return e || !!this.isSendFailure;
              },
              ["ack", "isSendFailure"],
            )),
            (t.senderObj = o("WAWebBaseModel").session()),
            (t.parentMsg = o("WAWebBaseModel").derived(function () {
              return this.$ReactionsSendersSkeleton$p_1().assertGet(
                this.parentMsgKey,
              );
            })),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.initialize = function () {
            if (
              (e.prototype.initialize.call(this),
              !r("WAWebWid").isNewsletter(this.senderUserJid))
            ) {
              var t = o("WAWebContactCollection").ContactCollection.gadd(
                o("WAWebWidFactory").createUserWidOrThrow(this.senderUserJid),
              );
              this.addChild("senderObj", t);
            }
          }),
          (n.$ReactionsSendersSkeleton$p_1 = function () {
            return o("WAWebMsgCollection").MsgCollection;
          }),
          (n.isEqual = function (t) {
            return this.id.equals(t.id);
          }),
          t
        );
      })(o("WAWebAddOnModel").AddOnBaseModel);
    ((s.Proxy = "reactionsSenders"), (s.idClass = r("WAWebMsgKey")));
    var u = (e = o("WAWebBaseModel")).defineModel(s),
      c = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(r("WAWebCollection"));
    ((c.model = u),
      (c.comparator = function (e, t) {
        return o("WAWebUserPrefsMeUser").isSerializedWidMe(e.senderUserJid)
          ? -1
          : o("WAWebUserPrefsMeUser").isSerializedWidMe(t.senderUserJid)
            ? 1
            : t.timestamp - e.timestamp;
      }));
    var d = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.id = o("WAWebBaseModel").prop()),
          (t.aggregateEmoji = o("WAWebBaseModel").prop()),
          (t.hasReactionByMe = o("WAWebBaseModel").prop()),
          (t.senders = o("WAWebBaseModel").collection(c)),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(e.BaseModel);
    d.Proxy = "aggReactions";
    var m = e.defineModel(d),
      p = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(r("WAWebCollection"));
    ((p.model = m),
      (p.comparator = function (e, t) {
        var n = t.senders.length - e.senders.length;
        if (e.hasReactionByMe) return -1;
        if (t.hasReactionByMe) return 1;
        if (n === 0) {
          var r = t.senders.at(0),
            o = e.senders.at(0);
          if (r && o) return r.timestamp - o.timestamp;
        }
        return n;
      }));
    var _ = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.id = o("WAWebBaseModel").prop()),
          (t.reactionByMe = o("WAWebBaseModel").prop()),
          (t.reactions = o("WAWebBaseModel").collection(p)),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.unreadSenders = function () {
          return r("lodash")
            .flatMap(this.reactions.toArray(), function (e) {
              return e.senders.toArray();
            })
            .filter(function (e) {
              return (
                !e.read &&
                !o("WAWebUserPrefsMeUser").isSerializedWidMe(e.senderUserJid)
              );
            });
        }),
        (n.getReactionSenderModel = function (t, n) {
          var e = this.reactions.get(t),
            r =
              e == null
                ? void 0
                : e.senders.findFirst(function (e) {
                    return e.senderUserJid === n;
                  });
          return r;
        }),
        (n.getCollection = function () {
          return o("WAWebReactionsCollection").ReactionsCollection;
        }),
        t
      );
    })(e.BaseModel);
    ((_.Proxy = "reactions"), (_.idClass = r("WAWebMsgKey")));
    var f = e.defineModel(_);
    ((l.ReactionsSenders = u),
      (l.ReactionsSendersCollection = c),
      (l.AggReactions = m),
      (l.AggReactionsCollection = p),
      (l.Reactions = f));
  },
  98,
);
