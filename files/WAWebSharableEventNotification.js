__d(
  "WAWebSharableEventNotification",
  [
    "fbt",
    "JSResourceForInteraction",
    "WALogger",
    "WAWebBaseNotification",
    "WAWebChatCollection",
    "WAWebContactCollection",
    "WAWebFbtCommon",
    "WAWebFrontendContactGetters",
    "WAWebLazyLoadedRetriable",
    "WAWebLidMigrationUtils",
    "WAWebNotificationIconUtils",
    "WAWebOpenSharableEventInviteNotSupportedModalAction",
    "WAWebSharableEventGatingUtils",
    "WAWebSharableEventNotificationConstants",
    "WAWebSharableEventNotificationStrings",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = (function (e) {
        function t(t) {
          var n,
            r = t.payload,
            a = t.type;
          return (
            (n = e.call(this) || this),
            (n.payload = r),
            (n.type = a),
            (n.senderWid =
              r.senderWidString != null
                ? o("WAWebWidFactory").createWid(r.senderWidString)
                : null),
            n
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var a = t.prototype;
        return (
          (a.buildKey = function () {
            return (
              "sharable_event:" +
              o("WAWebSharableEventNotificationConstants").getIdentifierTag(
                this.type,
              ) +
              ":" +
              this.payload.eventId
            );
          }),
          (a.getBannerOptions = function () {
            var e,
              t,
              n = this;
            return {
              wid:
                (e = this.senderWid) != null
                  ? e
                  : o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
              title: this.computeTitle(),
              body:
                (t = o(
                  "WAWebSharableEventNotificationStrings",
                ).formatSharableEventBody(this.computeBody())) != null
                  ? t
                  : "",
              onClick: function () {
                return void d(n.type, n.payload);
              },
              doNotOpenChat: !0,
            };
          }),
          (a.getSenderContact = function () {
            var e,
              t = this.senderWid;
            if (t == null) return null;
            var n = o("WAWebLidMigrationUtils").shouldHaveAccountLid(t)
              ? o("WAWebLidMigrationUtils").toLid(t)
              : null;
            if (n != null) {
              var r = o("WAWebContactCollection").ContactCollection.get(n);
              if (r != null) return r;
            }
            var a = (e = o("WAWebLidMigrationUtils").toPn(t)) != null ? e : t;
            return o("WAWebContactCollection").ContactCollection.get(a);
          }),
          (a.computeTitle = function () {
            var e;
            if (
              this.type ===
                o("WAWebSharableEventNotificationConstants")
                  .SharableEventNotificationType.GuestJoinedWa &&
              this.payload.title === ""
            ) {
              var t;
              return (t = this.getSenderDisplayName()) != null
                ? t
                : r("WAWebFbtCommon")("WhatsApp").toString();
            }
            return this.type ===
              o("WAWebSharableEventNotificationConstants")
                .SharableEventNotificationType.Suspended
              ? s._(/*BTDS*/ "Event suspended").toString()
              : o("WAWebSharableEventNotificationConstants").isSenderAttributed(
                    this.type,
                  )
                ? (e = this.getSenderDisplayName()) != null
                  ? e
                  : this.payload.title
                : this.payload.title;
          }),
          (a.computeBody = function () {
            var e,
              t = this.payload.body;
            return t.kind !== "guestJoinedWa"
              ? t
              : babelHelpers.extends({}, t, {
                  guestName:
                    (e = this.getSenderDisplayName()) != null ? e : t.guestName,
                });
          }),
          (a.getSenderDisplayName = function () {
            var e = this.getSenderContact(),
              t =
                e != null
                  ? o("WAWebFrontendContactGetters").getFormattedName(e)
                  : null;
            return t != null && t.length > 0 ? t : null;
          }),
          (a.getIcon = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e,
                t = this.senderWid;
              if (
                !o(
                  "WAWebSharableEventNotificationConstants",
                ).isSenderAttributed(this.type) ||
                t == null
              )
                return o("WAWebNotificationIconUtils").WHATSAPP_DEFAULT_ICON;
              var n = o(
                "WAWebChatCollection",
              ).ChatCollection.getLatestChatForWid(t);
              if (n != null)
                return o("WAWebNotificationIconUtils").getChatNotificationIcon(
                  n,
                  this.abortController.signal,
                  o("WAWebNotificationIconUtils").USER_DEFAULT_ICON,
                );
              var r = this.getSenderContact();
              return o("WAWebNotificationIconUtils").getNotificationIconByWid(
                (e = r == null ? void 0 : r.id) != null ? e : t,
                this.abortController.signal,
                o("WAWebNotificationIconUtils").USER_DEFAULT_ICON,
              );
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.getChatKind = function () {
            return null;
          }),
          t
        );
      })(o("WAWebBaseNotification").WABaseNotification),
      c = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return r("JSResourceForInteraction")(
            "WAWebOpenSharableEventPageAction",
          )
            .__setRef("WAWebSharableEventNotification")
            .load();
        }),
        "WAWebOpenSharableEventPageAction",
      );
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          if (
            !o("WAWebSharableEventGatingUtils").isEventsV2OnCompanionEnabled()
          ) {
            o(
              "WAWebOpenSharableEventInviteNotSupportedModalAction",
            ).openSharableEventInviteNotSupportedModal();
            return;
          }
          var a;
          try {
            a = yield c();
          } catch (t) {
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[sharable_event][notification] loading the Events tab failed",
                  ])),
              )
              .catching(r("getErrorSafe")(t));
            return;
          }
          var i = a,
            l = i.closeSharableEventPage,
            s = i.openSharableEventHome,
            u = i.openSharableEventInEventsHome;
          if (
            t ===
            o("WAWebSharableEventNotificationConstants")
              .SharableEventNotificationType.Delete
          ) {
            (s(), l());
            return;
          }
          u(n.eventId);
        })),
        m.apply(this, arguments)
      );
    }
    l.WAWebSharableEventNotification = u;
  },
  226,
);
