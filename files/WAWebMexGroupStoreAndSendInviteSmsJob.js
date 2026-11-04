__d(
  "WAWebMexGroupStoreAndSendInviteSmsJob",
  [
    "WALogger",
    "WAWebMexClient",
    "WAWebMexGroupStoreAndSendInviteSmsJobMutation.graphql",
    "WAWebWamEnumCompanionInviteOriginType",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t, n) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r, a) {
          var i,
            l =
              e !== void 0
                ? e
                : (e = n(
                    "WAWebMexGroupStoreAndSendInviteSmsJobMutation.graphql",
                  )),
            u = {
              input: {
                entry_point: d(a),
                group_jid: t,
                participants: r.map(function (e) {
                  return { participant: e, server_sent_sms: !0 };
                }),
              },
            },
            c = yield o("WAWebMexClient").fetchQuery(l, u),
            p = c.xwa2_group_store_and_send_invites_sms,
            _ =
              p != null && p.group_jid === t
                ? (i = p.participant_responses) != null
                  ? i
                  : []
                : [],
            f = 0,
            g = r.map(function (e) {
              var t,
                n = _.find(function (t) {
                  return (t == null ? void 0 : t.jid) != null && m(t.jid, e);
                });
              n == null && f++;
              var r =
                (t = n == null ? void 0 : n.error_code) != null ? t : null;
              return {
                errorCode: r,
                participantUserJid: e,
                serverSent:
                  (n == null ? void 0 : n.server_sent) === !0 && r == null,
              };
            });
          return (
            f > 0 &&
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[out-contact-invite][group-ssi] response missing participants: missing=",
                      " requested=",
                      " groupMatched=",
                      "",
                    ])),
                  String(f),
                  String(r.length),
                  String((p == null ? void 0 : p.group_jid) === t),
                )
                .sendLogs(
                  "out-contact-group-server-sent-invite-response-mismatch",
                ),
            g
          );
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return e ===
        o("WAWebWamEnumCompanionInviteOriginType").COMPANION_INVITE_ORIGIN_TYPE
          .GROUPS_CREATE_PARTICIPANT_SELECTOR
        ? "groups_create_participant_selector"
        : e ===
            o("WAWebWamEnumCompanionInviteOriginType")
              .COMPANION_INVITE_ORIGIN_TYPE.GROUPS_ADD_PARTICIPANT_SELECTOR
          ? "groups_add_participant_selector"
          : "unknown";
    }
    function m(e, t) {
      return o("WAWebWidFactory")
        .createUserWidOrThrow(e)
        .equals(o("WAWebWidFactory").createUserWidOrThrow(t));
    }
    l.mexGroupStoreAndSendInviteSms = u;
  },
  98,
);
