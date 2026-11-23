__d(
  "WAWebContactSyncPrivacyHints",
  [
    "WALogger",
    "WAPhoneFindCC",
    "WAWebABProps",
    "WAWebGroupsParticipantsApi",
    "WAWebLidMigrationUtils",
    "WAWebSchemaChat",
    "WAWebSchemaParticipant",
    "WAWebTrustedContactsUtils",
    "WAWebWid",
    "WAWebWidFactory",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      return (
        o("WAWebABProps").getABPropConfigValue("web_usync_privacy_hints") === !0
      );
    }
    async function u(t) {
      try {
        return await c(t);
      } catch (n) {
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[usync] privacy hint lookup failed for ",
                  " users; sending without hints",
                ])),
              t.length,
            )
            .catching(r("getErrorSafe")(n))
            .sendLogs("usync-privacy-hints-lookup-failed", { sampling: 0.01 }),
          new Map()
        );
      }
    }
    async function c(e) {
      var t = new Map(),
        n = new Map();
      for (var r of e) {
        var a = r.isUser() ? o("WAWebLidMigrationUtils").toUserLid(r) : null;
        if (a != null) {
          var i,
            l = (i = n.get(a)) != null ? i : [];
          (l.push(r), n.set(a, l));
        }
      }
      return (n.size === 0 || (await d(t, n), await m(t, n)), t);
    }
    async function d(e, t) {
      var n = await o("WAWebSchemaChat")
        .getChatTable()
        .anyOf(
          ["accountLid"],
          Array.from(t.keys(), function (e) {
            return e.toString();
          }),
        );
      for (var r of n) {
        var a = r.accountLid,
          i = r.tcToken,
          l = r.tcTokenTimestamp;
        a == null ||
          i == null ||
          l == null ||
          o("WAWebTrustedContactsUtils").isTokenExpired(
            l,
            o("WAWebTrustedContactsUtils").TcTokenMode.Receiver,
          ) ||
          p(e, t.get(o("WAWebWidFactory").createWid(a)), {
            tcToken: i,
            commonGid: null,
          });
      }
    }
    async function m(e, t) {
      var n = Array.from(t)
        .filter(function (t) {
          var n = t[1];
          return n.some(function (t) {
            return !e.has(t);
          });
        })
        .map(function (e) {
          var t = e[0];
          return t.toString();
        });
      if (n.length !== 0) {
        var r = await o("WAWebSchemaParticipant")
          .getParticipantTable()
          .anyOf(["participants"], n);
        for (var a of r)
          if (
            o(
              "WAWebGroupsParticipantsApi",
            ).checkMyMembershipForParticipantRecord(a)
          )
            for (var i of a.participants)
              p(e, t.get(o("WAWebWidFactory").createWid(i)), {
                tcToken: null,
                commonGid: o("WAWebWidFactory").asGroupWidOrThrow(
                  o("WAWebWidFactory").createWid(a.groupId),
                ),
              });
      }
    }
    function p(e, t, n) {
      for (var r of t != null ? t : []) e.has(r) || e.set(r, n);
    }
    async function _(e) {
      var t = await u([e]);
      return t.get(e);
    }
    function f(e) {
      var t = o("WAPhoneFindCC").extractDigits(e) + "@c.us";
      return r("WAWebWid").isWid(t)
        ? o("WAWebWidFactory").createUserWidOrThrow(t)
        : null;
    }
    async function g(e) {
      if (s()) {
        var t = [];
        for (var n of e) {
          var r = n.wid;
          r != null && t.push(r);
        }
        if (t.length !== 0) {
          var o = await u(t);
          for (var a of e) {
            var i = a.user,
              l = a.wid,
              c = l != null ? o.get(l) : null;
            c != null && i.withTcToken(c.tcToken).withCommonGid(c.commonGid);
          }
        }
      }
    }
    ((l.usyncPrivacyHintsEnabled = s),
      (l.getUsyncPrivacyHints = u),
      (l.getUsyncPrivacyHint = _),
      (l.userWidFromPhone = f),
      (l.attachUsyncPrivacyHints = g));
  },
  98,
);
