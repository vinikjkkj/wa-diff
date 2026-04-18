__d(
  "WAWebSendMsgChatActionUtils",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebContactSystemMsg",
    "WAWebDBUpdateChatTable",
    "WAWebEphemeralitySystemMsg",
    "WAWebEphemeralityTypes",
    "WAWebEphemeralityUtils",
    "WAWebLimitSharingGatingUtils",
    "WAWebProtobufsProtocol.pb",
    "asyncToGeneratorRuntime",
    "cr:37261",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = (e = n("cr:37261")) != null ? e : {},
      m = d.opusProcessChat;
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
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
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
      var n;
      if (
        o("WAWebLimitSharingGatingUtils").isOpusEnabled() &&
        m != null &&
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
          m(e.id.toString(), { skipSystemMessage: !0 }).catch(function (e) {
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
    ((l.maybeDisableEphemeralityForMsg = p), (l.maybeGetOpusSystemMsg = f));
  },
  98,
);
