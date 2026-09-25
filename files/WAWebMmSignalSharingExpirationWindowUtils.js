__d(
  "WAWebMmSignalSharingExpirationWindowUtils",
  [
    "$InternalEnum",
    "WATimeUtils",
    "WAWebBackendApi",
    "WAWebMmSignalSharingContextInfo",
    "WAWebMmSignalSharingGatingUtils",
    "WAWebMmSignalSharingLoggingEvents",
    "WAWebProtobufMsgKeyUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 1e3,
      s = n("$InternalEnum")({
        DISCLOSED_TOKEN: "data_sharing_encrypted_token_disclosed",
        UNDISCLOSED_TOKEN: "data_sharing_encrypted_token_undisclosed",
      });
    function u(e, t) {
      if (
        e.isForwarded ||
        !o(
          "WAWebMmSignalSharingGatingUtils",
        ).isMmSignalSharingDisclosureEnabled()
      )
        return !1;
      if (t) {
        var n = o(
            "WAWebMmSignalSharingContextInfo",
          ).getCappedMmSignalSharingContextInfo(t),
          r = d(n),
          a = o(
            "WAWebMmSignalSharingContextInfo",
          ).getMmSignalSharingContextInfoDisclosureFlag(n),
          i = o(
            "WAWebMmSignalSharingContextInfo",
          ).existsMmSignalSharingURlTrackingMapElements(n);
        if (
          r.disclosedToken != null ||
          r.undisclosedToken != null ||
          a != null ||
          i
        )
          return (
            (e.mmSignalSharing = babelHelpers.extends(
              {
                dataSharingFlags: a,
                existsDisclosedToken: !!r.disclosedToken,
                existsUndisclosedToken: !!r.undisclosedToken,
              },
              i
                ? {
                    urlTrackingMapElements: o(
                      "WAWebMmSignalSharingContextInfo",
                    ).getMmSignalSharingURLTrackingMapElements(n),
                  }
                : {},
            )),
            o("WAWebBackendApi").frontendFireAndForget(
              "updateMmSignalSharingExpirationWindow",
              { id: e.id.remote, msg: e, contextInfo: n },
            ),
            o(
              "WAWebMmSignalSharingLoggingEvents",
            ).logMmSignalSharingUpdateExpirationWindowEvent({
              msg: e,
              contextInfo: n,
            }),
            !0
          );
      }
      return !1;
    }
    function c(e) {
      var t = e.contextInfo,
        n = e.mmSignalSharingExpirationWindow,
        r = e.msgKey,
        a = e.msgTimeClient,
        i = e.msgTimeServer;
      if (
        !o(
          "WAWebMmSignalSharingGatingUtils",
        ).isMmSignalSharingDisclosureEnabled()
      )
        return null;
      var l = babelHelpers.extends(
        { unixTime: { client: a, server: i }, messageId: r },
        d(t),
      );
      return o(
        "WAWebMmSignalSharingGatingUtils",
      ).isMmSignalSharingOptimizedDeliveryMultipleCollectionWindowsEnabled()
        ? h(n, l)
        : [l];
    }
    function d(e) {
      var t,
        n = { disclosedToken: void 0, undisclosedToken: void 0 };
      if (
        !o(
          "WAWebMmSignalSharingGatingUtils",
        ).isMmSignalSharingDisclosureEnabled()
      )
        return n;
      var r =
        e == null || (t = e.dataSharingContext) == null ? void 0 : t.parameters;
      return r != null ? C(r, n) : n;
    }
    function m(e, t) {
      var n;
      if (
        !o(
          "WAWebMmSignalSharingGatingUtils",
        ).isMmSignalSharingDisclosureEnabled()
      )
        return null;
      var r =
        e == null ||
        (n = e.message) == null ||
        (n = n.interactiveMessage) == null
          ? void 0
          : n.contextInfo;
      return e != null &&
        e.key &&
        o(
          "WAWebMmSignalSharingContextInfo",
        ).existsMmSignalSharingContextInfoDisclosureFlag(r)
        ? c({
            contextInfo: r,
            mmSignalSharingExpirationWindow: t,
            msgKey: o("WAWebProtobufMsgKeyUtils").protobufToMsgKey(e.key),
            msgTimeClient: Number(e.messageTimestamp),
            msgTimeServer: Number(e.messageTimestamp),
          })
        : t;
    }
    function p(e) {
      return [].concat(e).reverse();
    }
    function _(e) {
      if (
        !o(
          "WAWebMmSignalSharingGatingUtils",
        ).isMmSignalSharingDisclosureEnabled()
      )
        return !1;
      var t = e == null ? void 0 : e[e.length - 1];
      return t != null && !f(t);
    }
    function f(e) {
      return (
        e.unixTime.server +
          o(
            "WAWebMmSignalSharingGatingUtils",
          ).getMmSignalSharingCollectionWindow() <
        o("WATimeUtils").unixTime()
      );
    }
    function g(e, t) {
      return e.unixTime.server + t * 3600 < o("WATimeUtils").unixTime();
    }
    function h(e, t) {
      var n = e != null ? e : [];
      for (var r of n != null ? n : []) y(r);
      return n
        .filter(function (e) {
          var t = e.disclosedToken,
            n = e.undisclosedToken;
          return t != null || n != null;
        })
        .concat(t);
    }
    function y(e) {
      var t = o(
          "WAWebMmSignalSharingGatingUtils",
        ).getMmSignalSharingOptimizedDeliverySignalCollectionConfig(),
        n = t.consented_collection_window_in_hours,
        r = t.non_consented_collection_window_in_hours;
      (g(e, n) && (e.disclosedToken = void 0),
        g(e, r) && (e.undisclosedToken = void 0));
    }
    function C(e, t) {
      var n = o(
          "WAWebMmSignalSharingGatingUtils",
        ).getMmSignalSharingOptimizedDeliveryTokensStorageConfig(),
        r = n.store_consented_token_enabled,
        a = n.store_non_consented_token_enabled;
      return e.reduce(function (e, t) {
        return {
          disclosedToken:
            r && t.key === s.DISCLOSED_TOKEN ? t.stringData : e.disclosedToken,
          undisclosedToken:
            a && t.key === s.UNDISCLOSED_TOKEN
              ? t.stringData
              : e.undisclosedToken,
        };
      }, t);
    }
    ((l.MILLIS_PER_SECOND = e),
      (l.updateMmSignalSharingExpirationWindowImpl = u),
      (l.getMmSignalSharingExpirationWindow = c),
      (l.getMmSignalSharingExpirationTokens = d),
      (l.getUpdatedMmSignalSharingExpirationWindowFromHistorySync = m),
      (l.getSortedMmSignalSharingExpirationWindowFromHistorySync = p),
      (l.isMmSignalSharingExpirationWindowActive = _),
      (l.hasMmSignalSharingWindowExpired = f),
      (l.hasMmSignalSharingTokenExpired = g));
  },
  98,
);
