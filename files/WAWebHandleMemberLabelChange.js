__d(
  "WAWebHandleMemberLabelChange",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebBackendApi",
    "WAWebLidMigrationUtils",
    "WAWebMemberLabel.flow",
    "WAWebMemberLabelCommonUtils",
    "WAWebMemberLabelJob",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d, m;
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n,
            r = t.baseMessage,
            a = t.memberLabel,
            i = r.id.remote,
            l = r.id.participant;
          if (!i.isGroup()) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[handleMemberLabelChange]: chat is not a group",
                  ])),
              )
              .sendLogs("Failed to handle member label change");
            return;
          }
          if (l == null) {
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[handleMemberLabelChange]: member is null",
                  ])),
              )
              .sendLogs("Failed to handle member label change");
            return;
          }
          var p = o("WAWebLidMigrationUtils").toUserLid(l);
          if (!p) {
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[handleMemberLabelChange]: member id\u2192lid failed",
                  ])),
              )
              .sendLogs("Failed to handle member label change");
            return;
          }
          var _ = a.labelTimestamp;
          if (_ == null) {
            o("WALogger")
              .ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[handleMemberLabelChange]: timestamp is null",
                  ])),
              )
              .sendLogs("Failed to handle member label change");
            return;
          }
          var f = (n = a.label) != null ? n : "";
          if (!o("WAWebMemberLabelCommonUtils").isMemberLabelStrValid(f)) {
            o("WALogger")
              .ERROR(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[handleMemberLabelChange]: member label is invalid",
                  ])),
              )
              .sendLogs("Failed to handle member label change");
            return;
          }
          var g = {
              chatId: o("WAWebWidToJid").widToGroupJid(i),
              member: o("WAWebWidToJid").userLidtoLidUserJid(p),
              memberLabel: {
                label: o("WAWebMemberLabel.flow").castToMemberLabeString(
                  String(f),
                ),
                lastEditTimestamp: o("WATimeUtils").castToUnixTime(Number(_)),
              },
            },
            h = yield o("WAWebMemberLabelJob").createOrUpdateMemberLabel(g);
          h &&
            (o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[handleMemberLabelChange]: member label updated successfully",
                ])),
            ),
            yield o("WAWebBackendApi").frontendSendAndReceive(
              "updateMemberLabelCollection",
              { updates: [{ type: "UPSERT", data: g }] },
            ));
        })),
        _.apply(this, arguments)
      );
    }
    l.handleMemberLabelChange = p;
  },
  98,
);
