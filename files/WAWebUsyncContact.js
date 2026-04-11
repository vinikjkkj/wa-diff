__d(
  "WAWebUsyncContact",
  ["WAWap", "WAWebCommsWapMd", "WAWebUsync"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      e.assertTag("contact");
      var t = e.maybeChild("error");
      if (t)
        return {
          errorCode: t.attrInt("code"),
          errorText: t.attrString("text"),
        };
      var n = { type: e.attrString("type") },
        r = e.hasAttr("username");
      return (
        r && (n.username = e.attrString("username")),
        e.hasContent() && (n.content = e.contentString()),
        n
      );
    }
    var s = (function () {
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
    ((l.contactParser = e), (l.USyncContactProtocol = s));
  },
  98,
);
