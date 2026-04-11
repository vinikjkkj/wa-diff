__d(
  "WAWebMemberLabelHistorySync",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebBackendApi",
    "WAWebLidMigrationUtils",
    "WAWebMemberLabel.flow",
    "WAWebMemberLabelBridgeApi",
    "WAWebMemberLabelBulkJob",
    "WAWebMemberLabelGating",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "compactMap",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d, m, p;
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (o("WAWebMemberLabelGating").isMemberLabelInfraEnabled())
            try {
              var a = [],
                i = t.conversations
                  .filter(function (e) {
                    var t = o("WAWebWidFactory").createWid(e.id);
                    return t.isGroup() ? e.participant.length > 0 : !1;
                  })
                  .flatMap(function (t) {
                    var n = o("WAWebWidFactory").createWid(t.id),
                      a = o("WAWebWidToJid").widToGroupJid(n);
                    return r("compactMap")(t.participant, function (t) {
                      try {
                        var n;
                        if (t.memberLabel == null) return null;
                        var i = o("WAWebWidFactory").createWid(t.userJid);
                        if (!i) return null;
                        var l = o("WAWebLidMigrationUtils").toUserLid(i);
                        if (!l) return null;
                        var u = o("WAWebWidToJid").userLidtoLidUserJid(l),
                          c = t.memberLabel,
                          d = o("WAWebMemberLabel.flow").castToMemberLabeString(
                            String(
                              (n = c == null ? void 0 : c.label) != null
                                ? n
                                : "",
                            ),
                          ),
                          m = o("WATimeUtils").castToUnixTime(
                            Number(c == null ? void 0 : c.labelTimestamp),
                          );
                        return {
                          chatId: a,
                          member: u,
                          label: d,
                          lastEditTimestamp: m,
                        };
                      } catch (t) {
                        return (
                          r("gkx")("26258")
                            ? o("WALogger")
                                .ERROR(
                                  e ||
                                    (e =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "[history sync] Error processing member label",
                                      ])),
                                )
                                .sendLogs(
                                  "Failed to handle member label change",
                                )
                            : o("WALogger")
                                .ERROR(
                                  s ||
                                    (s =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "[history sync] Error processing member label: ",
                                        "",
                                      ])),
                                  t,
                                )
                                .sendLogs(
                                  "Failed to handle member label change",
                                ),
                          null
                        );
                      }
                    });
                  });
              for (var l of i) {
                var _ = l.chatId,
                  f = l.label,
                  g = l.lastEditTimestamp,
                  h = l.member;
                a.push(
                  o("WAWebMemberLabelBridgeApi").createUpsert(_, h, {
                    label: f,
                    lastEditTimestamp: g,
                  }),
                );
              }
              if (a.length === 0) return;
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] processing ",
                    " member label updates",
                  ])),
                a.length,
              );
              var y = yield (p || (p = n("Promise"))).all(
                  a.map(o("WAWebMemberLabelBulkJob").updateMemberLabelsBatched),
                ),
                C = y.filter(Boolean);
              if (C.length === 0) return;
              (o("WAWebBackendApi").frontendFireAndForget(
                "updateMemberLabelCollection",
                { updates: C },
              ),
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] successfully processed ",
                      " member label updates",
                    ])),
                  C.length,
                ));
            } catch (e) {
              r("gkx")("26258")
                ? o("WALogger")
                    .ERROR(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "[history sync] Failed to process member labels from history sync",
                        ])),
                    )
                    .sendLogs(
                      "Failed to process member labels from history sync",
                    )
                : o("WALogger")
                    .ERROR(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "[history sync] Failed to process member labels from history sync: ",
                          "",
                        ])),
                      e,
                    )
                    .sendLogs(
                      "Failed to process member labels from history sync",
                    );
            }
        })),
        f.apply(this, arguments)
      );
    }
    l.processMemberLabels = _;
  },
  98,
);
