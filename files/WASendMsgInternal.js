__d(
  "WASendMsgInternal",
  [
    "FBLogger",
    "WABridge",
    "WADevicesState",
    "WAEncGroupMsg",
    "WAEncUserMsg",
    "WAGlobals",
    "WAJids",
    "WALogger",
    "WAMarkSenderKeyAsSentApi",
    "WAOdsEnums",
    "WAQueryGroupsAndSync",
    "WAResultOrError",
    "WASendMsgRPC",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p = 10002,
      _ = 10009;
    async function f(e, t) {
      var n, a, i, l;
      t.addPoint("encrypt_start", {
        string: {
          sentMessageType:
            e.messageType.isRevoked === !0 ? "revoke" : e.messageType.type,
        },
        bool: {
          isInvisibleMsg:
            e.messageType.type === "text" && e.messageType.isInvisible === !0,
        },
      });
      var s = await o("WAGlobals")
        .getWaOneQueue()
        .enqueue(
          function (n) {
            var r = n.cryptoManager;
            return e.type === "chat"
              ? b(e, t, 2, { cryptoManager: r })
              : C(e, { cryptoManager: r }, 2);
          },
          { operationType: "encrypt", flush: !0 },
        );
      if (
        (t.addPoint("finish_encrypt", {
          string: { chatType: s.success ? s.value.type : s.error },
        }),
        s.success === !1)
      )
        throw r("FBLogger")("wmi").mustfixThrow(
          "Encryption failed %s",
          s.error,
        );
      var u = s.value;
      t.addPoint("sending_stanza_start", {
        string: { encryptionType: u.type },
        int: {
          ciphertextByteLength:
            (n =
              (a =
                (i = u.message) == null || (i = i.ciphertext) == null
                  ? void 0
                  : i.length) != null
                ? a
                : (l = u.participants) == null || (l = l[0].ciphertext) == null
                  ? void 0
                  : l.length) != null
              ? n
              : 0,
        },
      });
      var c = await o("WASendMsgRPC").sendStanza(e, u, e.reportingMeta, t);
      return (
        t.addPoint("sending_stanza_end", {
          bool: { wai: c.type === "success" },
        }),
        { serverResponse: c, encryption: u }
      );
    }
    async function g(t, n, r) {
      var a, i, l, s;
      (r === void 0 && (r = !1), R(t, n));
      var u = r ? 3 : 2,
        c = function (r) {
          return t.type === "chat"
            ? b(t, n, u, { cryptoManager: r })
            : C(t, { cryptoManager: r }, u);
        },
        d = await o("WAGlobals")
          .getWaOneQueue()
          .enqueue(
            function (e) {
              var t = e.cryptoManager;
              return c(t);
            },
            { operationType: "encrypt", flush: !0 },
          ),
        m = d.success ? d.value.type : d.error;
      if (
        (n.addPoint("finish_encrypt", { string: { chatType: m } }),
        d.success === !1)
      )
        return (
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "MAWSendMsg Failed to encrypt message for ",
                " message",
              ])),
            m,
          ),
          o("WAResultOrError").makeError({
            type: "encryption-error",
            isRetriable: !1,
          })
        );
      var p = d.value;
      n.addPoint("sending_stanza_start", {
        string: { encryptionType: p.type },
        int: {
          ciphertextByteLength:
            (a =
              (i =
                (l = p.message) == null || (l = l.ciphertext) == null
                  ? void 0
                  : l.length) != null
                ? i
                : (s = p.participants) == null || (s = s[0].ciphertext) == null
                  ? void 0
                  : s.length) != null
              ? a
              : 0,
        },
      });
      var _ = await o("WASendMsgRPC").sendStanza(t, p, t.reportingMeta, n, r);
      if ((n.addPoint("sending_stanza_end"), _.type === "success")) {
        n.addPoint("send_stanza_success");
        try {
          var f,
            g = await Promise.all([v(t, p, _, n), S(p)]),
            h = g[0];
          return (
            n.addPoint("mark_sender_key_sent"),
            o("WAResultOrError").makeResult({
              baseKey: (f = p.message) == null ? void 0 : f.baseKey,
              reportingMeta: _.reportingMeta,
              serverTs: _.ts,
              meta: { pOrDhashMismatch: h },
            })
          );
        } catch (e) {
          throw (n.addPoint("send_stanza_failed"), e);
        }
      }
      if ((_.type, L(_, m, n), _.type === "parsing_error"))
        return o("WAResultOrError").makeError({
          type: "result-parsing-error",
          isRetriable: !0,
        });
      if (_.type === "error") {
        var y = _.errorCode != null && _.errorCode >= 500;
        return y
          ? o("WAResultOrError").makeError({
              type: "retryable-error",
              backoff: _.backoff,
              isRetriable: !0,
            })
          : o("WAResultOrError").makeError({
              type: "non-retryable-error",
              applicationErrorCode: _.applicationError,
              errorCode: _.errorCode,
              isRetriable: !1,
            });
      }
      return o("WAResultOrError").makeError({
        type: "unexpected-message-codepath",
        details: "impossible-server-error-result",
        isRetriable: !0,
        applicationErrorCode: _.applicationError,
      });
    }
    function h(e) {
      return (
        o("WADevicesState").getDevicesState().reset([e]),
        o("WADevicesState")
          .getDevicesState()
          .waitForUserDevices([e], "SendMsgUtil_recoverUser", !0)
      );
    }
    function y(e) {
      return o("WAJids").switchOnChatJidType(e, {
        interopUser: h,
        msgrUser: h,
        lidUser: h,
        phoneUser: h,
        group: function (t) {
          return o("WAQueryGroupsAndSync").queryGroupsAndSync({
            groupJids: [t],
            ignoreDhash: !0,
          });
        },
      });
    }
    async function C(e, t, n) {
      var r = e.backupDirective,
        a = e.chat,
        i = e.count,
        l = e.identityKey,
        s = e.messageBytes,
        u = e.messageType,
        c = e.sessionInfo,
        d = e.to,
        m = await o("WAEncUserMsg").encryptDeviceJidMessage(
          d,
          {
            type: "message",
            chat: a,
            messageBytes: s,
            messageType: u,
            applicationPayloadVersion: n,
            backupDirective: r,
          },
          t,
          i,
          c,
          l,
        );
      return o("WAJids").switchOnUserChatJidType(a, {
        user: function (n) {
          return m != null
            ? o("WAResultOrError").makeResult({
                type: "direct_user",
                messageTo: e.to,
                message: m,
                recipient: o("WAGlobals").isPeerDevice(e.to) ? n : null,
              })
            : o("WAResultOrError").makeError("direct_user");
        },
        group: function (n) {
          return m != null
            ? o("WAResultOrError").makeResult({
                type: "direct_group",
                messageTo: n,
                participant: e.to,
                message: m,
              })
            : o("WAResultOrError").makeError("direct_group");
        },
      });
    }
    function b(e, t, n, r) {
      var a = e.backupDirective,
        i = e.chat,
        l = e.messageBytes,
        c = e.messageType,
        d = e.recipients;
      return o("WAJids").switchOnUserChatJidType(i, {
        user: async function (i) {
          var e = await o("WAEncUserMsg").encryptUserMsg(
              d,
              {
                type: "message",
                messageBytes: l,
                messageType: c,
                chat: i,
                applicationPayloadVersion: n,
                backupDirective: a,
              },
              r,
              t,
            ),
            s = e.participants;
          return s != null && s.length > 0
            ? o("WAResultOrError").makeResult({
                type: "user",
                messageTo: i,
                participants: s,
                phash: e.phash,
              })
            : o("WAResultOrError").makeError("user");
        },
        group: async function (n) {
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "sendWrittenMsg -- encryptChatMessage -- group message",
              ])),
          );
          var e = await o("WAEncGroupMsg").encryptGroupMsg(n, d, l, c, r, a, t);
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "sendWrittenMsg -- encryptChatMessage -- finish encrypt group message",
              ])),
          );
          var i = e.encNode,
            m = e.participants;
          return m == null && i == null
            ? o("WAResultOrError").makeError("group")
            : o("WAResultOrError").makeResult({
                type: "group",
                messageTo: n,
                participants: m,
                message: i,
                senderKeyDistributionInfo: e.senderKeyDistributionInfo,
                phash: e.phash,
              });
        },
      });
    }
    async function v(e, t, n, r) {
      if (n.type !== "success") return !1;
      var a = n.phash;
      return a.type === "mismatch"
        ? (r.addPoint("phash_mismatch"),
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "Got phash mismatch, local[",
                "] server[",
                "]",
              ])),
            a.local,
            a.server,
          ),
          o("WABridge")
            .getBridge()
            .fireAndForget("event", "odsBumpEntityKey", {
              entity: o("WAOdsEnums").Entity.PHASH_MISMATCH,
              key: t.type,
            }),
          await y(e.chat),
          r.addPoint("participant_recovery_finished"),
          !0)
        : !1;
    }
    async function S(e) {
      if (e.senderKeyDistributionInfo != null) {
        var t = e.senderKeyDistributionInfo,
          n = t.group,
          r = t.knowsSenderKey,
          a = t.senderKeyId;
        await o("WAMarkSenderKeyAsSentApi").markSenderKeyAsSent(n, a, r);
      }
    }
    function R(e, t) {
      var n = 0;
      (e.type === "chat" &&
        (n = e.recipients.reduce(function (e, t) {
          return e + t.devicesInfo.length;
        }, 0)),
        t.addPoint("start_encrypt", {
          int: { numDevices: n },
          bool: {
            isInvisibleMsg:
              e.messageType.type === "text" && e.messageType.isInvisible === !0,
          },
        }));
    }
    function L(e, t, n) {
      if (e.type !== "success") {
        e.type === "parsing_error" &&
          (o("WALogger").ERROR(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "sendMessage ack success is false, chatType:",
                "",
              ])),
            t,
          ),
          n.addPoint("ack_parse_fail"));
        var r = e.applicationError,
          a = e.errorCode;
        (r === p && n.addPoint("reachability_error_code"),
          o("WALogger").ERROR(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "sendMessage ack success is true, error: ",
                ", applicationError: ",
                ", chatType:",
                "",
              ])),
            a,
            r,
            t,
          ),
          a != null &&
            n.addPoint("ack_success_error_" + a, {
              int: { applicationError: r },
            }),
          r === _ && n.addPoint("sender_blocked", {}));
      }
    }
    ((l.sendMessageV2 = f), (l.sendMessage = g));
  },
  98,
);
