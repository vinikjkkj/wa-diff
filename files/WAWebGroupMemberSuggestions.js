__d(
  "WAWebGroupMemberSuggestions",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebBotUtils",
    "WAWebChatCollection",
    "WAWebContactExternalUserState",
    "WAWebLidMigrationUtils",
    "WAWebQueryFrequentlyContactedMsgCount",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = { contacts: [], frequentContacts: [], recentContacts: [] },
      c = 5,
      d = 5,
      m = 20,
      p = 72 * o("WATimeUtils").HOUR_SECONDS,
      _ = 8 * o("WATimeUtils").DAY_SECONDS,
      f = 100,
      g = 750,
      h = [
        function (e) {
          return o("WAWebUserPrefsMeUser").isMeAccount(e.id);
        },
        function (e) {
          return e.isContactBlocked;
        },
        function (e) {
          return e.id.isBot();
        },
        function (e) {
          return o("WAWebBotUtils").isAnyMetaAiBot(e.id);
        },
        function (e) {
          return o("WAWebBotUtils").isBusinessAssistantBot(e.id);
        },
        function (e) {
          return e.id.equals(o("WAWebBotUtils").META_BOT_LID_WID);
        },
        function (e) {
          return e.id.isAiHub();
        },
        function (e) {
          return e.id.isPSA();
        },
        function (e) {
          var t;
          return (
            ((t = e.externalUserState) != null
              ? t
              : o("WAWebContactExternalUserState").ExternalUserState.Unset) !==
            o("WAWebContactExternalUserState").ExternalUserState.Unset
          );
        },
      ];
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = function (n) {
              return (
                !h.some(function (e) {
                  return e(n.contact);
                }) && !T(e, n)
              );
            },
            r = o("WATimeUtils").unixTime(),
            a = R(b(t, r - p))
              .slice(0, m)
              .map(function (e) {
                return e.contact;
              }),
            i = yield (s || (s = n("Promise"))).race([v(t, r - _), E(g)]);
          return { contacts: k(a, i), frequentContacts: i, recentContacts: a };
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t) {
      return o("WAWebChatCollection")
        .ChatCollection.filter(function (n) {
          var r;
          return (
            n.id.isUser() &&
            !n.isLocked &&
            ((r = n.t) != null ? r : 0) >= t &&
            e(n)
          );
        })
        .sort(function (e, t) {
          var n, r;
          return ((n = t.t) != null ? n : 0) - ((r = e.t) != null ? r : 0);
        });
    }
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var r = b(t, n).slice(0, f);
          if (r.length === 0) return [];
          var a = yield o("WAWebQueryFrequentlyContactedMsgCount")
              .queryFrequentlyContactedMsgCountJob({
                chatIds: r.map(function (e) {
                  return e.id.toString();
                }),
                sinceTs: n,
              })
              .catch(function () {
                return (
                  o("WALogger")
                    .ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "group member suggestions: frequent contacts query failed",
                        ])),
                    )
                    .sendLogs("group-member-suggestions-frequent-query-failed"),
                  new Map()
                );
              }),
            i = new Map();
          for (var l of r) {
            var s,
              u,
              c = L(l);
            i.set(
              c,
              ((s = i.get(c)) != null ? s : 0) +
                ((u = a.get(l.id.toString())) != null ? u : 0),
            );
          }
          var d = function (t) {
            var e;
            return (e = i.get(L(t))) != null ? e : 0;
          };
          return R(r)
            .filter(function (e) {
              return d(e) > 0;
            })
            .sort(function (e, t) {
              return d(t) - d(e);
            })
            .slice(0, m)
            .map(function (e) {
              return e.contact;
            });
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      var t = new Set();
      return e.filter(function (e) {
        var n = L(e);
        return t.has(n) ? !1 : (t.add(n), !0);
      });
    }
    function L(e) {
      var t;
      return ((t = e.accountLid) != null ? t : e.id).toString();
    }
    function E(e) {
      return new (s || (s = n("Promise")))(function (t) {
        self.setTimeout(function () {
          return t([]);
        }, e);
      });
    }
    function k(e, t) {
      var n = e.slice(0, d);
      return (I(n, t), I(n, e), n);
    }
    function I(e, t) {
      for (var n of t) {
        if (e.length >= c) return;
        e.includes(n) || e.push(n);
      }
    }
    function T(e, t) {
      return e == null
        ? !1
        : [t.id, o("WAWebLidMigrationUtils").toPn(t.id), t.accountLid].some(
            function (t) {
              return t != null && e.participants.get(t) != null;
            },
          );
    }
    ((l.NO_GROUP_MEMBER_SUGGESTIONS = u), (l.getGroupMemberSuggestions = y));
  },
  98,
);
