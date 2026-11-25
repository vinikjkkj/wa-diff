__d(
  "WAWebHatchPeerInviteContacts",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebBotUtils",
    "WAWebChatCollection",
    "WAWebContactCollection",
    "WAWebContactCollectionUtils",
    "WAWebContactExternalUserState",
    "WAWebContactGetters",
    "WAWebFrontendContactGetters",
    "WAWebQueryFrequentlyContactedMsgCount",
    "WAWebUsernameGatingUtils",
    "WAWebWamEnumOppositeVisibleIdentificationType",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 10,
      u = 8 * o("WATimeUtils").DAY_SECONDS,
      c = 100,
      d = 750,
      m = [
        function (e) {
          return o("WAWebContactGetters").getIsMe(e);
        },
        function (e) {
          return o("WAWebFrontendContactGetters").getIsContactBlocked(e);
        },
        function (e) {
          return e.id.isBot() || o("WAWebBotUtils").isAnyMetaAiBot(e.id);
        },
        function (e) {
          return o("WAWebBotUtils").isBusinessAssistantBot(e.id);
        },
        function (e) {
          return e.id.equals(o("WAWebBotUtils").META_BOT_LID_WID);
        },
        function (e) {
          return e.id.isAiHub() || e.id.isPSA();
        },
        function (e) {
          return o("WAWebContactGetters").getIsBusiness(e);
        },
        function (e) {
          return !o("WAWebContactGetters").getIsWAContact(e);
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
        function (e) {
          return y(e) === "";
        },
      ];
    async function p() {
      var e = (await Promise.race([_(), b(d)])).slice(0, s),
        t = new Set(
          e.map(function (e) {
            return e.id.toString();
          }),
        ),
        n = o("WAWebContactCollectionUtils").getFilteredContacts(
          o("WAWebContactCollection").ContactCollection,
          {
            filterFn: function (n) {
              return g(n) && !t.has(n.id.toString());
            },
          },
        );
      return [].concat(e, n).map(h);
    }
    async function _() {
      var t = o("WATimeUtils").unixTime() - u,
        n = o("WAWebChatCollection")
          .ChatCollection.filter(function (e) {
            var n;
            return (
              e.id.isUser() && !e.isLocked && ((n = e.t) != null ? n : 0) >= t
            );
          })
          .sort(function (e, t) {
            var n, r;
            return ((n = t.t) != null ? n : 0) - ((r = e.t) != null ? r : 0);
          })
          .slice(0, c);
      if (n.length === 0) return [];
      var r = await o("WAWebQueryFrequentlyContactedMsgCount")
          .queryFrequentlyContactedMsgCountJob({
            chatIds: n.map(function (e) {
              return e.id.toString();
            }),
            sinceTs: t,
          })
          .catch(function () {
            return (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "hatch-peer-invite-contacts: frequent contacts query failed",
                    ])),
                )
                .sendLogs("hatch-peer-invite-contacts-frequent-query-failed"),
              new Map()
            );
          }),
        a = new Map();
      for (var i of n) {
        var l = f(i);
        if (l != null && g(l)) {
          var s, d;
          a.set(
            l,
            ((s = a.get(l)) != null ? s : 0) +
              ((d = r.get(i.id.toString())) != null ? d : 0),
          );
        }
      }
      return Array.from(a.entries())
        .filter(function (e) {
          var t = e[1];
          return t > 0;
        })
        .sort(function (e, t) {
          var n = e[1],
            r = t[1];
          return r - n;
        })
        .map(function (e) {
          var t = e[0];
          return t;
        });
    }
    function f(e) {
      return e.accountLid != null
        ? o("WAWebContactCollection").ContactCollection.get(e.accountLid)
        : null;
    }
    function g(e) {
      return (
        e.id.isLid() &&
        !m.some(function (t) {
          return t(e);
        })
      );
    }
    function h(e) {
      var t = o("WAWebWidFactory").asUserWidOrThrow(e.id);
      return {
        key: "recommendation:" + t.toString(),
        name: y(e),
        subtitle: C(e),
        wid: t,
      };
    }
    function y(e) {
      var t;
      return (
        (t = o("WAWebContactGetters").getName(e)) != null ? t : ""
      ).trim();
    }
    function C(e) {
      var t = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()
        ? o("WAWebFrontendContactGetters").getFormattedUsername(e)
        : null;
      if (t != null) return t;
      var n = o("WAWebFrontendContactGetters").getFormattedPhoneAndType(e);
      return n.type ===
        o("WAWebWamEnumOppositeVisibleIdentificationType")
          .OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PHONE_NUMBER
        ? n.displayName
        : null;
    }
    function b(e) {
      return new Promise(function (t) {
        self.setTimeout(function () {
          return t([]);
        }, e);
      });
    }
    l.readHatchPeerInviteContacts = p;
  },
  98,
);
