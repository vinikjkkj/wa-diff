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
        a = t.errorType,
        i = t.isSuccess,
        l = t.mediaType,
        u = t.sessionId,
        c = t.statusMessageId,
        d = await r("WAWebUserPrefsStatus").getStatusPrivacySetting(),
        m = s(d);
      new (o(
        "WAWebStatusCrosspostRequestWamEvent",
      ).StatusCrosspostRequestWamEvent)({
        crosspostDestination: e(n),
        statusCrosspostResult: i
          ? o("WAWebWamEnumCrosspostResultType").CROSSPOST_RESULT_TYPE.OK
          : o("WAWebWamEnumCrosspostResultType").CROSSPOST_RESULT_TYPE.ERROR,
        crosspostErrorType: a,
        statusId: c,
        cacSessionId: u,
        statusCrosspostShareType: o("WAWebWamEnumStatusCrosspostShareTypeEnum")
          .STATUS_CROSSPOST_SHARE_TYPE_ENUM.MANUAL,
        statusCrosspostMediaType: l,
        isAutoCrosspostEnabledInSettings: !1,
        isAutoCrossposted: !1,
        defaultStatusPrivacySettings: m,
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
    async function g(e, t, n, r, a, i, l, s, u) {
      var c = [];
      c.push(m(e, t));
      var d = [];
      d.push(f({ directPath: n, uniqueId: r, status: a, caption: u }));
      var p = { session_id: i, destinations: c, statuses: d },
        g = new TextEncoder(),
        h = g.encode(JSON.stringify(p)),
        y = o("fflate").zlibSync(h, { level: 1 }),
        C = btoa(
          Array.from(y, function (e) {
            return String.fromCharCode(e);
          }).join(""),
        ),
        b = new Uint8Array(24);
      crypto.getRandomValues(b);
      var v = new TextEncoder().encode(C),
        S = await o("WAWebCrosspostingCryptoHelper").forwardSecrecyEncrypt({
          plaintext: v,
          nonce: b,
          serverPublicIK: l.purposePublicIK,
          serverPublicEK: l.purposePublicEK,
          clientPublicKey: new Uint8Array(s.publicKey),
          clientPrivateKey: new Uint8Array(s.privateKey),
          outputLength: o("WAWebCrossposting.flow").SHARED_KEY_LENGTH,
        }),
        R = btoa(
          Array.from(S, function (e) {
            return String.fromCharCode(e);
          }).join(""),
        );
      await o("WAWebCrosspostingAPI").makeCrosspostingIQ({
        encryptedPayload: R,
        statusMessageId: a.id.toString(),
        crosspostingDestination: o(
          "WAWebEligibilityCheckHelper",
        ).translateWaffleXANToCrosspostingDestination(e),
        sessionId: i,
        mediaType: _(a.type),
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
