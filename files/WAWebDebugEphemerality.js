__d(
  "WAWebDebugEphemerality",
  [
    "WATimeUtils",
    "WAWebApiContact",
    "WAWebChatCollection",
    "WAWebContactCollection",
    "WAWebEphemeralSyncResponse",
    "WAWebEphemeralityTypes",
    "WAWebUpdateDisappearingModeForContact",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, r, o) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i) {
            var l = o("WAWebEphemeralityTypes").DisappearingModeInitiator.cast(
                a,
              ),
              s = o("WAWebEphemeralityTypes").DisappearingModeTrigger.cast(i);
            if (l == null || s == null)
              throw r("err")("initator or trigger is not a valid enum");
            var u = o("WAWebWidFactory").createUserWidOrThrow(e),
              c = o("WAWebChatCollection").ChatCollection.get(u);
            if (c == null) throw r("err")("Couldn't find chat for number " + e);
            yield o("WAWebEphemeralSyncResponse")._sendEphemeralSyncResponse(
              u,
              {
                duration: t,
                settingTimestamp: n,
                initiator: l,
                disappearingModeTrigger: s,
              },
            );
          },
        )),
        s.apply(this, arguments)
      );
    }
    e.doc =
      "Sends an ESR message to the give number with provided duration, ts, and initiator";
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            a = o("WAWebWidFactory").createUserWidOrThrow(e),
            i = yield o("WAWebApiContact").getContactRecord(a);
          if (i == null)
            throw r("err")("Couldn't find contact for number " + e);
          yield o(
            "WAWebUpdateDisappearingModeForContact",
          ).updateDisappearingModeForContact({
            contactId: a,
            newDuration: (n = i.disappearingModeDuration) != null ? n : 0,
            newSettingTimestamp: o("WATimeUtils").unixTime(),
            newEphemeralityDisabled: t,
          });
          var l = o("WAWebContactCollection").ContactCollection.get(a);
          l == null || l.set("isEphemeralityDisabled", t);
        })),
        c.apply(this, arguments)
      );
    }
    u.doc = "Sets or unsets isEphemeralityDisabled on the specified contact";
    var d = {
      sendEphemeralSyncResponse: e,
      setEphemeralityDisabledForContact: u,
    };
    l.default = d;
  },
  98,
);
