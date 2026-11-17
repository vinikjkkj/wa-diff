__d(
  "WAWebBlockContactAction",
  [
    "fbt",
    "Promise",
    "WALogger",
    "WAWebActionToast.react",
    "WAWebBackendErrors",
    "WAWebBackendRuntime",
    "WAWebBlockUserJob",
    "WAWebBlocklistCollection",
    "WAWebBlocklistMigration",
    "WAWebBlocklistService",
    "WAWebBlocklistUtils",
    "WAWebChatCollection",
    "WAWebFrontendContactGetters",
    "WAWebMmSignalSharingLoggingEvents",
    "WAWebNoop",
    "WAWebQbmThreadLevelActionLogEventLazy",
    "WAWebSmb1pdConversionSignalAction",
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
        a = e.contact,
        i = e.showToast,
        l = i === void 0 ? !0 : i,
        s = e.skipCtwa1pdNbfSignal,
        u = o("WAWebBlocklistUtils").getBlockEventMetricFromBlockEntryPoint(n);
      o("WAWebWamBlockEventReporter").logBlockEvent({
        contact: a,
        blockEntryPoint: u,
        isBlock: !0,
      });
      var c = o("WAWebChatCollection").ChatCollection.get(a.id);
      (o("WAWebQbmThreadLevelActionLogEventLazy").logQbmThreadLevelAction({
        blockEntryPoint: u,
        chat: c,
        threadActionEntryPoint: "OTHER",
        threadLevelAction: "BLOCK",
      }),
        o(
          "WAWebMmSignalSharingLoggingEvents",
        ).logMmSignalSharingBlockVerificationEvent({
          blockEntryPoint: n,
          chat: c,
          reason: t == null ? void 0 : t.reason,
          blockEntryPointMetric: u,
        }),
        o(
          "WAWebMmSignalSharingLoggingEvents",
        ).logMmSignalSharingUserBlockWithReasonEvent({
          chat: c,
          reason: t == null ? void 0 : t.reason,
          blockEntryPointMetric: u,
        }));
      var d = y(o("WAWebStateUtils").unproxy(a), !0, n, t, void 0, l);
      return (
        s !== !0 &&
          c != null &&
          d
            .then(function () {
              return o(
                "WAWebSmb1pdConversionSignalAction",
              ).log1pdBlockConversionSignal(c);
            })
            .catch(r("WAWebNoop")),
        d
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
    function y(e, t, r, a, i, l) {
      l === void 0 && (l = !0);
      var s = e.isContactBlocked,
        u = t && s,
        c = !t && !s;
      if (u || c) return (d || (d = n("Promise"))).resolve();
      var m = b({
          action: t ? "block" : "unblock",
          bizOptOutArgs: a,
          contact: e,
          entryPoint: r,
        }).then(
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                if (e && e.errorCode != null)
                  throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
                    e.errorCode,
                    e.errorText,
                  );
                var n = e.targetWid;
                (yield (
                  o("WAWebBackendRuntime").isWebDiBackendEnabled()
                    ? o("WAWebBackendRuntime").runtime(
                        o("WAWebBlocklistService").BlocklistService,
                      ).updateBlocklistDbJob
                    : o("WAWebUpdateBlocklistDbJob").updateBlocklistDbJob
                )(n, t),
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
        p = function () {
          return y(e, !t, r, a, i);
        },
        _ = function () {
          return y(e, t, r, a, i);
        };
      return (
        l &&
          C({ action: m, block: t, contact: e, redo: _, toastId: i, undo: p }),
        m
      );
    }
    function C(t) {
      var n = t.action,
        r = t.block,
        a = t.contact,
        i = t.redo,
        l = t.toastId,
        u = l === void 0 ? o("WAWebActionToast.react").genId() : l,
        c = t.undo,
        d = o("WAWebFrontendContactGetters").getFormattedName(a),
        m = r
          ? new (o("WAWebActionToast.react").ActionType)(
              s._(/*BTDS*/ "Blocking {member}", [s._param("member", d)]),
            )
          : new (o("WAWebActionToast.react").ActionType)(
              s._(/*BTDS*/ "Unblocking {member}", [s._param("member", d)]),
            ),
        _ = n
          .then(function () {
            var e = r
              ? s._(/*BTDS*/ "{member} blocked", [s._param("member", d)])
              : s._(/*BTDS*/ "{member} unblocked", [s._param("member", d)]);
            return new (o("WAWebActionToast.react").ActionType)(e, {
              actionText: s._(/*BTDS*/ "Undo"),
              actionHandler: c,
            });
          })
          .catch(function (t) {
            if (t instanceof o("WAWebBackendErrors").ServerStatusCodeError) {
              if (t.statusCode >= 400)
                throw r
                  ? new (o("WAWebActionToast.react").ActionType)(
                      s._(/*BTDS*/ "Couldn't block {member}", [
                        s._param("member", d),
                      ]),
                    )
                  : new (o("WAWebActionToast.react").ActionType)(
                      s._(/*BTDS*/ "Couldn't unblock {member}", [
                        s._param("member", d),
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
                    s._param("member", d),
                  ])
                : s._(/*BTDS*/ "Couldn't unblock {member}", [
                    s._param("member", d),
                  ]);
              throw new (o("WAWebActionToast.react").ActionType)(n, {
                actionText: s._(/*BTDS*/ "Try again."),
                actionHandler: i,
              });
            }
          });
      o("WAWebToastManager").ToastManager.open(
        p.jsx(o("WAWebActionToast.react").ActionToast, {
          id: u,
          initialAction: m,
          pendingAction: _,
        }),
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.action,
            n = e.bizOptOutArgs,
            r = e.contact,
            a = e.entryPoint;
          if (r.id.isPSA()) {
            var i = yield o("WAWebBlockUserJob").blockUnblockPSAUser(t);
            return i != null && i.errorCode ? i : { targetWid: r.id };
          }
          if (o("WAWebBlocklistMigration").isBlocklistMigrated()) {
            var l = S(r, a),
              s = yield o("WAWebBlockUserJob").blockUnblockUser({
                lid: l,
                action: t,
                bizOptOutArgs: n,
              });
            return s != null && s.errorCode ? s : { targetWid: l };
          }
          var u = r.id,
            c = r.phoneNumber,
            d = t === "block" && u.isLid(),
            m = d && c != null ? c : u,
            p = yield o("WAWebBlockUserJob").blockUnblockUser({
              wid: m,
              action: t,
              bizOptOutArgs: n,
            });
          return p != null && p.errorCode ? p : { targetWid: m };
        })),
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
          (t == null ? "null" : t);
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
        (t == null ? "null" : t);
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
