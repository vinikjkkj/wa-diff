__d(
  "WAWebOfflineSimulatorNotification",
  [
    "WATimeUtils",
    "WAWap",
    "WAWebCommsWapMd",
    "WAWebLidAwareContactsDB",
    "WAWebModelStorageUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          t === void 0 && (t = 1);
          for (var n = [], r = 0; r < t; r++) {
            var a,
              i = o("WAWebWidFactory").createWid("16505555555@s.whatsapp.net"),
              l = o("WAWebWidFactory").createWid("16505555555@s.whatsapp.net");
            n.push(
              (a = o("WAWap")).wap(
                "notification",
                {
                  from: o("WAWebCommsWapMd").CHAT_JID(e),
                  type: "w:gp2",
                  id: a.CUSTOM_STRING(a.generateId()),
                  participant: o("WAWebCommsWapMd").DEVICE_JID(i),
                  notify: a.CUSTOM_STRING("Test"),
                  offline: "0",
                  t: a.CUSTOM_STRING(String(o("WATimeUtils").unixTime())),
                },
                a.wap(
                  "add",
                  null,
                  a.wap("participant", {
                    jid: o("WAWebCommsWapMd").DEVICE_JID(l),
                  }),
                ),
              ),
            );
          }
          return n;
        })),
        s.apply(this, arguments)
      );
    }
    var u = o("WAWebWidFactory").createWid("16505555555@s.whatsapp.net");
    function c(e, t) {
      return (
        t === void 0 && (t = 1),
        Array.from({ length: t }, function (e, t) {
          return t;
        }).map(function (t) {
          var n;
          return (n = o("WAWap")).wap(
            "notification",
            {
              from: o("WAWebCommsWapMd").CHAT_JID(e),
              type: "w:gp2",
              participant: o("WAWebCommsWapMd").DEVICE_JID(u),
              id: n.CUSTOM_STRING(n.generateId()),
              offline: "0",
              t: n.CUSTOM_STRING(String(o("WATimeUtils").unixTime())),
            },
            n.wap("subject", {
              s_o: o("WAWebCommsWapMd").DEVICE_JID(u),
              subject: n.CUSTOM_STRING("test-subject-" + t),
              s_t: n.CUSTOM_STRING(String(o("WATimeUtils").unixTime())),
            }),
          );
        })
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          e === void 0 && (e = 1);
          for (
            var t = yield o("WAWebModelStorageUtils")
                .getStorage()
                .lock(["contact"], function () {
                  return r("WAWebLidAwareContactsDB").all();
                }),
              n = [],
              a = 0;
            a < e;
            a++
          ) {
            var i,
              l = Math.floor(Math.random() * t.length),
              s = t[l],
              u = o("WAWebWidFactory").createWid(s.id);
            n.push(
              (i = o("WAWap")).wap(
                "notification",
                {
                  from: o("WAWebCommsWapMd").DEVICE_JID(u),
                  type: "encrypt",
                  id: i.CUSTOM_STRING(i.generateId()),
                  t: i.CUSTOM_STRING(String(o("WATimeUtils").unixTime())),
                },
                i.wap("identity", null),
              ),
            );
          }
          return n;
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          e === void 0 && (e = 1);
          for (
            var t = yield o("WAWebModelStorageUtils")
                .getStorage()
                .lock(["group-metadata"], function (e) {
                  var t = e[0];
                  return t.all();
                }),
              n = t.filter(function (e) {
                return e.isParentGroup;
              }),
              r = o("WAWebWidFactory").createWid("16505555555@s.whatsapp.net"),
              a = [],
              i = 0;
            i < e;
            i++
          ) {
            var l,
              s = Math.floor(Math.random() * n.length),
              u = n[s],
              c = o("WAWebWidFactory").createWid(u.id),
              d = o("WAWebWidFactory").createWid(
                "120363038109422" + i + "@g.us",
              );
            a.push(
              (l = o("WAWap")).wap(
                "notification",
                {
                  from: o("WAWebCommsWapMd").CHAT_JID(c),
                  type: "w:gp2",
                  participant: o("WAWebCommsWapMd").DEVICE_JID(r),
                  id: l.CUSTOM_STRING(l.generateId()),
                  offline: "0",
                  t: l.CUSTOM_STRING(String(o("WATimeUtils").unixTime())),
                },
                l.wap(
                  "link",
                  { link_type: "sub_group" },
                  l.wap("group", {
                    jid: o("WAWebCommsWapMd").CHAT_JID(d),
                    subject: l.CUSTOM_STRING("Group-" + i),
                    s_t: l.CUSTOM_STRING(String(o("WATimeUtils").unixTime())),
                  }),
                ),
              ),
            );
          }
          return a;
        })),
        _.apply(this, arguments)
      );
    }
    ((l.createGroupChangeNotifications = e),
      (l.createGroupSubjectNotifications = c),
      (l.createIdentityChangeNotification = d),
      (l.createCommunityLinkNotification = p));
  },
  98,
);
