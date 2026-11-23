__d(
  "WAWebBroadcastEphemeralUtils",
  [
    "WALogger",
    "WAWebApiContact",
    "WAWebEphemeralEncodeBroadcastSetting",
    "WAWebEphemeralityResolver",
    "WAWebEphemeralityUtils",
    "WAWebSchemaChat",
    "WAWebUserUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = ["conversation"];
    function d(e, t) {
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
    async function m(e) {
      var t,
        n,
        r = await o("WAWebSchemaChat").getChatTable().get(e.toString(), !1);
      if (r != null) {
        var a, i;
        return {
          duration: (a = r.ephemeralDuration) != null ? a : 0,
          timestamp: (i = r.ephemeralSettingTimestamp) != null ? i : 0,
        };
      }
      var l = await Promise.all([
          o("WAWebApiContact").getContactRecord(
            o("WAWebUserUtils").getMePnLessOrFallback_DO_NOT_USE(),
          ),
          o("WAWebApiContact").getContactRecord(e),
        ]),
        s = l[0],
        u = l[1];
      if (
        u != null &&
        o(
          "WAWebEphemeralityUtils",
        ).isEphemeralityDisabledForMessagingWithContact(u)
      )
        return { duration: 0, timestamp: 0 };
      var c = o("WAWebEphemeralityResolver").resolveNewChatDMSettings(s, u);
      return {
        duration: (t = c == null ? void 0 : c.duration) != null ? t : 0,
        timestamp:
          (n = c == null ? void 0 : c.settingTimestamp) != null ? n : 0,
      };
    }
    async function p(t) {
      var n = t.authorId,
        r = t.broadcastJid,
        a = t.proto,
        i = t.recipient,
        l = await m(i),
        c = l.duration,
        p = l.timestamp;
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
        f = d(a, _),
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
      var y = await o(
        "WAWebEphemeralEncodeBroadcastSetting",
      ).encodeBroadcastEphemeralSetting({
        broadcastJid: r,
        duration: c,
        recipient: i,
        sender: n,
        sharedSecret: _,
        timestamp: p,
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
            p,
            y.length,
          )
          .tags("messaging"),
        { content: h, ephSetting: y }
      );
    }
    ((l.addSharedSecretToProto = d),
      (l.getBroadcastEphemeralSettingForRecipient = m),
      (l.buildBroadcastRetryEphemeral = p));
  },
  98,
);
