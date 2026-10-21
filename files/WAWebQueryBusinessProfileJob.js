__d(
  "WAWebQueryBusinessProfileJob",
  [
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WAWap",
    "WAWebBackendErrors",
    "WAWebCommonParsersParseBusinessProfile",
    "WAWebCommsWapMd",
    "WAWebJidToWid",
    "asyncToGeneratorRuntime",
    "cr:17537",
  ],
  function (t, n, r, o, a, i, l) {
    var e = new (r("WADeprecatedWapParser"))(
      "businessProfileResponse",
      function (e) {
        (e.assertTag("iq"), e.assertFromServer());
        var t = e.child("business_profile"),
          n = [];
        return (
          t.forEachChildWithTag("profile", function (e) {
            var t,
              a = o("WAWebJidToWid").jidWithTypeToWid(e.attrJidWithType("jid")),
              i = e.attrString("tag"),
              l =
                (t = e.maybeChild("aea_account_type")) == null
                  ? void 0
                  : t.maybeAttrString("value"),
              s = r("WAWebCommonParsersParseBusinessProfile")(e);
            Object.keys(s).length
              ? n.push({ wid: a, tag: i, profile: s, aeaAccountType: l })
              : n.push({ wid: a, tag: i, aeaAccountType: l });
          }),
          n
        );
      },
    );
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          var a,
            i = (a = o("WAWap")).wap(
              "iq",
              {
                to: a.S_WHATSAPP_NET,
                xmlns: "w:biz",
                id: a.generateId(),
                type: "get",
              },
              a.wap(
                "business_profile",
                { v: a.INT(r) },
                t.map(function (e) {
                  return o("WAWap").wap("profile", {
                    jid: o("WAWebCommsWapMd").USER_JID(e.wid),
                    tag:
                      e.tag != null
                        ? o("WAWap").INT(e.tag)
                        : o("WAWap").DROP_ATTR,
                  });
                }),
              ),
            ),
            l = yield o("WADeprecatedSendIq").deprecatedSendIq(i, e);
          if (l.success)
            return (
              n("cr:17537") == null ||
                n("cr:17537").observeAeaBusinessAccountTypes(l.result),
              l.result
            );
          throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
            l.errorCode,
          );
        })),
        u.apply(this, arguments)
      );
    }
    l.default = s;
  },
  98,
);
