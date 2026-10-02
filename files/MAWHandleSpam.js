__d(
  "MAWHandleSpam",
  [
    "MAWGetSpams",
    "MAWODSProxy",
    "MAWProcessSpamMsgApi",
    "Promise",
    "WALogger",
    "WAOdsEnums",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d;
    function m(t) {
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "handleInfoBulletin receives spam marker",
          ])),
      );
      var r = t.spamState;
      return r === "continue"
        ? (o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "handleInfoBulletin continues to fetch spam messages",
              ])),
          ),
          o("MAWGetSpams").getSpamsImpl(),
          o("MAWODSProxy").odsBumpEntityKey({
            entity: o("WAOdsEnums").Entity.MAW_JOB_MANAGER,
            key: "getSpams.direct.success",
          }),
          (d || (d = n("Promise"))).resolve("NO_ACK"))
        : r === "complete"
          ? (o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "handleInfoBulletin spam messages have been drained",
                ])),
            ),
            o("MAWProcessSpamMsgApi").processSpamMsgs(),
            o("MAWODSProxy").odsBumpEntityKey({
              entity: o("WAOdsEnums").Entity.MAW_JOB_MANAGER,
              key: "handleSpamMsg.direct.success",
            }),
            (d || (d = n("Promise"))).resolve("NO_ACK"))
          : (o("WALogger").WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "handleInfoBulletin unrecognized spam state",
                ])),
            ),
            (d || (d = n("Promise"))).resolve("NO_ACK"));
    }
    l.handleSpam = m;
  },
  98,
);
