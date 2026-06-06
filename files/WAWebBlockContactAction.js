__d(
  "WAWebBlockContactAction",
  [
    "fbt",
    "Promise",
    "WALogger",
    "WAWebActionToast.react",
    "WAWebBackendErrors",
    "WAWebBlockUserJob",
    "WAWebBlocklistCollection",
    "WAWebBlocklistMigration",
    "WAWebBlocklistUtils",
    "WAWebChatCollection",
    "WAWebFrontendContactGetters",
    "WAWebMmSignalSharingLoggingEvents",
    "WAWebStateUtils",
    "WAWebToastManager",
    "WAWebUpdateBlocklistDbJob",
    "WAWebWamBlockEventReporter",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m,
      p = m || (m = o("react"));
    function _(e) {
      var t = e.bizOptOutArgs,
        n = e.blockEntryPoint,
        r = e.contact,
        a = o("WAWebBlocklistUtils").getBlockEventMetricFromBlockEntryPoint(n);
      o("WAWebWamBlockEventReporter").logBlockEvent({
        contact: r,
        blockEntryPoint: a,
        isBlock: !0,
      });
      var i = o("WAWebChatCollection").ChatCollection.get(r.id);
      return (
        o(
          "WAWebMmSignalSharingLoggingEvents",
        ).logMmSignalSharingBlockVerificationEvent({
          blockEntryPoint: n,
          chat: i,
          reason: t == null ? void 0 : t.reason,
          blockEntryPointMetric: a,
        }),
        o(
          "WAWebMmSignalSharingLoggingEvents",
        ).logMmSignalSharingUserBlockWithReasonEvent({
          chat: i,
          reason: t == null ? void 0 : t.reason,
          blockEntryPointMetric: a,
        }),
        y(o("WAWebStateUtils").unproxy(r), !0, n, t)
      );
    }
    function f(e, t) {
      var n = o("WAWebBlocklistUtils").getBlockEventMetricFromBlockEntryPoint(
        t,
      );
      return (
        o("WAWebWamBlockEventReporter").logBlockEvent({
          contact: e,
          blockEntryPoint: n,
          isBlock: !1,
        }),
        y(o("WAWebStateUtils").unproxy(e), !1, t)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o(
              "WAWebUpdateBlocklistDbJob",
            ).updateBlockingStatusForPSAUser(e),
            n = e;
          t
            ? o("WAWebBlocklistCollection").BlocklistCollection.add({ id: n })
            : o("WAWebBlocklistCollection").BlocklistCollection.remove(n);
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t, r, a, i) {
      var l = e.isContactBlocked,
        s = t && l,
        u = !t && !l;
      if (s || u) return (d || (d = n("Promise"))).resolve();
      var c = b(e, t ? "block" : "unblock", r, a).then(
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                if (e && e.errorCode != null)
                  throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
                    e.errorCode,
                    e.errorText,
                  );
                var n = e.targetWid;
                (yield o("WAWebUpdateBlocklistDbJob").updateBlocklistDbJob(
                  n,
                  t,
                ),
                  t
                    ? o("WAWebBlocklistCollection").BlocklistCollection.add({
                        id: n,
                      })
                    : o("WAWebBlocklistCollection").BlocklistCollection.remove(
                        n,
                      ));
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        ),
        m = function () {
          return y(e, !t, r, a, i);
        },
        p = function () {
          return y(e, t, r, a, i);
        };
      return (C(e, c, t, m, p, i), c);
    }
    function C(t, n, r, a, i, l) {
      l === void 0 && (l = o("WAWebActionToast.react").genId());
      var u = o("WAWebFrontendContactGetters").getFormattedName(t),
        c = r
          ? new (o("WAWebActionToast.react").ActionType)(
              s._(/*BTDS*/ "Blocking {member}", [s._param("member", u)]),
            )
          : new (o("WAWebActionToast.react").ActionType)(
              s._(/*BTDS*/ "Unblocking {member}", [s._param("member", u)]),
            ),
        d = n
          .then(function () {
            var e = r
              ? s._(/*BTDS*/ "{member} blocked", [s._param("member", u)])
              : s._(/*BTDS*/ "{member} unblocked", [s._param("member", u)]);
            return new (o("WAWebActionToast.react").ActionType)(e, {
              actionText: s._(/*BTDS*/ "Undo"),
              actionHandler: a,
            });
          })
          .catch(function (t) {
            if (t instanceof o("WAWebBackendErrors").ServerStatusCodeError) {
              if (t.statusCode >= 400)
                throw r
                  ? new (o("WAWebActionToast.react").ActionType)(
                      s._(/*BTDS*/ "Couldn't block {member}", [
                        s._param("member", u),
                      ]),
                    )
                  : new (o("WAWebActionToast.react").ActionType)(
                      s._(/*BTDS*/ "Couldn't unblock {member}", [
                        s._param("member", u),
                      ]),
                    );
            } else {
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "action:setBlock dropped",
                  ])),
              );
              var n = r
                ? s._(/*BTDS*/ "Couldn't block {member}", [
                    s._param("member", u),
                  ])
                : s._(/*BTDS*/ "Couldn't unblock {member}", [
                    s._param("member", u),
                  ]);
              throw new (o("WAWebActionToast.react").ActionType)(n, {
                actionText: s._(/*BTDS*/ "Try again."),
                actionHandler: i,
              });
            }
          });
      o("WAWebToastManager").ToastManager.open(
        p.jsx(o("WAWebActionToast.react").ActionToast, {
          id: l,
          initialAction: c,
          pendingAction: d,
        }),
      );
    }
    function b(e, t, n, r) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            if (e.id.isPSA()) {
              var a = yield o("WAWebBlockUserJob").blockUnblockPSAUser(t);
              return a != null && a.errorCode ? a : { targetWid: e.id };
            }
            if (o("WAWebBlocklistMigration").isBlocklistMigrated()) {
              var i = S(e, n),
                l = yield o("WAWebBlockUserJob").blockUnblockUser({
                  lid: i,
                  action: t,
                  bizOptOutArgs: r,
                });
              return l != null && l.errorCode ? l : { targetWid: i };
            }
            var s = e.id,
              u = e.phoneNumber,
              c = t === "block" && s.isLid(),
              d = c && u != null ? u : s,
              m = yield o("WAWebBlockUserJob").blockUnblockUser({
                wid: d,
                action: t,
                bizOptOutArgs: r,
              });
            return m != null && m.errorCode ? m : { targetWid: d };
          },
        )),
        v.apply(this, arguments)
      );
    }
    function S(e, t) {
      var n = e.id;
      if (n.isLid()) return n;
      var r = o("WAWebChatCollection").ChatCollection.get(n);
      if (r) {
        if (r.accountLid) return r.accountLid;
        var a =
          "[blocklist] no accountLid for chat: " +
          r.id.toLogString() +
          ", entryPoint: " +
          (t != null ? t : "null");
        throw (
          o("WALogger")
            .ERROR(
              u || (u = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
              a,
            )
            .sendLogs("blocklist-no-accountlid-chat"),
          a
        );
      }
      var i =
        "[blocklist] trying to block a pn contact (id: " +
        n.toLogString() +
        ") without a chat,  entryPoint: " +
        (t != null ? t : "null");
      throw (
        o("WALogger")
          .ERROR(
            c || (c = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
            i,
          )
          .sendLogs("blocklist-pn-contact-without-chat"),
        i
      );
    }
    ((l.blockContact = _),
      (l.unblockContact = f),
      (l.updatePSAUserBlockingStatus = g));
  },
  226,
);
