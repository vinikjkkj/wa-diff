__d(
  "WAWebCoexV2PhoneNumberMapping",
  ["WALogger", "WAWebCoexV2RepresentedIdentityFromMessage"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t, n) {
      var r,
        a = o(
          "WAWebCoexV2RepresentedIdentityFromMessage",
        ).maybeResolveCoexV2RepresentedIdentityFromMessage(t, n);
      if (a == null) return null;
      var i = a.representedIdentity;
      if (i == null) {
        var l = n == null ? void 0 : n.targetChatJid;
        return l != null && !l.isRegularUser()
          ? { mapping: null }
          : (o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[coexv2] relay phone mapping rejected invalid represented identity",
                  ])),
              )
              .sendLogs("coexv2-relay-phone-mapping-invalid-identity"),
            { mapping: null });
      }
      if (i.representedLid == null || i.phoneNumber == null)
        return { mapping: null };
      var s = i.identitySource,
        u = i.phoneNumber,
        c = i.representedLid;
      return s === "peer-recipient" && t.recipientLatestLid != null
        ? {
            mapping: {
              lid: c,
              latestLid: t.recipientLatestLid,
              pn: u,
              learningSource: "recipient-latest-lid",
            },
          }
        : s === "sender"
          ? {
              mapping: {
                lid: c,
                pn: u,
                learningSource: "process-phone-number-mapping",
              },
            }
          : {
              mapping: {
                lid: c,
                pn: u,
                learningSource:
                  (n == null || (r = n.targetChatJid) == null
                    ? void 0
                    : r.isLid()) === !0
                    ? "peer-lid-message"
                    : "peer-pn-message",
              },
            };
    }
    l.maybeGetCoexV2PhoneNumberMappingPlan = s;
  },
  98,
);
