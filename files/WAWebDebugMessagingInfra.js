__d(
  "WAWebDebugMessagingInfra",
  [
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
    "WAWebSendTextMsgChatAction",
    "WAWebSessionScope",
    "WAWebSignal",
    "WAWebSignalCommonUtils",
    "WAWebSignalProtocolStore",
    "WAWebSignalSessionApi",
    "WAWebSignalStorage",
    "WAWebUserPrefsStatus",
    "WAWebWidFactory",
    "err",
    "sumBy",
    "vulture",
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
      U,
      V,
      H,
      G,
      z,
      j,
      K,
      Q,
      X,
      Y,
      J,
      Z = null,
      ee = null;
    async function te(e) {
      r("vulture")("W8jBs-Wu98CU9KwQdMV4SJeMY-s=");
      var t;
      if (e instanceof ArrayBuffer) t = e;
      else if (e instanceof Uint8Array) t = e;
      else if (typeof e == "string") t = new TextEncoder().encode(e);
      else if (e instanceof Blob) t = await e.arrayBuffer();
      else {
        var n;
        t = new TextEncoder().encode((n = JSON.stringify(e)) != null ? n : "");
      }
      for (
        var o = await self.crypto.subtle.digest("SHA-256", t),
          a = new Uint8Array(o),
          i = "",
          l = 0;
        l < a.length;
        l++
      )
        i += a[l].toString(16).padStart(2, "0");
      return i;
    }
    async function ne() {
      r("vulture")("MELlip27xexO1A4Bp3IpjlAh9Uw=");
      var t = o("WAWebSignalProtocolStore")
          .getPersistSignalProtocolStore()
          .cache_TESTONLY(),
        n = await o("WAWebSignalStorage").getSessionTable().all(),
        a = new Map();
      (await Promise.all(
        n.map(async function (e) {
          var t = e.address,
            n = e.session;
          if (n != null) {
            var r = await te(n);
            a.set(t, r);
          }
        }),
      ),
        await Promise.all(
          Array.from(t.SessionStore.entries()).map(async function (e) {
            var t = e[0],
              n = e[1];
            if (n != null && n.deleted) a.delete(t);
            else if (n != null) {
              var r = await te(n.session);
              a.set(t, r);
            }
          }),
        ),
        (J = a));
      var i = await o("WAWebSignalStorage").getSenderKeyTable().all(),
        l = new Map();
      (await Promise.all(
        i.map(async function (e) {
          var t = e.senderKey,
            n = e.senderKeyName;
          if (t != null) {
            var r = await te(t);
            l.set(n, r);
          }
        }),
      ),
        await Promise.all(
          Array.from(t.SenderKeyStore.entries()).map(async function (e) {
            var t = e[0],
              n = e[1];
            if (n != null) {
              var r = await te(n);
              l.set(t, r);
            } else l.delete(t);
          }),
        ),
        (Z = l));
      var s = await o("WAWebUserPrefsStatus").getStatusSenderKeyMap();
      ((ee = new Set(s.senderKey)),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "snapshotSignalSessions: captured ",
              " session entries, ",
              " sender key entries (IDB + cache overlay), ",
              " status SK distrib entries",
            ])),
          a.size,
          l.size,
          ee.size,
        ));
    }
    ne.doc =
      "Take a snapshot of all in-memory signal sessions and sender keys (address + hash). Call diffSignalSessions after sending to see changes.";
    async function re() {
      if ((r("vulture")("MaJRvqc30aJFCEaEbMKLUj9EsYA="), J == null))
        return (
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "diffSignalSessions: no snapshot taken yet, call snapshotSignalSessions first",
              ])),
          ),
          null
        );
      var e = J,
        t = o("WAWebSignalProtocolStore")
          .getPersistSignalProtocolStore()
          .cache_TESTONLY(),
        n = await o("WAWebSignalStorage").getSessionTable().all(),
        a = new Map();
      (await Promise.all(
        n.map(async function (e) {
          var t = e.address,
            n = e.session;
          if (n != null) {
            var r = await te(n);
            a.set(t, r);
          }
        }),
      ),
        await Promise.all(
          Array.from(t.SessionStore.entries()).map(async function (e) {
            var t = e[0],
              n = e[1];
            if (n != null && n.deleted) a.delete(t);
            else if (n != null) {
              var r = await te(n.session);
              a.set(t, r);
            }
          }),
        ));
      var i = [],
        l = [],
        b = [],
        v = 0;
      for (var S of a) {
        var R = S[0],
          L = S[1],
          E = e.get(R);
        E == null ? i.push(R) : E !== L ? b.push(R) : v++;
      }
      for (var k of e.keys()) a.has(k) || l.push(k);
      (o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "diffSignalSessions: ",
            " new, ",
            " removed, ",
            " modified, ",
            " unchanged",
          ])),
        i.length,
        l.length,
        b.length,
        v,
      ),
        i.length > 0 &&
          o("WALogger").LOG(
            c || (c = babelHelpers.taggedTemplateLiteralLoose(["  NEW: ", ""])),
            i.join(", "),
          ),
        l.length > 0 &&
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "  REMOVED: ",
                "",
              ])),
            l.join(", "),
          ),
        b.length > 0 &&
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "  MODIFIED: ",
                "",
              ])),
            b.join(", "),
          ));
      var I = [].concat(
          i.map(function (e) {
            return { change: "added", address: e };
          }),
          l.map(function (e) {
            return { change: "removed", address: e };
          }),
          b.map(function (e) {
            return { change: "modified", address: e };
          }),
        ),
        T = Z != null ? Z : new Map(),
        D = await o("WAWebSignalStorage").getSenderKeyTable().all(),
        x = new Map();
      (await Promise.all(
        D.map(async function (e) {
          var t = e.senderKey,
            n = e.senderKeyName;
          if (t != null) {
            var r = await te(t);
            x.set(n, r);
          }
        }),
      ),
        await Promise.all(
          Array.from(t.SenderKeyStore.entries()).map(async function (e) {
            var t = e[0],
              n = e[1];
            if (n != null) {
              var r = await te(n);
              x.set(t, r);
            } else x.delete(t);
          }),
        ));
      var $ = [],
        P = [],
        N = [],
        M = 0;
      for (var w of x) {
        var A = w[0],
          F = w[1];
        {
          var O = T.get(A);
          O == null ? $.push(A) : O !== F ? N.push(A) : M++;
        }
      }
      for (var B of T.keys()) x.has(B) || P.push(B);
      (o("WALogger").LOG(
        p ||
          (p = babelHelpers.taggedTemplateLiteralLoose([
            "diffSignalSessions (sender keys): ",
            " new, ",
            " removed, ",
            " modified, ",
            " unchanged",
          ])),
        $.length,
        P.length,
        N.length,
        M,
      ),
        $.length > 0 &&
          o("WALogger").LOG(
            _ || (_ = babelHelpers.taggedTemplateLiteralLoose(["  NEW: ", ""])),
            $.join(", "),
          ),
        P.length > 0 &&
          o("WALogger").LOG(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "  REMOVED: ",
                "",
              ])),
            P.join(", "),
          ),
        N.length > 0 &&
          o("WALogger").LOG(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "  MODIFIED: ",
                "",
              ])),
            N.join(", "),
          ));
      var W = [].concat(
          $.map(function (e) {
            return { change: "added", address: e };
          }),
          P.map(function (e) {
            return { change: "removed", address: e };
          }),
          N.map(function (e) {
            return { change: "modified", address: e };
          }),
        ),
        q = await o("WAWebUserPrefsStatus").getStatusSenderKeyMap(),
        U = new Set(q.senderKey),
        V = ee,
        H = [],
        G = [];
      if (V != null) {
        for (var z of U) V.has(z) || H.push(z);
        for (var j of V) U.has(j) || G.push(j);
      }
      (o("WALogger").LOG(
        h ||
          (h = babelHelpers.taggedTemplateLiteralLoose([
            "diffSignalSessions (status SK distrib): ",
            " new, ",
            " removed",
          ])),
        H.length,
        G.length,
      ),
        H.length > 0 &&
          o("WALogger").LOG(
            y || (y = babelHelpers.taggedTemplateLiteralLoose(["  NEW: ", ""])),
            H.join(", "),
          ),
        G.length > 0 &&
          o("WALogger").LOG(
            C ||
              (C = babelHelpers.taggedTemplateLiteralLoose([
                "  REMOVED: ",
                "",
              ])),
            G.join(", "),
          ));
      var K = [].concat(
        H.map(function (e) {
          return { change: "added", address: e };
        }),
        G.map(function (e) {
          return { change: "removed", address: e };
        }),
      );
      return {
        sessions: I,
        senderKeys: W,
        statusSkDistrib: K,
        unchanged: v,
        skUnchanged: M,
      };
    }
    re.doc =
      "Compare current signal sessions and sender keys against the last snapshot and log new/removed/modified entries";
    async function oe(e) {
      var t = e.from,
        n = e.parentMessageSecret,
        a = e.parentMessageSender,
        i = e.parentMessageStanzaId;
      r("vulture")("PW_j426kfnfijJkNtwNpfkxWBbw=");
      var l = Math.round(Date.now() / 1e3),
        s = ["\u{1F600}", "\u{1F602}", "\u{1F607}", "\u{1F608}", "\u{1F60A}"],
        u = s[Math.floor(Math.random() * s.length)],
        c = self.crypto.getRandomValues(new Uint8Array(12)),
        d = {
          type: o("WAWebMsgType").MsgKind.ReactionDecrypted,
          encode: { text: u, senderTimestampMs: l },
        },
        m = await o("WAWebAddonEncryption").encryptAddOn(d, {
          messageSecret: n,
          iv: c,
          stanzaId: i,
          originalMessageSender: o("WAWebWidFactory").createUserWidOrThrow(a),
          addOnSender: o("WAWebWidFactory").createUserWidOrThrow(t),
        }),
        p = m.encPayload;
      return {
        encPayload: o("WABase64").encodeB64(p),
        encIv: o("WABase64").encodeB64(c.buffer),
      };
    }
    async function ae() {
      r("vulture")("vQkoKJDfC_xTFBWBVwCL52PeBIA=");
      var e = o("WAWebDebugUtils").getSelectedChat();
      if (!e) {
        o("WALogger").WARN(
          b ||
            (b = babelHelpers.taggedTemplateLiteralLoose([
              "removeSignalSessionsForActiveChat: no active chat to remove sessions",
            ])),
        );
        return;
      }
      var t = [];
      if (o("WAWebChatGetters").getIsGroup(e)) {
        var n = await o("WAWebApiParticipantStore").getGroupSenderKeyList(e.id);
        ((t = [].concat(n.skList, n.skDistribList)),
          await o("WAWebApiParticipantStore").markForgetSenderKey(e.id, t));
      } else
        t = await o("WAWebDBDeviceListFanout").getFanOutList({ wids: [e.id] });
      if (t.length === 0) {
        o("WALogger").WARN(
          v ||
            (v = babelHelpers.taggedTemplateLiteralLoose([
              "removeSignalSessionsForActiveChat: no participant found",
            ])),
        );
        return;
      }
      var a = 0;
      (await Promise.all([
        (await o("WAWebSignal").Session.hasSignalSessions(t)).map(
          function (e, n) {
            if (e)
              return (a++, o("WAWebSignal").Session.deleteRemoteSession(t[n]));
          },
        ),
      ]),
        await o("WAWebSignalProtocolStore")
          .getSignalProtocolStore()
          .flushBufferToDiskIfNotMemOnlyMode(),
        o(
          "WAWebEagerlyEstablishE2eeSessionChatAction",
        ).clearEagerE2EESessionCache(e.id.toString()),
        o("WALogger").LOG(
          S ||
            (S = babelHelpers.taggedTemplateLiteralLoose([
              "removeSignalSessionsForActiveChat: removed ",
              " sessions",
            ])),
          a,
        ));
    }
    ae.doc =
      "Remove sessions (to trigger prekeys fetch) for all the participants of the active chat";
    async function ie(e) {
      r("vulture")("qEJSyPq0IqgLZ-Mosj6mAj-ZoTU=");
      var t = o("WAWebDebugUtils").getSelectedChat();
      if (!t || !o("WAWebChatGetters").getIsGroup(t)) {
        o("WALogger").WARN(
          R ||
            (R = babelHelpers.taggedTemplateLiteralLoose([
              "removeSenderKeyForActiveGroupChat: no active chat to remove sender key",
            ])),
        );
        return;
      }
      var n = await o("WAWebApiParticipantStore").getGroupSenderKeyList(t.id),
        a = [].concat(n.skList, n.skDistribList);
      if (a.length === 0) {
        o("WALogger").WARN(
          L ||
            (L = babelHelpers.taggedTemplateLiteralLoose([
              "removeSenderKeyForActiveGroupChat: no participant found",
            ])),
        );
        return;
      }
      var i = a;
      if (e != null) {
        var l = o("WAWebWidFactory").createWid(e);
        i = i.filter(function (e) {
          return e.user === l.user && e.server === l.server;
        });
      }
      i.forEach(function (e) {
        return o("WAWebSignalSessionApi").deleteDeviceSenderKey(e);
      });
    }
    ie.doc =
      "Remove sender key for active group chat (to trigger read-receipt) when receiving a message from target participant";
    async function le() {
      r("vulture")("u3TUOUdY41MCHYtGQrvo3w5rC5w=");
      var e = o("WAWebDebugUtils").getSelectedChat();
      if (!e) {
        o("WALogger").WARN(
          E ||
            (E = babelHelpers.taggedTemplateLiteralLoose([
              "fetchPrekeysForActiveChat: no active chat to fetch prekeys",
            ])),
        );
        return;
      }
      var t = [];
      if (o("WAWebChatGetters").getIsGroup(e)) {
        var n = await o("WAWebApiParticipantStore").getGroupSenderKeyList(e.id);
        t = [].concat(n.skList, n.skDistribList);
      } else
        t = await o("WAWebDBDeviceListFanout").getFanOutList({ wids: [e.id] });
      if (t.length === 0) {
        o("WALogger").WARN(
          k ||
            (k = babelHelpers.taggedTemplateLiteralLoose([
              "fetchPrekeysForActiveChat: no participant found",
            ])),
        );
        return;
      }
      o("WALogger").LOG(
        I ||
          (I = babelHelpers.taggedTemplateLiteralLoose([
            "fetchPrekeysForActiveChat: requesting ",
            " prekeys",
          ])),
        t.length,
      );
      var a = await o("WAWebFetchPrekeysJob").fetchPrekeys(t),
        i = a.errors,
        l = a.prekeyBundles,
        s = await Promise.all(
          l.map(function (e) {
            return o("WAWebProcessKeyBundle").processKeyBundles([e]);
          }),
        ),
        u = r("sumBy")(s, function (e) {
          var t;
          return (t = e.depletedPrekeyCount) != null ? t : 0;
        });
      o("WALogger").LOG(
        T ||
          (T = babelHelpers.taggedTemplateLiteralLoose([
            "fetchPrekeysForActiveChat: requested: ",
            ", received: ",
            ", errors: ",
            ", depleted prekeys: ",
            "",
          ])),
        t.length,
        l.length,
        i.length,
        u,
      );
    }
    le.doc = "Fetch prekeys for all the participants of the active chat";
    async function se() {
      r("vulture")("vWzLp7Vkp2VcQ0fzMR9BrONxIeE=");
      var e = o("WAWebDebugUtils").getSelectedChat();
      if (!e || !o("WAWebChatGetters").getIsUser(e)) {
        o("WALogger").WARN(
          D ||
            (D = babelHelpers.taggedTemplateLiteralLoose([
              "printDevicesForActiveChat: no active chat or chat is not a 1:1 chat",
            ])),
        );
        return;
      }
      var t = o("WAWebDeviceListPk").createDeviceListPK(e.id),
        n = await o("WAWebApiDeviceList").getDeviceRecord(e.id);
      if (n == null) {
        o("WALogger").WARN(
          x ||
            (x = babelHelpers.taggedTemplateLiteralLoose([
              "printDevicesForActiveChat: no record for ",
              "",
            ])),
          t,
        );
        return;
      } else if (n.deleted) {
        o("WALogger").WARN(
          $ ||
            ($ = babelHelpers.taggedTemplateLiteralLoose([
              'printDevicesForActiveChat: user "',
              '" has been deleted',
            ])),
          t,
        );
        return;
      }
      o("WALogger").LOG(
        P ||
          (P = babelHelpers.taggedTemplateLiteralLoose([
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
    }
    se.doc = "Return list of the devices of the active chat";
    async function ue(e, t) {
      var n, a, i;
      r("vulture")("jPpyIJZpvt8K6OP9y596A6ANVpQ=");
      var l = o("WAWebDeviceListPk").createDeviceListPK(e),
        s = await o("WAWebApiDeviceList").getDeviceRecord(e);
      if (s == null) {
        o("WALogger").WARN(
          N ||
            (N = babelHelpers.taggedTemplateLiteralLoose([
              "removeDeviceForUser: no record for ",
              "",
            ])),
          l,
        );
        return;
      } else if (s.deleted) {
        o("WALogger").WARN(
          M ||
            (M = babelHelpers.taggedTemplateLiteralLoose([
              'removeDeviceForUser: user "',
              '" has been deleted',
            ])),
          l,
        );
        return;
      }
      var u = t;
      if (u == null) {
        var c,
          d =
            (c = s.devices.find(function (e) {
              var t = e.id;
              return t !== o("WAJids").DEFAULT_DEVICE_ID;
            })) == null
              ? void 0
              : c.id;
        if (d == null) {
          o("WALogger").WARN(
            w ||
              (w = babelHelpers.taggedTemplateLiteralLoose([
                'removeDeviceForUser: user "',
                '" has no companion devices',
              ])),
            l,
          );
          return;
        }
        u = d;
      }
      var m = babelHelpers.extends({}, s, {
        devices:
          (n = s.devices) == null
            ? void 0
            : n.filter(function (e) {
                var t = e.id;
                return t !== u;
              }),
      });
      if (
        ((a = s.devices) == null ? void 0 : a.length) ===
        ((i = m.devices) == null ? void 0 : i.length)
      ) {
        o("WALogger").WARN(
          A ||
            (A = babelHelpers.taggedTemplateLiteralLoose([
              'removeDeviceForUser: device "',
              '" not found in ',
              " record",
            ])),
          u,
          l,
        );
        return;
      }
      return (
        await o("WAWebApiDeviceList").createOrReplaceDeviceRecord(m),
        o("WALogger").LOG(
          F ||
            (F = babelHelpers.taggedTemplateLiteralLoose([
              "removeDeviceForUser: device ",
              " has been removed from ",
              "",
            ])),
          u,
          l,
        ),
        o("WAWebWidFactory").createDeviceWidFromDeviceListPk(m.id, u)
      );
    }
    async function ce(e) {
      r("vulture")("sj3IfLC87OavhFo4np76eNqANCY=");
      var t = o("WAWebDebugUtils").getSelectedChat();
      if (!t || !o("WAWebChatGetters").getIsUser(t)) {
        o("WALogger").WARN(
          O ||
            (O = babelHelpers.taggedTemplateLiteralLoose([
              "removeDeviceForActiveChat: no active chat or chat is not a 1:1 chat",
            ])),
        );
        return;
      }
      await ue(t.id, e);
    }
    ce.doc = "Remove one of the devices for the active chat.";
    async function de() {
      r("vulture")("BmJIG-MIereUAeRZWZgksLCcwNM=");
      var e = o("WAWebDebugUtils").getSelectedChat();
      if (!(e != null && e.id.isGroup())) {
        o("WALogger").WARN(
          B ||
            (B = babelHelpers.taggedTemplateLiteralLoose([
              "removeDeviceForActiveGroupChat: no active group chat",
            ])),
        );
        return;
      }
      var t = e == null ? void 0 : e.id.toString(),
        n = null;
      await o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["participant"], function (e) {
          var r = e[0];
          return r.get(t).then(function (e) {
            if (!e) {
              o("WALogger").WARN(
                W ||
                  (W = babelHelpers.taggedTemplateLiteralLoose([
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
                q ||
                  (q = babelHelpers.taggedTemplateLiteralLoose([
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
    }
    de.doc = "Remove one of the devices for the active group chat.";
    function me() {
      r("vulture")("5GekqaM7JTywx3yvekEUnrGwFaU=");
      var e = o("WAWebChatCollection").ChatCollection.getActive();
      if (!(e != null && e.id.isGroup()))
        return (
          o("WALogger").WARN(
            U ||
              (U = babelHelpers.taggedTemplateLiteralLoose([
                "the current chat is not a group",
              ])),
          ),
          Promise.resolve()
        );
      var t = e == null ? void 0 : e.id.toString();
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["participant"], function (e) {
          var n = e[0];
          return n.get(t).then(function (e) {
            if (!e) {
              o("WALogger").LOG(
                V ||
                  (V = babelHelpers.taggedTemplateLiteralLoose([
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
    me.doc = "Rotate the self sender key for the active group chat";
    async function pe() {
      r("vulture")("zAVWv2DSfJ1lA4WMZ6GHJ923nOo=");
      var e = o("WAWebChatCollection").ChatCollection.getActive();
      if (!(e != null && e.id.isGroup())) {
        o("WALogger").WARN(
          H ||
            (H = babelHelpers.taggedTemplateLiteralLoose([
              "groupChatGetParticipantRecord: the current chat is not a group",
            ])),
        );
        return;
      }
      var t = e == null ? void 0 : e.id.toString(),
        n = await o("WAWebSchemaParticipant").getParticipantTable().get(t);
      if (n == null) {
        o("WALogger").LOG(
          G ||
            (G = babelHelpers.taggedTemplateLiteralLoose([
              "groupChatGetParticipantRecord: group participant info missing for group ",
              "",
            ])),
          t,
        );
        return;
      }
      return n;
    }
    pe.doc = "Get Participant Table for the active group chat";
    async function _e() {
      r("vulture")("aZEiQEqkwwo6WKNOqNX-0dwH7Gc=");
      var e = o("WAWebChatCollection").ChatCollection.getActive();
      if (!(e != null && e.id.isGroup())) {
        o("WALogger").WARN(
          z ||
            (z = babelHelpers.taggedTemplateLiteralLoose([
              "groupChatGetGroupMetadataRecord: the current chat is not a group",
            ])),
        );
        return;
      }
      var t = e == null ? void 0 : e.id.toString(),
        n = await o("WAWebSchemaGroupMetadata").getGroupMetadataTable().get(t);
      if (n == null) {
        o("WALogger").LOG(
          j ||
            (j = babelHelpers.taggedTemplateLiteralLoose([
              "groupChatGetGroupMetadataRecord: group metadata info missing for group ",
              "",
            ])),
          t,
        );
        return;
      }
      return n;
    }
    ((_e.doc = "Get GroupMetadata Table for the active group chat"),
      (de.doc = "Remove one of the devices for the active group chat."));
    async function fe(e, t) {
      (t === void 0 && (t = 1), r("vulture")("53Pyhq2FYLn4nNve6ujP_yuED80="));
      var n = o("WAWebDebugUtils").getSelectedChat();
      if (!n) {
        o("WALogger").WARN(
          K ||
            (K = babelHelpers.taggedTemplateLiteralLoose([
              "sendTextMessageToActiveChat: select a chat to send the message",
            ])),
        );
        return;
      }
      for (var a = [], i = 0; i < t; i++)
        a.push(
          o("WAWebSendTextMsgChatAction").sendTextMsgToChat(n, e + " | " + i),
        );
      (await Promise.all(a),
        o("WALogger").LOG(
          Q ||
            (Q = babelHelpers.taggedTemplateLiteralLoose([
              "sendTextMessageToActiveChat: done sending ",
              ' "',
              '" message(s) to chat: ',
              "",
            ])),
          t,
          e,
          n.id,
        ));
    }
    fe.doc = "Send [message], [n] times to the active chat.";
    async function ge(e) {
      r("vulture")("aX8hhtKGZb-eABOsovapWiUmNN8=");
      var t = ye(e),
        n = be(Ce(e, "scope")),
        a = ve(Ce(e, "action")),
        i = o("WAWebSignalCommonUtils").createSignalAddress(t.deviceWid, n);
      if (
        n !== o("WAWebSessionScope").SessionScope.DEFAULT &&
        i ===
          o("WAWebSignalCommonUtils").createSignalAddress(
            t.deviceWid,
            o("WAWebSessionScope").SessionScope.DEFAULT,
          )
      )
        throw r("err")(n + " has no separate Signal session for this device");
      var l = o("WAWebSignalProtocolStore").getSignalProtocolStore(),
        s = (await l.loadSession(i)) != null,
        u = s;
      return (
        a === "delete" &&
          s &&
          (await l.removeSession(i),
          await l.flushBufferToDiskIfNotMemOnlyMode(),
          (u = (await l.loadSession(i)) != null)),
        {
          action: a,
          target: {
            peer: t.peer,
            device: t.device,
            deviceWid: String(t.deviceWid),
            scope: n,
          },
          address: i,
          before: { exists: s },
          after: { exists: u },
          changed: s !== u,
        }
      );
    }
    ge.doc =
      'Preview or delete one exact Signal session only. Example: Debug.exactSignalSession({peer: "12345@lid", device: 2, scope: "status", action: "preview"}). Delete preserves identity, sibling scopes/devices, sender keys, and chats.';
    async function he(e) {
      r("vulture")("qGO_CYdoXoqQuYoQbl0wfEf65fU=");
      var t = ye(e),
        n = Se(Ce(e, "action")),
        a = await o(
          "WAWebUserPrefsStatus",
        ).previewOrResetStatusSenderKeyDistribution(t.deviceWid, n);
      return {
        action: n,
        target: {
          peer: t.peer,
          device: t.device,
          deviceWid: String(t.deviceWid),
          alternateDeviceWid: a.alternateDeviceWid,
          aliasResolution: a.aliasResolution,
        },
        before: a.before,
        after: a.after,
        changed: a.changed,
      };
    }
    he.doc =
      'Preview or reset status sender-key distribution bookkeeping for one exact device only. The result reports whether the PN/LID alias resolved; reset is an unchanged no-op when it did not. Example: Debug.exactStatusSenderKeyDistribution({peer: "12345@lid", device: 2, action: "preview"}).';
    function ye(e) {
      r("vulture")("xxHGOeC4YVOs3EwB3_9qvVxa680=");
      var t = Ce(e, "peer"),
        n = Ce(e, "device");
      if (typeof t != "string" || t.length === 0)
        throw r("err")(
          "peer must be a non-empty account-level user JID string",
        );
      if (/:[0-9]+@/.test(t))
        throw r("err")(
          "peer must not contain a device; pass device separately",
        );
      if (typeof n != "number" || !Number.isInteger(n) || n < 0)
        throw r("err")(
          "device must be an integer greater than or equal to zero",
        );
      var a = o("WAWebWidFactory").createWid(t);
      if (!a.isUser() || a.device != null)
        throw r("err")("peer must be an account-level user JID");
      var i = o("WAWebWidFactory").asUserWidOrThrow(a);
      return {
        peer: String(i),
        device: n,
        deviceWid: o("WAWebWidFactory").createDeviceWidFromUserAndDevice(
          i.user,
          i.server,
          n,
        ),
      };
    }
    function Ce(e, t) {
      if (
        (r("vulture")("XibyRI-PPxjEx28kSs3ZISDCWPg="),
        typeof e != "object" || e == null || Array.isArray(e))
      )
        throw r("err")("expected one structured object argument");
      if (!(t in e)) throw r("err")("missing required " + t);
      return e[t];
    }
    function be(e) {
      if (
        (r("vulture")("ggG3gmwFtuAiXFEzXIrIyvzrrXw="),
        e === o("WAWebSessionScope").SessionScope.DEFAULT)
      )
        return o("WAWebSessionScope").SessionScope.DEFAULT;
      if (e === o("WAWebSessionScope").SessionScope.STATUS)
        return o("WAWebSessionScope").SessionScope.STATUS;
      throw r("err")('scope must be exactly "default" or "status"');
    }
    function ve(e) {
      if (
        (r("vulture")("dfWdpJp85-c4MunkMFWrgJvKsSY="),
        e === "preview" || e === "delete")
      )
        return e;
      throw r("err")('action must be exactly "preview" or "delete"');
    }
    function Se(e) {
      if (
        (r("vulture")("ncTOiovBS6necvmrRT6NSk8Zviw="),
        e === "preview" || e === "reset")
      )
        return e;
      throw r("err")('action must be exactly "preview" or "reset"');
    }
    function Re(e) {
      r("vulture")("_k8FDUbxWD4BKfmOtocEc-555Kc=");
      var t = o("WAWebChatCollection").ChatCollection.get(
        o("WAWebWidFactory").createWid(e),
      );
      return t
        ? o("WAWebSendClearChatAction")
            .sendClear(t, !1)
            .finally(function () {
              o("WALogger").LOG(
                Y ||
                  (Y = babelHelpers.taggedTemplateLiteralLoose([
                    "chat ",
                    " cleared",
                  ])),
                e,
              );
            })
        : (o("WALogger").LOG(
            X ||
              (X = babelHelpers.taggedTemplateLiteralLoose([
                "chat ",
                " not found",
              ])),
            e,
          ),
          Promise.resolve());
    }
    Re.doc =
      "Clear chat passing chatId string. The same as clear chat from dropdown menu.";
    var Le = {
      clearChat: Re,
      diffSignalSessions: re,
      encryptMockReactionMsg: oe,
      exactSignalSession: ge,
      exactStatusSenderKeyDistribution: he,
      groupChatGetParticipantRecord: pe,
      groupChatGetGroupMetadataRecord: _e,
      groupChatRotateSelfSenderKey: me,
      removeSignalSessionsForActiveChat: ae,
      removeSenderKeyForActiveGroupChat: ie,
      fetchPrekeysForActiveChat: le,
      printDevicesForActiveChat: se,
      removeDeviceForActiveChat: ce,
      removeDeviceForActiveGroupChat: de,
      sendTextMessageToActiveChat: fe,
      snapshotSignalSessions: ne,
    };
    l.default = Le;
  },
  98,
);
