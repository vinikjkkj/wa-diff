__d(
  "WAWebMemberLabelHistorySync",
  [
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
    "compactMap",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d, m;
    async function p(t) {
      if (o("WAWebMemberLabelGating").isMemberLabelInfraEnabled())
        try {
          var n = [],
            a = t.conversations
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
                          (n = c == null ? void 0 : c.label) != null ? n : "",
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
                                (e = babelHelpers.taggedTemplateLiteralLoose([
                                  "[history sync] Error processing member label",
                                ])),
                            )
                            .sendLogs("Failed to handle member label change")
                        : o("WALogger")
                            .ERROR(
                              s ||
                                (s = babelHelpers.taggedTemplateLiteralLoose([
                                  "[history sync] Error processing member label: ",
                                  "",
                                ])),
                              t,
                            )
                            .sendLogs("Failed to handle member label change"),
                      null
                    );
                  }
                });
              });
          for (var i of a) {
            var l = i.chatId,
              p = i.label,
              _ = i.lastEditTimestamp,
              f = i.member;
            n.push(
              o("WAWebMemberLabelBridgeApi").createUpsert(l, f, {
                label: p,
                lastEditTimestamp: _,
              }),
            );
          }
          if (n.length === 0) return;
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] processing ",
                " member label updates",
              ])),
            n.length,
          );
          var g = await Promise.all(
              n.map(o("WAWebMemberLabelBulkJob").updateMemberLabelsBatched),
            ),
            h = g.filter(Boolean);
          if (h.length === 0) return;
          (o("WAWebBackendApi").frontendFireAndForget(
            "updateMemberLabelCollection",
            { updates: h },
          ),
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] successfully processed ",
                  " member label updates",
                ])),
              h.length,
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
                .sendLogs("Failed to process member labels from history sync")
            : o("WALogger")
                .ERROR(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] Failed to process member labels from history sync: ",
                      "",
                    ])),
                  e,
                )
                .sendLogs("Failed to process member labels from history sync");
        }
    }
    l.processMemberLabels = p;
  },
  98,
);
