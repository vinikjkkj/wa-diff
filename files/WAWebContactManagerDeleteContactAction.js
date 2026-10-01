__d(
  "WAWebContactManagerDeleteContactAction",
  [
    "WALogger",
    "WAWebApiContact",
    "WAWebContactManagerContactTypeQuery",
    "WAWebCustomerDataAction",
    "WAWebCustomerProfileChangeNotifier",
    "WAWebDeleteContactAction",
    "WAWebJidToWid",
    "WAWebLidAwareContactsDB",
    "WAWebUsernameTypes",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = o("WAWebJidToWid").chatJidToChatWid(t);
          if (!n.isRegularUser())
            throw r("err")("[ContactManager] Can only delete user contacts");
          var a = yield r("WAWebLidAwareContactsDB").get(n.toJid()),
            i = n.isLid() ? n : o("WAWebApiContact").getCurrentLid(n);
          if (
            a != null &&
            o("WAWebContactManagerContactTypeQuery").isSavedContact(a)
          ) {
            yield c(n, i, a);
            var l = yield r("WAWebLidAwareContactsDB").get(n.toJid());
            if (
              l != null &&
              o("WAWebContactManagerContactTypeQuery").isSavedContact(l)
            )
              throw r("err")(
                "[ContactManager] Contact is still saved after deletion",
              );
          }
          var s = i != null ? o("WAWebWidToJid").widToChatJid(i) : t;
          if (i != null)
            try {
              yield o("WAWebCustomerDataAction").customerDataDeleteAction(s);
            } catch (t) {
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[ContactManager] Failed to remove legacy contact data",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("contact-manager-legacy-contact-data-remove-failed");
            }
          o("WAWebCustomerProfileChangeNotifier").notifyCustomerProfileChanged(
            s,
          );
        })),
        u.apply(this, arguments)
      );
    }
    function c(e, t, n) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a;
          if (n.isUsernameContact === !0) {
            var i = n.username;
            if (t == null || !o("WAWebUsernameTypes").isPresentUsername(i))
              throw r("err")(
                "[ContactManager] Cannot delete a username contact without its LID and username",
              );
            yield o("WAWebDeleteContactAction").deleteContactAction({
              username: o("WAWebUsernameTypes").serializeUsername(i),
              lid: t,
            });
            return;
          }
          var l =
            t != null &&
            (a = o("WAWebApiContact").getPnIfLidIsLatestMapping(t)) != null
              ? a
              : e;
          yield o("WAWebDeleteContactAction").deleteContactAction({
            phoneNumber: l,
          });
        })),
        d.apply(this, arguments)
      );
    }
    l.deleteContactFromContactManager = s;
  },
  98,
);
