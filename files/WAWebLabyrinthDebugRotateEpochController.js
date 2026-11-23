__d(
  "WAWebLabyrinthDebugRotateEpochController",
  [
    "WABase64",
    "WALogger",
    "WAResultOrError",
    "WAWebFetchLabyrinthEpochDevicesJob",
    "WAWebLabyrinthDebugDeviceStateStore",
    "WAWebLabyrinthDebugDeviceStateUtils",
    "WAWebLabyrinthDebugLoadForRotateEpoch",
    "WAWebLabyrinthEncodeEpochAnonId",
    "WAWebLabyrinthWasmRotateEpoch",
    "WAWebRotateLabyrinthEpochJob",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g = "Only the client that created the backup can rotate its epoch";
    async function h() {
      var t = await o("WAWebLabyrinthDebugDeviceStateUtils").requireDebugState(
          o("WAWebLabyrinthDebugLoadForRotateEpoch").loadForRotateEpoch,
        ),
        n = t.epochStorageAuthPrivateKey,
        a = t.vdDeviceId;
      if (a == null || n == null) throw r("err")(g);
      var i = t.currentEpoch.serverEpochId,
        l = await o(
          "WAWebFetchLabyrinthEpochDevicesJob",
        ).fetchLabyrinthEpochDevices();
      if (l.epochId !== i)
        throw r("err")(
          "Labyrinth epoch membership is for a different epoch than the one being rotated",
        );
      var _ = t.ebDeviceId;
      if (
        !l.devices.some(function (e) {
          return e.deviceId === _;
        })
      )
        throw r("err")(
          "Labyrinth epoch membership does not include this device, so it cannot open the new epoch",
        );
      var f = l.devices.map(function (e) {
          return {
            deviceId: e.deviceId,
            epochStoragePublicKey: y(e.epochStoragePublicKey),
            epochStoragePublicKeySig: y(e.epochStoragePublicKeySig),
            devicePublicKey: y(e.devicePublicKey),
            prevDeviceEpochHmac: y(e.deviceEpochHmac),
          };
        }),
        h = await o("WAWebLabyrinthWasmRotateEpoch").rotateEpochWasm({
          currentEpochRootKey: t.currentEpoch.epochRootKey,
          currentEpochAnonId: t.currentEpoch.epochAnonId,
          currentEpochFbid: i,
          epochStorageAuthPrivateKey: n,
          members: f,
        });
      if (!h.success)
        return (
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[Debug][Labyrinth] rotateEpochWasm failed",
              ])),
          ),
          h
        );
      (o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "[Debug][Labyrinth] rotateEpochWasm success",
          ])),
      ),
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[Debug][Labyrinth] start rotateLabyrinthEpoch GQL request",
            ])),
        ));
      try {
        var v = await o("WAWebRotateLabyrinthEpochJob").rotateLabyrinthEpoch(
            b({
              currentEpochId: i,
              members: f,
              openerDeviceId: _,
              wasmResult: h.value,
            }),
          ),
          S = v.wa_labyrinth_rotate_epoch;
        e: {
          var R = S;
          if (
            ((typeof R == "object" && R !== null) || typeof R == "function") &&
            R.__typename === "WALabyrinthRotateEpochData"
          ) {
            var L,
              E = R;
            (o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[Debug][Labyrinth] rotateLabyrinthEpoch GQL request success",
                ])),
            ),
              await C(h.value, (L = E.new_epoch_id) != null ? L : null));
            break e;
          }
          if (
            ((typeof R == "object" && R !== null) || typeof R == "function") &&
            R.__typename === "WALabyrinthRotateEpochError"
          ) {
            var k = R;
            o("WALogger").ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[Debug][Labyrinth] rotateLabyrinthEpoch GQL request failed",
                ])),
            );
            break e;
          }
          {
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[Debug][Labyrinth] rotate epoch GQL response",
                ])),
            );
            break e;
          }
        }
        return o("WAResultOrError").makeResult(S);
      } catch (e) {
        throw (
          o("WALogger")
            .ERROR(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[Debug][Labyrinth] rotateLabyrinthEpoch GQL request failed",
                ])),
            )
            .catching(r("getErrorSafe")(e)),
          e
        );
      }
    }
    function y(e) {
      if (!e.success) throw e.error;
      return e.value;
    }
    async function C(e, t) {
      if (t == null) {
        o("WALogger").ERROR(
          _ ||
            (_ = babelHelpers.taggedTemplateLiteralLoose([
              "[Debug][Labyrinth] rotate response is missing new_epoch_id; nothing persisted",
            ])),
        );
        return;
      }
      var n = await o(
        "WAWebLabyrinthDebugDeviceStateStore",
      ).rotateLabyrinthDebugDeviceStateToEpoch({
        epochAnonId: e.newEpochAnonId,
        epochRootKey: e.newEpochRootKey,
        serverEpochId: t,
      });
      n.success ||
        o("WALogger")
          .ERROR(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "[Debug][Labyrinth] failed to persist the rotated epoch",
              ])),
          )
          .catching(n.error.error);
    }
    function b(e) {
      var t = e.currentEpochId,
        n = e.members,
        a = e.openerDeviceId,
        i = e.wasmResult,
        l = new Map(
          n.map(function (e) {
            return [e.deviceId, e.devicePublicKey];
          }),
        ),
        s = i.memberEdges.map(function (e) {
          var t = l.get(e.deviceId);
          if (t == null)
            throw r("err")(
              "Native Labyrinth rotate-epoch: wasm edge for unknown device " +
                e.deviceId,
            );
          return {
            device_id: e.deviceId,
            encrypted_epoch_key: o("WABase64").encodeB64(e.encryptedEpochKey),
            device_pub: o("WABase64").encodeB64(t),
            device_epoch_hmac: o("WABase64").encodeB64(e.deviceEpochHmac),
            epoch_root_key_fingerprint: o("WABase64").encodeB64(
              i.epochRootKeyFingerprint,
            ),
          };
        });
      if (
        !s.some(function (e) {
          return e.device_id === a;
        })
      )
        throw r("err")(
          "Native Labyrinth rotate-epoch: the opener is not one of the members",
        );
      return {
        current_epoch_id: t,
        opener_device_id: a,
        epoch_anon_id: o(
          "WAWebLabyrinthEncodeEpochAnonId",
        ).encodeLabyrinthEpochAnonId(i.newEpochAnonId),
        backward_edge: {
          encrypted_prev_epoch_anon_id: o("WABase64").encodeB64(
            i.backwardEdge.encryptedPrevEpochAnonId,
          ),
          encrypted_prev_epoch_root_key: o("WABase64").encodeB64(
            i.backwardEdge.encryptedPrevEpochRootKey,
          ),
          prev_epoch_root_key_fingerprint: o("WABase64").encodeB64(
            i.backwardEdge.prevEpochRootKeyFingerprint,
          ),
        },
        epoch_device_list: s,
        expected_device_removals: [],
        epoch_root_key_fingerprint: o("WABase64").encodeB64(
          i.epochRootKeyFingerprint,
        ),
      };
    }
    l.rotateLabyrinthDebugEpoch = h;
  },
  98,
);
