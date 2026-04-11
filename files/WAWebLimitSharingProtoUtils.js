__d(
  "WAWebLimitSharingProtoUtils",
  [
    "WAWebCommonMsgSubtypeTypes",
    "WAWebLimitSharingGatingUtils",
    "WAWebLimitSharingModelUtils",
    "WAWebLimitSharingPropMappingUtils",
    "WAWebMsgType",
    "WAWebParseLimitSharingHistorySyncProto",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return {
        sharingLimited: e.limitSharing,
        trigger: o(
          "WAWebLimitSharingPropMappingUtils",
        ).getLimitSharingTriggerFromHistorySyncStubParameter(
          String(e.limitSharingTrigger),
        ),
        initiatedByMe: e.limitSharingInitiatedByMe,
        limitSharingSettingTimestamp: e.limitSharingSettingTimestamp,
      };
    }
    function s(e, t, n) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r, a;
          if (
            !o("WAWebLimitSharingGatingUtils").isOpusEnabled() &&
            !(
              t == null ||
              (e == null ? void 0 : e.from) == null ||
              (e == null || (r = e.id) == null ? void 0 : r.remote) == null
            )
          ) {
            var i = h(t);
            if (i) yield c(e, i);
            else if ((a = t.messageContextInfo) != null && a.limitSharingV2) {
              var l;
              yield m(
                e,
                (l = t.messageContextInfo) == null ? void 0 : l.limitSharingV2,
                n,
              );
            }
          }
        })),
        u.apply(this, arguments)
      );
    }
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o(
            "WAWebParseLimitSharingHistorySyncProto",
          ).getLimitSharingFromEnvelope(
            t,
            o("WAWebWidFactory").createWid(e.from.toString()),
          );
          ((e.type = o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE),
            (e.subtype = o(
              "WAWebCommonMsgSubtypeTypes",
            ).MsgSubtype.LimitSharingSystemMessage),
            (e.limitSharing = n),
            yield _(e.id.remote.toString(), n));
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t, n) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = o(
              "WAWebParseLimitSharingHistorySyncProto",
            ).getLimitSharingFromEnvelope(t),
            a = n === "history" ? "onValueChange" : "always";
          yield _(e.id.remote.toString(), r, a);
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t, n) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r;
          if (!o("WAWebLimitSharingGatingUtils").isOpusEnabled()) {
            var a = yield o("WAWebLimitSharingModelUtils").getChat(e);
            if (!(a == null || !g(t, a))) {
              var i = o("WAWebWidFactory").createWid(a.id),
                l =
                  n === "always" ||
                  (n === "onValueChange" &&
                    ((r = a.limitSharing) == null
                      ? void 0
                      : r.sharingLimited) !== t.sharingLimited);
              (l &&
                (yield o(
                  "WAWebLimitSharingModelUtils",
                ).genLimitSharingSystemMessage(i, t)),
                yield o("WAWebLimitSharingModelUtils").updateChat(i, t));
            }
          }
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      var n,
        r,
        o,
        a =
          (n = e == null ? void 0 : e.limitSharingSettingTimestamp) != null
            ? n
            : 0,
        i =
          (r =
            t == null || (o = t.limitSharing) == null
              ? void 0
              : o.limitSharingSettingTimestamp) != null
            ? r
            : 0;
      return Number(a) > Number(i);
    }
    function h(e) {
      var t;
      return (t = o(
        "WAWebParseLimitSharingHistorySyncProto",
      ).getLimitSharingEnvelopeFromProtobuf(e)) == null
        ? void 0
        : t.limitSharing;
    }
    ((l.getLimitSharingFromProtocolHistorySyncConversation = e),
      (l.parseLimitSharingFromMessage = s),
      (l.updateChatWithLimitSharingIfNewer = _),
      (l.isMoreRecentThanExistingLimitSharingSetting = g));
  },
  98,
);
