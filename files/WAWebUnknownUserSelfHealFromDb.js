__d(
  "WAWebUnknownUserSelfHealFromDb",
  [
    "Promise",
    "WALogger",
    "WAWebApiContact",
    "WAWebBackendApi",
    "WAWebWidFactory",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = new Set(),
      d = new Set();
    function m(e) {
      return d.has(e);
    }
    function p(t, n) {
      try {
        for (var r = [], a = [], i = [], l = [], s = 0; s < t.length; s++) {
          var u = t[s],
            d = n[s];
          if (!(d == null || !u.isLid()) && !c.has(u)) {
            var m = !1;
            (f(u, d, r) && (m = !0),
              g(u, d, a) && (m = !0),
              h(u, d, i) && (m = !0),
              m && (c.add(u), l.push(u)));
          }
        }
        var p = [];
        (r.length > 0 &&
          p.push(
            o("WAWebBackendApi").frontendSendAndReceive(
              "bulkUpdatePhoneNumberJids",
              { lidPhoneNumberMappings: r },
            ),
          ),
          a.length > 0 &&
            p.push(
              o("WAWebBackendApi").frontendSendAndReceive(
                "bulkUpdateUsernames",
                { usernameUpdates: a },
              ),
            ),
          i.length > 0 &&
            p.push(
              o("WAWebBackendApi").frontendSendAndReceive(
                "bulkUpdateContactPushnames",
                { pushnameUpdates: i },
              ),
            ),
          l.length > 0 && _(l, p));
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
    function _(e, t) {
      for (var r of e) d.add(r);
      (u || (u = n("Promise")))
        .all(t)
        .catch(function (e) {
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "healUnknownUsersFromDbRows: heal dispatch failed",
                ])),
            )
            .sendLogs("unknown-user-self-heal-dispatch-failed");
        })
        .then(function () {
          for (var t of e) d.delete(t);
        });
    }
    function f(e, t, n) {
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
    function g(e, t, n) {
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
    function h(e, t, n) {
      var o = t.pushname;
      return r("isStringNullOrEmpty")(o)
        ? !1
        : (n.push({ contactId: e, pushname: o }), !0);
    }
    ((l.isSelfHealInFlight = m), (l.healUnknownUsersFromDbRows = p));
  },
  98,
);
