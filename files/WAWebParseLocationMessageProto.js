__d(
  "WAWebParseLocationMessageProto",
  [
    "WALongInt",
    "WAWebE2EProtoParserApi",
    "WAWebE2EProtoUtils",
    "WAWebHandleMsgError",
    "WAWebMsgType",
    "WAWebWamEnumE2eFailureReason",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 256,
      s = 1024,
      u = 8192,
      c = 90,
      d = 180;
    function m(e, t) {
      return Array.from((e != null ? e : "").slice(0, t * 2))
        .slice(0, t)
        .join("");
    }
    function p(t, n) {
      if (!_(t.degreesLatitude, c) || !_(t.degreesLongitude, d))
        throw new (o("WAWebHandleMsgError").MessageValidationError)(
          "location: coordinates out of range",
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      var r = m(t.name, e),
        a = m(t.address, s),
        i = r !== "" && a !== "" ? r + "\n" + a : r || a,
        l = t.url,
        p = t.degreesLatitude !== void 0 ? t.degreesLatitude : void 0,
        f = t.degreesLongitude !== void 0 ? t.degreesLongitude : void 0,
        g = babelHelpers.extends({}, n, {
          type: o("WAWebMsgType").MSG_TYPE.LOCATION,
          kind: o("WAWebMsgType").MsgKind.Location,
          loc: i,
          lat: p,
          lng: f,
          body: o("WAWebE2EProtoParserApi").decodeBytes(t.jpegThumbnail) || "",
          clientUrl: l != null && l.length <= u ? l : void 0,
        });
      return { msgData: g, contextInfo: t.contextInfo };
    }
    function _(e, t) {
      return e == null || (Number.isFinite(e) && Math.abs(e) <= t);
    }
    function f(e, t, n) {
      var r;
      n &&
        (r = {
          finalLat: n.degreesLatitude,
          finalLng: n.degreesLongitude,
          finalThumbnail:
            o("WAWebE2EProtoParserApi").decodeBytes(n.jpegThumbnail) || "",
          finalAccuracy: n.accuracyInMeters,
          finalSpeed: n.speedInMps,
          finalDegrees: n.degreesClockwiseFromMagneticNorth,
          finalTimeOffset: n.timeOffset,
        });
      var a = babelHelpers.extends({}, t, r, {
        type: o("WAWebMsgType").MSG_TYPE.LOCATION,
        kind: o("WAWebMsgType").MsgKind.LocationLive,
        isLive: !0,
        lat: e.degreesLatitude,
        lng: e.degreesLongitude,
        body: o("WAWebE2EProtoParserApi").decodeBytes(e.jpegThumbnail) || "",
        accuracy: e.accuracyInMeters,
        speed: e.speedInMps,
        degrees: e.degreesClockwiseFromMagneticNorth,
        comment: o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(
          e.caption,
        ),
        sequence: o("WALongInt").maybeNumberOrThrowIfTooLarge(e.sequenceNumber),
      });
      return { msgData: a, contextInfo: e.contextInfo };
    }
    function g(e) {
      var t = e.baseMessage,
        n = e.finalLocation,
        r = e.messageProtobuf,
        o = r.liveLocationMessage,
        a = r.locationMessage,
        i = null;
      return (a != null && (i = p(a, t)), o != null && (i = f(o, t, n)), i);
    }
    l.default = g;
  },
  98,
);
