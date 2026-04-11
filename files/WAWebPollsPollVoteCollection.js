__d(
  "WAWebPollsPollVoteCollection",
  [
    "WANullthrows",
    "WAWebApiContact",
    "WAWebBaseCollection",
    "WAWebLidMigrationUtils",
    "WAWebMaybe",
    "WAWebPollsPollVoteModel",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.getVoteFromSenderAddressingModeInsensitive = function (t) {
          var e = o("WAWebApiContact").getAlternateUserWid(
            o("WAWebWidFactory").asUserWidOrThrow(t),
          );
          return this.findFirst(function (n) {
            return n.sender.equals(t) || n.sender.equals(e);
          });
        }),
        (n.getUnreadCount = function () {
          return this.countWhere(function (e) {
            return (
              e.selectedOptionLocalIds.length > 0 &&
              !e.read &&
              !o("WAWebUserPrefsMeUser").isMeAccount(e.sender)
            );
          });
        }),
        (n.getVoteCount = function () {
          return this.countWhere(function (e) {
            return e.selectedOptionLocalIds.length > 0;
          });
        }),
        t
      );
    })(o("WAWebBaseCollection").BaseCollection);
    e.model = o("WAWebPollsPollVoteModel").PollVote;
    var s = (function (t) {
      function n() {
        for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
          r[o] = arguments[o];
        return (
          (e = t.call.apply(t, [this].concat(r)) || this),
          (e.$PollVoteCollectionImpl$p_1 = new Map()),
          babelHelpers.assertThisInitialized(e) ||
            babelHelpers.assertThisInitialized(e)
        );
      }
      babelHelpers.inheritsLoose(n, t);
      var r = n.prototype;
      return (
        (r.add = function (n, r) {
          var e = t.prototype.add.call(this, n, r),
            o = m(e.filter(Boolean));
          for (var a of o) {
            var i = a[0],
              l = a[1],
              s = this.getForParentAddressingModeInsensitive([i]),
              u = s[0];
            u.add(l);
          }
          return e;
        }),
        (r.remove = function (n, r) {
          var e = t.prototype.remove.call(this, n, r),
            o = m(e.filter(Boolean));
          for (var a of o) {
            var i = a[0],
              l = a[1];
            this.getForParentAddressingModeInsensitive([i])[0].remove(l);
          }
          return e;
        }),
        (r.reset = function () {
          t.prototype.reset.call(this);
          for (var e of this.$PollVoteCollectionImpl$p_1.values()) e.reset();
          this.$PollVoteCollectionImpl$p_1.clear();
        }),
        (r.getForParentAddressingModeInsensitive = function (t) {
          var e = this;
          return t.map(function (t) {
            return e.$PollVoteCollectionImpl$p_2(t);
          });
        }),
        (r.$PollVoteCollectionImpl$p_2 = function (n) {
          var t,
            r = this,
            a =
              (t = this.$PollVoteCollectionImpl$p_1.get(n.toString())) != null
                ? t
                : o("WAWebMaybe").ifSome(
                    o("WAWebLidMigrationUtils").getAlternateMsgKey(n),
                    function (e) {
                      return r.$PollVoteCollectionImpl$p_1.get(e.toString());
                    },
                  );
          return (
            a == null &&
              ((a = new e()),
              a.add(
                this.filter(function (e) {
                  return e.parentMsgKey.equals(n);
                }),
              ),
              this.$PollVoteCollectionImpl$p_1.set(n.toString(), a)),
            a
          );
        }),
        (r.getByMsgKey = function (t) {
          return this.get(u(t));
        }),
        n
      );
    })(o("WAWebBaseCollection").BaseCollection);
    s.model = o("WAWebPollsPollVoteModel").PollVote;
    function u(e) {
      return "!!" + e.toString();
    }
    function c(e) {
      return new (o("WAWebPollsPollVoteModel").PollVote)(
        babelHelpers.extends({ id: u(e.msgKey) }, e),
      );
    }
    var d = new s();
    function m(e) {
      var t = new Map();
      return (
        e &&
          e.forEach(function (e) {
            var n = e.parentMsgKey;
            (t.has(n) || t.set(n, []), r("WANullthrows")(t.get(n)).push(e));
          }),
        t
      );
    }
    ((l.GroupedPollVoteCollection = e),
      (l.createPollVoteModel = c),
      (l.PollVoteCollection = d));
  },
  98,
);
