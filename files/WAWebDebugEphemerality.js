__d(
  "WAWebDebugEphemerality",
  [
    "Promise",
    "WATimeUtils",
    "WAWebApiContact",
    "WAWebChatCollection",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebContactCollection",
    "WAWebEphemeralSyncResponse",
    "WAWebEphemeralityTypes",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebMsgCollection",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebUpdateDisappearingModeForContact",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t, n, r, o) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(
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
            yield o("WAWebEphemeralSyncResponse")._sendEphemeralSyncResponse({
              changes: {
                duration: t,
                settingTimestamp: n,
                initiator: l,
                disappearingModeTrigger: s,
              },
              to: u,
            });
          },
        )),
        u.apply(this, arguments)
      );
    }
    s.doc =
      "Sends an ESR message to the give number with provided duration, ts, and initiator";
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        d.apply(this, arguments)
      );
    }
    c.doc = "Sets or unsets isEphemeralityDisabled on the specified contact";
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o(
              "WAWebMsgCollection",
            ).MsgCollection.hydrateOrGetMessages([e]),
            a = n[0];
          if (a == null) throw r("err")("Couldn't find msg for id " + e);
          var i = o("WATimeUtils").unixTime() + t;
          a.expiredTimestamp = i;
        })),
        p.apply(this, arguments)
      );
    }
    m.doc =
      "Overrides expiredTimestamp on the given msg to (now + durationSeconds). Use durationSeconds=0 to expire immediately. Triggers the AR receiver-side expiration timer / fade-out animation. Note: in-memory only \u2014 change is lost on reload. msgId is the serialized msg key string (e.g. 'false_447...@c.us_3EB0...').";
    function _() {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = o("WAWebChatCollection")
            .ChatCollection.getModelsArray()
            .filter(function (e) {
              var t;
              return ((t = e.ephemeralDuration) != null ? t : 0) > 0;
            });
          return (
            yield (e || (e = n("Promise"))).all(
              t.map(function (e) {
                var t = {
                  id: new (r("WAWebMsgKey"))({
                    remote: e.id,
                    fromMe: !1,
                    id: r("WAWebMsgKey").newId_DEPRECATED(),
                  }),
                  from: e.id,
                  to: o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
                  recipients: [],
                  subtype: o("WAWebCommonMsgSubtypeTypes").MsgSubtype
                    .EphemeralKeepInChat,
                  t: o("WATimeUtils").unixTime(),
                  type: "gp2",
                  kind: o("WAWebMsgType").MsgKind.Gp2,
                  viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                };
                return o(
                  "WAWebHandleSingleMsgWorkerCompatible",
                ).handleSingleMsg({
                  chatId: e.id,
                  newMsg: t,
                  handleSingleMsgOrigin: "handleGroupNotification",
                });
              }),
            ),
            t.length
          );
        })),
        f.apply(this, arguments)
      );
    }
    _.doc =
      'Inserts a keep-in-chat gp2 system message (subtype ephemeral_keep_in_chat, the "Learn more" notice) into every chat that has disappearing messages enabled (ephemeralDuration > 0). Reproduces the server-sent EPHEMERAL_KEEP_IN_CHAT notice locally via handleSingleMsg (no network; persisted to DB). Returns the number of chats updated. Use to preview/QA the keep-in-chat system message and its CTA.';
    var g = {
      sendEphemeralSyncResponse: s,
      setEphemeralityDisabledForContact: c,
      overrideMsgExpiredTimestamp: m,
      addKeepInChatSystemMsgToAllEphemeralChats: _,
    };
    l.default = g;
  },
  98,
);
