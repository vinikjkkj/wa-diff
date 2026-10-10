__d(
  "WAWebHatchFoaAccountsDecoder",
  ["WAWebHatchFirstPartyConnectors", "WAWebHatchJsonReaders"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = /^[A-Za-z0-9._:-]{1,128}$/;
    function s(e, t) {
      var n;
      if (!o("WAWebHatchJsonReaders").isObject(e)) return null;
      var r =
          (n = o("WAWebHatchJsonReaders").readArray(e, "accounts")) != null
            ? n
            : [e],
        a = u(r, t);
      return { accounts: a, groups: d(e, a) };
    }
    function u(e, t) {
      var n = [],
        r = new Set();
      for (var o of e) {
        var a = c(o, t);
        a != null && !r.has(a.id) && (r.add(a.id), n.push(a));
      }
      return n;
    }
    function c(t, n) {
      var r,
        a,
        i,
        l,
        s,
        u = o("WAWebHatchFirstPartyConnectors").getHatchFoaAppConfig(n),
        c =
          (r =
            (a = o("WAWebHatchJsonReaders").readString(t, u.idField)) != null
              ? a
              : o("WAWebHatchJsonReaders").readString(t, "user_fbid")) != null
            ? r
            : o("WAWebHatchJsonReaders").readString(t, "id");
      return c == null || !e.test(c)
        ? null
        : {
            connected:
              (i = o("WAWebHatchJsonReaders").readBool(t, "connected")) != null
                ? i
                : !1,
            id: c,
            name:
              (l =
                (s = o("WAWebHatchJsonReaders").trimToNull(
                  o("WAWebHatchJsonReaders").readTrimmedString(t, u.nameField),
                )) != null
                  ? s
                  : o("WAWebHatchJsonReaders").trimToNull(
                      o("WAWebHatchJsonReaders").readTrimmedString(t, "name"),
                    )) != null
                ? l
                : o("WAWebHatchJsonReaders").trimToNull(
                    o("WAWebHatchJsonReaders").readTrimmedString(t, "username"),
                  ),
          };
    }
    function d(e, t) {
      var n = new Map(
          t.map(function (e) {
            return [e.id, e];
          }),
        ),
        r = [],
        a = new Set();
      for (var i of (l = o("WAWebHatchJsonReaders").readArray(e, "groups")) !=
      null
        ? l
        : []) {
        var l,
          s = m(i, n);
        s != null && !a.has(s.key) && (a.add(s.key), r.push(s));
      }
      return r;
    }
    function m(e, t) {
      var n = o("WAWebHatchJsonReaders").readTrimmedString(e, "key"),
        r = o("WAWebHatchJsonReaders").readTrimmedString(e, "label"),
        a = o("WAWebHatchJsonReaders").readArray(e, "account_ids");
      if (n === "" || r === "" || a == null) return null;
      var i = [],
        l = new Set();
      for (var s of a)
        if (!(typeof s != "string" || l.has(s))) {
          l.add(s);
          var u = t.get(s);
          u != null && i.push(u);
        }
      return i.length === 0 ? null : { accounts: i, key: n, label: r };
    }
    l.decodeHatchFoaAccounts = s;
  },
  98,
);
