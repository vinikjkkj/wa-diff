__d(
  "WAWebCustomerManagerDeleteContactAction",
  [
    "WALogger",
    "WAWebApiContact",
    "WAWebCustomerDataAction",
    "WAWebCustomerManagerContactTypeQuery",
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
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = _(e),
            n = yield r("WAWebLidAwareContactsDB").get(t.toJid()),
            a = f(t);
          (n != null &&
            o("WAWebCustomerManagerContactTypeQuery").isSavedContact(n) &&
            (yield g(t, a, n)),
            yield m(e, a));
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = _(e),
            a = yield r("WAWebLidAwareContactsDB").get(n.toJid());
          if (
            a == null ||
            !o("WAWebCustomerManagerContactTypeQuery").isSavedContact(a) ||
            a.isUsernameContact === !0
          )
            return { kind: "single" };
          var i = f(n),
            l =
              i != null &&
              (t = o("WAWebApiContact").getPnIfLidIsLatestMapping(i)) != null
                ? t
                : n;
          return l.isLid()
            ? { kind: "single" }
            : { kind: "batch", phoneNumber: l.user, lid: i };
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a = _(t),
            i = yield r("WAWebLidAwareContactsDB").get(a.toJid());
          if (
            i != null &&
            o("WAWebCustomerManagerContactTypeQuery").isSavedContact(i)
          )
            throw r("err")(
              "[CustomerManager] Contact is still saved after deletion",
            );
          var l = n != null ? o("WAWebWidToJid").widToChatJid(n) : t;
          if (n != null)
            try {
              yield o("WAWebCustomerDataAction").customerDataDeleteAction(l);
            } catch (t) {
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[CustomerManager] Failed to remove legacy contact data",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("contact-manager-legacy-contact-data-remove-failed");
            }
          o("WAWebCustomerProfileChangeNotifier").notifyCustomerProfileChanged(
            l,
          );
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      var t = o("WAWebJidToWid").chatJidToChatWid(e);
      if (!t.isRegularUser())
        throw r("err")("[CustomerManager] Can only delete user contacts");
      return t;
    }
    function f(e) {
      return e.isLid() ? e : o("WAWebApiContact").getCurrentLid(e);
    }
    function g(e, t, n) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a;
          if (n.isUsernameContact === !0) {
            var i = n.username;
            if (t == null || !o("WAWebUsernameTypes").isPresentUsername(i))
              throw r("err")(
                "[CustomerManager] Cannot delete a username contact without its LID and username",
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
        h.apply(this, arguments)
      );
    }
    ((l.deleteContactFromCustomerManager = s),
      (l.planContactDelete = c),
      (l.finishContactDelete = m));
  },
  98,
);
