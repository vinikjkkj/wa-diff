__d(
  "WAWebBroadcastEphemeralUtils",
  [
    "Promise",
    "WALogger",
    "WAWebApiContact",
    "WAWebEphemeralEncodeBroadcastSetting",
    "WAWebEphemeralityResolver",
    "WAWebEphemeralityUtils",
    "WAWebSchemaChat",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = ["conversation"],
      d;
    function m(e, t) {
      var n = t.buffer;
      if (e.conversation != null) {
        var r = e.conversation,
          o = babelHelpers.objectWithoutPropertiesLoose(e, c);
        return {
          proto: babelHelpers.extends({}, o, {
            extendedTextMessage: {
              text: r,
              contextInfo: { ephemeralSharedSecret: n },
            },
          }),
          injected: !0,
        };
      }
      return e.extendedTextMessage != null
        ? {
            proto: babelHelpers.extends({}, e, {
              extendedTextMessage: babelHelpers.extends(
                {},
                e.extendedTextMessage,
                {
                  contextInfo: babelHelpers.extends(
                    {},
                    e.extendedTextMessage.contextInfo,
                    { ephemeralSharedSecret: n },
                  ),
                },
              ),
            }),
            injected: !0,
          }
        : e.imageMessage != null
          ? {
              proto: babelHelpers.extends({}, e, {
                imageMessage: babelHelpers.extends({}, e.imageMessage, {
                  contextInfo: babelHelpers.extends(
                    {},
                    e.imageMessage.contextInfo,
                    { ephemeralSharedSecret: n },
                  ),
                }),
              }),
              injected: !0,
            }
          : e.videoMessage != null
            ? {
                proto: babelHelpers.extends({}, e, {
                  videoMessage: babelHelpers.extends({}, e.videoMessage, {
                    contextInfo: babelHelpers.extends(
                      {},
                      e.videoMessage.contextInfo,
                      { ephemeralSharedSecret: n },
                    ),
                  }),
                }),
                injected: !0,
              }
            : e.documentMessage != null
              ? {
                  proto: babelHelpers.extends({}, e, {
                    documentMessage: babelHelpers.extends(
                      {},
                      e.documentMessage,
                      {
                        contextInfo: babelHelpers.extends(
                          {},
                          e.documentMessage.contextInfo,
                          { ephemeralSharedSecret: n },
                        ),
                      },
                    ),
                  }),
                  injected: !0,
                }
              : e.audioMessage != null
                ? {
                    proto: babelHelpers.extends({}, e, {
                      audioMessage: babelHelpers.extends({}, e.audioMessage, {
                        contextInfo: babelHelpers.extends(
                          {},
                          e.audioMessage.contextInfo,
                          { ephemeralSharedSecret: n },
                        ),
                      }),
                    }),
                    injected: !0,
                  }
                : e.stickerMessage != null
                  ? {
                      proto: babelHelpers.extends({}, e, {
                        stickerMessage: babelHelpers.extends(
                          {},
                          e.stickerMessage,
                          {
                            contextInfo: babelHelpers.extends(
                              {},
                              e.stickerMessage.contextInfo,
                              { ephemeralSharedSecret: n },
                            ),
                          },
                        ),
                      }),
                      injected: !0,
                    }
                  : e.interactiveMessage != null
                    ? {
                        proto: babelHelpers.extends({}, e, {
                          interactiveMessage: babelHelpers.extends(
                            {},
                            e.interactiveMessage,
                            {
                              contextInfo: babelHelpers.extends(
                                {},
                                e.interactiveMessage.contextInfo,
                                { ephemeralSharedSecret: n },
                              ),
                            },
                          ),
                        }),
                        injected: !0,
                      }
                    : e.productMessage != null
                      ? {
                          proto: babelHelpers.extends({}, e, {
                            productMessage: babelHelpers.extends(
                              {},
                              e.productMessage,
                              {
                                contextInfo: babelHelpers.extends(
                                  {},
                                  e.productMessage.contextInfo,
                                  { ephemeralSharedSecret: n },
                                ),
                              },
                            ),
                          }),
                          injected: !0,
                        }
                      : { proto: e, injected: !1 };
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            r,
            a = yield o("WAWebSchemaChat").getChatTable().get(e.toString(), !1);
          if (a != null) {
            var i, l;
            return {
              duration: (i = a.ephemeralDuration) != null ? i : 0,
              timestamp: (l = a.ephemeralSettingTimestamp) != null ? l : 0,
            };
          }
          var s = yield (d || (d = n("Promise"))).all([
              o("WAWebApiContact").getContactRecord(
                o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
              ),
              o("WAWebApiContact").getContactRecord(e),
            ]),
            u = s[0],
            c = s[1];
          if (
            c != null &&
            o(
              "WAWebEphemeralityUtils",
            ).isEphemeralityDisabledForMessagingWithContact(c)
          )
            return { duration: 0, timestamp: 0 };
          var m = o("WAWebEphemeralityResolver").resolveNewChatDMSettings(u, c);
          return {
            duration: (t = m == null ? void 0 : m.duration) != null ? t : 0,
            timestamp:
              (r = m == null ? void 0 : m.settingTimestamp) != null ? r : 0,
          };
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.authorId,
            r = t.broadcastJid,
            a = t.proto,
            i = t.recipient,
            l = yield p(i),
            c = l.duration,
            d = l.timestamp;
          if (c <= 0)
            return (
              o("WALogger")
                .LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[broadcast:retry] no DM, skip eph rcpt=",
                      " dur=",
                      "",
                    ])),
                  i.toString(),
                  c,
                )
                .tags("messaging"),
              { content: a, ephSetting: null }
            );
          var _ = o(
              "WAWebEphemeralEncodeBroadcastSetting",
            ).generateEphemeralSharedSecret(),
            f = m(a, _),
            g = f.injected,
            h = f.proto;
          if (!g)
            return (
              o("WALogger")
                .LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[broadcast:retry] no secret inject, drop eph rcpt=",
                      "",
                    ])),
                  i.toString(),
                )
                .tags("messaging"),
              { content: a, ephSetting: null }
            );
          var y = yield o(
            "WAWebEphemeralEncodeBroadcastSetting",
          ).encodeBroadcastEphemeralSetting({
            broadcastJid: r,
            duration: c,
            recipient: i,
            sender: n,
            sharedSecret: _,
            timestamp: d,
          });
          return (
            o("WALogger")
              .LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:retry] eph + rcpt=",
                    " bcast=",
                    " dur=",
                    " ts=",
                    " len=",
                    "",
                  ])),
                i.toString(),
                r.toString(),
                c,
                d,
                y.length,
              )
              .tags("messaging"),
            { content: h, ephSetting: y }
          );
        })),
        g.apply(this, arguments)
      );
    }
    ((l.addSharedSecretToProto = m),
      (l.getBroadcastEphemeralSettingForRecipient = p),
      (l.buildBroadcastRetryEphemeral = f));
  },
  98,
);
