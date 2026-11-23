__d(
  "WAWebGroupMemberSuggestions",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebBotUtils",
    "WAWebChatCollection",
    "WAWebContactExternalUserState",
    "WAWebLidMigrationUtils",
    "WAWebQueryFrequentlyContactedMsgCount",
    "WAWebUserUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = { contacts: [], frequentContacts: [], recentContacts: [] },
      u = 5,
      c = 3,
      d = 20,
      m = 72 * o("WATimeUtils").HOUR_SECONDS,
      p = 8 * o("WATimeUtils").DAY_SECONDS,
      _ = 100,
      f = 750,
      g = [
        function (e) {
          return o("WAWebUserUtils").isMeAccount(e.id);
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
    async function h(e) {
      var t = function (n) {
          return (
            !g.some(function (e) {
              return e(n.contact);
            }) && !E(e, n)
          );
        },
        n = o("WATimeUtils").unixTime(),
        r = b(y(t, n - m))
          .slice(0, d)
          .map(function (e) {
            return e.contact;
          }),
        a = await Promise.race([C(t, n - p), S(f)]);
      return { contacts: R(r, a), frequentContacts: a, recentContacts: r };
    }
    function y(e, t) {
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
    async function C(t, n) {
      var r = y(t, n).slice(0, _);
      if (r.length === 0) return [];
      var a = await o("WAWebQueryFrequentlyContactedMsgCount")
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
          c = v(l);
        i.set(
          c,
          ((s = i.get(c)) != null ? s : 0) +
            ((u = a.get(l.id.toString())) != null ? u : 0),
        );
      }
      var m = function (t) {
        var e;
        return (e = i.get(v(t))) != null ? e : 0;
      };
      return b(r)
        .filter(function (e) {
          return m(e) > 0;
        })
        .sort(function (e, t) {
          return m(t) - m(e);
        })
        .slice(0, d)
        .map(function (e) {
          return e.contact;
        });
    }
    function b(e) {
      var t = new Set();
      return e.filter(function (e) {
        var n = v(e);
        return t.has(n) ? !1 : (t.add(n), !0);
      });
    }
    function v(e) {
      var t;
      return ((t = e.accountLid) != null ? t : e.id).toString();
    }
    function S(e) {
      return new Promise(function (t) {
        self.setTimeout(function () {
          return t([]);
        }, e);
      });
    }
    function R(e, t) {
      var n = e.slice(0, c);
      return (L(n, t), L(n, e), n);
    }
    function L(e, t) {
      for (var n of t) {
        if (e.length >= u) return;
        e.includes(n) || e.push(n);
      }
    }
    function E(e, t) {
      return e == null
        ? !1
        : [t.id, o("WAWebLidMigrationUtils").toPn(t.id), t.accountLid].some(
            function (t) {
              return t != null && e.participants.get(t) != null;
            },
          );
    }
    ((l.NO_GROUP_MEMBER_SUGGESTIONS = s), (l.getGroupMemberSuggestions = h));
  },
  98,
);
