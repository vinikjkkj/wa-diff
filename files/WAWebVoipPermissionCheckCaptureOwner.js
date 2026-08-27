__d(
  "WAWebVoipPermissionCheckCaptureOwner",
  ["WAWebCallCollection", "WAWebVoipPermissionCheckCaptureRegistry"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e == null ? void 0 : e.callLinkToken,
        n = e == null ? void 0 : e.id,
        r = [];
      return (
        t != null && t !== "" && r.push(t),
        n != null && n !== "" && n !== t && r.push(n),
        { call: e, registryKeys: r }
      );
    }
    function s(e, t) {
      var n,
        r = !1,
        a = [],
        i = function () {
          if (!r) {
            r = !0;
            for (var e of a) e();
            t();
          }
        },
        l = o(
          "WAWebVoipPermissionCheckCaptureRegistry",
        ).registerPermissionCheckCapture((n = e[0]) != null ? n : null, i);
      a.push(l);
      for (var s = 1; s < e.length; s++)
        a.push(
          o(
            "WAWebVoipPermissionCheckCaptureRegistry",
          ).registerPermissionCheckCapture(e[s], i),
        );
      return {
        release: l,
        wasReleased: function () {
          return r;
        },
      };
    }
    function u(e) {
      return e != null && r("WAWebCallCollection").activeCall !== e;
    }
    ((l.getPermissionCheckOwner = e),
      (l.registerPermissionCheckCaptureForKeys = s),
      (l.didPermissionCheckCallEnd = u));
  },
  98,
);
