__d(
  "WAWebCrosspostingHelper",
  [
    "WAWebBackendApi",
    "WAWebCrossposting.flow",
    "WAWebCrosspostingAPI",
    "WAWebCrosspostingCryptoHelper",
    "WAWebCrosspostingDBOperations",
    "WAWebEligibilityCheckHelper",
    "WAWebMsgType",
    "WAWebStatusCrosspostRequestWamEvent",
    "WAWebUserPrefsStatus",
    "WAWebUserPrefsStatusType",
    "WAWebWamEnumCrosspostDestinationType",
    "WAWebWamEnumCrosspostResultType",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumPrivacySettingsValueType",
    "WAWebWamEnumStatusCrosspostShareTypeEnum",
    "err",
    "fflate",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e === o("WAWebCrossposting.flow").CrosspostingDestination.FACEBOOK
        ? o("WAWebWamEnumCrosspostDestinationType").CROSSPOST_DESTINATION_TYPE
            .FB
        : o("WAWebWamEnumCrosspostDestinationType").CROSSPOST_DESTINATION_TYPE
            .IG;
    }
    function s(e) {
      switch (e) {
        case o("WAWebUserPrefsStatusType").StatusPrivacySettingType.Contact:
          return o("WAWebWamEnumPrivacySettingsValueType")
            .PRIVACY_SETTINGS_VALUE_TYPE.MY_CONTACTS;
        case o("WAWebUserPrefsStatusType").StatusPrivacySettingType.AllowList:
          return o("WAWebWamEnumPrivacySettingsValueType")
            .PRIVACY_SETTINGS_VALUE_TYPE.ONLY_SHARE_WITH;
        case o("WAWebUserPrefsStatusType").StatusPrivacySettingType.DenyList:
          return o("WAWebWamEnumPrivacySettingsValueType")
            .PRIVACY_SETTINGS_VALUE_TYPE.MY_CONTACTS_EXCEPT;
      }
    }
    async function u(t) {
      var n = t.crosspostingDestination,
        r = t.errorType,
        a = t.isSuccess,
        i = t.mediaType,
        l = t.sessionId,
        u = t.statusMessageId,
        c = await o("WAWebUserPrefsStatus").getStatusPrivacySetting(),
        d = s(c);
      new (o(
        "WAWebStatusCrosspostRequestWamEvent",
      ).StatusCrosspostRequestWamEvent)({
        crosspostDestination: e(n),
        statusCrosspostResult: a
          ? o("WAWebWamEnumCrosspostResultType").CROSSPOST_RESULT_TYPE.OK
          : o("WAWebWamEnumCrosspostResultType").CROSSPOST_RESULT_TYPE.ERROR,
        crosspostErrorType: r,
        statusId: u,
        cacSessionId: l,
        statusCrosspostShareType: o("WAWebWamEnumStatusCrosspostShareTypeEnum")
          .STATUS_CROSSPOST_SHARE_TYPE_ENUM.MANUAL,
        statusCrosspostMediaType: i,
        isAutoCrosspostEnabledInSettings: !1,
        isAutoCrossposted: !1,
        defaultStatusPrivacySettings: d,
      }).commit();
    }
    function c(e, t) {
      return t === "F"
        ? e.fbCrosspostingDestinationId
        : t === "I"
          ? e.igCrosspostingDestinationId
          : "";
    }
    function d(e) {
      if (e === "F")
        return o("WAWebCrossposting.flow").CrosspostingDestinationIQValue
          .FACEBOOK;
      if (e === "I")
        return o("WAWebCrossposting.flow").CrosspostingDestinationIQValue
          .INSTAGRAM;
      throw r("err")("[WAFFLE] Invalid destination app");
    }
    function m(e, t) {
      var n = {
        waffle_da: d(e),
        waffle_di: c(t, e),
        waffle_ds: o("WAWebCrossposting.flow").CROSSPOSTING_SURFACE_STORY,
      };
      return n;
    }
    function p(e) {
      if (
        e === o("WAWebMsgType").MSG_TYPE.IMAGE ||
        e === o("WAWebMsgType").MSG_TYPE.CHAT
      )
        return "image";
      if (e === o("WAWebMsgType").MSG_TYPE.VIDEO) return "video";
      throw r("err")(
        "[WAFFLE] Unsupported message type for crossposting: " + e,
      );
    }
    function _(e) {
      if (e === o("WAWebMsgType").MSG_TYPE.CHAT)
        return o("WAWebWamEnumMediaType").MEDIA_TYPE.TEXT;
      if (e === o("WAWebMsgType").MSG_TYPE.IMAGE)
        return o("WAWebWamEnumMediaType").MEDIA_TYPE.PHOTO;
      if (e === o("WAWebMsgType").MSG_TYPE.VIDEO)
        return o("WAWebWamEnumMediaType").MEDIA_TYPE.VIDEO;
      throw r("err")(
        "[WAFFLE] Unsupported message type for crossposting: " + e,
      );
    }
    function f(e) {
      var t = e.caption,
        n = e.directPath,
        r = e.status,
        o = e.uniqueId,
        a = {
          media_everstore_direct_path: n,
          wa_status_id: o,
          dispatch_timestamp: r.t,
          media_type: p(r.type),
        };
      return (t != null && (a.message = t), a);
    }
    async function g(e) {
      var t = e.caption,
        n = e.destination,
        r = e.destinationIdentities,
        a = e.directPath,
        i = e.keyPair,
        l = e.purposeEncryptionParams,
        s = e.sessionId,
        u = e.status,
        c = e.uniqueId,
        d = [];
      d.push(m(n, r));
      var p = [];
      p.push(f({ directPath: a, uniqueId: c, status: u, caption: t }));
      var g = { session_id: s, destinations: d, statuses: p },
        h = new TextEncoder(),
        y = h.encode(JSON.stringify(g)),
        C = o("fflate").zlibSync(y, { level: 1 }),
        b = btoa(
          Array.from(C, function (e) {
            return String.fromCharCode(e);
          }).join(""),
        ),
        v = new Uint8Array(24);
      crypto.getRandomValues(v);
      var S = new TextEncoder().encode(b),
        R = await o("WAWebCrosspostingCryptoHelper").forwardSecrecyEncrypt({
          plaintext: S,
          nonce: v,
          serverPublicIK: l.purposePublicIK,
          serverPublicEK: l.purposePublicEK,
          clientPublicKey: new Uint8Array(i.publicKey),
          clientPrivateKey: new Uint8Array(i.privateKey),
          outputLength: o("WAWebCrossposting.flow").SHARED_KEY_LENGTH,
        }),
        L = btoa(
          Array.from(R, function (e) {
            return String.fromCharCode(e);
          }).join(""),
        );
      await o("WAWebCrosspostingAPI").makeCrosspostingIQ({
        encryptedPayload: L,
        statusMessageId: u.id.toString(),
        crosspostingDestination: o(
          "WAWebEligibilityCheckHelper",
        ).translateWaffleXANToCrosspostingDestination(n),
        sessionId: s,
        mediaType: _(u.type),
      });
    }
    function h(e) {
      return e ===
        o("WAWebCrossposting.flow").CrosspostingDestinationIQValue.FACEBOOK
        ? o("WAWebCrossposting.flow").CrosspostingDestination.FACEBOOK
        : e ===
            o("WAWebCrossposting.flow").CrosspostingDestinationIQValue.INSTAGRAM
          ? o("WAWebCrossposting.flow").CrosspostingDestination.INSTAGRAM
          : (function () {
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  e,
              );
            })();
    }
    async function y(e, t) {
      var n = [];
      for (var r of e.responsesByDestination) {
        var a = r[0],
          i = r[1],
          l = h(a);
        for (var s of i.successIds)
          n.push({
            statusMessageId: t,
            crosspostingDestination: l,
            crosspostingState: o("WAWebCrossposting.flow").CrosspostingState
              .SUCCESS,
            uniqueId: s,
          });
        for (var u of i.duplicateRequests)
          n.push({
            statusMessageId: t,
            crosspostingDestination: l,
            crosspostingState: o("WAWebCrossposting.flow").CrosspostingState
              .SUCCESS,
            uniqueId: u,
          });
        for (var c of i.deactivatedAccount)
          n.push({
            statusMessageId: t,
            crosspostingDestination: l,
            crosspostingState: o("WAWebCrossposting.flow").CrosspostingState
              .HARD_FAILURE,
            uniqueId: c,
          });
        for (var d of i.unknownErrors)
          n.push({
            statusMessageId: t,
            crosspostingDestination: l,
            crosspostingState: o("WAWebCrossposting.flow").CrosspostingState
              .HARD_FAILURE,
            uniqueId: d,
          });
      }
      await o("WAWebCrosspostingDBOperations").bulkUpdateCrosspostingState(n);
      var m = new Map();
      for (var p of n)
        m.set(p.crosspostingDestination, {
          crosspostingState: p.crosspostingState,
        });
      o("WAWebBackendApi").frontendFireAndForget("updateCrosspostingInfo", {
        statusMessageId: t,
        crosspostingInfo: m,
      });
    }
    ((l.logCrosspostingWamEvent = u),
      (l.prepareCrosspostingIQ = g),
      (l.processCrosspostingResponse = y));
  },
  98,
);
