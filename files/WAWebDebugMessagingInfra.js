__d(
  "WAWebDebugMessagingInfra",
  [
    "Promise",
    "WABase64",
    "WAJids",
    "WALogger",
    "WAWebAddonEncryption",
    "WAWebApiDeviceList",
    "WAWebApiParticipantStore",
    "WAWebChatCollection",
    "WAWebChatGetters",
    "WAWebDBDeviceListFanout",
    "WAWebDebugUtils",
    "WAWebDeviceListPk",
    "WAWebEagerlyEstablishE2eeSessionChatAction",
    "WAWebFetchPrekeysJob",
    "WAWebModelStorageUtils",
    "WAWebMsgType",
    "WAWebProcessKeyBundle",
    "WAWebSchemaGroupMetadata",
    "WAWebSchemaParticipant",
    "WAWebSendClearChatAction",
    "WAWebSendKeyDistributionMsgAction",
    "WAWebSendTextMsgChatAction",
    "WAWebSignal",
    "WAWebSignalProtocolStore",
    "WAWebSignalSessionApi",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "sumBy",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
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
      R,
      L,
      E,
      k,
      I,
      T,
      D,
      x,
      $,
      P,
      N,
      M,
      w,
      A,
      F,
      O,
      B,
      W,
      q,
      U;
    function V(e, t, n, r) {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = Math.round(Date.now() / 1e3),
              i = [
                "\uD83D\uDE00",
                "\uD83D\uDE02",
                "\uD83D\uDE07",
                "\uD83D\uDE08",
                "\uD83D\uDE0A",
              ],
              l = i[Math.floor(Math.random() * i.length)],
              s = self.crypto.getRandomValues(new Uint8Array(12)),
              u = {
                type: o("WAWebMsgType").MsgKind.ReactionDecrypted,
                encode: { text: l, senderTimestampMs: a },
              },
              c = yield o("WAWebAddonEncryption").encryptAddOn(u, {
                messageSecret: r,
                iv: s,
                stanzaId: t,
                originalMessageSender:
                  o("WAWebWidFactory").createUserWidOrThrow(n),
                addOnSender: o("WAWebWidFactory").createUserWidOrThrow(e),
              }),
              d = c.encPayload;
            return {
              encPayload: o("WABase64").encodeB64(d),
              encIv: o("WABase64").encodeB64(s.buffer),
            };
          },
        )),
        H.apply(this, arguments)
      );
    }
    function G() {
      var t = o("WAWebDebugUtils").getSelectedChat();
      if (!t) {
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "sendKeyDistributionMsgToActiveChat: no active chat to send a key distribution message to",
            ])),
        );
        return;
      }
      o("WAWebSendKeyDistributionMsgAction")
        .sendKeyDistributionMsg(t.id)
        .then(function () {
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "sendKeyDistributionMsgToActiveChat: done",
              ])),
          );
        })
        .catch(function (e) {
          o("WALogger").WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "sendKeyDistributionMsgToActiveChat: error ",
                "",
              ])),
            e,
          );
        });
    }
    G.doc =
      "Send a sender key distribution message (invisible) to the active chat";
    function z() {
      return j.apply(this, arguments);
    }
    function j() {
      return (
        (j = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WAWebDebugUtils").getSelectedChat();
          if (!e) {
            o("WALogger").WARN(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "removeSignalSessionsForActiveChat: no active chat to remove sessions",
                ])),
            );
            return;
          }
          var t = [];
          if (o("WAWebChatGetters").getIsGroup(e)) {
            var r = yield o("WAWebApiParticipantStore").getGroupSenderKeyList(
              e.id,
            );
            ((t = [].concat(r.skList, r.skDistribList)),
              yield o("WAWebApiParticipantStore").markForgetSenderKey(e.id, t));
          } else
            t = yield o("WAWebDBDeviceListFanout").getFanOutList({
              wids: [e.id],
            });
          if (t.length === 0) {
            o("WALogger").WARN(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "removeSignalSessionsForActiveChat: no participant found",
                ])),
            );
            return;
          }
          var a = 0;
          (yield (U || (U = n("Promise"))).all([
            (yield o("WAWebSignal").Session.hasSignalSessions(t)).map(
              function (e, n) {
                if (e)
                  return (
                    a++,
                    o("WAWebSignal").Session.deleteRemoteSession(t[n])
                  );
              },
            ),
          ]),
            yield o("WAWebSignalProtocolStore")
              .getSignalProtocolStore()
              .flushBufferToDiskIfNotMemOnlyMode(),
            o(
              "WAWebEagerlyEstablishE2eeSessionChatAction",
            ).clearEagerE2EESessionCache(e.id.toString()),
            o("WALogger").LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "removeSignalSessionsForActiveChat: removed ",
                  " sessions",
                ])),
              a,
            ));
        })),
        j.apply(this, arguments)
      );
    }
    z.doc =
      "Remove sessions (to trigger prekeys fetch) for all the participants of the active chat";
    function K(e) {
      return Q.apply(this, arguments);
    }
    function Q() {
      return (
        (Q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebDebugUtils").getSelectedChat();
          if (!t || !o("WAWebChatGetters").getIsGroup(t)) {
            o("WALogger").WARN(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "removeSenderKeyForActiveGroupChat: no active chat to remove sender key",
                ])),
            );
            return;
          }
          var n = yield o("WAWebApiParticipantStore").getGroupSenderKeyList(
              t.id,
            ),
            r = [].concat(n.skList, n.skDistribList);
          if (r.length === 0) {
            o("WALogger").WARN(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "removeSenderKeyForActiveGroupChat: no participant found",
                ])),
            );
            return;
          }
          var a = r;
          if (e != null) {
            var i = o("WAWebWidFactory").createWid(e);
            a = a.filter(function (e) {
              return e.user === i.user && e.server === i.server;
            });
          }
          a.forEach(function (e) {
            return o("WAWebSignalSessionApi").deleteDeviceSenderKey(e);
          });
        })),
        Q.apply(this, arguments)
      );
    }
    K.doc =
      "Remove sender key for active group chat (to trigger read-receipt) when receiving a message from target participant";
    function X() {
      return Y.apply(this, arguments);
    }
    function Y() {
      return (
        (Y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WAWebDebugUtils").getSelectedChat();
          if (!e) {
            o("WALogger").WARN(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
                  "fetchPrekeysForActiveChat: no active chat to fetch prekeys",
                ])),
            );
            return;
          }
          var t = [];
          if (o("WAWebChatGetters").getIsGroup(e)) {
            var a = yield o("WAWebApiParticipantStore").getGroupSenderKeyList(
              e.id,
            );
            t = [].concat(a.skList, a.skDistribList);
          } else
            t = yield o("WAWebDBDeviceListFanout").getFanOutList({
              wids: [e.id],
            });
          if (t.length === 0) {
            o("WALogger").WARN(
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
                  "fetchPrekeysForActiveChat: no participant found",
                ])),
            );
            return;
          }
          o("WALogger").LOG(
            v ||
              (v = babelHelpers.taggedTemplateLiteralLoose([
                "fetchPrekeysForActiveChat: requesting ",
                " prekeys",
              ])),
            t.length,
          );
          var i = yield o("WAWebFetchPrekeysJob").fetchPrekeys(t),
            l = i.errors,
            s = i.prekeyBundles,
            u = yield (U || (U = n("Promise"))).all(
              s.map(function (e) {
                return o("WAWebProcessKeyBundle").processKeyBundles([e]);
              }),
            ),
            c = r("sumBy")(u, function (e) {
              var t;
              return (t = e.depletedPrekeyCount) != null ? t : 0;
            });
          o("WALogger").LOG(
            S ||
              (S = babelHelpers.taggedTemplateLiteralLoose([
                "fetchPrekeysForActiveChat: requested: ",
                ", received: ",
                ", errors: ",
                ", depleted prekeys: ",
                "",
              ])),
            t.length,
            s.length,
            l.length,
            c,
          );
        })),
        Y.apply(this, arguments)
      );
    }
    X.doc = "Fetch prekeys for all the participants of the active chat";
    function J() {
      return Z.apply(this, arguments);
    }
    function Z() {
      return (
        (Z = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WAWebDebugUtils").getSelectedChat();
          if (!e || !o("WAWebChatGetters").getIsUser(e)) {
            o("WALogger").WARN(
              R ||
                (R = babelHelpers.taggedTemplateLiteralLoose([
                  "printDevicesForActiveChat: no active chat or chat is not a 1:1 chat",
                ])),
            );
            return;
          }
          var t = o("WAWebDeviceListPk").createDeviceListPK(e.id),
            n = yield o("WAWebApiDeviceList").getDeviceRecord(e.id);
          if (n == null) {
            o("WALogger").WARN(
              L ||
                (L = babelHelpers.taggedTemplateLiteralLoose([
                  "printDevicesForActiveChat: no record for ",
                  "",
                ])),
              t,
            );
            return;
          } else if (n.deleted) {
            o("WALogger").WARN(
              E ||
                (E = babelHelpers.taggedTemplateLiteralLoose([
                  'printDevicesForActiveChat: user "',
                  '" has been deleted',
                ])),
              t,
            );
            return;
          }
          o("WALogger").LOG(
            k ||
              (k = babelHelpers.taggedTemplateLiteralLoose([
                "printDevicesForActiveChat: ",
                " devices: ",
                "",
              ])),
            t,
            n.devices
              .map(function (e) {
                var t = e.id;
                return n.id + ":" + t;
              })
              .join(","),
          );
        })),
        Z.apply(this, arguments)
      );
    }
    J.doc = "Return list of the devices of the active chat";
    function ee(e, t) {
      return te.apply(this, arguments);
    }
    function te() {
      return (
        (te = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r,
            a,
            i = o("WAWebDeviceListPk").createDeviceListPK(e),
            l = yield o("WAWebApiDeviceList").getDeviceRecord(e);
          if (l == null) {
            o("WALogger").WARN(
              I ||
                (I = babelHelpers.taggedTemplateLiteralLoose([
                  "removeDeviceForUser: no record for ",
                  "",
                ])),
              i,
            );
            return;
          } else if (l.deleted) {
            o("WALogger").WARN(
              T ||
                (T = babelHelpers.taggedTemplateLiteralLoose([
                  'removeDeviceForUser: user "',
                  '" has been deleted',
                ])),
              i,
            );
            return;
          }
          var s = t;
          if (s == null) {
            var u,
              c =
                (u = l.devices.find(function (e) {
                  var t = e.id;
                  return t !== o("WAJids").DEFAULT_DEVICE_ID;
                })) == null
                  ? void 0
                  : u.id;
            if (c == null) {
              o("WALogger").WARN(
                D ||
                  (D = babelHelpers.taggedTemplateLiteralLoose([
                    'removeDeviceForUser: user "',
                    '" has no companion devices',
                  ])),
                i,
              );
              return;
            }
            s = c;
          }
          var d = babelHelpers.extends({}, l, {
            devices:
              (n = l.devices) == null
                ? void 0
                : n.filter(function (e) {
                    var t = e.id;
                    return t !== s;
                  }),
          });
          if (
            ((r = l.devices) == null ? void 0 : r.length) ===
            ((a = d.devices) == null ? void 0 : a.length)
          ) {
            o("WALogger").WARN(
              x ||
                (x = babelHelpers.taggedTemplateLiteralLoose([
                  'removeDeviceForUser: device "',
                  '" not found in ',
                  " record",
                ])),
              s,
              i,
            );
            return;
          }
          return (
            yield o("WAWebApiDeviceList").createOrReplaceDeviceRecord(d),
            o("WALogger").LOG(
              $ ||
                ($ = babelHelpers.taggedTemplateLiteralLoose([
                  "removeDeviceForUser: device ",
                  " has been removed from ",
                  "",
                ])),
              s,
              i,
            ),
            o("WAWebWidFactory").createDeviceWidFromDeviceListPk(d.id, s)
          );
        })),
        te.apply(this, arguments)
      );
    }
    function ne(e) {
      return re.apply(this, arguments);
    }
    function re() {
      return (
        (re = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebDebugUtils").getSelectedChat();
          if (!t || !o("WAWebChatGetters").getIsUser(t)) {
            o("WALogger").WARN(
              P ||
                (P = babelHelpers.taggedTemplateLiteralLoose([
                  "removeDeviceForActiveChat: no active chat or chat is not a 1:1 chat",
                ])),
            );
            return;
          }
          yield ee(t.id, e);
        })),
        re.apply(this, arguments)
      );
    }
    ne.doc = "Remove one of the devices for the active chat.";
    function oe() {
      return ae.apply(this, arguments);
    }
    function ae() {
      return (
        (ae = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WAWebDebugUtils").getSelectedChat();
          if (!(e != null && e.id.isGroup())) {
            o("WALogger").WARN(
              N ||
                (N = babelHelpers.taggedTemplateLiteralLoose([
                  "removeDeviceForActiveGroupChat: no active group chat",
                ])),
            );
            return;
          }
          var t = e == null ? void 0 : e.id.toString(),
            n = null;
          yield o("WAWebModelStorageUtils")
            .getStorage()
            .lock(["participant"], function (e) {
              var r = e[0];
              return r.get(t).then(function (e) {
                if (!e) {
                  o("WALogger").WARN(
                    M ||
                      (M = babelHelpers.taggedTemplateLiteralLoose([
                        "removeDeviceForActiveGroupChat: group participant info missing for group ",
                        "",
                      ])),
                    t,
                  );
                  return;
                }
                var a = new Map(e.senderKey);
                if (
                  (a.forEach(function (e, t) {
                    var r = o("WAWebWidFactory").createDeviceWidOrThrow(t);
                    n == null &&
                      r.device != null &&
                      ((n = r.toString()), a.delete(n));
                  }),
                  n == null)
                ) {
                  o("WALogger").WARN(
                    w ||
                      (w = babelHelpers.taggedTemplateLiteralLoose([
                        "removeDeviceForActiveGroupChat: companion not found in ",
                        " record",
                      ])),
                    a,
                  );
                  return;
                }
                return r.createOrReplace({
                  groupId: e.groupId,
                  senderKey: a,
                  participants: e.participants,
                  pastParticipants: e.pastParticipants,
                  admins: e.admins,
                  rotateKey: e.rotateKey,
                  deviceSyncComplete: e.deviceSyncComplete,
                });
              });
            });
        })),
        ae.apply(this, arguments)
      );
    }
    oe.doc = "Remove one of the devices for the active group chat.";
    function ie() {
      var e = o("WAWebChatCollection").ChatCollection.getActive();
      if (!(e != null && e.id.isGroup()))
        return (
          o("WALogger").WARN(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "the current chat is not a group",
              ])),
          ),
          (U || (U = n("Promise"))).resolve()
        );
      var t = e == null ? void 0 : e.id.toString();
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["participant"], function (e) {
          var n = e[0];
          return n.get(t).then(function (e) {
            if (!e) {
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "groupChatRotateSelfSenderKey: group participant info missing for group ",
                    "",
                  ])),
                t,
              );
              return;
            }
            return n.createOrReplace({
              groupId: e.groupId,
              senderKey: e.senderKey,
              participants: e.participants,
              pastParticipants: e.pastParticipants,
              admins: e.admins,
              rotateKey: !0,
              deviceSyncComplete: e.deviceSyncComplete,
            });
          });
        });
    }
    ie.doc = "Rotate the self sender key for the active group chat";
    function le() {
      return se.apply(this, arguments);
    }
    function se() {
      return (
        (se = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WAWebChatCollection").ChatCollection.getActive();
          if (!(e != null && e.id.isGroup())) {
            o("WALogger").WARN(
              A ||
                (A = babelHelpers.taggedTemplateLiteralLoose([
                  "groupChatGetParticipantRecord: the current chat is not a group",
                ])),
            );
            return;
          }
          var t = e == null ? void 0 : e.id.toString(),
            n = yield o("WAWebSchemaParticipant").getParticipantTable().get(t);
          if (n == null) {
            o("WALogger").LOG(
              F ||
                (F = babelHelpers.taggedTemplateLiteralLoose([
                  "groupChatGetParticipantRecord: group participant info missing for group ",
                  "",
                ])),
              t,
            );
            return;
          }
          return n;
        })),
        se.apply(this, arguments)
      );
    }
    le.doc = "Get Participant Table for the active group chat";
    function ue() {
      return ce.apply(this, arguments);
    }
    function ce() {
      return (
        (ce = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WAWebChatCollection").ChatCollection.getActive();
          if (!(e != null && e.id.isGroup())) {
            o("WALogger").WARN(
              O ||
                (O = babelHelpers.taggedTemplateLiteralLoose([
                  "groupChatGetGroupMetadataRecord: the current chat is not a group",
                ])),
            );
            return;
          }
          var t = e == null ? void 0 : e.id.toString(),
            n = yield o("WAWebSchemaGroupMetadata")
              .getGroupMetadataTable()
              .get(t);
          if (n == null) {
            o("WALogger").LOG(
              B ||
                (B = babelHelpers.taggedTemplateLiteralLoose([
                  "groupChatGetGroupMetadataRecord: group metadata info missing for group ",
                  "",
                ])),
              t,
            );
            return;
          }
          return n;
        })),
        ce.apply(this, arguments)
      );
    }
    ((ue.doc = "Get GroupMetadata Table for the active group chat"),
      (oe.doc = "Remove one of the devices for the active group chat."));
    function de(e, t) {
      return me.apply(this, arguments);
    }
    function me() {
      return (
        (me = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          t === void 0 && (t = 1);
          var r = o("WAWebDebugUtils").getSelectedChat();
          if (!r) {
            o("WALogger").WARN(
              W ||
                (W = babelHelpers.taggedTemplateLiteralLoose([
                  "sendTextMessageToActiveChat: select a chat to send the message",
                ])),
            );
            return;
          }
          for (var a = [], i = 0; i < t; i++)
            a.push(
              o("WAWebSendTextMsgChatAction").sendTextMsgToChat(
                r,
                e + " | " + i,
              ),
            );
          (yield (U || (U = n("Promise"))).all(a),
            o("WALogger").LOG(
              q ||
                (q = babelHelpers.taggedTemplateLiteralLoose([
                  "sendTextMessageToActiveChat: done sending ",
                  ' "',
                  '" message(s) to chat: ',
                  "",
                ])),
              t,
              e,
              r.id,
            ));
        })),
        me.apply(this, arguments)
      );
    }
    de.doc = "Send [message], [n] times to the active chat.";
    function pe(e) {
      var t = o("WAWebChatCollection").ChatCollection.get(
        o("WAWebWidFactory").createWid(e),
      );
      return t
        ? o("WAWebSendClearChatAction")
            .sendClear(t, !1)
            .finally(function () {
              o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "chat ",
                    " cleared",
                  ])),
                e,
              );
            })
        : (o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "chat ",
                " not found",
              ])),
            e,
          ),
          (U || (U = n("Promise"))).resolve());
    }
    pe.doc =
      "Clear chat passing chatId string. The same as clear chat from dropdown menu.";
    var _e = {
      clearChat: pe,
      encryptMockReactionMsg: V,
      groupChatGetParticipantRecord: le,
      groupChatGetGroupMetadataRecord: ue,
      groupChatRotateSelfSenderKey: ie,
      sendKeyDistributionMsgToActiveChat: G,
      removeSignalSessionsForActiveChat: z,
      removeSenderKeyForActiveGroupChat: K,
      fetchPrekeysForActiveChat: X,
      printDevicesForActiveChat: J,
      removeDeviceForActiveChat: ne,
      removeDeviceForActiveGroupChat: oe,
      sendTextMessageToActiveChat: de,
    };
    l.default = _e;
  },
  98,
);
