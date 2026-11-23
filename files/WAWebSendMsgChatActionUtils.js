__d(
  "WAWebSendMsgChatActionUtils",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebBackendRuntime",
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebChatStoreService",
    "WAWebContactSystemMsg",
    "WAWebDBUpdateChatTable",
    "WAWebEphemeralitySystemMsg",
    "WAWebEphemeralityTypes",
    "WAWebEphemeralityUtils",
    "WAWebLimitSharingGatingUtils",
    "WAWebOpusUtils",
    "WAWebProtobufsProtocol.pb",
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
    async function d(t, n) {
      if (
        n.ephemeralDuration != null &&
        n.ephemeralDuration > 0 &&
        o(
          "WAWebEphemeralityUtils",
        ).isEphemeralityDisabledForMessagingWithContact(t.contact)
      ) {
        var r = 0,
          a = t.contact.id;
        if (a.isRegularUser()) {
          var i = babelHelpers.extends({}, n, { ephemeralDuration: r }),
            l = [
              o(
                "WAWebEphemeralitySystemMsg",
              ).getEphemeralitySystemMessageForDisabledEphemerality(a),
            ],
            s = {
              ephemeralDuration: r,
              ephemeralSettingTimestamp: o("WATimeUtils").unixTime(),
              disappearingModeInitiator: o("WAWebEphemeralityTypes")
                .DisappearingModeInitiator.ChangedInChat,
              disappearingModeTrigger: o("WAWebEphemeralityTypes")
                .DisappearingModeTrigger.Unknown,
              disappearingModeInitiatedByMe: !1,
            };
          return (
            await (
              o("WAWebBackendRuntime").isWebDiBackendEnabled()
                ? o("WAWebBackendRuntime").runtime(
                    o("WAWebChatStoreService").ChatStoreService,
                  ).updateChatTable
                : o("WAWebDBUpdateChatTable").updateChatTable
            )(t.id, s),
            t.set(s),
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[maybeDisableEphemeralityForMsg] duration=",
                  " contact=",
                  "",
                ])),
              r,
              a.toLogString(),
            ),
            { msgData: i, systemMsgs: l }
          );
        }
      }
      return { msgData: n, systemMsgs: null };
    }
    function m(e, t) {
      var n;
      if (
        o("WAWebLimitSharingGatingUtils").isOpusEnabled() &&
        ((n = e.limitSharing) == null ? void 0 : n.sharingLimited) === !0
      ) {
        var r = o("WAWebContactSystemMsg").genLimitSharingUpdateSystemMsg(
          e.id,
          {
            sharingLimited: !1,
            trigger: o("WAWebProtobufsProtocol.pb").LimitSharing$Trigger
              .UNKNOWN,
          },
        );
        return (
          o("WAWebOpusUtils")
            .opusProcessChat(e.id.toString(), { skipSystemMessage: !0 })
            .catch(function (e) {
              e instanceof Error
                ? o("WALogger")
                    .ERROR(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[opus] send fallback failed",
                        ])),
                    )
                    .catching(e)
                    .sendLogs(t)
                : o("WALogger")
                    .ERROR(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "[opus] send fallback failed",
                        ])),
                    )
                    .sendLogs(t);
            }),
          r
        );
      }
      return null;
    }
    ((l.hasGroupAgentParticipant = c),
      (l.maybeDisableEphemeralityForMsg = d),
      (l.maybeGetOpusSystemMsg = m));
  },
  98,
);
