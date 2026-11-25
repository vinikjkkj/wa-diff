__d(
  "WAWebOfflineResumePrimarySnapshotRequest",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebApiPeerMessageStore",
    "WAWebMsgKey",
    "WAWebPrimaryDeviceCapabilities",
    "WAWebProtobufsE2E.pb",
    "WAWebSendNonMessageDataRequest",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsKeys",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 10,
      d = 10,
      m = 10 * o("WATimeUtils").MINUTE_MILLISECONDS,
      p = 30 * o("WATimeUtils").DAY_MILLISECONDS,
      _ = Promise.resolve();
    function f() {
      return ((_ = _.then(g)), _);
    }
    async function g() {
      try {
        var t = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
          o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.LAST_RCOD_REQUEST,
        );
        if (await h(t)) {
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[offline-resume][rcod] not requesting: the last request is recent or not delivered",
              ])),
          );
          return;
        }
        if (!(await y())) {
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[offline-resume][primary-snapshot] primary does not support the request",
              ])),
          );
          return;
        }
        await C(t);
      } catch (e) {
        o("WALogger")
          .WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[offline-resume][rcod] request failed",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("rcod-request-failed");
      }
    }
    async function h(e) {
      if (e == null) return !1;
      var t = o("WATimeUtils").unixTimeMs() - e.sentTs;
      if (t >= p) return !1;
      var n = t >= 0 && t < m;
      return n || o("WAWebApiPeerMessageStore").hasPeerMessage(e.msgId);
    }
    async function y() {
      var e,
        t = await o(
          "WAWebPrimaryDeviceCapabilities",
        ).getPrimaryDeviceCapabilities();
      return (
        (t == null || (e = t.recentConversationsOnDemand) == null
          ? void 0
          : e.supported) === !0
      );
    }
    async function C(e) {
      var t = await r("WAWebMsgKey").newId();
      await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.LAST_RCOD_REQUEST,
        { msgId: t, sentTs: o("WATimeUtils").unixTimeMs() },
      );
      try {
        await o("WAWebSendNonMessageDataRequest").sendPeerDataOperationRequest(
          o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
            .RECENT_CONVERSATIONS_ON_DEMAND_REQUEST,
          { conversationCount: c, messagesPerConversation: d },
          { msgId: t, sendBeforeOfflineDeliveryEnd: !0 },
        );
      } catch (t) {
        throw (await b(e), t);
      }
    }
    function b(e) {
      return e == null
        ? o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(
            o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.LAST_RCOD_REQUEST,
          )
        : o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
            o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.LAST_RCOD_REQUEST,
            e,
          );
    }
    l.maybeRequestPrimarySnapshot = f;
  },
  98,
);
