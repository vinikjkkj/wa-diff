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
    "WAWebSendTextMsgChatAction",
    "WAWebSessionScope",
    "WAWebSignal",
    "WAWebSignalCommonUtils",
    "WAWebSignalProtocolStore",
    "WAWebSignalSessionApi",
    "WAWebSignalStorage",
    "WAWebUserPrefsStatus",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
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
      Z,
      ee = null,
      te = null;
    function ne(e) {
      return re.apply(this, arguments);
    }
    function re() {
      return (
        (re = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          r("vulture")("W8jBs-Wu98CU9KwQdMV4SJeMY-s=");
          var t;
          if (e instanceof ArrayBuffer) t = e;
          else if (e instanceof Uint8Array) t = e;
          else if (typeof e == "string") t = new TextEncoder().encode(e);
          else if (e instanceof Blob) t = yield e.arrayBuffer();
          else {
            var n;
            t = new TextEncoder().encode(
              (n = JSON.stringify(e)) != null ? n : "",
            );
          }
          for (
            var o = yield self.crypto.subtle.digest("SHA-256", t),
              a = new Uint8Array(o),
              i = "",
              l = 0;
            l < a.length;
            l++
          )
            i += a[l].toString(16).padStart(2, "0");
          return i;
        })),
        re.apply(this, arguments)
      );
    }
    function oe() {
      return ae.apply(this, arguments);
    }
    function ae() {
      return (
        (ae = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          r("vulture")("MELlip27xexO1A4Bp3IpjlAh9Uw=");
          var e = o("WAWebSignalProtocolStore")
              .getPersistSignalProtocolStore()
              .cache_TESTONLY(),
            t = yield o("WAWebSignalStorage").getSessionTable().all(),
            a = new Map();
          (yield (J || (J = n("Promise"))).all(
            t.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var t = e.address,
                      n = e.session;
                    if (n != null) {
                      var r = yield ne(n);
                      a.set(t, r);
                    }
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
          ),
            yield J.all(
              Array.from(e.SessionStore.entries()).map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var t = e[0],
                        n = e[1];
                      if (n != null && n.deleted) a.delete(t);
                      else if (n != null) {
                        var r = yield ne(n.session);
                        a.set(t, r);
                      }
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
            ),
            (Z = a));
          var i = yield o("WAWebSignalStorage").getSenderKeyTable().all(),
            l = new Map();
          (yield J.all(
            i.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var t = e.senderKey,
                      n = e.senderKeyName;
                    if (t != null) {
                      var r = yield ne(t);
                      l.set(n, r);
                    }
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
          ),
            yield J.all(
              Array.from(e.SenderKeyStore.entries()).map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var t = e[0],
                        n = e[1];
                      if (n != null) {
                        var r = yield ne(n);
                        l.set(t, r);
                      } else l.delete(t);
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
            ),
            (ee = l));
          var s = yield o("WAWebUserPrefsStatus").getStatusSenderKeyMap();
          ((te = new Set(s.senderKey)),
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "snapshotSignalSessions: captured ",
                  " session entries, ",
                  " sender key entries (IDB + cache overlay), ",
                  " status SK distrib entries",
                ])),
              a.size,
              l.size,
              te.size,
            ));
        })),
        ae.apply(this, arguments)
      );
    }
    oe.doc =
      "Take a snapshot of all in-memory signal sessions and sender keys (address + hash). Call diffSignalSessions after sending to see changes.";
    function ie() {
      return le.apply(this, arguments);
    }
    function le() {
      return (
        (le = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if ((r("vulture")("MaJRvqc30aJFCEaEbMKLUj9EsYA="), Z == null))
            return (
              o("WALogger").WARN(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "diffSignalSessions: no snapshot taken yet, call snapshotSignalSessions first",
                  ])),
              ),
              null
            );
          var e = Z,
            t = o("WAWebSignalProtocolStore")
              .getPersistSignalProtocolStore()
              .cache_TESTONLY(),
            a = yield o("WAWebSignalStorage").getSessionTable().all(),
            i = new Map();
          (yield (J || (J = n("Promise"))).all(
            a.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var t = e.address,
                      n = e.session;
                    if (n != null) {
                      var r = yield ne(n);
                      i.set(t, r);
                    }
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
          ),
            yield J.all(
              Array.from(t.SessionStore.entries()).map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var t = e[0],
                        n = e[1];
                      if (n != null && n.deleted) i.delete(t);
                      else if (n != null) {
                        var r = yield ne(n.session);
                        i.set(t, r);
                      }
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
            ));
          var l = [],
            s = [],
            u = [],
            c = 0;
          for (var d of i) {
            var L = d[0],
              E = d[1],
              k = e.get(L);
            k == null ? l.push(L) : k !== E ? u.push(L) : c++;
          }
          for (var I of e.keys()) i.has(I) || s.push(I);
          (o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "diffSignalSessions: ",
                " new, ",
                " removed, ",
                " modified, ",
                " unchanged",
              ])),
            l.length,
            s.length,
            u.length,
            c,
          ),
            l.length > 0 &&
              o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "  NEW: ",
                    "",
                  ])),
                l.join(", "),
              ),
            s.length > 0 &&
              o("WALogger").LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "  REMOVED: ",
                    "",
                  ])),
                s.join(", "),
              ),
            u.length > 0 &&
              o("WALogger").LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "  MODIFIED: ",
                    "",
                  ])),
                u.join(", "),
              ));
          var T = [].concat(
              l.map(function (e) {
                return { change: "added", address: e };
              }),
              s.map(function (e) {
                return { change: "removed", address: e };
              }),
              u.map(function (e) {
                return { change: "modified", address: e };
              }),
            ),
            D = ee != null ? ee : new Map(),
            x = yield o("WAWebSignalStorage").getSenderKeyTable().all(),
            $ = new Map();
          (yield J.all(
            x.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var t = e.senderKey,
                      n = e.senderKeyName;
                    if (t != null) {
                      var r = yield ne(t);
                      $.set(n, r);
                    }
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
          ),
            yield J.all(
              Array.from(t.SenderKeyStore.entries()).map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var t = e[0],
                        n = e[1];
                      if (n != null) {
                        var r = yield ne(n);
                        $.set(t, r);
                      } else $.delete(t);
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
            ));
          var P = [],
            N = [],
            M = [],
            w = 0;
          for (var A of $) {
            var F = A[0],
              O = A[1];
            {
              var B = D.get(F);
              B == null ? P.push(F) : B !== O ? M.push(F) : w++;
            }
          }
          for (var W of D.keys()) $.has(W) || N.push(W);
          (o("WALogger").LOG(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "diffSignalSessions (sender keys): ",
                " new, ",
                " removed, ",
                " modified, ",
                " unchanged",
              ])),
            P.length,
            N.length,
            M.length,
            w,
          ),
            P.length > 0 &&
              o("WALogger").LOG(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "  NEW: ",
                    "",
                  ])),
                P.join(", "),
              ),
            N.length > 0 &&
              o("WALogger").LOG(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "  REMOVED: ",
                    "",
                  ])),
                N.join(", "),
              ),
            M.length > 0 &&
              o("WALogger").LOG(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "  MODIFIED: ",
                    "",
                  ])),
                M.join(", "),
              ));
          var q = [].concat(
              P.map(function (e) {
                return { change: "added", address: e };
              }),
              N.map(function (e) {
                return { change: "removed", address: e };
              }),
              M.map(function (e) {
                return { change: "modified", address: e };
              }),
            ),
            U = yield o("WAWebUserPrefsStatus").getStatusSenderKeyMap(),
            V = new Set(U.senderKey),
            H = te,
            G = [],
            z = [];
          if (H != null) {
            for (var j of V) H.has(j) || G.push(j);
            for (var K of H) V.has(K) || z.push(K);
          }
          (o("WALogger").LOG(
            v ||
              (v = babelHelpers.taggedTemplateLiteralLoose([
                "diffSignalSessions (status SK distrib): ",
                " new, ",
                " removed",
              ])),
            G.length,
            z.length,
          ),
            G.length > 0 &&
              o("WALogger").LOG(
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
                    "  NEW: ",
                    "",
                  ])),
                G.join(", "),
              ),
            z.length > 0 &&
              o("WALogger").LOG(
                R ||
                  (R = babelHelpers.taggedTemplateLiteralLoose([
                    "  REMOVED: ",
                    "",
                  ])),
                z.join(", "),
              ));
          var Q = [].concat(
            G.map(function (e) {
              return { change: "added", address: e };
            }),
            z.map(function (e) {
              return { change: "removed", address: e };
            }),
          );
          return {
            sessions: T,
            senderKeys: q,
            statusSkDistrib: Q,
            unchanged: c,
            skUnchanged: w,
          };
        })),
        le.apply(this, arguments)
      );
    }
    ie.doc =
      "Compare current signal sessions and sender keys against the last snapshot and log new/removed/modified entries";
    function se(e) {
      return ue.apply(this, arguments);
    }
    function ue() {
      return (
        (ue = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.from,
            n = e.parentMessageSecret,
            a = e.parentMessageSender,
            i = e.parentMessageStanzaId;
          r("vulture")("PW_j426kfnfijJkNtwNpfkxWBbw=");
          var l = Math.round(Date.now() / 1e3),
            s = [
              "\uD83D\uDE00",
              "\uD83D\uDE02",
              "\uD83D\uDE07",
              "\uD83D\uDE08",
              "\uD83D\uDE0A",
            ],
            u = s[Math.floor(Math.random() * s.length)],
            c = self.crypto.getRandomValues(new Uint8Array(12)),
            d = {
              type: o("WAWebMsgType").MsgKind.ReactionDecrypted,
              encode: { text: u, senderTimestampMs: l },
            },
            m = yield o("WAWebAddonEncryption").encryptAddOn(d, {
              messageSecret: n,
              iv: c,
              stanzaId: i,
              originalMessageSender:
                o("WAWebWidFactory").createUserWidOrThrow(a),
              addOnSender: o("WAWebWidFactory").createUserWidOrThrow(t),
            }),
            p = m.encPayload;
          return {
            encPayload: o("WABase64").encodeB64(p),
            encIv: o("WABase64").encodeB64(c.buffer),
          };
        })),
        ue.apply(this, arguments)
      );
    }
    function ce() {
      return de.apply(this, arguments);
    }
    function de() {
      return (
        (de = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          r("vulture")("vQkoKJDfC_xTFBWBVwCL52PeBIA=");
          var e = o("WAWebDebugUtils").getSelectedChat();
          if (!e) {
            o("WALogger").WARN(
              L ||
                (L = babelHelpers.taggedTemplateLiteralLoose([
                  "removeSignalSessionsForActiveChat: no active chat to remove sessions",
                ])),
            );
            return;
          }
          var t = [];
          if (o("WAWebChatGetters").getIsGroup(e)) {
            var a = yield o("WAWebApiParticipantStore").getGroupSenderKeyList(
              e.id,
            );
            ((t = [].concat(a.skList, a.skDistribList)),
              yield o("WAWebApiParticipantStore").markForgetSenderKey(e.id, t));
          } else
            t = yield o("WAWebDBDeviceListFanout").getFanOutList({
              wids: [e.id],
            });
          if (t.length === 0) {
            o("WALogger").WARN(
              E ||
                (E = babelHelpers.taggedTemplateLiteralLoose([
                  "removeSignalSessionsForActiveChat: no participant found",
                ])),
            );
            return;
          }
          var i = 0;
          (yield (J || (J = n("Promise"))).all([
            (yield o("WAWebSignal").Session.hasSignalSessions(t)).map(
              function (e, n) {
                if (e)
                  return (
                    i++,
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
              k ||
                (k = babelHelpers.taggedTemplateLiteralLoose([
                  "removeSignalSessionsForActiveChat: removed ",
                  " sessions",
                ])),
              i,
            ));
        })),
        de.apply(this, arguments)
      );
    }
    ce.doc =
      "Remove sessions (to trigger prekeys fetch) for all the participants of the active chat";
    function me(e) {
      return pe.apply(this, arguments);
    }
    function pe() {
      return (
        (pe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          r("vulture")("qEJSyPq0IqgLZ-Mosj6mAj-ZoTU=");
          var t = o("WAWebDebugUtils").getSelectedChat();
          if (!t || !o("WAWebChatGetters").getIsGroup(t)) {
            o("WALogger").WARN(
              I ||
                (I = babelHelpers.taggedTemplateLiteralLoose([
                  "removeSenderKeyForActiveGroupChat: no active chat to remove sender key",
                ])),
            );
            return;
          }
          var n = yield o("WAWebApiParticipantStore").getGroupSenderKeyList(
              t.id,
            ),
            a = [].concat(n.skList, n.skDistribList);
          if (a.length === 0) {
            o("WALogger").WARN(
              T ||
                (T = babelHelpers.taggedTemplateLiteralLoose([
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
        })),
        pe.apply(this, arguments)
      );
    }
    me.doc =
      "Remove sender key for active group chat (to trigger read-receipt) when receiving a message from target participant";
    function _e() {
      return fe.apply(this, arguments);
    }
    function fe() {
      return (
        (fe = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          r("vulture")("u3TUOUdY41MCHYtGQrvo3w5rC5w=");
          var e = o("WAWebDebugUtils").getSelectedChat();
          if (!e) {
            o("WALogger").WARN(
              D ||
                (D = babelHelpers.taggedTemplateLiteralLoose([
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
              x ||
                (x = babelHelpers.taggedTemplateLiteralLoose([
                  "fetchPrekeysForActiveChat: no participant found",
                ])),
            );
            return;
          }
          o("WALogger").LOG(
            $ ||
              ($ = babelHelpers.taggedTemplateLiteralLoose([
                "fetchPrekeysForActiveChat: requesting ",
                " prekeys",
              ])),
            t.length,
          );
          var i = yield o("WAWebFetchPrekeysJob").fetchPrekeys(t),
            l = i.errors,
            s = i.prekeyBundles,
            u = yield (J || (J = n("Promise"))).all(
              s.map(function (e) {
                return o("WAWebProcessKeyBundle").processKeyBundles([e]);
              }),
            ),
            c = r("sumBy")(u, function (e) {
              var t;
              return (t = e.depletedPrekeyCount) != null ? t : 0;
            });
          o("WALogger").LOG(
            P ||
              (P = babelHelpers.taggedTemplateLiteralLoose([
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
        fe.apply(this, arguments)
      );
    }
    _e.doc = "Fetch prekeys for all the participants of the active chat";
    function ge() {
      return he.apply(this, arguments);
    }
    function he() {
      return (
        (he = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          r("vulture")("vWzLp7Vkp2VcQ0fzMR9BrONxIeE=");
          var e = o("WAWebDebugUtils").getSelectedChat();
          if (!e || !o("WAWebChatGetters").getIsUser(e)) {
            o("WALogger").WARN(
              N ||
                (N = babelHelpers.taggedTemplateLiteralLoose([
                  "printDevicesForActiveChat: no active chat or chat is not a 1:1 chat",
                ])),
            );
            return;
          }
          var t = o("WAWebDeviceListPk").createDeviceListPK(e.id),
            n = yield o("WAWebApiDeviceList").getDeviceRecord(e.id);
          if (n == null) {
            o("WALogger").WARN(
              M ||
                (M = babelHelpers.taggedTemplateLiteralLoose([
                  "printDevicesForActiveChat: no record for ",
                  "",
                ])),
              t,
            );
            return;
          } else if (n.deleted) {
            o("WALogger").WARN(
              w ||
                (w = babelHelpers.taggedTemplateLiteralLoose([
                  'printDevicesForActiveChat: user "',
                  '" has been deleted',
                ])),
              t,
            );
            return;
          }
          o("WALogger").LOG(
            A ||
              (A = babelHelpers.taggedTemplateLiteralLoose([
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
        he.apply(this, arguments)
      );
    }
    ge.doc = "Return list of the devices of the active chat";
    function ye(e, t) {
      return Ce.apply(this, arguments);
    }
    function Ce() {
      return (
        (Ce = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n, a, i;
          r("vulture")("jPpyIJZpvt8K6OP9y596A6ANVpQ=");
          var l = o("WAWebDeviceListPk").createDeviceListPK(e),
            s = yield o("WAWebApiDeviceList").getDeviceRecord(e);
          if (s == null) {
            o("WALogger").WARN(
              F ||
                (F = babelHelpers.taggedTemplateLiteralLoose([
                  "removeDeviceForUser: no record for ",
                  "",
                ])),
              l,
            );
            return;
          } else if (s.deleted) {
            o("WALogger").WARN(
              O ||
                (O = babelHelpers.taggedTemplateLiteralLoose([
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
                B ||
                  (B = babelHelpers.taggedTemplateLiteralLoose([
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
              W ||
                (W = babelHelpers.taggedTemplateLiteralLoose([
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
            yield o("WAWebApiDeviceList").createOrReplaceDeviceRecord(m),
            o("WALogger").LOG(
              q ||
                (q = babelHelpers.taggedTemplateLiteralLoose([
                  "removeDeviceForUser: device ",
                  " has been removed from ",
                  "",
                ])),
              u,
              l,
            ),
            o("WAWebWidFactory").createDeviceWidFromDeviceListPk(m.id, u)
          );
        })),
        Ce.apply(this, arguments)
      );
    }
    function be(e) {
      return ve.apply(this, arguments);
    }
    function ve() {
      return (
        (ve = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          r("vulture")("sj3IfLC87OavhFo4np76eNqANCY=");
          var t = o("WAWebDebugUtils").getSelectedChat();
          if (!t || !o("WAWebChatGetters").getIsUser(t)) {
            o("WALogger").WARN(
              U ||
                (U = babelHelpers.taggedTemplateLiteralLoose([
                  "removeDeviceForActiveChat: no active chat or chat is not a 1:1 chat",
                ])),
            );
            return;
          }
          yield ye(t.id, e);
        })),
        ve.apply(this, arguments)
      );
    }
    be.doc = "Remove one of the devices for the active chat.";
    function Se() {
      return Re.apply(this, arguments);
    }
    function Re() {
      return (
        (Re = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          r("vulture")("BmJIG-MIereUAeRZWZgksLCcwNM=");
          var e = o("WAWebDebugUtils").getSelectedChat();
          if (!(e != null && e.id.isGroup())) {
            o("WALogger").WARN(
              V ||
                (V = babelHelpers.taggedTemplateLiteralLoose([
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
                    H ||
                      (H = babelHelpers.taggedTemplateLiteralLoose([
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
                    G ||
                      (G = babelHelpers.taggedTemplateLiteralLoose([
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
        Re.apply(this, arguments)
      );
    }
    Se.doc = "Remove one of the devices for the active group chat.";
    function Le() {
      r("vulture")("5GekqaM7JTywx3yvekEUnrGwFaU=");
      var t = o("WAWebChatCollection").ChatCollection.getActive();
      if (!(t != null && t.id.isGroup()))
        return (
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "the current chat is not a group",
              ])),
          ),
          (J || (J = n("Promise"))).resolve()
        );
      var a = t == null ? void 0 : t.id.toString();
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["participant"], function (e) {
          var t = e[0];
          return t.get(a).then(function (e) {
            if (!e) {
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "groupChatRotateSelfSenderKey: group participant info missing for group ",
                    "",
                  ])),
                a,
              );
              return;
            }
            return t.createOrReplace({
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
    Le.doc = "Rotate the self sender key for the active group chat";
    function Ee() {
      return ke.apply(this, arguments);
    }
    function ke() {
      return (
        (ke = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          r("vulture")("zAVWv2DSfJ1lA4WMZ6GHJ923nOo=");
          var e = o("WAWebChatCollection").ChatCollection.getActive();
          if (!(e != null && e.id.isGroup())) {
            o("WALogger").WARN(
              z ||
                (z = babelHelpers.taggedTemplateLiteralLoose([
                  "groupChatGetParticipantRecord: the current chat is not a group",
                ])),
            );
            return;
          }
          var t = e == null ? void 0 : e.id.toString(),
            n = yield o("WAWebSchemaParticipant").getParticipantTable().get(t);
          if (n == null) {
            o("WALogger").LOG(
              j ||
                (j = babelHelpers.taggedTemplateLiteralLoose([
                  "groupChatGetParticipantRecord: group participant info missing for group ",
                  "",
                ])),
              t,
            );
            return;
          }
          return n;
        })),
        ke.apply(this, arguments)
      );
    }
    Ee.doc = "Get Participant Table for the active group chat";
    function Ie() {
      return Te.apply(this, arguments);
    }
    function Te() {
      return (
        (Te = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          r("vulture")("aZEiQEqkwwo6WKNOqNX-0dwH7Gc=");
          var e = o("WAWebChatCollection").ChatCollection.getActive();
          if (!(e != null && e.id.isGroup())) {
            o("WALogger").WARN(
              K ||
                (K = babelHelpers.taggedTemplateLiteralLoose([
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
              Q ||
                (Q = babelHelpers.taggedTemplateLiteralLoose([
                  "groupChatGetGroupMetadataRecord: group metadata info missing for group ",
                  "",
                ])),
              t,
            );
            return;
          }
          return n;
        })),
        Te.apply(this, arguments)
      );
    }
    ((Ie.doc = "Get GroupMetadata Table for the active group chat"),
      (Se.doc = "Remove one of the devices for the active group chat."));
    function De(e, t) {
      return xe.apply(this, arguments);
    }
    function xe() {
      return (
        (xe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          (t === void 0 && (t = 1),
            r("vulture")("53Pyhq2FYLn4nNve6ujP_yuED80="));
          var a = o("WAWebDebugUtils").getSelectedChat();
          if (!a) {
            o("WALogger").WARN(
              X ||
                (X = babelHelpers.taggedTemplateLiteralLoose([
                  "sendTextMessageToActiveChat: select a chat to send the message",
                ])),
            );
            return;
          }
          for (var i = [], l = 0; l < t; l++)
            i.push(
              o("WAWebSendTextMsgChatAction").sendTextMsgToChat(
                a,
                e + " | " + l,
              ),
            );
          (yield (J || (J = n("Promise"))).all(i),
            o("WALogger").LOG(
              Y ||
                (Y = babelHelpers.taggedTemplateLiteralLoose([
                  "sendTextMessageToActiveChat: done sending ",
                  ' "',
                  '" message(s) to chat: ',
                  "",
                ])),
              t,
              e,
              a.id,
            ));
        })),
        xe.apply(this, arguments)
      );
    }
    De.doc = "Send [message], [n] times to the active chat.";
    function $e(e) {
      return Pe.apply(this, arguments);
    }
    function Pe() {
      return (
        (Pe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          r("vulture")("aX8hhtKGZb-eABOsovapWiUmNN8=");
          var t = we(e),
            n = Fe(Ae(e, "scope")),
            a = Oe(Ae(e, "action")),
            i = o("WAWebSignalCommonUtils").createSignalAddress(t.deviceWid, n);
          if (
            n !== o("WAWebSessionScope").SessionScope.DEFAULT &&
            i ===
              o("WAWebSignalCommonUtils").createSignalAddress(
                t.deviceWid,
                o("WAWebSessionScope").SessionScope.DEFAULT,
              )
          )
            throw r("err")(
              n + " has no separate Signal session for this device",
            );
          var l = o("WAWebSignalProtocolStore").getSignalProtocolStore(),
            s = (yield l.loadSession(i)) != null,
            u = s;
          return (
            a === "delete" &&
              s &&
              (yield l.removeSession(i),
              yield l.flushBufferToDiskIfNotMemOnlyMode(),
              (u = (yield l.loadSession(i)) != null)),
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
        })),
        Pe.apply(this, arguments)
      );
    }
    $e.doc =
      'Preview or delete one exact Signal session only. Example: Debug.exactSignalSession({peer: "12345@lid", device: 2, scope: "status", action: "preview"}). Delete preserves identity, sibling scopes/devices, sender keys, and chats.';
    function Ne(e) {
      return Me.apply(this, arguments);
    }
    function Me() {
      return (
        (Me = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          r("vulture")("qGO_CYdoXoqQuYoQbl0wfEf65fU=");
          var t = we(e),
            n = Be(Ae(e, "action")),
            a = yield o(
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
        })),
        Me.apply(this, arguments)
      );
    }
    Ne.doc =
      'Preview or reset status sender-key distribution bookkeeping for one exact device only. The result reports whether the PN/LID alias resolved; reset is an unchanged no-op when it did not. Example: Debug.exactStatusSenderKeyDistribution({peer: "12345@lid", device: 2, action: "preview"}).';
    function we(e) {
      r("vulture")("xxHGOeC4YVOs3EwB3_9qvVxa680=");
      var t = Ae(e, "peer"),
        n = Ae(e, "device");
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
    function Ae(e, t) {
      if (
        (r("vulture")("XibyRI-PPxjEx28kSs3ZISDCWPg="),
        typeof e != "object" || e == null || Array.isArray(e))
      )
        throw r("err")("expected one structured object argument");
      if (!(t in e)) throw r("err")("missing required " + t);
      return e[t];
    }
    function Fe(e) {
      if (
        (r("vulture")("ggG3gmwFtuAiXFEzXIrIyvzrrXw="),
        e === o("WAWebSessionScope").SessionScope.DEFAULT)
      )
        return o("WAWebSessionScope").SessionScope.DEFAULT;
      if (e === o("WAWebSessionScope").SessionScope.STATUS)
        return o("WAWebSessionScope").SessionScope.STATUS;
      throw r("err")('scope must be exactly "default" or "status"');
    }
    function Oe(e) {
      if (
        (r("vulture")("dfWdpJp85-c4MunkMFWrgJvKsSY="),
        e === "preview" || e === "delete")
      )
        return e;
      throw r("err")('action must be exactly "preview" or "delete"');
    }
    function Be(e) {
      if (
        (r("vulture")("ncTOiovBS6necvmrRT6NSk8Zviw="),
        e === "preview" || e === "reset")
      )
        return e;
      throw r("err")('action must be exactly "preview" or "reset"');
    }
    function We(e) {
      r("vulture")("_k8FDUbxWD4BKfmOtocEc-555Kc=");
      var t = o("WAWebChatCollection").ChatCollection.get(
        o("WAWebWidFactory").createWid(e),
      );
      return t
        ? o("WAWebSendClearChatAction")
            .sendClear(t, !1)
            .finally(function () {
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "chat ",
                    " cleared",
                  ])),
                e,
              );
            })
        : (o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "chat ",
                " not found",
              ])),
            e,
          ),
          (J || (J = n("Promise"))).resolve());
    }
    We.doc =
      "Clear chat passing chatId string. The same as clear chat from dropdown menu.";
    var qe = {
      clearChat: We,
      diffSignalSessions: ie,
      encryptMockReactionMsg: se,
      exactSignalSession: $e,
      exactStatusSenderKeyDistribution: Ne,
      groupChatGetParticipantRecord: Ee,
      groupChatGetGroupMetadataRecord: Ie,
      groupChatRotateSelfSenderKey: Le,
      removeSignalSessionsForActiveChat: ce,
      removeSenderKeyForActiveGroupChat: me,
      fetchPrekeysForActiveChat: _e,
      printDevicesForActiveChat: ge,
      removeDeviceForActiveChat: be,
      removeDeviceForActiveGroupChat: Se,
      sendTextMessageToActiveChat: De,
      snapshotSignalSessions: oe,
    };
    l.default = qe;
  },
  98,
);
