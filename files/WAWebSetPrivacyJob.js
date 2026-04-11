__d(
  "WAWebSetPrivacyJob",
  [
    "invariant",
    "$InternalEnum",
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WALogger",
    "WAWap",
    "WAWebABProps",
    "WAWebBackendErrors",
    "WAWebCommsWapMd",
    "WAWebLidMigrationUtils",
    "WAWebQueryPrivacyDisallowedListUtil",
    "WAWebSchemaPrivacyDisallowedList",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = new (r("WADeprecatedWapParser"))("setPrivacyParser", function (e) {
        return e.child("privacy").mapChildrenWithTag("category", function (e) {
          if (e.attrString("value") === "error") {
            var t = e.child("error");
            return new (o("WAWebBackendErrors").ServerStatusCodeError)(
              t.attrInt("code"),
              t.attrString("text"),
            );
          }
          return {
            name: e.attrString("name"),
            value: e.attrString("value"),
            dhash: e.maybeAttrString("dhash"),
          };
        });
      }),
      c = n("$InternalEnum")({ Add: "add", Remove: "remove" });
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = p(e),
            n = yield o("WADeprecatedSendIq").deprecatedSendIq(
              o("WAWap").wap(
                "iq",
                {
                  to: o("WAWap").S_WHATSAPP_NET,
                  type: "set",
                  xmlns: "privacy",
                  id: o("WAWap").generateId(),
                },
                t,
              ),
              u,
            );
          if (n.success === !0) return n.result;
          throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
            n.errorCode,
            n.errorText,
          );
        })),
        m.apply(this, arguments)
      );
    }
    function p(t) {
      var n = t.dhash,
        r = t.name,
        a = t.users,
        i = t.value;
      if (a == null) return _(r, i);
      if (
        o(
          "WAWebQueryPrivacyDisallowedListUtil",
        ).isPrivacyDisallowedListTypeLidMigrated(y(r))
      )
        try {
          return f(r, i, a, n);
        } catch (t) {
          return (
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[privacy] setPrivacy: failed to create lid privacy node ",
                    "",
                  ])),
                t,
              )
              .sendLogs("create-lid-privacy-node-failed"),
            g(r, i, a, n)
          );
        }
      return g(r, i, a, n);
    }
    function _(e, t) {
      var n;
      return (n = o("WAWap")).wap(
        "privacy",
        null,
        n.wap("category", {
          name: n.CUSTOM_STRING(e),
          value: n.CUSTOM_STRING(t),
        }),
      );
    }
    function f(e, t, n, r) {
      var a,
        i = n.map(function (e) {
          return h(e);
        });
      return (a = o("WAWap")).wap(
        "privacy",
        { addressing_mode: a.CUSTOM_STRING("lid") },
        a.wap(
          "category",
          {
            name: a.CUSTOM_STRING(e),
            value: a.CUSTOM_STRING(t),
            dhash: a.CUSTOM_STRING(r != null ? r : "none"),
          },
          i,
        ),
      );
    }
    function g(e, t, n, r) {
      var a,
        i = n.map(function (e) {
          var t = e.action,
            n = e.wid;
          return o("WAWap").wap("user", {
            action: o("WAWap").CUSTOM_STRING(t),
            jid: o("WAWebCommsWapMd").JID(n),
          });
        });
      return (a = o("WAWap")).wap(
        "privacy",
        null,
        a.wap(
          "category",
          {
            name: a.CUSTOM_STRING(e),
            value: a.CUSTOM_STRING(t),
            dhash: a.CUSTOM_STRING(r != null ? r : "none"),
          },
          i,
        ),
      );
    }
    function h(e) {
      var t = e.action,
        n = e.username,
        a = e.wid,
        i = o("WAWebLidMigrationUtils").toLid(a);
      if (i == null)
        throw r("err")(
          "createLidUserNode: unknown-lid-for-privacy-list-contact",
        );
      if (
        o("WAWebABProps").getABPropConfigValue(
          "username_contact_privacy_setting_allow_uncontact_set_enable",
        ) &&
        n != null
      )
        return o("WAWap").wap("user", {
          action: o("WAWap").CUSTOM_STRING(t),
          jid: o("WAWebCommsWapMd").JID(i),
          username: o("WAWap").CUSTOM_STRING(n),
        });
      var l = o("WAWebLidMigrationUtils").toPn(a);
      if (l == null)
        throw r("err")(
          "createLidUserNode: unknown-username-and-pn-for-privacy-list-contact",
        );
      return o("WAWap").wap("user", {
        action: o("WAWap").CUSTOM_STRING(t),
        jid: o("WAWebCommsWapMd").JID(i),
        pn_jid: o("WAWebCommsWapMd").JID(l),
      });
    }
    function y(e) {
      return e === "groupadd"
        ? o("WAWebSchemaPrivacyDisallowedList").PrivacyDisallowedListType
            .GroupAdd
        : e === "last"
          ? o("WAWebSchemaPrivacyDisallowedList").PrivacyDisallowedListType
              .LastSeen
          : e === "profile"
            ? o("WAWebSchemaPrivacyDisallowedList").PrivacyDisallowedListType
                .ProfilePicture
            : e === "status"
              ? o("WAWebSchemaPrivacyDisallowedList").PrivacyDisallowedListType
                  .About
              : s(!1, "[privacy] getPrivacyDisallowedListType: invalid name");
    }
    ((l.PrivacyUserAction = c), (l.setPrivacy = d));
  },
  98,
);
