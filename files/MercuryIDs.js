__d(
  "MercuryIDs",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      isValid: function (t) {
        return t == null || t === "" || typeof t != "string"
          ? !1
          : /^\w{3,12}:.+/.test(t);
      },
      isValidThreadID: function (n) {
        if (!e.isValid(n)) return !1;
        var t = e.tokenize(n);
        switch (t.type) {
          case "user":
          case "support":
          case "thread":
          case "root":
            return !0;
          default:
            return !1;
        }
      },
      tokenize: function (n) {
        if (n == null || n === "" || !e.isValid(n)) {
          var t = new Error("bad_id_format " + String(n));
          throw (t.stack, t);
        }
        var r = n.indexOf(":");
        return { type: n.substr(0, r), value: n.substr(r + 1) };
      },
      getUserIDFromParticipantID: function (n) {
        if (!e.isValid(n)) {
          var t = new Error("bad_id_format " + n);
          throw (t.stack, t);
        }
        var r = e.tokenize(n),
          o = r.type,
          a = r.value;
        return o === "fbid" ? a : null;
      },
      getParticipantIDFromUserID: function (t) {
        if (isNaN(t)) {
          var e = new Error("Not a user ID: " + t);
          throw (e.stack, e);
        }
        return "fbid:" + t;
      },
      getUserIDFromThreadID: function (t) {
        return this.isCanonical(t) ? this.tokenize(t).value : null;
      },
      getThreadIDFromUserID: function (t) {
        return "user:" + t;
      },
      getThreadIDFromThreadFBID: function (t) {
        return "thread:" + t;
      },
      getThreadIDFromSupportInboxItemID: function (t) {
        return "support:" + t;
      },
      getThreadFBIDFromThreadID: function (t) {
        return this.tokenize(t).value;
      },
      getThreadKeyfromThreadIDUserID: function (n, r) {
        if (n == null || n === "" || !e.isValid(n)) {
          var t = new Error("bad_id_format " + String(n));
          throw (t.stack, t);
        }
        var o = this.tokenize(n).type,
          a = this.tokenize(n).value;
        if (o !== "user") return "g" + a;
        var i = "",
          l = "";
        if (a.length !== r.length)
          ((i = a.length > r.length ? a : r),
            (l = a.length > r.length ? r : a));
        else {
          if (r === a) return r + "u" + a;
          for (var s = 0; s < a.length && s < r.length; )
            if (a[s] === r[s]) s++;
            else {
              ((i = a[s] > r[s] ? a : r), (l = a[s] > r[s] ? r : a));
              break;
            }
        }
        return l + "u" + i;
      },
      getThreadIDFromParticipantID: function (t) {
        var e = this.getUserIDFromParticipantID(t);
        return e ? this.getThreadIDFromUserID(e) : null;
      },
      getParticipantIDFromFromThreadID: function (t) {
        var e = this.getUserIDFromThreadID(t);
        return e ? this.getParticipantIDFromUserID(e) : null;
      },
      getSupportInboxItemIDFromThreadID: function (t) {
        return this.tokenize(t).value;
      },
      isCanonical: function (t) {
        return this.isValid(t) && this.tokenize(t).type === "user";
      },
      isGroupChat: function (t) {
        return this.isValid(t) && this.tokenize(t).type !== "user";
      },
      isLocalThread: function (t) {
        return this.isValid(t) && this.tokenize(t).type === "root";
      },
    };
    a.exports = e;
  },
  null,
);
