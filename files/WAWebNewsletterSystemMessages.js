__d(
  "WAWebNewsletterSystemMessages",
  [
    "WATimeUtils",
    "WAWebCommonNewsletterEnums",
    "WAWebContactSystemMsg",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebNewsletterGatingUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e = new Map([
        ["newsletter_privacy", 10],
        ["newsletter_created", 20],
        ["newsletter_admin_context_card", 30],
        ["newsletter_deleted", Number.MAX_SAFE_INTEGER],
      ]),
      s = 100,
      u = 2147476647;
    function c(e) {
      var t = e.serverId;
      return t == null ? !1 : t < s;
    }
    function d(t) {
      var n = t.serverId;
      if (n == null) return !1;
      var r = Array.from(e.values()),
        o = Math.min.apply(Math, r);
      return n === o;
    }
    function m(t, n) {
      var a,
        i = e.get(n.subtype),
        l = babelHelpers.extends(
          {},
          o("WAWebContactSystemMsg").genNotificationMsg(
            t,
            babelHelpers.extends({}, n, {
              type: o("WAWebMsgType").MSG_TYPE.NEWSLETTER_NOTIFICATION,
              kind: o("WAWebMsgType").MsgKind.NewsletterNotification,
              serverId: i,
              templateParams: (a = n.templateParams) != null ? a : [],
            }),
          ),
          {
            id: new (r("WAWebMsgKey"))({
              fromMe: o("WAWebUserPrefsMeUser").isMeAccount(t),
              remote: t,
              id:
                i != null
                  ? i.toString(10)
                  : r("WAWebMsgKey").newId_DEPRECATED(),
            }),
          },
        );
      return l;
    }
    function p(e) {
      var t = e.id,
        n = e.name,
        r = e.role,
        a = e.t,
        i =
          r != null
            ? r
            : o("WAWebCommonNewsletterEnums").NewsletterMembershipType
                .Subscriber,
        l =
          a != null
            ? o("WATimeUtils").castToUnixTime(a)
            : o("WATimeUtils").unixTime(),
        s = m(o("WAWebWidFactory").createWid(t.toString()), {
          subtype: "newsletter_privacy",
          templateParams: [i],
          t: l,
        }),
        u = m(o("WAWebWidFactory").createWid(t.toString()), {
          subtype: "newsletter_created",
          templateParams: n != null ? [n, i] : [],
          t: l,
        });
      if (
        o("WAWebNewsletterGatingUtils").isNewsletterAdminContextCardEnabled(i)
      ) {
        var c = m(o("WAWebWidFactory").createWid(t.toString()), {
          subtype: "newsletter_admin_context_card",
          templateParams: [t.toString()],
          t: l,
        });
        return [s, u, c];
      }
      return [s, u];
    }
    function _(e) {
      var t = e.id,
        n = e.name,
        r = m(o("WAWebWidFactory").createWid(t.toString()), {
          subtype: "newsletter_deleted",
          templateParams: [n],
          t: o("WATimeUtils").unixTime(),
        });
      return [r];
    }
    ((l.EARLIEST_AVAILABLE_MESSAGE_ID = s),
      (l.LATEST_AVAILABLE_MESSAGE_ID = u),
      (l.isNewsletterSystemMsg = c),
      (l.isEarliestNewsletterSystemMsg = d),
      (l.genNewsletterCreationSystemMessages = p),
      (l.genNewsletterDeletionSystemMessages = _));
  },
  98,
);
