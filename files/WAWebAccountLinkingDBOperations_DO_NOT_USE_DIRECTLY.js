__d(
  "WAWebAccountLinkingDBOperations_DO_NOT_USE_DIRECTLY",
  [
    "WATimeUtils",
    "WAWebAccountLinkingConstants",
    "WAWebAccountLinkingSchema",
    "WAWebBackendApi",
    "WAWebModelStorageUtils",
    "WAWebOpaqueDataEncryption",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      (await o("WAWebAccountLinkingSchema").getTable().createOrReplace(e),
        o("WAWebBackendApi").frontendFireAndForget(
          "updateAccountLinkingStatus",
          {
            isFBLinked: e.fbCrosspostingDestinationId != null,
            isIGLinked: e.igCrosspostingDestinationId != null,
            linkState: e.linkState,
          },
        ));
    }
    async function s(e) {
      var t = await o("WAWebAccountLinkingSchema")
          .getTable()
          .get(o("WAWebAccountLinkingConstants").AccountLinkKey),
        n = babelHelpers.extends({}, t, { linkState: e });
      (await o("WAWebAccountLinkingSchema").getTable().createOrReplace(n),
        o("WAWebBackendApi").frontendFireAndForget(
          "updateAccountLinkingStatus",
          {
            isFBLinked: n.fbCrosspostingDestinationId != null,
            isIGLinked: n.igCrosspostingDestinationId != null,
            linkState: n.linkState,
          },
        ));
    }
    async function u(e, t) {
      var n = await o("WAWebAccountLinkingSchema")
        .getTable()
        .get(o("WAWebAccountLinkingConstants").AccountLinkKey);
      if (n != null) {
        var r = babelHelpers.extends({}, n, { nonce: e, fbid: t });
        return (
          (r.accountLinkingOpaqueData = o(
            "WAWebOpaqueDataEncryption",
          ).moveEncFieldToOpaqueData(r)),
          o("WAWebAccountLinkingSchema").getTable().createOrReplace(r)
        );
      }
    }
    async function c(e, t) {
      var n = await p(),
        r = babelHelpers.extends(
          {
            accountLinkKey: o("WAWebAccountLinkingConstants").AccountLinkKey,
            linkState: o("WAWebAccountLinkingConstants").AccountLinkState
              .Unknown,
            linkTimestamp: o("WATimeUtils").unixTime(),
          },
          n,
          { fbid: e, encryptedPassword: t },
        );
      return (
        (r.accountLinkingOpaqueData = o(
          "WAWebOpaqueDataEncryption",
        ).moveEncFieldToOpaqueData(r)),
        o("WAWebAccountLinkingSchema").getTable().createOrReplace(r)
      );
    }
    async function d(e) {
      var t = await p();
      if (t != null) {
        var n = babelHelpers.extends({}, t, { accesstoken: e });
        return (
          (n.accountLinkingOpaqueData = o(
            "WAWebOpaqueDataEncryption",
          ).moveEncFieldToOpaqueData(n)),
          o("WAWebAccountLinkingSchema").getTable().createOrReplace(n)
        );
      }
    }
    async function m(e) {
      var t = await o("WAWebAccountLinkingSchema")
          .getTable()
          .get(o("WAWebAccountLinkingConstants").AccountLinkKey),
        n = e + Date.now() / 1e3,
        r = babelHelpers.extends({}, t, { pingInterval: n });
      return o("WAWebAccountLinkingSchema").getTable().createOrReplace(r);
    }
    async function p() {
      var e,
        t = await o("WAWebAccountLinkingSchema")
          .getTable()
          .get("AccountLinkKey");
      if (((e = t) == null ? void 0 : e.accountLinkingOpaqueData) != null) {
        var n,
          r = o("WAWebOpaqueDataEncryption").moveOpaqueDataToEncField(
            (n = t) == null ? void 0 : n.accountLinkingOpaqueData,
          );
        t = babelHelpers.extends({}, t, {
          accesstoken: r.accesstoken,
          fbid: r.fbid,
          nonce: r.nonce,
          encryptedPassword: r.encryptedPassword,
        });
      }
      return t;
    }
    async function _() {
      var e = await p();
      return e == null || e.pingInterval == null ? 0 : e.pingInterval;
    }
    async function f(e) {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["account-linking"], async function (t) {
          var n = t[0],
            r = await n.get(o("WAWebAccountLinkingConstants").AccountLinkKey);
          if (r != null) {
            var a = babelHelpers.extends({}, r, {
              foAToWALinkEligibility: e.foAToWALinkEligibility,
            });
            (e.fbCrosspostingDestinationId != null &&
              (a.fbCrosspostingDestinationId = e.fbCrosspostingDestinationId),
              e.igCrosspostingDestinationId != null &&
                (a.igCrosspostingDestinationId = e.igCrosspostingDestinationId),
              await n.createOrReplace(a),
              o("WAWebBackendApi").frontendFireAndForget(
                "updateAccountLinkingStatus",
                {
                  isFBLinked: a.fbCrosspostingDestinationId != null,
                  isIGLinked: a.igCrosspostingDestinationId != null,
                  linkState: a.linkState,
                },
              ));
          }
        });
    }
    async function g(e) {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["account-linking"], async function (t) {
          var n = t[0],
            r = await n.get(o("WAWebAccountLinkingConstants").AccountLinkKey);
          if (r != null) {
            var a = babelHelpers.extends({}, r);
            (e.fbCrosspostingDestinationId != null &&
              (a.fbCrosspostingDestinationId = e.fbCrosspostingDestinationId),
              e.igCrosspostingDestinationId != null &&
                (a.igCrosspostingDestinationId = e.igCrosspostingDestinationId),
              await n.createOrReplace(a),
              o("WAWebBackendApi").frontendFireAndForget(
                "updateAccountLinkingStatus",
                {
                  isFBLinked: a.fbCrosspostingDestinationId != null,
                  isIGLinked: a.igCrosspostingDestinationId != null,
                  linkState: a.linkState,
                },
              ));
          }
        });
    }
    async function h(e, t, n, r) {
      var a = await p();
      if (a != null) {
        var i = r + o("WATimeUtils").unixTime(),
          l = babelHelpers.extends({}, a, { accesstoken: e, pingInterval: i });
        return (
          t != null && (l.nonce = t),
          n != null && (l.fbid = n),
          (l.accountLinkingOpaqueData = o(
            "WAWebOpaqueDataEncryption",
          ).moveEncFieldToOpaqueData(l)),
          o("WAWebAccountLinkingSchema").getTable().createOrReplace(l)
        );
      }
    }
    async function y(e) {
      var t = await o("WAWebAccountLinkingSchema")
        .getTable()
        .get(o("WAWebAccountLinkingConstants").AccountLinkKey);
      if (t != null) {
        var n = babelHelpers.extends({}, t, { lastResyncTimestamp: e });
        return o("WAWebAccountLinkingSchema").getTable().createOrReplace(n);
      }
    }
    async function C() {
      var e = await o("WAWebAccountLinkingSchema")
        .getTable()
        .get(o("WAWebAccountLinkingConstants").AccountLinkKey);
      return e == null ? void 0 : e.lastResyncTimestamp;
    }
    async function b() {
      (await o("WAWebAccountLinkingSchema").getTable().clear(),
        o("WAWebBackendApi").frontendFireAndForget(
          "updateAccountLinkingStatus",
          {
            isFBLinked: !1,
            isIGLinked: !1,
            linkState: o("WAWebAccountLinkingConstants").AccountLinkState
              .Unlinked,
          },
        ));
    }
    async function v() {
      var e,
        t = await p();
      return {
        isFBLinked:
          (t == null ? void 0 : t.fbCrosspostingDestinationId) != null,
        isIGLinked:
          (t == null ? void 0 : t.igCrosspostingDestinationId) != null,
        linkState:
          (e = t == null ? void 0 : t.linkState) != null
            ? e
            : o("WAWebAccountLinkingConstants").AccountLinkState.Unlinked,
      };
    }
    ((l.createOrUpdateAccountLinkingState = e),
      (l.updateAccountLinkingState = s),
      (l.updateAccountLinkingData = u),
      (l.updateEntCreationData = c),
      (l.updateAccesstoken = d),
      (l.updatePingInterval = m),
      (l.getAccountLinkingData = p),
      (l.getPingExpirationTime = _),
      (l.updateServiceData = f),
      (l.updateDestinationIdentities = g),
      (l.updateGenerateAccessTokensData = h),
      (l.updateLastResyncTimestamp = y),
      (l.getLastResyncTimestamp = C),
      (l.purgeWaffleData = b),
      (l.getAccountLinkingStatus = v));
  },
  98,
);
