__d(
  "WAWebUsyncContact",
  ["WALogger", "WAWap", "WAWebCommsWapMd", "WAWebUsync"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      t.assertTag("contact");
      var n = t.maybeChild("error");
      if (n)
        return {
          errorCode: n.attrInt("code"),
          errorText: n.attrString("text"),
        };
      t.hasAttr("type") ||
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[usync] contact node has missing type attribute",
              ])),
          )
          .sendLogs("usync-contact-missing-type");
      var r = { type: t.attrString("type") };
      return (
        t.hasAttr("username") && (r.username = t.attrString("username")),
        t.hasContent() && (r.content = t.contentString()),
        r
      );
    }
    var u = (function () {
      function e(e) {
        this.addressingMode = e;
      }
      var t = e.prototype;
      return (
        (t.getName = function () {
          return "contact";
        }),
        (t.getQueryElement = function () {
          return o("WAWap").wap("contact", {
            addressing_mode:
              this.addressingMode === o("WAWebUsync").USYNC_ADDRESSING_MODE.LID
                ? o("WAWap").CUSTOM_STRING(
                    o("WAWebUsync").USYNC_ADDRESSING_MODE.LID,
                  )
                : o("WAWap").DROP_ATTR,
          });
        }),
        (t.getUserElement = function (t) {
          var e = t.getPhone(),
            n = t.getUsername(),
            r = t.getType(),
            a = t.getPin(),
            i = t.getLid();
          return e != null
            ? o("WAWap").wap("contact", null, e)
            : n != null
              ? o("WAWap").wap("contact", {
                  username: o("WAWap").CUSTOM_STRING(n),
                  pin:
                    a != null
                      ? o("WAWap").CUSTOM_STRING(a)
                      : o("WAWap").DROP_ATTR,
                  lid:
                    i != null
                      ? o("WAWebCommsWapMd").USER_JID(i)
                      : o("WAWap").DROP_ATTR,
                })
              : r != null
                ? o("WAWap").wap("contact", {
                    type: o("WAWap").CUSTOM_STRING(r),
                  })
                : null;
        }),
        e
      );
    })();
    ((l.contactParser = s), (l.USyncContactProtocol = u));
  },
  98,
);
