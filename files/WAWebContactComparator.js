__d(
  "WAWebContactComparator",
  [
    "WAWebBusinessProfileTypes",
    "WAWebCmd",
    "WAWebContactGetters",
    "WAWebFrontendContactGetters",
    "WAWebL10NConstants",
    "WAWebOutContactModel",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    (m(), o("WAWebCmd").Cmd.on("set_collator", m));
    function s(e) {
      if (e instanceof r("WAWebOutContactModel")) return e.getName();
      if (e.name) return e.name;
      if (
        e.verifiedLevel ===
          o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.HIGH &&
        e.verifiedName
      )
        return e.verifiedName;
    }
    function u(e) {
      var t;
      if (e instanceof r("WAWebOutContactModel")) {
        var n = e.getName();
        return n.length > 0 ? n[0].toLowerCase() : "";
      }
      return (t = o("WAWebFrontendContactGetters").getHeader(e)) != null
        ? t
        : "";
    }
    var c = function (n, a) {
      var t,
        i,
        l,
        c,
        d = (t = s(n)) != null ? t : "",
        m = (i = s(a)) != null ? i : "";
      if (!d && m) return 1;
      if (d && !m) return -1;
      if (d && m) {
        var p = u(n),
          _ = u(a);
        if (p && _) {
          var f = e.compare(p, _);
          return f === 0 ? e.compare(d, m) : f;
        }
      }
      var g =
          n instanceof r("WAWebOutContactModel")
            ? ""
            : (l = o("WAWebContactGetters").getNotifyName(n)) != null
              ? l
              : "",
        h =
          a instanceof r("WAWebOutContactModel")
            ? ""
            : (c = o("WAWebContactGetters").getNotifyName(a)) != null
              ? c
              : "";
      if (!g && h) return 1;
      if (g && !h) return -1;
      if (g && h) return e.compare(g, h);
      var y = n.id.toString(),
        C = a.id.toString();
      return y && C ? y.localeCompare(C) : -1;
    };
    function d() {
      return e;
    }
    function m(t) {
      var n;
      if (
        (t === void 0 && (t = o("WAWebL10NConstants").DEFAULT_LOCALE),
        (n = self.Intl) != null && n.Collator)
      ) {
        var r = self.Intl.Collator([t], { sensitivity: "base" });
        e = {
          compare: function (t, n) {
            try {
              return r.compare(t, n);
            } catch (e) {
              return 0;
            }
          },
        };
      } else
        e = {
          compare: function (t, n) {
            return t.localeCompare(n);
          },
        };
    }
    ((l.headerOf = u), (l.ContactComparator = c), (l.getCollator = d));
  },
  98,
);
