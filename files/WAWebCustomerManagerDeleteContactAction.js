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
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(e) {
      var t = d(e),
        n = await r("WAWebLidAwareContactsDB").get(t.toJid()),
        a = m(t);
      (n != null &&
        o("WAWebCustomerManagerContactTypeQuery").isSavedContact(n) &&
        (await p(t, a, n)),
        await c(e, a));
    }
    async function u(e) {
      var t,
        n = d(e),
        a = await r("WAWebLidAwareContactsDB").get(n.toJid());
      if (
        a == null ||
        !o("WAWebCustomerManagerContactTypeQuery").isSavedContact(a) ||
        a.isUsernameContact === !0
      )
        return { kind: "single" };
      var i = m(n),
        l =
          i != null &&
          (t = o("WAWebApiContact").getPnIfLidIsLatestMapping(i)) != null
            ? t
            : n;
      return l.isLid()
        ? { kind: "single" }
        : { kind: "batch", phoneNumber: l.user, lid: i };
    }
    async function c(t, n) {
      var a = d(t),
        i = await r("WAWebLidAwareContactsDB").get(a.toJid());
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
          await o("WAWebCustomerDataAction").customerDataDeleteAction(l);
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
      o("WAWebCustomerProfileChangeNotifier").notifyCustomerProfileChanged(l);
    }
    function d(e) {
      var t = o("WAWebJidToWid").chatJidToChatWid(e);
      if (!t.isRegularUser())
        throw r("err")("[CustomerManager] Can only delete user contacts");
      return t;
    }
    function m(e) {
      return e.isLid() ? e : o("WAWebApiContact").getCurrentLid(e);
    }
    async function p(e, t, n) {
      var a;
      if (n.isUsernameContact === !0) {
        var i = n.username;
        if (t == null || !o("WAWebUsernameTypes").isPresentUsername(i))
          throw r("err")(
            "[CustomerManager] Cannot delete a username contact without its LID and username",
          );
        await o("WAWebDeleteContactAction").deleteContactAction({
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
      await o("WAWebDeleteContactAction").deleteContactAction({
        phoneNumber: l,
      });
    }
    ((l.deleteContactFromCustomerManager = s),
      (l.planContactDelete = u),
      (l.finishContactDelete = c));
  },
  98,
);
