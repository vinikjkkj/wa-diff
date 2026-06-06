__d(
  "WAWebHandlePlaceholderWam",
  [
    "Promise",
    "WATimeUtils",
    "WAWebDBGroupsGroupMetadata",
    "WAWebDBMessageSerialization",
    "WAWebGroupType",
    "WAWebHandlePlaceholderMsgKeyHashUtils",
    "WAWebMsgGetters",
    "WAWebPlaceholderActivityWamEvent",
    "WAWebWamEnumE2eDeviceType",
    "WAWebWamEnumEncryptionTypeCode",
    "WAWebWamEnumPlaceholderAction",
    "WAWebWamEnumPlaceholderChatType",
    "WAWebWamEnumPlaceholderType",
    "WAWebWamGroupMetadataMetricUtils",
    "WAWebWamGroupMetricCache",
    "WAWebWamMsgUtils",
    "WAWebWid",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield g(
            e,
            o("WAWebWamEnumPlaceholderAction").PLACEHOLDER_ACTION.ADD,
          );
          t.forEach(function (e) {
            return e.commit();
          });
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.map(function (e) {
              return o("WAWebDBMessageSerialization").messageFromDbRow(e);
            }),
            n = yield g(
              t,
              o("WAWebWamEnumPlaceholderAction").PLACEHOLDER_ACTION.VIEW,
            );
          n.forEach(function (e) {
            return e.commit();
          });
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield g(
            e,
            o("WAWebWamEnumPlaceholderAction").PLACEHOLDER_ACTION.POPULATE,
          );
          t.forEach(function (e) {
            return e.commit();
          });
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
          var a,
            i = e.id.remote,
            l = !!(t != null && t.isLidAddressingMode),
            s = o("WAWebWamMsgUtils").msgIsLid(e, i, l),
            u = new (o(
              "WAWebPlaceholderActivityWamEvent",
            ).PlaceholderActivityWamEvent)({
              placeholderChatTypeInd: S(i),
              placeholderTimePeriod: Math.max(
                o("WATimeUtils").unixTime() - ((a = e.t) != null ? a : 0),
                0,
              ),
              placeholderActionInd: n,
              placeholderTypeInd:
                e.subtype === "fanout"
                  ? o("WAWebWamEnumPlaceholderType").PLACEHOLDER_TYPE.FANOUT
                  : o("WAWebWamEnumPlaceholderType").PLACEHOLDER_TYPE
                      .CIPHERTEXT,
              messageIsRevoke: o("WAWebMsgGetters").getIsRevoke(e),
              messageMediaType: o("WAWebWamMsgUtils").getWamMediaType(e),
              messageType: o("WAWebWamMsgUtils").getWamMessageType(e),
              isLid: s,
            });
          return (
            e.placeholderAddReason != null &&
              (u.placeholderAddReason = e.placeholderAddReason),
            n ===
              o("WAWebWamEnumPlaceholderAction").PLACEHOLDER_ACTION.POPULATE &&
              e.placeholderPopulationType != null &&
              (u.placeholderPopulationType = e.placeholderPopulationType),
            e.e2eSenderType != null && (u.e2eSenderType = e.e2eSenderType),
            (e.e2eSenderType ===
              o("WAWebWamEnumE2eDeviceType").E2E_DEVICE_TYPE
                .MY_HOSTED_COMPANION ||
              e.e2eSenderType ===
                o("WAWebWamEnumE2eDeviceType").E2E_DEVICE_TYPE
                  .OTHER_HOSTED_COMPANION) &&
              (u.encryptionType = o(
                "WAWebWamEnumEncryptionTypeCode",
              ).ENCRYPTION_TYPE_CODE.COEX),
            r("WAWebWid").isGroup(i)
              ? yield y(u, e, t)
              : r("WAWebWid").isUser(i) && (u.isLid = i.isLid()),
            yield b(u, e),
            u
          );
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          var a = [],
            i = [];
          for (var l of t)
            R(l) &&
              (o("WAWebMsgGetters").getIsGroupMsg(l) ? i.push(l) : a.push(l));
          var s = (yield o("WAWebDBGroupsGroupMetadata").bulkGetGroupMetadata(
            i.map(function (e) {
              return e.id.remote;
            }),
          )).map(function (e, t) {
            return [i[t], e];
          });
          return (e || (e = n("Promise"))).all(
            [].concat(
              a.map(function (e) {
                return _(e, null, r);
              }),
              s.map(function (e) {
                var t = e[0],
                  n = e[1];
                return _(t, n, r);
              }),
            ),
          );
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t, n) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield o("WAWebWamGroupMetricCache").getGroupMetrics(
            t.id.remote,
          );
          if (
            (r != null &&
              (r.participantCount != null &&
                (e.participantCount = r.participantCount),
              r.deviceCount != null && (e.deviceCount = r.deviceCount),
              r.deviceSizeBucket != null &&
                (e.deviceSizeBucket = r.deviceSizeBucket)),
            n)
          ) {
            var a = o(
              "WAWebWamGroupMetadataMetricUtils",
            ).isCagFromGroupMetadata(n);
            ((e.isLid = a && o("WAWebMsgGetters").getIsReaction(t)),
              (e.typeOfGroup = o("WAWebGroupType").groupTypeToWamEnum(
                o("WAWebGroupType").getGroupTypeFromGroupMetadata(n),
              )));
          }
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (
            o("WAWebHandlePlaceholderMsgKeyHashUtils").messageKeyHashEnabled()
          ) {
            var n = yield o(
              "WAWebHandlePlaceholderMsgKeyHashUtils",
            ).getMessageKeyHash(t);
            n != null && (e.messageKeyHash = n);
          }
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return r("WAWebWid").isGroup(e)
        ? o("WAWebWamEnumPlaceholderChatType").PLACEHOLDER_CHAT_TYPE.GROUP
        : r("WAWebWid").isStatus(e)
          ? o("WAWebWamEnumPlaceholderChatType").PLACEHOLDER_CHAT_TYPE.STATUS
          : r("WAWebWid").isBroadcast(e)
            ? o("WAWebWamEnumPlaceholderChatType").PLACEHOLDER_CHAT_TYPE
                .BROADCAST
            : r("WAWebWid").isUser(e)
              ? o("WAWebWamEnumPlaceholderChatType").PLACEHOLDER_CHAT_TYPE
                  .INDIVIDUAL
              : r("WAWebWid").isNewsletter(e)
                ? o("WAWebWamEnumPlaceholderChatType").PLACEHOLDER_CHAT_TYPE
                    .CHANNEL
                : o("WAWebWamEnumPlaceholderChatType").PLACEHOLDER_CHAT_TYPE
                    .OTHER;
    }
    function R(e) {
      return e.subtype !== "view_once_unavailable_fanout";
    }
    ((l.postPlaceholderActivityAddEvent = s),
      (l.postPlaceholderActivityViewEvent = c),
      (l.postPlaceholderActivityPopulateEvent = m));
  },
  98,
);
