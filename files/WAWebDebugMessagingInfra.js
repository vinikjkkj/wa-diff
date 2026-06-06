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
    "WAWebSendKeyDistributionMsgAction",
    "WAWebSendTextMsgChatAction",
    "WAWebSignal",
    "WAWebSignalProtocolStore",
    "WAWebSignalSessionApi",
    "WAWebSignalStorage",
    "WAWebUserPrefsStatus",
    "WAWebWidFactory",
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
      Z,
      ee,
      te,
      ne = null,
      re = null;
    async function oe(e) {
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
        var r = await self.crypto.subtle.digest("SHA-256", t),
          o = new Uint8Array(r),
          a = "",
          i = 0;
        i < o.length;
        i++
      )
        a += o[i].toString(16).padStart(2, "0");
      return a;
    }
    async function ae() {
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
            var r = await oe(n);
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
              var r = await oe(n.session);
              a.set(t, r);
            }
          }),
        ),
        (te = a));
      var i = await o("WAWebSignalStorage").getSenderKeyTable().all(),
        l = new Map();
      (await Promise.all(
        i.map(async function (e) {
          var t = e.senderKey,
            n = e.senderKeyName;
          if (t != null) {
            var r = await oe(t);
            l.set(n, r);
          }
        }),
      ),
        await Promise.all(
          Array.from(t.SenderKeyStore.entries()).map(async function (e) {
            var t = e[0],
              n = e[1];
            if (n != null) {
              var r = await oe(n);
              l.set(t, r);
            } else l.delete(t);
          }),
        ),
        (ne = l));
      var s = await r("WAWebUserPrefsStatus").getStatusSenderKeyMap();
      ((re = new Set(s.senderKey)),
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
          re.size,
        ));
    }
    ae.doc =
      "Take a snapshot of all in-memory signal sessions and sender keys (address + hash). Call diffSignalSessions after sending to see changes.";
    async function ie() {
      if (te == null)
        return (
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "diffSignalSessions: no snapshot taken yet, call snapshotSignalSessions first",
              ])),
          ),
          null
        );
      var e = te,
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
            var r = await oe(n);
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
              var r = await oe(n.session);
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
        T = ne != null ? ne : new Map(),
        D = await o("WAWebSignalStorage").getSenderKeyTable().all(),
        x = new Map();
      (await Promise.all(
        D.map(async function (e) {
          var t = e.senderKey,
            n = e.senderKeyName;
          if (t != null) {
            var r = await oe(t);
            x.set(n, r);
          }
        }),
      ),
        await Promise.all(
          Array.from(t.SenderKeyStore.entries()).map(async function (e) {
            var t = e[0],
              n = e[1];
            if (n != null) {
              var r = await oe(n);
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
        q = await r("WAWebUserPrefsStatus").getStatusSenderKeyMap(),
        U = new Set(q.senderKey),
        V = re,
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
    ie.doc =
      "Compare current signal sessions and sender keys against the last snapshot and log new/removed/modified entries";
    async function le(e, t, n, r) {
      var a = Math.round(Date.now() / 1e3),
        i = ["\u{1F600}", "\u{1F602}", "\u{1F607}", "\u{1F608}", "\u{1F60A}"],
        l = i[Math.floor(Math.random() * i.length)],
        s = self.crypto.getRandomValues(new Uint8Array(12)),
        u = {
          type: o("WAWebMsgType").MsgKind.ReactionDecrypted,
          encode: { text: l, senderTimestampMs: a },
        },
        c = await o("WAWebAddonEncryption").encryptAddOn(u, {
          messageSecret: r,
          iv: s,
          stanzaId: t,
          originalMessageSender: o("WAWebWidFactory").createUserWidOrThrow(n),
          addOnSender: o("WAWebWidFactory").createUserWidOrThrow(e),
        }),
        d = c.encPayload;
      return {
        encPayload: o("WABase64").encodeB64(d),
        encIv: o("WABase64").encodeB64(s.buffer),
      };
    }
    function se() {
      var e = o("WAWebDebugUtils").getSelectedChat();
      if (!e) {
        o("WALogger").WARN(
          b ||
            (b = babelHelpers.taggedTemplateLiteralLoose([
              "sendKeyDistributionMsgToActiveChat: no active chat to send a key distribution message to",
            ])),
        );
        return;
      }
      o("WAWebSendKeyDistributionMsgAction")
        .sendKeyDistributionMsg(e.id)
        .then(function () {
          o("WALogger").LOG(
            v ||
              (v = babelHelpers.taggedTemplateLiteralLoose([
                "sendKeyDistributionMsgToActiveChat: done",
              ])),
          );
        })
        .catch(function (e) {
          o("WALogger").WARN(
            S ||
              (S = babelHelpers.taggedTemplateLiteralLoose([
                "sendKeyDistributionMsgToActiveChat: error ",
                "",
              ])),
            String(e),
          );
        });
    }
    se.doc =
      "Send a sender key distribution message (invisible) to the active chat";
    async function ue() {
      var e = o("WAWebDebugUtils").getSelectedChat();
      if (!e) {
        o("WALogger").WARN(
          R ||
            (R = babelHelpers.taggedTemplateLiteralLoose([
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
          L ||
            (L = babelHelpers.taggedTemplateLiteralLoose([
              "removeSignalSessionsForActiveChat: no participant found",
            ])),
        );
        return;
      }
      var r = 0;
      (await Promise.all([
        (await o("WAWebSignal").Session.hasSignalSessions(t)).map(
          function (e, n) {
            if (e)
              return (r++, o("WAWebSignal").Session.deleteRemoteSession(t[n]));
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
          E ||
            (E = babelHelpers.taggedTemplateLiteralLoose([
              "removeSignalSessionsForActiveChat: removed ",
              " sessions",
            ])),
          r,
        ));
    }
    ue.doc =
      "Remove sessions (to trigger prekeys fetch) for all the participants of the active chat";
    async function ce(e) {
      var t = o("WAWebDebugUtils").getSelectedChat();
      if (!t || !o("WAWebChatGetters").getIsGroup(t)) {
        o("WALogger").WARN(
          k ||
            (k = babelHelpers.taggedTemplateLiteralLoose([
              "removeSenderKeyForActiveGroupChat: no active chat to remove sender key",
            ])),
        );
        return;
      }
      var n = await o("WAWebApiParticipantStore").getGroupSenderKeyList(t.id),
        r = [].concat(n.skList, n.skDistribList);
      if (r.length === 0) {
        o("WALogger").WARN(
          I ||
            (I = babelHelpers.taggedTemplateLiteralLoose([
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
    }
    ce.doc =
      "Remove sender key for active group chat (to trigger read-receipt) when receiving a message from target participant";
    async function de() {
      var e = o("WAWebDebugUtils").getSelectedChat();
      if (!e) {
        o("WALogger").WARN(
          T ||
            (T = babelHelpers.taggedTemplateLiteralLoose([
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
          D ||
            (D = babelHelpers.taggedTemplateLiteralLoose([
              "fetchPrekeysForActiveChat: no participant found",
            ])),
        );
        return;
      }
      o("WALogger").LOG(
        x ||
          (x = babelHelpers.taggedTemplateLiteralLoose([
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
        $ ||
          ($ = babelHelpers.taggedTemplateLiteralLoose([
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
    de.doc = "Fetch prekeys for all the participants of the active chat";
    async function me() {
      var e = o("WAWebDebugUtils").getSelectedChat();
      if (!e || !o("WAWebChatGetters").getIsUser(e)) {
        o("WALogger").WARN(
          P ||
            (P = babelHelpers.taggedTemplateLiteralLoose([
              "printDevicesForActiveChat: no active chat or chat is not a 1:1 chat",
            ])),
        );
        return;
      }
      var t = o("WAWebDeviceListPk").createDeviceListPK(e.id),
        n = await o("WAWebApiDeviceList").getDeviceRecord(e.id);
      if (n == null) {
        o("WALogger").WARN(
          N ||
            (N = babelHelpers.taggedTemplateLiteralLoose([
              "printDevicesForActiveChat: no record for ",
              "",
            ])),
          t,
        );
        return;
      } else if (n.deleted) {
        o("WALogger").WARN(
          M ||
            (M = babelHelpers.taggedTemplateLiteralLoose([
              'printDevicesForActiveChat: user "',
              '" has been deleted',
            ])),
          t,
        );
        return;
      }
      o("WALogger").LOG(
        w ||
          (w = babelHelpers.taggedTemplateLiteralLoose([
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
    me.doc = "Return list of the devices of the active chat";
    async function pe(e, t) {
      var n,
        r,
        a,
        i = o("WAWebDeviceListPk").createDeviceListPK(e),
        l = await o("WAWebApiDeviceList").getDeviceRecord(e);
      if (l == null) {
        o("WALogger").WARN(
          A ||
            (A = babelHelpers.taggedTemplateLiteralLoose([
              "removeDeviceForUser: no record for ",
              "",
            ])),
          i,
        );
        return;
      } else if (l.deleted) {
        o("WALogger").WARN(
          F ||
            (F = babelHelpers.taggedTemplateLiteralLoose([
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
            O ||
              (O = babelHelpers.taggedTemplateLiteralLoose([
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
          B ||
            (B = babelHelpers.taggedTemplateLiteralLoose([
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
        await o("WAWebApiDeviceList").createOrReplaceDeviceRecord(d),
        o("WALogger").LOG(
          W ||
            (W = babelHelpers.taggedTemplateLiteralLoose([
              "removeDeviceForUser: device ",
              " has been removed from ",
              "",
            ])),
          s,
          i,
        ),
        o("WAWebWidFactory").createDeviceWidFromDeviceListPk(d.id, s)
      );
    }
    async function _e(e) {
      var t = o("WAWebDebugUtils").getSelectedChat();
      if (!t || !o("WAWebChatGetters").getIsUser(t)) {
        o("WALogger").WARN(
          q ||
            (q = babelHelpers.taggedTemplateLiteralLoose([
              "removeDeviceForActiveChat: no active chat or chat is not a 1:1 chat",
            ])),
        );
        return;
      }
      await pe(t.id, e);
    }
    _e.doc = "Remove one of the devices for the active chat.";
    async function fe() {
      var e = o("WAWebDebugUtils").getSelectedChat();
      if (!(e != null && e.id.isGroup())) {
        o("WALogger").WARN(
          U ||
            (U = babelHelpers.taggedTemplateLiteralLoose([
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
                V ||
                  (V = babelHelpers.taggedTemplateLiteralLoose([
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
                H ||
                  (H = babelHelpers.taggedTemplateLiteralLoose([
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
    fe.doc = "Remove one of the devices for the active group chat.";
    function ge() {
      var e = o("WAWebChatCollection").ChatCollection.getActive();
      if (!(e != null && e.id.isGroup()))
        return (
          o("WALogger").WARN(
            G ||
              (G = babelHelpers.taggedTemplateLiteralLoose([
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
                z ||
                  (z = babelHelpers.taggedTemplateLiteralLoose([
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
    ge.doc = "Rotate the self sender key for the active group chat";
    async function he() {
      var e = o("WAWebChatCollection").ChatCollection.getActive();
      if (!(e != null && e.id.isGroup())) {
        o("WALogger").WARN(
          j ||
            (j = babelHelpers.taggedTemplateLiteralLoose([
              "groupChatGetParticipantRecord: the current chat is not a group",
            ])),
        );
        return;
      }
      var t = e == null ? void 0 : e.id.toString(),
        n = await o("WAWebSchemaParticipant").getParticipantTable().get(t);
      if (n == null) {
        o("WALogger").LOG(
          K ||
            (K = babelHelpers.taggedTemplateLiteralLoose([
              "groupChatGetParticipantRecord: group participant info missing for group ",
              "",
            ])),
          t,
        );
        return;
      }
      return n;
    }
    he.doc = "Get Participant Table for the active group chat";
    async function ye() {
      var e = o("WAWebChatCollection").ChatCollection.getActive();
      if (!(e != null && e.id.isGroup())) {
        o("WALogger").WARN(
          Q ||
            (Q = babelHelpers.taggedTemplateLiteralLoose([
              "groupChatGetGroupMetadataRecord: the current chat is not a group",
            ])),
        );
        return;
      }
      var t = e == null ? void 0 : e.id.toString(),
        n = await o("WAWebSchemaGroupMetadata").getGroupMetadataTable().get(t);
      if (n == null) {
        o("WALogger").LOG(
          X ||
            (X = babelHelpers.taggedTemplateLiteralLoose([
              "groupChatGetGroupMetadataRecord: group metadata info missing for group ",
              "",
            ])),
          t,
        );
        return;
      }
      return n;
    }
    ((ye.doc = "Get GroupMetadata Table for the active group chat"),
      (fe.doc = "Remove one of the devices for the active group chat."));
    async function Ce(e, t) {
      t === void 0 && (t = 1);
      var n = o("WAWebDebugUtils").getSelectedChat();
      if (!n) {
        o("WALogger").WARN(
          Y ||
            (Y = babelHelpers.taggedTemplateLiteralLoose([
              "sendTextMessageToActiveChat: select a chat to send the message",
            ])),
        );
        return;
      }
      for (var r = [], a = 0; a < t; a++)
        r.push(
          o("WAWebSendTextMsgChatAction").sendTextMsgToChat(n, e + " | " + a),
        );
      (await Promise.all(r),
        o("WALogger").LOG(
          J ||
            (J = babelHelpers.taggedTemplateLiteralLoose([
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
    Ce.doc = "Send [message], [n] times to the active chat.";
    function be(e) {
      var t = o("WAWebChatCollection").ChatCollection.get(
        o("WAWebWidFactory").createWid(e),
      );
      return t
        ? o("WAWebSendClearChatAction")
            .sendClear(t, !1)
            .finally(function () {
              o("WALogger").LOG(
                ee ||
                  (ee = babelHelpers.taggedTemplateLiteralLoose([
                    "chat ",
                    " cleared",
                  ])),
                e,
              );
            })
        : (o("WALogger").LOG(
            Z ||
              (Z = babelHelpers.taggedTemplateLiteralLoose([
                "chat ",
                " not found",
              ])),
            e,
          ),
          Promise.resolve());
    }
    be.doc =
      "Clear chat passing chatId string. The same as clear chat from dropdown menu.";
    var ve = {
      clearChat: be,
      diffSignalSessions: ie,
      encryptMockReactionMsg: le,
      groupChatGetParticipantRecord: he,
      groupChatGetGroupMetadataRecord: ye,
      groupChatRotateSelfSenderKey: ge,
      sendKeyDistributionMsgToActiveChat: se,
      removeSignalSessionsForActiveChat: ue,
      removeSenderKeyForActiveGroupChat: ce,
      fetchPrekeysForActiveChat: de,
      printDevicesForActiveChat: me,
      removeDeviceForActiveChat: _e,
      removeDeviceForActiveGroupChat: fe,
      sendTextMessageToActiveChat: Ce,
      snapshotSignalSessions: ae,
    };
    l.default = ve;
  },
  98,
);
