__d(
  "WAWebVoipOutgoingCallPreSetup",
  [
    "WALogger",
    "WAWebAdvSyncDeviceListApi",
    "WAWebApiDeviceList",
    "WAWebCallCollection",
    "WAWebContactMutator",
    "WAWebLidMigrationUtils",
    "WAWebVoipCancelOutgoingCall",
    "WAWebVoipOutgoingCallQpl",
    "WAWebVoipOutgoingSetupLatencyMode",
    "WAWebVoipStartCallPermissions",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = "#aa6627";
    async function p(e, t, n, r) {
      var a,
        i = b();
      (a = o("WAWebVoipOutgoingCallQpl")).voipOutgoingCallQplAddPoint(
        e,
        a.VoipOutgoingCallQplPoint.DEVICE_PERMISSIONS_START,
      );
      var l = await o(
        "WAWebVoipStartCallPermissions",
      ).checkStartCallPermissions(n, r);
      a.voipOutgoingCallQplAddPoint(
        e,
        a.VoipOutgoingCallQplPoint.DEVICE_PERMISSIONS_END,
      );
      var s = b();
      if (l == null) return { status: "stopped", stop: "no_permission" };
      var u = await y(e, t);
      return u.status === "stopped"
        ? u
        : (o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
            e,
            o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
              .SYNC_DEVICE_LIST_START,
          ),
          await C(u.peerWid, e),
          o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
            e,
            o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
              .SYNC_DEVICE_LIST_END,
          ),
          babelHelpers.extends({}, u, {
            permission: l,
            permissionsEndTs: s,
            permissionsStartTs: i,
          }));
    }
    function _(e, t, n, r) {
      var o = r.signal,
        a = r.voipReadyTs;
      return n.status === "stopped"
        ? (f(e, t, n.stop, o), null)
        : {
            devicePermissionsMs: h(n, a),
            peerPnWid: n.peerPnWid,
            peerWid: n.peerWid,
            permission: n.permission,
            signal: o,
          };
    }
    function f(t, n, r, a) {
      e: {
        if (r === "no_permission" && a.aborted) {
          o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplCancel(
            t,
            "aborted_before_signaling",
          );
          break e;
        }
        if (r === "no_permission") {
          (o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplCancel(t, g()),
            o("WAWebVoipCancelOutgoingCall").cancelPendingOutgoingCall());
          break e;
        }
        if (r === "lid_resolution_failed") {
          (o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: startWAWebVoipCall: LID resolution failed after usync, aborting call",
                ])),
            )
            .sendLogs(
              "voip: startWAWebVoipCall: LID failed after usync, call aborted",
            ),
            o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplFail(
              t,
              "lid_resolution_failed",
            ),
            o("WAWebVoipCancelOutgoingCall").cancelPendingOutgoingCall());
          break e;
        }
        if (r === "peer_wid_null") {
          (o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: startWAWebVoipCall: peerWid is null",
                ])),
            )
            .sendLogs("voip: startWAWebVoipCall: peerWid is null"),
            o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplFail(
              t,
              "peer_wid_null",
            ),
            o("WAWebVoipCancelOutgoingCall").cancelPendingOutgoingCall());
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            r,
        );
      }
    }
    function g() {
      return r("WAWebCallCollection").activeCall != null
        ? "another_call"
        : "permission_denied";
    }
    function h(e, t) {
      var n = e.permissionsEndTs,
        r = e.permissionsStartTs;
      return r == null || n == null || t == null
        ? null
        : Math.max(0, n - Math.max(r, t));
    }
    async function y(e, t) {
      var n = o("WAWebLidMigrationUtils").toLid(t),
        r = o("WAWebLidMigrationUtils").toPn(t);
      if (n == null) {
        if (
          (o("WALogger")
            .LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: startWAWebVoipCall: toLid() returned null, attempting usync for LID resolution",
                ])),
            )
            .color(m),
          o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
            e,
            o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
              .LID_RESOLUTION_SYNC_START,
          ),
          await o("WAWebAdvSyncDeviceListApi").syncDeviceList({
            wids: [t],
            context: "voip",
            phash: null,
          }),
          o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
            e,
            o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
              .LID_RESOLUTION_SYNC_END,
          ),
          (n = o("WAWebLidMigrationUtils").toLid(t)),
          n == null)
        )
          return { status: "stopped", stop: "lid_resolution_failed" };
        o("WALogger")
          .LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: startWAWebVoipCall: usync resolved LID successfully",
              ])),
          )
          .color(m);
      }
      var a = n != null ? n : r;
      return a == null
        ? { status: "stopped", stop: "peer_wid_null" }
        : { peerPnWid: r, peerWid: a, status: "resolved" };
    }
    async function C(e, t) {
      if (o("WAWebVoipOutgoingSetupLatencyMode").isCacheAwareSyncEnabled())
        try {
          var n = await o("WAWebApiDeviceList").getDeviceRecord(e);
          if (
            n != null &&
            n.deleted === !1 &&
            n.expectedTs == null &&
            n.advAccountType != null
          ) {
            var r = n.advAccountType;
            (o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddAnnotations(
              t,
              { bool: { device_list_cache_hit: !0 } },
            ),
              o("WAWebContactMutator").updateContactAdvAccountType({
                contactId: o("WAWebWidFactory").asUserWidOrThrow(e),
                advAccountType: r,
              }));
            return;
          }
          o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddAnnotations(t, {
            bool: { device_list_cache_hit: !1 },
          });
        } catch (e) {
          (o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddAnnotations(t, {
            bool: { device_list_cache_error: !0 },
          }),
            o("WALogger").WARN(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: cache-aware device sync failed, falling back to network sync: ",
                  "",
                ])),
              e,
            ));
        }
      await o("WAWebAdvSyncDeviceListApi").syncDeviceList({
        wids: [e],
        context: "voip",
        phash: null,
      });
    }
    function b() {
      var e, t;
      return (e = (t = globalThis.performance) == null ? void 0 : t.now()) !=
        null
        ? e
        : null;
    }
    ((l.runOutgoingCallPreSetup = p),
      (l.finishOutgoingCallPreSetup = _),
      (l.stopOutgoingCallBeforeSetup = f),
      (l.nowMs = b));
  },
  98,
);
