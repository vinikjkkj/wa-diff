__d(
  "WAWebSendMsgChatActionUtils",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebDBUpdateChatTable",
    "WAWebEphemeralitySystemMsg",
    "WAWebEphemeralityTypes",
    "WAWebEphemeralityUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
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
                yield o("WAWebDBUpdateChatTable").updateChatTable(t.id, s),
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
        })),
        u.apply(this, arguments)
      );
    }
    l.maybeDisableEphemeralityForMsg = s;
  },
  98,
);
