__d(
  "WAWebHatchMuseAuthCredentials",
  ["WAWebUserPrefsDebugKeys", "WAWebUserPrefsStore", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        abraToken: (e = r("WAWebUserPrefsDebugKeys"))
          .DEBUG_HATCH_MUSE_ABRA_TOKEN,
        notaryToken: e.DEBUG_HATCH_MUSE_NOTARY_TOKEN,
        vmAuthToken: e.DEBUG_HATCH_MUSE_VM_AUTH_TOKEN,
        vmId: e.DEBUG_HATCH_MUSE_VM_ID,
      };
    function u() {
      if (!r("gkx")("16539")) return null;
      var e = f("abraToken"),
        t = f("notaryToken"),
        n = f("vmAuthToken"),
        o = f("vmId");
      return e == null || t == null || n == null || o == null
        ? null
        : {
            abraToken: e,
            credentials: { notaryToken: t, vmAuthToken: n, vmId: o },
          };
    }
    function c() {
      return r("gkx")("16539") ? f("abraToken") : null;
    }
    function d(e) {
      if (r("gkx")("16539"))
        for (var t of Object.keys(s)) {
          var n,
            o = (n = e[t]) == null ? void 0 : n.trim();
          o != null && o !== "" && r("WAWebUserPrefsStore").set(s[t], o);
        }
    }
    function m() {
      for (var e of Object.keys(s)) r("WAWebUserPrefsStore").set(s[e], null);
    }
    function p() {
      var e, t, n, o, a, i, l, s;
      return r("gkx")("16539")
        ? {
            abraToken:
              (e = (t = f("abraToken")) == null ? void 0 : t.length) != null
                ? e
                : 0,
            notaryToken:
              (n = (o = f("notaryToken")) == null ? void 0 : o.length) != null
                ? n
                : 0,
            vmAuthToken:
              (a = (i = f("vmAuthToken")) == null ? void 0 : i.length) != null
                ? a
                : 0,
            vmId:
              (l = (s = f("vmId")) == null ? void 0 : s.length) != null ? l : 0,
          }
        : { abraToken: 0, notaryToken: 0, vmAuthToken: 0, vmId: 0 };
    }
    function _() {
      return r("gkx")("16539") ? f("vmId") : null;
    }
    function f(e) {
      var t = r("WAWebUserPrefsStore").get(s[e]),
        n = typeof t == "string" ? t.trim() : "";
      return n === "" ? null : n;
    }
    ((l.readHatchMuseAuthSet = u),
      (l.readHatchMuseAuthAbraToken = c),
      (l.writeHatchMuseAuthFields = d),
      (l.clearHatchMuseAuthFields = m),
      (l.readHatchMuseAuthFieldLengths = p),
      (l.readHatchMuseAuthVmId = _));
  },
  98,
);
