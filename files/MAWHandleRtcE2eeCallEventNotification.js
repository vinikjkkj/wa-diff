__d(
  "MAWHandleRtcE2eeCallEventNotification",
  [
    "FBLogger",
    "MAWEphemeralSettingsCache",
    "MAWRTCCallEventUtils",
    "WAArmadilloApplication.pb",
    "WAArmadilloXMA.pb",
    "WABuildMpsPayload",
    "WALogger",
    "WAMPSFlushable",
    "WAMsgApplication.pb",
    "WAStanzaUtils",
    "asyncToGeneratorRuntime",
    "encodeProtobuf",
    "getErrorSafe",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["makeAck"],
      s,
      u = o("WALogger").DEV(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "handleRtcE2eeCallEventNotification:",
          ])),
      ),
      c = (function () {
        var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.makeAck,
            a = babelHelpers.objectWithoutPropertiesLoose(t, e);
          try {
            o("MAWRTCCallEventUtils").logXMAEvent(a);
            var i = r("gkx")("19746");
            if (a.call.callEventEventType === "started" && !i) return n();
            var l;
            try {
              l = yield d(a);
            } catch (e) {
              return (
                u.devConsole(
                  "Failed to build protobuf from RTC call event notification",
                ),
                n()
              );
            }
            var s =
                i &&
                a.call.callEventEventType !== "started" &&
                a.call.callEventParentId != null
                  ? o("WAStanzaUtils").toStanzaId(a.call.callEventParentId)
                  : a.id,
              c = o("WABuildMpsPayload").buildMpsMessage(
                { encryptedTransportMessage: l },
                {
                  externalId: s,
                  senderJid: a.call.from,
                  serverTs: a.serverTs,
                  threadId: a.call.callEventJid,
                },
              );
            return (
              o("WAMPSFlushable").mpsFlushable.enqueue(
                c,
                function (e) {
                  e != null &&
                    u.devConsole("Failed to save call XMA: " + e.toString());
                },
                "handle_rtc_e2ee_call_event_notification",
              ),
              n()
            );
          } catch (e) {
            var m = r("getErrorSafe")(e);
            return (
              r("FBLogger")("messenger_e2ee_web")
                .catching(m)
                .mustfix("Failed to handle RTC call event notification"),
              n()
            );
          }
        });
        return function (n) {
          return t.apply(this, arguments);
        };
      })();
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.call,
            n = t.callEventCallType,
            r = t.callEventEventType,
            a = t.callEventJid,
            i = o("MAWRTCCallEventUtils").isGroupCallEvent(a),
            l = o("MAWRTCCallEventUtils").getTargetTypeFromRTCCallEvent(
              n,
              r,
              i,
            ),
            s = o(
              "MAWRTCCallEventUtils",
            ).buildRTCCallXmaDataclassFromRTCCallEvent(e, l),
            u = p(l, JSON.stringify(s)),
            c = o("encodeProtobuf")
              .encodeProtobuf(o("WAArmadilloApplication.pb").ArmadilloSpec, u)
              .readBuffer(),
            d = o("MAWEphemeralSettingsCache").getEphemeralSettingCache(a),
            m = {
              metadata: {
                chatEphemeralSetting: d && {
                  ephemeralExpiration: d.ephemeralExpirationInSec,
                  ephemeralSettingTimestamp:
                    d.ephemeralLastUpdatedOrSetTimestamp * 1e3,
                },
                forwardingScore: void 0,
                frankingKey: void 0,
                frankingVersion: void 0,
                groupId: void 0,
                groupIndex: void 0,
                groupSize: void 0,
                isForwarded: !1,
                quotedMessage: void 0,
                secondaryOtid: void 0,
              },
              payload: {
                subProtocol: { armadillo: { payload: c, version: 1 } },
              },
            };
          return o("encodeProtobuf")
            .encodeProtobuf(o("WAMsgApplication.pb").MessageApplicationSpec, m)
            .readBuffer();
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
      var n = {
        payload: {
          content: {
            extendedContentMessage: {
              commands: [],
              ctas: [],
              mentionedJid: void 0,
              overlayIconGlyph:
                o("WAArmadilloXMA.pb")
                  .EXTENDED_CONTENT_MESSAGE_OVERLAY_ICON_GLYPH.NONE,
              previews: [],
              targetId: void 0,
              targetType: e,
              xmaDataclass: t,
              xmaLayoutType:
                o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_XMA_LAYOUT_TYPE
                  .SINGLE,
            },
          },
        },
      };
      return n;
    }
    l.handleRtcE2eeCallEventNotification = c;
  },
  98,
);
