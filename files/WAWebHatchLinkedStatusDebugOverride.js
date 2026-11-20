__d(
  "WAWebHatchLinkedStatusDebugOverride",
  [
    "Promise",
    "WAWebHatchLinkedStatusManager",
    "WAWebUserPrefsDebugKeys",
    "WAWebUserPrefsStore",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        channelFbid: "debug-hatch-channel",
        hasChannel: !0,
        isPaired: !0,
        status: "ACTIVE",
      },
      u = { channelFbid: null, hasChannel: !1, isPaired: !1, status: null },
      c = function () {
        return (e || (e = n("Promise"))).resolve(s);
      },
      d = function () {
        return (e || (e = n("Promise"))).resolve(u);
      };
    function m(e) {
      return (
        r("gkx")("16539") &&
          r("WAWebUserPrefsStore").set(
            r("WAWebUserPrefsDebugKeys").DEBUG_HATCH_LINKED_OVERRIDE,
            e ? !0 : null,
          ),
        r("WAWebHatchLinkedStatusManager").registerFetcher(e ? c : d),
        r("WAWebHatchLinkedStatusManager").fetchAndUpdateStatus(),
        e ? s : u
      );
    }
    function p(e, t) {
      if (_()) {
        r("WAWebHatchLinkedStatusManager").registerFetcher(c);
        return;
      }
      r("WAWebHatchLinkedStatusManager").registerFetcher(e, t);
    }
    function _() {
      return (
        r("gkx")("16539") &&
        r("WAWebUserPrefsStore").get(
          r("WAWebUserPrefsDebugKeys").DEBUG_HATCH_LINKED_OVERRIDE,
        ) === !0
      );
    }
    ((l.pinHatchLinkedStatusForDebug = m),
      (l.registerHatchLinkedStatusFetcher = p));
  },
  98,
);
