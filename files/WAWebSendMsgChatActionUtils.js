__d(
  "WAWebSendMsgChatActionUtils",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebContactSystemMsg",
    "WAWebDBUpdateChatTable",
    "WAWebEphemeralitySystemMsg",
    "WAWebEphemeralityTypes",
    "WAWebEphemeralityUtils",
    "WAWebLimitSharingGatingUtils",
    "WAWebOpusUtils",
    "WAWebProtobufsProtocol.pb",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
      var t, n;
      if (
        e.isCAG() ||
        ((t = e.groupMetadata) == null ? void 0 : t.announce) === !0
      )
        return !1;
      var r = (n = e.groupMetadata) == null ? void 0 : n.participants;
      if (r == null) return !1;
      var a = r.some(function (e) {
        var t = e.id;
        return (
          t != null &&
          t.isBot() &&
          !o("WAWebBotUtils").isWidOpenGroupMetaBotFbidWid(t) &&
          !o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(t)
        );
      });
      return (
        a && o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()
      );
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (
            t.ephemeralDuration != null &&
            t.ephemeralDuration > 0 &&
            o(
              "WAWebEphemeralityUtils",
            ).isEphemeralityDisabledForMessagingWithContact(e.contact)
          ) {
            var n = 0,
              r = e.contact.id;
            if (r.isRegularUser()) {
              var a = babelHelpers.extends({}, t, { ephemeralDuration: n }),
                i = [
                  o(
                    "WAWebEphemeralitySystemMsg",
                  ).getEphemeralitySystemMessageForDisabledEphemerality(r),
                ],
                l = {
                  ephemeralDuration: n,
                  ephemeralSettingTimestamp: o("WATimeUtils").unixTime(),
                  disappearingModeInitiator: o("WAWebEphemeralityTypes")
                    .DisappearingModeInitiator.ChangedInChat,
                  disappearingModeTrigger: o("WAWebEphemeralityTypes")
                    .DisappearingModeTrigger.Unknown,
                  disappearingModeInitiatedByMe: !1,
                };
              return (
                yield o("WAWebDBUpdateChatTable").updateChatTable(e.id, l),
                e.set(l),
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[maybeDisableEphemeralityForMsg] duration=",
                      " contact=",
                      "",
                    ])),
                  n,
                  r.toLogString(),
                ),
                { msgData: a, systemMsgs: i }
              );
            }
          }
          return { msgData: t, systemMsgs: null };
        })),
        m.apply(this, arguments)
      );
    }
    function p(t, n) {
      var r;
      if (
        o("WAWebLimitSharingGatingUtils").isOpusEnabled() &&
        ((r = t.limitSharing) == null ? void 0 : r.sharingLimited) === !0
      ) {
        var a = o("WAWebContactSystemMsg").genLimitSharingUpdateSystemMsg(
          t.id,
          {
            sharingLimited: !1,
            trigger: o("WAWebProtobufsProtocol.pb").LimitSharing$Trigger
              .UNKNOWN,
          },
        );
        return (
          o("WAWebOpusUtils")
            .opusProcessChat(t.id.toString(), { skipSystemMessage: !0 })
            .catch(function (t) {
              t instanceof Error
                ? o("WALogger")
                    .ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[opus] send fallback failed",
                        ])),
                    )
                    .catching(t)
                    .sendLogs(n)
                : o("WALogger")
                    .ERROR(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[opus] send fallback failed",
                        ])),
                    )
                    .sendLogs(n);
            }),
          a
        );
      }
      return null;
    }
    ((l.hasGroupAgentParticipant = c),
      (l.maybeDisableEphemeralityForMsg = d),
      (l.maybeGetOpusSystemMsg = p));
  },
  98,
);
