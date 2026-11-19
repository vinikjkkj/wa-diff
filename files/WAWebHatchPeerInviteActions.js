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
    "asyncToGeneratorRuntime",
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
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = O("open", function (t, n) {
            return t.peerInviteOpen(e, n, { timeoutMs: C });
          }).then(o("WAWebHatchPeerInvite").decodeHatchPeerInviteOpenResult);
          U(e, t);
          var n = yield t;
          return (
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-peer-invite: open outcome=",
                  "",
                ])),
              n.outcome,
            ),
            A(n) && F(),
            n
          );
        })),
        I.apply(this, arguments)
      );
    }
    function T(e, t) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return (yield x(e, t)).outcome;
        })),
        D.apply(this, arguments)
      );
    }
    function x(e, t) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WAWebHatchPeerInviteUrl").getHatchPeerInviteFragment(e);
          if (n == null) return { museId: null, outcome: "invalid" };
          var r = yield O(
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
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-peer-invite: accept outcome=",
                  "",
                ])),
              a,
            ),
            r.kind === "Ok" && i == null
              ? (o("WALogger")
                  .WARN(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "hatch-peer-invite: accept answered without muse_id",
                      ])),
                  )
                  .sendLogs("hatch-peer-invite-accept-unacknowledged"),
                { museId: null, outcome: a })
              : (G(
                  o("WAWebHatchPeerInvite").readHatchPeerInvitePresentedIn(r),
                ) && z(),
                { museId: i, outcome: a })
          );
        })),
        $.apply(this, arguments)
      );
    }
    function P(e) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = yield o(
              "WAWebHatchVmConnection",
            ).connectHatchVmApiWithResult(new AbortController().signal);
            return t.kind === "ready" ? yield M(t.api, e, null, 1) : null;
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "hatch-peer-invite: contacts read threw",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("hatch-peer-invite-contacts-threw"),
              null
            );
          }
        })),
        N.apply(this, arguments)
      );
    }
    function M(e, t, n, r) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = yield e.peerContacts(S, n, { timeoutMs: v });
            if (a.kind !== "Ok")
              return (
                o("WALogger").WARN(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "hatch-peer-invite: contacts read refused kind=",
                      "",
                    ])),
                  a.kind,
                ),
                null
              );
            var i = o("WAWebHatchPeerInvite").readHatchPeerContactStatus(
              a.value,
              t,
            );
            if (i !== "absent") return i === "verified";
            var l = o("WAWebHatchPeerInvite").readHatchPeerContactsCursor(
              a.value,
            );
            return l != null && r < R ? M(e, t, l, r + 1) : !1;
          },
        )),
        w.apply(this, arguments)
      );
    }
    function A(e) {
      return (
        e.outcome === "posted" &&
        (e.presentedIn === "whatsapp" || e.presentedIn == null)
      );
    }
    function F() {
      var t = !1;
      o("WAWebOpenHatchChatAction")
        .openHatchChat(function () {
          t = !0;
        })
        .then(
          function () {
            t ||
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "hatch-peer-invite: the Muse chat did not open",
                    ])),
                )
                .sendLogs("hatch-peer-invite-open-chat-failed");
          },
          function (e) {
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "hatch-peer-invite: opening the Muse chat failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("hatch-peer-invite-open-chat-failed");
          },
        );
    }
    function O(e, t, n) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          n === void 0 && (n = o("WAWebBoolFunc").returnTrue);
          try {
            if (!n()) return E;
            var a = yield o(
              "WAWebHatchVmConnection",
            ).connectHatchVmApiWithResult(new AbortController().signal);
            if (!n()) return E;
            if (a.kind !== "ready") return q(e, "no_vm_" + a.failure);
            var i = yield o(
              "WAWebRequestHatchConnectors",
            ).readHatchWhatsAppSessionId(a.api);
            if (!n()) return E;
            if (i == null) return q(e, "no_session_id");
            var l = yield t(a.api, i);
            if (l.kind !== "Ok") W(e, l);
            else {
              var s;
              o("WALogger").LOG(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "hatch-peer-invite: ",
                    " answered session_id=sent presented_in=",
                    "",
                  ])),
                e,
                (s = o("WAWebHatchPeerInvite").readHatchPeerInvitePresentedIn(
                  l,
                )) != null
                  ? s
                  : "none",
              );
            }
            return l;
          } catch (t) {
            return (
              o("WALogger")
                .ERROR(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
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
        })),
        B.apply(this, arguments)
      );
    }
    function W(e, t) {
      var n = t.kind === "Rejected" ? t : { errorCode: null, statusCode: null },
        r = n.errorCode,
        a = n.statusCode;
      o("WALogger")
        .ERROR(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
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
    function q(e, t) {
      return (
        o("WALogger")
          .ERROR(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
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
    function U(e, t) {
      var n = null,
        a = t.then(
          function (e) {
            if (((n = e), !V(e)))
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
                  label: s._(/*BTDS*/ "Try again"),
                  onPress: function () {
                    return void k(e);
                  },
                }
              : null;
          },
          dedupId: L,
          message: function () {
            return n == null ? s._(/*BTDS*/ "Opening invite\u2026") : H(n);
          },
          process: a,
          type: "loading",
        }));
    }
    function V(e) {
      return e.outcome === "posted" || e.outcome === "already_paired";
    }
    function H(e) {
      return ((typeof e == "object" && e !== null) || typeof e == "function") &&
        e.outcome === "posted" &&
        (e.presentedIn === "app" || e.presentedIn === "other")
        ? j()
        : ((typeof e == "object" && e !== null) || typeof e == "function") &&
            e.outcome === "posted"
          ? s._(/*BTDS*/ "Invite opened")
          : ((typeof e == "object" && e !== null) || typeof e == "function") &&
              e.outcome === "already_paired"
            ? s._(/*BTDS*/ "Your Muse is already connected with this Muse")
            : ((typeof e == "object" && e !== null) ||
                  typeof e == "function") &&
                e.outcome === "expired"
              ? s._(
                  /*BTDS*/ "This invite link has expired. Ask for a new link.",
                )
              : ((typeof e == "object" && e !== null) ||
                    typeof e == "function") &&
                  e.outcome === "invalid" &&
                  e.reason === "pending_request"
                ? s._(
                    /*BTDS*/ "You already have a pending request from this person",
                  )
                : ((typeof e == "object" && e !== null) ||
                      typeof e == "function") &&
                    e.outcome === "invalid"
                  ? s._(
                      /*BTDS*/ "This invite link isn't valid. Ask for a new link.",
                    )
                  : ((typeof e == "object" && e !== null) ||
                        typeof e == "function") &&
                      e.outcome === "failed"
                    ? s._(/*BTDS*/ "Your Muse couldn't open this invite")
                    : (function () {
                        throw Error(
                          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                            e,
                        );
                      })();
    }
    function G(e) {
      return e === "app" || e === "other";
    }
    function z() {
      o("WDSToastImperativeHost").showWDSToast({ message: j() });
    }
    function j() {
      return s._(/*BTDS*/ "The invite opened in your Muse app");
    }
    ((l.openHatchPeerInviteInMuse = k),
      (l.acceptHatchPeerInvite = T),
      (l.acceptHatchPeerInviteWithMuseId = x),
      (l.readHatchPeerContactVerified = P));
  },
  226,
);
