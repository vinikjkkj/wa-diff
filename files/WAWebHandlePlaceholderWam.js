__d(
  "WAWebHandlePlaceholderWam",
  [
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
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = await d(
        e,
        o("WAWebWamEnumPlaceholderAction").PLACEHOLDER_ACTION.ADD,
      );
      t.forEach(function (e) {
        return e.commit();
      });
    }
    async function s(e) {
      var t = e.map(function (e) {
          return o("WAWebDBMessageSerialization").messageFromDbRow(e);
        }),
        n = await d(
          t,
          o("WAWebWamEnumPlaceholderAction").PLACEHOLDER_ACTION.VIEW,
        );
      n.forEach(function (e) {
        return e.commit();
      });
    }
    async function u(e) {
      var t = await d(
        e,
        o("WAWebWamEnumPlaceholderAction").PLACEHOLDER_ACTION.POPULATE,
      );
      t.forEach(function (e) {
        return e.commit();
      });
    }
    async function c(e, t, n) {
      var a,
        i = e.id.remote,
        l = !!(t != null && t.isLidAddressingMode),
        s = o("WAWebWamMsgUtils").msgIsLid(e, i, l),
        u = new (o(
          "WAWebPlaceholderActivityWamEvent",
        ).PlaceholderActivityWamEvent)({
          placeholderChatTypeInd: _(i),
          placeholderTimePeriod: Math.max(
            o("WATimeUtils").unixTime() - ((a = e.t) != null ? a : 0),
            0,
          ),
          placeholderActionInd: n,
          placeholderTypeInd:
            e.subtype === "fanout"
              ? o("WAWebWamEnumPlaceholderType").PLACEHOLDER_TYPE.FANOUT
              : o("WAWebWamEnumPlaceholderType").PLACEHOLDER_TYPE.CIPHERTEXT,
          messageIsRevoke: o("WAWebMsgGetters").getIsRevoke(e),
          messageMediaType: o("WAWebWamMsgUtils").getWamMediaType(e),
          messageType: o("WAWebWamMsgUtils").getWamMessageType(e),
          isLid: s,
        });
      return (
        e.placeholderAddReason != null &&
          (u.placeholderAddReason = e.placeholderAddReason),
        n === o("WAWebWamEnumPlaceholderAction").PLACEHOLDER_ACTION.POPULATE &&
          e.placeholderPopulationType != null &&
          (u.placeholderPopulationType = e.placeholderPopulationType),
        e.e2eSenderType != null && (u.e2eSenderType = e.e2eSenderType),
        (e.e2eSenderType ===
          o("WAWebWamEnumE2eDeviceType").E2E_DEVICE_TYPE.MY_HOSTED_COMPANION ||
          e.e2eSenderType ===
            o("WAWebWamEnumE2eDeviceType").E2E_DEVICE_TYPE
              .OTHER_HOSTED_COMPANION) &&
          (u.encryptionType = o(
            "WAWebWamEnumEncryptionTypeCode",
          ).ENCRYPTION_TYPE_CODE.COEX),
        r("WAWebWid").isGroup(i)
          ? await m(u, e, t)
          : r("WAWebWid").isUser(i) && (u.isLid = i.isLid()),
        await p(u, e),
        u
      );
    }
    async function d(e, t) {
      var n = [],
        r = [];
      for (var a of e)
        f(a) && (o("WAWebMsgGetters").getIsGroupMsg(a) ? r.push(a) : n.push(a));
      var i = (
        await o("WAWebDBGroupsGroupMetadata").bulkGetGroupMetadata(
          r.map(function (e) {
            return e.id.remote;
          }),
        )
      ).map(function (e, t) {
        return [r[t], e];
      });
      return Promise.all(
        [].concat(
          n.map(function (e) {
            return c(e, null, t);
          }),
          i.map(function (e) {
            var n = e[0],
              r = e[1];
            return c(n, r, t);
          }),
        ),
      );
    }
    async function m(e, t, n) {
      var r = await o("WAWebWamGroupMetricCache").getGroupMetrics(t.id.remote);
      if (
        (r != null &&
          (r.participantCount != null &&
            (e.participantCount = r.participantCount),
          r.deviceCount != null && (e.deviceCount = r.deviceCount),
          r.deviceSizeBucket != null &&
            (e.deviceSizeBucket = r.deviceSizeBucket)),
        n)
      ) {
        var a = o("WAWebWamGroupMetadataMetricUtils").isCagFromGroupMetadata(n);
        ((e.isLid = a && o("WAWebMsgGetters").getIsReaction(t)),
          (e.typeOfGroup = o("WAWebGroupType").groupTypeToWamEnum(
            o("WAWebGroupType").getGroupTypeFromGroupMetadata(n),
          )));
      }
    }
    async function p(e, t) {
      if (o("WAWebHandlePlaceholderMsgKeyHashUtils").messageKeyHashEnabled()) {
        var n = await o(
          "WAWebHandlePlaceholderMsgKeyHashUtils",
        ).getMessageKeyHash(t);
        n != null && (e.messageKeyHash = n);
      }
    }
    function _(e) {
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
    function f(e) {
      return e.subtype !== "view_once_unavailable_fanout";
    }
    ((l.postPlaceholderActivityAddEvent = e),
      (l.postPlaceholderActivityViewEvent = s),
      (l.postPlaceholderActivityPopulateEvent = u));
  },
  98,
);
