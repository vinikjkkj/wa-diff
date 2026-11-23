__d(
  "WAWebBlockContactAction",
  [
    "fbt",
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
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m = d || (d = o("react"));
    function p(e) {
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
      var d = g(o("WAWebStateUtils").unproxy(a), !0, n, t, void 0, l);
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
    function _(e, t) {
      var n = o("WAWebBlocklistUtils").getBlockEventMetricFromBlockEntryPoint(
        t,
      );
      return (
        o("WAWebWamBlockEventReporter").logBlockEvent({
          contact: e,
          blockEntryPoint: n,
          isBlock: !1,
        }),
        g(o("WAWebStateUtils").unproxy(e), !1, t)
      );
    }
    async function f(e) {
      var t = await o(
          "WAWebUpdateBlocklistDbJob",
        ).updateBlockingStatusForPSAUser(e),
        n = e;
      t
        ? o("WAWebBlocklistCollection").BlocklistCollection.add({ id: n })
        : o("WAWebBlocklistCollection").BlocklistCollection.remove(n);
    }
    function g(e, t, n, r, a, i) {
      i === void 0 && (i = !0);
      var l = e.isContactBlocked,
        s = t && l,
        u = !t && !l;
      if (s || u) return Promise.resolve();
      var c = y({
          action: t ? "block" : "unblock",
          bizOptOutArgs: r,
          contact: e,
          entryPoint: n,
        }).then(async function (e) {
          if (e && e.errorCode != null)
            throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
              e.errorCode,
              e.errorText,
            );
          var n = e.targetWid;
          (await (
            o("WAWebBackendRuntime").isWebDiBackendEnabled()
              ? o("WAWebBackendRuntime").runtime(
                  o("WAWebBlocklistService").BlocklistService,
                ).updateBlocklistDbJob
              : o("WAWebUpdateBlocklistDbJob").updateBlocklistDbJob
          )(n, t),
            t
              ? o("WAWebBlocklistCollection").BlocklistCollection.add({ id: n })
              : o("WAWebBlocklistCollection").BlocklistCollection.remove(n));
        }),
        d = function () {
          return g(e, !t, n, r, a);
        },
        m = function () {
          return g(e, t, n, r, a);
        };
      return (
        i &&
          h({ action: c, block: t, contact: e, redo: m, toastId: a, undo: d }),
        c
      );
    }
    function h(t) {
      var n = t.action,
        r = t.block,
        a = t.contact,
        i = t.redo,
        l = t.toastId,
        u = l === void 0 ? o("WAWebActionToast.react").genId() : l,
        c = t.undo,
        d = o("WAWebFrontendContactGetters").getFormattedName(a),
        p = r
          ? new (o("WAWebActionToast.react").ActionType)(
              s._(/*BTDS*/ "", [s._param("member", d)]),
            )
          : new (o("WAWebActionToast.react").ActionType)(
              s._(/*BTDS*/ "", [s._param("member", d)]),
            ),
        _ = n
          .then(function () {
            var e = r
              ? s._(/*BTDS*/ "", [s._param("member", d)])
              : s._(/*BTDS*/ "", [s._param("member", d)]);
            return new (o("WAWebActionToast.react").ActionType)(e, {
              actionText: s._(/*BTDS*/ ""),
              actionHandler: c,
            });
          })
          .catch(function (t) {
            if (t instanceof o("WAWebBackendErrors").ServerStatusCodeError) {
              if (t.statusCode >= 400)
                throw r
                  ? new (o("WAWebActionToast.react").ActionType)(
                      s._(/*BTDS*/ "", [s._param("member", d)]),
                    )
                  : new (o("WAWebActionToast.react").ActionType)(
                      s._(/*BTDS*/ "", [s._param("member", d)]),
                    );
            } else {
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "action:setBlock dropped",
                  ])),
              );
              var n = r
                ? s._(/*BTDS*/ "", [s._param("member", d)])
                : s._(/*BTDS*/ "", [s._param("member", d)]);
              throw new (o("WAWebActionToast.react").ActionType)(n, {
                actionText: s._(/*BTDS*/ ""),
                actionHandler: i,
              });
            }
          });
      o("WAWebToastManager").ToastManager.open(
        m.jsx(o("WAWebActionToast.react").ActionToast, {
          id: u,
          initialAction: p,
          pendingAction: _,
        }),
      );
    }
    async function y(e) {
      var t = e.action,
        n = e.bizOptOutArgs,
        r = e.contact,
        a = e.entryPoint;
      if (r.id.isPSA()) {
        var i = await o("WAWebBlockUserJob").blockUnblockPSAUser(t);
        return i != null && i.errorCode ? i : { targetWid: r.id };
      }
      if (o("WAWebBlocklistMigration").isBlocklistMigrated()) {
        var l = C(r, a),
          s = await o("WAWebBlockUserJob").blockUnblockUser({
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
        p = await o("WAWebBlockUserJob").blockUnblockUser({
          wid: m,
          action: t,
          bizOptOutArgs: n,
        });
      return p != null && p.errorCode ? p : { targetWid: m };
    }
    function C(e, t) {
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
    ((l.blockContact = p),
      (l.unblockContact = _),
      (l.updatePSAUserBlockingStatus = f));
  },
  226,
);
