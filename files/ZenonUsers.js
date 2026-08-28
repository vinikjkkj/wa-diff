__d(
  "ZenonUsers",
  [
    "$InternalEnum",
    "MercuryIDs",
    "MessengerParticipants.bs",
    "Promise",
    "immutable",
    "isStringNullOrEmpty",
    "memoizeWithArgs",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = n("$InternalEnum").Mirrored([
        "Guest",
        "User",
        "Page",
        "ParentApprovedUser",
        "WhatsApp",
      ]),
      u = r("memoizeWithArgs")(
        function (e) {
          var t,
            n = e.big_image_src,
            r = e.fbid,
            o = e.gender,
            a = e.href,
            i = e.image_src,
            l = e.message_capabilities2,
            s = e.messenger_account_status_category,
            u = e.name,
            d = e.short_name,
            m = e.user_type,
            p = e.vanity;
          return Object.freeze({
            gender: o,
            id: r,
            messageCapabilities2: l != null ? l : null,
            messengerAccountStatusCategory: s != null ? s : null,
            name: u,
            profilePictureUrl: (t = n != null ? n : i) != null ? t : null,
            profileUrl: a != null ? a : null,
            shortName: d,
            userType: c(m),
            vanity: p != null ? p : null,
          });
        },
        function (e) {
          var t = e.fbid;
          return t;
        },
      ),
      c = function (t) {
        var e = t;
        return e === "guest"
          ? s.Guest
          : e === "page"
            ? s.Page
            : e === "parent_approved_user"
              ? s.ParentApprovedUser
              : e === "wec"
                ? s.WhatsApp
                : s.User;
      },
      d = function (t) {
        var e = t[0],
          n = t[1];
        return [
          r("nullthrows")(o("MercuryIDs").getUserIDFromParticipantID(e)),
          u(n),
        ];
      };
    function m(t) {
      return new (e || (e = n("Promise")))(function (e) {
        var n = t.map(function (e) {
          return o("MercuryIDs").getParticipantIDFromUserID(e);
        });
        o("MessengerParticipants.bs").getMulti(n, function (t) {
          e(r("immutable").Map(t).mapEntries(d));
        });
      });
    }
    function p(t) {
      var r = t.map(function (e) {
          return o("MercuryIDs").getParticipantIDFromUserID(e);
        }),
        a = null,
        i = null,
        l = o("MessengerParticipants.bs").getMultiEagerMap(r, function (e) {
          var t = e.mapEntries(d);
          a ? a(t) : (i = t);
        }),
        s = l[0],
        u = l[1];
      return [
        s.mapEntries(d),
        u != null
          ? new (e || (e = n("Promise")))(function (e) {
              i ? e(i) : (a = e);
            })
          : null,
      ];
    }
    function _(t) {
      return r("isStringNullOrEmpty")(t)
        ? (e || (e = n("Promise"))).resolve(null)
        : new (e || (e = n("Promise")))(function (e) {
            o("MessengerParticipants.bs").get(
              o("MercuryIDs").getParticipantIDFromUserID(t),
              function (t) {
                e(t ? u(t) : null);
              },
            );
          });
    }
    function f(e) {
      if (r("isStringNullOrEmpty")(e)) return null;
      var t = o("MessengerParticipants.bs").getNow(
        o("MercuryIDs").getParticipantIDFromUserID(e),
      );
      return t ? u(t) : null;
    }
    ((l.ZenonUserType = s),
      (l.getMulti = m),
      (l.getMultiEager = p),
      (l.get = _),
      (l.getNow = f));
  },
  98,
);
