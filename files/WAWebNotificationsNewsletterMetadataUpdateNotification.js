__d(
  "WAWebNotificationsNewsletterMetadataUpdateNotification",
  [
    "fbt",
    "WATimeUtils",
    "WAWebBaseNotification",
    "WAWebChatFlowTypes",
    "WAWebCmd",
    "WAWebContactCollection",
    "WAWebFbtIntlList",
    "WAWebInfoFlowStep",
    "WAWebNotificationHelpers",
    "WAWebNotificationIconUtils",
    "WAWebParticipantListUtils",
    "WAWebWidFormat",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = (function (e) {
      function t(t) {
        var n;
        return (
          (n = e.call(this) || this),
          (n.updates = t.updates),
          (n.user = t.user),
          (n.chat = t.chat),
          n
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var r = t.prototype;
      return (
        (r.buildKey = function () {
          return (
            "newslowner:" +
            this.chat.id.toString() +
            ":" +
            this.user.toString() +
            ":" +
            o("WATimeUtils").unixTime().toString()
          );
        }),
        (r.shouldPlaySound = function () {
          return e.prototype.shouldPlaySound.call(this)
            ? o("WAWebNotificationHelpers").shouldPlaySoundGranular(this.chat)
            : !1;
        }),
        (r.shouldShowBanner = function () {
          return e.prototype.shouldShowBanner.call(this)
            ? o("WAWebNotificationHelpers").shouldEnableNotificationGranular(
                this.chat,
              )
            : !1;
        }),
        (r.getBannerOptions = function () {
          var e = this,
            t = this.updates.some(function (e) {
              var t = e.item;
              return t === "reaction_setting";
            })
              ? o("WAWebInfoFlowStep").InfoFlowStep.NewsletterSettings
              : o("WAWebInfoFlowStep").InfoFlowStep.NewsletterInfo;
          return {
            wid: this.chat.id,
            title: this.chat.name,
            body: this.getNotificationBody(),
            onClick: function () {
              o("WAWebCmd").Cmd.openNewsletterProfile(e.chat, t);
            },
          };
        }),
        (r.getNotificationBody = function () {
          var e = this.getActor();
          return c(e, this.updates).toString();
        }),
        (r.getActor = function () {
          var e = o("WAWebContactCollection").ContactCollection.get(this.user);
          return e != null
            ? o("WAWebParticipantListUtils").getFirstNameForContact(e)
            : o("WAWebWidFormat").widToFormattedUser(this.user);
        }),
        (r.getIcon = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            return o("WAWebNotificationIconUtils").getChatNotificationIcon(
              this.chat,
              this.abortController.signal,
            );
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (r.matchesChat = function (t) {
          return t.equals(this.chat);
        }),
        (r.getChatKind = function () {
          return o("WAWebChatFlowTypes").ChatKindType.Newsletter;
        }),
        t
      );
    })(o("WAWebBaseNotification").WABaseNotification);
    function u(e) {
      switch (e) {
        case "name":
          return s._(/*BTDS*/ "name");
        case "description":
          return s._(/*BTDS*/ "description");
        case "profile_picture":
          return s._(/*BTDS*/ "profile picture");
        case "reaction_setting":
          return s._(/*BTDS*/ "reaction settings");
      }
    }
    function c(e, t) {
      if (t.length === 1 && t[0].item === "name") {
        var n = t[0].value;
        return s._(
          /*BTDS*/ '{actor} changed the channel name to "{updateValue}".',
          [s._param("actor", e), s._param("updateValue", n)],
        );
      }
      var o = t.map(function (e) {
          var t = e.item;
          return u(t);
        }),
        a = r("WAWebFbtIntlList")(
          o,
          r("WAWebFbtIntlList").CONJUNCTIONS.AND,
          r("WAWebFbtIntlList").DELIMITERS.COMMA,
        );
      return s._(/*BTDS*/ "{actor} changed the channel {update}.", [
        s._param("actor", e),
        s._param("update", a.toString()),
      ]);
    }
    l.WANewsletterMetadataUpdateNotification = e;
  },
  226,
);
