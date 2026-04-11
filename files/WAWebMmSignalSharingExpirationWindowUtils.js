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
    var e = n("$InternalEnum")({
      DISCLOSED_TOKEN: "data_sharing_encrypted_token_disclosed",
      UNDISCLOSED_TOKEN: "data_sharing_encrypted_token_undisclosed",
    });
    function s(e, t) {
      if (
        !(
          e.isForwarded ||
          !o(
            "WAWebMmSignalSharingGatingUtils",
          ).isMmSignalSharingDisclosureEnabled()
        ) &&
        t
      ) {
        var n = c(t),
          r = o(
            "WAWebMmSignalSharingContextInfo",
          ).getMmSignalSharingContextInfoDisclosureFlag(t),
          a = o(
            "WAWebMmSignalSharingContextInfo",
          ).existsMmSignalSharingURlTrackingMapElements(t);
        (n.disclosedToken != null ||
          n.undisclosedToken != null ||
          r != null ||
          a) &&
          ((e.mmSignalSharing = babelHelpers.extends(
            {
              dataSharingFlags: r,
              existsDisclosedToken: !!n.disclosedToken,
              existsUndisclosedToken: !!n.undisclosedToken,
            },
            a
              ? {
                  urlTrackingMapElements: o(
                    "WAWebMmSignalSharingContextInfo",
                  ).getMmSignalSharingURLTrackingMapElements(t),
                }
              : {},
          )),
          o("WAWebBackendApi").frontendFireAndForget(
            "updateMmSignalSharingExpirationWindow",
            { id: e.id.remote, msg: e, contextInfo: t },
          ),
          o(
            "WAWebMmSignalSharingLoggingEvents",
          ).logMmSignalSharingUpdateExpirationWindowEvent({
            msg: e,
            contextInfo: t,
          }));
      }
    }
    function u(e, t, n, r, a) {
      if (
        !o(
          "WAWebMmSignalSharingGatingUtils",
        ).isMmSignalSharingDisclosureEnabled()
      )
        return null;
      var i = babelHelpers.extends(
        { unixTime: { client: r, server: n }, messageId: t },
        c(a),
      );
      return o(
        "WAWebMmSignalSharingGatingUtils",
      ).isMmSignalSharingOptimizedDeliveryMultipleCollectionWindowsEnabled()
        ? g(e, i)
        : [i];
    }
    function c(e) {
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
      return r != null ? y(r, n) : n;
    }
    function d(e, t) {
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
        ? u(
            t,
            o("WAWebProtobufMsgKeyUtils").protobufToMsgKey(e.key),
            Number(e.messageTimestamp),
            Number(e.messageTimestamp),
            r,
          )
        : t;
    }
    function m(e) {
      return [].concat(e).reverse();
    }
    function p(e) {
      if (
        !o(
          "WAWebMmSignalSharingGatingUtils",
        ).isMmSignalSharingDisclosureEnabled()
      )
        return !1;
      var t = e == null ? void 0 : e[e.length - 1];
      return t != null && !_(t);
    }
    function _(e) {
      return (
        e.unixTime.server +
          o(
            "WAWebMmSignalSharingGatingUtils",
          ).getMmSignalSharingCollectionWindow() <
        o("WATimeUtils").unixTime()
      );
    }
    function f(e, t) {
      return e.unixTime.server + t * 3600 < o("WATimeUtils").unixTime();
    }
    function g(e, t) {
      var n = e != null ? e : [];
      for (var r of n != null ? n : []) h(r);
      return n
        .filter(function (e) {
          var t = e.disclosedToken,
            n = e.undisclosedToken;
          return t != null || n != null;
        })
        .concat(t);
    }
    function h(e) {
      var t = o(
          "WAWebMmSignalSharingGatingUtils",
        ).getMmSignalSharingOptimizedDeliverySignalCollectionConfig(),
        n = t.consented_collection_window_in_hours,
        r = t.non_consented_collection_window_in_hours;
      (f(e, n) && (e.disclosedToken = void 0),
        f(e, r) && (e.undisclosedToken = void 0));
    }
    function y(t, n) {
      var r = o(
          "WAWebMmSignalSharingGatingUtils",
        ).getMmSignalSharingOptimizedDeliveryTokensStorageConfig(),
        a = r.store_consented_token_enabled,
        i = r.store_non_consented_token_enabled;
      return t.reduce(function (t, n) {
        return {
          disclosedToken:
            a && n.key === e.DISCLOSED_TOKEN ? n.stringData : t.disclosedToken,
          undisclosedToken:
            i && n.key === e.UNDISCLOSED_TOKEN
              ? n.stringData
              : t.undisclosedToken,
        };
      }, n);
    }
    ((l.updateMmSignalSharingExpirationWindowImpl = s),
      (l.getMmSignalSharingExpirationWindow = u),
      (l.getMmSignalSharingExpirationTokens = c),
      (l.getUpdatedMmSignalSharingExpirationWindowFromHistorySync = d),
      (l.getSortedMmSignalSharingExpirationWindowFromHistorySync = m),
      (l.isMmSignalSharingExpirationWindowActive = p),
      (l.hasMmSignalSharingWindowExpired = _),
      (l.hasMmSignalSharingTokenExpired = f));
  },
  98,
);
