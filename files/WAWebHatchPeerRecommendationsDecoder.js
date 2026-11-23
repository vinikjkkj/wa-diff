__d(
  "WAWebHatchPeerRecommendationsDecoder",
  ["WAWebHatchJsonReaders", "WAWebHatchMetaCdnImageUrl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Map([
        ["INSTAGRAM", ["instagram", 0]],
        ["MESSENGER", ["messenger", 1]],
        ["FACEBOOK", ["facebook", 2]],
      ]),
      s = new Map([
        [1, "IGD_USER"],
        [2, "IGD_THREAD"],
        [3, "MSGR_CONTACT"],
        [4, "MSGR_GROUP"],
        ["IGD_USER", "IGD_USER"],
        ["IGD_THREAD", "IGD_THREAD"],
        ["MSGR_CONTACT", "MSGR_CONTACT"],
        ["MSGR_GROUP", "MSGR_GROUP"],
      ]);
    function u(e) {
      var t,
        n =
          (t = o("WAWebHatchJsonReaders").readArray(e, "recipients")) != null
            ? t
            : o("WAWebHatchJsonReaders").readArray(
                o("WAWebHatchJsonReaders").readObject(e, "result"),
                "recipients",
              );
      if (n == null) return null;
      var r = new Map();
      for (var a of n) {
        var i = c(a);
        if (i != null) {
          var l,
            s = (l = r.get(i.personKey)) != null ? l : [];
          (s.push(i), r.set(i.personKey, s));
        }
      }
      return Array.from(r.entries(), function (e) {
        var t = e[0],
          n = e[1];
        return p(t, n);
      });
    }
    function c(t) {
      var n,
        r = (n = o("WAWebHatchJsonReaders")).readTrimmedString(t, "name"),
        a = n.nonBlank(n.readString(t, "recipient_id")),
        i = n.nonBlank(n.readString(t, "sender_account_id")),
        l = e.get(n.readString(t, "app_target"));
      if (r === "" || a == null || i == null || l == null || !d(t)) return null;
      var s = l[0],
        u = l[1],
        c = o("WAWebHatchJsonReaders").nonBlank(
          o("WAWebHatchJsonReaders").readString(t, "account_center_key"),
        );
      return {
        app: s,
        appRank: u,
        isOnMuse:
          o("WAWebHatchJsonReaders").readBool(t, "is_hatch_onboarded") === !0,
        label: o("WAWebHatchJsonReaders").readTrimmedString(t, "label"),
        name: r,
        personKey:
          c != null ? "center:" + c : "source:" + s + ":" + i + ":" + a,
        photoUrl: m(t),
        recipientId: a,
        senderAccountId: i,
      };
    }
    function d(e) {
      return (function (t) {
        return t === "IGD_USER" || t === "MSGR_CONTACT"
          ? !0
          : t === "IGD_THREAD"
            ? o("WAWebHatchJsonReaders").readBool(e, "is_direct") === !0
            : !1;
      })(s.get(o("WAWebHatchJsonReaders").readField(e, "recipient_type")));
    }
    function m(e) {
      for (var t of (n = o("WAWebHatchJsonReaders").readArray(
        e,
        "profile_pic_url",
      )) != null
        ? n
        : []) {
        var n,
          r = o("WAWebHatchMetaCdnImageUrl").hatchMetaCdnImageUrl(
            typeof t == "string" ? t : null,
          );
        if (r != null) return r;
      }
      return null;
    }
    function p(e, t) {
      var n,
        r,
        o = [].concat(t).sort(function (e, t) {
          return (
            e.appRank - t.appRank ||
            e.senderAccountId.localeCompare(t.senderAccountId) ||
            e.recipientId.localeCompare(t.recipientId)
          );
        }),
        a = o[0],
        i = a.app === "instagram" && a.label !== "",
        l = i ? a.label : a.name,
        s = i ? a.name : a.label;
      return {
        app: a.app,
        isOnMuse: o.some(function (e) {
          return e.isOnMuse;
        }),
        key: e,
        name: l,
        photoUrl:
          (n =
            (r = o.find(function (e) {
              return e.photoUrl != null;
            })) == null
              ? void 0
              : r.photoUrl) != null
            ? n
            : null,
        subtitle: s !== "" && s !== l ? s : null,
      };
    }
    l.decodeHatchPeerRecommendations = u;
  },
  98,
);
