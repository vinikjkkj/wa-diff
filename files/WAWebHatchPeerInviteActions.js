__d(
  "WAWebHatchPeerInviteActions",
  [
    "fbt",
    "WALogger",
    "WAWebBoolFunc",
    "WAWebHatchPeerInvite",
    "WAWebHatchPeerInviteUrl",
    "WAWebHatchVmConnection",
    "WAWebNoop",
    "WAWebOpenHatchChatAction",
    "WAWebRequestHatchConnectors",
    "WDSToastImperativeHost",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C = 15e3,
      b = 3e4,
      v = 15e3,
      S = 100,
      R = 10,
      L = "hatch-peer-invite-open",
      E = { detail: "account_changed", kind: "Failure" };
    async function k(t) {
      var n = N("open", function (e, n) {
        return e.peerInviteOpen(t, n, { timeoutMs: C });
      }).then(o("WAWebHatchPeerInvite").decodeHatchPeerInviteOpenResult);
      A(t, n);
      var r = await n;
      return (
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "hatch-peer-invite: open outcome=",
              "",
            ])),
          r.outcome,
        ),
        $(r) && P(),
        r
      );
    }
    async function I(e, t) {
      return (await T(e, t)).outcome;
    }
    async function T(e, t) {
      var n = o("WAWebHatchPeerInviteUrl").getHatchPeerInviteFragment(e);
      if (n == null) return { museId: null, outcome: "invalid" };
      var r = await N(
          "accept",
          function (e, t) {
            return e.peerInviteAccept(n, t, { timeoutMs: b });
          },
          t,
        ),
        a = o("WAWebHatchPeerInvite").decodeHatchPeerInviteAcceptResult(r),
        i = o("WAWebHatchPeerInvite").readHatchPeerInviteAcceptedMuseId(r);
      return (
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "hatch-peer-invite: accept outcome=",
              "",
            ])),
          a,
        ),
        r.kind === "Ok" && i == null
          ? (o("WALogger")
              .WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "hatch-peer-invite: accept answered without muse_id",
                  ])),
              )
              .sendLogs("hatch-peer-invite-accept-unacknowledged"),
            { museId: null, outcome: a })
          : (B(o("WAWebHatchPeerInvite").readHatchPeerInvitePresentedIn(r)) &&
              W(),
            { museId: i, outcome: a })
      );
    }
    async function D(e, t) {
      t === void 0 && (t = o("WAWebBoolFunc").returnTrue);
      try {
        if (!t()) return null;
        var n = await o("WAWebHatchVmConnection").connectHatchVmApiWithResult(
          new AbortController().signal,
        );
        return n.kind === "ready" ? await x(n.api, e, null, 1, t) : null;
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-peer-invite: contacts read threw",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("hatch-peer-invite-contacts-threw"),
          null
        );
      }
    }
    async function x(e, t, n, r, a) {
      if (!a()) return null;
      var i = await e.peerContacts(S, n, { timeoutMs: v });
      if (i.kind !== "Ok")
        return (
          o("WALogger").WARN(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-peer-invite: contacts read refused kind=",
                "",
              ])),
            i.kind,
          ),
          null
        );
      var l = o("WAWebHatchPeerInvite").readHatchPeerContactStatus(i.value, t);
      if (l !== "absent") return l === "verified";
      var s = o("WAWebHatchPeerInvite").readHatchPeerContactsCursor(i.value);
      return s != null && r < R ? x(e, t, s, r + 1, a) : !1;
    }
    function $(e) {
      return (
        e.outcome === "posted" &&
        (e.presentedIn === "whatsapp" || e.presentedIn == null)
      );
    }
    function P() {
      var e = !1;
      o("WAWebOpenHatchChatAction")
        .openHatchChat(function () {
          e = !0;
        })
        .then(
          function () {
            e ||
              o("WALogger")
                .ERROR(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "hatch-peer-invite: the Muse chat did not open",
                    ])),
                )
                .sendLogs("hatch-peer-invite-open-chat-failed");
          },
          function (e) {
            o("WALogger")
              .ERROR(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "hatch-peer-invite: opening the Muse chat failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("hatch-peer-invite-open-chat-failed");
          },
        );
    }
    async function N(e, t, n) {
      n === void 0 && (n = o("WAWebBoolFunc").returnTrue);
      try {
        if (!n()) return E;
        var a = await o("WAWebHatchVmConnection").connectHatchVmApiWithResult(
          new AbortController().signal,
        );
        if (!n()) return E;
        if (a.kind !== "ready") return w(e, "no_vm_" + a.failure);
        var i = await o(
          "WAWebRequestHatchConnectors",
        ).readHatchWhatsAppSessionId(a.api);
        if (!n()) return E;
        if (i == null)
          return w(e, o("WAWebHatchPeerInvite").HATCH_PEER_INVITE_NO_SESSION);
        var l = await t(a.api, i);
        if (l.kind !== "Ok") M(e, l);
        else {
          var s;
          o("WALogger").LOG(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-peer-invite: ",
                " answered session_id=sent presented_in=",
                "",
              ])),
            e,
            (s = o("WAWebHatchPeerInvite").readHatchPeerInvitePresentedIn(l)) !=
              null
              ? s
              : "none",
          );
        }
        return l;
      } catch (t) {
        return (
          o("WALogger")
            .ERROR(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-peer-invite: ",
                  " threw",
                ])),
              e,
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("hatch-peer-invite-" + e + "-threw"),
          { detail: "threw", kind: "Failure" }
        );
      }
    }
    function M(e, t) {
      var n = t.kind === "Rejected" ? t : { errorCode: null, statusCode: null },
        r = n.errorCode,
        a = n.statusCode;
      o("WALogger")
        .ERROR(
          h ||
            (h = babelHelpers.taggedTemplateLiteralLoose([
              "hatch-peer-invite: ",
              " refused kind=",
              " status=",
              " code=",
              "",
            ])),
          e,
          t.kind,
          String(a != null ? a : "none"),
          r != null ? r : "none",
        )
        .sendLogs("hatch-peer-invite-" + e + "-refused");
    }
    function w(e, t) {
      return (
        o("WALogger")
          .ERROR(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-peer-invite: ",
                " not sent reason=",
                "",
              ])),
            e,
            t,
          )
          .sendLogs("hatch-peer-invite-" + e + "-not-sent"),
        { detail: t, kind: "Failure" }
      );
    }
    function A(e, t) {
      var n = null,
        a = t.then(
          function (e) {
            if (((n = e), !F(e)))
              throw r("err")("hatch-peer-invite: open " + e.outcome);
          },
          function (e) {
            throw (
              (n = { outcome: "failed", presentedIn: null, reason: null }),
              e
            );
          },
        );
      (a.catch(r("WAWebNoop")),
        o("WDSToastImperativeHost").showWDSToast({
          action: function () {
            var t;
            return ((t = n) == null ? void 0 : t.outcome) === "failed"
              ? {
                  label: s._(/*BTDS*/ ""),
                  onPress: function () {
                    return void k(e);
                  },
                }
              : null;
          },
          dedupId: L,
          message: function () {
            return n == null ? s._(/*BTDS*/ "") : O(n);
          },
          process: a,
          type: "loading",
        }));
    }
    function F(e) {
      return e.outcome === "posted" || e.outcome === "already_paired";
    }
    function O(e) {
      return ((typeof e == "object" && e !== null) || typeof e == "function") &&
        e.outcome === "posted" &&
        (e.presentedIn === "app" || e.presentedIn === "other")
        ? q()
        : ((typeof e == "object" && e !== null) || typeof e == "function") &&
            e.outcome === "posted"
          ? s._(/*BTDS*/ "")
          : ((typeof e == "object" && e !== null) || typeof e == "function") &&
              e.outcome === "already_paired"
            ? s._(/*BTDS*/ "")
            : ((typeof e == "object" && e !== null) ||
                  typeof e == "function") &&
                e.outcome === "expired"
              ? s._(/*BTDS*/ "")
              : ((typeof e == "object" && e !== null) ||
                    typeof e == "function") &&
                  e.outcome === "invalid" &&
                  e.reason === "pending_request"
                ? s._(/*BTDS*/ "")
                : ((typeof e == "object" && e !== null) ||
                      typeof e == "function") &&
                    e.outcome === "invalid"
                  ? s._(/*BTDS*/ "")
                  : ((typeof e == "object" && e !== null) ||
                        typeof e == "function") &&
                      e.outcome === "failed"
                    ? s._(/*BTDS*/ "")
                    : (function () {
                        throw Error(
                          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                            e,
                        );
                      })();
    }
    function B(e) {
      return e === "app" || e === "other";
    }
    function W() {
      o("WDSToastImperativeHost").showWDSToast({ message: q() });
    }
    function q() {
      return s._(/*BTDS*/ "");
    }
    ((l.openHatchPeerInviteInMuse = k),
      (l.acceptHatchPeerInvite = I),
      (l.acceptHatchPeerInviteWithMuseId = T),
      (l.readHatchPeerContactVerified = D));
  },
  226,
);
