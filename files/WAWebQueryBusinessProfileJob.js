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
            var t = o("WAWebJidToWid").jidWithTypeToWid(
                e.attrJidWithType("jid"),
              ),
              a = e.attrString("tag"),
              i = r("WAWebCommonParsersParseBusinessProfile")(e);
            Object.keys(i).length
              ? n.push({ wid: t, tag: a, profile: i })
              : n.push({ wid: t, tag: a });
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
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var r,
            a = (r = o("WAWap")).wap(
              "iq",
              {
                to: r.S_WHATSAPP_NET,
                xmlns: "w:biz",
                id: r.generateId(),
                type: "get",
              },
              r.wap(
                "business_profile",
                { v: r.INT(n) },
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
            i = yield o("WADeprecatedSendIq").deprecatedSendIq(a, e);
          if (i.success) return i.result;
          throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
            i.errorCode,
          );
        })),
        u.apply(this, arguments)
      );
    }
    l.default = s;
  },
  98,
);
