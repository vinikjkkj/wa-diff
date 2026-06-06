__d(
  "WAWebDebugEphemerality",
  [
    "WATimeUtils",
    "WAWebApiContact",
    "WAWebChatCollection",
    "WAWebContactCollection",
    "WAWebEphemeralSyncResponse",
    "WAWebEphemeralityTypes",
    "WAWebMsgCollection",
    "WAWebUpdateDisappearingModeForContact",
    "WAWebWidFactory",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t, n, a, i) {
      var l = o("WAWebEphemeralityTypes").DisappearingModeInitiator.cast(a),
        s = o("WAWebEphemeralityTypes").DisappearingModeTrigger.cast(i);
      if (l == null || s == null)
        throw r("err")("initator or trigger is not a valid enum");
      var u = o("WAWebWidFactory").createUserWidOrThrow(e),
        c = o("WAWebChatCollection").ChatCollection.get(u);
      if (c == null) throw r("err")("Couldn't find chat for number " + e);
      await o("WAWebEphemeralSyncResponse")._sendEphemeralSyncResponse(u, {
        duration: t,
        settingTimestamp: n,
        initiator: l,
        disappearingModeTrigger: s,
      });
    }
    e.doc =
      "Sends an ESR message to the give number with provided duration, ts, and initiator";
    async function s(e, t) {
      var n,
        a = o("WAWebWidFactory").createUserWidOrThrow(e),
        i = await o("WAWebApiContact").getContactRecord(a);
      if (i == null) throw r("err")("Couldn't find contact for number " + e);
      await o(
        "WAWebUpdateDisappearingModeForContact",
      ).updateDisappearingModeForContact({
        contactId: a,
        newDuration: (n = i.disappearingModeDuration) != null ? n : 0,
        newSettingTimestamp: o("WATimeUtils").unixTime(),
        newEphemeralityDisabled: t,
      });
      var l = o("WAWebContactCollection").ContactCollection.get(a);
      l == null || l.set("isEphemeralityDisabled", t);
    }
    s.doc = "Sets or unsets isEphemeralityDisabled on the specified contact";
    async function u(e, t) {
      var n = await o("WAWebMsgCollection").MsgCollection.hydrateOrGetMessages([
          e,
        ]),
        a = n[0];
      if (a == null) throw r("err")("Couldn't find msg for id " + e);
      var i = o("WATimeUtils").unixTime() + t;
      a.expiredTimestamp = i;
    }
    u.doc =
      "Overrides expiredTimestamp on the given msg to (now + durationSeconds). Use durationSeconds=0 to expire immediately. Triggers the AR receiver-side expiration timer / fade-out animation. Note: in-memory only \u2014 change is lost on reload. msgId is the serialized msg key string (e.g. 'false_447...@c.us_3EB0...').";
    var c = {
      sendEphemeralSyncResponse: e,
      setEphemeralityDisabledForContact: s,
      overrideMsgExpiredTimestamp: u,
    };
    l.default = c;
  },
  98,
);
