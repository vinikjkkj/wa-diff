__d(
  "WAWebHatchFoaAccountsDecoder",
  ["WAWebHatchFirstPartyConnectors", "WAWebHatchJsonReaders", "WAWebURLUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = /^[A-Za-z0-9._:-]{1,128}$/,
      s = [".facebook.com", ".fbcdn.net", ".whatsapp.net"],
      u = /[^!-~]|[@\\]/;
    function c(e, t) {
      if (!o("WAWebHatchJsonReaders").isObject(e)) return null;
      var n = o("WAWebHatchJsonReaders").readArray(e, "accounts"),
        r = d(n != null ? n : [e], t, n != null);
      return { accounts: r, groups: _(e, r) };
    }
    function d(e, t, n) {
      var r = [],
        o = new Set();
      for (var a of e) {
        var i = m(a, t, n);
        i != null && !o.has(i.id) && (o.add(i.id), r.push(i));
      }
      return r;
    }
    function m(t, n, r) {
      var a,
        i,
        l,
        s,
        u,
        c = o("WAWebHatchFirstPartyConnectors").getHatchFoaAppConfig(n),
        d =
          (a =
            (i =
              (l = o("WAWebHatchJsonReaders").readString(t, c.idField)) != null
                ? l
                : o("WAWebHatchJsonReaders").readString(t, "user_fbid")) != null
              ? i
              : o("WAWebHatchJsonReaders").readString(t, "id")) != null
            ? a
            : n === "facebook"
              ? o("WAWebHatchJsonReaders").readString(t, "profile_id")
              : null;
      return d == null || !e.test(d)
        ? null
        : {
            avatarUrl: p(t, c.avatarField),
            connected:
              r && o("WAWebHatchJsonReaders").readBool(t, "connected") === !0,
            id: d,
            name:
              (s =
                (u = o("WAWebHatchJsonReaders").trimToNull(
                  o("WAWebHatchJsonReaders").readTrimmedString(t, c.nameField),
                )) != null
                  ? u
                  : o("WAWebHatchJsonReaders").trimToNull(
                      o("WAWebHatchJsonReaders").readTrimmedString(t, "name"),
                    )) != null
                ? s
                : o("WAWebHatchJsonReaders").trimToNull(
                    o("WAWebHatchJsonReaders").readTrimmedString(t, "username"),
                  ),
          };
    }
    function p(e, t) {
      var n = o("WAWebHatchJsonReaders").readString(e, t);
      if (n == null || u.test(n) || r("WAWebURLUtils").isHttps(n) !== !0)
        return null;
      var a = r("WAWebURLUtils").hostname(n).toLowerCase();
      return s.some(function (e) {
        return a.endsWith(e);
      })
        ? n
        : null;
    }
    function _(e, t) {
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
          s = f(i, n);
        s != null && !a.has(s.key) && (a.add(s.key), r.push(s));
      }
      return r;
    }
    function f(e, t) {
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
    l.decodeHatchFoaAccounts = c;
  },
  98,
);
