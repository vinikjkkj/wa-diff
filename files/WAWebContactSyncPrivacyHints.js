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
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      return (
        o("WAWebABProps").getABPropConfigValue("web_usync_privacy_hints") === !0
      );
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            return yield d(t);
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
                .sendLogs("usync-privacy-hints-lookup-failed", {
                  sampling: 0.01,
                }),
              new Map()
            );
          }
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new Map(),
            n = new Map();
          for (var r of e) {
            var a = R(r),
              i = a != null ? o("WAWebLidMigrationUtils").toUserLid(a) : null;
            if (i != null) {
              var l,
                s = (l = n.get(i)) != null ? l : [];
              (s.push(r), n.set(i, s));
            }
          }
          return (n.size === 0 || (yield p(t, n), yield f(t, n)), t);
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebSchemaChat")
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
              h(e, t.get(o("WAWebWidFactory").createWid(a)), {
                tcToken: i,
                commonGid: null,
              });
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
            var r = yield o("WAWebSchemaParticipant")
              .getParticipantTable()
              .anyOf(["participants"], n);
            for (var a of r)
              if (
                o(
                  "WAWebGroupsParticipantsApi",
                ).checkMyMembershipForParticipantRecord(a)
              )
                for (var i of a.participants)
                  h(e, t.get(o("WAWebWidFactory").createWid(i)), {
                    tcToken: null,
                    commonGid: o("WAWebWidFactory").asGroupWidOrThrow(
                      o("WAWebWidFactory").createWid(a.groupId),
                    ),
                  });
          }
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t, n) {
      for (var r of t != null ? t : []) e.has(r) || e.set(r, n);
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield u([e]);
          return t.get(e);
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      var t = o("WAPhoneFindCC").extractDigits(e) + "@c.us";
      return r("WAWebWid").isWid(t)
        ? o("WAWebWidFactory").createUserWidOrThrow(t)
        : null;
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (s()) {
            var t = [];
            for (var n of e) {
              var r = n.wid;
              r != null && t.push(r);
            }
            if (t.length !== 0) {
              var o = yield u(t);
              for (var a of e) {
                var i = a.user,
                  l = a.wid,
                  c = l != null ? o.get(l) : null;
                c != null &&
                  i.withTcToken(c.tcToken).withCommonGid(c.commonGid);
              }
            }
          }
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      return e.isUser() ? e : null;
    }
    ((l.usyncPrivacyHintsEnabled = s),
      (l.getUsyncPrivacyHints = u),
      (l.getUsyncPrivacyHint = y),
      (l.userWidFromPhone = b),
      (l.attachUsyncPrivacyHints = v));
  },
  98,
);
