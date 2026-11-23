__d(
  "WAWebEncryptAndSendStatusMsg",
  [
    "WAJids",
    "WALogger",
    "WAPromiseTimeout",
    "WASmaxStatusPublishPostBroadcastStatusRPC",
    "WAWap",
    "WAWebABProps",
    "WAWebAdvSignatureApi",
    "WAWebApiMessageInfoStore",
    "WAWebBackendJobs.flow",
    "WAWebBackendJobsCommon",
    "WAWebCommsAckParser",
    "WAWebCommsWapMd",
    "WAWebDBDeviceListFanout",
    "WAWebDeprecatedSendIqWorkerCompatible",
    "WAWebE2EProtoUtils",
    "WAWebEncryptMsgProtobuf",
    "WAWebGetGroupKeyDistributionMsg",
    "WAWebLidMigrationUtils",
    "WAWebLidStatusMigrationUtils",
    "WAWebManageE2ESessionsJob",
    "WAWebMsgFanoutTypes",
    "WAWebMsgKey",
    "WAWebNoop",
    "WAWebPostPrekeysDepletionMetric",
    "WAWebProtobufsE2E.pb",
    "WAWebReportingTokenUtils",
    "WAWebSchemaMessageInfo",
    "WAWebSendMsgCommonApi",
    "WAWebSendMsgCreateFanoutStanza",
    "WAWebSendMsgMetaNode",
    "WAWebSendMsgQueueMap",
    "WAWebSessionScope",
    "WAWebSignal",
    "WAWebSignalProtocolStore",
    "WAWebSignalSessionApi",
    "WAWebStatusGatingUtils",
    "WAWebStatusPublishRequestArgs",
    "WAWebStatusSessionGatingUtils",
    "WAWebUserPrefsStatus",
    "WAWebUserUtils",
    "WAWebWamEnumMessageDistributionEnumType",
    "WAWebWamEnumMessageType",
    "WAWebWamEnumPrekeysFetchContext",
    "WAWebWamNumberToSizeBucket",
    "WAWebWidFactory",
    "compactMap",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["statusSetting"],
      s,
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
      C,
      b,
      v,
      S,
      R = 1e4,
      L = new Map();
    async function E(e) {
      var t = await o("WAWebSchemaMessageInfo")
        .getMessageInfoTable()
        .equals(["msgKey"], String(e));
      return (
        t.length === 0 &&
          (t = await o("WAWebSchemaMessageInfo")
            .getMessageInfoTable()
            .equals(
              ["msgKey"],
              String(o("WAWebLidMigrationUtils").getAlternateMsgKey(e)),
            )),
        t.map(function (e) {
          return o("WAWebLidStatusMigrationUtils").matWidConvert(
            o("WAWebWidFactory").createWid(e.receiverUserJid),
          );
        })
      );
    }
    function k(e, t) {
      var n = e.filter(function (e) {
        return !e.isLid();
      });
      n.length > 0 &&
        o("WALogger").WARN(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "encryptAndSendStatusMsg: PN in ",
              ": ",
              "",
            ])),
          t,
          n.map(function (e) {
            var t = o("WAWebLidMigrationUtils").toUserLid(e);
            return (
              e.toLogString() + " (hasLidMapping=" + String(t != null) + ")"
            );
          }),
        );
    }
    async function I(e) {
      var t = e.metricsReporter,
        n = e.msgProtobuf,
        a = e.sendMsgRecord,
        i = a.data.id,
        l = o("WAWebWidFactory").createWid(o("WAJids").STATUS_JID),
        s = o("WAWebUserUtils").getMeDeviceLidOrThrow(),
        h = K(n),
        y = o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(n);
      y === "reaction" &&
        o("WALogger")
          .ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "encryptAndSendStatusMsg: unexpected reaction type for status message ",
                "",
              ])),
            i.id,
          )
          .sendLogs("status-unexpected-reaction-type");
      var C,
        b,
        v = null,
        S = await o("WAWebUserPrefsStatus").getStatusList(),
        R = r("compactMap")(S.list, o("WAWebLidMigrationUtils").toUserLid);
      if (
        ((S.list = R.map(function (e) {
          return e;
        })),
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "encryptAndSendStatusMsg: start to send ",
              ", revoke: ",
              "",
            ])),
          i.id,
          h,
        ),
        !(h == null && S.list.length === 0))
      ) {
        var L = o("WAWebStatusSessionGatingUtils").getStatusSessionScope();
        if (h) {
          var I;
          (I = t.sendPerfReporter) == null || I.setIsRevokeMessage(!0);
          var P = await E(h);
          if (Q(P, S.list))
            return x({
              authorId: s,
              metricsReporter: t,
              msgProtobuf: n,
              revokeSenderList: P,
              sendMsgRecord: a,
              sessionScope: L,
            });
          ((C = P), (b = !1));
        } else ((C = S.list), (b = !0), (v = S.setting));
        var A = o("WAWebABProps").getABPropConfigValue(
            "web_status_sender_key_rotation_enabled",
          ),
          F = r("WAWebNoop"),
          O = async function () {
            var e, u;
            if (A && h != null && (await D(C))) return null;
            var c = A && h == null ? await T() : C;
            k(c, "senderList");
            var g = await o("WAWebDBDeviceListFanout").getFanOutList({
              wids: [].concat(c, [s]),
              shouldMergeAltDevices: !0,
            });
            (o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "encryptAndSendStatusMsg: all device list size ",
                  "",
                ])),
              g.length,
            ),
              k(g, "deviceList after fanout"));
            var y = o("WAWebUserPrefsStatus").getStatusSenderKeyForgetSeq(),
              S = await o("WAWebUserPrefsStatus").getStatusSkDistribList(g, {
                isFullAudience: b,
              }),
              R = S.participantList,
              E = S.rotateKey,
              I = S.skDistribList;
            if (
              (A &&
                E &&
                (await o("WAWebSignalSessionApi").deleteOwnSenderKey(l, s),
                await o(
                  "WAWebUserPrefsStatus",
                ).consumeStatusSenderKeyRotation()),
              A &&
                (F = o("WAWebUserPrefsStatus").trackStatusSenderKeyDistribution(
                  I,
                )),
              I.length > 0)
            ) {
              var x, P, N, O;
              (o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "encryptAndSendStatusMsg: distribute ",
                    " sender key",
                  ])),
                I.length,
              ),
                (x = t.sendReporter) == null ||
                  x.setMessageDistributionType(
                    o("WAWebWamEnumMessageDistributionEnumType")
                      .MESSAGE_DISTRIBUTION_ENUM_TYPE
                      .SENDER_KEY_DISTRIBUTION_MESSAGE,
                  ),
                (P = t.sendReporter) == null || P.setSessionScope(L),
                (N = t.sendReporter) == null || N.setDeviceCount(I.length),
                (O = t.sendPerfReporter) == null ||
                  O.setSenderKeyDistributionCount(I.length));
            }
            if (
              (await o("WAWebApiMessageInfoStore").createOrMergeReceiptRecords(
                g.map(function (e) {
                  return { msgKey: i, receiverId: e };
                }),
              ),
              o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "encryptAndSendStatusMsg: create receipts records",
                  ])),
              ),
              I.length > 0)
            )
              try {
                var B, W;
                (B = t.sendPerfReporter) == null || B.startPrekeysFetchStage();
                var q = await o("WAWebManageE2ESessionsJob").ensureE2ESessions({
                  identityChanged: !1,
                  sessionScope: L,
                  wids: I,
                });
                ((W = t.sendPerfReporter) == null ||
                  W.setFetchedPrekeyCount(
                    q == null ? void 0 : q.missedPrekeyCount,
                  ),
                  o(
                    "WAWebPostPrekeysDepletionMetric",
                  ).maybePostPrekeysDepletionMetric({
                    count: q == null ? void 0 : q.depletedPrekeyCount,
                    prekeysFetchReason: o("WAWebWamEnumPrekeysFetchContext")
                      .PREKEYS_FETCH_CONTEXT.SEND_MESSAGE,
                    messageType: o("WAWebWamEnumMessageType").MESSAGE_TYPE
                      .STATUS,
                    deviceSizeBucket: r("WAWebWamNumberToSizeBucket")(g.length),
                  }));
              } catch (e) {
                o("WALogger")
                  .ERROR(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "encryptAndSendStatusMsg: ensureE2ESessions: failed for ",
                        " devices: ",
                        "",
                      ])),
                    I.length,
                    e,
                  )
                  .tags("messaging");
              }
            ((e = t.sendPerfReporter) == null || e.postPrekeysFetchStage(),
              (u = t.sendPerfReporter) == null || u.startClientEncryptStage());
            var U = o("WAWebStatusGatingUtils").isStatusPublishViaSmaxEnabled()
                ? await w({
                    authorId: s,
                    msgProtobuf: n,
                    participantList: R,
                    sendMsgRecord: a,
                    sessionScope: L,
                    skDistribList: I,
                    statusSetting: v,
                    to: l,
                  })
                : await M({
                    authorId: s,
                    msgProtobuf: n,
                    participantList: R,
                    sendMsgRecord: a,
                    sessionScope: L,
                    skDistribList: I,
                    statusSetting: v,
                    to: l,
                  }),
              V = U.keyedDevices,
              H = U.send;
            return (
              o("WALogger").LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "encryptAndSendStatusMsg: encrypt message body done",
                  ])),
              ),
              $({ keyedDevices: V, participantList: R, skDistribList: I }),
              await o("WAWebSendMsgCommonApi").updateIdentityRange(a, g),
              await o("WAWebSignalProtocolStore")
                .getSignalProtocolStore()
                .flushBufferToDiskIfNotMemOnlyMode(),
              {
                epoch: o("WAWebUserPrefsStatus").getStatusSenderKeyEpoch(),
                forgetSeq: y,
                keyedDevices: V,
                send: H,
              }
            );
          };
        try {
          var B,
            W,
            q,
            U = A
              ? await o("WAWebSendMsgQueueMap").sendMsgQueueMap.enqueue(
                  l.toString(),
                  O,
                )
              : await O();
          if (U == null)
            return x({
              authorId: s,
              metricsReporter: t,
              msgProtobuf: n,
              revokeSenderList: C,
              sendMsgRecord: a,
              sessionScope: L,
            });
          var V = U.epoch,
            H = U.forgetSeq,
            G = U.keyedDevices,
            z = U.send;
          ((B = t.sendPerfReporter) == null || B.postClientEncryptStage(),
            (W = t.sendPerfReporter) == null || W.startWrittenWireStage(),
            o("WALogger").LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "encryptAndSendStatusMsg: start sending ",
                  "",
                ])),
              i.id,
            ));
          var j = await z();
          (h != null && N(j),
            (q = t.sendPerfReporter) == null || q.postWrittenWireStage(),
            await o("WAWebUserPrefsStatus").markStatusHasSenderKey(G, {
              epoch: V,
              forgetSeq: H,
              keepPendingRotation: A,
            }));
        } finally {
          F();
        }
      }
    }
    async function T() {
      var e = await o("WAWebUserPrefsStatus").getStatusList(),
        t = e.list;
      return r("compactMap")(t, o("WAWebLidMigrationUtils").toUserLid);
    }
    async function D(e) {
      var t = await o("WAWebUserPrefsStatus").getStatusList(),
        n = t.list;
      return Q(
        [].concat(e),
        r("compactMap")(n, o("WAWebLidMigrationUtils").toUserLid),
      );
    }
    async function x(e) {
      var t = e.authorId,
        n = e.metricsReporter,
        r = e.msgProtobuf,
        a = e.revokeSenderList,
        i = e.sendMsgRecord,
        l = e.sessionScope;
      (o("WALogger").LOG(
        h ||
          (h = babelHelpers.taggedTemplateLiteralLoose([
            "encryptAndSendStatusMsg: start to send direct revoke message",
          ])),
      ),
        k(a, "direct revoke senderList"));
      var s = await o("WAWebDBDeviceListFanout").getFanOutList({
        wids: [].concat(a, [t]),
        shouldMergeAltDevices: !0,
      });
      (k(s, "direct revoke deviceList"),
        await X({
          deviceList: s,
          metricsReporter: n,
          msgProtobuf: r,
          sendMsgRecord: i,
          sessionScope: l,
        }));
    }
    function $(e) {
      var t = e.keyedDevices,
        n = e.participantList,
        o = e.skDistribList;
      if (o.length > 0 && t.length === 0 && n.length === 0)
        throw r("err")(
          "encryptAndSendStatusMsg: no recipient can decrypt the status",
        );
    }
    var P = (function (e) {
      function t(t) {
        var n,
          r = "status publish rejected: " + t;
        return (
          (n = e.call(this, r) || this),
          (n.name = "StatusServerRejectedError"),
          (n.message = r),
          (n.code = t),
          n
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(babelHelpers.wrapNativeSuper(Error));
    function N(e) {
      if (e instanceof o("WAWap").WapNode && e.attrs.error != null)
        throw new P(String(e.attrs.error));
    }
    async function M(e) {
      var t = e.authorId,
        n = e.msgProtobuf,
        r = e.participantList,
        a = e.sendMsgRecord,
        i = e.sessionScope,
        l = e.skDistribList,
        s = e.statusSetting,
        u = e.to,
        c = a.data.id,
        d = await V({
          authorId: t,
          msgProtobuf: n,
          participantList: r,
          sessionScope: i,
          shouldSkipFailedPrimaryDevices: H(),
          skDistribList: l,
          to: u,
        }),
        m = d[0],
        p = d[1],
        _ = d[2],
        f = d[3],
        g = j({
          sessionScope:
            f.length > 0 ? i : o("WAWebSessionScope").SessionScope.DEFAULT,
          statusSetting: s,
        }),
        h = await o("WAWebReportingTokenUtils").genReportingTokenBody(
          a.data,
          n,
        ),
        y = o("WAWap").wap(
          "message",
          {
            id: o("WAWap").CUSTOM_STRING(c.id),
            to: o("WAWebCommsWapMd").CHAT_JID(u),
            type: o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(n),
            edit: o("WAWebSendMsgCommonApi").editAttribute(n, a.data.subtype),
          },
          m,
          p,
          _,
          g,
          h,
        ),
        C = z(y);
      return {
        keyedDevices: f,
        send: function () {
          return o(
            "WAWebDeprecatedSendIqWorkerCompatible",
          ).deprecatedSendStanzaAndReturnAck(
            y,
            o("WAWebCommsAckParser").toCoreAckTemplate({
              id: c.id,
              class: C,
              from: u,
              participant: null,
            }),
          );
        },
      };
    }
    async function w(t) {
      var n = t.statusSetting,
        r = babelHelpers.objectWithoutPropertiesLoose(t, e),
        o = await A(babelHelpers.extends({}, r, { statusSetting: n })),
        a = o.keyedDevices,
        i = o.requestArgs;
      return {
        keyedDevices: a,
        send: function () {
          return F(i);
        },
      };
    }
    async function A(e) {
      var t = e.authorId,
        n = e.msgProtobuf,
        r = e.participantList,
        a = e.sendMsgRecord,
        i = e.sessionScope,
        l = e.skDistribList,
        s = e.statusSetting,
        u = e.to,
        c = a.data.id,
        d = await q(u, t, l, n, i, H()),
        m = d.advIdentity,
        p = d.encMediaType,
        _ = d.keyDistributions,
        f = d.senderKeyCiphertext,
        g = G(_, r, l),
        h = g.keyedDevices,
        y = g.recipients,
        C = o("WAWebStatusPublishRequestArgs").toStatusBroadcastPublishArgs({
          ciphertextVersion: o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION,
          clientReportingToken: await o(
            "WAWebReportingTokenUtils",
          ).genClientReportingTokenMixinArgs(a.data, n),
          deviceIdentity: m,
          editOrRevoke: o(
            "WAWebStatusPublishRequestArgs",
          ).toStatusEditOrRevokeArgs(n, a.data.subtype),
          encMediaType: p,
          msgType: o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(n),
          participants: y,
          senderKeyCiphertext: new Uint8Array(f),
          senderKeyDistributions: _,
          statusId: c.id,
          statusSetting: s,
          useStatusSessionScope:
            _.length > 0 && i === o("WAWebSessionScope").SessionScope.STATUS,
        });
      return { keyedDevices: h, requestArgs: C };
    }
    async function F(e) {
      var t = e.statusId,
        n = L.get(t),
        r = O(n, e),
        o = W(r);
      return (
        L.set(t, o),
        o.then(function () {
          L.get(t) === o && L.delete(t);
        }),
        n == null ? r : B(n, r)
      );
    }
    async function O(e, t) {
      e != null && (await e);
      var n = await o(
        "WASmaxStatusPublishPostBroadcastStatusRPC",
      ).sendPostBroadcastStatusRPC(t);
      if (n.name === "PostBroadcastStatusResponseNegative") {
        var r = n.value.error;
        throw (
          o("WALogger")
            .ERROR(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "status publish rejected with ",
                  "",
                ])),
              r,
            )
            .tags("messaging")
            .sendLogs("status-publish-smax-negative-ack"),
          new P(String(r))
        );
      }
    }
    async function B(e, t) {
      try {
        await o("WAPromiseTimeout").promiseTimeout(
          e,
          R,
          "Timed out waiting for the previous status publish",
        );
      } catch (e) {
        throw (
          o("WALogger")
            .ERROR(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
                  "status publish timed out waiting for the previous publish",
                ])),
            )
            .tags("messaging")
            .sendLogs("status-publish-serialization-timeout"),
          e
        );
      }
      return t;
    }
    function W(e) {
      return Promise.allSettled([e]).then(r("WAWebNoop"));
    }
    async function q(e, t, n, r, a, i) {
      var l;
      i === void 0 && (i = !1);
      var s = o("WAWebSendMsgCommonApi").encodeAndPad(r),
        u = o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(r),
        c = await o("WAWebSignal").Cipher.encryptSenderKeyMsgSignalProto(
          e,
          t,
          s,
        ),
        d = c.ciphertext,
        m = c.senderKeyBytes;
      o("WALogger").LOG(
        b ||
          (b = babelHelpers.taggedTemplateLiteralLoose([
            "[session] genStatusEncryptedParts: sessionScope=",
            " skDistribListLen=",
            "",
          ])),
        a,
        String(n.length),
      );
      var p =
          n.length > 0
            ? (l = await o(
                "WAWebGetGroupKeyDistributionMsg",
              ).getKeyDistributionMsg(null, e, n, m, !1, void 0, a, i)) != null
              ? l
              : []
            : [],
        _ = p.map(function (e) {
          return babelHelpers.extends({}, e, {
            isPqSession: o("WAWebEncryptMsgProtobuf").isPqxdhCiphertext(
              e.ciphertext,
            ),
          });
        }),
        f = await U(_);
      return {
        advIdentity: f,
        encMediaType: u,
        keyDistributions: _,
        senderKeyCiphertext: d,
      };
    }
    async function U(e) {
      return e.some(function (e) {
        var t = e.type;
        return t === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg;
      })
        ? await o("WAWebAdvSignatureApi").getADVEncodedIdentity()
        : null;
    }
    async function V(e) {
      var t = e.authorId,
        n = e.msgProtobuf,
        r = e.participantList,
        a = e.sessionScope,
        i = e.shouldSkipFailedPrimaryDevices,
        l = i === void 0 ? !1 : i,
        s = e.skDistribList,
        u = e.to,
        c = await q(u, t, s, n, a, l),
        d = c.advIdentity,
        m = c.encMediaType,
        p = c.keyDistributions,
        _ = c.senderKeyCiphertext,
        f = G(p, r, s),
        g = f.keyedDevices,
        h = f.recipients,
        y = p.map(function (e) {
          var t,
            n = e.ciphertext,
            r = e.participant,
            a = e.type;
          return (t = o("WAWap")).wap(
            "to",
            { jid: o("WAWebCommsWapMd").DEVICE_JID(r) },
            t.wap(
              "enc",
              {
                v: t.CUSTOM_STRING(
                  o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString(),
                ),
                type: t.CUSTOM_STRING(a),
              },
              n,
            ),
          );
        }),
        C = h.map(function (e) {
          return o("WAWap").wap("to", {
            jid: o("WAWebCommsWapMd").USER_JID(e),
          });
        }),
        b = null;
      (C.length > 0 || y.length > 0) &&
        (b = o("WAWap").wap("participants", null, y.concat(C)));
      var v = o("WAWap").wap(
          "enc",
          {
            v: o("WAWap").CUSTOM_STRING(
              o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString(),
            ),
            type: o("WAWap").CUSTOM_STRING(
              o("WAWebBackendJobs.flow").CiphertextType.Skmsg,
            ),
            mediatype: o("WAWebBackendJobsCommon").encodeMaybeMediaType(m),
          },
          _,
        ),
        S = d != null ? o("WAWap").wap("device-identity", null, d) : null;
      return [b, v, S, g];
    }
    function H() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_status_skip_failed_primary_skdm_enabled",
      );
    }
    function G(e, t, n) {
      var r = e.map(function (e) {
          var t = e.participant;
          return t;
        }),
        a = new Set(r.map(String)),
        i = n.filter(function (e) {
          return (
            o("WAWebSendMsgCommonApi").isPrimaryDevice(e) && !a.has(String(e))
          );
        });
      return { keyedDevices: r, recipients: [].concat(t, i) };
    }
    function z(e) {
      if (o("WAWebStatusGatingUtils").isStatusStanzaSendEnabled()) {
        e.tag = "status";
        var t =
          Array.isArray(e.content) &&
          e.content.some(function (e) {
            return e instanceof o("WAWap").WapNode && e.tag === "participants";
          });
        return (t || delete e.attrs.device_fanout, "status");
      }
      return "message";
    }
    function j(e) {
      var t = e.contentType,
        n = e.sessionScope,
        r = e.statusSetting;
      return [
        t == null,
        r == null,
        n !== o("WAWebSessionScope").SessionScope.STATUS,
      ].every(function (e) {
        return e;
      })
        ? null
        : o("WAWap").wap("meta", {
            content_type:
              t != null ? o("WAWap").CUSTOM_STRING(t) : o("WAWap").DROP_ATTR,
            status_setting:
              r != null
                ? o(
                    "WAWebStatusPublishRequestArgs",
                  ).toStatusSettingMetaAttribute(r)
                : o("WAWap").DROP_ATTR,
            session_scope:
              n === o("WAWebSessionScope").SessionScope.STATUS
                ? o("WAWap").CUSTOM_STRING("status")
                : o("WAWap").DROP_ATTR,
          });
    }
    function K(e) {
      var t = e.protocolMessage,
        n = null;
      if (
        (t == null ? void 0 : t.type) ===
          o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.REVOKE &&
        t != null &&
        t.key
      ) {
        var a = t.key,
          i = a.id,
          l = a.participant,
          s = a.remoteJid;
        s != null &&
          i != null &&
          l != null &&
          (n = new (r("WAWebMsgKey"))({
            remote: o("WAWebWidFactory").createWid(s),
            fromMe: !0,
            id: i,
            participant: o("WAWebWidFactory").createWid(l),
          }));
      }
      return n;
    }
    function Q(e, t) {
      var n = new Set(
        t.map(function (e) {
          return o("WAWebWidFactory").asUserWidOrThrow(e).toString();
        }),
      );
      return e.some(function (e) {
        return (
          !o("WAWebUserUtils").isMeAccount(e) &&
          !n.has(o("WAWebWidFactory").asUserWidOrThrow(e).toString())
        );
      });
    }
    async function X(e) {
      var t,
        n,
        r = e.deviceList,
        a = e.metricsReporter,
        i = e.msgProtobuf,
        l = e.sendMsgRecord,
        s = e.sessionScope,
        u = l.data.id,
        c = o("WAWebWidFactory").createWid(o("WAJids").STATUS_JID);
      o("WALogger").LOG(
        v ||
          (v = babelHelpers.taggedTemplateLiteralLoose([
            "encryptAndSendStatusDirectMsg: send ",
            " to ",
            " device",
          ])),
        u.id,
        r.length,
      );
      var d = l.data.to,
        m = o("WAWebStatusGatingUtils").isStatusPublishViaSmaxEnabled(),
        p = await o("WAWebSendMsgCreateFanoutStanza").createFanoutMsgStanza({
          chatId: d,
          collectDeviceEncs: m,
          deviceList: r,
          metricReporter: a,
          msgProtobuf: i,
          msgRecord: l,
          option: {
            fanoutType: o("WAWebMsgFanoutTypes").FanoutType.GROUP_DIRECT,
            sessionScope: s,
          },
        }),
        _ = p.deviceEncs,
        f = p.stanza,
        g = m
          ? await Y({
              deviceEncs: _,
              msgProtobuf: i,
              sendMsgRecord: l,
              sessionScope: s,
            })
          : J({ sendMsgRecord: l, sessionScope: s, stanza: f, to: c });
      (await o("WAWebSignalProtocolStore")
        .getSignalProtocolStore()
        .flushBufferToDiskIfNotMemOnlyMode(),
        (t = a.sendPerfReporter) == null || t.startWrittenWireStage(),
        o("WALogger").LOG(
          S ||
            (S = babelHelpers.taggedTemplateLiteralLoose([
              "encryptAndSendStatusDirectMsg: start sending ",
              "",
            ])),
          u.id,
        ));
      var h = await g();
      if (h != null && K(i) != null) throw new P(String(h));
      return ((n = a.sendPerfReporter) == null || n.postWrittenWireStage(), h);
    }
    async function Y(e) {
      var t = e.deviceEncs,
        n = e.msgProtobuf,
        r = e.sendMsgRecord,
        a = e.sessionScope,
        i = r.data.id,
        l = await U(t),
        s = o("WAWebStatusPublishRequestArgs").toStatusDirectPublishArgs({
          ciphertextVersion: o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION,
          clientReportingToken: await o(
            "WAWebReportingTokenUtils",
          ).genClientReportingTokenMixinArgs(r.data, n),
          deviceEncs: t,
          deviceIdentity: l,
          editOrRevoke: o(
            "WAWebStatusPublishRequestArgs",
          ).toStatusEditOrRevokeArgs(n, r.data.subtype),
          encMediaType: o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(n),
          hideDecryptFail:
            o("WAWebE2EProtoUtils").decryptFailAttributeFromProtobuf(n) ===
            o("WAWebBackendJobs.flow").DecryptFailType.Hide,
          isStatusNotify: o("WAWebSendMsgMetaNode").isStatusNotificationPayload(
            n,
          ),
          msgType: o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(n),
          statusId: i.id,
          useStatusSessionScope:
            a === o("WAWebSessionScope").SessionScope.STATUS,
        });
      return async function () {
        return (await F(s), null);
      };
    }
    function J(e) {
      var t = e.sendMsgRecord,
        n = e.sessionScope,
        a = e.stanza,
        i = e.to,
        l = t.data.id,
        s = z(a);
      return (
        Z(a, j({ sessionScope: n })),
        async function () {
          var e = await o(
              "WAWebDeprecatedSendIqWorkerCompatible",
            ).deprecatedSendStanzaAndReturnAck(
              a,
              o("WAWebCommsAckParser").toCoreAckTemplate({
                id: l.id,
                class: s,
                from: i,
                participant: null,
              }),
            ),
            t = o("WAWebSendMsgCommonApi").sendMsgAckSyncParser.parse(e);
          if (t.error != null)
            throw r("err")(
              "encryptAndSendStatusDirectMsg: invalid ack from server",
            );
          return t.success.error;
        }
      );
    }
    function Z(e, t) {
      if (t != null) {
        var n = Array.isArray(e.content) ? e.content : [],
          r = n.find(function (e) {
            return e instanceof o("WAWap").WapNode && e.tag === "meta";
          });
        if (r instanceof o("WAWap").WapNode) {
          r.attrs = babelHelpers.extends({}, r.attrs, t.attrs);
          return;
        }
        e.content = [].concat(n, [t]);
      }
    }
    ((l.calculateRevokeSenderList = E),
      (l.encryptAndSendStatusMsg = I),
      (l.StatusServerRejectedError = P),
      (l.genStatusBroadcastPublishRequest = A),
      (l.sendStatusPublishOrThrow = F),
      (l.genStatusEncryptedParts = q),
      (l.genMessageBody = V),
      (l.maybeApplyStatusTag = z),
      (l.buildStatusMetaNode = j),
      (l.encryptAndSendStatusDirectMsg = X),
      (l.mergeStatusMetaNode = Z));
  },
  98,
);
