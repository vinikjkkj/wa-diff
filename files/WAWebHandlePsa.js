__d(
  "WAWebHandlePsa",
  [
    "$InternalEnum",
    "WAByteArray",
    "WADeprecatedWapParser",
    "WAJids",
    "WALogger",
    "WAWap",
    "WAWebCommsWapMd",
    "WAWebJidToWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = n("$InternalEnum")({ Image: "image", Video: "video", Text: "text" }),
      c = new (r("WADeprecatedWapParser"))("incomingCampaignParser", function (
        e,
      ) {
        (e.assertTag("notification"),
          e.assertAttr("from", o("WAJids").STATUS_JID));
        var t = e.attrString("id"),
          n = o("WAWebJidToWid").userJidToUserWid(e.attrUserJid("participant")),
          r = e.attrTime("t"),
          a = e.child("campaign"),
          i = a.hasChild("revoke"),
          l = a.attrString("id"),
          s = a.maybeAttrInt("duration"),
          c = a.mapChildrenWithTag("message", function (e) {
            var t = e.child("media");
            t.attrEnumValues("mediatype", u.members());
            var n = {
              id: e.attrString("id"),
              ts: r,
              body: o("WAByteArray").uint8ArrayToBuffer(t.contentBytes()),
            };
            return n;
          });
        return {
          participant: n,
          stanzaId: t,
          campaignId: l,
          campaignDuration: s,
          revoke: i,
          ts: r,
          messages: c,
        };
      });
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = c.parse(t);
          if (n.error)
            throw (
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "error while parsing: ",
                    "",
                  ])),
                t.toString(),
              ),
              o("WALogger").ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Parsing Error: ",
                    "",
                  ])),
                n.error.toString(),
              ),
              n.error
            );
          var r = n.success,
            a = o("WAWap").wap("ack", {
              id: o("WAWap").CUSTOM_STRING(r.stanzaId),
              participant: o("WAWebCommsWapMd").JID(r.participant),
              class: "notification",
              type: "psa",
              to: o("WAWebCommsWapMd").JID(
                o("WAWebWidFactory").createWid(o("WAJids").STATUS_JID),
              ),
            });
          return a;
        })),
        m.apply(this, arguments)
      );
    }
    l.default = d;
  },
  98,
);
