__d(
  "WAWebUnknownUserSelfHealFromDb",
  [
    "WALogger",
    "WAWebApiContact",
    "WAWebBackendApi",
    "WAWebWidFactory",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new Set();
    function u(t, n) {
      try {
        for (var r = [], a = [], i = [], l = 0; l < t.length; l++) {
          var u = t[l],
            p = n[l];
          if (!(p == null || !u.isLid()) && !s.has(u)) {
            var _ = !1;
            (c(u, p, r) && (_ = !0),
              d(u, p, a) && (_ = !0),
              m(u, p, i) && (_ = !0),
              _ && s.add(u));
          }
        }
        (r.length > 0 &&
          o("WAWebBackendApi").frontendFireAndForget(
            "bulkUpdatePhoneNumberJids",
            { lidPhoneNumberMappings: r },
          ),
          a.length > 0 &&
            o("WAWebBackendApi").frontendFireAndForget("bulkUpdateUsernames", {
              usernameUpdates: a,
            }),
          i.length > 0 &&
            o("WAWebBackendApi").frontendFireAndForget(
              "bulkUpdateContactPushnames",
              { pushnameUpdates: i },
            ));
      } catch (t) {
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "healUnknownUsersFromDbRows: heal failed",
              ])),
          )
          .sendLogs("unknown-user-self-heal-failed");
      }
    }
    function c(e, t, n) {
      var r = t.phoneNumber;
      if (r == null) return !1;
      if (
        (n.push({ lid: e.toString(), phoneNumber: r }),
        o("WAWebApiContact").getPhoneNumber(e) == null)
      ) {
        var a;
        o("WAWebApiContact").warmUpLidPnMapping(
          e,
          o("WAWebWidFactory").createUserWidOrThrow(r),
          (a = t.phoneNumberCreatedAt) != null ? a : 0,
        );
      }
      return !0;
    }
    function d(e, t, n) {
      var r = t.username;
      return r == null
        ? !1
        : (n.push({
            id: e.toString(),
            username: r,
            usernameCountryCode: t.usernameCountryCode,
            displayNameLID: t.displayNameLID,
          }),
          !0);
    }
    function m(e, t, n) {
      var o = t.pushname;
      return r("isStringNullOrEmpty")(o)
        ? !1
        : (n.push({ contactId: e, pushname: o }), !0);
    }
    l.healUnknownUsersFromDbRows = u;
  },
  98,
);
