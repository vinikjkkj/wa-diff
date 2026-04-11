__d(
  "WAWebParseLocationMessageProto",
  ["WALongInt", "WAWebE2EProtoParserApi", "WAWebE2EProtoUtils", "WAWebMsgType"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n,
        r,
        a =
          ((n = e.name) != null ? n : "") || ((r = e.address) != null ? r : "");
      e.name != null &&
        e.name !== "" &&
        e.address != null &&
        e.address !== "" &&
        (a = e.name + "\n" + e.address);
      var i = e.degreesLatitude !== void 0 ? e.degreesLatitude : void 0,
        l = e.degreesLongitude !== void 0 ? e.degreesLongitude : void 0,
        s = babelHelpers.extends({}, t, {
          type: o("WAWebMsgType").MSG_TYPE.LOCATION,
          kind: o("WAWebMsgType").MsgKind.Location,
          loc: a,
          lat: i,
          lng: l,
          body: o("WAWebE2EProtoParserApi").decodeBytes(e.jpegThumbnail) || "",
          clientUrl: e.url,
        });
      return { msgData: s, contextInfo: e.contextInfo };
    }
    function s(e, t, n) {
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
    function u(t) {
      var n = t.baseMessage,
        r = t.finalLocation,
        o = t.messageProtobuf,
        a = o.liveLocationMessage,
        i = o.locationMessage,
        l = null;
      return (i != null && (l = e(i, n)), a != null && (l = s(a, n, r)), l);
    }
    l.default = u;
  },
  98,
);
