__d(
  "WAWebCallLinkDebugSetup",
  ["WAWebDebugSetup", "WAWebDebugWebCalling"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      (e == null ? void 0 : e.reload) !== !1 && window.location.reload();
    }
    async function s(t) {
      var n = await r("WAWebDebugWebCalling").webCallingABProp.set(!0);
      return (e(t), n);
    }
    s.doc =
      "Force the call link page into the lobby (camera preview). Sets enable_web_calling=1 and reloads (pass {reload: false} to skip the reload).";
    async function u(t) {
      var n = await r("WAWebDebugWebCalling").webCallingABProp.set(!1);
      return (e(t), n);
    }
    u.doc =
      "Force the call link page into JoinCallLite. Sets enable_web_calling=0 and reloads (pass {reload: false} to skip the reload).";
    async function c(t) {
      var n = await r("WAWebDebugWebCalling").webCallingABProp.read(),
        o = n != null && typeof n == "object" && n.configValue === "1",
        a = await r("WAWebDebugWebCalling").webCallingABProp.set(!o);
      return (e(t), a);
    }
    c.doc =
      "Flip enable_web_calling between lobby and JoinCallLite, then reload (pass {reload: false} to skip the reload).";
    async function d(t) {
      (await r("WAWebDebugWebCalling").webCallingABProp.clear(), e(t));
    }
    d.doc =
      "Delete the enable_web_calling override row, then reload to test the missing-cache fallback (a missing row resolves to disabled -> JoinCallLite).";
    async function m() {
      var e = await r("WAWebDebugWebCalling").webCallingABProp.read(),
        t = e != null && typeof e == "object" ? e.configValue : void 0;
      return {
        enableWebCallingConfigValue:
          t != null ? t : "(unset \u2014 server value)",
        loggedInModeWouldBe: t === "1" ? "lobby" : "join_call_lite",
        isWebGroupCalling100Jk: !1,
        note: "enable_web_calling drives the logged-in branch (1 -> lobby, 0 -> JoinCallLite). Logged-out mode is chosen by JustKnobs + the server guest-redirect prop, which this tool cannot change. Reload after a change to apply it.",
      };
    }
    m.doc =
      "Report the current enable_web_calling override, the mode the logged-in branch would render, and the WGC-100 JustKnob.";
    function p() {
      o("WAWebDebugSetup").setupDebugGlobal();
      var e = {
        showLobby: s,
        showJoinCallLite: u,
        toggle: c,
        read: r("WAWebDebugWebCalling").webCallingABProp.read,
        reset: d,
        status: m,
      };
      window.Debug.callLink = e;
    }
    l.setupCallLinkDebugGlobal = p;
  },
  98,
);
